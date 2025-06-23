import React from 'react';
import Image from 'next/image'
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <Image src={'/img/store.svg'} alt={'Não encontrado'} width="32" height="32" className="svgcolor" />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} paddingLeft={2}>
            Localiza
          </Typography>
          <Button color="inherit" component={Link} href="/">
            Produtos
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;