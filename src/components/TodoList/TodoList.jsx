import { useEffect, useState } from 'react';
import todosData from './../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';
export const TodoList = () => {
  // const [todos, setTodos] = useState(() => {
  //   const savedData = JSON.parse(localStorage.getItem('todos'));
  //   if (savedData?.length) {
  //     return savedData;
  //   }
  //   return [];
  // });

  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) ?? []);

  const [todoValue, setTodoValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
