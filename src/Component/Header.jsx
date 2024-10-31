import React, { useState } from "react";

import PropTypes from "prop-types";
const Header = ({ handleSearch }) => {
  const [textSearch, setTextSearch] = useState("");
  return (
    <div className="flex justify-between p-4 bg-black items-center  sticky w-full top-0 left-0 z-50 ">
      <div className="flex items-center space-x-4">
        <a href="/">
          <h1 className="text-[35px] font-bold text-red-700 uppercase hover:cursor-pointer">
            Movie
          </h1>
        </a>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-3 rounded-sm text-black input-search"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
        />
        <button
          className="bg-red-700 text-white p-3 rounded-sm search-btn"
          onClick={() => handleSearch(textSearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
};
Header.propTypes = {
  handleSearch: PropTypes.func,
};

export default Header;
