// src/components/Label/Label.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Label Text',
};

export const WithHtmlFor = Template.bind({});
WithHtmlFor.args = {
  text: 'Label for Input',
  htmlFor: 'input-id',
};
