import { useState } from "react";
import style from './form.module.css';

export default function Form({todos, setTodos}) {
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name:"", done:false});
    function handelSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name: "", done: false});
      }
  return (
    <form className={style.todoform} onSubmit={handelSubmit}>
      <div className={style.container}>
        <input 
            className={style.modernInput}
            onChange={(e) => setTodo({name: e.target.value, done: false})}
            type="text"
            placeholder="Enter a todo"
            value={todo.name}
        />
        <button className={style.modernButton} type="submit">Add</button>
      </div>
    </form>
  );
}
