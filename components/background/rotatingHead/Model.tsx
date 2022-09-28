import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface ModelProps {
	canvasWidth? : number
}

const Model = ( {canvasWidth} : ModelProps ) => {
	const gltf = useLoader(GLTFLoader, "./assets/gltf/celestin.glb");

	return (
	<>
		<primitive object={gltf.scene} scale={1} />
	</>
	);
}

export default Model;