import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as x}from"./iframe-DQOdDxRp.js";const f=({name:s="Grace Ezeaghatise",headline:c="Product Designer",location:d="Nigeria",connections:m=500,about:p="Passionate product designer with experience creating user-centered digital products. Specialized in UX/UI design, user research, and design systems. I believe in the power of design to solve complex problems and create meaningful experiences.",experience:u=[{id:"1",company:"Rizing HCM",totalDuration:"3 yrs 9 mos",positions:[{id:"1-1",title:"Senior Consultant",employmentType:"Permanent Full-time",startDate:"Jun 2025",endDate:"Present",duration:"9 mos",location:"New York, New York, United States · Hybrid"},{id:"1-2",title:"Consultant",employmentType:"Permanent Full-time",startDate:"Jun 2024",endDate:"Jun 2025",duration:"1 yr 1 mo",location:"Hybrid"},{id:"1-3",title:"Associate Consultant",employmentType:"Full-time",startDate:"Jun 2022",endDate:"Jun 2024",duration:"2 yrs 1 mo",location:"Hybrid"}]},{id:"2",company:"McGill University - Desautels Faculty of Management",totalDuration:"5 mos",positions:[{id:"2-1",title:"Project Assistant",employmentType:"Contract",startDate:"Feb 2022",endDate:"Jun 2022",duration:"5 mos",location:"Montreal, Quebec, Canada",description:"Provide logistical and data analytics support for a retail research project at the McGill Retail Innovation Lab in collaboration with Couche-Tard. While responsible for experiment implementation, accelerated..."}]},{id:"3",company:"U.S.-Ukraine Foundation - Internship",totalDuration:"3 mos",positions:[{id:"3-1",title:"Intern",employmentType:"Internship",startDate:"Jun 2021",endDate:"Aug 2021",duration:"3 mos",location:"Remote",description:"Represented the Foundation at conferences and developed reports on emerging trends in defense security, impact investment, biotechnology, and international organizations in the Ukrainian..."}]},{id:"4",company:"McGill University",totalDuration:"1 yr 7 mos",positions:[{id:"4-1",title:"Research Assistant",employmentType:"Part-time",startDate:"Feb 2020",endDate:"Aug 2021",duration:"1 yr 7 mos",location:"Montreal, Quebec, Canada"}]}],education:h=[{id:"1",school:"University",degree:"Bachelor of Arts",field:"Design",period:"2014 - 2018"}],skills:y=[{id:"1",name:"User Experience Design",endorsements:45},{id:"2",name:"Figma",endorsements:38},{id:"3",name:"Product Design",endorsements:42},{id:"4",name:"Wireframing",endorsements:35},{id:"5",name:"Prototyping",endorsements:40},{id:"6",name:"User Research",endorsements:32}],profileImage:r,coverImage:a,activeExperienceId:g,onSelectExperience:o})=>e.jsxs("div",{className:"linkedin-profile",children:[e.jsxs("div",{className:"profile-header",children:[e.jsx("div",{className:"cover-photo",style:{backgroundImage:a?`url(${a})`:void 0},children:!a&&e.jsx("div",{className:"cover-placeholder"})}),e.jsxs("div",{className:"profile-main",children:[e.jsx("div",{className:"profile-picture",children:r?e.jsx("img",{src:r,alt:s}):e.jsx("div",{className:"profile-picture-placeholder",children:s.split(" ").map(n=>n[0]).join("").toUpperCase()})}),e.jsxs("div",{className:"profile-info",children:[e.jsx("h1",{className:"profile-name",children:s}),e.jsx("p",{className:"profile-headline",children:c}),e.jsxs("div",{className:"profile-meta",children:[e.jsx("span",{className:"profile-location",children:d}),e.jsxs("span",{className:"profile-connections",children:[m,"+ connections"]})]}),e.jsxs("div",{className:"profile-actions",children:[e.jsx("button",{className:"btn btn-primary",children:"Open to"}),e.jsx("button",{className:"btn btn-secondary",children:"Add profile section"}),e.jsx("button",{className:"btn btn-secondary",children:"More"})]})]})]})]}),e.jsxs("section",{className:"profile-section about-section",children:[e.jsx("h2",{className:"section-title",children:"About"}),e.jsx("p",{className:"about-text",children:p})]}),e.jsxs("section",{className:"profile-section experience-section",children:[e.jsx("h2",{className:"section-title",children:"Experience"}),e.jsx("div",{className:"experience-list",children:u.map(n=>{const t=g===n.id;return e.jsxs("div",{className:`experience-item${o?" experience-item--selectable":""}${t?" experience-item--active":""}`,children:[e.jsx("div",{className:"experience-logo",children:n.companyLogo?e.jsx("img",{src:n.companyLogo,alt:n.company}):e.jsx("div",{className:"logo-placeholder",children:n.company.substring(0,2).toUpperCase()})}),e.jsxs("div",{className:"experience-company-header",children:[e.jsx("h3",{className:"experience-company-name",children:n.company}),e.jsx("p",{className:"experience-total-duration",children:n.totalDuration})]}),o&&e.jsx("button",{className:`experience-select-btn${t?" experience-select-btn--active":""}`,onClick:()=>o(n.id),title:t?"Selected":"Select this company",children:t?"✓ Selected":"+ Select"}),n.positions.map((i,l)=>e.jsxs(x.Fragment,{children:[e.jsxs("div",{className:`position-dot-col${l<n.positions.length-1?" has-line":""}`,children:[e.jsx("div",{className:"timeline-dot"}),l<n.positions.length-1&&e.jsx("div",{className:"timeline-line"})]}),e.jsxs("div",{className:"position-content",children:[e.jsx("h4",{className:"position-title",children:i.title}),e.jsx("p",{className:"position-employment-type",children:i.employmentType}),e.jsxs("p",{className:"position-period",children:[i.startDate," - ",i.endDate," · ",i.duration]}),e.jsx("p",{className:"position-location",children:i.location}),i.description&&e.jsx("p",{className:"position-description",children:i.description})]})]},i.id))]},n.id)})})]}),e.jsxs("section",{className:"profile-section education-section",children:[e.jsx("h2",{className:"section-title",children:"Education"}),e.jsx("div",{className:"education-list",children:h.map(n=>e.jsxs("div",{className:"education-item",children:[e.jsx("div",{className:"education-logo",children:e.jsx("div",{className:"logo-placeholder",children:n.school.substring(0,2).toUpperCase()})}),e.jsxs("div",{className:"education-details",children:[e.jsx("h3",{className:"education-school",children:n.school}),e.jsxs("p",{className:"education-degree",children:[n.degree," - ",n.field]}),e.jsx("p",{className:"education-period",children:n.period})]})]},n.id))})]}),e.jsxs("section",{className:"profile-section skills-section",children:[e.jsx("h2",{className:"section-title",children:"Skills"}),e.jsx("div",{className:"skills-list",children:y.map(n=>e.jsxs("div",{className:"skill-item",children:[e.jsx("div",{className:"skill-name",children:n.name}),e.jsxs("div",{className:"skill-endorsements",children:[n.endorsements," endorsements"]})]},n.id))})]})]});f.__docgenInfo={description:"",methods:[],displayName:"LinkedInProfile",props:{name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Grace Ezeaghatise"',computed:!1}},headline:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Product Designer"',computed:!1}},location:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Nigeria"',computed:!1}},connections:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},about:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Passionate product designer with experience creating user-centered digital products. Specialized in UX/UI design, user research, and design systems. I believe in the power of design to solve complex problems and create meaningful experiences."',computed:!1}},experience:{required:!1,tsType:{name:"Array",elements:[{name:"Experience"}],raw:"Experience[]"},description:"",defaultValue:{value:`[
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
]`,computed:!1}},education:{required:!1,tsType:{name:"Array",elements:[{name:"Education"}],raw:"Education[]"},description:"",defaultValue:{value:`[
  {
    id: '1',
    school: 'University',
    degree: 'Bachelor of Arts',
    field: 'Design',
    period: '2014 - 2018'
  }
]`,computed:!1}},skills:{required:!1,tsType:{name:"Array",elements:[{name:"Skill"}],raw:"Skill[]"},description:"",defaultValue:{value:`[
  { id: '1', name: 'User Experience Design', endorsements: 45 },
  { id: '2', name: 'Figma', endorsements: 38 },
  { id: '3', name: 'Product Design', endorsements: 42 },
  { id: '4', name: 'Wireframing', endorsements: 35 },
  { id: '5', name: 'Prototyping', endorsements: 40 },
  { id: '6', name: 'User Research', endorsements: 32 }
]`,computed:!1}},profileImage:{required:!1,tsType:{name:"string"},description:""},coverImage:{required:!1,tsType:{name:"string"},description:""},activeExperienceId:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Exp 4: ID of the currently-active experience company"},onSelectExperience:{required:!1,tsType:{name:"signature",type:"function",raw:"(experienceId: string) => void",signature:{arguments:[{type:{name:"string"},name:"experienceId"}],return:{name:"void"}}},description:"Exp 4: called when user clicks a company in the experience section"}}};export{f as L};
