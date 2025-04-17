import { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';
import List from '../../components/List/LIst';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useLocation, useSearchParams } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  // const size = searchParams.get('size');
  // const isLoggedIn = searchParams.get('isLoggedIn');
  // const test = searchParams.get('test');
  // console.log(size, isLoggedIn, test);
  // console.log(typeof size, typeof isLoggedIn, typeof test);

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

  const handleChangeQuery = newValue => {
    if (!newValue) {
      searchParams.delete('query');
      return setSearchParams(searchParams);
    }
    searchParams.set('query', newValue);
    // searchParams.set('test', 12345);
    // searchParams.set('size', 'sm');
    // searchParams.set('isLoggedIn', true);
    setSearchParams(searchParams);
  };

  const filteredData = users.filter(
    user => user.firstName.toLowerCase().includes(query.toLowerCase()) || user.lastName.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <h2>Users page</h2>
      <input
        type='text'
        onChange={e => {
          searchParams.set('query', e.target.value);
          setSearchParams(searchParams);
        }}
      />
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <List data={filteredData} />
    </div>
  );
};
export default Users;
