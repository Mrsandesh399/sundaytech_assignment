import React from "react";
import "./userDetails.css";
import { CiMenuKebab } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoStatsChartSharp } from "react-icons/io5";

const UserDetails = ({ data, handleClose }) => {
  console.log(data);
  return (
    <div className="modal-background" onClick={handleClose}>
      <div
        className="side-panel"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="sidebar-header">
          <div className="sidebar-header-text">User details</div>
          <div>
            <CiMenuKebab style={{ fontSize: "25px" }} />
          </div>
        </div>
        <div className="sidebar-image">
          <img src={data.image} className="sidebar-img" />
          <div>
            <div className="sidebar-name">
              {data.firstName} {data.lastName}
            </div>
            <div className="sidebar-userID">User id: {data.username}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "5px 10px",
              }}
            >
              <div className="active-button">Active</div>
            </div>
          </div>
        </div>
        <div className="divider-class"></div>
        <div className="basic-accountDetails-div">
          <div className="position-div">
            <div className="CgProfile-icon">
              <CgProfile style={{ fontSize: "25px" }} />
            </div>
            <div className="CgProfile-text"> Basic & account details </div>
          </div>
          <div className="position-align-div">
            <div className="text-icon">
              {data.firstName} {data.lastName}
            </div>
            <div className="text-icon2">Full Name</div>
          </div>

          <div className="position-align-div">
            <div className="text-icon">{data.company.title}</div>
            <div className="text-icon2">User roles</div>
          </div>
        </div>
        <div className="divider-class"></div>
        <div className="basic-accountDetails-div">
          <div className="position-div">
            <div className="CgProfile-icon">
              <IoStatsChartSharp style={{ fontSize: "25px" }} />
            </div>
            <div className="CgProfile-text"> User data </div>
          </div>
          <div className="position-align-div">
            <div className="text-icon">{data.birthDate}</div>
            <div className="text-icon2">Last Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
