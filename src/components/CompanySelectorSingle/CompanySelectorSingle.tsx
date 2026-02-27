import React, { useState } from 'react';
import './CompanySelectorSingle.css';
import type { CompanyOption, CompanyPosition } from '../CompanySelector/CompanySelector';

export type { CompanyOption, CompanyPosition };

interface CompanySelectorSingleProps {
  companies: CompanyOption[];
  onConfirm: (companyId: string, positionId: string | null) => void;
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

const CompanySelectorSingle: React.FC<CompanySelectorSingleProps> = ({ companies, onConfirm }) => {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [selectedPositionId, setSelectedPositionId] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const selectedCompany = companies.find((c) => c.id === selectedCompanyId) ?? null;
  const hasPositions = (selectedCompany?.positions.length ?? 0) > 0;

  const handleCompanyChange = (id: string) => {
    setSelectedCompanyId(id);
    setSelectedPositionId(null);
    setConfirmed(false);
  };

  const handleConfirm = () => {
    if (!selectedCompanyId) return;
    setConfirmed(true);
    onConfirm(selectedCompanyId, selectedPositionId);
  };

  if (confirmed && selectedCompany) {
    return (
      <div className="css-confirmed">
        <div className="css-confirmed__icon">✓</div>
        <div className="css-confirmed__text">
          <span className="css-confirmed__company">{selectedCompany.name}</span>
          {selectedPositionId && (
            <span className="css-confirmed__position">
              {selectedCompany.positions.find((p) => p.id === selectedPositionId)?.title}
            </span>
          )}
        </div>
        <button className="css-confirmed__undo" onClick={() => setConfirmed(false)}>
          Undo
        </button>
      </div>
    );
  }

  return (
    <div className="css-single">
      <div className="css-single__list">
        {companies.map((company) => {
          const isSelected = selectedCompanyId === company.id;
          return (
            <div key={company.id} className={`css-item ${isSelected ? 'css-item--selected' : ''}`}>
              <label className="css-item__row">
                <input
                  type="radio"
                  className="css-radio"
                  name="company-single"
                  value={company.id}
                  checked={isSelected}
                  onChange={() => handleCompanyChange(company.id)}
                />
                <span className="css-item__name">{company.name}</span>
                {isSelected && company.positions.length > 1 && (
                  <ChevronIcon open={true} />
                )}
                {isSelected && !hasPositions && (
                  <button className="css-inline-confirm" onClick={handleConfirm}>
                    Associate
                  </button>
                )}
              </label>

              {isSelected && hasPositions && (
                <div className="css-positions">
                  {company.positions.map((pos) => (
                    <label key={pos.id} className={`css-position ${selectedPositionId === pos.id ? 'css-position--selected' : ''}`}>
                      <input
                        type="radio"
                        className="css-radio css-radio--small"
                        name="position-single"
                        value={pos.id}
                        checked={selectedPositionId === pos.id}
                        onChange={() => setSelectedPositionId(pos.id)}
                      />
                      <span className="css-position__title">{pos.title}</span>
                      {selectedPositionId === pos.id && (
                        <button className="css-inline-confirm" onClick={handleConfirm}>
                          Associate
                        </button>
                      )}
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanySelectorSingle;
