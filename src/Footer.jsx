import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import "./Navbar.css";

const Footer = () => {
  return (
    <div>
      <div className="pan-container">
        <h1 className="footer_logo">Meals On Wheels</h1>
        <footer>
          <div>
            <p>
              This website, operated by MerryMeal, is for informational purposes
              only. Information is subject to change, and MerryMeal is not
              equipped to handle individual meal complaints.
            </p>
          </div>

          <div>
            1550 Crystal Drive, Suite 1004Arlington, Virginia 22202Phone:
            1-888-998-6325Fax: 703-548-5274
          </div>

          <div className="social_icon">
            <a
              className="btn btn-primary"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-primary"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-primary"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-primary"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </footer>
      </div>
      <h5 className="copyright">
        {" "}
        &copy; 2023 Copyright | All Rights Reserved
      </h5>
    </div>
  );
};

export default Footer;
