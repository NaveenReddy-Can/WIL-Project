import React from 'react';
import './css/navbar.css';
import Dotcom from '../Assets/Images/Dotcomlogo.png';
import SignUp from './SignUp';



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
                    <button className='button1' type='button'> Login </button>
                    <button type='submit' onClick={SignUp}> Sign Up </button>

                </div>

            </ul>



        </div>
    );
};

export default NavBar;
