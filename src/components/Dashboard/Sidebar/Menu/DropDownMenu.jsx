
import React from "react";
import { NavLink } from "react-router-dom";

const DropDownMenu = ({ label, address, icon: Icon, toggle }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        ` flex items-center px-2 w-fit transition-colors duration-300 rounded-sm transform dark:hover:bg-gray-700 dark:bg-opacity-80 hover:text-gray-700  ${
          isActive
            ? "bg-gray-200 bg-opacity-80 text-gray-700"
            : "text-gray-500 dark:text-darkText"
        }`
      }
    >
      <Icon className="w-4 h-4" />

      <span className={`font-medium ${toggle ? "hidden" : " block"} ml-2`}>
        {label}
      </span>
    </NavLink>
  );
};

export default DropDownMenu;
