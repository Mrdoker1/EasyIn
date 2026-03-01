import{E as t}from"./ExtensionSidebar-C4mN2ZRo.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-kisIfyWl.js";import"./preload-helper-CPNoDHzN.js";const d={title:"Extension/ExtensionSidebar",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isLoading:{control:"boolean",description:"Show loading spinner while fetching data from page"}}},e={args:{isLoading:!1,profileData:{firstName:"Grace",lastName:"Ezeaghatise",headline:"Senior Consultant at Rizing HCM · a Wipro company",jobTitle:"Senior Consultant",company:"Rizing HCM",location:"New York, New York, United States",email:"",school:"McGill University",linkedinUrl:"https://linkedin.com/in/grace-ezeaghatise"},onUpdate:a=>console.log("Update contact:",a)}},o={args:{isLoading:!0,profileData:void 0,onUpdate:a=>console.log("Update contact:",a)}},n={args:{isLoading:!1,profileData:{},onUpdate:a=>console.log("Update contact:",a)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    profileData: {
      firstName: 'Grace',
      lastName: 'Ezeaghatise',
      headline: 'Senior Consultant at Rizing HCM · a Wipro company',
      jobTitle: 'Senior Consultant',
      company: 'Rizing HCM',
      location: 'New York, New York, United States',
      email: '',
      school: 'McGill University',
      linkedinUrl: 'https://linkedin.com/in/grace-ezeaghatise'
    },
    onUpdate: data => console.log('Update contact:', data)
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    profileData: undefined,
    onUpdate: data => console.log('Update contact:', data)
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    profileData: {},
    onUpdate: data => console.log('Update contact:', data)
  }
}`,...n.parameters?.docs?.source}}};const l=["WithLinkedInData","Loading","Empty"];export{n as Empty,o as Loading,e as WithLinkedInData,l as __namedExportsOrder,d as default};
