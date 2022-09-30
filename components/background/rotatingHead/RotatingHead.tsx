import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MutableRefObject, Suspense, useEffect, useRef, useState } from "react";
import Model from "./Model";
import { Camera } from "three";

interface RotatingHeadProps {
	material : string,
}


const RotatingHead = ({ material } : RotatingHeadProps) => {
	return ( 
		<div className='absolute w-full h-full '>
			<Canvas>
					{/* <Model
						material={material}
					/> */}
					{
						material === "default" ?
						<>
							<pointLight position={[-20, 10, 10]} color={[0,0,255]}	intensity={0.01} />
							<pointLight position={[0, -10, 10]} color={[0,255,0]}	intensity={0.01} />
							<pointLight position={[20, 10, 10]} color={[255,0,0]}	intensity={0.01} />
						</>
						:
						<>
							<pointLight position={[-20, 10, 10]} color={[255,255,255]}	intensity={0.005} />
							<pointLight position={[0, -10, 10]} color={[255,255,255]}	intensity={0.005} />
							<pointLight position={[20, 10, 10]} color={[255,255,255]}	intensity={0.005} />
						</>
					}
					{/* <OrbitControls /> */}
			</Canvas>
		</div>
	 );
}

export default RotatingHead; 