import React, { useRef } from "react";
import "../App.css"; // Optional, for specific NewTodo styling

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {

    const textInput = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredInput = textInput.current?.value.trim();

        if (!enteredInput || enteredInput.length === 0) {
            return;
        }

        props.onAddTodo(enteredInput);

        if (textInput.current) {
            textInput.current.value = "";
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" name="text" ref={textInput} autoComplete="off"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewTodo;
