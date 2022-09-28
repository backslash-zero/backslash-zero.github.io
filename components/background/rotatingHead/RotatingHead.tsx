import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MutableRefObject, Suspense, useEffect, useRef, useState } from "react";
import Model from "./Model";


const RotatingHead = () => {
	return ( 
		<div className='absolute w-full h-full '>
			<Canvas className='bg-blue-500/20'>
				<Suspense fallback={null}>
					<Model/>
					<pointLight  intensity={0.2} />
					<ambientLight intensity={0.2} />
				</Suspense>
			</Canvas>
		</div>
	 );
}

export default RotatingHead; 