import type { Meta, StoryObj } from '@storybook/react';
import SandboxLayout from '../components/SandboxLayout/SandboxLayout';
import type { CompanyOption } from '../components/CompanySelector/CompanySelector';

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

/**
 * Experiment 1 — Company Selector (multi)
 *
 * Replaces injected DOM checkboxes with a sidebar-native nested list.
 * Supports multi-select, indeterminate state, and marking one company as Primary.
 *
 * Steps:
 * 1. Click "Scrape Page"
 * 2. Expand COMPANY ASSOCIATIONS in the sidebar
 * 3. Select companies/positions — star one as Primary
 */
const GRACE_COMPANIES: CompanyOption[] = [
  {
    id: '1',
    name: 'Rizing HCM',
    positions: [
      { id: '1-1', title: 'Senior Consultant' },
      { id: '1-2', title: 'Consultant' },
      { id: '1-3', title: 'Associate Consultant' },
    ],
  },
  {
    id: '2',
    name: 'McGill University – Desautels Faculty of Management',
    positions: [{ id: '2-1', title: 'Project Assistant' }],
  },
  {
    id: '3',
    name: 'U.S.-Ukraine Foundation',
    positions: [{ id: '3-1', title: 'Intern' }],
  },
  {
    id: '4',
    name: 'McGill University',
    positions: [{ id: '4-1', title: 'Research Assistant' }],
  },
];

export const CompanySelectorExperiment: Story = {
  name: 'Experiment 1: Company Selector',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'multi',
  },
};

/**
 * Experiment 2 — Single Company (Create & Associate)
 *
 * Situation 2: creation is ON, user picks one company + position,
 * then hits "Create & Associate" to trigger the creation flow.
 *
 * Steps:
 * 1. Click "Scrape Page"
 * 2. Select a company with a radio button
 * 3. Pick a position if available
 * 4. Click "Create & Associate"
 */
export const SingleCompanyCreation: Story = {
  name: 'Experiment 2: Single Company Creation',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'single',
  },
};
