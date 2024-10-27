// src/components/Card/Card.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: "https://via.placeholder.com/300x150",
  title: "Card Title",
  description: "This is a card description.",
  buttonText: "Click Me",
};

export const NoButton = Template.bind({});
NoButton.args = {
  imageSrc: "https://via.placeholder.com/300x150",
  title: "Card Title",
  description: "This card has no button.",
};
