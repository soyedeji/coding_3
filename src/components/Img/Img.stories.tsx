// src/components/Img/Img.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Img, { ImgProps } from "./Img";

export default {
  title: "Components/Img",
  component: Img,
} as Meta;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/150",
  alt: "Placeholder Image",
  width: "150px",
  height: "150px",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  src: "https://via.placeholder.com/150",
  alt: "Full Width Image",
  width: "100%",
};
