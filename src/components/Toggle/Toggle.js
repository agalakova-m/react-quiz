import React from 'react';
import { ToggleStyles } from './Toggle.styles';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleStyles as="button" onClick={toggleTheme} lightTheme={isLight}>
      <div className="circle" />
    </ToggleStyles>
  );
};

export default Toggle;
