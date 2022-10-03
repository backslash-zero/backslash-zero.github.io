import dynamic from "next/dynamic";
import { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import UnderConstruction from "../../components/tools/UnderConstruction";
import RotatingHead from "../../components/background/rotatingHead/RotatingHead";

const RotatingHeadNoSSR = dynamic (
	() => import('../../components/background/rotatingHead/RotatingHead'),
	{ 
		ssr: false 
	}
)

const About = () => {
	const [material, setMaterial] = useState("default");
	return (  
		<div className="w-full h-full">
			<NavBar back="/"/>
			<RotatingHead
				material={material}
			/>
			<div className="absolute w-full h-full 
							flex flex-col items-center justify-center
							p-4
							font-mono text-stone-100 leading-8">
				<p>I&apos;m Célestin, <br/>
				a <a
					className="font-extrabold"
					onMouseEnter={() => {setMaterial("lyon")}}
					onMouseLeave={() => {setMaterial("default")}}
					>Lyon</a>–born, <a
					className="font-extrabold"
					onMouseEnter={() => {setMaterial("berlin")}}
					onMouseLeave={() => {setMaterial("default")}}
					>Berlin</a>–based, Designer, Developer and Media Artist. <br/> 
				I just finished <a className="font-bold underline underline-offset-4" href="https://42.fr">42 School</a>. and I like to work with code, 3D, video, and photography.<br/>
				Contact: hello (at) celest.in</p>
			</div>
		</div>
	);
}

export default About;