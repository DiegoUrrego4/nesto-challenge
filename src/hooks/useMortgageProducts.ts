import { useState, useEffect, useMemo } from 'react';
import { getProducts } from '../services/api';
import type { Product } from '../types/product';

export const useMortgageProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError('Could not load mortgage products. Please try again later.');
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const { bestFixedProduct, bestVariableProduct } = useMemo(() => {
    if (!products || products.length === 0) {
      return { bestFixedProduct: null, bestVariableProduct: null };
    }

    const findBestProduct = (type: 'FIXED' | 'VARIABLE') => {
      return products
        .filter((p) => p.type === type)
        .reduce((best, current) =>
          current.bestRate < best.bestRate ? current : best
        );
    };

    return {
      bestFixedProduct: findBestProduct('FIXED'),
      bestVariableProduct: findBestProduct('VARIABLE'),
    };
  }, [products]);

  return { isLoading, error, bestFixedProduct, bestVariableProduct };
};
