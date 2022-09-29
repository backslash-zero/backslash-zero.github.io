import { MutableRefObject, useEffect, useRef } from "react";
import { deflateRaw } from "zlib";
import SmokeMachine from '@bijection/smoke'

const drawSmoke = (ctx : CanvasRenderingContext2D) => {
	const canvas = ctx.canvas;
	const smokeColor : number[] = [80, 80, 80]
	const ammount = 5;
	const party = SmokeMachine(ctx, smokeColor)
	
	party.step(1000)
	party.start()
	party.setPreDrawCallback(() => {
		for(var i=0; i<=ammount;i++){
				// party.addSmoke(x,y, ammount, options) 
				party.addSmoke((canvas.width/ammount) * i, canvas.height * 1.2, (Math.cos(i) + 2) * 0.1)
        }
    })
}

const CanvasSmoke = () => {
	// Refer to HTML Canvas
	const canvasRef : MutableRefObject<HTMLCanvasElement> = useRef<any>()
	useEffect(()=> {
		const ctx : CanvasRenderingContext2D | null = canvasRef.current.getContext("2d")
		if (ctx)
		{
			drawSmoke(ctx)
			// requestAnimationFrame(() => draw(ctx))
		}
		const handleResize = () => {
			if (ctx)
			{
				ctx.canvas.height = window.innerHeight;
      			ctx.canvas.width = window.innerWidth;
			}
		}
		handleResize()
		window.addEventListener("resize", handleResize)

		// Cleanup : remove event listener
		return (() => {
				window.removeEventListener("resize", handleResize)
			}
		);
	}, [])

	return (
		<>
			<canvas 
				className=""
				ref={canvasRef}>
			</canvas>
		</>
	);
}

export default CanvasSmoke;