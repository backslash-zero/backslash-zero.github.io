import Link from "next/link";

type MainMenuButtonProps = {
  name: string;
  link: string;
};

const MainMenuButton = ({ name, link }: MainMenuButtonProps) => {
  return (
    <span className="font-sans text-5xl text-stone-700 hover:blur-sm visited:text-stone-600">
      <Link href={link}>{name}</Link>
    </span>
  );
};

export default MainMenuButton;
