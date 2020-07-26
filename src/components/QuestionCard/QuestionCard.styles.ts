import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  button {
    width: 100%;
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? 'green' : !correct && userClicked ? 'red' : 'lightgray'};
  }
`;
