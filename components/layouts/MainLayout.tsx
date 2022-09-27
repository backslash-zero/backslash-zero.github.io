import dynamic from "next/dynamic";
import { ReactComponentElement } from "react";

const SmokeBackgroundNoSSR = dynamic (
	() => import('../background/CanvasSmoke'),
	{ ssr: false }
)

const MainLayout = ({ children } : any ) => {
	return (  
		<div className="w-full h-full">
			<div className="absolute w-full h-full">
				<SmokeBackgroundNoSSR/>
			</div>
			<main className="absolute w-full h-full">
				{ children }
			</main>
		</div>
	);
}

export default MainLayout;