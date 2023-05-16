import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";

const RotatingHeadNoSSR = dynamic(
  () => import("../components/background/rotatingHead/RotatingHead"),
  {
    ssr: false,
  }
);

const SmokeBackgroundNoSSR = dynamic(
  () => import("../components/background/CanvasSmoke"),
  { ssr: false }
);

const Home: NextPage = () => {
  const [material, setMaterial] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative h-full w-full">
      <div className="absolute flex h-full w-full items-center justify-center">
        <div
          className={`aspect-square w-full max-w-lg ${
            !isVisible && "opacity-0"
          } transition-opacity duration-500`}
        >
          <RotatingHeadNoSSR material={material} />
        </div>
      </div>
      <div className="relative z-10 flex flex-col gap-8 text-5xl leading-relaxed">
        <p>
          I&apos;m{" "}
          <a
            className="cursor-help font-serif italic"
            onMouseEnter={() => {
              setMaterial("default");
              setIsVisible(true);
            }}
            onMouseLeave={() => {
              setIsVisible(false);
            }}
          >
            Célestin
          </a>
          ,<br />a{" "}
          <a
            className="cursor-help font-serif italic"
            onMouseEnter={() => {
              setMaterial("lyon");
              setIsVisible(true);
            }}
            onMouseLeave={() => {
              setIsVisible(false);
            }}
          >
            Lyon
          </a>
          –born,{" "}
          <a
            className="cursor-help font-serif italic"
            onMouseEnter={() => {
              setMaterial("berlin");
              setIsVisible(true);
            }}
            onMouseLeave={() => {
              setIsVisible(false);
            }}
          >
            Berlin
          </a>
          –based, Designer, Developer and Media Artist. I am also a{" "}
          <a className="underline underline-offset-8" href="https://42.fr">
            42
          </a>{" "}
          alumni and I like to work with code, 3D, video, and photography.{" "}
          <br />
          For more info, feel free to check my{" "}
          <Link className="underline underline-offset-8" href="/cv">
            CV
          </Link>
          , my{" "}
          <a
            className="underline underline-offset-8"
            href="https://drive.google.com/file/d/16lagiUJFyHKb_jqgqRL9rLaSilPmJSMc/view?usp=share_link"
          >
            portfolio
          </a>{" "}
          or contact me.
        </p>
      </div>
    </div>
  );
};

export default Home;
