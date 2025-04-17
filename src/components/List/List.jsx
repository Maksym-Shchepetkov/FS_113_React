import { Link, useLocation } from 'react-router-dom';

const List = ({ data }) => {
  // localhost:5173/users
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {/* // localhost:5173/users/22  */}
            <Link state={location} to={`${item.id}`}>
              {item.firstName} {item.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
