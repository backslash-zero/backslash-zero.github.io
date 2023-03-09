import Link from "next/link";
import Navlink from "./NavLink";

interface NavBarProps {}

export const NavBar = () => {
  return (
    <div
      className="absolute top-0 w-full h-16 pl-4 pr-4
						flex items-center justify-end gap-4
						z-10
            print:hidden"
    >
      <Navlink to="/" value="Home" />
      <Navlink to="/About" value="About" />
      <Navlink to="/Work" value="Work" />
      <Navlink to="/Contact" value="Contact" />
    </div>
  );
};

export default NavBar;
