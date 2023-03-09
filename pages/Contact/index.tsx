import dynamic from "next/dynamic";

const SmokeBackgroundNoSSR = dynamic(
  () => import("../../components/background/CanvasSmoke"),
  { ssr: false }
);

function Index() {
  return (
    <>
      <SmokeBackgroundNoSSR />
      <div className="absolute w-full h-full flex flex-col items-center justify-center font-mono italic gap-4">
        <a className="underline" href="mailto:hello@celest.in">
          hello@celest.in
        </a>
        <a className="underline" href="https://www.instagram.com/cele_stin">
          insta
        </a>
        <a className="underline" href="https://www.github.com/backslash-zero">
          github
        </a>
      </div>
    </>
  );
}

export default Index;
