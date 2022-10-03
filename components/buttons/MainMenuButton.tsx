import Link from "next/link";

type MainMenuButtonProps = {
	name: string,
	link : string
}

const MainMenuButton = ({name, link} : MainMenuButtonProps) => {
	return (
		<span className="font-mono font-black text-5xl text-stone-200 hover:blur-sm 
						">
			<Link href={link}>
				<a>{name}</a>
			</Link>
		</span>
	);
}

export default MainMenuButton;