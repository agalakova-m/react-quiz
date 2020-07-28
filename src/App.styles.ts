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
    background-color: #FFE5D4;
  }

  * {
    box-sizing: border-box;
    font-family: 'Poppins', Roboto, sans-serif;
    font-weight: 300;

    margin: 0;
    padding: 0;
    &:not(:disabled) {
      color: #1c0f13;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  > h1 {
    margin-bottom: 20px;
    font-weight: 500;
  }

  > p {
  }

  button {
    min-width: 200px;
  }

  .score {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background-color: #ff00fc;
    color: #1c0f13;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    border: none;
    padding: 0 40px;
  }

  .start {
    position: relative;
    margin: 40px 0;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      transition-property: transform;
      transition-duration: 0.2s;

      background-color: #ff00fc;
      border-radius: 10px;
      z-index: 0;
      box-shadow: 7px 7px 0 #4100ff;
    }

    &:hover:after,
    &:focus:after {
      transform: scale(1.1);
    }

    &__text {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      display: flex;
      font-weight: 500;
      color: #fff;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }
  }

  .next {
    color: #fff;
    background-color: #ff00fc;
    box-shadow: 7px 7px 0 #4100ff;
  }
`;
