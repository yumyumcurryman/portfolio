import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="bar">
      <h1 id="navbar-title">
        <NavLink className="navlink" to="/">
          Micah Elias
        </NavLink>
      </h1>
      <div className="navbar-options-section">
        <ul className="navbar-options">
          <li>
            <NavLink className="navlink" to="/projects">
              Projects
            </NavLink>
          </li>
          <li>Posts</li>
          <li>
            <a href="https://github.com/yumyumcurryman">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
