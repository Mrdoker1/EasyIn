import React from 'react';
import './Mismatch.css';

export type MismatchOption = {
  id: string;
  label: string;
  color: string;
};

export type MismatchProps = {
  label?: string;
  options: MismatchOption[];
  selectedId: string;
  isOpen: boolean;
  onChange?: (id: string) => void;
  onToggleOpen?: () => void;
};

const ChangeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3419 8.15648C18.672 8.11443 19.0052 8.20615 19.2677 8.41039L21.9679 10.5139H21.9689C22.5132 10.9383 22.6097 11.7244 22.1857 12.2688C21.7612 12.813 20.9761 12.9095 20.4318 12.4856L20.2413 12.3371C20.0644 16.7371 16.4434 20.2501 12.0001 20.2502C10.5603 20.2502 9.20331 19.8796 8.02257 19.2287C7.41836 18.8956 7.19749 18.1361 7.53038 17.5315C7.86353 16.9272 8.62402 16.7063 9.22863 17.0393L9.5421 17.1994C10.2863 17.552 11.1189 17.7502 12.0001 17.7502C15.0247 17.7501 17.5017 15.4144 17.7306 12.4485L17.4913 12.761C17.071 13.3081 16.286 13.4119 15.7384 12.9914C15.1911 12.5708 15.0885 11.7858 15.5089 11.2385L17.5089 8.635L17.5167 8.62425H17.5177L17.5821 8.55004L17.589 8.54125H17.59C17.7874 8.33129 18.0524 8.19345 18.3419 8.15648ZM18.4054 8.65257C18.2325 8.67465 18.0733 8.75737 17.9542 8.88402L17.8976 8.95043L15.9054 11.5432C15.6531 11.8717 15.7149 12.3426 16.0431 12.595C16.3713 12.847 16.8424 12.7849 17.0948 12.4563L17.7941 11.5452C17.8578 11.4622 17.9666 11.4282 18.0665 11.4592C18.1666 11.4905 18.2371 11.5811 18.2423 11.6858C18.2474 11.7892 18.2501 11.8944 18.2501 12.0002C18.2499 15.4517 15.4516 18.2501 12.0001 18.2502C10.9063 18.2502 9.88 17.9689 8.98742 17.4768C8.62486 17.2771 8.16788 17.4099 7.96788 17.7727C7.76847 18.1352 7.90111 18.5913 8.26378 18.7912C9.37255 19.4024 10.647 19.7502 12.0001 19.7502C16.2801 19.7501 19.7499 16.2802 19.7501 12.0002C19.7501 11.9426 19.7468 11.9105 19.7452 11.8352C19.7432 11.7388 19.7968 11.649 19.8829 11.6057C19.969 11.5625 20.0725 11.5731 20.1485 11.6321L20.7384 12.0911C21.0651 12.3456 21.5366 12.2875 21.7911 11.9612C22.0457 11.6344 21.9877 11.1629 21.6612 10.9084L18.961 8.80492C18.8035 8.68224 18.6033 8.62743 18.4054 8.65257Z" fill="#DDDEDE"/>
    <path d="M6.79199 11.4932C7.18224 11.1024 7.81623 11.1019 8.20703 11.4922C8.5976 11.8823 8.59784 12.5155 8.20801 12.9062L6.09863 15.0186C5.74554 15.3722 5.18544 15.411 4.78711 15.1094L2.39551 13.2969C1.95564 12.9632 1.8696 12.3355 2.20312 11.8955C2.53679 11.4556 3.16446 11.3696 3.60449 11.7031L4 12.0029V12C4 7.58172 7.58172 4 12 4C13.0495 4 14.0546 4.20309 14.9756 4.57227C15.4879 4.77794 15.7367 5.35962 15.5312 5.87207C15.3258 6.38462 14.744 6.63307 14.2314 6.42773C13.5431 6.15182 12.7903 6 12 6C8.68629 6 6 8.68629 6 12C6 12.0937 6.00261 12.1868 6.00684 12.2793L6.79199 11.4932Z" fill="url(#paint0_linear_14048_5900)"/>
    <defs>
      <linearGradient id="paint0_linear_14048_5900" x1="8.80162" y1="4" x2="8.80162" y2="21.4395" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00C4FF"/>
        <stop offset="1" stopColor="#2285FF"/>
      </linearGradient>
    </defs>
  </svg>
);

const GreenDot = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="4" fill="url(#paint_green_dot)"/>
    <defs>
      <linearGradient id="paint_green_dot" x1="4" y1="0" x2="4" y2="8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#03C091"/>
        <stop offset="1" stopColor="#34FFCC"/>
      </linearGradient>
    </defs>
  </svg>
);

const BlueDot = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="4" fill="url(#paint_blue_dot)"/>
    <defs>
      <linearGradient id="paint_blue_dot" x1="4" y1="0" x2="4" y2="8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00C4FF"/>
        <stop offset="1" stopColor="#2285FF"/>
      </linearGradient>
    </defs>
  </svg>
);

export const Mismatch = ({
  label = 'First name',
  options,
  selectedId,
  isOpen,
  onChange,
  onToggleOpen,
}: MismatchProps) => {
  const selectedOption = options.find((opt) => opt.id === selectedId) || options[0];

  const handleRowClick = (id: string) => {
    if (id !== selectedId) {
      onChange?.(id);
    }
  };

  if (!isOpen) {
    return (
      <div className="mismatch">
        <label className="mismatch__label">{label}</label>
        <div className="mismatch__container mismatch__container--collapsed" onClick={onToggleOpen}>
          <div className="mismatch__mailbox-column mismatch__mailbox-column--collapsed">
            <ChangeIcon className="mismatch__icon" />
          </div>
          <div className="mismatch__content-column">
            <div className="mismatch__row mismatch__row--selected">
              {selectedOption.label}
            </div>
          </div>
          <button className="mismatch__menu-button" onClick={(e) => { e.stopPropagation(); }}>
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
    <div className="mismatch">
      <label className="mismatch__label">{label}</label>
      <div className="mismatch__container mismatch__container--expanded">
        <div className="mismatch__mailbox-column mismatch__mailbox-column--expanded">
          {options.map((option, index) => (
            <div
              key={option.id}
              className={`mismatch__mailbox-cell ${
                option.id === selectedId ? 'mismatch__mailbox-cell--selected' : ''
              }`}
              onClick={index === 0 ? onToggleOpen : () => handleRowClick(option.id)}
            >
              {index === 0 ? (
                <ChangeIcon className="mismatch__icon" />
              ) : option.color === '#4ADE80' ? (
                <GreenDot />
              ) : (
                <BlueDot />
              )}
            </div>
          ))}
        </div>
        <div className="mismatch__content-column">
          {options.map((option, index) => (
            <div
              key={option.id}
              className={`mismatch__row ${
                index === 0 ? 'mismatch__row--first' : option.id === selectedId ? 'mismatch__row--selected' : ''
              } ${index < options.length - 1 ? 'mismatch__row--separator' : ''}`}
              onClick={() => handleRowClick(option.id)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
