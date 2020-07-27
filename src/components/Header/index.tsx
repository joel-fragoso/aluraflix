import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <a href="/">
          <img src={logoImg} alt="Aluraflix" />
        </a>
        <a href="/">Novo vídeo</a>
      </header>
    </Container>
  );
};

export default Header;
