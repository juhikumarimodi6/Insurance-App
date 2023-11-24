import './UserInput.css'

const UserInput = (props) => {
 
  const {userInput, setUserInput, setUsersInput, index, title} = props;

  const handleInputChange = (event) => {
        const {name, value} = event.target;
        console.log(name , value, title)
        setUserInput((prevData) => ({...prevData, [name]: value, title: title}));
        setUsersInput((prevData) => {
            const updatedUsersInput = [...prevData]; 
            updatedUsersInput[index] = { ...userInput, [name]: value, title: title }; 
            return updatedUsersInput;
        });
  }

  return (
    <div className="user-input-unit">
        <span className="user-title">{title}</span>
        <input
            type='text'
            placeholder='Full Name'
            onChange={event => handleInputChange(event)}
            name='name'
            className="full-name"
        />
        <select name='gender' onChange={event => handleInputChange(event)} className="gender">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <input
            type='date'
            onChange={event => handleInputChange(event)}
            name='dob'
            className="dob"
        />
    </div>
  );
};

export default UserInput;