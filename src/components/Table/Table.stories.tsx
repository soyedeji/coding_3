// src/components/Table/Table.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableFooter from "./TableFooter";

export default {
  title: "Components/Table",
  component: Table,
} as Meta;

const Template: StoryFn = (args) => (
  <Table {...args}>
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
  </Table>
);

export const Default = Template.bind({});
Default.args = {
  borderColor: "black",
};
