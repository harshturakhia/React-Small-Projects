import React from 'react';
import TodoItem from './TodoItem';
import '../App.css';

function TodoList({ todos, dispatch }) {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
        </ul>
    );
}

export default TodoList;
