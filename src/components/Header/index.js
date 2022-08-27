import React from "react";
import logo from "../../img/logo.png"
import "./style.css"

function Header() {
  return (
    <header className="headerContainer">
      <img src={logo} className="headerLogo" alt="logo" />
    </header>
  );
}

export default Header;
