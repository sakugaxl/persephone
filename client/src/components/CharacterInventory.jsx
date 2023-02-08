import React, { useState } from 'react';

const CharacterInventory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Character Inventory</button>
      {isOpen && (
        <div className="popup">
          <h2>Character Inventory</h2>
          <p>Here you can store your collected characters.</p>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CharacterInventory;