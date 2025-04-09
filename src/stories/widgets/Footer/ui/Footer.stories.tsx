import type { Meta, StoryObj } from '@storybook/react';

import Footer from '.';

const meta: Meta<typeof Footer> = {
  title: 'widgets/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};
