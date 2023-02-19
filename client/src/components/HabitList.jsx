import React, { useState, useEffect } from "react";
import axios from "axios";
// import Habit from "../components/Habit";

const HabitList = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/habits");
      setHabits(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Habit Tracker</h1>
      {habits.map((habit) => (
        <Habit key={habit._id} habit={habit} />
      ))}
    </div>
  );
};

export default HabitList;
