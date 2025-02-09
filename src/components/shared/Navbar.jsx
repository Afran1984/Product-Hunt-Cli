import React from "react";

import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
    const { user, logOut } = useAuth();
    return <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <a className="text-xl">Product Hunt</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><NavLink to="/">Home</NavLink></li>
                
                <li><NavLink to="/allproduct">Product</NavLink></li>
            </ul>
        </div>
        <div className="navbar-end">
            {
                !user &&  <button className="bg-green-600 text-white px-3 text-sm py-1 rounded-sm">
                <NavLink to="/login">Login</NavLink>
            </button>
         }
      
            {
                user && 
                <details className="dropdown">
                <summary className="btn m-1">
                  <img src={user?.photoURL} className="h-6 w-6 rounded-full" /> 
                </summary>
                <ul className="menu dropdown-content flex flex-col justify-center items-center bg-base-100 rounded-box z-[100] mx-[-60px] w-32 p-2 shadow">
                        <li className="disabled"> <p className="text-black">{user?.displayName}</p></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    <li><a onClick={logOut} className="bg-red-500 text-white w-fit text-sm mt-2">Logout</a></li>
                </ul>
              </details>
           }
        </div>
    </div>
};



export default Navbar;
