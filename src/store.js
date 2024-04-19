// store.js

import { createStore } from 'redux';
import todoReducer from './reducer/todoreducer';

// Create Redux store with the todoReducer
const store = createStore(todoReducer);

export default store;
