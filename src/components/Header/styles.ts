import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  header {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 4%;

    a {
      display: flex;
      align-items: center;

      img {
        height: 40px;
        object-fit: cover;
      }
    }

    @media (max-width: 468px) {
      a {
        img {
          height: 32px;
        }
      }
    }
  }
`;
