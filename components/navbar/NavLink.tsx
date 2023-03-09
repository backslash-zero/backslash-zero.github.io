// Navlink next component that is used in the navbar with active class in tailwind

import Link from "next/link";
import { useRouter } from "next/router";

export interface NavLinkProps {
  to: string;
  value: string;
}

export const NavLink = ({ to, value }: NavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === to;

  return (
    <Link
      className={`
			font-mono text-xl text-stone-800 underline underline-offset-8
			hover:blur-sm italic ${isActive && "underline"}`}
      href={to}
    >
      {value}
    </Link>
  );
};

export default NavLink;
