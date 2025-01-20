import React from "react";
import Menu from "./Menu";
import { TbBrandBooking } from "react-icons/tb";
import { LiaBoxSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
const UserMenu = ({ toggle }) => {
  return (
    <>
      <Menu
        label="My Profile"
        address="profile"
        icon={TbBrandBooking}
        toggle={toggle}
      />
      <Menu
        label="Add Product"
        address="add-product"
        icon={LiaBoxSolid}
        toggle={toggle}
      />
      <Menu
        label="My Product"
        address="my-product"
        icon={IoSettingsOutline}
        toggle={toggle}
      />
    </>
  );
};

export default UserMenu;