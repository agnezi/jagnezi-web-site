import * as THREE from "three";

import Head from "next/head";
import { NextPage } from "next";
import { useEffect } from "react";

const About: NextPage = () => {
  function main() {
    const canvas = document.getElementById("c");

    if (canvas) {
      const renderer = new THREE.WebGLRenderer({ canvas });

      const fov = 75; // angle of view
      const aspect = 2; // aspect
      const near = 0.1; // the near part of the object
      const far = 5; // the far part of the object

      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 2; // the initial camera position

      const scene = new THREE.Scene();
      const boxWidth = 1;
      const boxHeight = 1;
      const boxDepth = 1;

      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

      const makeInstanceOfPoint = (geometry: any, color: string, x: number) => {
        const material = new THREE.PointsMaterial({ color, size: 0.2 });

        const point = new THREE.Points(geometry, material);

        scene.add(point);

        point.position.x = x;

        return point;
      };

      const cubes = [
        makeInstanceOfPoint(geometry, "#44aa88", 0),
        makeInstanceOfPoint(geometry, "#8844aa", -2),
        makeInstanceOfPoint(geometry, "#aa8844", 2),
      ];

      const lightColor = "#FFFFFF";
      const lightItensity = 1;

      const light = new THREE.DirectionalLight(lightColor, lightItensity);
      light.position.set(-1, 2, 4);

      scene.add(light);

      const render = (time: number) => {
        time *= 0.001; //convert time to seconds

        const resizeRendererToDisplaySize = (renderer: THREE.WebGLRenderer) => {
          const canvas = renderer.domElement;
          const pixelRatio = window.devicePixelRatio;
          const width = (canvas.clientWidth * pixelRatio) | 0;
          const height = (canvas.clientHeight * pixelRatio) | 0;
          const needResize = canvas.width !== width || canvas.height !== height;

          if (needResize) {
            renderer.setSize(width, height, false);
          }

          return needResize;
        };

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        cubes.forEach((cube, ndx) => {
          const speed = 1 + ndx + 0.1;
          const rot = time * speed;

          cube.rotation.x = rot;
          cube.rotation.y = rot;
        });

        renderer.render(scene, camera);
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    }
  }

  useEffect(() => {
    main();
  }, []);

  return (
    <>
      <Head>
        <title>About me!</title>
      </Head>

      <div>
        <header></header>
        <main>
          <canvas id="c" className="w-full h-screen block"></canvas>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default About;
