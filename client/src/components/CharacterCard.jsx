import React from 'react';
import SkillCards from './SkillCards';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.photo} alt={character.name} />
      <h2>{character.name}</h2>
      <div className="character-stats">
        <p>Health: {character.health}</p>
        <p>Strength: {character.strength}</p>
        <p>Stamina: {character.stamina}</p>
        <p>Dexterity: {character.dexterity}</p>
        <p>Agility: {character.agility}</p>
        <p>Intelligence: {character.intelligence}</p>
        <p>Arcana: {character.arcana}</p>
        <p>Mental Fortitude: {character.mentalFortitude}</p>
        <p>Faith: {character.faith}</p>
      </div>
      <div className="character-traits">
        <p>Hair: {character.hair}</p>
        <p>Eyes: {character.eyes}</p>
        <p>Face: {character.face}</p>
        <p>Race: {character.race}</p>
        <p>Aura: {character.aura}</p>
        <p>Class: {character.class}</p>
        <p>Power System: {character.powerSystem}</p>
        <p>Armor: {character.armor}</p>
        <p>Primary Weapon: {character.primaryWeapon}</p>
        <p>Secondary Weapon: {character.secondaryWeapon}</p>
      </div>
      <SkillCards skills={character.skills} />
      <p>Birth Nation: {character.birthNation}</p>
    </div>
  );
};

export default CharacterCard;
