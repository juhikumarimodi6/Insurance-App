import React, { useState } from 'react';
import UserInput from './UserInput';
import TabButton from './TabButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectMemberTitles, setUsersData, clearMemberTitles } from '../Redux/userSlice';
import { BiMaleFemale } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './UserForm.css'

const UserForm = () => {
  const memberTitles = useSelector(selectMemberTitles);
  const [userInput, setUserInput] = useState({title: '', name: '', gender: '', dob: ''});
  const [usersInput, setUsersInput] = useState(new Array(memberTitles.length).fill({title: '', name: '', gender: '', dob: ''}));
  const dispatch = useDispatch();

  const handleSaveUsersData = () => {
    console.log(usersInput);
    dispatch(setUsersData(usersInput));
  };

  const handleBack = () => {
    dispatch(clearMemberTitles());
  }

  return (
    <div className='user-form'>
        <div className='family'>
            <TabButton 
                icon = {<BiMaleFemale />}
                title ='family'
                isActive = {true}
            />
        </div>
        
        {usersInput.map((userInput, index) => {
           return(
            <UserInput 
            key={index}
            userInput={userInput}
            setUserInput={setUserInput}
            usersInput={usersInput}
            setUsersInput={setUsersInput}
            index={index}
            title={memberTitles[index]}
            />
            ) 
        })}
        <div className='back-proceed'>
            <Link to={'/'}>
                <button className='back' onClick={handleBack}>Back</button>
            </Link>
            <Link to={'/datatable'}>
                <button onClick={handleSaveUsersData} className='proceed'>Proceed</button>
            </Link>
      </div>
    </div>
  );
};

export default UserForm;