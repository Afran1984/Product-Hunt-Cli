import React from "react";
import Menu from "./Menu";
import { MdOutlineInsertChart } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { LiaBoxSolid } from "react-icons/lia";

const AdminMenu = ({ toggle }) => {
  return (
    <>
      <Menu
        label="statistics"
        address="statistics"
        icon={MdOutlineInsertChart}
        toggle={toggle}
      />

      <Menu
        label="manage user"
        address="manage-user"
        icon={LuUser}
        toggle={toggle}
      />
      <Menu
        label="manage coupons"
        address="coupons"
        icon={TbUsers}
        toggle={toggle}
      />
    </>
  );
};

export default AdminMenu;
