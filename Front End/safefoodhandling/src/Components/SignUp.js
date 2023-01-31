import React from 'react';
import './css/SignUp.css';


const SignUp = () => {
    return (
        <div className='sign'>
            <form action="" >
                <div className='signup-fields'>

                    <h4> Create New Account </h4>
                    <lable htmlFor="username" > UserName : </lable>
                    <input type="text" autoComplete='off' name='username' id='username' />
                    <br></br>

                    <lable htmlFor="email" > Email : </lable>
                    <input type="email" autoComplete='off' name='email' id='email' />
                    <br></br>

                    <lable htmlFor="password" > Password : </lable>
                    <input type="password" autoComplete='off' name='password' id='password' />
                    <br></br>

                    <lable htmlFor="confirmpassword" > Confirm Password : </lable>
                    <input type="password" autoComplete='off' name='confirmpassword' id='confirmPassword' />
                    <br></br>

                </div>
                <div className='checkbox'>
                    <input className='checkbx' type="checkbox" name='Agree to terms and conditions' />
                    <lable htmlFor="TermsAndConditions">Agree terms and conditions</lable>
                </div>
                <br></br>

                <button className='signupbtn' ntype='submit' >Sign  Up</button>
            </form>

        </div>

    )
};

export default SignUp;
