import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Main = () => {
  return <div className="max-w-[1240px] mx-auto px-4">
        <Navbar/>
        <Outlet/>
  </div>;
};

export default Main;
