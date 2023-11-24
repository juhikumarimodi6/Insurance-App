import React, { useState } from 'react';
import UserInput from './UserInput';
import TabButton from './TabButton';
import { useDispatch } from 'react-redux';
import { setUsersData, selectUsersData, addUser } from '../Redux/userSlice';
import { BiMaleFemale } from "react-icons/bi";
import { Link } from 'react-router-dom';

const InsuranceApp = () => {
    const num = 3;
  const [userInput, setUserInput] = useState({name: '', gender: '', dob: ''});
  const [usersInput, setUsersInput] = useState(new Array(num).fill({name: '', gender: '', dob: ''}));
  const dispatch = useDispatch();

  const handleSaveUsersData = () => {
    console.log(usersInput);
    dispatch(setUsersData(usersInput));
  };

  return (
    <div>
        <TabButton 
        icon = {<BiMaleFemale />}
        title ='family'
        />
        {usersInput.map((userInput, index) => {
           return(
            <UserInput 
            key={index}
            userInput={userInput}
            setUserInput={setUserInput}
            usersInput={usersInput}
            setUsersInput={setUsersInput}
            index={index}
            />
            ) 
        })}

      <Link to={'/'}>
            <button>Back</button>
      </Link>
      <button onClick={handleSaveUsersData}>Proceed</button>
    </div>
  );
};

export default InsuranceApp;