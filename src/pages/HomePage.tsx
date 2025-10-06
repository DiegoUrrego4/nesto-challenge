import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card/Card';
import { SpinnerDotted } from 'spinners-react';
import { useMortgageProducts } from '../hooks';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const navigate = useNavigate();
  const { bestFixedProduct, bestVariableProduct, isLoading, error } =
    useMortgageProducts();

  const handleSelectedProduct = (productId: number) => {
  //   try {
  //   const newApplication = await createApplication(productId);
  //   console.log('ID de aplicación para pruebas:', newApplication.id);
  //   navigate(`/application/${newApplication.id}`);
  // } catch (error) {
  //   console.error('Falló la creación para pruebas:', error);
  // }
    console.log(`Simulando navegación para el producto ID: ${productId}`);
    navigate(`application/${productId}`);
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
          title="Best fixed"
          type={bestFixedProduct.family}
          productName={bestFixedProduct.name}
          rate={`${bestFixedProduct.bestRate}%`}
          onSelectProduct={() => handleSelectedProduct(bestFixedProduct.id)}
        />
      )}
      {bestVariableProduct && (
        <Card
          id={bestVariableProduct.id}
          title="Best variable"
          type={bestVariableProduct.family}
          productName={bestVariableProduct.name}
          rate={`${bestVariableProduct.bestRate}%`}
          onSelectProduct={() => handleSelectedProduct(bestVariableProduct.id)}
        />
      )}
    </div>
  );
};
