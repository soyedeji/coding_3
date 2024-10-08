// src/components/Button/Button.tsx
import React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'blue')};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Button: React.FC<ButtonProps> = ({ children, disabled = false, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
