import style from './todoitem.module.css'

export default function TodoItem({ item }) {
  return (
    <div className={style.container}>
      <div className={style.row}>
        {item}
      <span>
        <button className={style.deleteBtn}>X</button>
      </span>
      </div>
      <hr className={style.horizone} />
    </div>
  );
}
