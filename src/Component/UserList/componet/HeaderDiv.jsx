import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const HeaderDiv = () => {
  return (
    <div className="header-div">
      <div>
        <div className="header-text">Users</div>
        <div className="header-subtext">
          Here are all the users for this project.
        </div>
      </div>
      <div>
        <button className="add-user-button">
          <AiOutlinePlus />
          <label>Add User</label>
        </button>
      </div>
    </div>
  );
};

export default HeaderDiv;
