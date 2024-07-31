import React, { useState } from 'react';
import '../App.css';
// import './AddTodo.css'

function AddTodo({ dispatch }) {
    const [text, setText] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO', payload: {
                text,
                desc
            }
        });
        setText('');
        setDesc('');
    };

    return (
        <form className="add-todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter new todo"
                required
                className="todo-input"
            />

            <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Enter todo description"
                className="todo-input"
            />
            <button type="submit" className="add-button">Add</button>
        </form>
    );
}

export default AddTodo;
