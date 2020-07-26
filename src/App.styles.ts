import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
  }

  .start,
  .next {
    cursor: pointer;
    background-color: gray;
    border-radius: 10px;
    height: 40px;
    border: 2px solid lightcoral;
    padding: 0 40px;
  }
`;
