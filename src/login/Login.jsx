import React from "react";
import "./login.css";
import login from "../img/login.jpg";
const Login = () => {
  return (
    <div className="pan-container">
      <div className="login_container ">
        <div className="login_img">
          <img src={login} alt="" />
        </div>
        <div className="login_form">
          <div className="login_text">
            <h1>Welcome Back!</h1>
            <h4>Login In Here!</h4>
          </div>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter your email.."
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password.."
              required
            />
            <button className="login_btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
