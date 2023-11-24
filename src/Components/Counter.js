import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectMemberTitles, addDataToMemberTitles, removeDataFromMemberTitles } from "../Redux/userSlice";
import './Counter.css'

const Counter = ({title}) => {
    const memberTitles = useSelector(selectMemberTitles);
    const [counter, setCounter] = useState(1);

    const dispatch = useDispatch();

    const handleDecrement= () => {
        counter > 1 && setCounter(prevCount => prevCount - 1);
        counter > 1 && dispatch(removeDataFromMemberTitles(title));
    } 

    const handleIncrement= () => {
        setCounter(prevCount => prevCount + 1);
        dispatch(addDataToMemberTitles(title));
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