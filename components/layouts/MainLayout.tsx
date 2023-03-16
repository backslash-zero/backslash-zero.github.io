import Div100vh from "react-div-100vh";
import NavBar from "../navbar/NavBar";
import SocialLinks from "../links/SocialLinks";
import { useRouter } from "next/router";

const MainLayout = ({ children }: any) => {
  const router = useRouter();

  // check if current route is not "/cv"

  return (
    <div className="flex h-screen-100dvh w-full flex-col bg-stone-50">
      {/* <nav className="h-20 w-full bg-stone-200"></nav> */}
      <main className="w-full flex-grow overflow-auto p-4 pl-6 pr-6 md:p-8 md:pl-10 md:pr-10 ">
        {children}
      </main>
      <footer className="">
        {router.pathname !== "/cv" && <SocialLinks />}
      </footer>
    </div>
  );
};

export default MainLayout;
