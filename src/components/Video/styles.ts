import styled from 'styled-components';

export const Container = styled.div`
  background: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 56.25vh;
  width: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
