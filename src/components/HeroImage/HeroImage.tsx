// src/components/HeroImage/HeroImage.tsx
import React from 'react';
import styled from 'styled-components';

export type HeroImageProps = {
  imageSrc: string;
  heading: string;
  description: string;
  height?: string;
  textColor?: string;
};

const HeroContainer = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '400px'};
  background-image: url(${({ imageSrc }) => imageSrc});
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1<HeroImageProps>`
  color: ${({ textColor }) => textColor || 'white'};
  margin: 0;
  font-size: 3em;
`;

const Description = styled.p<HeroImageProps>`
  color: ${({ textColor }) => textColor || 'white'};
  margin: 0;
  font-size: 1.5em;
`;

const HeroImage: React.FC<HeroImageProps> = ({ imageSrc, heading, description, height, textColor }) => {
  return (
    <HeroContainer imageSrc={imageSrc} height={height}>
      <Overlay>
        <Heading textColor={textColor}>{heading}</Heading>
        <Description textColor={textColor}>{description}</Description>
      </Overlay>
    </HeroContainer>
  );
};

export default HeroImage;
