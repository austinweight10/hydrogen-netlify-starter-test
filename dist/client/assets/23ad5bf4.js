import{r as a,a as i,F as g,j as t}from"./index.6189f3cc.js";import{B as x}from"./44037397.js";import"./6de4b88c.js";import"./951108c3.js";import"./39240f87.js";import"./d918c967.js";import"./247fa190.js";import"./0963bb9b.js";import"./d9f18c74.js";import"./11e343ea.js";import"./74769fe0.js";import{u as I}from"./40447271.js";import{T as v}from"./4d9ccbe2.js";import"./de1940ea.js";/* empty css        */import{M as j}from"./6ffda1c9.js";import"./83ddd54b.js";import"./204a9453.js";function me({addresses:e,defaultAddress:l}){const[o,u]=a.exports.useState(null),[c,s]=a.exports.useState(null),{fullDefaultAddress:m,addressesWithoutDefault:y}=a.exports.useMemo(()=>{const n=e.findIndex(f=>f.id===l);return{addressesWithoutDefault:[...e.slice(0,n),...e.slice(n+1,e.length)],fullDefaultAddress:e[n]}},[e,l]);function p(){u(null),s(null)}function d(n){u(n)}return i(g,{children:[c?t(j,{close:p,children:t($,{addressId:c,close:p})}):null,o?t(j,{close:p,children:t(W,{address:o,defaultAddress:m===o,close:p})}):null,i("div",{className:"grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12",children:[t("h3",{className:"font-bold text-lead",children:"Address Book"}),i("div",{children:[e!=null&&e.length?null:t(v,{className:"mb-1",width:"narrow",as:"p",size:"copy",children:"You haven't saved any addresses yet."}),t("div",{className:"w-48",children:t(x,{className:"mt-2 text-sm w-full mb-6",onClick:()=>{d({})},variant:"secondary",children:"Add an Address"})}),e!=null&&e.length?i("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:[m?t(P,{address:m,defaultAddress:!0,setDeletingAddress:s.bind(null,m.originalId),editAddress:d}):null,y.map(n=>t(P,{address:n,setDeletingAddress:s.bind(null,n.originalId),editAddress:d},n.id))]}):null]})]})]})}function P({address:e,defaultAddress:l,editAddress:o,setDeletingAddress:u}){return i("div",{className:"lg:p-8 p-6 border border-gray-200 rounded flex flex-col",children:[l?t("div",{className:"mb-3 flex flex-row",children:t("span",{className:"px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary/50",children:"Default"})}):null,i("ul",{className:"flex-1 flex-row",children:[e.firstName||e.lastName?t("li",{children:(e.firstName&&e.firstName+" ")+e.lastName}):t(g,{}),e.formatted?e.formatted.map(c=>t("li",{children:c},c)):t(g,{})]}),i("div",{className:"flex flex-row font-medium mt-6",children:[t("button",{onClick:()=>{o(e)},className:"text-left underline text-sm",children:"Edit"}),t("button",{onClick:u,className:"text-left text-primary/50 ml-6 text-sm",children:"Remove"})]})]})}function W({address:e,defaultAddress:l,close:o}){const u=a.exports.useMemo(()=>!Object.keys(e).length,[e]),[c,s]=a.exports.useState(!1),[m,y]=a.exports.useState(null),[p,d]=a.exports.useState((e==null?void 0:e.address1)||""),[n,f]=a.exports.useState((e==null?void 0:e.address2)||""),[h,z]=a.exports.useState((e==null?void 0:e.firstName)||""),[b,q]=a.exports.useState((e==null?void 0:e.lastName)||""),[C,F]=a.exports.useState((e==null?void 0:e.company)||""),[A,T]=a.exports.useState((e==null?void 0:e.country)||""),[w,B]=a.exports.useState((e==null?void 0:e.province)||""),[S,L]=a.exports.useState((e==null?void 0:e.city)||""),[k,M]=a.exports.useState((e==null?void 0:e.zip)||""),[D,R]=a.exports.useState((e==null?void 0:e.phone)||""),[N,O]=a.exports.useState(l),U=I();async function Z(r){r.preventDefault(),s(!0);const E=await _({id:e==null?void 0:e.originalId,firstName:h,lastName:b,company:C,address1:p,address2:n,country:A,province:w,city:S,zip:k,phone:D,isDefaultAddress:N});if(s(!1),E.error){y(E.error);return}U(),o()}return i(g,{children:[t(v,{className:"mt-4 mb-6",as:"h3",size:"lead",children:u?"Add address":"Edit address"}),t("div",{className:"max-w-lg",children:i("form",{noValidate:!0,onSubmit:Z,children:[m&&t("div",{className:"flex items-center justify-center mb-6 bg-red-100 rounded",children:t("p",{className:"m-4 text-sm text-red-900",children:m})}),t("div",{className:"mt-3",children:t("input",{className:"appearance-none border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline border-gray-500 rounded",id:"firstname",name:"firstname",required:!0,type:"text",autoComplete:"given-name",placeholder:"First name","aria-label":"First name",value:h,onChange:r=>{z(r.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:"appearance-none border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline border-gray-500 rounded",id:"lastname",name:"lastname",required:!0,type:"text",autoComplete:"family-name",placeholder:"Last name","aria-label":"Last name",value:b,onChange:r=>{q(r.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:"appearance-none border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline border-gray-500 rounded",id:"company",name:"company",type:"text",autoComplete:"organization",placeholder:"Company","aria-label":"Company",value:C,onChange:r=>{F(r.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:"appearance-none border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline border-gray-500 rounded",id:"street1",name:"street1",type:"text",autoComplete:"address-line1",placeholder:"Address line 1*",required:!0,"aria-label":"Address line 1",value:p,onChange:r=>{d(r.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:"appearance-none border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline border-gray-500 rounded",id:"address2",name:"address2",type:"text",autoComplete:"address-line2",placeholder:"Addresss line 2","aria-label":"Address line 2",value:n,onChange:r=>{f(r.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:"appearance-none border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline border-gray-500 rounded",id:"city",name:"city",type:"text",required:!0,autoComplete:"address-level2",placeholder:"City","aria-label":"City",value:S,onChange:r=>{L(r.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:"appearance-none border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline border-gray-500 rounded",id:"state",name:"state",type:"text",autoComplete:"address-level1",placeholder:"State / Province",required:!0,"aria-label":"State",value:w,onChange:r=>{B(r.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:"appearance-none border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline border-gray-500 rounded",id:"zip",name:"zip",type:"text",autoComplete:"postal-code",placeholder:"Zip / Postal Code",required:!0,"aria-label":"Zip",value:k,onChange:r=>{M(r.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:"appearance-none border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline border-gray-500 rounded",id:"country",name:"country",type:"text",autoComplete:"country-name",placeholder:"Country",required:!0,"aria-label":"Country",value:A,onChange:r=>{T(r.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:"appearance-none border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline border-gray-500 rounded",id:"phone",name:"phone",type:"tel",autoComplete:"tel",placeholder:"Phone","aria-label":"Phone",value:D,onChange:r=>{R(r.target.value)}})}),i("div",{className:"mt-4",children:[t("input",{type:"checkbox",value:"",name:"defaultAddress",id:"defaultAddress",checked:N,className:"border-gray-500 rounded-sm cursor-pointer border-1",onChange:()=>O(!N)}),t("label",{className:"inline-block ml-2 text-sm cursor-pointer",htmlFor:"defaultAddress",children:"Set as default address"})]}),t("div",{className:"mt-8",children:t(x,{className:"w-full rounded focus:shadow-outline",type:"submit",variant:"primary",disabled:c,children:"Save"})}),t("div",{children:t(x,{className:"w-full mt-2 rounded focus:shadow-outline",variant:"secondary",onClick:o,children:"Cancel"})})]})})]})}async function _({id:e,firstName:l,lastName:o,company:u,address1:c,address2:s,country:m,province:y,city:p,phone:d,zip:n,isDefaultAddress:f}){try{const h=await fetch(e?`/account/address/${encodeURIComponent(e)}`:"/account/address",{method:e?"PATCH":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({firstName:l,lastName:o,company:u,address1:c,address2:s,country:m,province:y,city:p,phone:d,zip:n,isDefaultAddress:f})});return h.ok?{}:h.json()}catch{return{error:"Error saving address. Please try again."}}}function $({addressId:e,close:l}){const o=I();async function u(c){const s=await H(c);if(s.error){alert(s.error);return}o(),l()}return i(g,{children:[t(v,{className:"mb-4",as:"h3",size:"lead",children:"Confirm removal"}),t(v,{as:"p",children:"Are you sure you wish to remove this address?"}),i("div",{className:"mt-6",children:[t(x,{className:"text-sm",onClick:()=>{u(e)},variant:"primary",width:"full",children:"Confirm"}),t(x,{className:"text-sm mt-2",onClick:l,variant:"secondary",width:"full",children:"Cancel"})]})]})}async function H(e){try{const l=await fetch(`/account/address/${encodeURIComponent(e)}`,{method:"DELETE",headers:{Accept:"application/json"}});return l.ok?{}:l.json()}catch{return{error:"Error removing address. Please try again."}}}export{me as AccountAddressBook};
//# sourceMappingURL=23ad5bf4.js.map