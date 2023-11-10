import React from 'react';
import { Container } from '@mui/material';
import Header from '../Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};

export default Layout;
