import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";

function Header() {
  return (
    <div className="header-container">
      <Nav />
      <NavLink className='heading' activeClassName='' to="/">
        <p className="heading">YEVELOPER</p>
      </NavLink>
    </div>
  );
}

export default Header;
