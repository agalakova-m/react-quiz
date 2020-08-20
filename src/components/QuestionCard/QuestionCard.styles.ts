import styled, { keyframes, css } from 'styled-components';

export const Wrapper = styled.div`
  min-width: 450px;
  max-width: 500px;
  padding: 35px 25px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.cardBgColor};
  border-radius: 20px;
  box-shadow: 10px 10px 0 ${({ theme }) => theme.shadowColor};
  margin-bottom: 40px;

  .number {
    font-size: 1rem;
    margin-bottom: 15px;
    user-select: none;
  }

  .question {
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 20px;

    &::selection {
      background-color: ${({ theme }) => theme.selectionColor};
    }
  }
`;

export const InnerWrapper = styled.div`
  padding: 0 20px;
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  button {
    position: relative;
    transition: all 0.2s ease;
    width: 100%;

    overflow: hidden;
    user-select: none;
    font-size: 0.8rem;
    height: 40px;
    margin: 5px 0;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.answerBg};

    &:not(:disabled):hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.answerBgHover};
    }
    ${({ userClicked }) =>
      userClicked &&
      css`
        span {
          font-weight: 500;
        }
      `}

    /* wrong answer */
    ${({ correct, userClicked }) =>
      !correct &&
      userClicked &&
      css`
        background-color: ${({ theme }) => theme.wrongColor};
        animation: ${shake} 0.3s linear 1;
        span {
          color: ${({ theme }) => theme.buttonTextColor};
        }
      `}
    /* correct answer */
    ${({ correct, userClicked }) =>
      correct && userClicked
        ? css`
            background-color: ${({ theme }) => theme.correctColor};
            transition-delay: 0.2s;
            .layer {
              animation: ${showLayer} 1.2s linear 1;
            }
            span {
              font-weight: 500;
            }
          `
        : correct &&
          !userClicked &&
          css`
            background-color: ${({ theme }) => theme.correctColor};
            span {
              font-weight: 500;
            }
          `}

  .layer {
    font-weight: 500;
    text-transform: uppercase;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -40px;
    width: 100%;
    height: 100%;
    left: 0;
    padding: 20px 0;
    background-color: ${({ theme }) => theme.correctColor};
    transition: transform 0.2s ease;
  }
`;

const shake = keyframes`
	33% {
		transform: rotateZ(3deg);
	}
	67% {
		transform: rotateZ(-3deg);
	}
	100% {
		transform: rotateZ(2deg);
	}
`;

const showLayer = keyframes`
  0% {
    transform: translateY(0);
  }
	20% {
		transform: translateY(40px);
	}
  90% {
		transform: translateY(40px);
    opacity: 1;
	}
	100% {
		opacity: 0;
    transform: translateY(40px);
	}
`;
