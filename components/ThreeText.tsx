import { ThreeElements, extend } from "@react-three/fiber";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import roboto from "../assets/fonts/Roboto_Regular.json";
import { useRef } from "react";

extend({ TextGeometry });

const ThreeText = (props: ThreeElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);
  const font = new FontLoader().parse(roboto);

  return (
    <mesh {...props} ref={ref}>
      <textGeometry args={["test", { font, size: 3, height: 1 }]} />
      <meshPhysicalMaterial attach="material" color="black" />
    </mesh>
  );
};

export default ThreeText;
