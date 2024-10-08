// src/components/Table/Table.tsx
import React from 'react';
import styled from 'styled-components';

export type TableProps = {
  children: React.ReactNode;
  borderColor?: string;
};

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid ${({ borderColor }) => borderColor || 'black'};
`;

const Table: React.FC<TableProps> = ({ children, borderColor = 'black' }) => {
  return <StyledTable borderColor={borderColor}>{children}</StyledTable>;
};

export default Table;
