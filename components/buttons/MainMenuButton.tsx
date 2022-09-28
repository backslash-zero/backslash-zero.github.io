import Link from "next/link";

type MainMenuButtonProps = {
	name: string,
	link : string
}

const MainMenuButton = ({name, link} : MainMenuButtonProps) => {
	return (
		<span className="font-sans font-bold text-8xl text-stone-200 blur-sm hover:blur-[2px]
						">
			<Link href={link}>
				<a>{name}</a>
			</Link>
		</span>
	);
}

export default MainMenuButton;