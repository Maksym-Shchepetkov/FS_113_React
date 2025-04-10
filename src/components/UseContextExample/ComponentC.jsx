import { useContext } from 'react';
import { myContext } from './UseContextExample';
import { authContext } from '../../providers/AuthProvider';

const ComponentC = ({ simpleMessage }) => {
  const { message } = useContext(myContext);
  const { sayHi, setContent } = useContext(authContext);
  return (
    <div className='target'>
      <h2>This is target component</h2>
      <h3>{simpleMessage}</h3>

      <h3>{message}</h3>
      <button onClick={sayHi}>Say hi</button>
      <button onClick={() => setContent('CONTEXT SO COOOL')}>Say hi</button>
    </div>
  );
};
export default ComponentC;
