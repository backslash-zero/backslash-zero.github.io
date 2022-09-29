import RotatingHead from "../../components/background/rotatingHead/RotatingHead";
import UnderConstruction from "../../components/tools/UnderConstruction";



const About = () => {
	return (  
		<div className="w-full h-full">
			<RotatingHead/>
			<div className="absolute w-full h-full 
							flex flex-col items-center justify-center
							p-4
							font-mono text-stone-100 leading-8">
				<p>I&apos;m Célestin, <br/>
				a Lyon-born, Berlin-based, Designer, Developer and Media Artist. <br/> 
				I like to work with code, 3D, video, and photography.<br/>
				Contact: hello (at) celest.in</p>
			</div>
		</div>
	);
}

export default About;