import React, { useState } from 'react';
import Image from 'next/image'
import { Product } from '../../services/productService';
import {
  Box,
  CircularProgress,
  Grid,
  Pagination,
  Typography,
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
    return (
      <center>
        <Grid padding={3} margin={3}>
          <CircularProgress />
        </Grid>
      </center>
    );
  }

  if (error) {
    return (
      <Grid container padding={4} margin={8} alignItems={'center'} justifyContent={'center'}>
        <Grid>
          <Image src={'/img/error.svg'} alt={'Erro'} width="128" height="128" className="svgcolor" />
        </Grid>
        <Grid>
          <Typography variant="h2">
            Erro
          </Typography>
          <Typography variant="h5" color="text.secondary" >
            {JSON.stringify(error)}
          </Typography>
        </Grid>
      </Grid>
    );
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
      {totalCount && ( 
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Pagination
            count={Math.ceil(totalCount / limit)}
            page={page}
            onChange={handleChange}
          />
        </Box>
      )}
    </>
  );
};

export default ProductList;
