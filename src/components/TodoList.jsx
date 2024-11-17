import TodoItem from "./TodoItem";
import style from './todolist.module.css';

export default function TodoList({todos}) {
  return (
    <div className={style.todoList}>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
