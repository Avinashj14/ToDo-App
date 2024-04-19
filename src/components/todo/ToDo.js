// ToDo.js

import React from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import "./ToDo.css";

const ToDo = () => {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="card bg-light rounded-5 w-25 p-4">
        <div className="d-flex align-content-center border-0 justify-content-center">
          <h3 className="fw-bold">TO DO LIST </h3>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8028/8028200.png"
            alt=""
            width="25px"
            height="25px"
            className="m-1"
          />
        </div>
        <div className="card-body">
          <TaskInput /> {/* Renders the input for adding new tasks */}
          <TaskList /> {/* Renders the list of tasks */}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
