import { createContext, useState } from 'react';
import ComponentA from './ComponentA';
import Modal from '../Modal/Modal';
import { useToggle } from '../hooks/useToggle';

export const myContext = createContext();

const UseContextExample = () => {
  const { isOpen, openModal, closeModal } = useToggle();
  const simpleMessage = 'Test';
  const contextValue = {
    message: 'Hello from context',
  };
  return (
    <myContext.Provider value={contextValue}>
      {isOpen && (
        <Modal onClose={closeModal}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis optio possimus id sunt ipsa laboriosam voluptas vero nisi, odio libero
          quis dolores velit aliquam nemo? Voluptate quod deleniti sit laborum!
        </Modal>
      )}
      <button onClick={openModal}>Open modal</button>
      <div className='parent'>
        <h2>useContext Example</h2>
        <ComponentA simpleMessage={simpleMessage} />
      </div>
    </myContext.Provider>
  );
};
export default UseContextExample;
