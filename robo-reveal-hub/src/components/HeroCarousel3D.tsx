import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import teamPhotoImage from '@/assets/team-photo.jpg';
import roboticsLabImage from '@/assets/robotics-lab.jpg';
import aiHeroImage from '@/assets/ai-hero.jpg';
import neuralNetworkImage from '@/assets/neural-network.jpg';

// Add or change images here
const images = [
  teamPhotoImage,
  roboticsLabImage,
  aiHeroImage,
  neuralNetworkImage,
];

function CarouselItem({ texture, index, total }) {
  const meshRef = useRef();
  const angle = (index / total) * Math.PI * 2;
  const radius = 3;

  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  return (
    <mesh
      ref={meshRef}
      position={[x, 0, z]}
      rotation={[0, -angle, 0]}
    >
      <planeGeometry args={[2, 1.5]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

function Carousel() {
  const groupRef = useRef();
  const textures = useLoader(TextureLoader, images);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {textures.map((texture, i) => (
        <CarouselItem key={i} index={i} total={images.length} texture={texture} />
      ))}
    </group>
  );
}

export default function HeroCarousel3D() {
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [0, 0.5, 5], fov: 60 }}>
        <ambientLight intensity={1.5} />
        <Carousel />
      </Canvas>
    </Suspense>
  );
}