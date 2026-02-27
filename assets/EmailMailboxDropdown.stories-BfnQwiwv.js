import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as x,R as b}from"./iframe-Ib95v5Kk.js";import{r as se}from"./index-B0BeMp66.js";import"./preload-helper-CPNoDHzN.js";import"./index-CpnFsUxG.js";const D=({initial:d,isSelected:i})=>a.jsx("div",{className:`email-mailbox__avatar ${i?"email-mailbox__avatar--selected":""}`,children:d}),M=()=>a.jsx("div",{className:"email-mailbox__avatar email-mailbox__avatar--bad",children:a.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M6 2.5V5.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),a.jsx("circle",{cx:"6",cy:"8.5",r:"1",fill:"currentColor"})]})}),q=({label:d="Email",options:i,selectedId:m,isOpen:t,value:r,showBadEmails:o=!1,onChange:n,onChangeValue:K,onToggleOpen:z,onSetPrimary:C,onAddEmail:G,onSetAction:J,onToggleBadEmails:h,onDomainChange:Q})=>{const[u,v]=x.useState(null),[X,T]=x.useState(!1),[y,P]=x.useState(""),[A,I]=x.useState(null),[c,Y]=x.useState(null),S=x.useRef(null),B=x.useRef({}),Z=i.find(e=>e.id===m)||i[0],F=i.find(e=>e.isPrimary)||Z;x.useEffect(()=>{const e=s=>{const p=s.target;if(S.current&&S.current.contains(p))return;Object.values(B.current).some(U=>U&&U.contains(p))||(v(null),I(null))};if(u)return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[u]);const g=o?i:i.filter(e=>!e.action||e.action===null),f=i.filter(e=>e.action==="bad-email"||e.action==="do-not-use").length,V=e=>{C?.(e),n?.(e)},ee=e=>{e.stopPropagation(),z?.()},$=e=>{C?.(e)},L=(e,s)=>{if(e.stopPropagation(),u===s)v(null),I(null);else{const l=e.currentTarget.getBoundingClientRect();I({top:l.bottom+4,left:l.right-110}),v(s)}},ae=(e,s)=>{e.stopPropagation(),C?.(s),v(null)},R=(e,s,p)=>{e.stopPropagation(),J?.(s,p),v(null)},ie=e=>{e.key==="Enter"&&y.trim()?(G?.(y.trim()),P("")):e.key==="Escape"&&(T(!1),P(""))},W=(e,s)=>{e.stopPropagation(),Y(c===s?null:s)},H=(e,s)=>{Q?.(e,s)};return t?a.jsxs("div",{className:"email-mailbox",children:[a.jsx("label",{className:"email-mailbox__label",children:d}),a.jsxs("div",{className:"email-mailbox__container email-mailbox__container--expanded",children:[a.jsxs("div",{className:"email-mailbox__mailbox-column email-mailbox__mailbox-column--expanded",children:[g.filter(e=>!e.action).map(e=>a.jsxs(b.Fragment,{children:[a.jsx("div",{className:`email-mailbox__mailbox-cell ${e.id===m?"email-mailbox__mailbox-cell--selected":""} ${e.isPrimary?"email-mailbox__mailbox-cell--primary":""} ${c===e.id?"email-mailbox__mailbox-cell--no-separator":""}`,onClick:s=>{e.status==="issue"&&(e.issueType==="missing-domain"||e.issueType==="invalid-domain")?W(s,e.id):$(e.id)},title:e.status==="issue"&&e.issueType==="missing-domain"?"Missing domain - click to add":e.status==="issue"&&e.issueType==="invalid-domain"?"Invalid domain - click to fix":e.isPrimary?"Primary email":"Click to set as primary",style:{cursor:e.status==="issue"&&(e.issueType==="missing-domain"||e.issueType==="invalid-domain")?"pointer":void 0},children:e.status==="issue"&&(e.issueType==="missing-domain"||e.issueType==="invalid-domain")?a.jsx(M,{}):a.jsx(D,{initial:e.initial||e.source.charAt(0).toUpperCase(),isSelected:e.isPrimary||!1})}),c===e.id&&(e.issueType==="missing-domain"||e.issueType==="invalid-domain")&&a.jsx("div",{className:"email-mailbox__mailbox-cell email-mailbox__mailbox-cell--domain-placeholder",children:a.jsxs("div",{className:"email-mailbox__domain-connector",children:[a.jsx("div",{className:"email-mailbox__connector-line"}),a.jsx("div",{className:"email-mailbox__connector-dot"})]})})]},e.id)),a.jsx("div",{className:"email-mailbox__mailbox-cell email-mailbox__mailbox-cell--add",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 3.5V12.5M3.5 8H12.5",stroke:"rgba(255, 255, 255, 0.4)",strokeWidth:"1.5",strokeLinecap:"round"})})}),f>0&&a.jsx(a.Fragment,{children:o?a.jsx("div",{className:"email-mailbox__mailbox-cell email-mailbox__mailbox-cell--divider",onClick:e=>{e.stopPropagation(),h?.()},style:{cursor:"pointer"},title:"Hide excluded emails",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 10L5 7M8 10L11 7",stroke:"rgba(255, 208, 99, 0.7)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",transform:"rotate(180 8 8)"})})}):a.jsx("div",{className:"email-mailbox__mailbox-cell email-mailbox__mailbox-cell--toggle",onClick:e=>{e.stopPropagation(),h?.()},title:"Show bad emails",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 10L5 7M8 10L11 7",stroke:"rgba(255, 255, 255, 0.4)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),o&&g.filter(e=>e.action).length>0&&a.jsx(a.Fragment,{children:g.filter(e=>e.action).map(e=>a.jsxs(b.Fragment,{children:[a.jsx("div",{className:`email-mailbox__mailbox-cell email-mailbox__mailbox-cell--excluded ${e.id===m?"email-mailbox__mailbox-cell--selected":""} ${e.isPrimary?"email-mailbox__mailbox-cell--primary":""} ${c===e.id?"email-mailbox__mailbox-cell--no-separator":""}`,onClick:s=>{e.status==="issue"&&(e.issueType==="missing-domain"||e.issueType==="invalid-domain")?W(s,e.id):$(e.id)},title:e.status==="issue"&&e.issueType==="missing-domain"?"Missing domain - click to add":e.status==="issue"&&e.issueType==="invalid-domain"?"Invalid domain - click to fix":e.isPrimary?"Primary email":"Click to set as primary",style:{cursor:e.status==="issue"&&(e.issueType==="missing-domain"||e.issueType==="invalid-domain")?"pointer":void 0},children:e.status==="issue"&&(e.issueType==="missing-domain"||e.issueType==="invalid-domain")?a.jsx(M,{}):e.action==="bad-email"?a.jsx(M,{}):a.jsx(D,{initial:e.initial||e.source.charAt(0).toUpperCase(),isSelected:e.isPrimary||!1})}),c===e.id&&(e.issueType==="missing-domain"||e.issueType==="invalid-domain")&&a.jsx("div",{className:"email-mailbox__mailbox-cell email-mailbox__mailbox-cell--domain-placeholder",children:a.jsxs("div",{className:"email-mailbox__domain-connector",children:[a.jsx("div",{className:"email-mailbox__connector-line"}),a.jsx("div",{className:"email-mailbox__connector-dot"})]})})]},e.id))})]}),a.jsxs("div",{className:"email-mailbox__content-column",children:[g.filter(e=>!e.action).map((e,s,p)=>a.jsxs(b.Fragment,{children:[a.jsxs("div",{className:`email-mailbox__row ${e.id===m?"email-mailbox__row--selected":""} ${e.isPrimary?"email-mailbox__row--primary":""} ${c!==e.id?"email-mailbox__row--separator":""}`,onClick:()=>V(e.id),children:[a.jsxs("div",{className:"email-mailbox__row-content",children:[a.jsxs("div",{className:"email-mailbox__source",children:[e.source,e.isPrimary&&a.jsx("span",{className:"email-mailbox__primary-badge",children:"Primary"})]}),a.jsx("div",{className:"email-mailbox__email",children:e.email})]}),a.jsx("div",{className:"email-mailbox__row-actions",children:a.jsx("button",{ref:l=>B.current[e.id]=l,className:"email-mailbox__action-button",onClick:l=>L(l,e.id),children:a.jsxs("svg",{width:"3",height:"13",viewBox:"0 0 3 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("circle",{cx:"1.5",cy:"1.5",r:"1.5",fill:"#9CA3AF"}),a.jsx("circle",{cx:"1.5",cy:"6.5",r:"1.5",fill:"#9CA3AF"}),a.jsx("circle",{cx:"1.5",cy:"11.5",r:"1.5",fill:"#9CA3AF"})]})})})]}),c===e.id&&(e.issueType==="missing-domain"||e.issueType==="invalid-domain")&&a.jsx("div",{className:"email-mailbox__domain-expansion",children:a.jsxs("div",{className:"email-mailbox__domain-content",children:[a.jsxs("div",{className:"email-mailbox__domain-label",children:["Domain",a.jsx("span",{className:"email-mailbox__domain-hint",children:"Fill this to fix email"})]}),a.jsx("input",{type:"text",className:"email-mailbox__domain-input",value:e.domainValue||"",onChange:l=>H(e.id,l.target.value),placeholder:"Enter domain",onClick:l=>l.stopPropagation()})]})})]},e.id)),a.jsx("div",{className:"email-mailbox__row email-mailbox__row--add email-mailbox__row--separator",onClick:()=>T(!0),children:X?a.jsx("input",{type:"email",className:"email-mailbox__add-input",value:y,onChange:e=>P(e.target.value),onKeyDown:ie,onBlur:()=>{y.trim()||T(!1)},placeholder:"Enter email address",autoFocus:!0}):a.jsx("div",{className:"email-mailbox__add-label",children:"Add email"})}),f>0&&a.jsx(a.Fragment,{children:o?a.jsx("div",{className:"email-mailbox__section-divider email-mailbox__section-divider--clickable",onClick:e=>{e.stopPropagation(),h?.()},children:a.jsxs("span",{className:"email-mailbox__section-label",children:["Excluded (",f,")"]})}):a.jsx("div",{className:"email-mailbox__row email-mailbox__row--toggle",onClick:e=>{e.stopPropagation(),h?.()},children:a.jsxs("div",{className:"email-mailbox__toggle-label",children:["Show excluded (",f,")"]})})}),o&&g.filter(e=>e.action).length>0&&a.jsx(a.Fragment,{children:g.filter(e=>e.action).map((e,s,p)=>a.jsxs(b.Fragment,{children:[a.jsxs("div",{className:`email-mailbox__row email-mailbox__row--excluded ${e.id===m?"email-mailbox__row--selected":""} ${e.isPrimary?"email-mailbox__row--primary":""} ${e.action?"email-mailbox__row--muted":""} ${c!==e.id&&s<p.length-1?"email-mailbox__row--separator":""}`,onClick:()=>V(e.id),children:[a.jsxs("div",{className:"email-mailbox__row-content",children:[a.jsxs("div",{className:"email-mailbox__source",children:[e.source,e.isPrimary&&a.jsx("span",{className:"email-mailbox__primary-badge",children:"Primary"})]}),a.jsx("div",{className:"email-mailbox__email",children:e.email})]}),a.jsx("div",{className:"email-mailbox__row-actions",children:a.jsx("button",{ref:l=>B.current[e.id]=l,className:"email-mailbox__action-button",onClick:l=>L(l,e.id),children:a.jsxs("svg",{width:"3",height:"13",viewBox:"0 0 3 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("circle",{cx:"1.5",cy:"1.5",r:"1.5",fill:"#9CA3AF"}),a.jsx("circle",{cx:"1.5",cy:"6.5",r:"1.5",fill:"#9CA3AF"}),a.jsx("circle",{cx:"1.5",cy:"11.5",r:"1.5",fill:"#9CA3AF"})]})})})]}),c===e.id&&(e.issueType==="missing-domain"||e.issueType==="invalid-domain")&&a.jsx("div",{className:"email-mailbox__domain-expansion",children:a.jsxs("div",{className:"email-mailbox__domain-content",children:[a.jsxs("div",{className:"email-mailbox__domain-label",children:["Domain",a.jsx("span",{className:"email-mailbox__domain-hint",children:"Fill this to fix email"})]}),a.jsx("input",{type:"text",className:"email-mailbox__domain-input",value:e.domainValue||"",onChange:l=>H(e.id,l.target.value),placeholder:"Enter domain",onClick:l=>l.stopPropagation()})]})})]},e.id))})]})]}),u&&A&&se.createPortal(a.jsx("div",{ref:S,className:"email-mailbox__dropdown-menu",style:{top:`${A.top}px`,left:`${A.left}px`},children:(()=>{const e=g.find(s=>s.id===u);return e?a.jsxs(a.Fragment,{children:[!e.isPrimary&&a.jsx("button",{className:"email-mailbox__menu-item",onClick:s=>ae(s,u),children:"Set as Primary"}),a.jsx("button",{className:"email-mailbox__menu-item",onClick:s=>R(s,u,e.action==="do-not-use"?null:"do-not-use"),children:e.action==="do-not-use"?"Allow use":"Do not use"}),a.jsx("button",{className:`email-mailbox__menu-item ${e.action==="bad-email"?"email-mailbox__menu-item--success":"email-mailbox__menu-item--danger"}`,onClick:s=>R(s,u,e.action==="bad-email"?null:"bad-email"),children:e.action==="bad-email"?"Mark as good":"Bad email"})]}):null})()}),document.body)]}):a.jsxs("div",{className:"email-mailbox",children:[a.jsx("label",{className:"email-mailbox__label",children:d}),a.jsxs("div",{className:"email-mailbox__container email-mailbox__container--collapsed",children:[a.jsx("div",{className:"email-mailbox__mailbox-column email-mailbox__mailbox-column--collapsed",onClick:ee,children:a.jsx(D,{initial:F.initial||F.source.charAt(0).toUpperCase(),isSelected:!0})}),a.jsx("input",{type:"text",className:"email-mailbox__input",value:r,onChange:e=>K?.(e.target.value),placeholder:"Enter email"}),a.jsx("button",{className:"email-mailbox__menu-button",onClick:e=>{e.stopPropagation()},children:a.jsxs("svg",{width:"3",height:"13",viewBox:"0 0 3 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("circle",{cx:"1.5",cy:"1.5",r:"1.5",fill:"#9CA3AF"}),a.jsx("circle",{cx:"1.5",cy:"6.5",r:"1.5",fill:"#9CA3AF"}),a.jsx("circle",{cx:"1.5",cy:"11.5",r:"1.5",fill:"#9CA3AF"})]})})]})]})};q.__docgenInfo={description:"",methods:[],displayName:"EmailMailboxDropdown",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Email'",computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  source: string;
  email: string;
  initial?: string;
  status: EmailStatus;
  isPrimary?: boolean;
  action?: EmailAction;
  issueType?: EmailIssueType;
  domainValue?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"source",value:{name:"string",required:!0}},{key:"email",value:{name:"string",required:!0}},{key:"initial",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'processing' | 'valid' | 'issue'",elements:[{name:"literal",value:"'processing'"},{name:"literal",value:"'valid'"},{name:"literal",value:"'issue'"}],required:!0}},{key:"isPrimary",value:{name:"boolean",required:!1}},{key:"action",value:{name:"union",raw:"'do-not-use' | 'bad-email' | null",elements:[{name:"literal",value:"'do-not-use'"},{name:"literal",value:"'bad-email'"},{name:"null"}],required:!1}},{key:"issueType",value:{name:"union",raw:"'missing-domain' | 'invalid-domain' | 'other' | null",elements:[{name:"literal",value:"'missing-domain'"},{name:"literal",value:"'invalid-domain'"},{name:"literal",value:"'other'"},{name:"null"}],required:!1}},{key:"domainValue",value:{name:"string",required:!1}}]}}],raw:"EmailMailboxOption[]"},description:""},selectedId:{required:!0,tsType:{name:"string"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"string"},description:""},showBadEmails:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onToggleOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSetPrimary:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onAddEmail:{required:!1,tsType:{name:"signature",type:"function",raw:"(email: string) => void",signature:{arguments:[{type:{name:"string"},name:"email"}],return:{name:"void"}}},description:""},onSetAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, action: EmailAction) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"union",raw:"'do-not-use' | 'bad-email' | null",elements:[{name:"literal",value:"'do-not-use'"},{name:"literal",value:"'bad-email'"},{name:"null"}]},name:"action"}],return:{name:"void"}}},description:""},onToggleBadEmails:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDomainChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, domain: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"string"},name:"domain"}],return:{name:"void"}}},description:""}}};const re={title:"Components/EmailMailboxDropdown",component:q,parameters:{layout:"centered",backgrounds:{options:{dark:{name:"dark",value:"#050607"}}}},tags:["autodocs"],globals:{backgrounds:{value:"dark"}}},_=[{id:"linkedin",source:"LinkedIn",email:"groupadmin@mail.com",initial:"L",status:"valid",isPrimary:!0},{id:"domain",source:"Domain",email:"admin@company.com",initial:"D",status:"valid"},{id:"additional",source:"Additional",email:"info@additional.net",initial:"A",status:"processing"},{id:"overflow",source:"Overflow",email:"contact@overflow.io",initial:"O",status:"issue",issueType:"other"},{id:"bad1",source:"Old Email",email:"old@deprecated.com",initial:"O",status:"issue",issueType:"missing-domain",domainValue:"",action:"bad-email"},{id:"bad2",source:"Spam",email:"spam@example.com",initial:"S",status:"valid",action:"do-not-use"}],w={args:{label:"Email",options:_,selectedId:"linkedin",isOpen:!1,value:"groupadmin@mail.com",showBadEmails:!1},render:d=>{const[i,m]=b.useState({selectedId:d.selectedId,isOpen:d.isOpen,value:d.value,showBadEmails:d.showBadEmails,options:d.options});return a.jsx(q,{...d,options:i.options,selectedId:i.selectedId,isOpen:i.isOpen,value:i.value,showBadEmails:i.showBadEmails,onChange:t=>{const r=i.options.map(n=>({...n,isPrimary:n.id===t})),o=r.find(n=>n.id===t);m({...i,options:r,selectedId:t,isOpen:!1,value:o?.email||i.value})},onChangeValue:t=>m({...i,value:t}),onToggleOpen:()=>m({...i,isOpen:!i.isOpen}),onSetPrimary:t=>{const r=i.options.map(n=>({...n,isPrimary:n.id===t})),o=r.find(n=>n.id===t);m({...i,options:r,selectedId:t,value:o?.email||i.value})},onAddEmail:t=>{const o={id:`email-${Date.now()}`,source:"Manual",email:t,initial:"M",status:"valid"};m({...i,options:[...i.options,o]})},onSetAction:(t,r)=>{const o=i.options.map(n=>n.id===t?{...n,action:r}:n);m({...i,options:o})},onToggleBadEmails:()=>{m({...i,showBadEmails:!i.showBadEmails})},onDomainChange:(t,r)=>{const o=i.options.map(n=>n.id===t?{...n,domainValue:r}:n);m({...i,options:o})}})}},j={args:{label:"Email",options:_,selectedId:"linkedin",isOpen:!1,value:"groupadmin@mail.com",showBadEmails:!1}},E={args:{label:"Email",options:_,selectedId:"linkedin",isOpen:!0,value:"groupadmin@mail.com",showBadEmails:!1}},k={args:{label:"Email",options:_,selectedId:"linkedin",isOpen:!0,value:"groupadmin@mail.com",showBadEmails:!0}},O={args:{label:"Email",options:[{id:"valid",source:"Valid Email",email:"valid@example.com",initial:"V",status:"valid",isPrimary:!0},{id:"processing",source:"Processing",email:"processing@example.com",initial:"P",status:"processing"},{id:"issue",source:"Has Issue",email:"issue@example.com",initial:"H",status:"issue"}],selectedId:"valid",isOpen:!0,value:"valid@example.com",showBadEmails:!1}},N={args:{label:"Email",options:_,selectedId:"linkedin",isOpen:!0,value:"groupadmin@mail.com",showBadEmails:!0}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    }} onDomainChange={(id, domain) => {
      const updatedOptions = state.options.map(opt => opt.id === id ? {
        ...opt,
        domainValue: domain
      } : opt);
      setState({
        ...state,
        options: updatedOptions
      });
    }} />;
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: false,
    value: 'groupadmin@mail.com',
    showBadEmails: false
  }
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: true,
    value: 'groupadmin@mail.com',
    showBadEmails: false
  }
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: true,
    value: 'groupadmin@mail.com',
    showBadEmails: true
  }
}`,...k.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    options: defaultOptions,
    selectedId: 'linkedin',
    isOpen: true,
    value: 'groupadmin@mail.com',
    showBadEmails: true
  }
}`,...N.parameters?.docs?.source}}};const de=["Interactive","CollapsedDefault","ExpandedDefault","ExpandedWithBadEmails","DifferentStatuses","WithBadEmails"];export{j as CollapsedDefault,O as DifferentStatuses,E as ExpandedDefault,k as ExpandedWithBadEmails,w as Interactive,N as WithBadEmails,de as __namedExportsOrder,re as default};
