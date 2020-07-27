import styled from 'styled-components';

import bgImg from '../../assets/background.jpg';

export const Container = styled.div`
  height: calc(100vh - 8px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 8px solid var(--blackLight);
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 24%,
    rgba(0, 0, 0, 0) 76%,
    rgba(0, 0, 0, 1) 100%
  );

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(${bgImg}) no-repeat center;
    background-size: cover;
    opacity: 0.4;
    z-index: -1;
  }

  @media (max-width: 468px) {
    height: calc(90vh - 8px);
  }
`;
