import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <header>
        <a href="/">
          <img src={logoImg} alt="Aluraflix" />
        </a>
        {children}
      </header>
    </Container>
  );
};

export default Header;
