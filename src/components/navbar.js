import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const clickProjects = () => {
    setNavbarOpen(!navbarOpen);
    setCurrentPage(1);
  };

  return (
    <div className="bar">
      <div className="title-and-burger">
        <h1 id="navbar-title">
          {/* <NavLink className="navlink" to="/">
            Micah Elias
          </NavLink> */}
          <a href="/" onClick={() => setCurrentPage(0)}>
            Micah Elias
          </a>
        </h1>
        <button id="burger-button" onClick={() => setNavbarOpen(!navbarOpen)}>
          <i id="burger-icon" class="material-icons">
            menu
          </i>
        </button>
      </div>
      <div className="navbar-options-section" id={navbarOpen ? "" : "hidden"}>
        <ul className="navbar-options">
          <li id={currentPage === 1 ? "active" : ""}>
            <NavLink className="navlink" onClick={clickProjects} to="/projects">
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
