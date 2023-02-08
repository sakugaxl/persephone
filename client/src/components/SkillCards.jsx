import React from 'react';

const SkillCard = ({ title, element, powerSystem, rarity, condition, cost, effect }) => {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <p>Element: {element}</p>
      <p>Power System: {powerSystem}</p>
      <p>Rarity: {rarity}</p>
      <p>Condition: {condition}</p>
      <p>Cost: {cost}</p>
      <p>Effect: {effect}</p>
    </div>
  );
};

const SkillCards = ({ skills }) => {
  return (
    <div className="skill-cards">
      {skills.map(skill => (
        <SkillCard
          key={skill.title}
          title={skill.title}
          element={skill.element}
          powerSystem={skill.powerSystem}
          rarity={skill.rarity}
          condition={skill.condition}
          cost={skill.cost}
          effect={skill.effect}
        />
      ))}
    </div>
  );
};

export default SkillCards;
