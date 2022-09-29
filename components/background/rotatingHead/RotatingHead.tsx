import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MutableRefObject, Suspense, useEffect, useRef, useState } from "react";
import Model from "./Model";
import { Camera } from "three";


const RotatingHead = () => {
	return ( 
		<div className='absolute w-full h-full '>
			<Canvas className=''>
				<Suspense fallback={null}>
					<Model/>
					<pointLight position={[-20, 10, 10]} color={[0,0,255]}	intensity={0.01} />
					<pointLight position={[0, -10, 10]} color={[0,255,0]}	intensity={0.01} />
					<pointLight position={[20, 10, 10]} color={[255,0,0]}	intensity={0.01} />
					{/* <ambientLight intensity={1} /> */}
					{/* <OrbitControls /> */}
				</Suspense>
			</Canvas>
		</div>
	 );
}

export default RotatingHead; 