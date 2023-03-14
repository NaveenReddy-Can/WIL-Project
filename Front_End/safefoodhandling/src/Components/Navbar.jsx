import React from "react";
import "./css/Navbar.css";
import Dotcom from "../Assets/Images/Dotcomlogo.png";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="navbar">
      <a href="/Home">
        <img src={Dotcom} alt="navlgo" />
      </a>

      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/Home ">HOME</a>
        </li>
        <li className="navbar-item">
          <a href="/Courses ">COURSES</a>
        </li>
        <li className="navbar-item">
          <a href=" ">MY LEARNING</a>
        </li>
        <li className="navbar-item">
          <a href="/Profile">PROFILE</a>
        </li>

        <div className="nav-buttons">
          {isAuthenticated ? (
            <button
              className="NextButton"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button className="NextButton" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )}
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
