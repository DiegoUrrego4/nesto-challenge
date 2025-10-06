import noApplicationsImage from '@/assets/no-applications.png'; 
import styles from './ApplicationPage.module.scss';

export const ApplicationPage = () => {
  return (
    <div className={styles.emptyStateContainer}>
      <img
        src={noApplicationsImage}
        alt="Una casa triste porque no hay aplicaciones"
        className={styles.illustration}
      />
      <h2 className={styles.title}>Aún no tienes solicitudes</h2>
      <p className={styles.text}>
        Parece que no has iniciado ningún proceso. <br />
        ¡Encontremos la mejor tasa para ti en la página de inicio!
      </p>
    </div>
  );
};