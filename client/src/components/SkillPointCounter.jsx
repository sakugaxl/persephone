import React, { useState } from 'react';

const SkillPointCounter = () => {
    const [skillPoints, setSkillPoints] = useState(0);
    
    return (
    <div className="skill-point-counter">
        <p>Skill Points: {skillPoints}</p>
    </div>
  )
}

export default SkillPointCounter