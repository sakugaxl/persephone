import React, { useState } from 'react';

const HabitForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form input
    if (!title || !description || !frequency || !duration) {
      alert('Please fill in all fields.');
      return;
    }

    // Call onSubmit prop with form data
    onSubmit({ title, description, frequency, duration });

    // Clear form inputs
    setTitle('');
    setDescription('');
    setFrequency('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Habit Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Habit Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <br />
      <label>
        Frequency:
        <input type="text" value={frequency} onChange={(event) => setFrequency(event.target.value)} />
      </label>
      <br />
      <label>
        Duration:
        <input type="text" value={duration} onChange={(event) => setDuration(event.target.value)} />
      </label>
      <br />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
