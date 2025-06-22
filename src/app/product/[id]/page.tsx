'use client'
import React from 'react';
import Image from 'next/image'
import { useParams } from 'next/navigation';
import Product from '../../components/Products/Product';
import { useProduct } from '../../hooks/useProduct';
import { CircularProgress, Grid, Typography } from '@mui/material';

interface ProductPageProps {
}

const ProductPage: React.FC<ProductPageProps> = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const productId = parseInt(id, 10);
  const { product, isLoading, isError, error } = useProduct(productId);

  if (isLoading) {
    return (
      <center>
        <Grid padding={3} margin={3}>
          <CircularProgress />
        </Grid>
      </center>
    );
  }

  if (isError) {
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
                    {error?.message}
                </Typography>
            </Grid>
        </Grid>
    );
  }

  if (!product) {
    return (
        <Grid container padding={4} margin={8} alignItems={'center'} justifyContent={'center'}>
            <Grid>
                <Image src={'/img/not-found.svg'} alt={'Não encontrado'} width="128" height="128" className="svgcolor" />
            </Grid>
            <Grid padding={3}>
                <Typography variant="h2">
                    Nenhum produto encontrado
                </Typography>
                <Typography variant="h5" color="text.secondary" >
                    Não foi possível encontrar os dados do produto requisitado.
                </Typography>
            </Grid>
        </Grid>
    );
  }

  return (
    <Product
      id={product.id}
      title={product.title}
      description={product.description}
      price={product.price}
      image={product.image}
      category={product.category}
    />
  );
};

export default ProductPage;
