import React from 'react';
import { EmailMailboxDropdown, EmailMailboxOption } from './EmailMailboxDropdown';

export default {
  title: 'Components/EmailMailboxDropdown',
  component: EmailMailboxDropdown,
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
};

const defaultOptions: EmailMailboxOption[] = [
  { id: 'linkedin', source: 'LinkedIn', email: 'groupadmin@mail.com', initial: 'L' },
  { id: 'domain', source: 'Domain', email: 'admin@company.com', initial: 'D' },
  { id: 'additional', source: 'Additional', email: 'info@additional.net', initial: 'A' },
  { id: 'overflow', source: 'Overflow', email: 'contact@overflow.io', initial: 'O' },
];

export const Interactive = {
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: false,
    value: 'groupadmin@mail.com',
  },
  render: (args) => {
    const [state, setState] = React.useState({
      selectedId: args.selectedId,
      isOpen: args.isOpen,
      value: args.value,
    });

    return (
      <EmailMailboxDropdown
        {...args}
        selectedId={state.selectedId}
        isOpen={state.isOpen}
        value={state.value}
        onChange={(id) => {
          const option = defaultOptions.find(opt => opt.id === id);
          setState({ selectedId: id, isOpen: false, value: option?.email || state.value });
        }}
        onChangeValue={(value) => setState({ ...state, value })}
        onToggleOpen={() => setState({ ...state, isOpen: !state.isOpen })}
      />
    );
  },
};

export const CollapsedDefault = {
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: false,
    value: 'groupadmin@mail.com',
  },
};

export const ExpandedDefault = {
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: true,
    value: 'groupadmin@mail.com',
  },
};

export const SecondSelected = {
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'domain',
    isOpen: true,
    value: 'admin@company.com',
  },
};

export const ThirdSelected = {
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'additional',
    isOpen: true,
    value: 'info@additional.net',
  },
};

export const LastSelected = {
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'overflow',
    isOpen: true,
    value: 'contact@overflow.io',
  },
};
