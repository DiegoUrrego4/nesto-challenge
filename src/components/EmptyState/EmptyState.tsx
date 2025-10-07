import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import noApplicationsImage from '@/assets/no-applications.png';
import styles from './EmptyState.module.scss';

export const EmptyState = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.emptyStateContainer}>
            <img
                src={noApplicationsImage}
                alt="A sad house because there are no applications"
                className={styles.illustration}
            />
            <h2 className={styles.title}>{t('emptyState.title')}</h2>
            <p className={styles.text}>
                {t('emptyState.text')}{' '} <br />
                <Link to="/" className={styles.link}>{t('emptyState.cta')}</Link>
            </p>
        </div>
    );
};