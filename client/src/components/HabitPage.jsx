import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HabitList = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/habits');
      setHabits(result.data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {habits.map(habit => (
        <li key={habit._id}>
          {habit.title}: {habit.description} ({habit.frequency})
        </li>
      ))}
    </ul>
  );
};

const HabitForm = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const habit = { title, description, frequency };
    const result = await axios.post('/api/habits', habit);
    onCreate(result.data);
    setTitle('');
    setDescription('');
    setFrequency('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Frequency"
          value={frequency}
          onChange={event => setFrequency(event.target.value)}
        />
      </div>
      <button type="submit">Create habit</button>
    </form>
  );
};

const HabitPage = () => {
  const [habits, setHabits] = useState([]);

  const handleCreate = habit => {
    setHabits([...habits, habit]);
  };

  return (
    <div>
      <HabitForm onCreate={handleCreate} />
      <HabitList habits={habits} />
    </div>
  );
};

export default HabitPage;
