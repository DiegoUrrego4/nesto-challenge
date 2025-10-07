import axios, { type AxiosInstance } from 'axios';
import type { Application, CreateApplication, Product } from '../types';

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'x-nesto-candidat': import.meta.env.VITE_NESTO_CANDIDAT,
};

export const api: AxiosInstance = axios.create({
  baseURL: `https://nesto-fe-exam.vercel.app/api`,
  headers: {
    ...DEFAULT_HEADERS,
  },
  timeout: 25000,
});

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<Product[]>('/products');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error('Failed to fetch products');
  }
};

export const createApplication = async (productId: number): Promise<Application> => {
  try {
    const payload: CreateApplication = { productId };
    const response = await api.post<Application>('/applications', payload);
    return response.data;
  } catch (error) {
    console.error('Failed to create application:', error);
    throw new Error('Failed to create application');
  }
};

export const getApplicationById = async (id: string): Promise<Application> => {
  try {
    const response = await api.get<Application>(`/applications/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch application with id ${id}:`, error);
    throw new Error('Failed to fetch application');
  }
};

export const updateApplication = async (
  id: string,
  payload: Partial<Application>
): Promise<Application> => {
  try {
    const response = await api.put<Application>(`/applications/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error(`Failed to update application with id ${id}:`, error);
    throw new Error('Failed to update application');
  }
};

export const getApplications = async (): Promise<Application[]> => {
    try {
        const response = await api.get<Application[]>('/applications');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch applications:', error);
        throw new Error('Failed to fetch applications');
    }
};