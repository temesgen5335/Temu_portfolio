// // components/ThreeDScene.tsx
// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef } from "react";
// import { Mesh } from "three";
// import { OrbitControls } from "@react-three/drei";

// function RotatingCube() {
//   const meshRef = useRef<Mesh | null>(null);

//   useFrame((state, delta) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += delta;
//       meshRef.current.rotation.y += delta;
//     }
//   });

//   return (
//     <mesh ref={meshRef} position={[0, 0, 0]}>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshStandardMaterial color="#bf40bf" emissive="#ff00ff" emissiveIntensity={0.5} />
//     </mesh>
//   );
// }

// export default function ThreeDScene() {
//   return (
//     <Canvas className="w-full h-full">
//       <ambientLight intensity={0.3} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <RotatingCube />
//       <OrbitControls enableZoom={false} />
//     </Canvas>
//   );
// }

// // // components/ThreeDScene.tsx (update)
// // import BrainModel from "./BrainModel";

// // function RotatingBrain() {
// //   const groupRef = useRef<any>(null);
// //   useFrame((state, delta) => {
// //     if (groupRef.current) {
// //       groupRef.current.rotation.y += delta * 0.5;
// //     }
// //   });
// //   return (
// //     <group ref={groupRef}>
// //       <BrainModel scale={0.5} position={[0, 0, 0]} />
// //     </group>
// //   );
// // }
