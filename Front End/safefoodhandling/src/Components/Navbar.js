import React from 'react';
import './css/navbar.css';
import Dotcom from '../Assets/Images/Dotcomlogo.png';
import SignUp from './SignUp';
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Header = styled(AppBar)`
  background: #7918b5;
  margin-top: 10px;
  border-radius: 1%;
  border-style: dotted;
  font-family: serif;
`;

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 80px;
  margin-left: 150px;
  text-decoration: none;
  font-size: 22px;
  font-family: serif;
`;

const NavBar = () => {
    return (
        <div className="navbar" >
            <img src={Dotcom} alt='navlgo' />

            <ul className="navbar-list">
                <li className="navbar-item" > <a href=" ">HOME</a></li>
                <li className="navbar-item" ><a href=" ">COURSES</a></li>
                <li className="navbar-item" ><a href=" ">MY LEARNING</a></li>
                <li className="navbar-item" ><a href=" ">PROFILE</a></li>

                <div className='nav-buttons'>
                    <button className='button1' type='submit' > Login </button>
                    <button type='submit' > <a href=" /signup" >Sign Up  </a></button >

                </div>

            </ul>



        </div>
    );
};

export default NavBar;
