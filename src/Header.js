import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://i.pinimg.com/564x/af/5d/e8/af5de8d3c1ffde5c4bc0307566b9a3d0.jpg"
        alt=""
      />
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
