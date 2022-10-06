import dynamic from "next/dynamic";
import { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import UnderConstruction from "../../components/tools/UnderConstruction";
import RotatingHead from "../../components/background/rotatingHead/RotatingHead";
import Link from "next/link";

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
				<div>
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
					I just finished the <i>common-core</i> of <a className="font-bold underline underline-offset-4" href="https://42.fr">42 School</a> and I like to work with code, 3D, video, and photography.<br/>
					Contact: hello (at) celest.in</p>
					<p><a className="font-bold underline underline-offset-4 hover:blur-sm" href="https://www.instagram.com/cele_stin">insta</a> <a className="font-bold underline underline-offset-4 hover:blur-sm" href="https://www.github.com/backslash-zero">github</a> <Link href="/cv"><a className="font-bold underline underline-offset-4 hover:blur-sm">cv</a></Link></p>
				</div>
				<div>
				</div>
			</div>
		</div>
	);
}

export default About;