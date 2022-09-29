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
					<pointLight position={[10, 10, 10]} intensity={0.2} />
					<ambientLight intensity={0.1} />
					{/* <OrbitControls /> */}
				</Suspense>
			</Canvas>
		</div>
	 );
}

export default RotatingHead; 