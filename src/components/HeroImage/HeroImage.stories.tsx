// src/components/HeroImage/HeroImage.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import HeroImage, { HeroImageProps } from "./HeroImage";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    textColor: { control: "color" },
  },
} as Meta;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: "https://via.placeholder.com/800x400",
  heading: "Welcome to Our Website",
  description: "This is a hero section with an image background",
  height: "400px",
  textColor: "white",
};

export const DarkOverlay = Template.bind({});
DarkOverlay.args = {
  imageSrc: "https://via.placeholder.com/800x400",
  heading: "Explore Our Products",
  description: "Browse our latest offerings",
  height: "500px",
  textColor: "#f0f0f0",
};
