import React from 'react';
import { Mismatch, MismatchOption } from './Mismatch';

export default {
  title: 'Components/Mismatch',
  component: Mismatch,
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

const defaultOptions: MismatchOption[] = [
  { id: 'taylor', label: 'Taylor', color: '#39D0B5' },
  { id: 'chuck', label: 'Chuck', color: '#4ADE80' },
  { id: 'guy', label: 'Guy', color: '#60A5FA' },
];

export const Interactive = {
  args: {
    label: 'First name',
    options: defaultOptions,
    selectedId: 'taylor',
    isOpen: false,
  },
  render: (args) => {
    const [state, setState] = React.useState({
      selectedId: args.selectedId,
      isOpen: args.isOpen,
    });

    return (
      <Mismatch
        {...args}
        selectedId={state.selectedId}
        isOpen={state.isOpen}
        onChange={(id) => {
          setState({ ...state, selectedId: id, isOpen: false });
        }}
        onToggleOpen={() => {
          setState({ ...state, isOpen: !state.isOpen });
        }}
      />
    );
  },
};

export const CollapsedDefault = {
  args: {
    label: 'First name',
    options: defaultOptions,
    selectedId: 'taylor',
    isOpen: false,
  },
};

export const ExpandedDefault = {
  args: {
    label: 'First name',
    options: defaultOptions,
    selectedId: 'taylor',
    isOpen: true,
  },
};

export const ExpandedSecondSelected = {
  args: {
    label: 'First name',
    options: defaultOptions,
    selectedId: 'chuck',
    isOpen: true,
  },
};
