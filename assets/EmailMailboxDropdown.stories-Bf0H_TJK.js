import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as u,R as Q}from"./iframe-D2Ee_frE.js";import{r as X}from"./index-B98rGeEI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyjAFZJx.js";const $=({initial:o,isSelected:i})=>a.jsx("div",{className:`email-mailbox__avatar ${i?"email-mailbox__avatar--selected":""}`,children:o}),Y=()=>a.jsx("div",{className:"email-mailbox__avatar email-mailbox__avatar--bad",children:a.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M6 2.5V5.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),a.jsx("circle",{cx:"6",cy:"8.5",r:"1",fill:"currentColor"})]})}),A=({label:o="Email",options:i,selectedId:r,isOpen:s,value:m,showBadEmails:t=!1,onChange:l,onChangeValue:V,onToggleOpen:L,onSetPrimary:O,onAddEmail:R,onSetAction:F,onToggleBadEmails:P})=>{const[c,p]=u.useState(null),[N,j]=u.useState(!1),[v,k]=u.useState(""),[C,B]=u.useState(null),I=u.useRef(null),M=u.useRef({}),H=i.find(e=>e.id===r)||i[0],q=i.find(e=>e.isPrimary)||H;u.useEffect(()=>{const e=n=>{const d=n.target;if(I.current&&I.current.contains(d))return;Object.values(M.current).some(D=>D&&D.contains(d))||(p(null),B(null))};if(c)return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[c]);const b=t?i:i.filter(e=>!e.action||e.action===null),x=i.filter(e=>e.action==="bad-email"||e.action==="do-not-use").length,W=e=>{O?.(e),l?.(e)},K=e=>{e.stopPropagation(),L?.()},U=e=>{O?.(e)},z=(e,n)=>{if(e.stopPropagation(),c===n)p(null),B(null);else{const S=e.currentTarget.getBoundingClientRect();B({top:S.bottom+4,left:S.right-110}),p(n)}},G=(e,n)=>{e.stopPropagation(),O?.(n),p(null)},T=(e,n,d)=>{e.stopPropagation(),F?.(n,d),p(null)},J=e=>{e.key==="Enter"&&v.trim()?(R?.(v.trim()),k("")):e.key==="Escape"&&(j(!1),k(""))};return s?a.jsxs("div",{className:"email-mailbox",children:[a.jsx("label",{className:"email-mailbox__label",children:o}),a.jsxs("div",{className:"email-mailbox__container email-mailbox__container--expanded",children:[a.jsxs("div",{className:"email-mailbox__mailbox-column email-mailbox__mailbox-column--expanded",children:[b.map(e=>a.jsx("div",{className:`email-mailbox__mailbox-cell ${e.id===r?"email-mailbox__mailbox-cell--selected":""} ${e.isPrimary?"email-mailbox__mailbox-cell--primary":""}`,onClick:()=>U(e.id),title:e.isPrimary?"Primary email":"Click to set as primary",children:e.action==="bad-email"?a.jsx(Y,{}):a.jsx($,{initial:e.initial||e.source.charAt(0).toUpperCase(),isSelected:e.isPrimary||!1})},e.id)),a.jsx("div",{className:"email-mailbox__mailbox-cell email-mailbox__mailbox-cell--add",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 3.5V12.5M3.5 8H12.5",stroke:"rgba(255, 255, 255, 0.4)",strokeWidth:"1.5",strokeLinecap:"round"})})}),x>0&&a.jsx("div",{className:`email-mailbox__mailbox-cell email-mailbox__mailbox-cell--toggle ${t?"email-mailbox__mailbox-cell--toggle-open":""}`,onClick:e=>{e.stopPropagation(),P?.()},title:t?"Hide bad emails":"Show bad emails",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 10L5 7M8 10L11 7",stroke:"rgba(255, 255, 255, 0.4)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),a.jsxs("div",{className:"email-mailbox__content-column",children:[b.map((e,n)=>a.jsxs("div",{className:`email-mailbox__row ${e.id===r?"email-mailbox__row--selected":""} ${e.isPrimary?"email-mailbox__row--primary":""} ${e.action?"email-mailbox__row--muted":""} ${n<b.length-1||N||x>0?"email-mailbox__row--separator":""}`,onClick:()=>W(e.id),children:[a.jsxs("div",{className:"email-mailbox__row-content",children:[a.jsxs("div",{className:"email-mailbox__source",children:[e.source,e.isPrimary&&a.jsx("span",{className:"email-mailbox__primary-badge",children:"Primary"})]}),a.jsx("div",{className:"email-mailbox__email",children:e.email})]}),a.jsx("div",{className:"email-mailbox__row-actions",children:a.jsx("button",{ref:d=>M.current[e.id]=d,className:"email-mailbox__action-button",onClick:d=>z(d,e.id),children:a.jsxs("svg",{width:"3",height:"13",viewBox:"0 0 3 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("circle",{cx:"1.5",cy:"1.5",r:"1.5",fill:"#9CA3AF"}),a.jsx("circle",{cx:"1.5",cy:"6.5",r:"1.5",fill:"#9CA3AF"}),a.jsx("circle",{cx:"1.5",cy:"11.5",r:"1.5",fill:"#9CA3AF"})]})})})]},e.id)),a.jsx("div",{className:`email-mailbox__row email-mailbox__row--add ${x>0?"email-mailbox__row--separator":""}`,onClick:()=>j(!0),children:N?a.jsx("input",{type:"email",className:"email-mailbox__add-input",value:v,onChange:e=>k(e.target.value),onKeyDown:J,onBlur:()=>{v.trim()||j(!1)},placeholder:"Enter email address",autoFocus:!0}):a.jsx("div",{className:"email-mailbox__add-label",children:"Add email"})}),x>0&&a.jsx("div",{className:"email-mailbox__row email-mailbox__row--toggle",onClick:e=>{e.stopPropagation(),P?.()},children:a.jsxs("div",{className:"email-mailbox__toggle-label",children:[t?"Hide":"Show"," excluded (",x,")"]})})]})]}),c&&C&&X.createPortal(a.jsx("div",{ref:I,className:"email-mailbox__dropdown-menu",style:{top:`${C.top}px`,left:`${C.left}px`},children:(()=>{const e=b.find(n=>n.id===c);return e?a.jsxs(a.Fragment,{children:[!e.isPrimary&&a.jsx("button",{className:"email-mailbox__menu-item",onClick:n=>G(n,c),children:"Set as Primary"}),a.jsx("button",{className:"email-mailbox__menu-item",onClick:n=>T(n,c,e.action==="do-not-use"?null:"do-not-use"),children:e.action==="do-not-use"?"Allow use":"Do not use"}),a.jsx("button",{className:`email-mailbox__menu-item ${e.action==="bad-email"?"email-mailbox__menu-item--success":"email-mailbox__menu-item--danger"}`,onClick:n=>T(n,c,e.action==="bad-email"?null:"bad-email"),children:e.action==="bad-email"?"Mark as good":"Bad email"})]}):null})()}),document.body)]}):a.jsxs("div",{className:"email-mailbox",children:[a.jsx("label",{className:"email-mailbox__label",children:o}),a.jsxs("div",{className:"email-mailbox__container email-mailbox__container--collapsed",children:[a.jsx("div",{className:"email-mailbox__mailbox-column email-mailbox__mailbox-column--collapsed",onClick:K,children:a.jsx($,{initial:q.initial||q.source.charAt(0).toUpperCase(),isSelected:!0})}),a.jsx("input",{type:"text",className:"email-mailbox__input",value:m,onChange:e=>V?.(e.target.value),placeholder:"Enter email"}),a.jsx("button",{className:"email-mailbox__menu-button",onClick:e=>{e.stopPropagation()},children:a.jsxs("svg",{width:"3",height:"13",viewBox:"0 0 3 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("circle",{cx:"1.5",cy:"1.5",r:"1.5",fill:"#9CA3AF"}),a.jsx("circle",{cx:"1.5",cy:"6.5",r:"1.5",fill:"#9CA3AF"}),a.jsx("circle",{cx:"1.5",cy:"11.5",r:"1.5",fill:"#9CA3AF"})]})})]})]})};A.__docgenInfo={description:"",methods:[],displayName:"EmailMailboxDropdown",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Email'",computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  source: string;
  email: string;
  initial?: string;
  status: EmailStatus;
  isPrimary?: boolean;
  action?: EmailAction;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"source",value:{name:"string",required:!0}},{key:"email",value:{name:"string",required:!0}},{key:"initial",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'processing' | 'valid' | 'issue'",elements:[{name:"literal",value:"'processing'"},{name:"literal",value:"'valid'"},{name:"literal",value:"'issue'"}],required:!0}},{key:"isPrimary",value:{name:"boolean",required:!1}},{key:"action",value:{name:"union",raw:"'do-not-use' | 'bad-email' | null",elements:[{name:"literal",value:"'do-not-use'"},{name:"literal",value:"'bad-email'"},{name:"null"}],required:!1}}]}}],raw:"EmailMailboxOption[]"},description:""},selectedId:{required:!0,tsType:{name:"string"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"string"},description:""},showBadEmails:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onToggleOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSetPrimary:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onAddEmail:{required:!1,tsType:{name:"signature",type:"function",raw:"(email: string) => void",signature:{arguments:[{type:{name:"string"},name:"email"}],return:{name:"void"}}},description:""},onSetAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, action: EmailAction) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"union",raw:"'do-not-use' | 'bad-email' | null",elements:[{name:"literal",value:"'do-not-use'"},{name:"literal",value:"'bad-email'"},{name:"null"}]},name:"action"}],return:{name:"void"}}},description:""},onToggleBadEmails:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const se={title:"Components/EmailMailboxDropdown",component:A,parameters:{layout:"centered",backgrounds:{options:{dark:{name:"dark",value:"#050607"}}}},tags:["autodocs"],globals:{backgrounds:{value:"dark"}}},g=[{id:"linkedin",source:"LinkedIn",email:"groupadmin@mail.com",initial:"L",status:"valid",isPrimary:!0},{id:"domain",source:"Domain",email:"admin@company.com",initial:"D",status:"valid"},{id:"additional",source:"Additional",email:"info@additional.net",initial:"A",status:"processing"},{id:"overflow",source:"Overflow",email:"contact@overflow.io",initial:"O",status:"issue"},{id:"bad1",source:"Old Email",email:"old@deprecated.com",initial:"O",status:"valid",action:"bad-email"},{id:"bad2",source:"Spam",email:"spam@example.com",initial:"S",status:"valid",action:"do-not-use"}],h={args:{label:"Email",options:g,selectedId:"linkedin",isOpen:!1,value:"groupadmin@mail.com",showBadEmails:!1},render:o=>{const[i,r]=Q.useState({selectedId:o.selectedId,isOpen:o.isOpen,value:o.value,showBadEmails:o.showBadEmails,options:o.options});return a.jsx(A,{...o,options:i.options,selectedId:i.selectedId,isOpen:i.isOpen,value:i.value,showBadEmails:i.showBadEmails,onChange:s=>{const m=i.options.map(l=>({...l,isPrimary:l.id===s})),t=m.find(l=>l.id===s);r({...i,options:m,selectedId:s,isOpen:!1,value:t?.email||i.value})},onChangeValue:s=>r({...i,value:s}),onToggleOpen:()=>r({...i,isOpen:!i.isOpen}),onSetPrimary:s=>{const m=i.options.map(l=>({...l,isPrimary:l.id===s})),t=m.find(l=>l.id===s);r({...i,options:m,selectedId:s,value:t?.email||i.value})},onAddEmail:s=>{const t={id:`email-${Date.now()}`,source:"Manual",email:s,initial:"M",status:"valid"};r({...i,options:[...i.options,t]})},onSetAction:(s,m)=>{const t=i.options.map(l=>l.id===s?{...l,action:m}:l);r({...i,options:t})},onToggleBadEmails:()=>{r({...i,showBadEmails:!i.showBadEmails})}})}},f={args:{label:"Email",options:g,selectedId:"linkedin",isOpen:!1,value:"groupadmin@mail.com",showBadEmails:!1}},_={args:{label:"Email",options:g,selectedId:"linkedin",isOpen:!0,value:"groupadmin@mail.com",showBadEmails:!1}},w={args:{label:"Email",options:g,selectedId:"linkedin",isOpen:!0,value:"groupadmin@mail.com",showBadEmails:!0}},y={args:{label:"Email",options:[{id:"valid",source:"Valid Email",email:"valid@example.com",initial:"V",status:"valid",isPrimary:!0},{id:"processing",source:"Processing",email:"processing@example.com",initial:"P",status:"processing"},{id:"issue",source:"Has Issue",email:"issue@example.com",initial:"H",status:"issue"}],selectedId:"valid",isOpen:!0,value:"valid@example.com",showBadEmails:!1}},E={args:{label:"Email",options:g,selectedId:"linkedin",isOpen:!0,value:"groupadmin@mail.com",showBadEmails:!0}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: false,
    value: 'groupadmin@mail.com',
    showBadEmails: false
  },
  render: args => {
    const [state, setState] = React.useState({
      selectedId: args.selectedId,
      isOpen: args.isOpen,
      value: args.value,
      showBadEmails: args.showBadEmails,
      options: args.options
    });
    return <EmailMailboxDropdown {...args} options={state.options} selectedId={state.selectedId} isOpen={state.isOpen} value={state.value} showBadEmails={state.showBadEmails} onChange={id => {
      const updatedOptions = state.options.map(opt => ({
        ...opt,
        isPrimary: opt.id === id
      }));
      const option = updatedOptions.find(opt => opt.id === id);
      setState({
        ...state,
        options: updatedOptions,
        selectedId: id,
        isOpen: false,
        value: option?.email || state.value
      });
    }} onChangeValue={value => setState({
      ...state,
      value
    })} onToggleOpen={() => setState({
      ...state,
      isOpen: !state.isOpen
    })} onSetPrimary={id => {
      const updatedOptions = state.options.map(opt => ({
        ...opt,
        isPrimary: opt.id === id
      }));
      const primaryOption = updatedOptions.find(opt => opt.id === id);
      setState({
        ...state,
        options: updatedOptions,
        selectedId: id,
        value: primaryOption?.email || state.value
      });
    }} onAddEmail={email => {
      const newId = \`email-\${Date.now()}\`;
      const newOption: EmailMailboxOption = {
        id: newId,
        source: 'Manual',
        email,
        initial: 'M',
        status: 'valid'
      };
      setState({
        ...state,
        options: [...state.options, newOption]
      });
    }} onSetAction={(id, action) => {
      const updatedOptions = state.options.map(opt => opt.id === id ? {
        ...opt,
        action
      } : opt);
      setState({
        ...state,
        options: updatedOptions
      });
    }} onToggleBadEmails={() => {
      setState({
        ...state,
        showBadEmails: !state.showBadEmails
      });
    }} />;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: false,
    value: 'groupadmin@mail.com',
    showBadEmails: false
  }
}`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: true,
    value: 'groupadmin@mail.com',
    showBadEmails: false
  }
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: true,
    value: 'groupadmin@mail.com',
    showBadEmails: true
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    options: [{
      id: 'valid',
      source: 'Valid Email',
      email: 'valid@example.com',
      initial: 'V',
      status: 'valid' as const,
      isPrimary: true
    }, {
      id: 'processing',
      source: 'Processing',
      email: 'processing@example.com',
      initial: 'P',
      status: 'processing' as const
    }, {
      id: 'issue',
      source: 'Has Issue',
      email: 'issue@example.com',
      initial: 'H',
      status: 'issue' as const
    }],
    selectedId: 'valid',
    isOpen: true,
    value: 'valid@example.com',
    showBadEmails: false
  }
}`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: true,
    value: 'groupadmin@mail.com',
    showBadEmails: true
  }
}`,...E.parameters?.docs?.source}}};const le=["Interactive","CollapsedDefault","ExpandedDefault","ExpandedWithBadEmails","DifferentStatuses","WithBadEmails"];export{f as CollapsedDefault,y as DifferentStatuses,_ as ExpandedDefault,w as ExpandedWithBadEmails,h as Interactive,E as WithBadEmails,le as __namedExportsOrder,se as default};
