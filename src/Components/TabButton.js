import React from 'react';

const TabButton = ({ icon, title, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: isActive ? '#e0e0e0' : 'transparent',
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px' }}>{icon}</span>
        <span>{title}</span>
      </div>
    </button>
  );
};

export default TabButton;
