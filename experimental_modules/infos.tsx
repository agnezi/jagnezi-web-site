import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { NextPage } from "next";
import ThreeText from "../components/ThreeText";

const Infos: NextPage = () => {
  return (
    <>
      <Head>
        <title>About me!</title>
      </Head>

      <div>
        <header></header>
        <main>
          <Canvas camera={{ manual: true }}>
            <perspectiveCamera
              fov={75}
              aspect={4}
              near={0.1}
              far={5}
              position={[0, 0, 2]}
            />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <ThreeText />
            <mesh></mesh>
          </Canvas>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Infos;
