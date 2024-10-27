// src/components/Button/Button.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click me",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Cannot Click",
  disabled: true,
};
