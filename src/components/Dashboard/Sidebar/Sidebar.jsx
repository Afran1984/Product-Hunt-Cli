import React from "react";
import AdminMenu from "./Menu/AdminMenu";
import UserMenu from "./Menu/UserMenu";
import "./Sidebar.css";
import { TbLogin2 } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import ModeratorMenu from "./Menu/ModeratorMenu";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";


const Sidebar = ({ toggle }) => {
    const { user, logOut } = useAuth();
    const [role, isLoading ]= useRole();
    console.log(role)
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    navigate("/");
  };
  return (
    <div
      className={`fixed  dark:border-r-black bg-darkText dark:bg-darkBg h-full transition-all overscroll-y-scroll duration-300 ${
        toggle ? "w-[60px]  pt-6" : "w-[200px]  pt-6"
      }`}
      style={{ top: "34px" }}
    >
      {/* Container for menus with overflow-y-auto for scrolling */}
      <div className="h-full overflow-y-auto sidebar-container border-r-2 mt-2">
        <div className="flex items-center flex-col justify-between  min-h-[calc(100vh-64px)]">
        <div>
            {/* Show menus based on role */}
            {isLoading ? (
              <div>Loading...</div> 
            ) : role === "admin" ? (
              <AdminMenu toggle={toggle} />
            ) : role === "user" ? (
              <UserMenu toggle={toggle} />
            ) : role === "moderator" ? (
              <ModeratorMenu toggle={toggle} />
            ) : (
              <div>No Access</div> 
            )}
          </div>
          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className={` w-fit flex gap-1  ${
                  toggle
                    ? " w-fit px-2"
                    : "w-fit px-10 flex  items-center"
                }  py-1.5 my-5 transition-colors duration-300 rounded-md transform   
               bg-red-700 bg-opacity-80 text-white 
                  
              }`}
              >
                <TbLogout2 className="w-4 h-4" />
                <span
                  className={`text-sm font-medium ${
                    toggle ? "hidden" : " block"
                  } `}
                >
                  Logout
                </span>
              </button>
            ) : (
              <NavLink
                to="/login"
                className={` w-fit flex gap-1  ${
                  toggle
                    ? " w-fit px-2 justify-center items-center"
                    : "w-[180px] px-10 flex justify-between items-center"
                }  py-1.5 my-5 transition-colors duration-300 rounded-md transform   
                 bg-green-700 bg-opacity-80 text-white 
                    
                }`}
              >
                <span
                  className={`text-sm font-medium ${
                    toggle ? "hidden" : " block"
                  } `}
                >
                  Login
                </span>
                <TbLogin2 className="w-4 h-4" />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;