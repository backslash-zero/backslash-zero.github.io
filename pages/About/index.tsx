import dynamic from "next/dynamic";
import { useState } from "react";
import RotatingHead from "../../components/background/rotatingHead/RotatingHead";
import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";
import ContentWrapper from "../../components/layouts/ContentWrapper";
import BigLink from "../../components/links/bigLink";

const RotatingHeadNoSSR = dynamic(
  () => import("../../components/background/rotatingHead/RotatingHead"),
  {
    ssr: false,
  }
);

const SmokeBackgroundNoSSR = dynamic(
  () => import("../../components/background/CanvasSmoke"),
  { ssr: false }
);

const About = () => {
  const [material, setMaterial] = useState("default");
  return (
    <div className="w-full h-full ">
      <div className="absolute -z-10 w-full h-full bg-stone-100">
        {/* <SmokeBackgroundNoSSR /> */}
      </div>
      <ContentWrapper>
        <div className="w-full h-full flex  gap-8">
          {/* <div className="w-80 h-80">
            <RotatingHead material={material} />
          </div> */}
          <div
            className="w-full h-full
							flex flex-col gap-8
              font-sans font-light text-[4vh] md:text-[6vh]  text-stone-800 leading-relaxed"
          >
            <div className="flex flex-col gap-8">
              <p>
                I&apos;m Célestin, <br />a{" "}
                <a
                  className="font-serif italic"
                  onMouseEnter={() => {
                    setMaterial("lyon");
                  }}
                  onMouseLeave={() => {
                    setMaterial("default");
                  }}
                >
                  Lyon
                </a>
                –born,{" "}
                <a
                  className="font-serif italic"
                  onMouseEnter={() => {
                    setMaterial("berlin");
                  }}
                  onMouseLeave={() => {
                    setMaterial("default");
                  }}
                >
                  Berlin
                </a>
                –based, Designer, Developer and Media Artist. I am also a{" "}
                <a
                  className="underline underline-offset-8"
                  href="https://42.fr"
                >
                  42
                </a>{" "}
                alumni and I like to work with code, 3D, video, and photography.
              </p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                <BigLink
                  url="mailto:hello@celest.in"
                  content="hello@celest.in"
                />
                <BigLink
                  url="https://www.instagram.com/cele_stin"
                  content="insta"
                />
                <BigLink
                  url="https://www.github.com/backslash-zero"
                  content="github"
                />
                <BigLink url="/cv" content="cv" routerLink={true} />
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default About;
