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
    <div className={`popup mt-10 sm:mt-0 md:grid md:grid-cols-3 md:gap-6 md:col-span-1 px-4 sm:px-0 ${isOpen ? 'block' : 'hidden'}`}>
      <div class="mt-10 sm:mt-0 md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Habit Form</h3>
            <p class="mt-1 text-sm text-gray-600">null right now</p>
          </div>
        </div>
      </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={habit.title}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />

            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              value={habit.notes}
              onChange={handleInputChange}
            ></textarea>

            <label  htmlFor="requirements" className="block text-sm font-medium text-gray-700">Requirements:</label>
            <input
              type="text"
              id="requirements"
              name="requirements"
              value={habit.requirements}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Positive or Negative:</label>
            <select id="type" name="type" onChange={handleInputChange} className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
              <option value="">Select an option</option>
              <option value="positive">Positive</option>
              <option value="negative">Negative</option>
            </select>
          </div>
          
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="reset" className="block text-sm font-medium text-gray-700">Reset Counter:</label>
            <select id="reset" name="reset" onChange={handleInputChange} className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
              <option value="">Select a reset interval</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">Difficulty:</label>
            <select id="difficulty" name="difficulty" onChange={handleInputChange} className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
              <option value="">Select a difficulty level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="timeLimit" className="block text-sm font-medium text-gray-700">Time Limit:</label>
            <input 
              type="text"
              id="timeLimit"
              name="timeLimit"
              value={habit.timeLimit}
              onChange={handleInputChange}
              pattern="[0-9]*"
              title="Please enter a number"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            <span>min</span>
          </div>
          
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags:</label>
            <select
              id="tags"
              name="tags"
              value={habit.tags}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Select a tag</option>
              <option value="health">Health</option>
              <option value="fitness">Fitness</option>
              <option value="productivity">Productivity</option>
              <option value="self-improvement">Self-Improvement</option>
            </select>
          </div>

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
