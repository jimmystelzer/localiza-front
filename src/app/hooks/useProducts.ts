import { useQuery } from '@tanstack/react-query';
import { getProducts, Product } from '../services/productService';

interface UseProductsOptions {
  limit?: number;
  page?: number;
}

export const useProducts = (options: UseProductsOptions = {}) => {
  const { limit = 20, page = 1 } = options;

  const query = useQuery({
    queryKey: ['products', limit, page],
    queryFn: () => getProducts(limit, page),
  });

  return {
    ...query,
    products: query.data?.products,
    totalCount: query.data?.totalCount,
  };
};
