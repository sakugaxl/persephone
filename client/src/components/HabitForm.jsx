import React, { useState } from 'react';

const HabitForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [habit, setHabit] = useState({
    title: '',
    notes: '',
    requirements: '',
    type: '',
    reset: '',
    difficulty: '',
    tags: '',
    timeLimit: '',
  });
  const [habits, setHabits] = useState([]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setHabit({ ...habit, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  // add habit to habits list
  setHabits([...habits, habit]);
  // clear input fields
  setHabit({
    title: '',
    notes: '',
    requirements: '',
    type: '',
    reset: '',
    difficulty: '',
    tags: '',
    timeLimit: '',
  });
};

const renderHabitCards = () => {
  return habits.map((h, i) => (
    <div key={i} className="habit-card" onClick={() => console.log(h)}>
      <h3>{h.title}</h3>
      <p>{h.notes}</p>
    </div>
  ));
};


  const isFormValid = () => {
    return Object.values(habit).every((val) => val !== '');
  };

  return (
    
    <div>
      <button onClick={togglePopup}>Open Habits</button>
      {isOpen && (
        <div className="popup">
          <h2>Habit Form</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={habit.title}
              onChange={handleInputChange}
            />

            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              value={habit.notes}
              onChange={handleInputChange}
            ></textarea>

            <label htmlFor="requirements">Requirements:</label>
            <input
              type="text"
              id="requirements"
              name="requirements"
              value={habit.requirements}
              onChange={handleInputChange}
            />

            <label htmlFor="type">Positive or Negative:</label>
            <select id="type" name="type" onChange={handleInputChange}>
              <option value="">Select an option</option>
              <option value="positive">Positive</option>
              <option value="negative">Negative</option>
            </select>

            <label htmlFor="reset">Reset Counter:</label>
            <select id="reset" name="reset" onChange={handleInputChange}>
              <option value="">Select a reset interval</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>

            <label htmlFor="difficulty">Difficulty:</label>
            <select id="difficulty" name="difficulty" onChange={handleInputChange}>
              <option value="">Select a difficulty level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>

            <label htmlFor="timeLimit">Time Limit:</label>
            <input 
              type="text"
              id="timeLimit"
              name="timeLimit"
              value={habit.timeLimit}
              onChange={handleInputChange}
              pattern="[0-9]*"
              title="Please enter a number"
            />
            <span>min</span>

            <label htmlFor="tags">Tags:</label>
            <select
              id="tags"
              name="tags"
              value={habit.tags}
              onChange={handleInputChange}
            >
              <option value="">Select a tag</option>
              <option value="health">Health</option>
              <option value="fitness">Fitness</option>
              <option value="productivity">Productivity</option>
              <option value="self-improvement">Self-Improvement</option>
            </select>

            <button type="submit">Submit</button>
          </form>
          <button onClick={togglePopup}>Close</button>
          <div className="habit-cards-container">{renderHabitCards()}</div>
        </div>
      )}
    </div>
  );
};

export default HabitForm;
