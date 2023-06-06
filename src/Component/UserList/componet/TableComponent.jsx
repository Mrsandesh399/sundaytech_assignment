import React, { useEffect, useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { getUserList } from "../../../Services/apiFunction";

const tableHead = ["NAME", "USER ID", "ROLE", "LAST LOGIN"];

const TableComponent = ({ openSideBar }) => {
  const [tableData, setTableData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await getUserList();
        if (response.status == "200") {
          setTableData(response.data.users);
        }
      } catch (e) {}
    })();
  }, []);

  return (
    <div style={{ width: "100%", marginTop: "50px" }}>
      <div className="table-header-div">
        {tableHead &&
          tableHead.map((ele, i) => (
            <div key={i} className="table-header-class">
              <div>{ele}</div>
              <div>
                <BsArrowDownUp />
              </div>
            </div>
          ))}
      </div>
      {tableData &&
        tableData.map((user, i) =>
          i < 5 ? (
            <div
              className="userData-list-div"
              key={i}
              onClick={() => {
                openSideBar(user);
              }}
            >
              <div className="userData-center">
                <div
                  className="sideCOLOR"
                  style={{ background: user.eyeColor }}
                ></div>
                <img src={user.image} className="user-image-logo" />
                {user.firstName} {user.lastName}
              </div>
              <div className="userData-center">{user.username}</div>
              <div className="userData-center">{user.company.title}</div>
              <div className="userData-center">{user.birthDate}</div>
              <div className="userData-center d-flex justify-content-end pe-5">
                <CiMenuKebab />
              </div>
            </div>
          ) : null
        )}
      <div className="slot-box">Showing 1-5 of 5</div>
    </div>
  );
};

export default TableComponent;
