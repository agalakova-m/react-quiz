import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.bgColor};
    font-family: 'Poppins', Roboto, sans-serif;
    font-weight: 300;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    &:not(:disabled) {
      color: ${({ theme }) => theme.textColor};
    }
  }
`;
