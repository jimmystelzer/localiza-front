import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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