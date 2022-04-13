import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth);
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();
    // const[createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur =event=>{
        setEmail(event.target.value)
    }
    const handleNameBlur =event=>{
        setName(event.target.value);
    }
    

    const handleAddressdBlur =event =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur=event=>{
        setPhone(event.target.value);
    }
    // if(user){
    //     navigate('/shop');

    // }

    const handleCreateUser=event=>{
        // event.preventDefault();
        // if(add!==confirmPassword){
        //     setError('Your password did not match ')
        //     return;
        // }
        // if(password.length<6){
        //     setError("password must be 6 chareacter or longer");
        //     return;
        // }
        // createUserWithEmailAndPassword(email,password);
    }


    return (
        <div>
           <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping information </h1>

            <form onSubmit={handleCreateUser}>
            <div className="input-group">
                <label htmlFor="name">Your Name</label>
                <input onBlur={handleNameBlur} type="text" name="name" id="" required />
            </div>
            <div className="input-group">
                <label htmlFor="email">Your Email</label>
                <input value={user?.email} readOnly type="text" name="" id="" required />
            </div>
            <div className='input-group'>
                <label htmlFor="password">Address</label>
                <input onBlur={handleAddressdBlur} type="text" name="address" id="" required />

            </div>
            <div className='input-group'>
                <label htmlFor="password">Phone Number</label>
                <input onBlur={handlePhoneBlur} type="text" name="phone" id=""  required/>

            </div>
        <p style={{color:"red"}}>{error}</p>

            <input className='form-submit' type="submit" value="Add shiping" />
            </form>
           
            </div>
        </div>
        </div>
    );
};

export default Shipment;