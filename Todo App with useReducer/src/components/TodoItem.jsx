import React from 'react';
import '../App.css';

function TodoItem({ todo, dispatch }) {
    return (
        <li className="todo-item">
            <span
                className={todo.completed ? 'completed' : ''}
                onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            >
                Title : {todo.text}
            </span>
            <span
                className={todo.completed ? 'completed' : ''}
                onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            >
                Desc : {todo.desc}
            </span>
            <button
                className="remove-button"
                onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
            >
                Remove
            </button>
        </li>
    );
}

export default TodoItem;
