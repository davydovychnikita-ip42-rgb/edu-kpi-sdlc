import { NavLink, useNavigate } from 'react-router';
import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper} onClick={() => {navigate('/')}}>
        <h1 className={styles.logo}>Свій до свого</h1>
      </div>
      <div className={styles.optionsWrapper}>
        <NavLink to='/' className={styles.catalogWrapper}>
            <p>Каталог</p>
        </NavLink>
        <NavLink to='/cart' className={styles.cartWrapper}>
            <p>Кошик</p>
        </NavLink>
        <NavLink to='/profile' className={styles.profileWrapper}>
            <p>Профіль</p>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;