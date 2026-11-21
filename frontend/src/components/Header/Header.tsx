import { NavLink } from 'react-router';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to='/' className={styles.logoWrapper}>
        <h1 className={styles.logo}>Свій до свого</h1>
      </NavLink>
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