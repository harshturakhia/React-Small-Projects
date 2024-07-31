import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

// An empty array representing the list of to-dos.
const initialState = [];

// Handles different actions like adding, toggling, and removing todos.
function reducer(state, action) {

  switch (action.type) {

    case 'ADD_TODO':
      return [...state, {
        id: Date.now(),
        text: action.payload.text,
        desc: action.payload.desc,
        completed: false
      }];

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }

}

function App() {

  // Hook to manage state and dispatch actions.
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <AddTodo dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
