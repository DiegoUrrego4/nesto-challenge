import type { FC } from 'react';
import { formatProductFamily } from '../../utils';
import styles from './Card.module.scss';

interface CardProps {
  id: number;
  title: string;
  type: string;
  productName: string;
  rate: string;

  onSelectProduct?: (productID: number) => void;
}

export const Card: FC<CardProps> = ({
  id,
  title,
  type,
  productName,
  rate,
  onSelectProduct,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{formatProductFamily(type)}</p>
      </div>

      <p className={styles.productName}>{productName}</p>

      <p className={styles.rate}>{rate}</p>

      <button className={styles.button} onClick={() => onSelectProduct?.(id)}>
        Select this product
      </button>
    </div>
  );
};
