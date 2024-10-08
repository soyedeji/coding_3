// src/components/Table/TableHeader.tsx
import React from 'react';
import styled from 'styled-components';

export type TableHeaderProps = {
  children: React.ReactNode;
};

const StyledTableHeader = styled.thead`
  background-color: lightgray;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

export default TableHeader;
