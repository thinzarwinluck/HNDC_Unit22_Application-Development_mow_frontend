import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="pan-container">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/register">Find Meals</NavLink>
          </li>
          <li>
            <NavLink to="/">
              <h1> Meals On Wheels</h1>
            </NavLink>
          </li>
          {/* Dropdown */}
          <li>
            <NavLink to="">
              <div class="dropdown">
                <button class="drop_btn">Programs</button>
                <div class="dropdown-content">
                  <NavLink to="/register">Volunteer</NavLink>
                  <NavLink to="/register">Donate</NavLink>
                </div>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/login">
              <button className="login">Login</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/register">
              <button className="register">Register</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
