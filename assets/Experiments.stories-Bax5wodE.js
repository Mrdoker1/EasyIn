import{S as a}from"./SandboxLayout-BuuzBE-n.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-Bk1pUD54.js";import"./preload-helper-PPVm8Dsz.js";import"./LinkedInProfile-CsUCt5Fa.js";import"./ExtensionSidebar-0IshSztz.js";const c={title:"LinkedInSandbox/Experiments",component:a,parameters:{layout:"fullscreen",docs:{description:{component:`LinkedInSandbox — playground for extension experiments.
Each story uses SandboxLayout as the base frame.
Click "Scrape Page" to simulate scraping data from the profile page into the sidebar.`}}}},e={args:{}},n=[{id:"1",name:"Rizing HCM",positions:[{id:"1-1",title:"Senior Consultant"},{id:"1-2",title:"Consultant"},{id:"1-3",title:"Associate Consultant"}]},{id:"2",name:"McGill University – Desautels Faculty of Management",positions:[{id:"2-1",title:"Project Assistant"}]},{id:"3",name:"U.S.-Ukraine Foundation",positions:[{id:"3-1",title:"Intern"}]},{id:"4",name:"McGill University",positions:[{id:"4-1",title:"Research Assistant"}]}],t={name:"Experiment: Company Selector",args:{companies:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Experiment: Company Selector',
  args: {
    companies: GRACE_COMPANIES
  }
}`,...t.parameters?.docs?.source}}};const d=["GraceEzeaghatise","CompanySelectorExperiment"];export{t as CompanySelectorExperiment,e as GraceEzeaghatise,d as __namedExportsOrder,c as default};
