import dynamic from "next/dynamic";
import CanvasSmoke from "../components/background/CanvasSmoke";
import AppHead from "../components/head/AppHead";
import MainLayout from "../components/layouts/MainLayout";

const SmokeBackgroundNoSSR = dynamic(
  () => import("../components/background/CanvasSmoke"),
  { ssr: false }
);

const Custom404 = () => {
  return (
    <>
      <SmokeBackgroundNoSSR />
      <div className="w-full h-full absolute flex flex-col items-center justify-center">
        <h1 className="text-5xl">404</h1>
        <p>Nothing here 😭</p>
      </div>
    </>
  );
};

export default Custom404;
