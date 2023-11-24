import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUsersData, selectCount } from '../Redux/userSlice';
import { MdDelete } from "react-icons/md";
import './DataTable.css'

const DataTable = () => {
    const usersData = useSelector(selectUsersData);
    const dispatch = useDispatch();
    console.log(usersData)

    const handleDeleteUser = (index) => {
        usersData.splice(index,1);
    }

    return (
    <div>
        <h2>Data Table</h2>
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
                    onClick={(index) => handleDeleteUser(index)}
                />
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}

export default DataTable
