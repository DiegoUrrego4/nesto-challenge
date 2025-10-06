import { Card } from '../components/Card/Card';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <Card
        title="Best fixed"
        type="(type)"
        productName="(product name)"
        rate="1.25%"
      />
      <Card
        title="Best variable"
        type="(type)"
        productName="(product name)"
        rate="1.05%"
      />
    </div>
  );
};
