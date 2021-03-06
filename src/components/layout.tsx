import styled from 'astroturf';
import React from 'react';

import Footer from  './footer';
import Header from './header';

import 'normalize.css';
import './layout.css';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Spacer = styled.div`
  flex: 1;
`;

interface Props {
  children?: React.ReactNode;
  className?: string;
  noFooterMargin?: boolean;
}

const Layout = ({ children, className, noFooterMargin }: Props) => {
  return (
    <Container>
      <Header />
      <main className={className}>{children}</main>
      <Spacer />
      <Footer noMarginTop={noFooterMargin} />
    </Container>
  );
};

export default Layout;
