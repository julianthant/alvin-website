"use client";

import { useRef, useMemo, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ---------- Tree (trunk + canopy) ---------- */
function Tree({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null!);

  // Gentle continuous spin + scroll-linked rotation
  useFrame((_state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.15; // idle spin
    groupRef.current.rotation.y +=
      scrollProgress * 0.002 * Math.sin(Date.now() * 0.0005);
  });

  // Subtle scale-up as user scrolls (1 -> 1.12)
  const scale = 1 + scrollProgress * 0.12;

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
      <group ref={groupRef} scale={scale}>
        {/* Trunk */}
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.18, 0.25, 1.6, 8]} />
          <meshStandardMaterial color="#8B6914" roughness={0.85} />
        </mesh>

        {/* Main canopy sphere */}
        <mesh position={[0, 0.75, 0]}>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshStandardMaterial
            color="#7a9a7e"
            roughness={0.75}
            flatShading
          />
        </mesh>

        {/* Smaller accent sphere – right */}
        <mesh position={[0.55, 0.35, 0.3]}>
          <icosahedronGeometry args={[0.55, 1]} />
          <meshStandardMaterial
            color="#6d9170"
            roughness={0.78}
            flatShading
          />
        </mesh>

        {/* Smaller accent sphere – left */}
        <mesh position={[-0.5, 0.4, -0.25]}>
          <icosahedronGeometry args={[0.5, 1]} />
          <meshStandardMaterial
            color="#87a88a"
            roughness={0.78}
            flatShading
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ---------- Leaf particles ---------- */
function Leaves({
  count = 24,
  scrollProgress,
}: {
  count?: number;
  scrollProgress: number;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Pre-compute random offsets once
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 3,
        y: Math.random() * 2.5 - 0.3,
        z: (Math.random() - 0.5) * 3,
        speed: 0.3 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    const spread = 1 + scrollProgress * 0.5;

    for (let i = 0; i < count; i++) {
      const p = particles[i];
      dummy.position.set(
        p.x * spread + Math.sin(t * p.speed + p.phase) * 0.25,
        p.y + Math.sin(t * p.speed * 0.7 + p.phase) * 0.3,
        p.z * spread + Math.cos(t * p.speed + p.phase) * 0.25
      );
      dummy.scale.setScalar(0.03 + Math.sin(t + p.phase) * 0.01);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 4, 4]} />
      <meshStandardMaterial
        color="#94b897"
        roughness={0.9}
        transparent
        opacity={0.7}
      />
    </instancedMesh>
  );
}

/* ---------- Scene content ---------- */
function Scene({ scrollProgress }: { scrollProgress: number }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} />
      <directionalLight
        position={[-3, 4, -2]}
        intensity={0.3}
        color="#b8d4ba"
      />
      <Tree scrollProgress={scrollProgress} />
      <Leaves count={24} scrollProgress={scrollProgress} />
    </>
  );
}

/* ---------- Exported component ---------- */
export function HeroTree({ className }: { className?: string }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      // Normalise to 0-1 over the first viewport-height of scroll
      const y = window.scrollY;
      const vh = window.innerHeight;
      setScrollProgress(Math.min(y / vh, 1));
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={className}>
      <Suspense fallback={null}>
        <Canvas
          gl={{ alpha: true, antialias: true }}
          camera={{ position: [0, 0.5, 5], fov: 40 }}
          style={{ background: "transparent" }}
          dpr={[1, 1.5]}
        >
          <Scene scrollProgress={scrollProgress} />
        </Canvas>
      </Suspense>
    </div>
  );
}
