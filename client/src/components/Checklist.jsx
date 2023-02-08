import React from 'react';

const Checklist = ({ requirements = [] }) => {
  return (
    <ul>
      {requirements.map((requirement, index) => (
        <li key={index}>{requirement}</li>
      ))}
    </ul>
  );
};

export default Checklist;
