import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  // const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/users');
  console.log(location);
  console.log(goBackRef);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchUserById(userId);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // setTimeout(() => {
    //   navigate('/');
    // }, 4000);
  }, [userId]);

  return (
    <div>
      <Link to={goBackRef.current}>Go back to users</Link>
      {/* <button onClick={() => navigate('/users')}>Go back</button> */}
      <img src={user.image} />
      <p>
        {user.firstName} {user.lastName}
      </p>
      <nav>
        {/* localhost:5173/users/1/posts */}
        {/* localhost:5173/users/1/info */}
        <NavLink to='info'>Info</NavLink>
        <NavLink to='posts'>Posts</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default UserDetails;
