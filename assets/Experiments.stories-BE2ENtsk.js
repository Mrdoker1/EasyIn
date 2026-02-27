import{S as o}from"./SandboxLayout-BXB0gG_I.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-RGYZEIFk.js";import"./preload-helper-CPNoDHzN.js";import"./LinkedInProfile-CTOrv1iK.js";import"./ExtensionSidebar-DUdZa9bN.js";const l={title:"LinkedInSandbox/Experiments",component:o,parameters:{layout:"fullscreen",docs:{description:{component:`LinkedInSandbox — playground for extension experiments.
Each story uses SandboxLayout as the base frame.
Click "Scrape Page" to simulate scraping data from the profile page into the sidebar.`}}}},n={args:{}},a=[{id:"1",name:"Rizing HCM",positions:[{id:"1-1",title:"Senior Consultant"},{id:"1-2",title:"Consultant"},{id:"1-3",title:"Associate Consultant"}]},{id:"2",name:"McGill University – Desautels Faculty of Management",positions:[{id:"2-1",title:"Project Assistant"}]},{id:"3",name:"U.S.-Ukraine Foundation",positions:[{id:"3-1",title:"Intern"}]},{id:"4",name:"McGill University",positions:[{id:"4-1",title:"Research Assistant"}]}],t={name:"Experiment 1: Company Selector",args:{companies:a,companySelectorMode:"multi"}},e={name:"Experiment 2: Single Company Creation",args:{companies:a,companySelectorMode:"single"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 1: Company Selector',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'multi'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 2: Single Company Creation',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'single'
  }
}`,...e.parameters?.docs?.source},description:{story:`Experiment 2 — Single Company (Create & Associate)

Situation 2: creation is ON, user picks one company + position,
then hits "Create & Associate" to trigger the creation flow.

Steps:
1. Click "Scrape Page"
2. Select a company with a radio button
3. Pick a position if available
4. Click "Create & Associate"`,...e.parameters?.docs?.description}}};const d=["GraceEzeaghatise","CompanySelectorExperiment","SingleCompanyCreation"];export{t as CompanySelectorExperiment,n as GraceEzeaghatise,e as SingleCompanyCreation,d as __namedExportsOrder,l as default};
