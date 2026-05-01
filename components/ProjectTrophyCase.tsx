"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { Project } from "@/lib/projects";

const FRAME_W = 2.6;
const FRAME_H = 1.55;

export function ProjectTrophyCase({ projects }: { projects: Project[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRef = useRef(0);
  const safeProjects = useMemo(() => projects.slice(0, 8), [projects]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || safeProjects.length === 0) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x090f1e, 8, 26);

    const camera = new THREE.PerspectiveCamera(48, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 2.1, 10.4);
    camera.lookAt(0, 1, 0);

    scene.add(new THREE.AmbientLight(0xe6f0ff, 0.5));
    const key = new THREE.DirectionalLight(0xffffff, 1);
    key.position.set(3, 8, 5);
    scene.add(key);

    const fill = new THREE.PointLight(0x60a5fa, 1.1, 30);
    fill.position.set(-4, 2.8, 6);
    scene.add(fill);

    const base = new THREE.Mesh(
      new THREE.BoxGeometry(14, 0.35, 4.2),
      new THREE.MeshStandardMaterial({ color: 0x0b1222, roughness: 0.75, metalness: 0.35 })
    );
    base.position.set(0, -0.2, 0.3);
    scene.add(base);

    const backWall = new THREE.Mesh(
      new THREE.BoxGeometry(14, 7, 0.35),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8, metalness: 0.2 })
    );
    backWall.position.set(0, 2.8, -1.6);
    scene.add(backWall);

    const shelfTop = new THREE.Mesh(
      new THREE.BoxGeometry(13, 0.22, 2.2),
      new THREE.MeshStandardMaterial({ color: 0x101a33, roughness: 0.62, metalness: 0.48 })
    );
    shelfTop.position.set(0, 3.6, 0.2);
    scene.add(shelfTop);

    const loader = new THREE.TextureLoader();
    const frameGroups: THREE.Group[] = [];
    const hitTargets: THREE.Mesh[] = [];

    safeProjects.forEach((project, idx) => {
      const arc = safeProjects.length === 1 ? 0 : idx / (safeProjects.length - 1) - 0.5;
      const row = idx % 2 === 0 ? 1.05 : 3.05;
      const z = idx % 2 === 0 ? 0.7 : 0.3;
      const x = arc * 10;
      const ry = -arc * 0.32;

      const group = new THREE.Group();
      group.position.set(x, row, z);
      group.rotation.y = ry;

      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(FRAME_W + 0.18, FRAME_H + 0.18, 0.16),
        new THREE.MeshStandardMaterial({ color: 0x0b1120, roughness: 0.44, metalness: 0.82 })
      );
      group.add(frame);

      const tex = loader.load(project.image);
      tex.colorSpace = THREE.SRGBColorSpace;
      const image = new THREE.Mesh(
        new THREE.PlaneGeometry(FRAME_W, FRAME_H),
        new THREE.MeshStandardMaterial({ map: tex, roughness: 0.22, metalness: 0.06 })
      );
      image.position.z = 0.09;
      group.add(image);

      const glow = new THREE.Mesh(
        new THREE.PlaneGeometry(FRAME_W * 1.6, FRAME_H * 1.6),
        new THREE.MeshBasicMaterial({
          color: 0x67e8f9,
          opacity: 0.05,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        })
      );
      glow.position.z = -0.08;
      group.add(glow);

      const hit = new THREE.Mesh(
        new THREE.PlaneGeometry(FRAME_W + 0.24, FRAME_H + 0.24),
        new THREE.MeshBasicMaterial({ visible: false })
      );
      hit.position.z = 0.16;
      hit.userData = { idx };
      hitTargets.push(hit);
      group.add(hit);

      frameGroups.push(group);
      scene.add(group);
    });

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(-2, -2);

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onPointerMove = (e: PointerEvent) => updatePointer(e.clientX, e.clientY);
    const onPointerLeave = () => {
      pointer.x = -2;
      pointer.y = -2;
      canvas.style.cursor = "default";
    };
    const onPointerDown = () => {
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(hitTargets);
      if (!hits.length) return;
      const idx = hits[0].object.userData.idx as number;
      const link = safeProjects[idx].liveUrl ?? safeProjects[idx].githubUrl;
      if (link) window.open(link, "_blank", "noopener,noreferrer");
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    canvas.addEventListener("pointerdown", onPointerDown);

    const resizeObserver = new ResizeObserver(() => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    });
    resizeObserver.observe(canvas);

    let raf = 0;
    let time = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      time += 0.008;

      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(hitTargets);
      const hovered = hits[0]?.object.userData.idx as number | undefined;
      if (hovered !== undefined) {
        if (hovered !== activeRef.current) {
          activeRef.current = hovered;
          setActiveIndex(hovered);
        }
        canvas.style.cursor = "pointer";
      } else {
        canvas.style.cursor = "default";
      }

      frameGroups.forEach((group, idx) => {
        const isActive = idx === (hovered ?? activeRef.current);
        const targetY = (idx % 2 === 0 ? 1.05 : 3.05) + (isActive ? 0.2 : 0);
        group.position.y += (targetY - group.position.y) * 0.08;
        group.rotation.y += Math.sin(time + idx) * 0.0009;
      });

      camera.position.x = Math.sin(time * 0.4) * 0.24;
      camera.position.y = 2.1 + Math.cos(time * 0.35) * 0.08;
      camera.lookAt(0, 1.9, 0);
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("pointerdown", onPointerDown);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, [safeProjects]);

  const active = safeProjects[activeIndex] ?? safeProjects[0];
  if (!active) return null;

  return (
    <section className="trophy-case" aria-label="3D project trophy case">
      <canvas ref={canvasRef} className="trophy-canvas" />
      <div className="trophy-info">
        <p className="trophy-category">{active.category}</p>
        <h2 className="trophy-title">{active.title}</h2>
        <p className="trophy-description">{active.shortDescription}</p>
      </div>
    </section>
  );
}
