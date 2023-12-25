import "./about.css";
import about from "../img/aboutus.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="about">
        <div className="about_image">
          <img src={about} alt="" />
        </div>
        <div className="about_text">
          <h2>About Us</h2>
          <p>
            Meals on Wheels™ has been an iconic and trusted service in
            Australian communities for more than 65 years, but it wasn’t until
            1989 that the national association we now know as Meals on Wheels®
            Australia was born. Today, Meals on Wheels™ Australia is a vital
            national association, working alongside its member organisations –
            as well as peak bodies, providers, and services – across every state
            and territory. Committed to supporting the wellbeing and interests
            of older Australians, Meals on Wheels™ Australia works with these
            groups and the community to raise awareness and lobby for action
            around the importance of good nutrition and social connection.
          </p>
          <NavLink className="home_btn" to="/register">
            <button className="home_btn">Contact Us</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
