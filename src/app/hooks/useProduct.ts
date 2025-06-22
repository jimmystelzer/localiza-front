import { useQuery } from '@tanstack/react-query';
import { getProductById, Product } from '@/app/services/productService';

export const useProduct = (id: number) => {
  const { data, isLoading, error } = useQuery<Product, Error>({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });

  return {
    product: data,
    isLoading,
    isError: error != null,
    error,
  };
};