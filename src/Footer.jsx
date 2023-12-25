import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/img/logo.png";
import "./Footer.css";
import {Image} from "react-bootstrap";

const Footer = () => {
  return (
    <div>
        <footer>

      <div className="bg-warning p-3 text-dark d-flex justify-content-between">
      <h5>
        {" "}
        &copy; 2023 Copyright | All Rights Reserved
        </h5>
        <div className="social_icon">
            <NavLink to="/"
              className="btn btn-primary"
              style={{ backgroundColor: "#3b5998" }}
              
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </NavLink>

            <NavLink
              className="btn btn-primary"
              style={{ backgroundColor: "#55acee" }}
              to="/"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </NavLink>

            <NavLink
              className="btn btn-primary"
              style={{ backgroundColor: "#dd4b39" }}
              to="/"
              role="button"
            >
              <i className="fab fa-google"></i>
            </NavLink>

            <NavLink
              className="btn btn-primary"
              style={{ backgroundColor: "#ac2bac" }}
              to="/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </NavLink>
          </div>
  </div>
  </footer>
    </div>
   

  );
};

export default Footer;
