import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import About from '../pages/About/About';
import Users from '../pages/Users/Users';
import Team from './nestedRoutes/Team';
import Company from './nestedRoutes/Company';
import Aim from './nestedRoutes/Aim';
import UserDetails from '../pages/UserDetails/UserDetails';
import UserPosts from './nestedRoutes/UserPosts';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='team' element={<Team />} />
          <Route path='company' element={<Company />} />
          <Route path='aim' element={<Aim />} />
        </Route>
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserDetails />}>
          <Route path='info' element={<h2>Info about user</h2>} />
          <Route path='posts' element={<UserPosts />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
