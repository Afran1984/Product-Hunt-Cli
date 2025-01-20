import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoCode } from "react-icons/io5";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";
;
import useAuth from "../hooks/useAuth";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import DropDownMenu from "../components/Dashboard/Sidebar/Menu/DropDownMenu";

const DashboardLayout = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { user } = useAuth();
  return (
    <div className="w-full h-screen flex flex-col bg-darkText dark:bg-darkBg">
      {/* Navbar */}
      <div className="flex bg-darkText dark:border-black dark:bg-darkBg border-b justify-between items-center py-4 px-5 fixed top-0 w-full h-[64px]  z-10 shadow-sm">
        <div
          className={`flex justify-between items-center gap-2 ${
            toggle ? "w-[50px] justify-center" : "w-[200px]"
          }  `}
        >
          <Link to="/" className={` ${toggle ? "hidden" : "flex"}`}>
            Product Hunt
          </Link>
          <span onClick={() => setToggle(!toggle)}>
            <BsReverseLayoutSidebarInsetReverse className="text-[19px]" />
          </span>
        </div>
        <p className="relative">
          {user ? (
            <img
              src={user?.photoURL}
              className="h-9 w-9 rounded-full"
              alt="Profile"
              onClick={() => setDropdown(!dropdown)}
            />
          ) : (
            <FiUser
              className="text-[22px] hover:cursor-pointer hover:text-primary font-bold"
              onClick={() => setDropdown(!dropdown)}
            />
          )}
          <div
            className={`bg-darkText dark:bg-darkBg w-fit absolute right-0 top-11 ${
              dropdown ? "block" : "hidden"
            } p-2 rounded-md shadow-md`}
          >
            <DropDownMenu label="Profile" address="profile" icon={FiUser} />
          </div>
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 pt-[64px]">
        <div>
          <Sidebar toggle={toggle} />
        </div>

        <div
          className={`${
            toggle ? "ml-[60px]" : "ml-[60px] md:ml-[100px] lg:ml-[200px]"
          } flex-1 overflow-y-auto  bg-darkText dark:bg-darkBg
           p-4 `}
          style={{ height: "calc(100vh - 64px)" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;