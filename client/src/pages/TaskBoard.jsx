import React, { useState } from 'react';
import ExperienceBar from '../components/ExperienceBar';
import Navbar from '../components/Navbar';

const Tasks = [
  {
    title: 'Task 1',
    description: 'This is task 1',
    recommendedRank: 1,
    time: '5 minutes',
    requirements: 'None',
  },
  {
    title: 'Task 2',
    description: 'This is task 2',
    recommendedRank: 2,
    time: '10 minutes',
    requirements: 'Task 1',
  },
  {
    title: 'Task 3',
    description: 'This is task 3',
    recommendedRank: 3,
    time: '15 minutes',
    requirements: 'Task 2',
  },
];

const TaskCard = ({ task, onAccept }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-lg font-medium">{task.title}</h3>
      <p className="mt-2">{task.description}</p>
      <div className="mt-4">
        <ExperienceBar rank={task.recommendedRank} />
      </div>
      <div className="mt-4">
        <button
          className="bg-indigo-500 text-white p-2 rounded-full"
          onClick={() => onAccept(task)}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

const TaskBoard = () => {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);

  const onAccept = task => {
    console.log(`Accepted task: ${task.title}`);

    // Show countdown and requirements for completing the task
    // ...
  };

  const selectedTask = Tasks[selectedTaskIndex];

  return (
    <div>
      <Navbar />
      <div className="task-board flex justify-center">
        <TaskCard task={selectedTask} onAccept={onAccept} />
      </div>
    </div>
  );
};

export default TaskBoard;
