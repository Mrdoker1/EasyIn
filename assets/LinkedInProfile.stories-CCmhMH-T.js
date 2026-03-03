import{j as S}from"./jsx-runtime-u17CrQMm.js";import{L as u}from"./LinkedInProfile-BmzjHL7O.js";import"./iframe-DQOdDxRp.js";import"./preload-helper-CPNoDHzN.js";const b=(e,r,y,g,D,C)=>{const l=["Rizing HCM","McGill University","U.S.-Ukraine Foundation","Google Inc.","Microsoft Corporation"],d=["Senior Consultant","Consultant","Associate Consultant","Project Assistant","Software Engineer","Product Manager","UX Designer","Data Analyst","Team Lead","Intern"],f=[r,y,g,D,C],p=[];for(let t=0;t<e;t++){const c=f[t]||1,m=[];for(let n=0;n<c;n++)m.push({id:`${t+1}-${n+1}`,title:d[(t*3+n)%d.length],employmentType:n===0?"Permanent Full-time":"Full-time",startDate:`Jan ${2026-t-n}`,endDate:n===0?"Present":`Dec ${2026-t-n}`,duration:`${n+1} yr ${n*3} mos`,location:"New York, United States · Hybrid",description:n===0?"Leading initiatives and managing key projects.":void 0});p.push({id:`${t+1}`,company:l[t%l.length],totalDuration:`${c*2} yrs ${c*3} mos`,positions:m})}return p},T={title:"Components/LinkedInProfile",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{companiesCount:{control:{type:"select"},options:[1,2,3,4,5],description:"Number of companies",table:{defaultValue:{summary:"2"}}},positionsInCompany1:{control:{type:"select"},options:[1,2,3,4,5],description:"Positions in company 1",table:{defaultValue:{summary:"3"}}},positionsInCompany2:{control:{type:"select"},options:[1,2,3,4,5],description:"Positions in company 2",table:{defaultValue:{summary:"1"}}},positionsInCompany3:{control:{type:"select"},options:[1,2,3,4,5],description:"Positions in company 3",table:{defaultValue:{summary:"1"}}},positionsInCompany4:{control:{type:"select"},options:[1,2,3,4,5],description:"Positions in company 4",table:{defaultValue:{summary:"1"}}},positionsInCompany5:{control:{type:"select"},options:[1,2,3,4,5],description:"Positions in company 5",table:{defaultValue:{summary:"1"}}}}},o={args:{name:"John Doe",headline:"Software Engineer",location:"New York, NY",connections:500,about:"Experienced software engineer with passion for building scalable applications.",companiesCount:2,positionsInCompany1:3,positionsInCompany2:1,positionsInCompany3:1,positionsInCompany4:1,positionsInCompany5:1,education:[{id:"1",school:"Stanford University",degree:"B.S. Computer Science",field:"Computer Science",period:"2018 - 2022"}],skills:[{id:"1",name:"JavaScript",endorsements:89},{id:"2",name:"React",endorsements:76},{id:"3",name:"Node.js",endorsements:65}]},render:e=>{const r=b(e.companiesCount||2,e.positionsInCompany1||1,e.positionsInCompany2||1,e.positionsInCompany3||1,e.positionsInCompany4||1,e.positionsInCompany5||1);return S.jsx(u,{name:e.name,headline:e.headline,location:e.location,connections:e.connections,about:e.about,experience:r,education:e.education,skills:e.skills})}},i={args:{name:"Grace Ezeaghatise",headline:"Product Designer",location:"Nigeria",connections:500,about:"Passionate product designer with experience creating user-centered digital products. Specialized in UX/UI design, user research, and design systems.",experience:[{id:"1",company:"Rizing HCM",totalDuration:"3 yrs 9 mos",positions:[{id:"1-1",title:"Senior Consultant",employmentType:"Permanent Full-time",startDate:"Jun 2025",endDate:"Present",duration:"9 mos",location:"New York, New York, United States · Hybrid"},{id:"1-2",title:"Consultant",employmentType:"Permanent Full-time",startDate:"Jun 2024",endDate:"Jun 2025",duration:"1 yr 1 mo",location:"Hybrid"},{id:"1-3",title:"Associate Consultant",employmentType:"Full-time",startDate:"Jun 2022",endDate:"Jun 2024",duration:"2 yrs 1 mo",location:"Hybrid"}]},{id:"2",company:"McGill University - Desautels Faculty of Management",totalDuration:"5 mos",positions:[{id:"2-1",title:"Project Assistant",employmentType:"Contract",startDate:"Feb 2022",endDate:"Jun 2022",duration:"5 mos",location:"Montreal, Quebec, Canada",description:"Provide logistical and data analytics support for a retail research project at the McGill Retail Innovation Lab in collaboration with Couche-Tard."}]}],education:[{id:"1",school:"University",degree:"B.A.",field:"Design",period:"2014 - 2018"}],skills:[{id:"1",name:"User Experience",endorsements:45},{id:"2",name:"Figma",endorsements:38},{id:"3",name:"Product Design",endorsements:42}]}},a={args:{name:"Sarah Johnson",headline:"Software Engineer at Tech Corp",location:"San Francisco, CA",connections:850,about:"Experienced software engineer specializing in full-stack development.",experience:[{id:"1",company:"Tech Corp",totalDuration:"5 yrs 3 mos",positions:[{id:"1-1",title:"Senior Software Engineer",employmentType:"Full-time",startDate:"Jan 2024",endDate:"Present",duration:"1 yr 2 mos",location:"San Francisco, CA · Hybrid",description:"Leading development of core platform features."},{id:"1-2",title:"Software Engineer II",employmentType:"Full-time",startDate:"Jun 2022",endDate:"Dec 2023",duration:"1 yr 7 mos",location:"San Francisco, CA"},{id:"1-3",title:"Software Engineer",employmentType:"Full-time",startDate:"Mar 2020",endDate:"May 2022",duration:"2 yrs 3 mos",location:"San Francisco, CA"}]},{id:"2",company:"Startup Inc",totalDuration:"2 yrs",positions:[{id:"2-1",title:"Junior Developer",employmentType:"Full-time",startDate:"Mar 2018",endDate:"Feb 2020",duration:"2 yrs",location:"Remote"}]}],education:[{id:"1",school:"Stanford University",degree:"B.S. Computer Science",field:"Computer Science",period:"2014 - 2018"}],skills:[{id:"1",name:"JavaScript",endorsements:89},{id:"2",name:"React",endorsements:76},{id:"3",name:"Node.js",endorsements:65}]}},s={args:{name:"Mike Chen",headline:"Product Designer",location:"Austin, TX",connections:320,about:"Creating beautiful and functional user experiences.",experience:[{id:"1",company:"Design Studio",totalDuration:"1 yr 6 mos",positions:[{id:"1-1",title:"UX Designer",employmentType:"Full-time",startDate:"Sep 2024",endDate:"Present",duration:"1 yr 6 mos",location:"Austin, TX · Hybrid",description:"Designing user interfaces for mobile and web applications."}]}],education:[{id:"1",school:"Art Institute",degree:"B.F.A.",field:"Graphic Design",period:"2020 - 2024"}],skills:[{id:"1",name:"Figma",endorsements:42},{id:"2",name:"Adobe XD",endorsements:35},{id:"3",name:"UI Design",endorsements:48}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "John Doe",
    headline: "Software Engineer",
    location: "New York, NY",
    connections: 500,
    about: "Experienced software engineer with passion for building scalable applications.",
    companiesCount: 2,
    positionsInCompany1: 3,
    positionsInCompany2: 1,
    positionsInCompany3: 1,
    positionsInCompany4: 1,
    positionsInCompany5: 1,
    education: [{
      id: '1',
      school: 'Stanford University',
      degree: 'B.S. Computer Science',
      field: 'Computer Science',
      period: '2018 - 2022'
    }],
    skills: [{
      id: '1',
      name: 'JavaScript',
      endorsements: 89
    }, {
      id: '2',
      name: 'React',
      endorsements: 76
    }, {
      id: '3',
      name: 'Node.js',
      endorsements: 65
    }]
  },
  render: (args: any) => {
    const experience = generateExperience(args.companiesCount || 2, args.positionsInCompany1 || 1, args.positionsInCompany2 || 1, args.positionsInCompany3 || 1, args.positionsInCompany4 || 1, args.positionsInCompany5 || 1);
    return <LinkedInProfile name={args.name} headline={args.headline} location={args.location} connections={args.connections} about={args.about} experience={experience} education={args.education} skills={args.skills} />;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Grace Ezeaghatise",
    headline: "Product Designer",
    location: "Nigeria",
    connections: 500,
    about: "Passionate product designer with experience creating user-centered digital products. Specialized in UX/UI design, user research, and design systems.",
    experience: [{
      id: '1',
      company: 'Rizing HCM',
      totalDuration: '3 yrs 9 mos',
      positions: [{
        id: '1-1',
        title: 'Senior Consultant',
        employmentType: 'Permanent Full-time',
        startDate: 'Jun 2025',
        endDate: 'Present',
        duration: '9 mos',
        location: 'New York, New York, United States · Hybrid'
      }, {
        id: '1-2',
        title: 'Consultant',
        employmentType: 'Permanent Full-time',
        startDate: 'Jun 2024',
        endDate: 'Jun 2025',
        duration: '1 yr 1 mo',
        location: 'Hybrid'
      }, {
        id: '1-3',
        title: 'Associate Consultant',
        employmentType: 'Full-time',
        startDate: 'Jun 2022',
        endDate: 'Jun 2024',
        duration: '2 yrs 1 mo',
        location: 'Hybrid'
      }]
    }, {
      id: '2',
      company: 'McGill University - Desautels Faculty of Management',
      totalDuration: '5 mos',
      positions: [{
        id: '2-1',
        title: 'Project Assistant',
        employmentType: 'Contract',
        startDate: 'Feb 2022',
        endDate: 'Jun 2022',
        duration: '5 mos',
        location: 'Montreal, Quebec, Canada',
        description: 'Provide logistical and data analytics support for a retail research project at the McGill Retail Innovation Lab in collaboration with Couche-Tard.'
      }]
    }],
    education: [{
      id: '1',
      school: 'University',
      degree: 'B.A.',
      field: 'Design',
      period: '2014 - 2018'
    }],
    skills: [{
      id: '1',
      name: 'User Experience',
      endorsements: 45
    }, {
      id: '2',
      name: 'Figma',
      endorsements: 38
    }, {
      id: '3',
      name: 'Product Design',
      endorsements: 42
    }]
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Sarah Johnson",
    headline: "Software Engineer at Tech Corp",
    location: "San Francisco, CA",
    connections: 850,
    about: "Experienced software engineer specializing in full-stack development.",
    experience: [{
      id: '1',
      company: 'Tech Corp',
      totalDuration: '5 yrs 3 mos',
      positions: [{
        id: '1-1',
        title: 'Senior Software Engineer',
        employmentType: 'Full-time',
        startDate: 'Jan 2024',
        endDate: 'Present',
        duration: '1 yr 2 mos',
        location: 'San Francisco, CA · Hybrid',
        description: 'Leading development of core platform features.'
      }, {
        id: '1-2',
        title: 'Software Engineer II',
        employmentType: 'Full-time',
        startDate: 'Jun 2022',
        endDate: 'Dec 2023',
        duration: '1 yr 7 mos',
        location: 'San Francisco, CA'
      }, {
        id: '1-3',
        title: 'Software Engineer',
        employmentType: 'Full-time',
        startDate: 'Mar 2020',
        endDate: 'May 2022',
        duration: '2 yrs 3 mos',
        location: 'San Francisco, CA'
      }]
    }, {
      id: '2',
      company: 'Startup Inc',
      totalDuration: '2 yrs',
      positions: [{
        id: '2-1',
        title: 'Junior Developer',
        employmentType: 'Full-time',
        startDate: 'Mar 2018',
        endDate: 'Feb 2020',
        duration: '2 yrs',
        location: 'Remote'
      }]
    }],
    education: [{
      id: '1',
      school: 'Stanford University',
      degree: 'B.S. Computer Science',
      field: 'Computer Science',
      period: '2014 - 2018'
    }],
    skills: [{
      id: '1',
      name: 'JavaScript',
      endorsements: 89
    }, {
      id: '2',
      name: 'React',
      endorsements: 76
    }, {
      id: '3',
      name: 'Node.js',
      endorsements: 65
    }]
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Mike Chen",
    headline: "Product Designer",
    location: "Austin, TX",
    connections: 320,
    about: "Creating beautiful and functional user experiences.",
    experience: [{
      id: '1',
      company: 'Design Studio',
      totalDuration: '1 yr 6 mos',
      positions: [{
        id: '1-1',
        title: 'UX Designer',
        employmentType: 'Full-time',
        startDate: 'Sep 2024',
        endDate: 'Present',
        duration: '1 yr 6 mos',
        location: 'Austin, TX · Hybrid',
        description: 'Designing user interfaces for mobile and web applications.'
      }]
    }],
    education: [{
      id: '1',
      school: 'Art Institute',
      degree: 'B.F.A.',
      field: 'Graphic Design',
      period: '2020 - 2024'
    }],
    skills: [{
      id: '1',
      name: 'Figma',
      endorsements: 42
    }, {
      id: '2',
      name: 'Adobe XD',
      endorsements: 35
    }, {
      id: '3',
      name: 'UI Design',
      endorsements: 48
    }]
  }
}`,...s.parameters?.docs?.source}}};const w=["Configurable","GraceProfile","MultiplePositions","SinglePosition"];export{o as Configurable,i as GraceProfile,a as MultiplePositions,s as SinglePosition,w as __namedExportsOrder,T as default};
