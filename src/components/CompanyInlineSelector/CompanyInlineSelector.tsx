import React, { useState } from 'react';
import './CompanyInlineSelector.css';
import type { CompanyOption } from '../CompanySelector/CompanySelector';

interface CompanyInlineSelectorProps {
  companies: CompanyOption[];
  defaultCompanyId?: string;
  onChange?: (companyId: string, positionId: string | null) => void;
}

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.15s' }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CompanyInlineSelector: React.FC<CompanyInlineSelectorProps> = ({
  companies,
  defaultCompanyId,
  onChange,
}) => {
  const defaultId = defaultCompanyId ?? companies[0]?.id ?? null;
  const defaultPositionId =
    companies.find((c) => c.id === defaultId)?.positions[0]?.id ?? null;

  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(defaultId);
  const [selectedPositionId, setSelectedPositionId] = useState<string | null>(defaultPositionId);
  const [expanded, setExpanded] = useState(true);

  const selectedCompany = companies.find((c) => c.id === selectedCompanyId) ?? null;
  const selectedPosition = selectedCompany?.positions.find((p) => p.id === selectedPositionId) ?? null;

  const handleSelectCompany = (companyId: string) => {
    const firstPos = companies.find((c) => c.id === companyId)?.positions[0]?.id ?? null;
    setSelectedCompanyId(companyId);
    setSelectedPositionId(firstPos);
    onChange?.(companyId, firstPos);
  };

  const handleSelectPosition = (companyId: string, positionId: string) => {
    setSelectedPositionId(positionId);
    onChange?.(companyId, positionId);
  };

  return (
    <div className="cis">
      {/* ── Collapsed chip ── */}
      <button
        className={`cis-chip ${expanded ? 'cis-chip--open' : ''}`}
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="cis-chip__logo">
          {selectedCompany ? selectedCompany.name.substring(0, 2).toUpperCase() : '?'}
        </div>
        <div className="cis-chip__info">
          <span className="cis-chip__name">{selectedCompany?.name ?? 'Select company'}</span>
          {selectedPosition && (
            <span className="cis-chip__pos">{selectedPosition.title}</span>
          )}
        </div>
        <span className="cis-chip__chevron"><ChevronIcon open={expanded} /></span>
      </button>

      {/* ── Expanded timeline list ── */}
      {expanded && (
        <div className="cis-list">
          {companies.map((company, ci) => {
            const isSelected = company.id === selectedCompanyId;
            const isLastCompany = ci === companies.length - 1;
            return (
              <React.Fragment key={company.id}>
                {/* Company row */}
                <div className="cis-entry">
                  <div className="cis-entry__spine">
                    <div className={`cis-entry__logo ${isSelected ? 'cis-entry__logo--active' : ''}`}>
                      {company.name.substring(0, 2).toUpperCase()}
                    </div>
                    {/* line only if there's something below: positions or another company */}
                    {(!isLastCompany || isSelected) && <div className="cis-entry__line" />}
                  </div>
                  <div className="cis-entry__body">
                    <button
                      className={`cis-entry__company ${isSelected ? 'cis-entry__company--active' : ''}`}
                      onClick={() => handleSelectCompany(company.id)}
                    >
                      <div className="cis-entry__name-row">
                        <span className="cis-entry__name">{company.name}</span>
                        {isSelected && (
                          <svg className="cis-entry__check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                      {!isSelected && (
                        <span className="cis-entry__hint">{company.positions[0]?.title}{company.positions.length > 1 ? ` +${company.positions.length - 1}` : ''}</span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Position rows — siblings so dots sit on the main spine */}
                {isSelected && company.positions.map((pos, pi) => {
                  const isLastPos = pi === company.positions.length - 1;
                  return (
                    <div key={pos.id} className="cis-entry cis-entry--pos">
                      <div className="cis-entry__spine">
                        <button
                          className={`cis-pos-check ${selectedPositionId === pos.id ? 'cis-pos-check--active' : ''}`}
                          onClick={() => handleSelectPosition(company.id, pos.id)}
                        >
                          {selectedPositionId === pos.id && (
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                        {(!isLastPos || !isLastCompany) && <div className="cis-entry__line" />}
                      </div>
                      <div className="cis-entry__body">
                        <button
                          className={`cis-pos-btn ${selectedPositionId === pos.id ? 'cis-pos-btn--active' : ''}`}
                          onClick={() => handleSelectPosition(company.id, pos.id)}
                        >
                          {pos.title}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CompanyInlineSelector;
