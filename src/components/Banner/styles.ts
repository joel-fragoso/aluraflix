import styled from 'styled-components';

// import bgImg from '../../assets/background.jpg';

const bannerImg = 'https://img.youtube.com/vi/ZY3-MFxVdEw/maxresdefault.jpg';

export const Container = styled.div`
  height: calc(100vh - 8px);
  display: flex;
  align-items: center;
  padding: 4rem 4%;
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
    background: url(${bannerImg}) no-repeat center;
    background-size: cover;
    opacity: 0.4;
    z-index: -1;
  }

  .video-info {
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 3rem;
      line-height: 1;
    }

    p {
      margin-top: 1rem;
      font-size: 1rem;
      line-height: 1.5;
      color: var(--grayMedium);
    }

    .action-btn {
      display: none;
      height: 48px;
      margin-top: 1rem;
    }

    & + div {
      margin-left: 1rem;
    }

    @media (max-width: 468px) {
      word-wrap: break-word;

      h1 {
        text-align: center;
        font-size: 1.8rem;
      }

      p {
        display: none;
      }
    }

    @media (max-width: 800px) {
      width: 100%;

      h1 {
        font-size: 2rem;
        line-height: 1.2;
      }

      .action-btn {
        display: flex;
      }
    }
  }

  @media (max-width: 468px) {
    height: calc(90vh - 8px);
  }
`;
