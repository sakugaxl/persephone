import React, { useState } from 'react';

const TaskList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Task List</button>
      {isOpen && (
        <div className="popup">
          <h2>Task List</h2>
          <p>View your tasks.</p>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
