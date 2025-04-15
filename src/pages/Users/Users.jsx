import { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';
import List from '../../components/List/List';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const users = await fetchUsers();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2>Users page</h2>
      <List data={users} />
    </div>
  );
};
export default Users;
