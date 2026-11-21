import { NavLink } from "react-router";

function Register () {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <NavLink to='/'>
          Register
        </NavLink>
      </div>
      <p>
        Маєте акаунт? <NavLink to='/login'>Увійти</NavLink>
      </p>
    </div>
  );
}

export default Register;