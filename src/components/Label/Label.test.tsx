// src/components/Label/Label.test.tsx
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label Component', () => {
  test('renders the label with text', () => {
    render(<Label text="Label Text" />);
    const labelElement = screen.getByText(/label text/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('associates the label with an input using htmlFor', () => {
    render(<Label text="Label for Input" htmlFor="input-id" />);
    const labelElement = screen.getByText(/label for input/i);
    expect(labelElement).toHaveAttribute('for', 'input-id');
  });
});
