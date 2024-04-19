// TaskInput.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./TaskInput.css";

const TaskInput = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  // Function to add a new task
  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), name: taskName },
      });
      setTaskName("");
    }
  };

  return (
    <div className="search position-relative">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add your task"
        className="border-0 rounded-pill p-3 w-100 search-input"
      />
      <button className="btn rounded-pill btn-add px-4" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;
