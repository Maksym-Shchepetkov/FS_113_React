import { useContext } from 'react';
import ComponentB from './ComponentB';
import { authContext } from '../../providers/AuthProvider';

const ComponentA = ({ simpleMessage }) => {
  const { content } = useContext(authContext);

  return (
    <div className='first'>
      <h3>First Component</h3>
      <h4>{content}</h4>
      <ComponentB simpleMessage={simpleMessage} />
    </div>
  );
};
export default ComponentA;
