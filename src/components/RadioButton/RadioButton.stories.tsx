// src/components/RadioButton/RadioButton.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  name: 'radio-group',
  value: 'option-1',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Option 2',
  name: 'radio-group',
  value: 'option-2',
  checked: true,
};
