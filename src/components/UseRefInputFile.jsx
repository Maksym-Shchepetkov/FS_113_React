import { useEffect, useRef } from 'react';

const UseRefInputFile = () => {
  const inputRef = useRef();
  console.log(inputRef);

  useEffect(() => {
    console.log(inputRef);
  }, []);

  return (
    <div>
      <h2>UseRefInputFile</h2>
      <button onClick={() => inputRef.current.click()}>Click me!</button>
      <input style={{ visibility: 'hidden' }} ref={inputRef} type='file' />
    </div>
  );
};
export default UseRefInputFile;
