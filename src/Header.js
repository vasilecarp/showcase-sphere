import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2471041.jpg"
        alt=""
      />
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello User</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
