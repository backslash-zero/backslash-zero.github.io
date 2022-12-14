
import { NextPage } from "next";
import Info from "../../components/cv/cards/Info";
import Skill from "../../components/cv/cards/Skill";
import CardLayout from "../../components/layouts/CardLayout";
import SeparatorCV from "../../components/tools/SeparatorCV";
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

	const infos = props.infos.map(
		(infoLine) => {
			return (
				infoLine.checkbox.checkbox &&
				<Info key={infoLine.id} 
						url={infoLine.link.url} 
						content={infoLine.value.rich_text[0].plain_text}/>
			)
		}
	)

	const skillsLanguages = props.skillsLanguages.map(
		(infoLine, idx) => {
			return (
				<Skill 
					key={infoLine.id} 
					last={idx === props.skillsLanguages.length - 1} 
					content={ infoLine.Name.title[0].plain_text  + " : " + infoLine.Value.rich_text[0].plain_text }
				/>
			)
		}
	)
	
	const skillsProg = props.skillsProg.map(
		(infoLine, idx) => {
			return (
				<Skill 
					key={infoLine.id} 
					last={idx === props.skillsProg.length - 1} 
					content={ infoLine.Name.title[0].plain_text }
				/>
			)
		}
	)
	
	const skillsTechs = props.skillsTechs.map(
		(infoLine, idx) => {
			return (
				<Skill 
					key={infoLine.id} 
					last={idx === props.skillsTechs.length - 1} 
					content={ infoLine.Name.title[0].plain_text }
				/>
			)
		}
	)
	
	const skillsSoft = props.skillsSoft.map(
		(infoLine, idx) => {
			return (
				<Skill 
					key={infoLine.id} 
					last={idx === props.skillsSoft.length - 1} 
					content={ infoLine.Name.title[0].plain_text }
				/>
			)
		}
	)
	
	const skillsOther = props.skillsOther.map(
		(infoLine, idx) => {
			return (
				<Skill 
					key={infoLine.id} 
					last={idx === props.skillsOther.length - 1} 
					content={ infoLine.Name.title[0].plain_text }
				/>
			)
		}
	)
	
	const Studies = props.studies.map(
		(infoLine) => {
			return (
				<CardLayout key={infoLine.id} >
					<div className=" flex justify-between
									text-xs">
						<p>
							{ infoLine['Date Start'].rich_text[0].plain_text } ??? { infoLine['Date End'].rich_text[0].plain_text }  
						</p>
						<p>
							{  infoLine.Location.rich_text[0].plain_text }
						</p>
					</div>
					<div>
						{
							infoLine.Link.rich_text[0] ?
							<a className="underline underline-offset-4" href={infoLine.Link.rich_text[0].plain_text}>
								{ infoLine.Institution.rich_text[0].plain_text } 
							</a>
							:
							<p className="">
								{ infoLine.Institution.rich_text[0].plain_text } 
							</p>

						}
					</div>
					<div className="text-sm">
						<p>
							{  infoLine['Tagline'].rich_text[0].plain_text }
						</p>
					</div>
				</CardLayout>
			)
		}
	)
	const Pro = props.pro.map(
		(infoLine) => {
			return (
				<CardLayout key={infoLine.id}>
					<div className=" flex justify-between
									text-xs">
						<p>
							{ infoLine['Date Start'].rich_text[0].plain_text } ??? { infoLine['Date End'].rich_text[0].plain_text }  
						</p>
						<p>
							{  infoLine.Location.rich_text[0].plain_text }
						</p>
					</div>
					<div>
						<p className="">
							{ infoLine.Name.title[0].plain_text } 
						</p>
						<p className="font-extralight text-sm">
							{ 
								infoLine.Institution.rich_text[0] && 
								infoLine.Institution.rich_text[0].plain_text 
							} 
						</p>
					</div>
					<div className="text-sm">
						<p>
							{  infoLine.Tagline.rich_text[0].plain_text }
						</p>
					</div>
				</CardLayout>
			)
		}
	)
	const CodeProjects = props.codeprojects.map(
		(infoLine) => {
			return (
				<CardLayout key={infoLine.id} >
					<div className=" flex gap-2 flex-wrap
									text-xs">
						{ 
							infoLine.Technologies.multi_select.map(
								(technology : any) => {
									return(
										<div
											className={` p-1 pr-2 pl-2 bg-${technology.color} outline-1 outline rounded-md`}
											key={technology.id}> 
											{ technology.name }
										</div>
									)
								}
							) 
						}
					</div>
					<div>
						<p className="">
							{ infoLine.Name.title[0].plain_text } 
						</p>
					</div>
					<div className="text-sm">
						<p>
							{  infoLine.Tagline.rich_text[0].plain_text }
						</p>
					</div>
					{
						(infoLine.repo.url || infoLine.Deployed.url) && 
						<div className="text-sm underline underline-offset-4 
										flex gap-2">
							{
								infoLine.repo.url && 
								<a href={infoLine.repo.url}>
									repo
								</a>
							}
							{
								infoLine.Deployed.url && 
								<a href={infoLine.Deployed.url}>
									page
								</a>
							}
						</div>
					}
				</CardLayout>
			)
		}
	)
	const Outside = props.outside.map(
		(infoLine) => {
			return (

				<CardLayout key={infoLine.id}>
					<div className="flex justify-between">
						<p className="">
							{ infoLine.Name.title[0].plain_text } 
						</p>
						<p className="text-xs">
							{  infoLine.Location.rich_text[0].plain_text }
						</p>
					</div>
					<div className="text-sm">
						<p>
							{  infoLine.Text.rich_text[0].plain_text }
						</p>
					</div>
						{
							infoLine.Link.url && 
							<div className="text-sm underline underline-offset-4 
							flex gap-2">
								<a href={infoLine.Link.url}>
									{infoLine.Link.url}
								</a>
							</div>
						}
				</CardLayout>
			)
		}
	)
		

	return ( 

		<div className="w-full
						absolute bottom-0 print:block
						h-full
						md:p-8
						overflow-scroll print:overflow-visible
						font-JetBrains text-stone-800">
			<div className="max-w-7xl
							p-8 md:outline md:outline-1 md:outline-stone-800 md:m-auto print:outline print:outline-1 print:outline-stone-800 print:m-auto 
							grid md:grid-cols-[1fr_216px] print:grid-cols-[1fr_216px] 
							gap-4">
				<div className="flex">
					<div className="flex flex-col gap-2">
						<p className="">C??lestin Meunier</p>
						{ infos }
					</div>
				</div>
				<div className="
					flex flex-col 
					col-span-1
					row-span-2
				">
					<div className="w-full">
						<h3 className="" 
						>???? Languages</h3>
						{ skillsLanguages  }
					</div>
					<div className="w-full">
						<h3 className="" 
						>???? Programming</h3>
						{ skillsProg }
					</div>
					<div className="w-full">
						<h3 className="" 
						>???? ???? Technologies</h3>
						{ skillsTechs  }
					</div>
					<div className="w-full">
						<h3 className="" 
						>???? ???? Software</h3>
						{ skillsSoft  }
					</div>
					<div className="w-full">
						<h3 className="" 
						>???? Other</h3>
						{ skillsOther  }
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col">
						<h2 className="text font"> Studies </h2>
						{/* <SeparatorCV/> */}
						<div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 w-full">
							{ Studies }
						</div>
					</div>
					<div className="flex flex-col">
						<h2 className="text font"> Professional Experiences </h2>
						{/* <SeparatorCV/> */}
						<div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 w-full">
							{ Pro }
						</div>
					</div>
					<div className="flex flex-col">
						<h2 className="text font"> Code Projects </h2>
						{/* <SeparatorCV/> */}
						<div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 w-full">
							{ CodeProjects }
						</div>
					</div>
					<div className="flex flex-col">
						<h2 className="text font"> Outside of work </h2>
						{/* <SeparatorCV/> */}
						<div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 w-full">
							{ Outside }
						</div>
					</div>
				</div>
			</div>
		</div>
	 );
}

export async function getStaticProps() {
	
	let infos			= await getInfos()
	let skillsLanguages	= await getSkillsLanguages()
	let skillsProg		= await getSkillsProg()
	let skillsTechs		= await getSkillsTechs()
	let skillsSoft		= await getSkillsSoft()
	let skillsOther		= await getSkillsOther()
	let studies			= await getStudies()
	let pro				= await getPro()
	let outside			= await getOutside()
	let codeprojects	= await getCodeProjects()

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

