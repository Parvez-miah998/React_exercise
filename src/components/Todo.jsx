import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handelSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((item) => (
        <TodoItem key={item} item ={item} />
      ))}
    </div>
  );
}
