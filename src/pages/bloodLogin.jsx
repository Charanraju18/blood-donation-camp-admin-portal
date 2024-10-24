import React from "react";
import "./bloodLogin.css";
import forLoginForm from "./Images/forLogin9.png";

const Login = () => {
  return (
    <div className="rj_container">
      <div className="rj_login-container">
        <div className="rj_circle rj_circle-one"></div>
        <div className="rj_form-container">
          <img src={forLoginForm} alt="illustration" className="rj_illustration" />
          <h1>LOGIN</h1>
          <form>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />

            <button>SUBMIT</button>
          </form>
        </div>
        <div className="rj_circle rj_circle-two"></div>
      </div>
    </div>
  );
};

export default Login;
