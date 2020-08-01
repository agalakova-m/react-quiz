import styled, { css } from 'styled-components';

export const ToggleStyles = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background: ${({ theme }) => theme.bgColor};
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 50px;
  height: 25px;
  padding: 2px;
  overflow: hidden;

  div {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.textColor};
    transition: all 0.2s linear;
    transform: ${({ lightTheme }) =>
      lightTheme ? css`translateX(0)` : css`translateX(25px)`};
  }
`;
