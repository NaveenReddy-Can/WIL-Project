import React from 'react';
import './css/login.css';
import Dotcom from '../Assets/Images/Dotcomlogo.png';



const Login = () => {
    return (
        <div className="main">
            <div className="container">
                <img src={Dotcom} alt='logo' />
                <div className="content">
                    <h1>Login</h1>
                    <label for="Email">Email:</label>
                    <input type="text" id="EmailTxtbox" placeholder="Please type your email id.." />
                    <br /><br />
                    <label for="Password">Password:</label>
                    <input type="password" id="PasswordTxtbox" placeholder="Please type your password.." />
                    <br /><br />
                    <h7>Forget Password?</h7>
                    <br /><br />
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;