import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars } from "react-icons/fa";
import React from "react";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      {/* when you click this link called portfolio it will send them back to my homepage */}
          <ul className="nav-menu">
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/project">Project</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
      </ul>
      <div className="hamburger">
        <FaBars />
      </div>
    </div>
  );
};

export default Navbar;
