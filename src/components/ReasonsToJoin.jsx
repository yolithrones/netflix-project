import React from 'react';
import ReasonItem from './ReasonItem';
import './style.css';

// Import icons

const ReasonsToJoin = () => {
  const reasons = [


  ];

  return (
    <section className="reasons-to-join">
      <h2>More Reasons to Join</h2>
      {reasons.map((reason, index) => (
        <ReasonItem 

        />
      ))}
    </section>
  );
};

export default ReasonsToJoin;