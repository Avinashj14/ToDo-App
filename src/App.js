// App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo/ToDo';

function App() {
  return (
    <div className="App">
      <ToDo /> {/* Renders the main ToDo component */}
    </div>
  );
}

export default App;
