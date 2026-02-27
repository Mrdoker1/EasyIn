import type { Meta, StoryObj } from '@storybook/react';
import ExtensionSidebar from './ExtensionSidebar';

const meta = {
  title: 'Extension/ExtensionSidebar',
  component: ExtensionSidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'Show loading spinner while fetching data from page',
    },
  },
} satisfies Meta<typeof ExtensionSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Populated with Grace's LinkedIn data
export const WithLinkedInData: Story = {
  args: {
    isLoading: false,
    profileData: {
      firstName: 'Grace',
      lastName: 'Ezeaghatise',
      headline: 'Senior Consultant at Rizing HCM · a Wipro company',
      jobTitle: 'Senior Consultant',
      company: 'Rizing HCM',
      location: 'New York, New York, United States',
      email: '',
      school: 'McGill University',
      linkedinUrl: 'https://linkedin.com/in/grace-ezeaghatise',
    },
    onUpdate: (data) => console.log('Update contact:', data),
  },
};

// Loading state — simulates data being scraped from page
export const Loading: Story = {
  args: {
    isLoading: true,
    profileData: undefined,
    onUpdate: (data) => console.log('Update contact:', data),
  },
};

// Empty — no data scraped yet
export const Empty: Story = {
  args: {
    isLoading: false,
    profileData: {},
    onUpdate: (data) => console.log('Update contact:', data),
  },
};
