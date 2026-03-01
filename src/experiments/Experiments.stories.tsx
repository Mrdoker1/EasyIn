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
  name: 'Experiment 0: Default',
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

/**
 * Experiment 3 — Visible Default (Company Chip)
 *
 * Problem: users had to open the COMPANY ASSOCIATIONS section and
 * click around before seeing which company is selected. This felt
 * like filling out a form and added an extra click.
 *
 * Proposal: replace the expandable list with a compact, always-visible
 * "company chip" that shows the default company (first in list) immediately
 * after scraping — no interaction required. One click opens an inline
 * switcher to change the selection.
 *
 * Steps:
 * 1. Click "Scrape Page"
 * 2. Observe the COMPANY ASSOCIATIONS section — default company is shown
 *    immediately without any click
 * 3. Click the chip to switch to a different company
 */
export const VisibleDefaultChip: Story = {
  name: 'Experiment 3: Visible Default (Company Chip)',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'chip',
  },
};

/**
 * Experiment 4 — Experience-Anchored Selection
 *
 * Problem: the side panel is spatially disconnected from the LinkedIn
 * experience section where the user's mental model is anchored. Users
 * think about companies while looking at the experience list, but then
 * have to move their cursor to a separate panel to make a selection.
 *
 * Proposal: inject a contextual "Select" button directly into each
 * experience entry on the LinkedIn page. Clicking the button selects
 * that company and reflects it live in the sidebar — no spatial context
 * switch required.
 *
 * Steps:
 * 1. Click "Scrape Page"
 * 2. In the Experience section of the LinkedIn profile, click
 *    "+ Select" next to a company
 * 3. Watch the COMPANY ASSOCIATIONS section in the sidebar update
 *    with the selected company
 */
export const ExperienceAnchored: Story = {
  name: 'Experiment 4: Experience-Anchored Selection',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'anchored',
  },
};

/**
 * Experiment 5: Inline Timeline Selector — Collapsible chip always shows the active
 * company and role. Tapping expands a LinkedIn-style timeline list where companies
 * and positions are visible at a glance; one tap switches selection. No DOM injection,
 * no context switch, no empty state.
 *
 * Steps:
 * 1. Click "Scrape Page"
 * 2. Observe COMPANY ASSOCIATIONS — default company + position already selected in chip
 * 3. Click the chip to expand the timeline list
 * 4. Click any company to switch selection
 * 5. Tick a different position checkbox within the selected company
 */
export const InlineFlatList: Story = {
  name: 'Experiment 5: Inline Timeline Selector',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'inline',
  },
};
