import { Link, NavLink } from 'react-router-dom';
import NestoLogo from '../../assets/nesto-EN_Primary.png';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={NestoLogo} alt="Nesto Logo" />
        </Link>
        <nav className={styles.navLinks}>
          <NavLink
            to="/applications"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ''}`
            }
          >
            Applications
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
