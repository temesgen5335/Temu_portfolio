import { Object3DNode } from "@react-three/fiber";
import { Mesh } from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: Object3DNode<Mesh, typeof Mesh>;
    }
  }
}