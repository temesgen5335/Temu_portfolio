// components/BrainModel.tsx
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function BrainModel(props: any) {
  const { scene } = useGLTF("/assets/ai-brain.glb");
  return <primitive object={scene} {...props} />;
}
