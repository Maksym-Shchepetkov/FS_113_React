import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import About from '../pages/About/About';
import { lazy, Suspense } from 'react';

const Users = lazy(() => import('../pages/Users/Users'));
const UserDetails = lazy(() => import('../pages/UserDetails/UserDetails'));
const UserPosts = lazy(() => import('./nestedRoutes/UserPosts'));
const Company = lazy(() => import('./nestedRoutes/Company'));
const Aim = lazy(() => import('./nestedRoutes/Aim'));
const Team = lazy(() => import('./nestedRoutes/Team'));
const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='team' element={<Team />} />
          <Route path='company' element={<Company />} />
          <Route path='aim' element={<Aim />} />
        </Route>
        <Route path='/profiles' element={<Navigate to='/users' />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserDetails />}>
          <Route path='info' element={<h2>Info about user</h2>} />
          <Route path='posts' element={<UserPosts />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
export default App;
