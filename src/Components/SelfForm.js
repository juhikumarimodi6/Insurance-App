import UserInput from './UserInput'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMemberTitles, setUsersData, clearMemberTitles } from '../Redux/userSlice';
import { Link } from 'react-router-dom';

const SelfForm = () => {
    const memberTitles = useSelector(selectMemberTitles);
    const [userInput, setUserInput] = useState({title: 'self', name: '', gender: '', dob: ''});
    const [usersInput, setUsersInput] = useState(new Array(memberTitles.length).fill({title: '', name: '', gender: '', dob: ''}));
    const dispatch = useDispatch();

    const handleSaveUsersData = () => {
        dispatch(setUsersData(usersInput));
      };
    
      const handleBack = () => {
        dispatch(clearMemberTitles());
      }

  return (
    <div>
      <UserInput 
        title = "self"
        userInput={userInput}
        setUserInput={setUserInput}
        usersInput={usersInput}
        setUsersInput={setUsersInput}
        index={0}
      />
      <div className='back-proceed'>
            <Link to={'/'}>
                <button className='back' onClick={handleBack}>Back</button>
            </Link>
            <Link to={'/datatable'}>
                <button onClick={handleSaveUsersData} className='proceed'>Proceed</button>
            </Link>
      </div>
    </div>
  )
}

export default SelfForm
