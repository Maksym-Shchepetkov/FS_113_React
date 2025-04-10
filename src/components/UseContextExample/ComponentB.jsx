import useHttp from '../hooks/useHttp';
import ComponentC from './ComponentC';

const ComponentB = ({ simpleMessage }) => {
  const { data, isError, isLoading } = useHttp('https://dummyjson.com/products');
  console.log(data);

  return (
    <div className='second'>
      <h3>Second Component</h3>
      <ComponentC simpleMessage={simpleMessage} />
    </div>
  );
};
export default ComponentB;
