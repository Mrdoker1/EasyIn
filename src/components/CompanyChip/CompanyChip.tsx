import React, { useState } from 'react';
import './CompanyChip.css';
import type { CompanyOption } from '../CompanySelector/CompanySelector';

interface CompanyChipProps {
  companies: CompanyOption[];
  /** Pre-select this company ID; defaults to the first company. */
  defaultCompanyId?: string;
  onChange?: (companyId: string, positionId: string | null) => void;
}

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="10" height="10" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.15s' }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CompanyChip: React.FC<CompanyChipProps> = ({ companies, defaultCompanyId, onChange }) => {
  const defaultId = defaultCompanyId ?? companies[0]?.id ?? null;

  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(defaultId);
  const [selectedPositionId, setSelectedPositionId] = useState<string | null>(
    companies.find((c) => c.id === defaultId)?.positions[0]?.id ?? null
  );
  const [open, setOpen] = useState(false);

  const selectedCompany = companies.find((c) => c.id === selectedCompanyId) ?? null;
  const selectedPosition = selectedCompany?.positions.find((p) => p.id === selectedPositionId) ?? null;

  const handleSelect = (companyId: string, positionId: string | null) => {
    setSelectedCompanyId(companyId);
    setSelectedPositionId(positionId);
    setOpen(false);
    onChange?.(companyId, positionId);
  };

  const logoText = (name: string) => name.substring(0, 2).toUpperCase();

  return (
    <div className="company-chip-wrap">
      {/* Always-visible company chip — no click needed to see the default */}
      <button
        className={`company-chip ${open ? 'company-chip--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="company-chip__logo">
          {selectedCompany ? logoText(selectedCompany.name) : '?'}
        </div>
        <div className="company-chip__info">
          <span className="company-chip__name">
            {selectedCompany?.name ?? 'Select company'}
          </span>
          {selectedPosition && (
            <span className="company-chip__position">{selectedPosition.title}</span>
          )}
        </div>
        <div className="company-chip__actions">
          {companies.length > 1 && (
            <span className="company-chip__count">{companies.length}</span>
          )}
          <ChevronIcon open={open} />
        </div>
      </button>

      {/* Inline switcher — appears below the chip */}
      {open && (
        <div className="company-chip__dropdown">
          {companies.map((company) => {
            const isActive = company.id === selectedCompanyId;
            return (
              <div key={company.id} className={`chip-option ${isActive ? 'chip-option--active' : ''}`}>
                <button
                  className="chip-option__row"
                  onClick={() => handleSelect(company.id, company.positions[0]?.id ?? null)}
                >
                  <div className="chip-option__logo">{logoText(company.name)}</div>
                  <div className="chip-option__text">
                    <span className="chip-option__name">{company.name}</span>
                    <span className="chip-option__sub">{company.positions.length} position{company.positions.length !== 1 ? 's' : ''}</span>
                  </div>
                  {isActive && (
                    <span className="chip-option__check"><CheckIcon /></span>
                  )}
                </button>
                {/* Position selector for the active company */}
                {isActive && company.positions.length > 1 && (
                  <div className="chip-option__positions">
                    {company.positions.map((pos) => (
                      <button
                        key={pos.id}
                        className={`chip-pos ${selectedPositionId === pos.id ? 'chip-pos--active' : ''}`}
                        onClick={() => handleSelect(company.id, pos.id)}
                      >
                        {pos.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CompanyChip;
