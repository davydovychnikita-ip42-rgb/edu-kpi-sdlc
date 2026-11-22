import stylesAuth from '../Auth.module.css';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  }

  return (
    <div className={stylesAuth.form}>
      <h1>
        Login
      </h1>
      <form onSubmit={(event) => {event.preventDefault()}}>
        <div className={stylesAuth.inputWrapper}>
          <label htmlFor='emailInput'>Email</label>
          <input type='email' id='emailInput' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
        </div>
        <div className={stylesAuth.inputWrapper}>
          <label htmlFor='passwordInput'>Password</label>
          <input type='password' id='passwordInput' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
        </div>
      </form>
      <div className={stylesAuth.actionWrapper}>
        <button onClick={handleLogin}>
          Login
        </button>
      </div>
      <p className={stylesAuth.otherWrapper}>
        Немає акаунту? <NavLink to='/register'>Зареєструватися</NavLink>
      </p>
    </div>
  );
}

export default Login;