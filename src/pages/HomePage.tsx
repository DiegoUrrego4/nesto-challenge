import { Card } from '../components/Card/Card';
import { SpinnerDotted } from 'spinners-react';
import { useMortgageProducts } from '../hooks';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const { bestFixedProduct, bestVariableProduct, isLoading, error } =
    useMortgageProducts();

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
          title="Best fixed"
          type={bestFixedProduct.family}
          productName={bestFixedProduct.name}
          rate={`${bestFixedProduct.bestRate}%`}
        />
      )}
      {bestVariableProduct && (
        <Card
          title="Best variable"
          type={bestVariableProduct.family}
          productName={bestVariableProduct.name}
          rate={`${bestVariableProduct.bestRate}%`}
        />
      )}
    </div>
  );
};
