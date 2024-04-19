// todoActions.js

// Action to add a new task
export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  // Action to delete a task by ID
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId,
  });
  