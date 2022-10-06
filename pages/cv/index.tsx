
import { NextPage } from "next";
import { getInfos } from "../../lib/NotionCV";
// import { Databases } from "../../lib/NotionCV";


interface cvProps {
	infos : any[]
}

const cv = (props : cvProps) => {
	
	const infos = props.infos.map(
		(infoLine, idx) => {
			return (
				infoLine.checkbox.checkbox &&
				infoLine.link.url == null ?
				<div key={idx}> 
					<p>{ infoLine.value.rich_text[0].plain_text }</p>
				</div>
				:
				<div key={idx}> 
					<a href={infoLine.link.url}
						>{ infoLine.value.rich_text[0].plain_text }
					</a>
				</div>
			)
		}
	)

	return ( 
		<div className="w-full h-full absolute
						font-mono text-stone-800">
			{ infos }
		</div>
	 );
}

export async function getStaticProps() {
	// get infos
	let infos = await getInfos()

	return {
		props : {
			infos: infos
		}
	}
}

export default cv;

