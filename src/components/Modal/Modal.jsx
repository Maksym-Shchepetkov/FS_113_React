import { useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ children, title = 'Default modal', onClose }) => {
  const handleBackdropClick = e => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    console.log('Модалка на екрані!!!');
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const intervalID = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);

    const timeoutID = setTimeout(() => {
      console.log('Бадабум!');
    }, 4000);

    return () => {
      console.log('Модалка закрита! Івенти почищено!');
      clearInterval(intervalID);
      clearTimeout(timeoutID);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <h1>{title}</h1>
        <hr />
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
