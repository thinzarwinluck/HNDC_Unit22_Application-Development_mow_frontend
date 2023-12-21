import React from "react";
import section1Image from "../img/section1.jpg";
import section2Image from "../img/section2.jpg";
import nutritiousImage from "../img/nuturious.jpg";
import friendlyvisitImage from "../img/friendlyvisit.jpg";
import safetycheckImage from "../img/safetycheck.jpg";
import logo1 from "../img/logo1.jpg";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import logo4 from "../img/logo4.png";
import logo5 from "../img/logo5.jpg";
import { NavLink } from "react-router-dom";

import "./Home.css";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div className="pan-container">
      <div className="section1">
        <div className="section1_text">
          <h2>Welcome to our Meals on Wheels</h2>
          <p>
            Friendly volunteers and staff helping vulnerable seniors and people
            with disabilities stay healthy at home with nutritious meals
            delivered to their door.
          </p>
          <div className="section1_btn">
            {" "}
            <NavLink className="home_btn" to="/register">
              <button className="home_btn">Explore Meals</button>
            </NavLink>
            <NavLink className="home_btn" to="/register">
              <button className="home_btn">Become a Volunteer</button>
            </NavLink>
          </div>
        </div>
        <div className="section1_image">
          <img src={section1Image} alt="" />
        </div>
      </div>

      {/* Add Bootstrap Search Bar */}
      <form
        id="search"
        class="form-inline d-flex justify-content-center md-form form-sm active-pink-2 mt-2  "
      >
        <input
          id="search"
          class="  form-control form-control-sm mr-3 w-75 "
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <i class="fas fa-search" aria-hidden="true"></i>
      </form>

      <div className="section2">
        <div className="section2_image">
          <img src={section2Image} alt="" />
        </div>
        <div className="section2_text">
          <h2>How We Help</h2>
          <p>
            Our essential service plays an important role in early intervention
            and health prevention, allowing older Australians to live in their
            homes for longer. We do this through our incredible 45,000 volunteer
            workforce who form meaningful connections with Meals on Wheels
            customers, enable them to live independently and age well and
            provide valuable peace-of-mind to their loved ones.
          </p>
          <NavLink className="home_btn" to="/about">
            <button className="home_btn">Learn More</button>
          </NavLink>
        </div>
      </div>
      <div className="section3">
        <div className="nutritious">
          <div className="section3_image">
            <img className="section3Image" src={nutritiousImage} alt="" />
          </div>
          <div className="section3_text">
            <h5>NUTRITIOUS MEAL</h5>
            <p>
              Adequate nutrition is necessary for health, functionality and the
              ability to remain independent. Healthy eating can increase mental
              acuity, resistance to illness and disease, energy levels, immune
              system strength, recuperation speed and the ability to manage
              chronic health problems.{" "}
            </p>
          </div>
        </div>

        <div className="nutritious">
          <div className="section3_image">
            <img className="section3Image" src={friendlyvisitImage} alt="" />
          </div>
          <div className="section3_text">
            <h5>FRIENDLY VISIT</h5>
            <p>
              For many, the trusted Meals on Wheels volunteer or staff member
              who shows up every day with a meal and a smile is the only person
              they see or speak with all day. This special delivery is the
              reason to get up in the morning, something to look forward to, and
              a reminder to take good care of themselves.
            </p>
          </div>
        </div>

        <div className="nutritious">
          <div className="section3_image">
            <img className="section3Image" src={safetycheckImage} alt="" />
          </div>
          <div className="section3_text">
            <h5>SAFETY CHECK</h5>
            <p>
              Along with the inevitable impacts of aging come the increased
              risks of medical emergencies, falls and other accidents. The
              safety check that accompanies each meal delivery ensures that, in
              the case of an emergency or problem, medics will be called,
              families will be notified and our seniors will not be forgotten.
            </p>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="section4_text">
          <h3>200+ Partner Agencies in MerryMeal</h3>
          <p>
            Here are some of the over two hundred agencies that deliver Meals on
            Wheels programs across MerryMeal.
          </p>
        </div>
        <div className="section4_img">
          <img className="logo" src={logo1} alt="" />
          <img className="logo" src={logo2} alt="" />
          <img className="logo" src={logo3} alt="" />
          <img className="logo" src={logo4} alt="" />
          <img className="logo" src={logo5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
