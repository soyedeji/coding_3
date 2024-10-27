// src/components/Table/Table.test.tsx
import { render, screen } from "@testing-library/react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableFooter from "./TableFooter";

describe("Table Component", () => {
  test("renders table with header, rows, and footer", () => {
    render(
      <Table borderColor="black">
        <TableHeader>
          <TableRow>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 2</TableCell>
            <TableCell>Header 3</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Row 1, Cell 1</TableCell>
            <TableCell>Row 1, Cell 2</TableCell>
            <TableCell>Row 1, Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2, Cell 1</TableCell>
            <TableCell>Row 2, Cell 2</TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
            <TableCell>Footer 2</TableCell>
            <TableCell>Footer 3</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );

    const headerElement = screen.getByText(/header 1/i);
    expect(headerElement).toBeInTheDocument();

    const rowElement = screen.getByText(/row 1, cell 1/i);
    expect(rowElement).toBeInTheDocument();

    const footerElement = screen.getByText(/footer 1/i);
    expect(footerElement).toBeInTheDocument();
  });
});
