import React from 'react';
import { FiVideo } from 'react-icons/fi';

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
        <ButtonLink href="/">
          <FiVideo />
          Novo vídeo
        </ButtonLink>
      </header>
    </Container>
  );
};

export default Header;
