import dynamic from "next/dynamic";
import { ReactComponentElement } from "react";

const SmokeBackgroundNoSSR = dynamic(
  () => import("../background/CanvasSmoke"),
  { ssr: false }
);

const SmokeLayout = ({ children }: any) => {
  return (
    <div className="w-full h-full bg-stone-200 underline-offset-8">
      <div className="absolute w-full h-full  print:hidden ">
        <SmokeBackgroundNoSSR />
      </div>
      <main className="absolute w-full h-full ">{children}</main>
    </div>
  );
};

export default SmokeLayout;
