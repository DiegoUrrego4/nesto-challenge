import { useState, useEffect, useCallback } from 'react';
import { getApplicationById, getProducts } from '../services/api';
import type { Application, Product } from '../types';

export const useApplicationDetails = (applicationId: string | undefined) => {
  const [application, setApplication] = useState<Application | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const [appData, allProducts] = await Promise.all([
        getApplicationById(id),
        getProducts(),
      ]);

      if (appData.productId) {
        const selectedProduct = allProducts.find(
          (p) => p.id === appData.productId
        );
        setProduct(selectedProduct || null);
      }

      setApplication(appData);
    } catch (err) {
      console.error('Failed to fetch page data', err);
      setError('Could not load application details.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!applicationId) {
      setIsLoading(false);
      setError('Application ID is missing.');
      return;
    }

    fetchData(applicationId);
  }, [applicationId, fetchData]);

  return { application, product, isLoading, error };
};