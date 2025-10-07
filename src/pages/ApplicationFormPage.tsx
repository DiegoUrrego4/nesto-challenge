import { useParams } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';
import { useApplicationDetails } from '../hooks/useApplicationDetails';
import { Card, ContactForm } from '../components';
import styles from './ApplicationFormPage.module.scss';

export const ApplicationFormPage = () => {
  const { applicationId } = useParams<{ applicationId: string }>();
  const { application, product, isLoading, error } =
    useApplicationDetails(applicationId);

  if (isLoading) {
    return <SpinnerDotted className={styles.centered} color="red" />;
  }

  if (error || !application || !product) {
    return <div>{error || 'Application data could not be loaded.'}</div>;
  }

  return (
    <div className={styles.formPageContainer}>
      <div className={styles.productColumn}>
        <Card
          id={product.id}
          title={product.type === 'FIXED' ? 'Best fixed' : 'Best variable'}
          type={product.family}
          productName={product.name}
          rate={`${product.bestRate}%`}
        />
      </div>
      <div className={styles.formColumn}>
        <ContactForm application={application} />
      </div>
    </div>
  );
};
