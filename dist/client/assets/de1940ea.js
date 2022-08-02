import{r as i,R as m,d as dt,a as L,j as p}from"./index.6189f3cc.js";import"./6de4b88c.js";import"./951108c3.js";import"./39240f87.js";import"./d918c967.js";import"./247fa190.js";import"./0963bb9b.js";import"./d9f18c74.js";import"./11e343ea.js";import"./74769fe0.js";import{m as ve,f as ft}from"./40447271.js";/* empty css        */let A=typeof window!="undefined"?i.exports.useLayoutEffect:i.exports.useEffect;function j(e){let t=i.exports.useRef(e);return A(()=>{t.current=e},[e]),t}function se(){let e=[],t=[],r={enqueue(n){t.push(n)},addEventListener(n,o,a,l){return n.addEventListener(o,a,l),r.add(()=>n.removeEventListener(o,a,l))},requestAnimationFrame(...n){let o=requestAnimationFrame(...n);return r.add(()=>cancelAnimationFrame(o))},nextFrame(...n){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...n))},setTimeout(...n){let o=setTimeout(...n);return r.add(()=>clearTimeout(o))},add(n){return e.push(n),()=>{let o=e.indexOf(n);if(o>=0){let[a]=e.splice(o,1);a()}}},dispose(){for(let n of e.splice(0))n()},async workQueue(){for(let n of t.splice(0))await n()}};return r}function pt(){let[e]=i.exports.useState(se);return i.exports.useEffect(()=>()=>e.dispose(),[e]),e}let C=function(e){let t=j(e);return m.useCallback((...r)=>t.current(...r),[t])},ge={serverHandoffComplete:!1};function Y(){let[e,t]=i.exports.useState(ge.serverHandoffComplete);return i.exports.useEffect(()=>{e!==!0&&t(!0)},[e]),i.exports.useEffect(()=>{ge.serverHandoffComplete===!1&&(ge.serverHandoffComplete=!0)},[]),e}var Ie;let mt=0;function Be(){return++mt}let V=(Ie=m.useId)!=null?Ie:function(){let e=Y(),[t,r]=m.useState(e?Be:null);return A(()=>{t===null&&r(Be())},[t]),t!=null?""+t:void 0};function w(e,t,...r){if(e in t){let o=t[e];return typeof o=="function"?o(...r):o}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,w),n}function ue(e){return typeof window=="undefined"?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ye=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var oe=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(oe||{}),_e=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(_e||{}),ht=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ht||{});function vt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ye))}var Ze=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ze||{});function gt(e,t=0){var r;return e===((r=ue(e))==null?void 0:r.body)?!1:w(t,{[0](){return e.matches(ye)},[1](){let n=e;for(;n!==null;){if(n.matches(ye))return!0;n=n.parentElement}return!1}})}function G(e){e==null||e.focus({preventScroll:!0})}let xt=["textarea","input"].join(",");function wt(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,xt))!=null?r:!1}function Et(e,t=r=>r){return e.slice().sort((r,n)=>{let o=t(r),a=t(n);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ce(e,t,r=!0){let n=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?r?Et(e):e:vt(e),a=n.activeElement,l=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(a))-1;if(t&4)return Math.max(0,o.indexOf(a))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},u=0,d=o.length,f;do{if(u>=d||u+d<=0)return 0;let x=s+u;if(t&16)x=(x+d)%d;else{if(x<0)return 3;if(x>=d)return 1}f=o[x],f==null||f.focus(c),u+=l}while(f!==n.activeElement);return t&6&&wt(f)&&f.select(),f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),2}function Te(e,t,r){let n=j(t);i.exports.useEffect(()=>{function o(a){n.current(a)}return window.addEventListener(e,o,r),()=>window.removeEventListener(e,o,r)},[e,r])}function bt(e,t,r=!0){let n=i.exports.useRef(!1);i.exports.useEffect(()=>{requestAnimationFrame(()=>{n.current=r})},[r]);function o(a,l){if(!n.current||a.defaultPrevented)return;let s=function u(d){return typeof d=="function"?u(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e),c=l(a);if(c!==null&&!!c.ownerDocument.documentElement.contains(c)){for(let u of s){if(u===null)continue;let d=u instanceof HTMLElement?u:u.current;if(d!=null&&d.contains(c))return}return!gt(c,Ze.Loose)&&c.tabIndex!==-1&&a.preventDefault(),t(a,c)}}Te("click",a=>o(a,l=>l.target),!0),Te("blur",a=>o(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let Ge=Symbol();function yt(e,t=!0){return Object.assign(e,{[Ge]:t})}function S(...e){let t=i.exports.useRef(e);i.exports.useEffect(()=>{t.current=e},[e]);let r=C(n=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(n):o.current=n)});return e.every(n=>n==null||(n==null?void 0:n[Ge]))?void 0:r}var ie=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ie||{}),D=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(D||{});function k({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:o,visible:a=!0,name:l}){let s=Ye(t,e);if(a)return re(s,r,n,l);let c=o!=null?o:0;if(c&2){let{static:u=!1,...d}=s;if(u)return re(d,r,n,l)}if(c&1){let{unmount:u=!0,...d}=s;return w(u?0:1,{[0](){return null},[1](){return re({...d,hidden:!0,style:{display:"none"}},r,n,l)}})}return re(s,r,n,l)}function re(e,t={},r,n){let{as:o=r,children:a,refName:l="ref",...s}=xe(e,["unmount","static"]),c=e.ref!==void 0?{[l]:e.ref}:{},u=typeof a=="function"?a(t):a;s.className&&typeof s.className=="function"&&(s.className=s.className(t));let d={};if(o===i.exports.Fragment&&Object.keys(We(s)).length>0){if(!i.exports.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return i.exports.cloneElement(u,Object.assign({},Ye(u.props,We(xe(s,["ref"]))),d,c))}return i.exports.createElement(o,Object.assign({},xe(s,["ref"]),o!==i.exports.Fragment&&c,o!==i.exports.Fragment&&d),u)}function Ye(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let o in n)o.startsWith("on")&&typeof n[o]=="function"?(r[o]!=null||(r[o]=[]),r[o].push(n[o])):t[o]=n[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](o,...a){let l=r[n];for(let s of l){if(o.defaultPrevented)return;s(o,...a)}}});return t}function $(e){var t;return Object.assign(i.exports.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function We(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function xe(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}function Ct(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let n=(t==null?void 0:t.getAttribute("disabled"))==="";return n&&Tt(r)?!1:n}function Tt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let $t="div";var le=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(le||{});let $e=$(function(e,t){let{features:r=1,...n}=e,o={ref:t,"aria-hidden":(r&2)===2?!0:void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return k({ourProps:o,theirProps:n,slot:{},defaultTag:$t,name:"Hidden"})}),De=i.exports.createContext(null);De.displayName="OpenClosedContext";var U=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(U||{});function Ae(){return i.exports.useContext(De)}function Ft({value:e,children:t}){return m.createElement(De.Provider,{value:e},t)}var ze=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ze||{}),Fe=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Fe||{});function kt(){let e=i.exports.useRef(0);return Te("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Oe(){let e=i.exports.useRef(!1);return A(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ce(...e){return i.exports.useMemo(()=>ue(...e),[...e])}function Ne(e,t,r,n){let o=j(r);i.exports.useEffect(()=>{e=e!=null?e:window;function a(l){o.current(l)}return e.addEventListener(t,a,n),()=>e.removeEventListener(t,a,n)},[e,t,n])}function Me(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function Qe(e,t){let r=i.exports.useRef([]),n=C(e);i.exports.useEffect(()=>{for(let[o,a]of t.entries())if(r.current[o]!==a){let l=n(t);return r.current=t,l}},[n,...t])}let Pt="div";var Xe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Xe||{});let J=Object.assign($(function(e,t){let r=i.exports.useRef(null),n=S(r,t),{initialFocus:o,containers:a,features:l=30,...s}=e;Y()||(l=1);let c=ce(r);Lt({ownerDocument:c},Boolean(l&16));let u=St({ownerDocument:c,container:r,initialFocus:o},Boolean(l&2));Rt({ownerDocument:c,container:r,containers:a,previousActiveElement:u},Boolean(l&8));let d=kt(),f=C(()=>{let T=r.current;!T||w(d.current,{[Fe.Forwards]:()=>Ce(T,oe.First),[Fe.Backwards]:()=>Ce(T,oe.Last)})}),x={ref:n};return m.createElement(m.Fragment,null,Boolean(l&4)&&m.createElement($e,{as:"button",type:"button",onFocus:f,features:le.Focusable}),k({ourProps:x,theirProps:s,defaultTag:Pt,name:"FocusTrap"}),Boolean(l&4)&&m.createElement($e,{as:"button",type:"button",onFocus:f,features:le.Focusable}))}),{features:Xe});function Lt({ownerDocument:e},t){let r=i.exports.useRef(null);Ne(e==null?void 0:e.defaultView,"focusout",o=>{!t||r.current||(r.current=o.target)},!0),Qe(()=>{t||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&G(r.current),r.current=null)},[t]);let n=i.exports.useRef(!1);i.exports.useEffect(()=>(n.current=!1,()=>{n.current=!0,Me(()=>{!n.current||(G(r.current),r.current=null)})}),[])}function St({ownerDocument:e,container:t,initialFocus:r},n){let o=i.exports.useRef(null);return Qe(()=>{if(!n)return;let a=t.current;if(!a)return;let l=e==null?void 0:e.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===l){o.current=l;return}}else if(a.contains(l)){o.current=l;return}r!=null&&r.current?G(r.current):Ce(a,oe.First)===_e.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement},[n]),o}function Rt({ownerDocument:e,container:t,containers:r,previousActiveElement:n},o){let a=Oe();Ne(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!a.current)return;let s=new Set(r==null?void 0:r.current);s.add(t);let c=n.current;if(!c)return;let u=l.target;u&&u instanceof HTMLElement?Dt(s,u)?(n.current=u,G(u)):(l.preventDefault(),l.stopPropagation(),G(c)):G(n.current)},!0)}function Dt(e,t){var r;for(let n of e)if((r=n.current)!=null&&r.contains(t))return!0;return!1}let Z=new Set,H=new Map;function Ue(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function Ve(e){let t=H.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function At(e,t=!0){A(()=>{if(!t||!e.current)return;let r=e.current,n=ue(r);if(n){Z.add(r);for(let o of H.keys())o.contains(r)&&(Ve(o),H.delete(o));return n.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let a of Z)if(o.contains(a))return;Z.size===1&&(H.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),Ue(o))}}),()=>{if(Z.delete(r),Z.size>0)n.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!H.has(o)){for(let a of Z)if(o.contains(a))return;H.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),Ue(o)}});else for(let o of H.keys())Ve(o),H.delete(o)}}},[t])}let Je=i.exports.createContext(!1);function Ot(){return i.exports.useContext(Je)}function ke(e){return m.createElement(Je.Provider,{value:e.force},e.children)}function Nt(e){let t=Ot(),r=i.exports.useContext(Ke),n=ce(e),[o,a]=i.exports.useState(()=>{if(!t&&r!==null||typeof window=="undefined")return null;let l=n==null?void 0:n.getElementById("headlessui-portal-root");if(l)return l;if(n===null)return null;let s=n.createElement("div");return s.setAttribute("id","headlessui-portal-root"),n.body.appendChild(s)});return i.exports.useEffect(()=>{o!==null&&(n!=null&&n.body.contains(o)||n==null||n.body.appendChild(o))},[o,n]),i.exports.useEffect(()=>{t||r!==null&&a(r.current)},[r,a,t]),o}let Mt=i.exports.Fragment,Ht=$(function(e,t){let r=e,n=i.exports.useRef(null),o=S(yt(d=>{n.current=d}),t),a=ce(n),l=Nt(n),[s]=i.exports.useState(()=>{var d;return typeof window=="undefined"?null:(d=a==null?void 0:a.createElement("div"))!=null?d:null}),c=Y(),u=i.exports.useRef(!1);return A(()=>{if(u.current=!1,!(!l||!s))return l.contains(s)||(s.setAttribute("data-headlessui-portal",""),l.appendChild(s)),()=>{u.current=!0,Me(()=>{var d;!u.current||!l||!s||(l.removeChild(s),l.childNodes.length<=0&&((d=l.parentElement)==null||d.removeChild(l)))})}},[l,s]),c?!l||!s?null:dt.exports.createPortal(k({ourProps:{ref:o},theirProps:r,defaultTag:Mt,name:"Portal"}),s):null}),jt=i.exports.Fragment,Ke=i.exports.createContext(null),It=$(function(e,t){let{target:r,...n}=e,o={ref:S(t)};return m.createElement(Ke.Provider,{value:r},k({ourProps:o,theirProps:n,defaultTag:jt,name:"Popover.Group"}))}),Pe=Object.assign(Ht,{Group:It}),et=i.exports.createContext(null);function tt(){let e=i.exports.useContext(et);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,tt),t}return e}function Bt(){let[e,t]=i.exports.useState([]);return[e.length>0?e.join(" "):void 0,i.exports.useMemo(()=>function(r){let n=C(a=>(t(l=>[...l,a]),()=>t(l=>{let s=l.slice(),c=s.indexOf(a);return c!==-1&&s.splice(c,1),s}))),o=i.exports.useMemo(()=>({register:n,slot:r.slot,name:r.name,props:r.props}),[n,r.slot,r.name,r.props]);return m.createElement(et.Provider,{value:o},r.children)},[t])]}let Wt="p",Ut=$(function(e,t){let r=tt(),n=`headlessui-description-${V()}`,o=S(t);A(()=>r.register(n),[n,r.register]);let a=e,l={ref:o,...r.props,id:n};return k({ourProps:l,theirProps:a,slot:r.slot||{},defaultTag:Wt,name:r.name||"Description"})}),He=i.exports.createContext(()=>{});He.displayName="StackContext";var Le=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Le||{});function Vt(){return i.exports.useContext(He)}function qt({children:e,onUpdate:t,type:r,element:n}){let o=Vt(),a=C((...l)=>{t==null||t(...l),o(...l)});return A(()=>(a(0,r,n),()=>a(1,r,n)),[a,r,n]),m.createElement(He.Provider,{value:a},e)}var _t=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(_t||{}),Zt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Zt||{});let Gt={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},ae=i.exports.createContext(null);ae.displayName="DialogContext";function K(e){let t=i.exports.useContext(ae);if(t===null){let r=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,K),r}return t}function Yt(e,t){return w(t.type,Gt,e,t)}let zt="div",Qt=ie.RenderStrategy|ie.Static,Xt=$(function(e,t){let{open:r,onClose:n,initialFocus:o,__demoMode:a=!1,...l}=e,[s,c]=i.exports.useState(0),u=Ae();r===void 0&&u!==null&&(r=w(u,{[U.Open]:!0,[U.Closed]:!1}));let d=i.exports.useRef(new Set),f=i.exports.useRef(null),x=S(f,t),T=i.exports.useRef(null),b=ce(f),q=e.hasOwnProperty("open")||u!==null,y=e.hasOwnProperty("onClose");if(!q&&!y)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!q)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!y)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof r!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`);if(typeof n!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n}`);let g=r?0:1,[E,O]=i.exports.useReducer(Yt,{titleId:null,descriptionId:null,panelRef:i.exports.createRef()}),N=C(()=>n(!1)),ee=C(v=>O({type:0,id:v})),M=Y()?a?!1:g===0:!1,R=s>1,_=i.exports.useContext(ae)!==null,P=R?"parent":"leaf";At(f,R?M:!1),bt(()=>{var v,F;return[...Array.from((v=b==null?void 0:b.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?v:[]).filter(h=>!(!(h instanceof HTMLElement)||h.contains(T.current)||E.panelRef.current&&h.contains(E.panelRef.current))),(F=E.panelRef.current)!=null?F:f.current]},N,M&&!R),Ne(b==null?void 0:b.defaultView,"keydown",v=>{v.defaultPrevented||v.key===ze.Escape&&g===0&&(R||(v.preventDefault(),v.stopPropagation(),N()))}),i.exports.useEffect(()=>{var v;if(g!==0||_)return;let F=ue(f);if(!F)return;let h=F.documentElement,B=(v=F.defaultView)!=null?v:window,at=h.style.overflow,st=h.style.paddingRight,je=B.innerWidth-h.clientWidth;if(h.style.overflow="hidden",je>0){let ut=h.clientWidth-h.offsetWidth,ct=je-ut;h.style.paddingRight=`${ct}px`}return()=>{h.style.overflow=at,h.style.paddingRight=st}},[g,_]),i.exports.useEffect(()=>{if(g!==0||!f.current)return;let v=new IntersectionObserver(F=>{for(let h of F)h.boundingClientRect.x===0&&h.boundingClientRect.y===0&&h.boundingClientRect.width===0&&h.boundingClientRect.height===0&&N()});return v.observe(f.current),()=>v.disconnect()},[g,f,N]);let[me,he]=Bt(),z=`headlessui-dialog-${V()}`,Q=i.exports.useMemo(()=>[{dialogState:g,close:N,setTitleId:ee},E],[g,E,N,ee]),te=i.exports.useMemo(()=>({open:g===0}),[g]),X={ref:x,id:z,role:"dialog","aria-modal":g===0?!0:void 0,"aria-labelledby":E.titleId,"aria-describedby":me};return m.createElement(qt,{type:"Dialog",element:f,onUpdate:C((v,F,h)=>{F==="Dialog"&&w(v,{[Le.Add](){d.current.add(h),c(B=>B+1)},[Le.Remove](){d.current.add(h),c(B=>B-1)}})})},m.createElement(ke,{force:!0},m.createElement(Pe,null,m.createElement(ae.Provider,{value:Q},m.createElement(Pe.Group,{target:f},m.createElement(ke,{force:!1},m.createElement(he,{slot:te,name:"Dialog.Description"},m.createElement(J,{initialFocus:o,containers:d,features:M?w(P,{parent:J.features.RestoreFocus,leaf:J.features.All&~J.features.FocusLock}):J.features.None},k({ourProps:X,theirProps:l,slot:te,defaultTag:zt,features:Qt,visible:g===0,name:"Dialog"})))))))),m.createElement($e,{features:le.Hidden,ref:T}))}),Jt="div",Kt=$(function(e,t){let[{dialogState:r,close:n}]=K("Dialog.Overlay"),o=S(t),a=`headlessui-dialog-overlay-${V()}`,l=C(c=>{if(c.target===c.currentTarget){if(Ct(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),n()}}),s=i.exports.useMemo(()=>({open:r===0}),[r]);return k({ourProps:{ref:o,id:a,"aria-hidden":!0,onClick:l},theirProps:e,slot:s,defaultTag:Jt,name:"Dialog.Overlay"})}),er="div",tr=$(function(e,t){let[{dialogState:r},n]=K("Dialog.Backdrop"),o=S(t),a=`headlessui-dialog-backdrop-${V()}`;i.exports.useEffect(()=>{if(n.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[n.panelRef]);let l=i.exports.useMemo(()=>({open:r===0}),[r]);return m.createElement(ke,{force:!0},m.createElement(Pe,null,k({ourProps:{ref:o,id:a,"aria-hidden":!0},theirProps:e,slot:l,defaultTag:er,name:"Dialog.Backdrop"})))}),rr="div",nr=$(function(e,t){let[{dialogState:r},n]=K("Dialog.Panel"),o=S(t,n.panelRef),a=`headlessui-dialog-panel-${V()}`,l=i.exports.useMemo(()=>({open:r===0}),[r]),s=C(c=>{c.stopPropagation()});return k({ourProps:{ref:o,id:a,onClick:s},theirProps:e,slot:l,defaultTag:rr,name:"Dialog.Panel"})}),or="h2",ir=$(function(e,t){let[{dialogState:r,setTitleId:n}]=K("Dialog.Title"),o=`headlessui-dialog-title-${V()}`,a=S(t);i.exports.useEffect(()=>(n(o),()=>n(null)),[o,n]);let l=i.exports.useMemo(()=>({open:r===0}),[r]);return k({ourProps:{ref:a,id:o},theirProps:e,slot:l,defaultTag:or,name:"Dialog.Title"})}),ne=Object.assign(Xt,{Backdrop:tr,Panel:nr,Overlay:Kt,Title:ir,Description:Ut});function lr(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function we(e,...t){e&&t.length>0&&e.classList.add(...t)}function Ee(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Se=(e=>(e.Ended="ended",e.Cancelled="cancelled",e))(Se||{});function ar(e,t){let r=se();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:o}=getComputedStyle(e),[a,l]=[n,o].map(s=>{let[c=0]=s.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return c});if(a+l!==0){let s=[];s.push(r.addEventListener(e,"transitionrun",c=>{c.target===c.currentTarget&&(s.splice(0).forEach(u=>u()),s.push(r.addEventListener(e,"transitionend",u=>{u.target===u.currentTarget&&(t("ended"),s.splice(0).forEach(d=>d()))}),r.addEventListener(e,"transitioncancel",u=>{u.target===u.currentTarget&&(t("cancelled"),s.splice(0).forEach(d=>d()))})))}))}else t("ended");return r.add(()=>t("cancelled")),r.dispose}function sr(e,t,r,n){let o=r?"enter":"leave",a=se(),l=n!==void 0?lr(n):()=>{},s=w(o,{enter:()=>t.enter,leave:()=>t.leave}),c=w(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),u=w(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return Ee(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),we(e,...s,...u),a.nextFrame(()=>{Ee(e,...u),we(e,...c),ar(e,d=>(d==="ended"&&(Ee(e,...s),we(e,...t.entered)),l(d)))}),a.dispose}function ur({container:e,direction:t,classes:r,events:n,onStart:o,onStop:a}){let l=Oe(),s=pt(),c=j(t),u=C(()=>w(c.current,{enter:()=>n.current.beforeEnter(),leave:()=>n.current.beforeLeave(),idle:()=>{}})),d=C(()=>w(c.current,{enter:()=>n.current.afterEnter(),leave:()=>n.current.afterLeave(),idle:()=>{}}));A(()=>{let f=se();s.add(f.dispose);let x=e.current;if(!!x&&c.current!=="idle"&&!!l.current)return f.dispose(),u(),o.current(c.current),f.add(sr(x,r.current,c.current==="enter",T=>{f.dispose(),w(T,{[Se.Ended](){d(),a.current(c.current)},[Se.Cancelled]:()=>{}})})),f.dispose},[t])}function W(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let de=i.exports.createContext(null);de.displayName="TransitionContext";var cr=(e=>(e.Visible="visible",e.Hidden="hidden",e))(cr||{});function dr(){let e=i.exports.useContext(de);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function fr(){let e=i.exports.useContext(fe);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let fe=i.exports.createContext(null);fe.displayName="NestingContext";function pe(e){return"children"in e?pe(e.children):e.current.filter(({state:t})=>t==="visible").length>0}function rt(e){let t=j(e),r=i.exports.useRef([]),n=Oe(),o=C((l,s=D.Hidden)=>{let c=r.current.findIndex(({id:u})=>u===l);c!==-1&&(w(s,{[D.Unmount](){r.current.splice(c,1)},[D.Hidden](){r.current[c].state="hidden"}}),Me(()=>{var u;!pe(r)&&n.current&&((u=t.current)==null||u.call(t))}))}),a=C(l=>{let s=r.current.find(({id:c})=>c===l);return s?s.state!=="visible"&&(s.state="visible"):r.current.push({id:l,state:"visible"}),()=>o(l,D.Unmount)});return i.exports.useMemo(()=>({children:r,register:a,unregister:o}),[a,o,r])}function pr(){}let mr=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function qe(e){var t;let r={};for(let n of mr)r[n]=(t=e[n])!=null?t:pr;return r}function hr(e){let t=i.exports.useRef(qe(e));return i.exports.useEffect(()=>{t.current=qe(e)},[e]),t}let vr="div",nt=ie.RenderStrategy,ot=$(function(e,t){let{beforeEnter:r,afterEnter:n,beforeLeave:o,afterLeave:a,enter:l,enterFrom:s,enterTo:c,entered:u,leave:d,leaveFrom:f,leaveTo:x,...T}=e,b=i.exports.useRef(null),q=S(b,t),[y,g]=i.exports.useState("visible"),E=T.unmount?D.Unmount:D.Hidden,{show:O,appear:N,initial:ee}=dr(),{register:M,unregister:R}=fr(),_=i.exports.useRef(null),P=V();i.exports.useEffect(()=>{if(P)return M(P)},[M,P]),i.exports.useEffect(()=>{if(E===D.Hidden&&!!P){if(O&&y!=="visible"){g("visible");return}w(y,{hidden:()=>R(P),visible:()=>M(P)})}},[y,P,M,R,O,E]);let me=j({enter:W(l),enterFrom:W(s),enterTo:W(c),entered:W(u),leave:W(d),leaveFrom:W(f),leaveTo:W(x)}),he=hr({beforeEnter:r,afterEnter:n,beforeLeave:o,afterLeave:a}),z=Y();i.exports.useEffect(()=>{if(z&&y==="visible"&&b.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[b,y,z]);let Q=ee&&!N,te=(()=>!z||Q||_.current===O?"idle":O?"enter":"leave")(),X=i.exports.useRef(!1),v=rt(()=>{X.current||(g("hidden"),R(P))});ur({container:b,classes:me,events:he,direction:te,onStart:j(()=>{X.current=!0}),onStop:j(B=>{X.current=!1,B==="leave"&&!pe(v)&&(g("hidden"),R(P))})}),i.exports.useEffect(()=>{!Q||(E===D.Hidden?_.current=null:_.current=O)},[O,Q,y]);let F=T,h={ref:q};return m.createElement(fe.Provider,{value:v},m.createElement(Ft,{value:w(y,{visible:U.Open,hidden:U.Closed})},k({ourProps:h,theirProps:F,defaultTag:vr,features:nt,visible:y==="visible",name:"Transition.Child"})))}),Re=$(function(e,t){let{show:r,appear:n=!1,unmount:o,...a}=e,l=i.exports.useRef(null),s=S(l,t);Y();let c=Ae();if(r===void 0&&c!==null&&(r=w(c,{[U.Open]:!0,[U.Closed]:!1})),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,d]=i.exports.useState(r?"visible":"hidden"),f=rt(()=>{d("hidden")}),[x,T]=i.exports.useState(!0),b=i.exports.useRef([r]);A(()=>{x!==!1&&b.current[b.current.length-1]!==r&&(b.current.push(r),T(!1))},[b,r]);let q=i.exports.useMemo(()=>({show:r,appear:n,initial:x}),[r,n,x]);i.exports.useEffect(()=>{if(r)d("visible");else if(!pe(f))d("hidden");else{let g=l.current;if(!g)return;let E=g.getBoundingClientRect();E.x===0&&E.y===0&&E.width===0&&E.height===0&&d("hidden")}},[r,f]);let y={unmount:o};return m.createElement(fe.Provider,{value:f},m.createElement(de.Provider,{value:q},k({ourProps:{...y,as:i.exports.Fragment,children:m.createElement(ot,{ref:s,...y,...a})},theirProps:{},defaultTag:i.exports.Fragment,features:nt,visible:u==="visible",name:"Transition"})))}),gr=$(function(e,t){let r=i.exports.useContext(de)!==null,n=Ae()!==null;return m.createElement(m.Fragment,null,!r&&n?m.createElement(Re,{ref:t,...e}):m.createElement(ot,{ref:t,...e}))}),be=Object.assign(Re,{Child:gr,Root:Re});function it(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=it(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function lt(){for(var e=0,t,r,n="";e<arguments.length;)(t=arguments[e++])&&(r=it(t))&&(n&&(n+=" "),n+=r);return n}function I({children:e,className:t,fill:r="currentColor",stroke:n,...o}){return p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",...o,fill:r,stroke:n,className:lt("w-5 h-5",t),children:e})}function Ar(e){return L(I,{...e,stroke:e.stroke||"currentColor",children:[p("title",{children:"Menu"}),p("line",{x1:"3",y1:"6.375",x2:"17",y2:"6.375",strokeWidth:"1.25"}),p("line",{x1:"3",y1:"10.375",x2:"17",y2:"10.375",strokeWidth:"1.25"}),p("line",{x1:"3",y1:"14.375",x2:"17",y2:"14.375",strokeWidth:"1.25"})]})}function xr(e){return L(I,{...e,stroke:e.stroke||"currentColor",children:[p("title",{children:"Close"}),p("line",{x1:"4.44194",y1:"4.30806",x2:"15.7556",y2:"15.6218",strokeWidth:"1.25"}),p("line",{y1:"-0.625",x2:"16",y2:"-0.625",transform:"matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)",strokeWidth:"1.25"})]})}function Or({direction:e="down",stroke:t="currentColor",...r}){let n;switch(e){case"down":n="rotate-0";break;case"up":n="rotate-180";break;case"left":n="-rotate-90";break;case"right":n="rotate-90";break;default:n="rotate-0"}return L(I,{...r,className:`w-5 h-5 transition ${n}`,fill:"transparent",stroke:t,children:[p("title",{children:"Caret"}),p("path",{d:"M14 8L10 12L6 8",strokeWidth:"1.25"})]})}function Nr(e){return L(I,{...e,children:[p("title",{children:"Bag"}),p("path",{fillRule:"evenodd",d:"M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"})]})}function Mr(e){return L(I,{...e,children:[p("title",{children:"Account"}),p("path",{fillRule:"evenodd",d:"M9.9998 12.625c-1.9141 0-3.6628.698-5.0435 1.8611C3.895 13.2935 3.25 11.7221 3.25 10c0-3.728 3.022-6.75 6.75-6.75 3.7279 0 6.75 3.022 6.75 6.75 0 1.7222-.645 3.2937-1.7065 4.4863-1.3807-1.1632-3.1295-1.8613-5.0437-1.8613ZM10 18c-2.3556 0-4.4734-1.0181-5.9374-2.6382C2.7806 13.9431 2 12.0627 2 10c0-4.4183 3.5817-8 8-8s8 3.5817 8 8-3.5817 8-8 8Zm0-12.5c-1.567 0-2.75 1.394-2.75 3s1.183 3 2.75 3 2.75-1.394 2.75-3-1.183-3-2.75-3Z"})]})}function Hr(e){return L(I,{...e,children:[p("title",{children:"Search"}),p("path",{fillRule:"evenodd",d:"M13.3 8.52a4.77 4.77 0 1 1-9.55 0 4.77 4.77 0 0 1 9.55 0Zm-.98 4.68a6.02 6.02 0 1 1 .88-.88l4.3 4.3-.89.88-4.3-4.3Z"})]})}function jr({stroke:e="currentColor",...t}){return L(I,{...t,fill:"transparent",stroke:e,children:[p("title",{children:"Check"}),p("circle",{cx:"10",cy:"10",r:"7.25",strokeWidth:"1.25"}),p("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"m7.04 10.37 2.42 2.41 3.5-5.56"})]})}function Ir(e){return L(I,{...e,fill:"transparent",stroke:e.stroke||"currentColor",children:[p("title",{children:"Remove"}),p("path",{d:"M4 6H16",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M8.5 9V14",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M11.5 9V14",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M5.5 6L6 17H14L14.5 6",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M8 6L8 5C8 4 8.75 3 10 3C11.25 3 12 4 12 5V6",strokeWidth:"1.25"})]})}function wr({as:e="h2",children:t,className:r="",format:n,size:o="heading",width:a="default",...l}){const s={display:"font-bold text-display",heading:"font-bold text-heading",lead:"font-bold text-lead",copy:"font-medium text-copy"},c={default:"max-w-prose",narrow:"max-w-prose-narrow",wide:"max-w-prose-wide"},u=lt(ve(r,"whitespace-")&&"whitespace-pre-wrap",ve(r,"max-w-")&&c[a],ve(r,"font-")&&s[o],r);return p(e,{...l,className:u,children:n?ft(t):t})}function Er({heading:e,open:t,onClose:r,openFrom:n="right",children:o}){const a={right:"translate-x-full",left:"-translate-x-full"};return p(be,{appear:!0,show:t,as:i.exports.Fragment,children:L(ne,{as:"div",className:"relative z-50",onClose:r,children:[p(be.Child,{as:i.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 left-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:p("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),p("div",{className:"fixed inset-0",children:p("div",{className:"absolute inset-0 overflow-hidden",children:p("div",{className:`fixed inset-y-0 flex max-w-full ${n==="right"?"right-0":""}`,children:p(be.Child,{as:i.exports.Fragment,enter:"transform transition ease-in-out duration-300",enterFrom:a[n],enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300",leaveFrom:"translate-x-0",leaveTo:a[n],children:L(ne.Panel,{className:"w-screen h-screen max-w-lg text-left align-middle transition-all transform shadow-xl bg-contrast",children:[L("header",{className:`sticky top-0 flex items-center px-6 h-nav sm:px-8 md:px-12 ${e?"justify-between":"justify-end"}`,children:[e!==null&&p(ne.Title,{children:p(wr,{as:"span",size:"lead",id:"cart-contents",children:e})}),p("button",{type:"button",className:"p-4 -m-4 transition text-primary hover:text-primary/50",onClick:r,children:p(xr,{"aria-label":"Close panel"})})]}),o]})})})})})]})})}Er.Title=ne.Title;function Br(e=!1){const[t,r]=i.exports.useState(e);function n(){r(!0)}function o(){r(!1)}return{isOpen:t,openDrawer:n,closeDrawer:o}}export{Hr as A,Mr as B,Ft as C,Er as D,Nr as E,$ as H,Or as I,bt as L,gt as S,yt as T,k as _,jr as a,le as b,V as c,pt as d,Ae as e,ue as f,We as g,$e as h,se as i,Ze as j,ze as k,lt as l,xr as m,wr as n,C as o,U as p,Ir as q,Ct as r,j as s,A as t,w as u,Et as v,Br as w,ie as x,S as y,Ar as z};
//# sourceMappingURL=de1940ea.js.map