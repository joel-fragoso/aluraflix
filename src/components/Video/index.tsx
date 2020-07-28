import React, { IframeHTMLAttributes } from 'react';

import { Container } from './styles';

type IVideoProps = IframeHTMLAttributes<HTMLIFrameElement>;

const Video: React.FC<IVideoProps> = ({ title, src }) => {
  return (
    <Container>
      <iframe
        title={title}
        src="https://www.youtube.com/embed/ZY3-MFxVdEw?autoplay=0&mute=1"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
};

export default Video;
