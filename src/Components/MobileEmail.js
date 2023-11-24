import React from 'react'
import { useDispatch } from 'react-redux';
import { setEmail, setMobile } from "../Redux/userSlice";
import './MobileEmail.css'

const MobileEmail = () => {
    const dispatch = useDispatch();

    const handleMobileNumber = (event) => {
        dispatch(setEmail(event.target.value));
    }

    const handleEmail = (event) => {
        dispatch(setMobile(event.target.value));
    }
  
  return (
    <div>
        <p>Personal Details</p>
        <input
            type='tel'
            id='phoneNumber'
            placeholder='Mobile Number(10-digit)'
            onChange={event => handleMobileNumber(event)}
            className='mobile'
        />
        <input
            type='email'
            id='email'
            placeholder='Email Id'
            onChange={event => handleEmail(event)}
            className='email'
        />
    </div>
  )
}

export default MobileEmail
