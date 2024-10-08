// src/components/Dropdown/Dropdown.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  test('renders dropdown with label and options', () => {
    render(<Dropdown label="Select an option:" options={['Option 1', 'Option 2']} />);
    const labelElement = screen.getByText(/select an option:/i);
    expect(labelElement).toBeInTheDocument();

    const optionElement = screen.getByText(/option 1/i);
    expect(optionElement).toBeInTheDocument();
  });

  test('calls onChange when an option is selected', () => {
    const handleChange = jest.fn();
    render(<Dropdown label="Select an option:" options={['Option 1', 'Option 2']} onChange={handleChange} />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Option 2' } });
    expect(handleChange).toHaveBeenCalledWith('Option 2');
  });
});
