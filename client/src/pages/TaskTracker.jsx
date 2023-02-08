import React, { useState } from 'react';
import ExperienceBar from "../components/ExperienceBar";
import SkillPointCounter from "../components/SkillPointCounter";
import CharacterInventory from "../components/CharacterInventory";
import SkillTree from "../components/SkillTree";
import TaskList from "../components/TaskList";
import CurrencyA from "../components/CurrencyA";

// Heading/Header
const TaskTracker = () => {
  const [currentLevel, setCurrentLevel] = useState(1);

    return (
      <section className="max-w-7xl mx-auto">
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">Task Tracker</h1>
          <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Track your tasks and earn rewards!</p>
          <ExperienceBar currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
          <SkillPointCounter />
          <CurrencyA />
          <CharacterInventory />
          <SkillTree />
          <TaskList currentLevel={currentLevel} />
        </div>
      </section>
    );
  };
  
  export default TaskTracker;