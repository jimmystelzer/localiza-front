'use client'
import React from 'react';
import Image from 'next/image'
import { useProducts } from './hooks/useProducts';
import ProductList from './components/Products/ProductList';
import { Breadcrumbs, CircularProgress, Grid, Link, Typography } from '@mui/material';
import Headline from './components/Headline/Headline';

export default function Home() {
  const { products, isLoading, isError, error } = useProducts({ limit: 20, page: 1 });

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
                      {JSON.stringify(error)}
                    </Typography>
                </Grid>
            </Grid>
        );
  }

  return (
    <Grid margin={3}>
      <Headline/>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Typography sx={{ color: 'text.primary' }}>Home</Typography>
        <Link underline="hover" color="inherit" href="/">
          Produtos
        </Link>
      </Breadcrumbs>
      <ProductList products={products} />
    </Grid>
  );
}
