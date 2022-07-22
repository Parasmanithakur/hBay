import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "./hBay.svg";
const Navbar = () => {
  return (
    <header>
      <nav class="navbar navbar-light back">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={require("./icon.png")} alt="hbay"></img>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
