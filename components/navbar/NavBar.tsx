import Link from "next/link";

interface NavBarProps {
	back : string
}

const NavBar = ({ back } : NavBarProps) => {
	return ( 
		<div className="absolute top-0 w-full h-16 
						border-stone-200 border-b-1
						flex items-center p-
						font-mono text-stone-800
						z-10">
			<div className="p-4 hover:text-stone-900 hover:blur-sm">
				<Link href={back}>
					<a>&#60;- back</a>
				</Link>
			</div>
		</div>
	 );
}

export default NavBar;