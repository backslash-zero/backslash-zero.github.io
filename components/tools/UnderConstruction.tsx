
interface UnderConstructionProps {
	alternateRessourceLink? : string;
	alternateRessourceName? : string;
}

const UnderConstruction = ({alternateRessourceLink, alternateRessourceName} : UnderConstructionProps) => {
	return ( 
		<div className="w-full h-full
						flex flex-col items-center justify-center" >
			<div className="p-8">
				<p>🛠<br/>Sorry, this page is under construction at the moment.</p>
				{ 
					alternateRessourceName &&
					<p>In the meantime you can still check my <a href={alternateRessourceLink}>{alternateRessourceName}</a> for mor info.</p>
				}
			</div>
		</div>
	 );
}

export default UnderConstruction;