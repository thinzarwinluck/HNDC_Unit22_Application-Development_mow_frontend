import React from "react";
import "./donate.css";
import donate1 from "../img/donate1.jpg";
import donate2 from "../img/donate2.jpg";
import donate3 from "../img/donate3.jpg";
import blur from "../img/blur.jpg";
import { NavLink } from "react-router-dom";

const Donate = () => {
  return (
    <div className="pan-container">
      <div className="donate_section1">
        <img src={donate1} alt="" />
        <div class="center_text">
          <h2>Donate Today and Make a Difference</h2>
          <p>
            Your gift will help us support the local programs that keep senior
            safe and living independently nationwide
          </p>
          <NavLink to="/register">
            <button className="donate_btn">Donate Today</button>
          </NavLink>
        </div>
      </div>

      <div className="donate_section2">
        <div class="image-stack">
          <div class="image-stack__item image-stack__item--top">
            <img src={donate2} alt="" />
          </div>
          <div class="image-stack__item image-stack__item--bottom">
            <img src={donate3} alt="" />
          </div>
        </div>

        <div className="donate_text">
          <h2>JOIN US IN MAKING A DIFFERENCE</h2>
          <p>
            Donate today and become a lifeline for the seniors in our
            community.Whether it's a one-time donation, a monthly contribution,
            or a memorial or tribute donation, every doloiar makes a difference
          </p>
          <NavLink to="/register">
            <button className="donate_btn">Donate Now</button>
          </NavLink>
        </div>
      </div>

      <div className="donate_section3">
        <img src={blur} alt="" />
        <div class="left_text">
          <h2>Donate to your local Meals on Wheels</h2>
          <p>
            Your donations help ensure that those in need in your community
            receive the right support to stay healthy at home. How to Donate:
          </p>
          <ol>
            <li>Click below to find your local Meals on Wheels</li>
            <li>Enter your address to find a provider near you</li>
            <li>Contact your local provider directly to make a donation</li>
          </ol>
          <NavLink to="/about">
            <button className="donate3_btn">
              Find your Local Meals On Wheels
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Donate;
