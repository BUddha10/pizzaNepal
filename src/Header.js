import React from "react";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";

import backgroundImg from "./images/header_background.jpg";

function Header() {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="header_logo">PizzaNepal</div>
      <div className="header_buttom">
        <div className="header_buttomTop">Browse the pizza shops in Nepal</div>

        <div className="header_buttomBelow">
          <div className="buttom_input">
            <input
              type="text"
              placeholder="search for your faviourate pizza shop"
              size="30"
            />
          </div>
          <div className="buttom_search">
            <div className="search_city">
              <input type="text" placeholder="City" size="1" />
            </div>

            <div className="search_icon">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
