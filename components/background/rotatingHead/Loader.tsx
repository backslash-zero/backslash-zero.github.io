import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <>
      <Html center className="font-mono text-8xl text-stone-500 z-0">
        {Math.trunc(progress)} %
      </Html>
    </>
  );
}

export default Loader;
