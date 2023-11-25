import './UserCard.css'
import { useDispatch } from 'react-redux';
import { deleteUserAtIndex} from '../Redux/userSlice';
import { MdDelete } from "react-icons/md";

const UserCard = ({userData, index}) => {

  const dispatch = useDispatch();

  const handleDeleteUser = (idx) => {
    dispatch(deleteUserAtIndex(idx));
  }

  return (
  <div className="user-card">
    <table className="card-table-container">
      <thead >
        <tr className='card-table-head'>
          <th>{userData.title}</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody className='card-table-body'>
        <tr>
          <td>Name:</td>
          <td>{userData.name}</td>
        </tr>
        <tr>
          <td>Gender:</td>
          <td>{userData.gender}</td>
        </tr>
        <tr>
          <td>Date of Birth:</td>
          <td>{userData.dob}</td>
        </tr>
      </tbody>
    </table>
    <div className='delete'>                    
      <MdDelete 
        onClick={() => handleDeleteUser(index)}
      />
    </div>
  </div>
  );
};

export default UserCard;




