// src/components/RadioButton/RadioButton.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("RadioButton Component", () => {
  test("renders the radio button with label", () => {
    render(
      <RadioButton label="Option 1" name="radio-group" value="option-1" />,
    );
    const labelElement = screen.getByText(/option 1/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("calls onChange when clicked", () => {
    const handleChange = jest.fn();
    render(
      <RadioButton
        label="Option 1"
        name="radio-group"
        value="option-1"
        onChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByLabelText(/option 1/i));
    expect(handleChange).toHaveBeenCalledWith("option-1");
  });

  test("radio button is checked when checked prop is true", () => {
    render(
      <RadioButton
        label="Option 2"
        name="radio-group"
        value="option-2"
        checked={true}
      />,
    );
    const radioButtonElement = screen.getByLabelText(/option 2/i);
    expect(radioButtonElement).toBeChecked();
  });
});
