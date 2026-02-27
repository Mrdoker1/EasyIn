import type { Meta, StoryObj } from '@storybook/react';
import LinkedInSandbox from './LinkedInSandbox';

const meta = {
  title: 'Extension/LinkedInSandbox',
  component: LinkedInSandbox,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkedInSandbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Full sandbox — click "Scrape Page" to populate the sidebar from the profile
export const Default: Story = {
  args: {},
};
