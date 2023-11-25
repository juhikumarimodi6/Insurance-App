import Slider from 'react-slick'; // Example with React Slick
import { useDispatch, useSelector } from 'react-redux';
import { selectUsersData, deleteUserAtIndex} from '../Redux/userSlice';
import UserCard from './UserCard';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './UserCardCarousal.css'

const UserCardCarousel = () => {

    const usersData = useSelector(selectUsersData);
    const dispatch = useDispatch();
    console.log(usersData)

    
const CustomPrevArrow = ({ onClick }) => (

  <button className="custom-arrow custom-prev-arrow" onClick={onClick} > 
      <FaAngleLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button className="custom-arrow custom-next-arrow" onClick={onClick} > 
        <FaAngleRight />
    </button>
);
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    };
  
    return (
      <div className='carousel-container'>
      <Slider {...settings}>
        {usersData.map((userData, index) => (
            <UserCard key = {index} userData={userData} index={index}/>
        ))}
      </Slider>
       </div>
    );
  };

  export default UserCardCarousel;