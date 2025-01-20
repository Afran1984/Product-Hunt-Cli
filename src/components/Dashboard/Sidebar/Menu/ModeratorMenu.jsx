import React from "react";
import Menu from "./Menu";
import { RiFileListLine } from "react-icons/ri";
import { BiChat } from "react-icons/bi";

const ModeratorMenu = ({ toggle }) => {
  return (
    <>
      <Menu
        label="product review queue"
        address="product-queue"
        icon={RiFileListLine}
        toggle={toggle}
      />
      <Menu label="Reported Contents" address="reported-contents" icon={BiChat} toggle={toggle} />
    </>
  );
};

export default ModeratorMenu;