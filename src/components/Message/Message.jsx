import clsx from 'clsx';
import s from './Message.module.css';
import { FaUser } from 'react-icons/fa';

const Message = ({ author = 'Incognito', text, isOnline = false }) => {
  return (
    <div>
      <h3 className={s.title}>
        <FaUser className={s.icon} />
        {author}
      </h3>
      {/* {isOnline ? <h6 className={`${s.status} ${s.green}`}>Online</h6> : <h6 className={`${s.status} ${s.red}`}>Offline</h6>} */}
      {isOnline ? <h6 className={clsx(s.status, s.green)}>Online</h6> : <h6 className={clsx(s.status, s.red)}>Offline</h6>}
      {isOnline && <h4>Написати</h4>}
      <p className={clsx(text.length > 10 && s.alert, 'text')}>{text}</p>
    </div>
  );
};

export default Message;
