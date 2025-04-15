import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsByUserId } from '../../services/api';

const UserPosts = () => {
  // users/1/posts
  // users/:userId/posts
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPostsByUserId(userId);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [userId]);
  return (
    <div>
      <ul>
        {posts.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default UserPosts;
