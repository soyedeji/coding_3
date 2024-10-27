// src/components/Text/Text.test.tsx
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text Component", () => {
  test("renders the text with content", () => {
    render(<Text content="This is a test" />);
    const textElement = screen.getByText(/this is a test/i);
    expect(textElement).toBeInTheDocument();
  });

  test("applies the correct size", () => {
    render(<Text content="This is large text" size="large" />);
    const textElement = screen.getByText(/this is large text/i);
    expect(textElement).toHaveStyle("font-size: 20px");
  });

  test("applies the correct color", () => {
    render(<Text content="Colored text" color="red" />);
    const textElement = screen.getByText(/colored text/i);
    expect(textElement).toHaveStyle("color: red");
  });
});
