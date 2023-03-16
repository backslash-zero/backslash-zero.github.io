import Div100vh from "react-div-100vh";
import NavBar from "../navbar/NavBar";

const MainLayout = ({ children }: any) => {
  return (
    <Div100vh className="w-full">
      {/* <NavBar /> */}
      <main className="w-full h-full">{children}</main>
    </Div100vh>
  );
};

export default MainLayout;
