"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function SpaSanctuaryScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check WebGL support
    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl") ||
        testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Check reduced motion preference
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setPrefersReducedMotion(true);
        return;
      }
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;

    try {
      // Scene & Camera
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#141110");
      scene.fog = new THREE.Fog("#141110", 3, 9);

      const width = container.clientWidth || 600;
      const height = container.clientHeight || 450;
      const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 20);
      camera.position.set(0, 0.4, 5);

      // Renderer with low DPR cap for optimal performance
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

      // Lighting: Warm ambient & candle/lantern golden accents
      const ambientLight = new THREE.AmbientLight("#F7F3EC", 0.7);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight("#F5E8D0", 1.2);
      dirLight.position.set(4, 5, 3);
      scene.add(dirLight);

      const pointGold = new THREE.PointLight("#AD8D5B", 1.5, 8);
      pointGold.position.set(-3, 1, 2);
      scene.add(pointGold);

      const pointChampagne = new THREE.PointLight("#D8C19A", 0.9, 5);
      pointChampagne.position.set(0, -1, 1);
      scene.add(pointChampagne);

      // --- 1. Zen Stone Stack (Basalt & Gold Leaf disc) ---
      const stoneGroup = new THREE.Group();
      stoneGroup.position.set(0, -0.6, 0);
      scene.add(stoneGroup);

      const stoneMaterial = new THREE.MeshStandardMaterial({
        color: 0x24201d,
        roughness: 0.85,
        metalness: 0.1,
      });

      const goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xad8d5b,
        roughness: 0.35,
        metalness: 0.8,
      });

      // Base Pedestal Stone
      const baseGeo = new THREE.CylinderGeometry(1.6, 1.9, 0.45, 32);
      const baseMesh = new THREE.Mesh(baseGeo, stoneMaterial);
      stoneGroup.add(baseMesh);

      // Second Tier Stone
      const tier2Geo = new THREE.CylinderGeometry(1.2, 1.45, 0.4, 32);
      const tier2Mesh = new THREE.Mesh(tier2Geo, stoneMaterial);
      tier2Mesh.position.set(0.1, 0.45, 0.05);
      stoneGroup.add(tier2Mesh);

      // Gold Leaf Inlay Disc
      const goldDiscGeo = new THREE.CylinderGeometry(0.95, 0.95, 0.04, 32);
      const goldDiscMesh = new THREE.Mesh(goldDiscGeo, goldMaterial);
      goldDiscMesh.position.set(0.1, 0.68, 0.05);
      stoneGroup.add(goldDiscMesh);

      // Third Tier River Pebble
      const tier3Geo = new THREE.SphereGeometry(0.65, 32, 24);
      const tier3Mesh = new THREE.Mesh(tier3Geo, stoneMaterial);
      tier3Mesh.position.set(-0.05, 0.9, 0);
      stoneGroup.add(tier3Mesh);

      // Top Keystone
      const topGeo = new THREE.SphereGeometry(0.38, 28, 20);
      const topMesh = new THREE.Mesh(topGeo, stoneMaterial);
      topMesh.position.set(0, 1.6, 0);
      stoneGroup.add(topMesh);

      // --- 2. Minimal Architectural Arches ---
      const archGroup = new THREE.Group();
      archGroup.position.set(0, 0.5, -1.8);
      scene.add(archGroup);

      const archMaterial = new THREE.MeshStandardMaterial({
        color: 0xd8c19a,
        roughness: 0.6,
        metalness: 0.25,
        transparent: true,
        opacity: 0.45,
      });

      const outerArchGeo = new THREE.TorusGeometry(2.4, 0.06, 24, 64, Math.PI);
      const outerArchMesh = new THREE.Mesh(outerArchGeo, archMaterial);
      archGroup.add(outerArchMesh);

      const innerArchGeo = new THREE.TorusGeometry(1.9, 0.03, 16, 48, Math.PI);
      const innerArchMesh = new THREE.Mesh(innerArchGeo, archMaterial);
      innerArchMesh.position.set(0, 0, -0.2);
      archGroup.add(innerArchMesh);

      // --- 3. Incense & Golden Sanctuary Dust Motes ---
      const particleCount = 70;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      }
      particleGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const particleMat = new THREE.PointsMaterial({
        color: 0xd8c19a,
        size: 0.06,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const particlePoints = new THREE.Points(particleGeo, particleMat);
      scene.add(particlePoints);

      // Mouse Parallax
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetX = x * 0.4;
        targetY = -y * 0.3;
      };

      container.addEventListener("mousemove", handleMouseMove);

      // Handle Resize
      const handleResize = () => {
        if (!container || !renderer) return;
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      };

      window.addEventListener("resize", handleResize);

      // Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Subtle zen stone sway
        stoneGroup.rotation.y = Math.sin(elapsedTime * 0.15) * 0.08;
        topMesh.position.y = 1.6 + Math.sin(elapsedTime * 0.8) * 0.04;

        // Architectural arch subtle breath
        archGroup.position.y = 0.5 + Math.sin(elapsedTime * 0.2) * 0.05;

        // Upward drift of golden embers
        const posArray = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          const idx = i * 3 + 1;
          posArray[idx] += 0.003;
          if (posArray[idx] > 3) {
            posArray[idx] = -3;
          }
        }
        particleGeo.attributes.position.needsUpdate = true;
        particlePoints.rotation.y = elapsedTime * 0.04;

        // Smooth camera dampening
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;
        camera.position.x = mouseX;
        camera.position.y = 0.4 + mouseY;
        camera.lookAt(0, 0.2, 0);

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", handleResize);
        container.removeEventListener("mousemove", handleMouseMove);

        // Proper resource disposal
        baseGeo.dispose();
        tier2Geo.dispose();
        goldDiscGeo.dispose();
        tier3Geo.dispose();
        topGeo.dispose();
        outerArchGeo.dispose();
        innerArchGeo.dispose();
        particleGeo.dispose();

        stoneMaterial.dispose();
        goldMaterial.dispose();
        archMaterial.dispose();
        particleMat.dispose();

        if (renderer) {
          renderer.dispose();
        }
      };
    } catch (e) {
      console.warn("WebGL initialization fallback:", e);
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL || prefersReducedMotion) {
    return (
      <div className="relative w-full h-full min-h-[420px] rounded-[24px] overflow-hidden bg-espresso">
        <img
          src="/gallery/spa-interior-2.jpeg"
          alt="ARA Spa Jubilee Hills Sanctuary"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[420px] rounded-[24px] overflow-hidden bg-gradient-to-b from-[#1C1816] via-[#141110] to-[#0E0C0B]"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Subtle Vignette & Legend */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-espresso/80 via-transparent to-espresso/30" />
      <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-champagne/70 font-sans pointer-events-none">
        <span>Architectural Sanctuary</span>
        <span>Jubilee Hills • Hyderabad</span>
      </div>
    </div>
  );
}
