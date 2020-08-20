import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  width: 100vw;

  > h1 {
    margin-bottom: 20px;
    font-weight: 500;
  }

  .score {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .start,
  .next {
    min-width: 200px;
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

  .start,
  .next {
    position: relative;
    margin: 40px 0;
    transition-property: transform;
    transition-duration: 0.2s;
    background-color: ${({ theme }) => theme.buttonBgColor};
    border-radius: 10px;
    z-index: 0;
    box-shadow: 7px 7px 0 ${({ theme }) => theme.shadowColor};
    font-weight: 500;
    color: ${({ theme }) => theme.buttonTextColor};

    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
`;
