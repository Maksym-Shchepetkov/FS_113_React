import { useState } from 'react';
import { Counter } from './Counter/Counter';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import { TodoList } from './TodoList/TodoList';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Header />
      {/* <Counter /> */}
      <button onClick={() => setIsOpen(!isOpen)}>Open modal</button>
      {isOpen && (
        <Modal onClose={handleClose}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque minus laboriosam velit, dolores optio? Hic velit quis debitis
          cumque, ad nesciunt praesentium blanditiis, modi quod excepturi ea dolorem recusandae?
        </Modal>
      )}
      <TodoList />
    </>
  );
};
export default App;
