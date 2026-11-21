import { NavLink } from "react-router";

function Login() {
  return (
    <div>
      <h1>
        Login
      </h1>
      <div>
        <NavLink to='/'>
          Login
        </NavLink>
      </div>
      <p>
        Немає акаунту? <NavLink to='/register'>Зареєструватися</NavLink>
      </p>
    </div>
  );
}

export default Login;