import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../signin.css";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

function Signup() {
  const { isAuthenticated,user,signup,login,logout } = useContext(AuthContext);

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    {
      console.log(name);
    }
  };
  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo">🌴</div>
        <h1 className="logo-text">Platform for Personal Carbon Credits.</h1>
      </div>
      <div className="right-panel">
        <div className="form">
          <h2>sign up</h2>
          <div htmlFor="username">Name</div>
          <input
            name="username"
            type="text"
            value={inputs.username || ""}
            onChange={handleChange}
          />
          <div htmlFor="Email">
            Email
            <input
              name="Email"
              type="text"
              value={inputs.Email || ""}
              onChange={handleChange}
            ></input>
          </div>
          <div htmlFor="password">Password</div>
          <input
            name="password"
            type="password"
            value={inputs.password || ""}
            onChange={handleChange}
          ></input>
          <button  className="submit-button" onClick={()=>{signup(inputs.username,inputs.Email,inputs.password)}}>
            Sign Up
          </button>
          <p>Already a user?<a>Sign In!</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
