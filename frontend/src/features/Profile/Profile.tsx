import { useAppDispatch } from "../../app/hooks";
import { logout } from "../Auth/authSlice";

function Profile () {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <main>
      This is Profile
      <div>
        {/* <NavLink to='/login'> */}
        <button onClick={handleLogout}>
          Log out
        </button>
      </div>
    </main>
  );
}

export default Profile;