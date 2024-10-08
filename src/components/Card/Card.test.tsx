// src/components/Card/Card.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('renders the card with title, description, and image', () => {
    render(<Card imageSrc="https://via.placeholder.com/300x150" title="Card Title" description="Card description" />);
    const titleElement = screen.getByText(/card title/i);
    const descriptionElement = screen.getByText(/card description/i);
    const imageElement = screen.getByAltText(/card title/i);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'https://via.placeholder.com/300x150');
  });

  test('renders the button and handles click event', () => {
    const handleClick = jest.fn();
    render(
      <Card
        imageSrc="https://via.placeholder.com/300x150"
        title="Card Title"
        description="Card description"
        buttonText="Click Me"
        onButtonClick={handleClick}
      />
    );

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
