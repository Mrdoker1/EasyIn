/**
 * EmailMailboxDropdown - Email Manager Component
 * 
 * A sophisticated dropdown input for managing multiple email addresses with various states.
 * 
 * Features:
 * - Email status indicators (processing, valid, issue)
 * - Primary email selection
 * - Inline email addition
 * - Per-email actions (mark as "do not use" or "bad email")
 * - Show/hide bad emails toggle
 * 
 * Usage:
 * - Click on mailbox cell (left column) to set email as primary
 * - Click on email row to select it
 * - Hover over email row to see action menu (3 dots)
 * - Click "Add email" to add new emails inline
 * - Bad/do-not-use emails can be hidden/shown via toggle
 */
import React from 'react';
import { EmailMailboxDropdown, EmailMailboxOption, EmailAction } from './EmailMailboxDropdown';

export default {
  title: 'Components/EmailMailboxDropdown',
  component: EmailMailboxDropdown,

  parameters: {
    layout: 'centered',
    backgrounds: {
      options: {
        dark: { name: 'dark', value: '#050607' }
      }
    },
  },

  tags: ['autodocs'],

  globals: {
    backgrounds: {
      value: "dark"
    }
  }
};

const defaultOptions: EmailMailboxOption[] = [
  { id: 'linkedin', source: 'LinkedIn', email: 'groupadmin@mail.com', initial: 'L', status: 'valid', isPrimary: true },
  { id: 'domain', source: 'Domain', email: 'admin@company.com', initial: 'D', status: 'valid' },
  { id: 'additional', source: 'Additional', email: 'info@additional.net', initial: 'A', status: 'processing' },
  { id: 'overflow', source: 'Overflow', email: 'contact@overflow.io', initial: 'O', status: 'issue', issueType: 'other' },
  { id: 'bad1', source: 'Old Email', email: 'old@deprecated.com', initial: 'O', status: 'issue', issueType: 'missing-domain', domainValue: '', action: 'bad-email' },
  { id: 'bad2', source: 'Spam', email: 'spam@example.com', initial: 'S', status: 'valid', action: 'do-not-use' },
];

export const Interactive = {
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: false,
    value: 'groupadmin@mail.com',
    showBadEmails: false,
  },
  render: (args) => {
    const [state, setState] = React.useState({
      selectedId: args.selectedId,
      isOpen: args.isOpen,
      value: args.value,
      showBadEmails: args.showBadEmails,
      options: args.options,
    });

    return (
      <EmailMailboxDropdown
        {...args}
        options={state.options}
        selectedId={state.selectedId}
        isOpen={state.isOpen}
        value={state.value}
        showBadEmails={state.showBadEmails}
        onChange={(id) => {
          const updatedOptions = state.options.map(opt => ({
            ...opt,
            isPrimary: opt.id === id,
          }));
          const option = updatedOptions.find(opt => opt.id === id);
          setState({ 
            ...state, 
            options: updatedOptions,
            selectedId: id, 
            isOpen: false, 
            value: option?.email || state.value 
          });
        }}
        onChangeValue={(value) => setState({ ...state, value })}
        onToggleOpen={() => setState({ ...state, isOpen: !state.isOpen })}
        onSetPrimary={(id) => {
          const updatedOptions = state.options.map(opt => ({
            ...opt,
            isPrimary: opt.id === id,
          }));
          const primaryOption = updatedOptions.find(opt => opt.id === id);
          setState({ 
            ...state, 
            options: updatedOptions,
            selectedId: id,
            value: primaryOption?.email || state.value,
          });
        }}
        onAddEmail={(email) => {
          const newId = `email-${Date.now()}`;
          const newOption: EmailMailboxOption = {
            id: newId,
            source: 'Manual',
            email,
            initial: 'M',
            status: 'valid',
          };
          setState({ 
            ...state, 
            options: [...state.options, newOption],
          });
        }}
        onSetAction={(id, action) => {
          const updatedOptions = state.options.map(opt => 
            opt.id === id ? { ...opt, action } : opt
          );
          setState({ ...state, options: updatedOptions });
        }}
        onToggleBadEmails={() => {
          setState({ ...state, showBadEmails: !state.showBadEmails });
        }}
        onDomainChange={(id, domain) => {
          const updatedOptions = state.options.map(opt => 
            opt.id === id ? { ...opt, domainValue: domain } : opt
          );
          setState({ ...state, options: updatedOptions });
        }}
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
    showBadEmails: false,
  },
};

export const ExpandedDefault = {
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: true,
    value: 'groupadmin@mail.com',
    showBadEmails: false,
  },
};

export const ExpandedWithBadEmails = {
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: true,
    value: 'groupadmin@mail.com',
    showBadEmails: true,
  },
};

export const DifferentStatuses = {
  args: {
    label: 'Email',
    options: [
      { id: 'valid', source: 'Valid Email', email: 'valid@example.com', initial: 'V', status: 'valid' as const, isPrimary: true },
      { id: 'processing', source: 'Processing', email: 'processing@example.com', initial: 'P', status: 'processing' as const },
      { id: 'issue', source: 'Has Issue', email: 'issue@example.com', initial: 'H', status: 'issue' as const },
    ],
    selectedId: 'valid',
    isOpen: true,
    value: 'valid@example.com',
    showBadEmails: false,
  },
};

export const WithBadEmails = {
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: true,
    value: 'groupadmin@mail.com',
    showBadEmails: true,
  },
};
