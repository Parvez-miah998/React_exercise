import style from './todoitem.module.css'

export default function TodoItem({ item, todos, setTodos }) {
  function handelDelete(){
    console.log("Delete Item for ", item);
    setTodos(todos.filter((todo)=> item != todo))
  }

  function handelClick(name){
    setTodos(todos.map((todo)=>todo.name === name ? {...todo, done: !todo.done } : todo))    
  }

  const doneTask = item.done ? style.completed : "";

  return (
    <div className={style.container}>
      <div className={style.row}>
        <span className={doneTask} style={{cursor:"pointer"}} onClick={()=>handelClick(item.name)}>{item.name}</span>
      <span>
        <button onClick={()=>handelDelete(item)} className={style.deleteBtn}>X</button>
      </span>
      </div>
      <hr className={style.horizone} />
    </div>
  );
}
