import{S as r}from"./SandboxLayout-ByCE0ARN.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-DyH6j5x7.js";import"./preload-helper-CPNoDHzN.js";import"./LinkedInProfile-Bn0ik3YO.js";import"./ExtensionSidebar-5NBZtBVM.js";const h={title:"LinkedInSandbox/Experiments",component:r,parameters:{layout:"fullscreen",docs:{description:{component:`LinkedInSandbox — playground for extension experiments.
Each story uses SandboxLayout as the base frame.
Click "Scrape Page" to simulate scraping data from the profile page into the sidebar.`}}}},a={args:{}},o=[{id:"1",name:"Rizing HCM",positions:[{id:"1-1",title:"Senior Consultant"},{id:"1-2",title:"Consultant"},{id:"1-3",title:"Associate Consultant"}]},{id:"2",name:"McGill University – Desautels Faculty of Management",positions:[{id:"2-1",title:"Project Assistant"}]},{id:"3",name:"U.S.-Ukraine Foundation",positions:[{id:"3-1",title:"Intern"}]},{id:"4",name:"McGill University",positions:[{id:"4-1",title:"Research Assistant"}]}],i={name:"Experiment 1: Company Selector",args:{companies:o,companySelectorMode:"multi"}},e={name:"Experiment 2: Single Company Creation",args:{companies:o,companySelectorMode:"single"}},n={name:"Experiment 3: Visible Default (Company Chip)",args:{companies:o,companySelectorMode:"chip"}},t={name:"Experiment 4: Experience-Anchored Selection",args:{companies:o,companySelectorMode:"anchored"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 1: Company Selector',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'multi'
  }
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
4. Click "Create & Associate"`,...e.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 3: Visible Default (Company Chip)',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'chip'
  }
}`,...n.parameters?.docs?.source},description:{story:`Experiment 3 — Visible Default (Company Chip)

Problem: users had to open the COMPANY ASSOCIATIONS section and
click around before seeing which company is selected. This felt
like filling out a form and added an extra click.

Proposal: replace the expandable list with a compact, always-visible
"company chip" that shows the default company (first in list) immediately
after scraping — no interaction required. One click opens an inline
switcher to change the selection.

Steps:
1. Click "Scrape Page"
2. Observe the COMPANY ASSOCIATIONS section — default company is shown
   immediately without any click
3. Click the chip to switch to a different company`,...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 4: Experience-Anchored Selection',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'anchored'
  }
}`,...t.parameters?.docs?.source},description:{story:`Experiment 4 — Experience-Anchored Selection

Problem: the side panel is spatially disconnected from the LinkedIn
experience section where the user's mental model is anchored. Users
think about companies while looking at the experience list, but then
have to move their cursor to a separate panel to make a selection.

Proposal: inject a contextual "Select" button directly into each
experience entry on the LinkedIn page. Clicking the button selects
that company and reflects it live in the sidebar — no spatial context
switch required.

Steps:
1. Click "Scrape Page"
2. In the Experience section of the LinkedIn profile, click
   "+ Select" next to a company
3. Watch the COMPANY ASSOCIATIONS section in the sidebar update
   with the selected company`,...t.parameters?.docs?.description}}};const S=["GraceEzeaghatise","CompanySelectorExperiment","SingleCompanyCreation","VisibleDefaultChip","ExperienceAnchored"];export{i as CompanySelectorExperiment,t as ExperienceAnchored,a as GraceEzeaghatise,e as SingleCompanyCreation,n as VisibleDefaultChip,S as __namedExportsOrder,h as default};
