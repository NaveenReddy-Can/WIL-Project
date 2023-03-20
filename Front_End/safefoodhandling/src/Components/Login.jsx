import React from "react";
import "./css/login.css";
import Dotcom from "../Assets/Images/Dotcomlogo.png";
import { useState, useEffect, useParams, useContext } from "react";

const ALogin = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const getdata = async () => {
    const res = await fetch("/adminlogin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  const [inpval, setINP] = useState({
    uname: "",
    password: "",
  });
  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  return (
    <div className="main1">
      <div className="container1">
        <img src={Dotcom} alt="logo" />
        <div className="content">
          <h1>Login</h1>
          <form>
            <label for="Email">Email:</label>
            <input
              type="text"
              id="EmailTxtbox"
              placeholder="Please type your email id.."
            />
            <br />
            <br />
            <label for="Password">Password:</label>
            <input
              type="password"
              id="PasswordTxtbox"
              placeholder="Please type your password.."
            />
            <br />
            <br />
            <h7>Forget Password?</h7>
            <br />
            <br />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ALogin;
