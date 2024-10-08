// src/components/Table/TableCell.tsx
import React from 'react';
import styled from 'styled-components';

export type TableCellProps = {
  children: React.ReactNode;
};

const StyledTableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <StyledTableCell>{children}</StyledTableCell>;
};

export default TableCell;
