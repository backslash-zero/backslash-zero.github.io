import Link from "next/link";

type MainMenuButtonProps = {
	name: string,
	link : string
}

const MainMenuButton = ({name, link} : MainMenuButtonProps) => {
	return (
		<span className="text-8xl">
			<Link href={link}>
				<a>{name}</a>
			</Link>
		</span>
	);
}

export default MainMenuButton;