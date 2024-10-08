// src/components/Table/TableFooter.tsx
import React from 'react';
import styled from 'styled-components';

export type TableFooterProps = {
  children: React.ReactNode;
};

const StyledTableFooter = styled.tfoot`
  background-color: lightgray;
  font-weight: bold;
`;

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledTableFooter>{children}</StyledTableFooter>;
};

export default TableFooter;
