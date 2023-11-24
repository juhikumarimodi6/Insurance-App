import React from 'react';
import './TabButton.css';

const TabButton = ({ icon, title, onClick, isActive}) => {
  return (
    <button  className='Tab-button'
        onClick={onClick}
      style={{ color: isActive ? 'red' : 'grey', borderColor: isActive ? 'red' : 'grey',}}
    >
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <span>{icon}</span>
        <span>{title}</span>
      </div>
    </button>
  );
};

export default TabButton;
