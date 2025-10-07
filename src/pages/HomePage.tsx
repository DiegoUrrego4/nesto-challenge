import { useNavigate } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';
import { Card } from '../components';
import { useMortgageProducts } from '../hooks';
import { createApplication } from '../services/api';
import styles from './HomePage.module.scss';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { bestFixedProduct, bestVariableProduct, isLoading, error } =
    useMortgageProducts();

  const handleSelectedProduct = async (productId: number) => {
      try {
      const newApplication = await createApplication(productId);
      console.log('ID de aplicación para pruebas:', newApplication.id);
      navigate(`/application/${newApplication.id}`);
    } catch (error) {
      console.error('Falló la creación para pruebas:', error);
    }
  };

  if (isLoading) {
    return <SpinnerDotted className={styles.centered} color="red" />;
  }

  if (error) {
    return <div className={styles.centeredError}>{error}</div>;
  }

  return (
    <div className={styles.homeContainer}>
      {bestFixedProduct && (
        <Card
          id={bestFixedProduct.id}
          title={t('card.bestFixed')}
          type={bestFixedProduct.family}
          productName={bestFixedProduct.name}
          rate={`${bestFixedProduct.bestRate}%`}
          onSelectProduct={() => handleSelectedProduct(bestFixedProduct.id)}
        />
      )}
      {bestVariableProduct && (
        <Card
          id={bestVariableProduct.id}
          title={t('card.bestVariable')}
          type={bestVariableProduct.family}
          productName={bestVariableProduct.name}
          rate={`${bestVariableProduct.bestRate}%`}
          onSelectProduct={() => handleSelectedProduct(bestVariableProduct.id)}
        />
      )}
    </div>
  );
};
