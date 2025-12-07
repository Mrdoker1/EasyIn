import React from 'react';
import { MailboxInput } from './MailboxInput';

export default {
  title: 'Components/MailboxInput',
  component: MailboxInput,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#050607' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'text' },
      description: 'Width of the component. Enter a number (pixels) or "responsive" for full width',
      table: {
        type: { summary: 'number | "responsive"' },
        defaultValue: { summary: '250' },
      },
    },
  },
};

const defaultOptions = [
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'domain', label: 'Domain' },
  { id: 'overflow', label: 'Overflow' },
  { id: 'additional', label: 'Additional' },
  { id: 'another', label: 'Another' },
  { id: 'custom', label: 'Custom' },
  { id: 'extra', label: 'Extra' },
];

export const DefaultCollapsed = {
  args: {
    label: 'Email',
    value: 'groupadmin@mail.com',
    options: defaultOptions,
    activeOptionId: 'linkedin',
    isExpanded: false,
  },
};

export const MailboxActiveExpanded = {
  args: {
    label: 'Email',
    value: 'groupadmin@mail.com',
    options: defaultOptions,
    activeOptionId: 'linkedin',
    isExpanded: true,
  },
};

export const MailboxItemHover = {
  args: {
    label: 'Email',
    value: 'groupadmin@mail.com',
    options: defaultOptions,
    activeOptionId: 'linkedin',
    isExpanded: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over the "Domain" option to see the hover state.',
      },
    },
  },
};

export const SecondItemSelected = {
  args: {
    label: 'Email',
    value: 'admin@company.com',
    options: defaultOptions,
    activeOptionId: 'domain',
    isExpanded: true,
  },
};

export const EndOfList = {
  args: {
    label: 'Email',
    value: 'hello@another.org',
    options: [
      { id: 'overflow', label: 'Overflow' },
      { id: 'additional', label: 'Additional' },
      { id: 'another', label: 'Another' },
    ],
    activeOptionId: 'another',
    isExpanded: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'At the end of the list - right arrow is disabled.',
      },
    },
  },
};

export const Interactive = {
  args: {
    label: 'Email',
    value: 'groupadmin@mail.com',
    options: defaultOptions,
    activeOptionId: 'linkedin',
    isExpanded: false,
  },
  render: (args) => {
    const optionValues = {
      linkedin: 'groupadmin@mail.com',
      domain: 'admin@company.com',
      overflow: 'contact@overflow.io',
      additional: 'info@additional.net',
      another: 'hello@another.org',
      custom: 'custom@email.com',
      extra: 'extra@service.com',
    };

    const [state, setState] = React.useState({
      value: args.value,
      activeOptionId: args.activeOptionId,
      isExpanded: args.isExpanded,
    });

    const handleOptionChange = (id) => {
      setState({ 
        ...state, 
        activeOptionId: id,
        value: optionValues[id] || state.value
      });
    };

    return (
      <MailboxInput
        {...args}
        value={state.value}
        activeOptionId={state.activeOptionId}
        isExpanded={state.isExpanded}
        onChangeValue={(value) => setState({ ...state, value })}
        onChangeActiveOption={handleOptionChange}
        onToggleExpand={() => setState({ ...state, isExpanded: !state.isExpanded })}
        onMenuClick={() => alert('Menu clicked!')}
      />
    );
  },
};
