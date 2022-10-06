
import { NextPage } from "next";
import { 
	getInfos,
	getSkillsLanguages, 
	getSkillsProg, 
	getSkillsTechs, 
	getSkillsSoft,
	getSkillsOther,
	getStudies,
	getPro,
	getOutside,
	getCodeProjects,
 } from "../../lib/NotionCV";
// import { Databases } from "../../lib/NotionCV";


interface cvProps {
	infos : any[],
	skillsLanguages: any[],
	skillsProg: any[],
	skillsTechs: any[],
	skillsSoft: any[],
	skillsOther: any[],
	studies: any[],
	pro: any[],
	outside: any[],
	codeprojects: any[],
}

const cv = (props : cvProps) => {

	console.log(props.studies)
	console.log(props.pro)
	console.log(props.outside)
	console.log(props.codeprojects)

	const infos = props.infos.map(
		(infoLine, idx) => {
			return (
				infoLine.checkbox.checkbox &&
				<div key={idx} className=""> 
				{
					infoLine.link.url == null ?
						<p>{ infoLine.value.rich_text[0].plain_text }</p>
					:
						<a  className="underline underline-offset-4"
							href={infoLine.link.url}
							>{ infoLine.value.rich_text[0].plain_text }
						</a>
				}
				</div>
			)
		}
	)

	const skillsLanguages = props.skillsLanguages.map(
		(infoLine, idx) => {
			return (
				<div key={idx}>
					<p>
						{
							idx !== props.skillsLanguages.length - 1 ? "├── " : "└── "
						}
						{ infoLine.Name.title[0].plain_text } : { infoLine.Value.rich_text[0].plain_text }</p>
				</div>
			)
		}
	)
	
	const skillsProg = props.skillsProg.map(
		(infoLine, idx) => {
			return (
				<div key={idx}>
					<p>
						{
							idx !== props.skillsProg.length - 1 ? "├── " : "└── "
						}
						{ infoLine.Name.title[0].plain_text } </p>
				</div>
			)
		}
	)
	
	const skillsTechs = props.skillsTechs.map(
		(infoLine, idx) => {
			return (
				<div key={idx}>
					<p>
						{
							idx !== props.skillsTechs.length - 1 ? "├── " : "└── "
						}
						{ infoLine.Name.title[0].plain_text } </p>
				</div>
			)
		}
	)
	
	const skillsSoft = props.skillsSoft.map(
		(infoLine, idx) => {
			return (
				<div key={idx}>
					<p>
						{
							idx !== props.skillsSoft.length - 1 ? "├── " : "└── "
						}
						{ infoLine.Name.title[0].plain_text } </p>
				</div>
			)
		}
	)
	
	const skillsOther = props.skillsOther.map(
		(infoLine, idx) => {
			return (
				<div key={idx}>
					<p>
						{
							idx !== props.skillsOther.length - 1 ? "├── " : "└── "
						}
						{ infoLine.Name.title[0].plain_text } </p>
				</div>
			)
		}
	)
	
	const Studies = props.studies.map(
		(infgoLine, idx) => {
			return (
				<div key="idx">

				</div>
			)
		}
	)
	const Pro = props.pro.map(
		(infgoLine, idx) => {
			return (
				<div key="idx">

				</div>
			)
		}
	)
	const Outside = props.outside.map(
		(infgoLine, idx) => {
			return (
				<div key="idx">

				</div>
			)
		}
	)
	const CodeProjects = props.codeprojects.map(
		(infgoLine, idx) => {
			return (
				<div key="idx">

				</div>
			)
		}
	)


	return ( 

		<div className="w-full h-full absolute overflow-scroll
						p-8
						flex flex-col gap-8
						font-mono text-stone-800">
			<div className="
				flex flex-col gap-4
			">
				<p className="">Célestin Meunier</p>
				{ infos }
			</div>
			<div className="
				flex flex-col gap-4
			">
				<div className="">
					<h3 className="" 
					>📁 Languages</h3>
					{ skillsLanguages  }
				</div>
				<div className="">
					<h3 className="" 
					>📁 Programming</h3>
					{ skillsProg }
				</div>
				<div className="">
					<h3 className="" 
					>📁 🤍 Technologies</h3>
					{ skillsTechs  }
				</div>
				<div className="">
					<h3 className="" 
					>📁 🤍 Software</h3>
					{ skillsSoft  }
				</div>
				<div className="">
					<h3 className="" 
					>Other</h3>
					{ skillsOther  }
				</div>
			</div>
			<div className="flex flex-col gap-4">

			</div>
		</div>
	 );
}

export async function getStaticProps() {
	// get infos
	let infos = await getInfos()
	let skillsLanguages = await getSkillsLanguages()
	let skillsProg = await getSkillsProg()
	let skillsTechs = await getSkillsTechs()
	let skillsSoft = await getSkillsSoft()
	let skillsOther = await getSkillsOther()
	let studies = await getStudies()
	let pro = await getPro()
	let outside = await getOutside()
	let codeprojects = await getCodeProjects()

	return {
		props : {
			infos: infos,
			skillsLanguages: skillsLanguages,
			skillsProg: skillsProg,
			skillsTechs: skillsTechs,
			skillsSoft: skillsSoft,
			skillsOther: skillsOther,
			studies: studies,
			pro: pro,
			outside: outside,
			codeprojects: codeprojects,
		}
	}
}

export default cv;

