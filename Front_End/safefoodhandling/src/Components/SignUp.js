import React from "react";
import "./css/SignUp.css";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";
import react, { useState } from "react";

const initialValue = {
  username: "",
  email: "",
  password: "",
  confirmpassword: "",
};
const SignUp = () => {
  const [user, setUser] = useState(initialValue);
  const { username, email, password, confirmpassword } = user;

  let navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
  };


  return (
    <div className="sign">

      <div className="signup-fields">
        <h4> Create New Account </h4>
        <lable htmlFor="username"> UserName : </lable>
        <input
          type="text"
          autoComplete="off"
          name="username"
          id="username"
          onChange={(e) => onValueChange(e)}
        />
        <br></br>

        <lable htmlFor="email"> Email : </lable>
        <input
          type="email"
          autoComplete="off"
          name="email"
          id="email"
          onChange={(e) => onValueChange(e)}
        />
        <br></br>

        <lable htmlFor="password"> Password : </lable>
        <input
          type="password"
          autoComplete="off"
          name="password"
          id="password"
          onChange={(e) => onValueChange(e)}
        />
        <br></br>

        <lable htmlFor="confirmpassword"> Confirm Password : </lable>
        <input
          type="password"
          autoComplete="off"
          name="confirmpassword"
          id="confirmPassword"
          onChange={(e) => onValueChange(e)}
        />
        <br></br>
      </div>
      <div className="checkbox">
        <input
          className="checkbx"
          type="checkbox"
          name="Agree to terms and conditions"
        />
        <lable htmlFor="TermsAndConditions">
          Agree terms and conditions
        </lable>
      </div>
      <br></br>

      <button
        className="signupbtn"
        type="submit"
        onClick={() => addUserDetails()}
      >
        Sign Up
      </button>

    </div>
  );
};


export default SignUp;
