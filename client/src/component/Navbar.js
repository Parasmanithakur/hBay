import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header>
      <nav class="navbar navbar-light back">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            hBAY
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
