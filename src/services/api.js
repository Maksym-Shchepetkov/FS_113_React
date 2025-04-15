import axios from 'axios';

export const fetchHits = async (query, page, hitsPerPage, signal) => {
  const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=${hitsPerPage}`, { signal });
  return response.data;
};

export const fetchUsers = async () => {
  const response = await axios.get('https://dummyjson.com/users');
  return response.data.users;
};
export const fetchUserById = async userId => {
  const response = await axios.get(`https://dummyjson.com/users/${userId}`);
  return response.data;
};
export const fetchPostsByUserId = async userId => {
  const response = await axios.get(`https://dummyjson.com/posts/user/${userId}`);
  return response.data.posts;
};
