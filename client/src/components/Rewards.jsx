import React from 'react';

const Rewards = ({ rewards }) => {
  const { exp, skillPoints, CurrencyA } = rewards;

  return (
    <div className="rewards">
      <h4>Rewards:</h4>
      <ul>
        <li>Exp: {exp}</li>
        <li>Skill Points: {skillPoints}</li>
        <li>CurrencyA: {CurrencyA}</li>
      </ul>
    </div>
  );
};

export default Rewards;
