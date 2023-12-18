import React from "react";
import section1Image from "../img/section1.jpg";
import section2Image from "../img/section2.jpg";
import nutritiousImage from "../img/nuturious.jpg";
import friendlyvisitImage from "../img/friendlyvisit.jpg";
import safetycheckImage from "../img/safetycheck.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="section1">
        <div className="section1_text">
          <h2>Welcome to our Meals on Wheels</h2>
          <p>
            Friendly volunteers and staff helping vulnerable seniors and people
            with disabilities stay healthy at home with nutritious meals
            delivered to their door.
          </p>
          <div className="section1_btn">
            <button>Explore Meals</button>
            <button>Become a Volunteer</button>
          </div>
        </div>
        <div className="section1_image">
          <img src={section1Image} alt="" />
        </div>
      </div>

      {/* Add Bootstrap Search Bar */}
      <form class="form-inline d-flex justify-content-center md-form form-sm active-pink-2 mt-2 ">
        <input
          class="form-control form-control-sm mr-3 w-75"
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
          <button>Learn More</button>
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
    </div>
  );
};

export default Home;
