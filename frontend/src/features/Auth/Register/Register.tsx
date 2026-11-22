import { useState } from 'react';
import stylesAuth from '../Auth.module.css';
import { Link, useNavigate } from 'react-router';

function Register () {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigate = useNavigate();

  const handleRegister = () => {
    if (password !== passwordRepeat) {
      return;
    }
    navigate('/');
  }

  return (
    <div className={stylesAuth.form}>
      <h1>Register</h1>
      <form onSubmit={(event) => {event.preventDefault()}}>
        <div className={stylesAuth.inputWrapper}>
          <label htmlFor='nameInput'>Name</label>
          <input type='name' id='nameInput' value={name} onChange={(e) => {setName(e.target.value)}}></input>
        </div>
        <div className={stylesAuth.inputWrapper}>
          <label htmlFor='nicknameInput'>Nickname</label>
          <input type='nickname' id='nicknameInput' value={nickname} onChange={(e) => {setNickname(e.target.value)}}></input>
        </div>
        <div className={stylesAuth.inputWrapper}>
          <label htmlFor='phoneInput'>Phone</label>
          <input type='phone' id='phoneInput' value={phone} onChange={(e) => {setPhone(e.target.value)}}></input>
        </div>
        <div className={stylesAuth.inputWrapper}>
          <label htmlFor='emailInput'>Email</label>
          <input type='email' id='emailInput' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
        </div>
        <div className={stylesAuth.inputWrapper}>
          <label htmlFor='passwordInput'>Password</label>
          <input type='password' id='passwordInput' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
        </div>
        <div className={stylesAuth.inputWrapper}>
          <label htmlFor='passwordRepeatInput'>Repeat Password</label>
          <input type='password' id='passwordRepeatInput' value={passwordRepeat} onChange={(e) => {setPasswordRepeat(e.target.value)}}></input>
        </div>
      </form>
      <div className={stylesAuth.actionWrapper}>
        <button onClick={handleRegister}>
          Register
        </button>
      </div>
      <p className={stylesAuth.otherWrapper}>
        Маєте акаунт? <Link to='/login'>Увійти</Link>
      </p>
    </div>
  );
}

export default Register;