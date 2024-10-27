// src/components/Img/Img.tsx
import React from "react";
import styled from "styled-components";

export type ImgProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

const StyledImg = styled.img<ImgProps>`
  max-width: 100%;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} />;
};

export default Img;
