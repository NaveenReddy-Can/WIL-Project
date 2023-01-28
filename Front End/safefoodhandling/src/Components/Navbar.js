import React from 'react';
import './css/navbar.css';
import Dotcom from '../Assets/Images/Dotcomlogo.png';



const NavBar = () => {
    return (
        <div className="navbar" >
            <img src={Dotcom} alt='navlgo' />
            <ul className="navbar-list">
                <li className="navbar-item" >HOME</li>
                <li className="navbar-item" >COURSES</li>
                <li className="navbar-item" >PROFILE</li>
                <li className="navbar-item" >MY LEARNING</li>
            </ul>
        </div>
    );
};

export default NavBar;
