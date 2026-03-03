import{S as p}from"./SandboxLayout-BypPVirs.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-DQOdDxRp.js";import"./preload-helper-CPNoDHzN.js";import"./LinkedInProfile-BmzjHL7O.js";import"./ExtensionSidebar-DB2CzY-9.js";const C={title:"LinkedInSandbox/Experiments",component:p,parameters:{layout:"fullscreen",docs:{description:{component:`LinkedInSandbox — playground for extension experiments.
Each story uses SandboxLayout as the base frame.
Click "Scrape Page" to simulate scraping data from the profile page into the sidebar.`}}}},s={name:"Experiment 0: Default",args:{}},e=[{id:"1",name:"Rizing HCM",positions:[{id:"1-1",title:"Senior Consultant"},{id:"1-2",title:"Consultant"},{id:"1-3",title:"Associate Consultant"}]},{id:"2",name:"McGill University – Desautels Faculty of Management",positions:[{id:"2-1",title:"Project Assistant"}]},{id:"3",name:"U.S.-Ukraine Foundation",positions:[{id:"3-1",title:"Intern"}]},{id:"4",name:"McGill University",positions:[{id:"4-1",title:"Research Assistant"}]}],c={name:"Experiment 1: Company Selector",args:{companies:e,companySelectorMode:"multi"}},n={name:"Experiment 2: Single Company Creation",args:{companies:e,companySelectorMode:"single"}},o={name:"Experiment 3: Visible Default (Company Chip)",args:{companies:e,companySelectorMode:"chip"}},a={name:"Experiment 4: Experience-Anchored Selection",args:{companies:e,companySelectorMode:"anchored"}},t={name:"Experiment 5: Inline Timeline Selector",args:{companies:e,companySelectorMode:"inline"}},i={name:"Experiment 6: Standard Cards",args:{companies:e,companySelectorMode:"standard"}},r={name:"Experiment 7: Position Dropdown Cards",args:{companies:e,companySelectorMode:"dropdown"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 0: Default',
  args: {}
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 1: Company Selector',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'multi'
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 2: Single Company Creation',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'single'
  }
}`,...n.parameters?.docs?.source},description:{story:`Experiment 2 — Single Company (Create & Associate)

Situation 2: creation is ON, user picks one company + position,
then hits "Create & Associate" to trigger the creation flow.

Steps:
1. Click "Scrape Page"
2. Select a company with a radio button
3. Pick a position if available
4. Click "Create & Associate"`,...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 3: Visible Default (Company Chip)',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'chip'
  }
}`,...o.parameters?.docs?.source},description:{story:`Experiment 3 — Visible Default (Company Chip)

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
3. Click the chip to switch to a different company`,...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 4: Experience-Anchored Selection',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'anchored'
  }
}`,...a.parameters?.docs?.source},description:{story:`Experiment 4 — Experience-Anchored Selection

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
   with the selected company`,...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 5: Inline Timeline Selector',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'inline'
  }
}`,...t.parameters?.docs?.source},description:{story:`Experiment 5: Inline Timeline Selector — Collapsible chip always shows the active
company and role. Tapping expands a LinkedIn-style timeline list where companies
and positions are visible at a glance; one tap switches selection. No DOM injection,
no context switch, no empty state.

Steps:
1. Click "Scrape Page"
2. Observe COMPANY ASSOCIATIONS — default company + position already selected in chip
3. Click the chip to expand the timeline list
4. Click any company to switch selection
5. Tick a different position checkbox within the selected company`,...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 6: Standard Cards',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'standard'
  }
}`,...i.parameters?.docs?.source},description:{story:`Experiment 6: Standard Cards — Company associations displayed as standard
fixed-height field rows (same UI kit as Contact Properties). Company logo
(initials) replaces the shield icon. Clicking a row opens company properties.
Job title visible in the value area.`,...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Experiment 7: Position Dropdown Cards',
  args: {
    companies: GRACE_COMPANIES,
    companySelectorMode: 'dropdown'
  }
}`,...r.parameters?.docs?.source},description:{story:`Experiment 7: Position Dropdown Cards — One standard card per company under
COMPANY ASSOCIATIONS. Clicking the logo on a multi-position company opens an
inline dropdown to pick the active position. Single-position companies are
selected directly on logo click. The active company is highlighted with a
teal logo gradient and a primary dot next to the position name.

Steps:
1. Click "Scrape Page"
2. Observe one card per company — first company is primary (teal logo)
3. Click the logo of a multi-position company to open the position picker
4. Pick a position — that company becomes primary
5. Click the logo of a single-position company — it becomes primary instantly`,...r.parameters?.docs?.description}}};const u=["GraceEzeaghatise","CompanySelectorExperiment","SingleCompanyCreation","VisibleDefaultChip","ExperienceAnchored","InlineFlatList","StandardCards","PositionDropdownCards"];export{c as CompanySelectorExperiment,a as ExperienceAnchored,s as GraceEzeaghatise,t as InlineFlatList,r as PositionDropdownCards,n as SingleCompanyCreation,i as StandardCards,o as VisibleDefaultChip,u as __namedExportsOrder,C as default};
