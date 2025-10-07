import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NestoLogo from '../../assets/nesto-EN_Primary.png';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const { t, i18n } = useTranslation();

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
            {t('nav.applications')}
          </NavLink>
        </nav>
        <div className={styles.languageSwitcher}>
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={i18n.language === 'en' ? styles.active : ''}
          >
            🇺🇸
          </button>
          <button
            onClick={() => i18n.changeLanguage('fr')}
            className={i18n.language === 'fr' ? styles.active : ''}
          >
            🇨🇦
          </button>
          <button
            onClick={() => i18n.changeLanguage('es')}
            className={i18n.language === 'es' ? styles.active : ''}
          >
            🇪🇸
          </button>
        </div>
      </div>
    </header>
  );
};
