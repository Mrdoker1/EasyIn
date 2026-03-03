import React, { useState, useRef } from 'react';
import './CompanyStandardCard.css';
import type { CompanyOption } from '../CompanySelector/CompanySelector';

interface CompanyStandardCardProps {
  companies: CompanyOption[];
  initialPrimaryId?: string;
  onEditRequest?: () => void;
  onChange?: (companyId: string, positionId: string | null) => void;
}

type View = 'card' | 'edit';

const ChevronRightIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const InfoIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="3" />
  </svg>
);

const BackIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CompanyStandardCard: React.FC<CompanyStandardCardProps> = ({
  companies,
  initialPrimaryId,
  onChange,
}) => {
  const initId = initialPrimaryId ?? companies[0]?.id ?? '';
  const [primaryId, setPrimaryId] = useState<string>(initId);
  const [primaryPositionId, setPrimaryPositionId] = useState<string | null>(
    companies.find((c) => c.id === initId)?.positions[0]?.id ?? null
  );
  const [view, setView] = useState<View>('card');
  const [tooltipOpen, setTooltipOpen] = useState(false);

  // Edit mode temp state
  const [tempCompanyId, setTempCompanyId] = useState<string>(primaryId);
  const [tempPositionId, setTempPositionId] = useState<string | null>(primaryPositionId);

  const [showToast, setShowToast] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const primaryCompany = companies.find((c) => c.id === primaryId) ?? companies[0];
  const primaryPosition = primaryCompany?.positions.find((p) => p.id === primaryPositionId);

  const openEdit = () => {
    setTempCompanyId(primaryId);
    setTempPositionId(primaryPositionId);
    setTooltipOpen(false);
    setView('edit');
  };

  const handleSave = () => {
    setPrimaryId(tempCompanyId);
    setPrimaryPositionId(tempPositionId);
    onChange?.(tempCompanyId, tempPositionId);
    setView('card');
    setShowToast(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setShowToast(false), 2500);
  };

  const handleTempCompanyPick = (id: string) => {
    setTempCompanyId(id);
    const firstPos = companies.find((c) => c.id === id)?.positions[0]?.id ?? null;
    setTempPositionId(firstPos);
  };

  // ── Card view ──────────────────────────────────────────────
  const renderCard = () => (
    <div className="csc-wrapper">
      {primaryCompany && (
        <div className="csc-card-outer">
          <div className="csc-card">
            <span className="csc-card__logo">
              {primaryCompany.name.substring(0, 2).toUpperCase()}
            </span>

            <span className="csc-card__body">
              <span className="csc-card__name">{primaryCompany.name}</span>
              {primaryPosition && (
                <span className="csc-card__subtitle">{primaryPosition.title}</span>
              )}
            </span>

            <button
              className={`csc-card__info${tooltipOpen ? ' csc-card__info--active' : ''}`}
              onClick={() => setTooltipOpen((v) => !v)}
              title="Show job titles"
            >
              <InfoIcon />
            </button>

            <button className="csc-card__chevron" onClick={openEdit} title="Change company"><ChevronRightIcon /></button>
          </div>

          {tooltipOpen && (
            <div className="csc-tooltip">
              <div className="csc-tooltip__label">Job Title{primaryCompany.positions.length > 1 ? 's' : ''}</div>
              {primaryCompany.positions.map((p) => (
                <div key={p.id} className={`csc-tooltip__item${p.id === primaryPositionId ? ' csc-tooltip__item--active' : ''}`}>
                  {p.id === primaryPositionId && <CheckIcon />}
                  <span>{p.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  // ── Edit / change selection panel ─────────────────────────
  const renderEdit = () => {
    const tempCompany = companies.find((c) => c.id === tempCompanyId);
    return (
      <div className="csc-panel">
        <div className="csc-panel__header">
          <button className="csc-panel__back" onClick={() => setView('card')}><BackIcon /></button>
          <span className="csc-panel__title">Change Company</span>
        </div>

        <div className="csc-edit-list">
          {companies.map((company) => {
            const isSelected = company.id === tempCompanyId;
            return (
              <button
                key={company.id}
                className={`csc-edit-row ${isSelected ? 'csc-edit-row--selected' : ''}`}
                onClick={() => handleTempCompanyPick(company.id)}
              >
                <span className={`csc-edit-row__logo ${isSelected ? 'csc-edit-row__logo--active' : ''}`}>
                  {company.name.substring(0, 2).toUpperCase()}
                </span>
                <span className="csc-edit-row__name">{company.name}</span>
                {isSelected && <span className="csc-edit-row__check"><CheckIcon /></span>}
              </button>
            );
          })}
        </div>

        {tempCompany && tempCompany.positions.length > 1 && (
          <div className="csc-edit-positions">
            <div className="csc-edit-positions__label">Position</div>
            <div className="csc-edit-positions__list">
              {tempCompany.positions.map((pos) => (
                <button
                  key={pos.id}
                  className={`csc-edit-pos-btn ${tempPositionId === pos.id ? 'csc-edit-pos-btn--active' : ''}`}
                  onClick={() => setTempPositionId(pos.id)}
                >
                  {pos.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {tempCompany && tempCompany.positions.length === 1 && (
          <div className="csc-edit-positions">
            <div className="csc-edit-positions__label">Position</div>
            <div className="csc-edit-positions__single">{tempCompany.positions[0].title}</div>
          </div>
        )}

        <button className="csc-edit-save" disabled={!tempCompanyId} onClick={handleSave}>
          Save
        </button>
      </div>
    );
  };

  return (
    <div className="csc">
      {view === 'card' && renderCard()}
      {view === 'edit' && renderEdit()}

      {showToast && (
        <div className="csc-toast">
          <CheckIcon />
          <span>Selection updated</span>
        </div>
      )}
    </div>
  );
};

export default CompanyStandardCard;
