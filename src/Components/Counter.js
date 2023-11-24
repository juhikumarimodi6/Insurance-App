import { MdDelete } from "react-icons/md";
import './Counter.css'

const Counter = () => {
    return (
        <div className="counter-container">
            <button 
                className="left"
                // onClick={() => handleDecrement()}
            > -</button>

            <div className="count">1</div>
            <button 
                className="right"
                // onClick={() => handleIncrement(id)}
            > + </button>
        </div>
    )
}

export default Counter;