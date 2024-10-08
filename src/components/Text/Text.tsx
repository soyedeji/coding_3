// src/components/Text/Text.tsx
import React from 'react';
import styled from 'styled-components';

export type TextProps = {
  content: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
};

const StyledText = styled.p<TextProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '12px';
      case 'medium':
        return '16px';
      case 'large':
        return '20px';
      default:
        return '16px';
    }
  }};
  color: ${({ color }) => color || 'black'};
`;

const Text: React.FC<TextProps> = ({ content, size = 'medium', color }) => {
  return <StyledText size={size} color={color}>{content}</StyledText>;
};

export default Text;
