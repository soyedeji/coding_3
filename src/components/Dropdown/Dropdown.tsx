// src/components/Dropdown/Dropdown.tsx
import React from 'react';
import styled from 'styled-components';

export type DropdownProps = {
  label: string;
  options: string[];
  onChange?: (value: string) => void;
};

const StyledDropdown = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const StyledLabel = styled.label`
  margin-bottom: 8px;
  display: block;
  font-size: 16px;
`;

const Dropdown: React.FC<DropdownProps> = ({ label, options, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledDropdown onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledDropdown>
    </div>
  );
};

export default Dropdown;
