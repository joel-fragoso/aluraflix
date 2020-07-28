import React from 'react';
import { FiArrowLeft, FiTag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container } from './styles';

const NewVideo: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <Link to="/">
            <Button outlined type="button">
              <FiArrowLeft />
              Voltar
            </Button>
          </Link>
          <Link to="/new-category">
            <Button type="button">
              <FiTag />
              Nova categoria
            </Button>
          </Link>
        </div>
      </Header>
      <div>
        <input placeholder="Título" />
        <input placeholder="URL" />
        <input placeholder="Categoria" />
        <button type="button">Cadastrar</button>
      </div>
    </Container>
  );
};

export default NewVideo;
