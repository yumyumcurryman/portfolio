import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="bar">
      <div className="title-and-burger">
        <h1 id="navbar-title">
          <NavLink className="navlink" to="/">
            Micah Elias
          </NavLink>
        </h1>
        <button id="burger-button" onClick={() => setNavbarOpen(!navbarOpen)}>
          <i id="burger-icon" class="material-icons">
            menu
          </i>
        </button>
      </div>
      <div className="navbar-options-section" id={navbarOpen ? "" : "hidden"}>
        <ul className="navbar-options">
          <li>
            <NavLink
              className="navlink"
              onClick={() => setNavbarOpen(!navbarOpen)}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>Posts</li>
          <li>
            <a
              href="https://github.com/yumyumcurryman"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
