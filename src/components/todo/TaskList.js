// TaskList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Function to delete a task by ID
  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  // Function to toggle task completion status
  const handleToggleComplete = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'checked' : ''}>
          <div className="custom-checkbox" onClick={() => handleToggleComplete(task.id)}>
            {task.completed ? (
              <img
                src="https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg"
                alt="checkmark"
                className="checkmark"
              />
            ) : (
              <div className="checkbox-placeholder" />
            )}
          </div>
          <span>{task.name}</span>
          <button onClick={() => handleDeleteTask(task.id)}>&times;</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
