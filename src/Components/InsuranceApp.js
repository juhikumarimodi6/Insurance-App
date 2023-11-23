import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData, selectUserData } from '../Redux/userSlice';

const InsuranceApp = () => {
  const [userInput, setUserInput] = useState({name: '', age: ''});
  const dispatch = useDispatch();

  // Function to update Redux store with user data
  const handleSaveUserData = () => {
    console.log(userInput);
    dispatch(setUserData(userInput));
    setUserInput({name: '', age: ''});
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUserInput((prevData) => ({...prevData, [name]: value}));
  }

  // Other component code...

  return (
    <div>
      {/* Your existing component code... */}
        <input
            type='text'
            placeholder='user name'
            onChange={event => handleInputChange(event)}
            name='name'
        >
        </input>
        <input
            type='text'
            placeholder='age'
            onChange={event => handleInputChange(event)}
            name='age'
        >
        </input>
      {/* Example of updating Redux store with user data */}
      <button onClick={handleSaveUserData}>Save User Data to Redux</button>
    </div>
  );
};

export default InsuranceApp;