import { NavLink } from "react-router";

function Profile () {
  return (
    <main>
      This is Profile
      <div>
        <NavLink to='/login'>
          Log out
        </NavLink>
      </div>
    </main>
  );
}

export default Profile;