import Header from './Header/Header';
import UseContextExample from './UseContextExample/UseContextExample';
import { useContext, useState } from 'react';
import { authContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import useHttp from './hooks/useHttp';
import useKeyDown from './hooks/useKeyDown';

const App = () => {
  const { user, login } = useContext(authContext);
  const [username, setUsername] = useState('');
  const { data } = useHttp('https://dummyjson.com/users');
  console.log(data);
  useKeyDown(() => {
    toast.success('SHIFT MAGIC');
  }, 'Shift');
  if (!user) {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (username === 'antonio') {
              return toast.error('Antonio go home...');
            }
            login(username);
          }}
        >
          <input value={username} onChange={e => setUsername(e.target.value)} type='text' />
          <button>Login</button>
        </form>
      </div>
    );
  }
  return (
    <div>
      <Header />
      {/* Step 1. Use memo calc logic */}
      {/* <UseMemoExample /> */}

      {/* Step 2. Use ref */}
      {/* <UseRefRenderCountExample /> */}

      {/* Step 3. Use ref file*/}
      {/* <UseRefInputFile /> */}

      {/* Step 4. Use forward ref */}
      {/* <UseRefForwardRefExample /> */}

      {/* Step 5. Use context */}
      <UseContextExample />
    </div>
  );
};
export default App;
