import type { Meta, StoryObj } from '@storybook/react';
import SandboxLayout from '../components/SandboxLayout/SandboxLayout';

/**
 * LinkedInSandbox — playground for extension experiments.
 * Each story uses SandboxLayout as the base frame.
 * Click "Scrape Page" to simulate scraping data from the profile page into the sidebar.
 */
const meta = {
  title: 'LinkedInSandbox/Experiments',
  component: SandboxLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SandboxLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Grace profile
export const GraceEzeaghatise: Story = {
  args: {},
};
