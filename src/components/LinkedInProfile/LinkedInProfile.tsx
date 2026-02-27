import React from 'react';
import './LinkedInProfile.css';

interface Position {
  id: string;
  title: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  description?: string;
}

interface Experience {
  id: string;
  company: string;
  companyLogo?: string;
  totalDuration: string;
  positions: Position[];
}

interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  period: string;
}

interface Skill {
  id: string;
  name: string;
  endorsements: number;
}

interface LinkedInProfileProps {
  name?: string;
  headline?: string;
  location?: string;
  connections?: number;
  about?: string;
  experience?: Experience[];
  education?: Education[];
  skills?: Skill[];
  profileImage?: string;
  coverImage?: string;
}

const LinkedInProfile: React.FC<LinkedInProfileProps> = ({
  name = "Grace Ezeaghatise",
  headline = "Product Designer",
  location = "Nigeria",
  connections = 500,
  about = "Passionate product designer with experience creating user-centered digital products. Specialized in UX/UI design, user research, and design systems. I believe in the power of design to solve complex problems and create meaningful experiences.",
  experience = [
    {
      id: '1',
      company: 'Rizing HCM',
      totalDuration: '3 yrs 9 mos',
      positions: [
        {
          id: '1-1',
          title: 'Senior Consultant',
          employmentType: 'Permanent Full-time',
          startDate: 'Jun 2025',
          endDate: 'Present',
          duration: '9 mos',
          location: 'New York, New York, United States · Hybrid'
        },
        {
          id: '1-2',
          title: 'Consultant',
          employmentType: 'Permanent Full-time',
          startDate: 'Jun 2024',
          endDate: 'Jun 2025',
          duration: '1 yr 1 mo',
          location: 'Hybrid'
        },
        {
          id: '1-3',
          title: 'Associate Consultant',
          employmentType: 'Full-time',
          startDate: 'Jun 2022',
          endDate: 'Jun 2024',
          duration: '2 yrs 1 mo',
          location: 'Hybrid'
        }
      ]
    },
    {
      id: '2',
      company: 'McGill University - Desautels Faculty of Management',
      totalDuration: '5 mos',
      positions: [
        {
          id: '2-1',
          title: 'Project Assistant',
          employmentType: 'Contract',
          startDate: 'Feb 2022',
          endDate: 'Jun 2022',
          duration: '5 mos',
          location: 'Montreal, Quebec, Canada',
          description: 'Provide logistical and data analytics support for a retail research project at the McGill Retail Innovation Lab in collaboration with Couche-Tard. While responsible for experiment implementation, accelerated...'
        }
      ]
    },
    {
      id: '3',
      company: 'U.S.-Ukraine Foundation - Internship',
      totalDuration: '3 mos',
      positions: [
        {
          id: '3-1',
          title: 'Intern',
          employmentType: 'Internship',
          startDate: 'Jun 2021',
          endDate: 'Aug 2021',
          duration: '3 mos',
          location: 'Remote',
          description: 'Represented the Foundation at conferences and developed reports on emerging trends in defense security, impact investment, biotechnology, and international organizations in the Ukrainian...'
        }
      ]
    },
    {
      id: '4',
      company: 'McGill University',
      totalDuration: '1 yr 7 mos',
      positions: [
        {
          id: '4-1',
          title: 'Research Assistant',
          employmentType: 'Part-time',
          startDate: 'Feb 2020',
          endDate: 'Aug 2021',
          duration: '1 yr 7 mos',
          location: 'Montreal, Quebec, Canada'
        }
      ]
    }
  ],
  education = [
    {
      id: '1',
      school: 'University',
      degree: 'Bachelor of Arts',
      field: 'Design',
      period: '2014 - 2018'
    }
  ],
  skills = [
    { id: '1', name: 'User Experience Design', endorsements: 45 },
    { id: '2', name: 'Figma', endorsements: 38 },
    { id: '3', name: 'Product Design', endorsements: 42 },
    { id: '4', name: 'Wireframing', endorsements: 35 },
    { id: '5', name: 'Prototyping', endorsements: 40 },
    { id: '6', name: 'User Research', endorsements: 32 }
  ],
  profileImage,
  coverImage
}) => {
  return (
    <div className="linkedin-profile">
      {/* Header Section */}
      <div className="profile-header">
        <div className="cover-photo" style={{ backgroundImage: coverImage ? `url(${coverImage})` : undefined }}>
          {!coverImage && <div className="cover-placeholder"></div>}
        </div>
        
        <div className="profile-main">
          <div className="profile-picture">
            {profileImage ? (
              <img src={profileImage} alt={name} />
            ) : (
              <div className="profile-picture-placeholder">
                {name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
            )}
          </div>
          
          <div className="profile-info">
            <h1 className="profile-name">{name}</h1>
            <p className="profile-headline">{headline}</p>
            <div className="profile-meta">
              <span className="profile-location">{location}</span>
              <span className="profile-connections">{connections}+ connections</span>
            </div>
            
            <div className="profile-actions">
              <button className="btn btn-primary">Open to</button>
              <button className="btn btn-secondary">Add profile section</button>
              <button className="btn btn-secondary">More</button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="profile-section about-section">
        <h2 className="section-title">About</h2>
        <p className="about-text">{about}</p>
      </section>

      {/* Experience Section */}
      <section className="profile-section experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experience.map((exp) => (
            <div key={exp.id} className="experience-item">
              {/* Logo — col 1, row 1 */}
              <div className="experience-logo">
                {exp.companyLogo ? (
                  <img src={exp.companyLogo} alt={exp.company} />
                ) : (
                  <div className="logo-placeholder">
                    {exp.company.substring(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              {/* Company header — col 2, row 1 */}
              <div className="experience-company-header">
                <h3 className="experience-company-name">{exp.company}</h3>
                <p className="experience-total-duration">{exp.totalDuration}</p>
              </div>
              {/* Positions — each pair (dot-col + content) auto-placed in next row */}
              {exp.positions.map((position, index) => (
                <React.Fragment key={position.id}>
                  {/* Dot + vertical line — col 1 */}
                  <div className={`position-dot-col${index < exp.positions.length - 1 ? ' has-line' : ''}`}>
                    <div className="timeline-dot" />
                    {index < exp.positions.length - 1 && <div className="timeline-line" />}
                  </div>
                  {/* Position text — col 2 */}
                  <div className="position-content">
                    <h4 className="position-title">{position.title}</h4>
                    <p className="position-employment-type">{position.employmentType}</p>
                    <p className="position-period">
                      {position.startDate} - {position.endDate} · {position.duration}
                    </p>
                    <p className="position-location">{position.location}</p>
                    {position.description && (
                      <p className="position-description">{position.description}</p>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="profile-section education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-logo">
                <div className="logo-placeholder">
                  {edu.school.substring(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="education-details">
                <h3 className="education-school">{edu.school}</h3>
                <p className="education-degree">{edu.degree} - {edu.field}</p>
                <p className="education-period">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="profile-section skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-endorsements">{skill.endorsements} endorsements</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LinkedInProfile;
