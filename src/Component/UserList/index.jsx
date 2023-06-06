import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./userlist.css";
import HeaderDiv from "./componet/HeaderDiv";
import SearchFilter from "./componet/SearchFilter";
import TableComponent from "./componet/TableComponent";
import { Modal } from "react-bootstrap";
import UserDetails from "../UserDetails";

const UserList = () => {
  const [open, setOpen] = useState();
  const openSideBar = (data) => {
    setOpen(data);
  };
  const handleClose = () => {
    setOpen();
  };
  return (
    <div className="userlist-main-div">
      <HeaderDiv />
      <SearchFilter />
      <TableComponent openSideBar={openSideBar} />
      {open ? <UserDetails data={open} handleClose={handleClose} /> : null}
    </div>
  );
};

export default UserList;
