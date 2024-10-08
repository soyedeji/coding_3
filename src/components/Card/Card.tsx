// src/components/Card/Card.tsx
import React from 'react';
import styled from 'styled-components';

export type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.25em;
`;

const CardDescription = styled.p`
  margin: 8px 0;
  font-size: 1em;
`;

const CardButton = styled.button`
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
  font-size: 1em;

  &:hover {
    background-color: darkblue;
  }
`;

const Card: React.FC<CardProps> = ({ imageSrc, title, description, buttonText, onButtonClick }) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {buttonText && (
          <CardButton onClick={onButtonClick}>
            {buttonText}
          </CardButton>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
