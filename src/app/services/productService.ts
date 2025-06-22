import { apiClient } from './apiClient';

export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export const getProducts = async (limit: number, page: number): Promise<{products: Product[]; totalCount: number}> => {
  const [products] = await Promise.all([
    apiClient.get(`/products?limit=${limit}&page=${page}`),
  ]);

  return {
    products: products.products,
    totalCount: 100,
  };
};

export const getProductById = async (id: number): Promise<Product> => {
  const [product] = await Promise.all([
    apiClient.get(`/products/${id}`),
  ]);
  return product.product;
};
