const Message = ({ author = 'Incognito', text, isOnline = false }) => {
  return (
    <div>
      <h3>{author}</h3>
      {isOnline ? <h6>Online</h6> : <h6>Offline</h6>}
      {isOnline && <h4>Написати</h4>}
      <p>{text}</p>
    </div>
  );
};

export default Message;
