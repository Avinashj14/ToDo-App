# ToDo App

A simple ToDo application built with React and Redux for managing tasks.

## Live Demo

Explore the live demo of this ToDo app: [ToDo App Live Demo](https://todo-app-gilt-xi.vercel.app/)


## Overview

This project is a basic ToDo application that allows users to add tasks, mark tasks as completed, and delete tasks. The application uses React for the user interface and Redux for state management, with task data stored locally using localStorage.

## Key Features

- Add new tasks using the input field.
- View a list of tasks with options to mark as completed or delete.
- Tasks are persisted locally using Redux and localStorage.

## Folder Structure

The project is organized into the following structure:

src/
├── actions/
│   └── todoActions.js
├── components/
│   └── todo/
│       ├── TaskInput.js
│       ├── TaskList.js
│       ├── ToDo.js
│       ├── TaskInput.css
│       ├── TaskList.css
│       └── ToDo.css
├── reducer/
│   └── todoreducer.js
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── reportWebVitals.js
├── setupTests.js
└── store.js


## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository_url>

2. Navigate into the project directory:
    cd todo-app

3. Install dependencies:
    npm install

4. Start the development server:
    npm start

5. Open your browser and visit http://localhost:3000 to view the application.

## Technologies Used
React
Redux
HTML/CSS



