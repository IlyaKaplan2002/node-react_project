import React from 'react';
import StyledButton from './Button.styled';

const Button = ({
  label,
  children,
  type = 'button',
  className,
  onClick,
  filled = false,
}) => {
  return (
    <StyledButton
      type={type}
      className={className}
      onClick={onClick}
      filled={filled}
    >
      {label || children}
    </StyledButton>
  );
};

export default Button;
