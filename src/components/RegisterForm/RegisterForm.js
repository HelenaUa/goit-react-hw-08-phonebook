import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form style={{width: '320px'}} onSubmit={handleSubmit} autoComplete="off">
      <label style={{display: 'flex', flexDirection: 'column', marginBottom: '16px'}}>
        Username
        <input type="text" name="name" />
      </label>
      <label style={{display: 'flex', flexDirection: 'column', marginBottom: '16px'}}>
        Email
        <input type="email" name="email" />
      </label>
      <label style={{display: 'flex', flexDirection: 'column', marginBottom: '16px'}}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};