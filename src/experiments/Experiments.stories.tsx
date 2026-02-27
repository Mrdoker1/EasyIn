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
 * CompanySelector experiment: after scraping the page, the COMPANY ASSOCIATIONS
 * section renders a nested checkbox list of companies and positions extracted
 * from the LinkedIn experience section — instead of injecting checkboxes into the DOM.
 *
 * Steps:
 * 1. Click "Scrape Page"
 * 2. Open the COMPANY ASSOCIATIONS section in the sidebar
 * 3. Select companies and/or individual positions
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
  name: 'Experiment: Company Selector',
  args: {
    companies: GRACE_COMPANIES,
  },
};
