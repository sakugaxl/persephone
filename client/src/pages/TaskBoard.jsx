import React, { useState } from 'react';
import Tasks from '../components/Tasks';
import TaskCards from '../components/TaskCards';

const TaskBoard = () => {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const onAccept = task => {
    // Move the accepted task to the tasks list
    // ...

    // Select another random task
    setSelectedTaskIndex(Math.floor(Math.random() * Tasks.length));
  };

  const onDecline = task => {
    // Select another random task
    setSelectedTaskIndex(Math.floor(Math.random() * Tasks.length));
  };

  const selectedTask = Tasks[selectedTaskIndex] || Tasks[0];

  return (
    <div className="task-board">
      <TaskCards
        currentRank={selectedTask.recommendedRank}
        onAccept={onAccept}
        onDecline={onDecline}
      />
    </div>
  );
};

export default TaskBoard;
