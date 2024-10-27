// src/components/RadioButton/RadioButton.tsx
import React from "react";
import styled from "styled-components";

export type RadioButtonProps = {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
};

const StyledRadioButton = styled.input`
  margin-right: 10px;
`;

const StyledLabel = styled.label`
  font-size: 16px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  onChange,
}) => {
  const handleChange = () => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div>
      <StyledLabel>
        <StyledRadioButton
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        {label}
      </StyledLabel>
    </div>
  );
};

export default RadioButton;
