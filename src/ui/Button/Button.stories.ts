import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args : {onClick : fn()}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoButton: Story = {
  args: {
    label : 'Click me!',
    className : 'text-blue-700 bg-blue-100 border-blue-200 hover:border-blue-200'
  },
};

export const SuccessButton: Story = {
  args: {
    label: 'Click me!',
    className : 'text-green-700 bg-green-100 border-green-200 hover:border-green-200'
  },
};

export const ErrorButton: Story = {
  args: {
    label : 'Click me!',
    className : 'text-red-700 bg-red-100 border-red-200 hover:border-red-200'
  },
};

export const WarnButton: Story = {
    args: {
      label : 'Click me!',
      className : 'text-yellow-700 bg-yellow-100 border-yellow-200 hover:border-yellow-200'
    },
  };
  