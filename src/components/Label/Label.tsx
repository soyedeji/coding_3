// src/components/Label/Label.tsx
import React from "react";
import styled from "styled-components";

export type LabelProps = {
  text: string;
  htmlFor?: string;
};

const StyledLabel = styled.label`
  font-size: 16px;
  color: black;
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
};

export default Label;
