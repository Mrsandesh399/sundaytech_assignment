import React from "react";
import { BsSearch } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
const SearchFilter = () => {
  return (
    <div className="search-main-div">
      <div className="search-field-box">
        <BsSearch />
        <input className="search-field" placeholder="Search" />
      </div>
      <div className="filter-div">
        <div>
          <CiFilter style={{ fontSize: "20px" }} />
        </div>
        <div>Filter</div>
      </div>
    </div>
  );
};

export default SearchFilter;
