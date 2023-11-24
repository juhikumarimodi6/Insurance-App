import React, { useState } from 'react';

const UserInput = (props) => {
 
  const {userInput, setUserInput, usersInput, setUsersInput, index} = props;
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    console.log(name , value)
    setUserInput((prevData) => ({...prevData, [name]: value}));
    setUsersInput((prevData) => {
        const updatedUsersInput = [...prevData]; // Create a new array to update
        updatedUsersInput[index] = { ...userInput, [name]: value }; // Update specific index with new data
        return updatedUsersInput;
    });
  }

  return (
    <div>
        {/* <fieldset>
            <legend>Full Name</legend> */}
            <input
                legend='Full Name'
                type='text'
                placeholder='Full Name'
                onChange={event => handleInputChange(event)}
                name='fullName'
            />
        {/* </fieldset> */}
        {/* <input
            type='text'
            placeholder='Full Name'
            onChange={event => handleInputChange(event)}
            name='name'
        >
        </input> */}
        <select name='gender' onChange={event => handleInputChange(event) }>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <input
            type='date'
            onChange={event => handleInputChange(event)}
            name='dob'
        >
        </input>
    </div>
  );
};

export default UserInput;