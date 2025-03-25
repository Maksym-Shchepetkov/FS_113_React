import s from './TodoList.module.css';
export const TodoItem = ({ id, completed, todo, onDelete }) => {
  return (
    <li className={s.item}>
      <input type='checkbox' />
      <span>{todo}</span>
      <button onClick={() => onDelete(id)} className='btn border'>
        Delete
      </button>
    </li>
  );
};
