import React from 'react';
import './style.css';

const ReasonItem = ({ icon, title }) => {
  return (
    <div className="reason-item">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default ReasonItem;