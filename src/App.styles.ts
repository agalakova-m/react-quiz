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
    background-color: #f0f0f0;
  }

  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  > h1 {
    margin-bottom: 30px;
  }

  > p {
  }

  button {
    min-width: 200px;
  }

  .score {
    font-size: 2rem;
    margin-bottom: 25px;
  }

  .start,
  .next {
    cursor: pointer;
    background-color: #ffb30f;
    color: #1c0f13;
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    height: 40px;
    border: none;
    padding: 0 40px;
  }

  .start {
    transition-property: transform;
    transition-duration: 0.2s;
    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
`;
