interface SkillsProps {
	content: string
	last: boolean
}

const Skill = ({content, last} : SkillsProps) => {
	return ( 
		<div>
				<p className="inline text-stone-800/50">
					{ last ? "└── " : "├── "}
				</p>
				<p className="inline text-stone-800">
					{ content }
				</p>
		</div>
	 );
}

export default Skill;