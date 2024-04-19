// todoreducer.js

// Initial state for tasks, fetched from localStorage or empty
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  };
  
  // Reducer to manage tasks based on dispatched actions
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const newTask = { id: action.payload.id, name: action.payload.name, completed: false };
        const updatedTasks = [...state.tasks, newTask];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return {
          ...state,
          tasks: updatedTasks
        };
      case 'DELETE_TASK':
        const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
        return {
          ...state,
          tasks: filteredTasks
        };
      case 'TOGGLE_TASK':
        const updatedTasksWithToggle = state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        );
        localStorage.setItem('tasks', JSON.stringify(updatedTasksWithToggle));
        return {
          ...state,
          tasks: updatedTasksWithToggle
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  