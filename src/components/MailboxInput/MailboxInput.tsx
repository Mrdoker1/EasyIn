import React from 'react';
import './MailboxInput.css';

export type MailboxOption = {
  id: string;
  label: string;
};

export type MailboxInputProps = {
  label: string;
  value: string;
  options: MailboxOption[];
  activeOptionId?: string;
  isExpanded?: boolean;
  width?: number | 'responsive';
  onChangeValue?: (value: string) => void;
  onChangeActiveOption?: (id: string) => void;
  onToggleExpand?: () => void;
  onPrevOption?: () => void;
  onNextOption?: () => void;
  onMenuClick?: () => void;
};

export const MailboxInput = ({
  label,
  value,
  options,
  activeOptionId,
  isExpanded = false,
  width = 250,
  onChangeValue,
  onChangeActiveOption,
  onToggleExpand,
  onPrevOption,
  onNextOption,
  onMenuClick,
}: MailboxInputProps) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1
    );
  };

  React.useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, [options, isExpanded]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 200;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="mailbox-input"
      style={{
        width: width === 'responsive' ? '100%' : `${width}px`,
        maxWidth: width === 'responsive' ? '500px' : undefined,
      }}
    >
      <label className="mailbox-input__label">{label}</label>
      
      <div className="mailbox-input__card">
        {/* Main row */}
        <div className="mailbox-input__main-row">
          <button 
            className="mailbox-input__icon-button"
            onClick={onToggleExpand}
            aria-label="Toggle mailbox options"
          >
            <svg className="mailbox-input__icon" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="4" cy="4" r="2" />
              <circle cx="12" cy="4" r="2" />
              <circle cx="20" cy="4" r="2" />
              <circle cx="4" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="20" cy="12" r="2" />
              <circle cx="4" cy="20" r="2" />
              <circle cx="12" cy="20" r="2" />
              <circle cx="20" cy="20" r="2" />
            </svg>
            {!isExpanded && (
              <span className="mailbox-input__badge">{options.length}</span>
            )}
          </button>

          <input
            type="text"
            className="mailbox-input__field"
            value={value}
            onChange={(e) => onChangeValue?.(e.target.value)}
            placeholder="Enter value..."
          />

          <button
            className="mailbox-input__menu-button"
            onClick={onMenuClick}
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>
        </div>

        {/* Mailbox row (collapsible) */}
        {isExpanded && (
          <div className="mailbox-input__mailbox-row">
            <button
              className="mailbox-input__arrow-button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div 
              ref={scrollContainerRef}
              className="mailbox-input__options"
            >
              {options.map((option) => (
                <button
                  key={option.id}
                  className={`mailbox-input__pill ${
                    option.id === activeOptionId ? 'mailbox-input__pill--active' : ''
                  }`}
                  onClick={() => onChangeActiveOption?.(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <button
              className="mailbox-input__arrow-button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
