import { useState } from 'react';
import todosData from './../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';
export const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const [todoValue, setTodoValue] = useState('');

  const handleDeleteTodo = id => {
    const newData = todos.filter(item => item.id !== id);
    console.log(newData);
    setTodos(newData);
  };

  const addTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      todo: todoValue,
    };

    setTodos([...todos, newTodo]);
    setTodoValue('');
  };

  return (
    <div>
      <div className='flex'>
        <input value={todoValue} onChange={e => setTodoValue(e.target.value)} className={s.input} />
        <button onClick={addTodo} className='btn border'>
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map(item => (
          <TodoItem onDelete={handleDeleteTodo} key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
