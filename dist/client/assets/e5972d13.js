import{j as e,a}from"./index.6189f3cc.js";import{Link as p}from"./6de4b88c.js";import"./951108c3.js";import"./39240f87.js";import"./d918c967.js";import"./247fa190.js";import"./0963bb9b.js";import"./d9f18c74.js";import"./11e343ea.js";import"./74769fe0.js";import{B as g}from"./44037397.js";import{s as f}from"./40447271.js";import{T as r}from"./4d9ccbe2.js";import{I as h}from"./bca3d137.js";import{f as u}from"./92add5bc.js";import{n as N}from"./de1940ea.js";/* empty css        */import"./83ddd54b.js";import"./204a9453.js";function M({orders:t}){return e("div",{className:"mt-6",children:a("div",{className:"grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12",children:[e("h2",{className:"font-bold text-lead",children:"Order History"}),t!=null&&t.length?e(x,{orders:t}):e(y,{})]})})}function y(){return a("div",{children:[e(r,{className:"mb-1",size:"fine",width:"narrow",as:"p",children:"You haven't placed any orders yet."}),e("div",{className:"w-48",children:e(g,{className:"text-sm mt-2 w-full",variant:"secondary",to:"/",children:"Start Shopping"})})]})}function x({orders:t}){return e("ul",{className:"grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3",children:t.map(l=>e(v,{order:l},l.id))})}function v({order:t}){var s,n,c,m,d,o;if(!(t!=null&&t.id))return null;const l=t.id.split("/").pop().split("?")[0],i=u(t==null?void 0:t.lineItems);return a("li",{className:"grid text-center border rounded",children:[a(p,{className:"grid items-center gap-4 p-4 md:gap-6 md:p-6 md:grid-cols-2",to:`/account/orders/${l}`,children:[((s=i[0].variant)==null?void 0:s.image)&&e("div",{className:"card-image aspect-square bg-primary/5",children:e(h,{width:168,height:168,widths:[168],className:"w-full fadeIn cover",alt:(m=(c=(n=i[0].variant)==null?void 0:n.image)==null?void 0:c.altText)!=null?m:"Order image",data:(d=i[0].variant)==null?void 0:d.image,loaderOptions:{scale:2,crop:"center"}})}),a("div",{className:`flex-col justify-center text-left ${!((o=i[0].variant)!=null&&o.image)&&"md:col-span-2"}`,children:[e(N,{as:"h3",format:!0,size:"copy",children:i.length>1?`${i[0].title} +${i.length-1} more`:i[0].title}),a("dl",{className:"grid grid-gap-1",children:[e("dt",{className:"sr-only",children:"Order ID"}),e("dd",{children:a(r,{size:"fine",color:"subtle",children:["Order No. ",t.orderNumber]})}),e("dt",{className:"sr-only",children:"Order Date"}),e("dd",{children:e(r,{size:"fine",color:"subtle",children:new Date(t.processedAt).toDateString()})}),e("dt",{className:"sr-only",children:"Fulfillment Status"}),e("dd",{className:"mt-2",children:e("span",{className:`px-3 py-1 text-xs font-medium rounded-full ${t.fulfillmentStatus==="FULFILLED"?"bg-green-100 text-green-800":"bg-primary/5 text-primary/50"}`,children:e(r,{size:"fine",children:f(t.fulfillmentStatus)})})})]})]})]}),e("div",{className:"self-end border-t",children:e(p,{className:"block w-full p-2 text-center",to:`/account/orders/${l}`,children:e(r,{color:"subtle",className:"ml-3",children:"View Details"})})})]})}export{M as AccountOrderHistory};
//# sourceMappingURL=e5972d13.js.map