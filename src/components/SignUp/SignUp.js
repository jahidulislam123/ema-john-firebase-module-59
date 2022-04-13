import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');


    const handleEmailBlur =event=>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur =event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur=event=>{
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser=event=>{
        event.preventDefault();
        if(password!==confirmPassword){
            setError('Your password did not match ')
            return;
        }
    }

    return (
        <div>
           <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign up </h1>

            <form onSubmit={handleCreateUser}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
            </div>
            <div className='input-group'>
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="" id="" required />

            </div>
            <div className='input-group'>
                <label htmlFor="password">Confirm Password</label>
                <input onBlur={handleConfirmPasswordBlur} type="confirm-password" name="" id=""  required/>

            </div>
        <p style={{color:"red"}}>{error}</p>

            <input className='form-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already Have an Account ? <Link className='form-link' to="/login" >Log in</Link></p>
            </div>
        </div>
        </div>
    );
};

export default SignUp;