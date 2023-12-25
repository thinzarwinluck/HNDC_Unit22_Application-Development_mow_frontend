import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="container-fluid">
      <div className="register_form">
        <div className="register_text">
          <h1>Fill Form For Getting Meal!</h1>
          <h4>Register In Here!</h4>
        </div>
        <form className="pan-register">
          <input
            type="text"
            name="name"
            placeholder="Enter your name.."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email.."
            required
          />
          <input
            type="pre-password"
            name="#"
            placeholder="Enter Password.."
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password.."
            required
          />
          <textarea
            type="textarea"
            name="address"
            placeholder="Address..."
            required
          />
          <textarea
            type="textarea"
            name="difficulties"
            placeholder="About Difficulties..."
            required
          />
          <textarea
            type="textarea"
            name="disease"
            placeholder="About Diseases Information..."
            required
          />
        </form>
        <button className="register_btn">Submit</button>
      </div>
    </div>
  );
};

export default Register;
