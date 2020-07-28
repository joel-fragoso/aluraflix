import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container } from './styles';

const NewCategory: React.FC = () => {
  return (
    <Container>
      <Header>
        <Link to="/new-video">
          <Button outlined type="button">
            <FiArrowLeft />
            Voltar
          </Button>
        </Link>
      </Header>
    </Container>
  );
};

export default NewCategory;
