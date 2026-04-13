import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, ContactShadows, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const ExtinguisherModel = () => {
  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#cc0000', 
    metalness: 0.8, 
    roughness: 0.2, 
    emissive: '#330000',
    emissiveIntensity: 0.2 
  }), []);
  
  const metalMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#222', 
    metalness: 1, 
    roughness: 0.1 
  }), []);

  const hoseMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#111',
    metalness: 0.1,
    roughness: 0.8
  }), []);

  // Create Hose Path
  const hosePath = useMemo(() => {
    const points = [];
    points.push(new THREE.Vector3(0.25, 1.6, 0)); // Start at valve
    points.push(new THREE.Vector3(1.0, 1.4, 0.5)); // Bend out
    points.push(new THREE.Vector3(1.2, 0, 0.8));   // Hang down
    points.push(new THREE.Vector3(0.8, -0.6, 0.6)); // End near nozzle
    return new THREE.CatmullRomCurve3(points);
  }, []);
  
  return (
    <group>
      {/* Main Body */}
      <mesh position={[0, 0, 0]} material={bodyMaterial} castShadow>
        <cylinderGeometry args={[0.8, 0.8, 2.5, 64]} />
      </mesh>
      <mesh position={[0, 1.25, 0]} material={bodyMaterial} castShadow>
        <sphereGeometry args={[0.8, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </mesh>
      <mesh position={[0, -1.25, 0]} material={bodyMaterial} castShadow>
        <sphereGeometry args={[0.8, 64, 64, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
      </mesh>
      
      {/* Detailed Top Parts */}
      <mesh position={[0, 1.6, 0]} material={metalMaterial}>
        <cylinderGeometry args={[0.2, 0.25, 0.4, 32]} />
      </mesh>

      {/* Handles */}
      <group position={[0, 1.8, 0]}>
        <mesh position={[0, 0.1, 0]} material={metalMaterial} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[0.3, 0.05, 1.2]} />
        </mesh>
        <mesh position={[0, 0.4, 0.2]} material={metalMaterial} rotation={[-0.4, 0, 0]}>
          <boxGeometry args={[0.2, 0.05, 0.9]} />
        </mesh>
      </group>

      {/* Realistic Hose */}
      <mesh material={hoseMaterial} castShadow>
        <tubeGeometry args={[hosePath, 64, 0.08, 16, false]} />
      </mesh>

      {/* Nozzle at the end of the hose */}
      <mesh position={[0.8, -0.85, 0.6]} rotation={[0.4, 0, -0.5]} material={metalMaterial} castShadow>
        <cylinderGeometry args={[0.08, 0.15, 0.6, 32]} />
      </mesh>

      {/* Pressure Gauge */}
      <group position={[0.4, 1.5, 0.6]} rotation={[0, 0.5, 0]}>
        <mesh material={metalMaterial}>
          <cylinderGeometry args={[0.18, 0.18, 0.08, 32]} />
        </mesh>
        <mesh position={[0, 0.05, 0]} rotation={[Math.PI/2, 0, 0]}>
          <circleGeometry args={[0.15, 32]} />
          <meshBasicMaterial color="white" />
        </mesh>
      </group>
    </group>
  );
};

const SmokeParticles = () => {
  return (
    <Sparkles 
      count={100} 
      scale={10} 
      size={6} 
      speed={0.4} 
      opacity={0.2} 
      color="#ff5500" 
    />
  );
};

const Hero3D = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="hero-canvas-container">
      <Canvas dpr={[1, 2]} shadows={{ type: THREE.PCFShadowMap }}>
        <PerspectiveCamera makeDefault position={[0, 0.5, isMobile ? 12 : 8]} fov={35} />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={3} 
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          enablePan={false}
          enableDamping={true}
        />
        
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#ff3300" />
        <rectAreaLight width={10} height={10} intensity={2} position={[0, 5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <ExtinguisherModel />
        </Float>
        
        <SmokeParticles />
        <Environment preset="night" />
        <ContactShadows position={[0, -2.8, 0]} opacity={0.6} scale={15} blur={2.5} far={5} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
