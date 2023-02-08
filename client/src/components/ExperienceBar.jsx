import React, { useState } from "react";

const ExperienceBar = () => {
  const [exp, setExp] = useState(0);
  const [level, setLevel] = useState(1);
  const [maxLevel, setMaxLevel] = useState(990);
  const [requiredExp, setRequiredExp] = useState(100);

  const handleAddExp = (amount) => {
    setExp((prevExp) => prevExp + amount);

    if (exp + amount >= requiredExp) {
      setLevel((prevLevel) => prevLevel + 1);
      setExp((prevExp) => (prevExp + amount) - requiredExp);
      setRequiredExp((prevRequiredExp) => prevRequiredExp * 1.5);
    }
  };

  const expLeft = requiredExp - exp;
  const expPercent = (exp / requiredExp) * 100;

  return (
    <div className="experience-bar">
      <div className="level">Level: {level}</div>
      <div className="bar-container">
        <div
          className="fill"
          style={{ width: `${expPercent}%` }}
        ></div>
      </div>
      <div className="exp">
        {exp}/{requiredExp}
      </div>
      <div className="exp-left">Exp left until next level: {expLeft}</div>
      <button onClick={() => handleAddExp(50)}>Add 50 Exp</button>
    </div>
  );
};

export default ExperienceBar;
