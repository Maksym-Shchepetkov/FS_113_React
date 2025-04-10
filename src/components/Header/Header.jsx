import { useContext, useState } from 'react';
import { authContext } from '../../providers/AuthProvider';
import Modal from '../Modal/Modal';
import { useToggle } from '../hooks/useToggle';

const Header = () => {
  const { isOpen, openModal, closeModal } = useToggle();

  const { user, logout } = useContext(authContext);
  return (
    <header>
      <h2>Hooks | useMemo, useRef, useContext </h2>
      <h2>{user}</h2>
      <button onClick={openModal}>Open info modal</button>
      <h2>Module 4 Part 2</h2>
      <button onClick={logout}>Logout</button>
      {isOpen && <Modal onClose={closeModal}>info</Modal>}
    </header>
  );
};
export default Header;
