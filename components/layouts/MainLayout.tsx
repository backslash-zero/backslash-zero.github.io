import Div100vh from "react-div-100vh";
import NavBar from "../navbar/NavBar";
import SocialLinks from "../links/SocialLinks";
import { useRouter } from "next/router";

const MainLayout = ({ children }: any) => {
  const router = useRouter();

  // check if current route is not "/cv"

  return (
    <div className="h-screen-100dvh w-full bg-stone-50">
      <nav className="absolute bg-blue-600"></nav>
      <main className="h-full w-full overflow-auto p-4 ">{children}</main>
      <div className="absolute top-4 right-4 z-10">
        {router.pathname !== "/cv" && <SocialLinks />}
      </div>
    </div>
  );
};

export default MainLayout;
