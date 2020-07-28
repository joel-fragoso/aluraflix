import React, { useState, useEffect } from 'react';
import { FiPlayCircle } from 'react-icons/fi';
import api from '../../services/api';

import Video from '../Video';
import Button from '../Button';

import { Container } from './styles';

interface IExtra {
  description: string;
  url: string;
}

interface IVideo {
  title: string;
  url: string;
}

interface ICategory {
  title: string;
  url: string;
  color: string;
  extra?: IExtra;
  videos: IVideo[];
}

const Banner: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories');

      setCategories(response.data);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <div className="video-info">
        <h1>{categories[0]?.videos[0].title}</h1>
        <p>{categories[0]?.extra?.description}</p>
        <Button outlined className="action-btn" type="button">
          <FiPlayCircle />
          Assistir agora
        </Button>
      </div>
      <Video
        title={categories[0]?.videos[0].title}
        src={categories[0]?.videos[0].url}
      />
    </Container>
  );
};

export default Banner;
