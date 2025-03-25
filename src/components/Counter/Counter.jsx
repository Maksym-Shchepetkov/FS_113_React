import s from './Counter.module.css';

export const Counter = () => {
  const handlePlusClick = e => {
    console.log(e);
  };
  const sayHello = name => {
    console.log(`Hello , ${name}`);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <div className={s.flex}>
          <button onClick={() => console.log('Click!')} className='btn'>
            minus
          </button>
          <button onClick={() => sayHello('Ihor')} className='btn'>
            reset
          </button>
          <button onClick={handlePlusClick} className='btn'>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
