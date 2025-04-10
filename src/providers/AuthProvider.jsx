import { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('Eduardo');
  const [content, setContent] = useState('NAME');
  const login = username => setUser(username);
  const logout = () => setUser('');

  const contextValue = {
    user,
    login,
    content,
    setContent,
    logout,
    sayHi: function () {
      toast.success(`Hello, ${user}`);
      console.log(`Hello, ${user}`);
    },
  };
  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};
export default AuthProvider;
