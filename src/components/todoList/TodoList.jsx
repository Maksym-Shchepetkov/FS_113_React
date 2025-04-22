import AddForm from './AddForm';

const TodoList = () => {
  const handleAddTodo = () => {};

  return (
    <div>
      <AddForm handleAddTodo={handleAddTodo} />
      <ul>
        {[].map(item => (
          <li key={item.id}>
            <h2>{item.todo}</h2>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
