// src/components/Img/Img.test.tsx
import { render, screen } from "@testing-library/react";
import Img from "./Img";

describe("Img Component", () => {
  test("renders the image with the correct src and alt text", () => {
    render(
      <Img src="https://via.placeholder.com/150" alt="Placeholder Image" />,
    );
    const imgElement = screen.getByAltText(/placeholder image/i);
    expect(imgElement).toHaveAttribute(
      "src",
      "https://via.placeholder.com/150",
    );
  });

  test("renders the image with the correct width and height", () => {
    render(
      <Img
        src="https://via.placeholder.com/150"
        alt="Placeholder Image"
        width="150px"
        height="150px"
      />,
    );
    const imgElement = screen.getByAltText(/placeholder image/i);
    expect(imgElement).toHaveStyle("width: 150px");
    expect(imgElement).toHaveStyle("height: 150px");
  });
});
