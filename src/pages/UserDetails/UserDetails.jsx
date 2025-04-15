import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
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
  }, [userId]);

  return (
    <div>
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
