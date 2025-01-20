
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import FooterHunt from "../components/shared/FooterHunt";


const Main = () => {
  return <div className="max-w-[1240px] mx-auto px-4">
        <Navbar/>
        <Outlet/>
        <FooterHunt/>
  </div>;
};

export default Main;
