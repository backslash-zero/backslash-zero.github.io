import { MutableRefObject, useEffect, useRef } from "react";
import SmokeMachine from "@bijection/smoke";

const drawSmoke = (ctx: CanvasRenderingContext2D) => {
  const canvas = ctx.canvas;
  const smokeColor: number[] = [80, 80, 80];
  const ammountGenerators = 5;
  let ammountSmoke = (0.1 * canvas.width) / 500;
  const party = SmokeMachine(ctx, smokeColor);

  const options = {
    minLifetime: 8000,
    maxLifetime: 12000,
  };

  party.step(1000);
  party.start();
  party.setPreDrawCallback(() => {
    for (var i = 0; i <= ammountGenerators; i++) {
      party.addSmoke(
        (canvas.width / ammountGenerators) * i,
        canvas.height * 1.2,
        ammountSmoke,
        options
      );
    }
  });
};

const CanvasSmoke = () => {
  // Refer to HTML Canvas
  const canvasRef: MutableRefObject<HTMLCanvasElement> = useRef<any>();
  useEffect(() => {
    const ctx: CanvasRenderingContext2D | null =
      canvasRef.current.getContext("2d");
    if (ctx) {
      drawSmoke(ctx);
      // requestAnimationFrame(() => draw(ctx))
    }
    const handleResize = () => {
      if (ctx) {
        ctx.canvas.height = window.innerHeight;
        ctx.canvas.width = window.innerWidth;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup : remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute w-full h-full">
      <canvas className="w-full h-full" ref={canvasRef}></canvas>
    </div>
  );
};

export default CanvasSmoke;
