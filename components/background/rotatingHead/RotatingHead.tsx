import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import ModelSimple from "./ModelSimple";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

interface RotatingHeadProps {
  material: string;
}

const RotatingHead = ({ material }: RotatingHeadProps) => {
  return (
    <div className="w-full h-full ">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <ModelSimple material={material}></ModelSimple>
          {/* <Model
						material={material}
					/> */}
          {material === "default" ? (
            <>
              <pointLight
                position={[-20, 10, 10]}
                color={[0, 0, 255]}
                intensity={0.01}
              />
              <pointLight
                position={[0, -10, 10]}
                color={[0, 255, 0]}
                intensity={0.01}
              />
              <pointLight
                position={[20, 10, 10]}
                color={[255, 0, 0]}
                intensity={0.01}
              />
            </>
          ) : (
            <>
              <pointLight
                position={[-20, 10, 10]}
                color={[255, 255, 255]}
                intensity={0.005}
              />
              <pointLight
                position={[0, -10, 10]}
                color={[255, 255, 255]}
                intensity={0.005}
              />
              <pointLight
                position={[20, 10, 10]}
                color={[255, 255, 255]}
                intensity={0.005}
              />
            </>
          )}
          {/* control field of view */}
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RotatingHead;
