import{j as c,r as n,a as j,F as B}from"./index.fcab2dec.js";import{Link as F}from"./dabb404c.js";import{f as G}from"./92add5bc.js";import"./a3fdab35.js";import"./42bd6d0f.js";import"./c96332aa.js";import"./979bc475.js";import"./f36cacbb.js";import"./4713b2c7.js";import"./adcb9f3b.js";import"./16a2d653.js";import{B as O}from"./086354ff.js";import{l as U}from"./2d42f978.js";import"./199713ed.js";import{ProductCard as M}from"./5d84dd3e.js";import{g as T}from"./96676335.js";/* empty css        */import"./4dcec775.js";import"./b453c200.js";import"./d6978aec.js";import"./4ff67a61.js";import"./7940f5e2.js";import"./25854493.js";function q({as:u="div",className:s,flow:i="row",gap:l="default",items:e=4,layout:a="default",...d}){const g={default:`grid-cols-1 ${e===2&&"md:grid-cols-2"}  ${e===3&&"sm:grid-cols-3"} ${e>3&&"md:grid-cols-3"} ${e>=4&&"lg:grid-cols-4"}`,products:`grid-cols-2 ${e>=3&&"md:grid-cols-3"} ${e>=4&&"lg:grid-cols-4"}`,auto:"auto-cols-auto",blog:"grid-cols-2 pt-24"},p={default:"grid gap-2 gap-y-6 md:gap-4 lg:gap-6",blog:"grid gap-6"},f=U({row:"grid-flow-row",col:"grid-flow-col"}[i],p[l],g[a],s);return c(u,{...d,className:f})}function uo({url:u,collection:s}){var b,N,v;const i=n.exports.useRef(null),l=((b=s==null?void 0:s.products)==null?void 0:b.nodes)||[],{hasNextPage:e,endCursor:a}=(v=(N=s==null?void 0:s.products)==null?void 0:N.pageInfo)!=null?v:{},[d,g]=n.exports.useState(l),[p,h]=n.exports.useState(a!=null?a:""),[f,L]=n.exports.useState(e),[x,P]=n.exports.useState(!1),S=l.length>0,m=n.exports.useCallback(async()=>{var y,C,I,$;P(!0);const r=new URL(window.location.origin+u);r.searchParams.set("cursor",p);const t=await fetch(r,{method:"POST"}),{data:o}=await t.json(),k=G(((y=o==null?void 0:o.collection)==null?void 0:y.products)||(o==null?void 0:o.products)||[]),{endCursor:R,hasNextPage:E}=((I=(C=o==null?void 0:o.collection)==null?void 0:C.products)==null?void 0:I.pageInfo)||(($=o==null?void 0:o.products)==null?void 0:$.pageInfo)||{endCursor:"",hasNextPage:!1};g([...d,...k]),h(R),L(E),P(!1)},[p,u,d]),w=n.exports.useCallback(r=>{r.forEach(t=>{t.isIntersecting&&m()})},[m]);return n.exports.useEffect(()=>{const r=new IntersectionObserver(w,{rootMargin:"100%"}),t=i.current;return t&&r.observe(t),()=>{t&&r.unobserve(t)}},[i,p,w]),S?j(B,{children:[c(q,{layout:"products",children:d.map((r,t)=>c(M,{product:r,loading:T(t)},r.id))}),f&&c("div",{className:"flex items-center justify-center mt-6",ref:i,children:c(O,{variant:"secondary",disabled:x,onClick:m,width:"full",children:x?"Loading...":"Load more products"})})]}):j(B,{children:[c("p",{children:"No products found on this collection"}),c(F,{to:"/products",children:c("p",{className:"underline",children:"Browse catalog"})})]})}export{uo as ProductGrid};
//# sourceMappingURL=3aec8d89.js.map