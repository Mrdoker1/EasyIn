import React, { useState, useCallback } from 'react';
import LinkedInProfile from '../LinkedInProfile/LinkedInProfile';
import ExtensionSidebar, { LinkedInData } from '../ExtensionSidebar/ExtensionSidebar';
import './LinkedInSandbox.css';

interface ProfileSource {
  name: string;
  headline: string;
  location: string;
  connections: number;
  company: string;
  jobTitle: string;
  school: string;
  linkedinUrl: string;
}

interface LinkedInSandboxProps {
  profile?: Partial<ProfileSource>;
}

const DEFAULT_PROFILE: ProfileSource = {
  name: 'Grace Ezeaghatise',
  headline: 'Senior Consultant at Rizing HCM · a Wipro company',
  location: 'New York, New York, United States',
  connections: 500,
  company: 'Rizing HCM',
  jobTitle: 'Senior Consultant',
  school: 'McGill University',
  linkedinUrl: 'https://linkedin.com/in/grace-ezeaghatise',
};

function extractSidebarData(profile: ProfileSource): LinkedInData {
  const parts = profile.name.trim().split(' ');
  const firstName = parts[0] ?? '';
  const lastName = parts.slice(1).join(' ');

  return {
    firstName,
    lastName,
    headline: profile.headline,
    company: profile.company,
    jobTitle: profile.jobTitle,
    location: profile.location,
    school: profile.school,
    linkedinUrl: profile.linkedinUrl,
    email: '',
  };
}

const LinkedInSandbox: React.FC<LinkedInSandboxProps> = ({ profile: profileOverride }) => {
  const profile = { ...DEFAULT_PROFILE, ...profileOverride };

  const [isLoading, setIsLoading] = useState(false);
  const [scraped, setScraped] = useState(false);
  const [sidebarData, setSidebarData] = useState<LinkedInData | undefined>(undefined);

  const handleScrape = useCallback(() => {
    setIsLoading(true);
    setScraped(false);
    setSidebarData(undefined);

    setTimeout(() => {
      setSidebarData(extractSidebarData(profile));
      setIsLoading(false);
      setScraped(true);
    }, 1200);
  }, [profile]);

  const handleUpdate = useCallback((data: LinkedInData) => {
    setSidebarData(data);
  }, []);

  return (
    <div className="sandbox">
      {/* Simulated browser bar */}
      <div className="sandbox-browser-bar">
        <div className="sandbox-browser-dot" />
        <div className="sandbox-browser-dot" />
        <div className="sandbox-browser-dot" />
        <div className="sandbox-browser-url">
          linkedin.com/in/{profile.linkedinUrl.split('/in/')[1] ?? 'profile'}
        </div>
        <button
          className={`sandbox-scrape-btn ${isLoading ? 'loading' : ''} ${scraped ? 'scraped' : ''}`}
          onClick={handleScrape}
          disabled={isLoading}
        >
          {isLoading ? 'Scraping…' : scraped ? '✓ Scraped' : 'Scrape Page'}
        </button>
      </div>

      {/* Page + Sidebar layout */}
      <div className="sandbox-layout">
        <div className="sandbox-page">
          <LinkedInProfile
            name={profile.name}
            headline={profile.headline}
            location={profile.location}
            connections={profile.connections}
          />
        </div>

        <div className="sandbox-sidebar">
          <ExtensionSidebar
            profileData={sidebarData}
            isLoading={isLoading}
            onUpdate={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default LinkedInSandbox;
