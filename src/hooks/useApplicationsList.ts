import { useState, useEffect, useCallback } from 'react';
import { getApplications, getProducts } from '../services/api';
import type { Application } from '../types';

export type EnrichedApplication = Application & { productName?: string };

export const useApplicationsList = () => {
    const [applications, setApplications] = useState<EnrichedApplication[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            const [allApps, allProducts] = await Promise.all([
                getApplications(),
                getProducts(),
            ]);

            const validApps = allApps.filter(
                (app) => app.applicants?.[0]?.firstName && app.applicants?.[0]?.lastName
            );

            const enrichedApps = validApps.map((app) => {
                const product = allProducts.find((p) => p.id === app.productId);
                return {
                    ...app,
                    productName: product ? product.name : 'Unknown Product',
                };
            });

            setApplications(enrichedApps);
        } catch (err) {
            setError('Could not load your applications.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { applications, isLoading, error };
};