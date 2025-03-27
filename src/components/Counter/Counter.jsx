import { useEffect, useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(10);

  // 1. Виконається цей колбек лише ОДИН раз при монтуванні
  useEffect(() => {
    console.log('Лічильник запущено');
  }, []);

  // 2. Виконається перший раз (при монтуванні) і всі наступні рази при зміні каунтера!
  useEffect(() => {
    if (counter === 0) {
      console.log('Лічильник 0, нічого не робимо');
      return;
    }
    console.log(`Лічильник було оновлено!Нове значення: ${counter}`);
  }, [counter]);
  // 3. Виконається перший раз (при монтуванні) і всі наступні рази при зміні кроку!
  useEffect(() => {
    console.log(`Крок було оновлено!Нове значення: ${step}`);
  }, [step]);

  // 4. Виконається перший раз (при монтуванні) і всі наступні рази при зміні каунтера або кроку!
  useEffect(() => {
    console.log(`Відбувається хаос!`);
  }, [step, counter]);

  const handlePlusClick = () => {
    setCounter(counter + step);
  };
  const handleMinusClick = () => {
    setCounter(counter - step);
  };
  const handleResetClick = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} type='number' onChange={e => setStep(+e.target.value)} />
        <div className={s.flex}>
          <button className='btn' onClick={handleMinusClick}>
            minus
          </button>
          <button onClick={handleResetClick} className='btn'>
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
