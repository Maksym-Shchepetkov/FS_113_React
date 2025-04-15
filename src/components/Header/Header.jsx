import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
const Header = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header>
      <h2>Routing</h2>
      <nav className={s.nav}>
        <NavLink className={setActiveClass} to='/'>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/about'>
          About
        </NavLink>
        <NavLink className={setActiveClass} to='/users'>
          Users
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
