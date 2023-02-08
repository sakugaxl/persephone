import React, { useState } from 'react';

const SkillTree = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Skill Tree</button>
      {isOpen && (
        <div className="popup">
          <h2>Skill Tree</h2>
          <p>Here you can upgrade and purchase your character and equipment skills</p>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SkillTree;
