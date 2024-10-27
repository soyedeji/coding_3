// src/components/HeroImage/HeroImage.test.tsx
import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

describe("HeroImage Component", () => {
  test("renders the hero image with heading and description", () => {
    render(
      <HeroImage
        imageSrc="https://via.placeholder.com/800x400"
        heading="Welcome"
        description="Hero section description"
      />,
    );

    const headingElement = screen.getByText(/welcome/i);
    const descriptionElement = screen.getByText(/hero section description/i);

    expect(headingElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test("applies the correct background image", () => {
    render(
      <HeroImage
        imageSrc="https://via.placeholder.com/800x400"
        heading="Heading"
        description="Description"
      />,
    );

    const containerElement = screen.getByRole("img"); // You may need to adjust this selector
    expect(containerElement).toHaveStyle(
      "background-image: url(https://via.placeholder.com/800x400)",
    );
  });
});
