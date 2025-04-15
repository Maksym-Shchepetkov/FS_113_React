import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About page</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque doloremque beatae unde cum rem aspernatur? Expedita incidunt optio,
      possimus rem aspernatur quisquam maxime perferendis dolore. Asperiores magni quisquam adipisci?
      <nav>
        <NavLink to='aim'>Aim</NavLink>
        <NavLink to='team'>Team</NavLink>
        <NavLink to='company'>Company</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default About;
