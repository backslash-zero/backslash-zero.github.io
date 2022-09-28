
interface UnderConstructionProps {
	alternateRessourceLink? : string;
	alternateRessourceName? : string;
}

const UnderConstruction = ({alternateRessourceLink, alternateRessourceName} : UnderConstructionProps) => {
	return ( 
		<div className="w-full h-full
						flex flex-col items-center justify-center" >
			<div className="p-8 
							font-serif font-normal leading-8 text-stone-100 ">
				<p className="text-5xl mb-2">🛠</p>
				<p>Sorry, this page is under construction at the moment.</p>
				{ 
					alternateRessourceName &&
					<p>In the meantime you can still check my <a href={alternateRessourceLink} className="underline underline-offset-4">{alternateRessourceName}</a> for more info.</p>
				}
			</div>
		</div>
	 );
}

export default UnderConstruction;