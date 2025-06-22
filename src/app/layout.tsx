'use client';
import React from 'react';
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container, ThemeProvider } from '@mui/material';
import { theme } from './theme';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Header />
          <Container maxWidth="xl">
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
