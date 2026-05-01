"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x090b14, 8, 28);

    const camera = new THREE.PerspectiveCamera(
      52,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.2, 12);

    scene.add(new THREE.AmbientLight(0xffffff, 0.22));

    const key = new THREE.PointLight(0x7dd3fc, 0.75, 40);
    key.position.set(-4, 4, 8);
    scene.add(key);

    const rim = new THREE.PointLight(0xfb7185, 0.6, 40);
    rim.position.set(5, 2, 6);
    scene.add(rim);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(60, 60),
      new THREE.MeshStandardMaterial({ color: 0x0b1020, roughness: 0.95, metalness: 0.1 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -3.2;
    scene.add(floor);

    const columns: THREE.Mesh[] = [];
    const panelGeometry = new THREE.BoxGeometry(1.2, 5.8, 0.3);
    for (let i = 0; i < 11; i++) {
      const material = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x13203a : 0x0f1a31,
        roughness: 0.22,
        metalness: 0.82,
        transparent: true,
        opacity: 0.42,
      });
      const panel = new THREE.Mesh(panelGeometry, material);
      panel.position.set((i - 5) * 2.15, -0.2 + Math.sin(i) * 0.2, -1.4 - Math.abs(i - 5) * 0.36);
      panel.rotation.y = (i - 5) * 0.08;
      panel.rotation.x = 0.05;
      scene.add(panel);
      columns.push(panel);
    }

    const rings: THREE.Mesh[] = [];
    const ringGeometry = new THREE.TorusGeometry(2.4, 0.07, 14, 84);
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(
        ringGeometry,
        new THREE.MeshBasicMaterial({
          color: i === 1 ? 0xf472b6 : 0x7dd3fc,
          transparent: true,
          opacity: 0.16,
        })
      );
      ring.position.set(i * 2.4 - 2.4, 1.4 + i * 0.6, -4.2 - i * 1.1);
      ring.rotation.x = Math.PI / 2.8;
      scene.add(ring);
      rings.push(ring);
    }

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 0.9;
      mouse.ty = -(e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let raf: number;
    let t = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      t += 0.008;

      columns.forEach((panel, idx) => {
        panel.position.y = -0.25 + Math.sin(t + idx * 0.45) * 0.2;
        panel.rotation.y += 0.0012 * (idx % 2 === 0 ? 1 : -1);
      });

      rings.forEach((ring, idx) => {
        ring.rotation.z += 0.0025 + idx * 0.0008;
      });

      mouse.x += (mouse.tx - mouse.x) * 0.035;
      mouse.y += (mouse.ty - mouse.y) * 0.035;
      camera.position.x = mouse.x;
      camera.position.y = 1.2 + mouse.y;
      camera.lookAt(0, 0.2, -1.8);

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      panelGeometry.dispose();
      ringGeometry.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
