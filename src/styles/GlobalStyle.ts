import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #2a7ae4;
    --black: #000;
    --blickLigter: #9e9e9e;
    --grayLight: #f5f5f5;
    --grayMedium: #e5e5e5;
    --white: #fff;
    --frontEnd: #6bd1ff;
    --backEnd: #00c86f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 1rem;
    background: var(--black);
  }

  *, input, button {
    border: none;
    outline: none;
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
