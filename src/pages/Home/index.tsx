import React from 'react';
import { FiVideo } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Banner from '../../components/Banner';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Link to="/new-video">
          <Button type="button">
            <FiVideo />
            Novo vídeo
          </Button>
        </Link>
      </Header>
      <Banner />
    </Container>
  );
};

export default Home;
