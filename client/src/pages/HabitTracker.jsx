import React, { useState } from 'react';
import ExperienceBar from "../components/ExperienceBar";
import SkillPointCounter from "../components/SkillPointCounter";
import CurrencyA from "../components/CurrencyA";
import Navbar from "../components/Navbar";
import HabitForm from "../components/HabitForm";

// Heading/Header
const HabitTracker = () => {
  const [currentLevel, setCurrentLevel] = useState(1);

    return (
      <section className="max-w-7xl mx-auto">
        <div>
          <header> <Navbar /> </header>
          <h1 className="font-extrabold text-[#222328] text-[32px]">Habit Tracker</h1>
          <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Track your tasks and earn rewards!</p>
          <ExperienceBar currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
          <SkillPointCounter />
          <CurrencyA />
          <HabitForm />
        </div>
      </section>
    );
  };
  
  export default HabitTracker;