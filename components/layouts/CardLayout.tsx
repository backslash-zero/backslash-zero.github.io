import dynamic from "next/dynamic";

const CardLayout = ({ children } : any ) => {
	return ( 
			<div className="	p-2
								outline outline-1 outline-stone-800 print:outline-stone-200
								flex flex-col gap-2
								">
					{ children }
			</div>
	 );
}

export default CardLayout;