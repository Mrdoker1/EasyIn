import React, { useState } from 'react';
import './ExtensionSidebar.css';
import CompanySelector, { CompanyOption, CompanySelection } from '../CompanySelector/CompanySelector';
import CompanySelectorSingle from '../CompanySelectorSingle/CompanySelectorSingle';

const DotsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L4 5v6c0 5.25 3.4 10.15 8 11.35C16.6 21.15 20 16.25 20 11V5l-8-3z" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.15s' }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export interface LinkedInData {
  firstName?: string;
  lastName?: string;
  headline?: string;
  company?: string;
  jobTitle?: string;
  location?: string;
  email?: string;
  school?: string;
  linkedinUrl?: string;
  companies?: CompanyOption[];
}

type ConvoStatus = 'Closed' | 'Active' | 'Snooze';

interface ExtensionSidebarProps {
  profileData?: LinkedInData;
  isLoading?: boolean;
  onUpdate?: (data: LinkedInData) => void;
  companySelectorMode?: 'multi' | 'single';
}

interface FieldRowProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  onChange: (v: string) => void;
}

const FieldRow: React.FC<FieldRowProps> = ({ label, value, icon, onChange }) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="field-row">
      <span className="field-label">{label}</span>
      <div className="field-value-row">
        <span className="field-icon">{icon}</span>
        {editing ? (
          <input
            autoFocus
            className="field-input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => setEditing(false)}
          />
        ) : (
          <span
            className={`field-value ${!value ? 'field-empty' : ''}`}
            onClick={() => setEditing(true)}
          >
            {value || '—'}
          </span>
        )}
        <button className="field-menu-btn" onClick={() => setEditing((v) => !v)}>
          <DotsIcon />
        </button>
      </div>
    </div>
  );
};

const ExtensionSidebar: React.FC<ExtensionSidebarProps> = ({
  profileData,
  isLoading = false,
  onUpdate,
  companySelectorMode = 'multi',
}) => {
  const [activeTab, setActiveTab] = useState<'properties' | 'conversations'>('properties');
  const [fields, setFields] = useState<LinkedInData>(profileData || {});
  const [convoStatus, setConvoStatus] = useState<ConvoStatus>('Active');
  const [assocSearch, setAssocSearch] = useState('');
  const [assocOpen, setAssocOpen] = useState(false);
  const [companySelection, setCompanySelection] = useState<CompanySelection>({});
  const [primaryCompanyId, setPrimaryCompanyId] = useState<string | null>(null);

  React.useEffect(() => {
    setFields(profileData || {});
  }, [profileData]);

  const handleChange = (key: keyof LinkedInData, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const statuses: ConvoStatus[] = ['Closed', 'Active', 'Snooze'];

  return (
    <div className="extension-sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="sidebar-header-left">
          <div className="sidebar-avatar">E</div>
          <span className="sidebar-title">{fields.email || 'email 1'}</span>
        </div>
        <div className="sidebar-header-actions">
          <button className="icon-btn thick-dots"><DotsIcon /></button>
          <button className="icon-btn">✕</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="sidebar-tabs">
        <button
          className={`sidebar-tab ${activeTab === 'properties' ? 'active' : ''}`}
          onClick={() => setActiveTab('properties')}
        >
          Properties
        </button>
        <button
          className={`sidebar-tab ${activeTab === 'conversations' ? 'active' : ''}`}
          onClick={() => setActiveTab('conversations')}
        >
          Conversations
        </button>
      </div>

      {/* Content */}
      <div className="sidebar-content">
        {activeTab === 'properties' && (
          <>
            {/* Convo Status */}
            <div className="sidebar-section">
              <div className="section-header">
                <span className="section-label">CONVO STATUS</span>
                <button className="section-action thick-dots"><DotsIcon /></button>
              </div>
              <div className="status-toggle">
                {statuses.map((s) => (
                  <button
                    key={s}
                    className={`status-btn ${convoStatus === s ? 'active' : ''}`}
                    onClick={() => setConvoStatus(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Company Associations */}
            <div className="sidebar-section">
              <div className="section-header">
                <span className="section-label">COMPANY ASSOCIATIONS</span>
                <button className="section-action thick-dots"><DotsIcon /></button>
              </div>
              {isLoading ? (
                <div className="sidebar-loading">
                  <div className="spinner" />
                  <span>Loading...</span>
                </div>
              ) : fields.companies && fields.companies.length > 0 ? (
                companySelectorMode === 'single' ? (
                  <CompanySelectorSingle
                    companies={fields.companies}
                    onConfirm={(companyId, positionId) => {
                      console.log('Create & Associate:', companyId, positionId);
                    }}
                  />
                ) : (
                  <CompanySelector
                    companies={fields.companies}
                    selection={companySelection}
                    onChange={setCompanySelection}
                    primaryCompanyId={primaryCompanyId}
                    onPrimaryChange={setPrimaryCompanyId}
                  />
                )
              ) : (
                <>
                  <button
                    className="assoc-add-btn"
                    onClick={() => setAssocOpen((v) => !v)}
                  >
                    <span className="assoc-plus">⊕</span>
                    <span>Add association</span>
                    <span className="assoc-chevron"><ChevronIcon open={assocOpen} /></span>
                  </button>
                  {assocOpen && (
                    <div className="assoc-dropdown">
                      <input
                        autoFocus
                        className="assoc-search"
                        placeholder="Type a name"
                        value={assocSearch}
                        onChange={(e) => setAssocSearch(e.target.value)}
                      />
                      {assocSearch && (
                        <div className="assoc-result">{assocSearch}</div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Contact Properties */}
            <div className="sidebar-section">
              <div className="section-header">
                <span className="section-label">CONTACT PROPERTIES</span>
                <button className="section-action thick-dots"><DotsIcon /></button>
              </div>
              {isLoading ? (
                <div className="sidebar-loading">
                  <div className="spinner" />
                  <span>Loading...</span>
                </div>
              ) : (
                <div className="fields-list">
                  <FieldRow label="First Name"  icon={<ShieldIcon />} value={fields.firstName  || ''} onChange={(v) => handleChange('firstName',  v)} />
                  <FieldRow label="Last Name"   icon={<ShieldIcon />} value={fields.lastName   || ''} onChange={(v) => handleChange('lastName',   v)} />
                  <FieldRow label="Job Title"   icon={<ShieldIcon />} value={fields.jobTitle   || ''} onChange={(v) => handleChange('jobTitle',   v)} />
                  <FieldRow label="Headline"    icon={<ShieldIcon />} value={fields.headline   || ''} onChange={(v) => handleChange('headline',   v)} />
                  <FieldRow label="Location"    icon={<ShieldIcon />} value={fields.location   || ''} onChange={(v) => handleChange('location',   v)} />
                  <FieldRow label="Email"       icon={<ShieldIcon />} value={fields.email      || ''} onChange={(v) => handleChange('email',      v)} />
                  <FieldRow label="School"      icon={<ShieldIcon />} value={fields.school     || ''} onChange={(v) => handleChange('school',     v)} />
                </div>
              )}
            </div>
          </>
        )}

        {activeTab === 'conversations' && (
          <div className="sidebar-empty">
            <p>No conversations yet.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <button className="create-btn" onClick={() => onUpdate?.(fields)}>
          Update
        </button>
      </div>
    </div>
  );
};

export default ExtensionSidebar;
