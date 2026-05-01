"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Project, ProjectAccent } from "@/lib/projects";

const FRAME_W = 2.35;
const FRAME_H = 1.5;
const BEZEL = 0.062;
const DEPTH = 0.088;

const FRAME_CFG = [
  { x: -3.55, y: -0.05, z: -0.3, ry: 0.3 },
  { x: 0,     y:  0.1,  z:  0.4, ry: 0 },
  { x:  3.55, y: -0.05, z: -0.3, ry: -0.3 },
] as const;

const ACCENT_HEX: Record<ProjectAccent, number> = {
  emerald: 0x34d399,
  violet:  0xa78bfa,
  cyan:    0x22d3ee,
  amber:   0xfbbf24,
};

export function ThreeGallery({ projects }: { projects: Project[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeRef = useRef<number>(1);
  const [activeIdx, setActiveIdx] = useState<number>(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Renderer ────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    const getSize = () => ({ w: canvas.offsetWidth, h: canvas.offsetHeight });
    const { w, h } = getSize();
    renderer.setSize(w, h);

    // ── Scene & Camera ───────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050508, 0.024);

    const camera = new THREE.PerspectiveCamera(52, w / h, 0.1, 60);
    camera.position.set(0, 1.0, 9.5);
    camera.lookAt(0, 0.1, 0);

    // ── Lights ───────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.14));
    const hemi = new THREE.HemisphereLight(0x1a1828, 0x050508, 0.28);
    scene.add(hemi);

    // Fill light from front-low
    const fill = new THREE.PointLight(0x3020ff, 0.25, 20);
    fill.position.set(0, -3, 4);
    scene.add(fill);

    // ── Frames ───────────────────────────────────────────
    const frameGroups: THREE.Group[] = [];
    const hitMeshes: THREE.Mesh[] = [];
    const glowMats: THREE.MeshBasicMaterial[] = [];
    const yCurrents: number[] = FRAME_CFG.map(c => c.y);
    const yTargets: number[]  = [...yCurrents];

    const loader = new THREE.TextureLoader();

    projects.forEach((project, i) => {
      const cfg = FRAME_CFG[i];
      const group = new THREE.Group();
      group.position.set(cfg.x, cfg.y, cfg.z);
      group.rotation.y = cfg.ry;

      // Screen image plane
      const tex = loader.load(project.image);
      tex.colorSpace = THREE.SRGBColorSpace;
      const screenMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.1, metalness: 0.05 });
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(FRAME_W, FRAME_H), screenMat);
      screen.position.z = DEPTH * 0.5 + 0.001;
      screen.castShadow = true;
      group.add(screen);

      // Bezel / frame border (4 bars)
      const accentHex = ACCENT_HEX[project.accent];
      const bezelMat = new THREE.MeshStandardMaterial({
        color: 0x0e0e1a,
        roughness: 0.22,
        metalness: 0.88,
        emissive: new THREE.Color(accentHex).multiplyScalar(0.04),
      });

      const hw = FRAME_W / 2;
      const hh = FRAME_H / 2;
      const bars: [number, number, number, number][] = [
        [FRAME_W + BEZEL * 2, BEZEL, 0,          hh + BEZEL * 0.5],
        [FRAME_W + BEZEL * 2, BEZEL, 0,         -(hh + BEZEL * 0.5)],
        [BEZEL, FRAME_H + BEZEL * 2, -(hw + BEZEL * 0.5), 0],
        [BEZEL, FRAME_H + BEZEL * 2,  (hw + BEZEL * 0.5), 0],
      ];
      bars.forEach(([bw, bh, bx, by]) => {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, DEPTH), bezelMat);
        bar.position.set(bx, by, 0);
        bar.castShadow = true;
        group.add(bar);
      });

      // Back panel (the "body" of the frame)
      const backMat = new THREE.MeshStandardMaterial({ color: 0x0b0b16, roughness: 0.55, metalness: 0.6 });
      const back = new THREE.Mesh(new THREE.BoxGeometry(FRAME_W + BEZEL * 2, FRAME_H + BEZEL * 2, DEPTH), backMat);
      back.position.z = 0;
      back.castShadow = true;
      group.add(back);

      // Accent glow bloom (additive plane behind)
      const glowMat = new THREE.MeshBasicMaterial({
        color: accentHex,
        transparent: true,
        opacity: i === 1 ? 0.14 : 0, // center starts active
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      glowMats.push(glowMat);
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(FRAME_W * 1.9, FRAME_H * 1.9), glowMat);
      glow.position.z = -DEPTH * 0.5 - 0.01;
      group.add(glow);

      // Invisible hit target for raycasting
      const hitMat = new THREE.MeshBasicMaterial({ visible: false, side: THREE.FrontSide });
      const hit = new THREE.Mesh(new THREE.PlaneGeometry(FRAME_W + BEZEL * 2, FRAME_H + BEZEL * 2), hitMat);
      hit.position.z = DEPTH * 0.5 + 0.05;
      hit.userData.idx = i;
      hitMeshes.push(hit);
      group.add(hit);

      // Per-frame spotlight from above
      const spot = new THREE.SpotLight(0xfff4e0, 1.1, 18, Math.PI / 5.5, 0.52, 1.8);
      spot.position.set(cfg.x, 7, cfg.z + 1.6);
      spot.target = group;
      spot.castShadow = false;
      scene.add(spot);
      scene.add(spot.target);

      // Edge rim light (accent colored)
      const rim = new THREE.PointLight(accentHex, 0.22, 6);
      rim.position.set(cfg.x, cfg.y, cfg.z - 0.5);
      scene.add(rim);

      frameGroups.push(group);
      scene.add(group);
    });

    // Lift center frame to match initial active state
    yCurrents[1] = FRAME_CFG[1].y + 0.45;

    // ── Shelf ────────────────────────────────────────────
    const shelfMat = new THREE.MeshStandardMaterial({ color: 0x0d0d1c, roughness: 0.72, metalness: 0.5 });
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(14.5, 0.055, 2.0), shelfMat);
    shelf.position.y = -(FRAME_H / 2 + BEZEL + 0.028 + 0.04);
    shelf.receiveShadow = true;
    scene.add(shelf);

    // Subtle shelf edge glow
    const edgeGlowMat = new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.07, depthWrite: false, blending: THREE.AdditiveBlending });
    const edgeGlow = new THREE.Mesh(new THREE.PlaneGeometry(14.5, 0.12), edgeGlowMat);
    edgeGlow.position.y = shelf.position.y + 0.03;
    edgeGlow.position.z = 1.0;
    edgeGlow.rotation.x = -Math.PI / 2;
    scene.add(edgeGlow);

    // Floor
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50),
      new THREE.MeshStandardMaterial({ color: 0x040408, roughness: 0.98 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.8;
    floor.receiveShadow = true;
    scene.add(floor);

    // ── Interaction ──────────────────────────────────────
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(0, 0);

    const toNDC = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return new THREE.Vector2(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1
      );
    };

    const onPointerMove = (e: PointerEvent) => {
      pointer.copy(toNDC(e.clientX, e.clientY));
    };

    const onPointerDown = (e: PointerEvent) => {
      const ndc = toNDC(e.clientX, e.clientY);
      raycaster.setFromCamera(ndc, camera);
      const hits = raycaster.intersectObjects(hitMeshes);
      if (hits.length) {
        const { idx } = hits[0].object.userData as { idx: number };
        const url = projects[idx].liveUrl;
        if (url) window.open(url, "_blank", "noopener,noreferrer");
      }
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerdown", onPointerDown);

    // ── Resize ───────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      const { w: nw, h: nh } = getSize();
      if (!nw || !nh) return;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    });
    ro.observe(canvas);

    // ── Tick ─────────────────────────────────────────────
    let raf: number;
    let time = 0;
    const cam = { x: { curr: 0, tgt: 0 }, y: { curr: 0, tgt: 0 } };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      time += 0.001;

      // Hover detection
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(hitMeshes);
      const hovered = hits.length ? (hits[0].object.userData.idx as number) : null;

      if (hovered !== null && hovered !== activeRef.current) {
        activeRef.current = hovered;
        setActiveIdx(hovered);
        canvas.style.cursor = "pointer";
      } else if (hovered === null) {
        canvas.style.cursor = "default";
      }

      // Animate frames
      frameGroups.forEach((g, i) => {
        const isActive = activeRef.current === i;
        yTargets[i] = FRAME_CFG[i].y + (isActive ? 0.45 : 0);
        yCurrents[i] += (yTargets[i] - yCurrents[i]) * 0.07;
        g.position.y = yCurrents[i];

        const targetOpacity = isActive ? 0.14 : 0;
        glowMats[i].opacity += (targetOpacity - glowMats[i].opacity) * 0.07;
      });

      // Camera idle drift + pointer parallax
      cam.x.tgt = Math.sin(time * 0.85) * 0.14 + pointer.x * 0.22;
      cam.y.tgt = pointer.y * 0.1;
      cam.x.curr += (cam.x.tgt - cam.x.curr) * 0.022;
      cam.y.curr += (cam.y.tgt - cam.y.curr) * 0.022;
      camera.position.x = cam.x.curr;
      camera.position.y = 1.0 + cam.y.curr;
      camera.lookAt(0, 0.1, 0);

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerdown", onPointerDown);
      ro.disconnect();
      renderer.dispose();
    };
  }, [projects]);

  const active = projects[activeIdx];

  return (
    <div className="gallery-wrap">
      <canvas ref={canvasRef} className="gallery-canvas" />

      {/* Bottom info overlay */}
      <div className="gallery-info-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            className="gallery-info"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="gallery-info-inner">
              <div className="gallery-info-left">
                <span className="gallery-info-category">{active.category}</span>
                <h2 className="gallery-info-title">{active.title}</h2>
                <p className="gallery-info-desc">{active.shortDescription}</p>
              </div>

              <div className="gallery-info-right">
                <div className="gallery-info-stack">
                  {active.techStack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="gallery-info-actions">
                  {active.liveUrl ? (
                    <Link href={active.liveUrl} target="_blank" rel="noopener noreferrer" className="gallery-btn-primary">
                      Visit ↗
                    </Link>
                  ) : null}
                  {active.githubUrl ? (
                    <Link href={active.githubUrl} target="_blank" rel="noopener noreferrer" className="gallery-btn-secondary">
                      GitHub
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hover hint */}
      <p className="gallery-hint">hover to explore · click to visit</p>
    </div>
  );
}
