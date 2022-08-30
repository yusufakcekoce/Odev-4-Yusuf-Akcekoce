import React from "react";
import logo from "../../img/logo.png";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to={"/"}>
    <header className="headerContainer">
      <img src={logo} className="headerLogo" alt="logo" />
    </header>
    </Link>
  );
}

export default Header;
