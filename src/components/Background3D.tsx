import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

function AnimatedSphere() {
  const meshRef = useRef();
  const [springs] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 200, friction: 50 },
  }));

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.sin(time / 2);
  });

  return (
    <animated.mesh ref={meshRef} scale={springs.scale}>
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#0077b6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </animated.mesh>
  );
}

const Background3D: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-50">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default Background3D;