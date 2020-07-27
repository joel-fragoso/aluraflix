import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  header {
    width: 100%;
    height: 60px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    padding: 0 1rem;

    a {
      display: flex;
      align-items: center;

      img {
        height: 24px;
      }
    }

    @media (max-width: 468px) {
      min-height: 60px;
      justify-content: center;
    }
  }
`;
