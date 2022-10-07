interface SkillsProps {
	content: string
	last: boolean
}

const Skills = ({content, last} : SkillsProps) => {
	return ( 
		<div>
			<p>
				{ last ? "└── " : "├── "}
				{ content }
			</p>
		</div>
	 );
}

export default Skills;