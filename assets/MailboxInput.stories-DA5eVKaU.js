import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as s}from"./iframe-D2Ee_frE.js";import"./preload-helper-PPVm8Dsz.js";const f=({label:i,value:g,options:a,activeOptionId:r,isExpanded:o=!1,width:t=250,onChangeValue:O,onChangeActiveOption:k,onToggleExpand:j,onPrevOption:M,onNextOption:N,onMenuClick:I})=>{const d=s.useRef(null),[_,w]=s.useState(!1),[C,S]=s.useState(!1),b=()=>{const n=d.current;n&&(w(n.scrollLeft>0),S(n.scrollLeft<n.scrollWidth-n.clientWidth-1))};s.useEffect(()=>{b();const n=d.current;if(n)return n.addEventListener("scroll",b),()=>n.removeEventListener("scroll",b)},[a,o]);const h=n=>{const y=d.current;if(!y)return;const E=200;y.scrollBy({left:n==="left"?-E:E,behavior:"smooth"})};return e.jsxs("div",{className:"mailbox-input",style:{width:t==="responsive"?"100%":`${t}px`,maxWidth:t==="responsive"?"500px":void 0},children:[e.jsx("label",{className:"mailbox-input__label",children:i}),e.jsxs("div",{className:"mailbox-input__card",children:[e.jsxs("div",{className:"mailbox-input__main-row",children:[e.jsxs("button",{className:`mailbox-input__icon-button${o?" mailbox-input__icon-button--expanded":""}`,onClick:j,"aria-label":"Toggle mailbox options",children:[e.jsxs("svg",{className:"mailbox-input__icon",viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("circle",{cx:"4",cy:"4",r:"2"}),e.jsx("circle",{cx:"12",cy:"4",r:"2"}),e.jsx("circle",{cx:"20",cy:"4",r:"2"}),e.jsx("circle",{cx:"4",cy:"12",r:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"2"}),e.jsx("circle",{cx:"20",cy:"12",r:"2"}),e.jsx("circle",{cx:"4",cy:"20",r:"2"}),e.jsx("circle",{cx:"12",cy:"20",r:"2"}),e.jsx("circle",{cx:"20",cy:"20",r:"2"})]}),!o&&e.jsx("span",{className:"mailbox-input__badge",children:a.length})]}),e.jsx("input",{type:"text",className:"mailbox-input__field",value:g,onChange:n=>O?.(n.target.value),placeholder:"Enter value..."}),e.jsx("button",{className:"mailbox-input__menu-button",onClick:I,"aria-label":"Open menu",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("circle",{cx:"12",cy:"5",r:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"2"}),e.jsx("circle",{cx:"12",cy:"19",r:"2"})]})})]}),o&&e.jsxs("div",{className:"mailbox-input__mailbox-row",children:[e.jsx("button",{className:"mailbox-input__arrow-button",onClick:()=>h("left"),disabled:!_,"aria-label":"Scroll left",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"M15 18l-6-6 6-6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("div",{ref:d,className:"mailbox-input__options",children:a.map(n=>e.jsx("button",{className:`mailbox-input__pill ${n.id===r?"mailbox-input__pill--active":""}`,onClick:()=>k?.(n.id),children:n.label},n.id))}),e.jsx("button",{className:"mailbox-input__arrow-button",onClick:()=>h("right"),disabled:!C,"aria-label":"Scroll right",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"M9 18l6-6-6-6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"MailboxInput",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"MailboxOption[]"},description:""},activeOptionId:{required:!1,tsType:{name:"string"},description:""},isExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | 'responsive'",elements:[{name:"number"},{name:"literal",value:"'responsive'"}]},description:"",defaultValue:{value:"250",computed:!1}},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChangeActiveOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onToggleExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrevOption:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextOption:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const L={title:"Components/MailboxInput",component:f,parameters:{layout:"centered",backgrounds:{options:{dark:{name:"dark",value:"#050607"}}}},tags:["autodocs"],argTypes:{width:{control:{type:"text"},description:'Width of the component. Enter a number (pixels) or "responsive" for full width',table:{type:{summary:'number | "responsive"'},defaultValue:{summary:"250"}}}},globals:{backgrounds:{value:"dark"}}},l=[{id:"linkedin",label:"LinkedIn"},{id:"domain",label:"Domain"},{id:"overflow",label:"Overflow"},{id:"additional",label:"Additional"},{id:"another",label:"Another"},{id:"custom",label:"Custom"},{id:"extra",label:"Extra"}],c={args:{label:"Email",value:"groupadmin@mail.com",options:l,activeOptionId:"linkedin",isExpanded:!1},render:i=>{const g={linkedin:"groupadmin@mail.com",domain:"admin@company.com",overflow:"contact@overflow.io",additional:"info@additional.net",another:"hello@another.org",custom:"custom@email.com",extra:"extra@service.com"},[a,r]=s.useState({value:i.value,activeOptionId:i.activeOptionId,isExpanded:i.isExpanded}),o=t=>{r({...a,activeOptionId:t,value:g[t]||a.value})};return e.jsx(f,{...i,value:a.value,activeOptionId:a.activeOptionId,isExpanded:a.isExpanded,onChangeValue:t=>r({...a,value:t}),onChangeActiveOption:o,onToggleExpand:()=>r({...a,isExpanded:!a.isExpanded}),onMenuClick:()=>alert("Menu clicked!")})}},u={args:{label:"Email",value:"groupadmin@mail.com",options:l,activeOptionId:"linkedin",isExpanded:!1}},p={args:{label:"Email",value:"groupadmin@mail.com",options:l,activeOptionId:"linkedin",isExpanded:!0}},m={args:{label:"Email",value:"groupadmin@mail.com",options:l,activeOptionId:"linkedin",isExpanded:!0},parameters:{docs:{description:{story:'Hover over the "Domain" option to see the hover state.'}}}},v={args:{label:"Email",value:"admin@company.com",options:l,activeOptionId:"domain",isExpanded:!0}},x={args:{label:"Email",value:"hello@another.org",options:[{id:"overflow",label:"Overflow"},{id:"additional",label:"Additional"},{id:"another",label:"Another"}],activeOptionId:"another",isExpanded:!0},parameters:{docs:{description:{story:"At the end of the list - right arrow is disabled."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    value: 'groupadmin@mail.com',
    options: defaultOptions,
    activeOptionId: 'linkedin',
    isExpanded: false
  },
  render: args => {
    const optionValues = {
      linkedin: 'groupadmin@mail.com',
      domain: 'admin@company.com',
      overflow: 'contact@overflow.io',
      additional: 'info@additional.net',
      another: 'hello@another.org',
      custom: 'custom@email.com',
      extra: 'extra@service.com'
    };
    const [state, setState] = React.useState({
      value: args.value,
      activeOptionId: args.activeOptionId,
      isExpanded: args.isExpanded
    });
    const handleOptionChange = id => {
      setState({
        ...state,
        activeOptionId: id,
        value: optionValues[id] || state.value
      });
    };
    return <MailboxInput {...args} value={state.value} activeOptionId={state.activeOptionId} isExpanded={state.isExpanded} onChangeValue={value => setState({
      ...state,
      value
    })} onChangeActiveOption={handleOptionChange} onToggleExpand={() => setState({
      ...state,
      isExpanded: !state.isExpanded
    })} onMenuClick={() => alert('Menu clicked!')} />;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    value: 'groupadmin@mail.com',
    options: defaultOptions,
    activeOptionId: 'linkedin',
    isExpanded: false
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    value: 'groupadmin@mail.com',
    options: defaultOptions,
    activeOptionId: 'linkedin',
    isExpanded: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    value: 'groupadmin@mail.com',
    options: defaultOptions,
    activeOptionId: 'linkedin',
    isExpanded: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over the "Domain" option to see the hover state.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    value: 'admin@company.com',
    options: defaultOptions,
    activeOptionId: 'domain',
    isExpanded: true
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    value: 'hello@another.org',
    options: [{
      id: 'overflow',
      label: 'Overflow'
    }, {
      id: 'additional',
      label: 'Additional'
    }, {
      id: 'another',
      label: 'Another'
    }],
    activeOptionId: 'another',
    isExpanded: true
  },
  parameters: {
    docs: {
      description: {
        story: 'At the end of the list - right arrow is disabled.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const V=["Interactive","DefaultCollapsed","MailboxActiveExpanded","MailboxItemHover","SecondItemSelected","EndOfList"];export{u as DefaultCollapsed,x as EndOfList,c as Interactive,p as MailboxActiveExpanded,m as MailboxItemHover,v as SecondItemSelected,V as __namedExportsOrder,L as default};
