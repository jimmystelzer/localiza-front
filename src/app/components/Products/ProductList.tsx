import React, { useState } from 'react';
import { Product } from '../../services/productService';
import {
  Box,
  CircularProgress,
  Pagination,
} from '@mui/material';
import ProductCard from './ProductCard';
import { useProducts } from '@/app/hooks/useProducts';

interface ProductListProps {
  products: Product[] | undefined;
}

const ProductList: React.FC<ProductListProps> = () => {
  const [page, setPage] = useState(1);
  const limit = 8;
  const { data, isLoading, error, totalCount } = useProducts({ page, limit });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Erro ao carregar os produtos.</div>;
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))'
          ,
          gap: 2,
        }}
      >
        {data?.products?.map((product) => (
          <ProductCard key={`ProductId-${product.id}`} product={product} />
        ))}
      </Box>
      {totalCount && ( // Exibe o paginador se totalCount existir
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Pagination
            count={Math.ceil(totalCount / limit)} // Calcula o número de páginas
            page={page}
            onChange={handleChange}
          />
        </Box>
      )}
    </>
  );
};

export default ProductList;
