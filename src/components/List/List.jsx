import { Link } from 'react-router-dom';

const List = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <Link to={`${item.id}`}>
              {item.firstName} {item.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
