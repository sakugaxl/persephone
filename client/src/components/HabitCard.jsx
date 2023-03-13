import React from 'react';

const HabitCard = ({ habit }) => {
  const { name, description, frequency, duration, progress, streak } = habit;

  return (
    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
      <h2 className="text-lg font-medium">{name}</h2>
      <p className="text-gray-500 text-sm mb-2">{description}</p>
      <div className="grid grid-cols-2 gap-x-4 text-gray-500 text-sm">
        <div>
          <p>Frequency:</p>
          <p className="font-medium">{frequency}</p>
        </div>
        <div>
          <p>Duration:</p>
          <p className="font-medium">{duration}</p>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-md overflow-hidden mt-2">
        <div className="w-1/2 h-full bg-purple-500"></div>
      </div>
      <p className="text-gray-500 text-sm mt-2">
        Streak: <span className="font-medium">{streak}</span>
      </p>
      <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md mt-4">
        Complete Habit
      </button>
    </div>
  );
};

export default HabitCard;
