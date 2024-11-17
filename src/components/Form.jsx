import { useState } from "react";
import style from './form.module.css';

export default function Form({todos, setTodos}) {
    const [todo, setTodo] = useState("");
    function handelSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
      }
  return (
    <form className={style.todoform} onSubmit={handelSubmit}>
      <div className={style.container}>
        <input 
            className={style.modernInput}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Enter a todo"
            value={todo}
        />
        <button className={style.modernButton} type="submit">Add</button>
      </div>
    </form>
  );
}
