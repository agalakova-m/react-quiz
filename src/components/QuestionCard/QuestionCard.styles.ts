import styled, { keyframes, css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 10px 10px 0 #4100ff;
  margin-bottom: 40px;

  .number {
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .question {
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

export const InnerWrapper = styled(Wrapper)`
  margin-bottom: 0;
  box-shadow: none;
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
    cursor: pointer;
    overflow: hidden;
    user-select: none;
    font-size: 0.8rem;
    height: 40px;
    margin: 5px 0;
    border: none;
    border-radius: 10px;
    background-color: #ececec;

    &:not(:disabled):hover {
      background-color: #cccccc;
    }
    /* wrong answer */
    ${({ correct, userClicked }) =>
      !correct &&
      userClicked &&
      css`
        background-color: #ff7181;
        animation: ${shake} 0.3s linear 1;
      `}
    /* correct answer */
    ${({ correct, userClicked }) =>
      correct && userClicked
        ? css`
            background-color: #8dfa8e;
            transition-delay: 0.2s;
            .layer {
              animation: ${showLayer} 1.2s linear 1;
            }
          `
        : correct &&
          !userClicked &&
          css`
            background-color: #8dfa8e;
          `}

  .layer {
    font-weight: 400;
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
    background-color: #8dfa8e;
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
