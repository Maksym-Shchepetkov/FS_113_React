import { useState } from 'react';
import CustomInput from '../UseIdExample/CustomInput';

const Test = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>

      {Array(counter)
        .fill('')
        .map((item, idx) => (
          <CustomInput key={idx} />
        ))}
    </div>
  );
};
export default Test;
