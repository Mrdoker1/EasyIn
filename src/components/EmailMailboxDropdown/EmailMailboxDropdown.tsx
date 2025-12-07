import React from 'react';
import './EmailMailboxDropdown.css';

export type EmailMailboxOption = {
  id: string;
  source: string;
  email: string;
  initial?: string;
};

export type EmailMailboxDropdownProps = {
  label?: string;
  options: EmailMailboxOption[];
  selectedId: string;
  isOpen: boolean;
  value: string;
  onChange?: (id: string) => void;
  onChangeValue?: (value: string) => void;
  onToggleOpen?: () => void;
};

const CircleAvatar = ({ initial, isSelected }: { initial: string; isSelected: boolean }) => (
  <div className={`email-mailbox__avatar ${isSelected ? 'email-mailbox__avatar--selected' : ''}`}>
    {initial}
  </div>
);

export const EmailMailboxDropdown = ({
  label = 'Email',
  options,
  selectedId,
  isOpen,
  value,
  onChange,
  onChangeValue,
  onToggleOpen,
}: EmailMailboxDropdownProps) => {
  const selectedOption = options.find((opt) => opt.id === selectedId) || options[0];

  const handleRowClick = (id: string) => {
    onChange?.(id);
    if (id === selectedId) {
      onToggleOpen?.();
    }
  };

  const handleAvatarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleOpen?.();
  };

  if (!isOpen) {
    return (
      <div className="email-mailbox">
        <label className="email-mailbox__label">{label}</label>
        <div className="email-mailbox__container email-mailbox__container--collapsed">
          <div 
            className="email-mailbox__mailbox-column email-mailbox__mailbox-column--collapsed"
            onClick={handleAvatarClick}
          >
            <CircleAvatar
              initial={selectedOption.initial || selectedOption.source.charAt(0).toUpperCase()}
              isSelected={true}
            />
          </div>
          <input
            type="text"
            className="email-mailbox__input"
            value={value}
            onChange={(e) => onChangeValue?.(e.target.value)}
            placeholder="Enter email"
          />
          <button className="email-mailbox__menu-button" onClick={(e) => { e.stopPropagation(); }}>
            <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#9CA3AF"/>
              <circle cx="1.5" cy="6.5" r="1.5" fill="#9CA3AF"/>
              <circle cx="1.5" cy="11.5" r="1.5" fill="#9CA3AF"/>
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="email-mailbox">
      <label className="email-mailbox__label">{label}</label>
      <div className="email-mailbox__container email-mailbox__container--expanded">
        <div className="email-mailbox__mailbox-column email-mailbox__mailbox-column--expanded">
          {options.map((option) => (
            <div
              key={option.id}
              className={`email-mailbox__mailbox-cell ${
                option.id === selectedId ? 'email-mailbox__mailbox-cell--selected' : ''
              }`}
              onClick={() => handleRowClick(option.id)}
            >
              <CircleAvatar
                initial={option.initial || option.source.charAt(0).toUpperCase()}
                isSelected={option.id === selectedId}
              />
            </div>
          ))}
        </div>
        <div className="email-mailbox__content-column">
          {options.map((option, index) => (
            <div
              key={option.id}
              className={`email-mailbox__row ${
                option.id === selectedId ? 'email-mailbox__row--selected' : ''
              } ${index < options.length - 1 ? 'email-mailbox__row--separator' : ''}`}
              onClick={() => handleRowClick(option.id)}
            >
              <div className="email-mailbox__row-content">
                <div className="email-mailbox__source">{option.source}</div>
                <div className="email-mailbox__email">{option.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
