import React, { useState, useRef, useEffect } from 'react';
import './CompanyPositionCard.css';
import type { CompanyOption } from '../CompanySelector/CompanySelector';

interface CompanyPositionCardProps {
  company: CompanyOption;
  selectedPositionId: string | null;
  isPrimary: boolean;
  onSelect: (companyId: string, positionId: string) => void;
}

const CompanyPositionCard: React.FC<CompanyPositionCardProps> = ({
  company,
  selectedPositionId,
  isPrimary,
  onSelect,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const selectedPosition = company.positions.find((p) => p.id === selectedPositionId)
    ?? company.positions[0];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (company.positions.length === 1) {
      // Single position — select directly
      onSelect(company.id, company.positions[0].id);
    } else {
      // Multi-position — toggle dropdown
      setDropdownOpen((v) => !v);
    }
  };

  const handlePositionClick = (positionId: string) => {
    onSelect(company.id, positionId);
    setDropdownOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [dropdownOpen]);

  const initials = company.name.substring(0, 2).toUpperCase();

  return (
    <div
      className={`cpc-root${dropdownOpen ? ' cpc-root--open' : ''}`}
      ref={cardRef}
    >
      <div className="cpc-card-outer">
        <div className="cpc-card">
          {/* Left logo — click to pick */}
          <button
            className={`cpc-card__logo${isPrimary ? ' cpc-card__logo--primary' : ''}`}
            onClick={handleLogoClick}
            title={company.positions.length > 1 ? 'Choose position' : 'Set as primary'}
          >
            <span className="cpc-card__initials">{initials}</span>
          </button>

          {/* Body */}
          <div className="cpc-card__body">
            <span className="cpc-card__name">{company.name}</span>
            {selectedPosition && (
              <span className="cpc-card__subtitle">
                {isPrimary && <span className="cpc-card__primary-dot" />}
                {selectedPosition.title}
              </span>
            )}
          </div>

          {/* Right chevron */}
          <button className="cpc-card__right-chevron">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Position dropdown */}
        {dropdownOpen && (
          <div className="cpc-dropdown">
            {company.positions.map((pos) => {
              const isSelected = pos.id === (selectedPositionId ?? company.positions[0].id);
              return (
                <button
                  key={pos.id}
                  className={`cpc-dropdown__item${isSelected ? ' cpc-dropdown__item--selected' : ''}`}
                  onClick={() => handlePositionClick(pos.id)}
                >
                  <span className={`cpc-dropdown__radio${isSelected ? ' cpc-dropdown__radio--active' : ''}`} />
                  <span className="cpc-dropdown__label">{pos.title}</span>
                  {isSelected && isPrimary && (
                    <span className="cpc-dropdown__badge">primary</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyPositionCard;
