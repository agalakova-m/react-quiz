import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.bgColor};
    font-family: 'Poppins', Roboto, sans-serif;
    font-weight: 300;
    transition: all 0.2s linear;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: all 0.2s linear;

    &:focus {
      box-shadow: 0px 0px 0px 5px violet;
      outline: none;
    }

    &:not(:disabled) {
      color: ${({ theme }) => theme.textColor};
    }
  }
`;
