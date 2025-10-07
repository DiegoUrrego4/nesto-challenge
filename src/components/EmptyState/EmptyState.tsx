import { Link } from 'react-router-dom';
import noApplicationsImage from '@/assets/no-applications.png';
import styles from './EmptyState.module.scss';

export const EmptyState = () => {
    return (
        <div className={styles.emptyStateContainer}>
            <img
                src={noApplicationsImage}
                alt="A sad house because there are no applications"
                className={styles.illustration}
            />
            <h2 className={styles.title}>You have no applications yet</h2>
            <p className={styles.text}>
                It seems you haven't started an application. <br />
                <Link to="/" className={styles.link}>Let's find the best rate for you!</Link>
            </p>
        </div>
    );
};