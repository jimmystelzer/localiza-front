import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Loja Fake. Todos os direitos reservados.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;