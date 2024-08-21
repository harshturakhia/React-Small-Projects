import "./App.css";
import Todos from "./components/Todos";
import { Todo } from "./model/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    })
  }

  const onRemoveTodoHandler = (id: string) => {
    console.log("bsadha")

    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="app-container">
      <header>
        <h1>Todo App</h1>
      </header>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={onRemoveTodoHandler} />
    </div>
  )
}

export default App;
