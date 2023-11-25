import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsersData, deleteUserAtIndex} from '../Redux/userSlice';
import UserCardCarousel from './UserCardCarousel';
import { MdDelete } from "react-icons/md";
import './DataTable.css'

const DataTable = () => {
    const [isMobile, setIsMobile] = useState(false);

    const usersData = useSelector(selectUsersData);
    const dispatch = useDispatch();
    console.log(usersData)
  
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        console.log(width);
        setIsMobile(width <= 780);
      };
      console.log(isMobile);
      handleResize(); // Initial check
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDeleteUser = (idx) => {
        dispatch(deleteUserAtIndex(idx));
    }
  
    return (
      <div>
        <h2>Data Table</h2>
        {isMobile ? (
          <UserCardCarousel/>
        ) : (
            <div>
            <table>
            <thead className='table-head'>
                <tr>
                <th>Title</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th></th>
                </tr>
            </thead>
            <tbody className='table-body'>
                {usersData.map((item, index) => (
                <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.dob}</td>
                    <MdDelete 
                        onClick={() => handleDeleteUser(index)}
                    />
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        )}
      </div>
    );
  };
  
  export default DataTable;