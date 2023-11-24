import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { decrementCounter, incrementCounter } from "../Redux/userSlice";
import './Counter.css'

const Counter = () => {

    const [counter, setCounter] = useState(1);

    const dispatch = useDispatch();

    const handleDecrement= () => {
        counter > 1 && setCounter(prevCount => prevCount - 1);
        counter > 1 && dispatch(decrementCounter(1));
    } 

    const handleIncrement= () => {
        setCounter(prevCount => prevCount + 1);
        dispatch(incrementCounter(1));
    } 


    return (
        <div className="counter-container">
           <button 
                className="left"
                onClick={handleDecrement}
            > -</button>
            
            <div className="count">{counter}</div>
            <button 
                className="right"
                onClick={handleIncrement}
            > + </button>
        </div>
    )
}

export default Counter;