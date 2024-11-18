import TodoItem from "./TodoItem";
import style from './todolist.module.css';

export default function TodoList({todos, setTodos}) {
  return (
    <div className={style.todoList}>
      {todos.map((item) => (
        <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
