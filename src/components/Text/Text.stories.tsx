// src/components/Text/Text.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Text, { TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    color: { control: "color" },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "This is a default text",
  size: "medium",
  color: "black",
};

export const LargeText = Template.bind({});
LargeText.args = {
  content: "This is large text",
  size: "large",
  color: "blue",
};

export const SmallText = Template.bind({});
SmallText.args = {
  content: "This is small text",
  size: "small",
  color: "grey",
};
