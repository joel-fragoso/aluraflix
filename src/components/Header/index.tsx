import React from 'react';

import logoImg from '../../assets/logo.png';

import ButtonLink from '../ButtonLink';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <a href="/">
          <img src={logoImg} alt="Aluraflix" />
        </a>
        <ButtonLink outlined href="/">
          Novo vídeo
        </ButtonLink>
      </header>
    </Container>
  );
};

export default Header;
