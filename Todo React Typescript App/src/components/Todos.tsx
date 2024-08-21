import React from "react";
import { Todo } from "../model/todo";
import TodoItem from "./TodoItem";
import "../App.css"; // Optional, for specific Todos styling

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
    return (
        <ul>
            {
                props.items.map(item => (
                    <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
                ))
            }
        </ul>
    )
}

export default Todos;
