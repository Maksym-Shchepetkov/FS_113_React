import s from './Team.module.css';
const Team = () => {
  return (
    <div>
      <h2>Team</h2>
      <ul className={s.ul}>
        <li>Alice</li>
        <li>Jack</li>
        <li>John</li>
        <li>Jane</li>
      </ul>
    </div>
  );
};
export default Team;
