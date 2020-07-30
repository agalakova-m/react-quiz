import styled from 'styled-components';

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
    background-color: ${({ theme }) => theme.buttonBgColor};
    color: ${({ theme }) => theme.buttonTextColor};
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
      background-color: ${({ theme }) => theme.buttonBgColor};
      border-radius: 10px;
      z-index: 0;
      box-shadow: 7px 7px 0 ${({ theme }) => theme.shadowColor};
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
      color: ${({ theme }) => theme.buttonTextColor};
      align-items: center;
      justify-content: center;
      z-index: 100;
    }
  }

  .next {
    color: ${({ theme }) => theme.buttonTextColor};
    background-color: ${({ theme }) => theme.buttonBgColor};
    box-shadow: 7px 7px 0 ${({ theme }) => theme.shadowColor};
  }
`;
