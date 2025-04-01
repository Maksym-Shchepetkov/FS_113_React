import { useState } from 'react';
import s from './Forms.module.css';
const ControlledForm = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
  };

  // const handleChangeName = e => {
  //   setValues({ ...values, username: e.target.value });
  // };

  // const handleChangeEmail = e => {
  //   setValues({ ...values, email: e.target.value });
  // };
  // DRY
  const handleChangeInput = e => {
    const { name, value } = e.target;
    console.log(name, value);
    // switch (name) {
    //   case 'username':
    //     return setValues({ ...values, username: value });
    //   case 'email':
    //     return setValues({ ...values, email: value });
    //   default:
    //     break;
    // }

    setValues({ ...values, [name]: value });
    // setValues({ ...values, username: value });
    // setValues({ ...values, email: value });
  };

  return (
    <section className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input onChange={handleChangeInput} value={values.username} className={s.input} name='username' placeholder='Enter the name:' />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input onChange={handleChangeInput} value={values.email} className={s.input} name='email' placeholder='Enter the email:' />
        </label>

        <button className={s.button}>Register</button>
      </form>
    </section>
  );
};
export default ControlledForm;
