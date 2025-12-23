import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './EmailMailboxDropdown.css';

export type EmailStatus = 'processing' | 'valid' | 'issue';
export type EmailAction = 'do-not-use' | 'bad-email' | null;

export type EmailMailboxOption = {
  id: string;
  source: string;
  email: string;
  initial?: string;
  status: EmailStatus;
  isPrimary?: boolean;
  action?: EmailAction;
};

export type EmailMailboxDropdownProps = {
  label?: string;
  options: EmailMailboxOption[];
  selectedId: string;
  isOpen: boolean;
  value: string;
  showBadEmails?: boolean;
  onChange?: (id: string) => void;
  onChangeValue?: (value: string) => void;
  onToggleOpen?: () => void;
  onSetPrimary?: (id: string) => void;
  onAddEmail?: (email: string) => void;
  onSetAction?: (id: string, action: EmailAction) => void;
  onToggleBadEmails?: () => void;
};

// Status Icons
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.5" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1"/>
    <path d="M8 4.5V8L10.5 10.5" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const RotateIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2279 5.43765C12.448 5.40962 12.6701 5.47077 12.8451 5.60693L14.6453 7.00927C14.9755 7.29221 15.0398 7.81627 14.7571 8.14587C14.4741 8.47533 13.9507 8.53967 13.6212 8.25709L13.4942 8.15808C13.3763 11.1581 10.9623 13.5001 8.00007 13.5001C7.04022 13.5001 6.13554 13.2531 5.34838 12.8191C4.94557 12.5971 4.79833 12.0907 5.02025 11.6877C5.24235 11.2848 5.74935 11.1375 6.15242 11.3595L6.36140 11.4663C6.85753 11.7013 7.41260 11.8334 8.00007 11.8334C10.0165 11.8334 11.6678 10.2763 11.8204 8.29899L11.6609 8.50733C11.3807 8.87207 10.8573 8.94127 10.4923 8.66093C10.1274 8.38053 10.059 7.85717 10.3393 7.49233L11.6726 5.75667C11.8583 5.55419 12.1016 5.4623 12.2279 5.43765ZM12.2703 5.76838C12.155 5.78311 12.0489 5.83825 11.9695 5.92935L10.6037 7.69547C10.4354 7.91447 10.4766 8.22843 10.6954 8.39667C10.9142 8.56467 11.2283 8.52327 11.3965 8.30421L11.8627 7.69681C11.9052 7.64147 11.9777 7.61881 12.0443 7.63947C12.1111 7.66037 12.1581 7.72073 12.1615 7.79053C12.1649 7.85947 12.1667 7.92961 12.1667 8.00013C12.1666 10.3011 10.3011 12.1667 8.00007 12.1668C7.27087 12.1668 6.58667 11.9793 5.99161 11.6512C5.74991 11.5181 5.44525 11.6066 5.31192 11.8485C5.17898 12.0901 5.26741 12.3942 5.50919 12.5275C6.24837 12.9349 7.09800 13.1668 8.00007 13.1668C10.8534 13.1667 13.1666 10.8535 13.1667 8.00013C13.1667 7.96173 13.1645 7.94033 13.1635 7.89013C13.1621 7.82587 13.1979 7.76601 13.2553 7.73713C13.3127 7.70833 13.3817 7.71541 13.4323 7.75473L13.8256 8.06073C14.0434 8.23707 14.3577 8.19167 14.5341 7.97413C14.7105 7.75627 14.6651 7.44193 14.4475 7.26559L12.6473 5.86328C12.5357 5.77483 12.4022 5.74162 12.2703 5.76838Z" fill="#4ADE80"/>
  </svg>
);

const ExclamationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.5" stroke="#F59E0B" strokeWidth="1"/>
    <path d="M8 4.5V9" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="11.5" r="0.75" fill="#F59E0B"/>
  </svg>
);

const CircleAvatar = ({ initial, isSelected }: { initial: string; isSelected: boolean }) => (
  <div className={`email-mailbox__avatar ${isSelected ? 'email-mailbox__avatar--selected' : ''}`}>
    {initial}
  </div>
);

const StatusIcon = ({ status }: { status: EmailStatus }) => {
  switch (status) {
    case 'processing':
      return <ClockIcon />;
    case 'valid':
      return <RotateIcon />;
    case 'issue':
      return <ExclamationIcon />;
    default:
      return null;
  }
};

const BadEmailIcon = () => (
  <div className="email-mailbox__avatar email-mailbox__avatar--bad">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="6" cy="8.5" r="1" fill="currentColor"/>
    </svg>
  </div>
);

export const EmailMailboxDropdown = ({
  label = 'Email',
  options,
  selectedId,
  isOpen,
  value,
  showBadEmails = false,
  onChange,
  onChangeValue,
  onToggleOpen,
  onSetPrimary,
  onAddEmail,
  onSetAction,
  onToggleBadEmails,
}: EmailMailboxDropdownProps) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [isAddingEmail, setIsAddingEmail] = useState(false);
  const [newEmailValue, setNewEmailValue] = useState('');
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const selectedOption = options.find((opt) => opt.id === selectedId) || options[0];
  const primaryOption = options.find((opt) => opt.isPrimary) || selectedOption;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is on menu
      if (menuRef.current && menuRef.current.contains(target)) {
        return;
      }
      
      // Check if click is on any action button
      const isActionButton = Object.values(buttonRefs.current).some(
        button => button && button.contains(target)
      );
      
      if (!isActionButton) {
        setOpenMenuId(null);
        setMenuPosition(null);
      }
    };

    if (openMenuId) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [openMenuId]);

  // Filter options based on showBadEmails
  const visibleOptions = showBadEmails 
    ? options 
    : options.filter(opt => !opt.action || opt.action === null);

  const badEmailsCount = options.filter(opt => opt.action === 'bad-email' || opt.action === 'do-not-use').length;

  const handleRowClick = (id: string) => {
    // Set as primary when clicking on row
    onSetPrimary?.(id);
    onChange?.(id);
  };

  const handleAvatarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleOpen?.();
  };

  const handleMailboxCellClick = (id: string) => {
    // Set as primary when clicking on mailbox cell
    onSetPrimary?.(id);
  };

  const handleMenuToggle = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    
    if (openMenuId === id) {
      setOpenMenuId(null);
      setMenuPosition(null);
    } else {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + 4,
        left: rect.right - 110, // Align menu to the right of button
      });
      setOpenMenuId(id);
    }
  };

  const handleSetPrimary = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    onSetPrimary?.(id);
    setOpenMenuId(null);
  };

  const handleSetAction = (e: React.MouseEvent, id: string, action: EmailAction) => {
    e.stopPropagation();
    onSetAction?.(id, action);
    setOpenMenuId(null);
  };

  const handleAddEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newEmailValue.trim()) {
      onAddEmail?.(newEmailValue.trim());
      setNewEmailValue('');
    } else if (e.key === 'Escape') {
      setIsAddingEmail(false);
      setNewEmailValue('');
    }
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
              initial={primaryOption.initial || primaryOption.source.charAt(0).toUpperCase()}
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
          {/* Regular emails */}
          {visibleOptions.filter(opt => !opt.action).map((option) => (
            <div
              key={option.id}
              className={`email-mailbox__mailbox-cell ${
                option.id === selectedId ? 'email-mailbox__mailbox-cell--selected' : ''
              } ${option.isPrimary ? 'email-mailbox__mailbox-cell--primary' : ''}`}
              onClick={() => handleMailboxCellClick(option.id)}
              title={option.isPrimary ? 'Primary email' : 'Click to set as primary'}
            >
              <CircleAvatar
                initial={option.initial || option.source.charAt(0).toUpperCase()}
                isSelected={option.isPrimary || false}
              />
            </div>
          ))}
          
          {/* Add email cell */}
          <div className="email-mailbox__mailbox-cell email-mailbox__mailbox-cell--add">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3.5V12.5M3.5 8H12.5" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          
          {/* Toggle/Divider cell for excluded */}
          {badEmailsCount > 0 && (
            <>
              {!showBadEmails ? (
                <div 
                  className="email-mailbox__mailbox-cell email-mailbox__mailbox-cell--toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBadEmails?.();
                  }}
                  title="Show bad emails"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10L5 7M8 10L11 7" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ) : (
                <div 
                  className="email-mailbox__mailbox-cell email-mailbox__mailbox-cell--divider"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBadEmails?.();
                  }}
                  style={{ cursor: 'pointer' }}
                  title="Hide excluded emails"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10L5 7M8 10L11 7" stroke="rgba(255, 208, 99, 0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180 8 8)"/>
                  </svg>
                </div>
              )}
            </>
          )}
          
          {/* Excluded emails section */}
          {showBadEmails && visibleOptions.filter(opt => opt.action).length > 0 && (
            <>
              {visibleOptions.filter(opt => opt.action).map((option) => (
                <div
                  key={option.id}
                  className={`email-mailbox__mailbox-cell email-mailbox__mailbox-cell--excluded ${
                    option.id === selectedId ? 'email-mailbox__mailbox-cell--selected' : ''
                  } ${option.isPrimary ? 'email-mailbox__mailbox-cell--primary' : ''}`}
                  onClick={() => handleMailboxCellClick(option.id)}
                  title={option.isPrimary ? 'Primary email' : 'Click to set as primary'}
                >
                  {option.action === 'bad-email' ? (
                    <BadEmailIcon />
                  ) : (
                    <CircleAvatar
                      initial={option.initial || option.source.charAt(0).toUpperCase()}
                      isSelected={option.isPrimary || false}
                    />
                  )}
                </div>
              ))}
            </>
          )}
        </div>
        <div className="email-mailbox__content-column">
          {/* Regular emails */}
          {visibleOptions.filter(opt => !opt.action).map((option, index, arr) => (
            <div
              key={option.id}
              className={`email-mailbox__row ${
                option.id === selectedId ? 'email-mailbox__row--selected' : ''
              } ${option.isPrimary ? 'email-mailbox__row--primary' : ''} email-mailbox__row--separator`}
              onClick={() => handleRowClick(option.id)}
            >
              <div className="email-mailbox__row-content">
                <div className="email-mailbox__source">
                  {option.source}
                  {option.isPrimary && <span className="email-mailbox__primary-badge">Primary</span>}
                </div>
                <div className="email-mailbox__email">{option.email}</div>
              </div>
              <div className="email-mailbox__row-actions">
                <button 
                  ref={(el) => buttonRefs.current[option.id] = el}
                  className="email-mailbox__action-button"
                  onClick={(e) => handleMenuToggle(e, option.id)}
                >
                  <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1.5" cy="1.5" r="1.5" fill="#9CA3AF"/>
                    <circle cx="1.5" cy="6.5" r="1.5" fill="#9CA3AF"/>
                    <circle cx="1.5" cy="11.5" r="1.5" fill="#9CA3AF"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
          
          {/* Add email row */}
          <div
            className="email-mailbox__row email-mailbox__row--add email-mailbox__row--separator"
            onClick={() => setIsAddingEmail(true)}
          >
            {isAddingEmail ? (
              <input
                type="email"
                className="email-mailbox__add-input"
                value={newEmailValue}
                onChange={(e) => setNewEmailValue(e.target.value)}
                onKeyDown={handleAddEmailKeyDown}
                onBlur={() => {
                  if (!newEmailValue.trim()) {
                    setIsAddingEmail(false);
                  }
                }}
                placeholder="Enter email address"
                autoFocus
              />
            ) : (
              <div className="email-mailbox__add-label">Add email</div>
            )}
          </div>
          {/* Excluded section header / toggle */}
          {badEmailsCount > 0 && (
            <>
              {!showBadEmails ? (
                <div 
                  className="email-mailbox__row email-mailbox__row--toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBadEmails?.();
                  }}
                >
                  <div className="email-mailbox__toggle-label">
                    Show excluded ({badEmailsCount})
                  </div>
                </div>
              ) : (
                <div 
                  className="email-mailbox__section-divider email-mailbox__section-divider--clickable"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBadEmails?.();
                  }}
                >
                  <span className="email-mailbox__section-label">Excluded ({badEmailsCount})</span>
                </div>
              )}
            </>
          )}
          
          {/* Excluded emails list */}
          {showBadEmails && visibleOptions.filter(opt => opt.action).length > 0 && (
            <>
              {visibleOptions.filter(opt => opt.action).map((option, index, arr) => (
                <div
                  key={option.id}
                  className={`email-mailbox__row email-mailbox__row--excluded ${
                    option.id === selectedId ? 'email-mailbox__row--selected' : ''
                  } ${option.isPrimary ? 'email-mailbox__row--primary' : ''} ${
                    option.action ? 'email-mailbox__row--muted' : ''
                  } ${index < arr.length - 1 ? 'email-mailbox__row--separator' : ''}`}
                  onClick={() => handleRowClick(option.id)}
                >
                  <div className="email-mailbox__row-content">
                    <div className="email-mailbox__source">
                      {option.source}
                      {option.isPrimary && <span className="email-mailbox__primary-badge">Primary</span>}
                    </div>
                    <div className="email-mailbox__email">{option.email}</div>
                  </div>
                  <div className="email-mailbox__row-actions">
                    <button 
                      ref={(el) => buttonRefs.current[option.id] = el}
                      className="email-mailbox__action-button"
                      onClick={(e) => handleMenuToggle(e, option.id)}
                    >
                      <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="#9CA3AF"/>
                        <circle cx="1.5" cy="6.5" r="1.5" fill="#9CA3AF"/>
                        <circle cx="1.5" cy="11.5" r="1.5" fill="#9CA3AF"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      {/* Render menu via portal to avoid opacity inheritance */}
      {openMenuId && menuPosition && createPortal(
        <div 
          ref={menuRef}
          className="email-mailbox__dropdown-menu"
          style={{
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
          }}
        >
          {(() => {
            const option = visibleOptions.find(opt => opt.id === openMenuId);
            if (!option) return null;
            return (
              <>
                {!option.isPrimary && (
                  <button 
                    className="email-mailbox__menu-item"
                    onClick={(e) => handleSetPrimary(e, openMenuId)}
                  >
                    Set as Primary
                  </button>
                )}
                <button 
                  className="email-mailbox__menu-item"
                  onClick={(e) => handleSetAction(e, openMenuId, option.action === 'do-not-use' ? null : 'do-not-use')}
                >
                  {option.action === 'do-not-use' ? 'Allow use' : 'Do not use'}
                </button>
                <button 
                  className={`email-mailbox__menu-item ${option.action === 'bad-email' ? 'email-mailbox__menu-item--success' : 'email-mailbox__menu-item--danger'}`}
                  onClick={(e) => handleSetAction(e, openMenuId, option.action === 'bad-email' ? null : 'bad-email')}
                >
                  {option.action === 'bad-email' ? 'Mark as good' : 'Bad email'}
                </button>
              </>
            );
          })()}
        </div>,
        document.body
      )}
    </div>
  );
};
