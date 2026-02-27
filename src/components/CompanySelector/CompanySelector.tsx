import React, { useState } from 'react';
import './CompanySelector.css';

export interface CompanyPosition {
  id: string;
  title: string;
}

export interface CompanyOption {
  id: string;
  name: string;
  logo?: string;
  positions: CompanyPosition[];
}

export interface CompanySelection {
  [companyId: string]: {
    company: boolean;
    positions: { [positionId: string]: boolean };
  };
}

interface CompanySelectorProps {
  companies: CompanyOption[];
  selection: CompanySelection;
  onChange: (selection: CompanySelection) => void;
}

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.15s' }}
  >
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const CompanySelector: React.FC<CompanySelectorProps> = ({ companies, selection, onChange }) => {
  const [expanded, setExpanded] = useState<{ [id: string]: boolean }>({});

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isCompanyChecked = (companyId: string) =>
    selection[companyId]?.company ?? false;

  const isCompanyIndeterminate = (companyId: string) => {
    const sel = selection[companyId];
    if (!sel) return false;
    const posVals = Object.values(sel.positions);
    const anyPos = posVals.some(Boolean);
    const allPos = posVals.length > 0 && posVals.every(Boolean);
    return anyPos && !allPos && !sel.company;
  };

  const isPositionChecked = (companyId: string, positionId: string) =>
    selection[companyId]?.positions[positionId] ?? false;

  const handleCompanyChange = (company: CompanyOption, checked: boolean) => {
    const positions: { [id: string]: boolean } = {};
    company.positions.forEach((p) => { positions[p.id] = checked; });
    onChange({
      ...selection,
      [company.id]: { company: checked, positions },
    });
    if (checked) setExpanded((prev) => ({ ...prev, [company.id]: true }));
  };

  const handlePositionChange = (company: CompanyOption, positionId: string, checked: boolean) => {
    const existing = selection[company.id] ?? { company: false, positions: {} };
    const newPositions = { ...existing.positions, [positionId]: checked };
    const allChecked = company.positions.every((p) => newPositions[p.id]);
    onChange({
      ...selection,
      [company.id]: {
        company: allChecked,
        positions: newPositions,
      },
    });
  };

  const totalSelected = Object.values(selection).reduce((acc, s) => {
    const posCount = Object.values(s.positions).filter(Boolean).length;
    return acc + (s.company ? 1 : posCount > 0 ? 1 : 0);
  }, 0);

  return (
    <div className="company-selector">
      {totalSelected > 0 && (
        <div className="company-selector__summary">
          {totalSelected} compan{totalSelected === 1 ? 'y' : 'ies'} selected
        </div>
      )}

      {companies.map((company) => {
        const isOpen = expanded[company.id] ?? false;
        const hasMultiplePositions = company.positions.length > 1;
        const companyChecked = isCompanyChecked(company.id);
        const indeterminate = isCompanyIndeterminate(company.id);

        return (
          <div key={company.id} className="company-item">
            {/* Company row */}
            <div className={`company-row ${companyChecked || indeterminate ? 'company-row--selected' : ''}`}>
              <label className="company-row__label">
                <input
                  type="checkbox"
                  className="cs-checkbox"
                  checked={companyChecked}
                  ref={(el) => {
                    if (el) el.indeterminate = indeterminate;
                  }}
                  onChange={(e) => handleCompanyChange(company, e.target.checked)}
                />
                <span className="company-row__name">{company.name}</span>
              </label>
              {hasMultiplePositions && (
                <button
                  className="company-row__expand"
                  onClick={() => toggleExpand(company.id)}
                >
                  <ChevronIcon open={isOpen} />
                </button>
              )}
            </div>

            {/* Positions (only shown when expanded, or always if single position) */}
            {(hasMultiplePositions ? isOpen : true) && (
              <div className="position-list">
                {company.positions.map((pos) => (
                  <label key={pos.id} className="position-row">
                    <input
                      type="checkbox"
                      className="cs-checkbox cs-checkbox--small"
                      checked={isPositionChecked(company.id, pos.id)}
                      onChange={(e) => handlePositionChange(company, pos.id, e.target.checked)}
                    />
                    <span className="position-row__title">{pos.title}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CompanySelector;
