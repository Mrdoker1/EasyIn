import type { Meta, StoryObj } from '@storybook/react';
import SandboxLayout from './SandboxLayout';

const meta = {
  title: 'LinkedInSandbox/SandboxLayout',
  component: SandboxLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SandboxLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
