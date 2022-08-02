import"./6de4b88c.js";import{r as w,R as l,j as u}from"./index.6189f3cc.js";import{s as f,I as E}from"./bca3d137.js";import{ModelViewer as h}from"./9f327196.js";import"./951108c3.js";import"./39240f87.js";import"./d918c967.js";import"./247fa190.js";import"./0963bb9b.js";import"./d9f18c74.js";import"./11e343ea.js";import"./74769fe0.js";import{A as p}from"./96676335.js";import"./83ddd54b.js";import"./204a9453.js";import"./b0814017.js";import"./1986dff3.js";function y(r,e){if(e==null)return r;const t=Object.keys(e).reduce((o,i)=>{const n=e[i];return n==null?o:o+`&${i}=${n}`},"");return`${r}?${t}`}function g(r,e){return w.exports.useMemo(()=>e?y(r,e):r,[r,e])}function I(r){var m,c;const{data:e,previewImageOptions:t,id:o=e.id,playsInline:i=!0,controls:n=!0,...s}=r,d=f({src:(c=(m=e.previewImage)==null?void 0:m.url)!=null?c:"",...t});if(!e.sources)throw new Error("<Video/> requires a 'data.sources' array");return l.createElement("video",{...s,id:o,playsInline:i,controls:n,poster:d},e.sources.map(a=>{if(!((a==null?void 0:a.url)&&(a==null?void 0:a.mimeType)))throw new Error("<Video/> needs 'source.url' and 'source.mimeType'");return l.createElement("source",{key:a.url,src:a.url,type:a.mimeType})}))}function b(r){const{data:e,options:t,id:o=e.id,frameBorder:i="0",allow:n="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:s=!0,...d}=r;if(!e.embedUrl)throw new Error("<ExternalVideo/> requires the 'embedUrl' property");const m=g(e.embedUrl,t);return l.createElement("iframe",{...d,id:o!=null?o:e.embedUrl,frameBorder:i,allow:n,allowFullScreen:s,src:m})}function v({data:r,options:e,...t}){switch(r.mediaContentType){case"IMAGE":{const o=r.image;return!o||!o.url?(console.warn(`No "image" property was found on the "data" prop for <MediaFile/>, for the "type='image'"`),null):l.createElement(E,{...t,data:o,loaderOptions:e})}case"VIDEO":return l.createElement(I,{...t,data:r,previewImageOptions:e});case"EXTERNAL_VIDEO":return l.createElement(b,{...t,data:r,options:e});case"MODEL_3D":return l.createElement(h,{...t,data:r});default:return null}}function $({media:r,className:e}){return r.length?u("div",{className:`swimlane md:grid-flow-row hiddenScroll md:p-0 md:overflow-x-auto md:grid-cols-2 ${e}`,children:r.map((t,o)=>{let i={};const n=o===0,s=o===3,d=o%3===0,m={...t,image:{...t.image,altText:t.alt||"Product image"}};switch(t.mediaContentType){case"IMAGE":i={width:800,widths:[400,800,1200,1600,2e3,2400]};break;case"VIDEO":i={width:"100%",autoPlay:!0,controls:!1,muted:!0,loop:!0,preload:"auto"};break;case"EXTERNAL_VIDEO":i={width:"100%"};break;case"MODEL_3D":i={width:"100%",interactionPromptThreshold:"0",ar:!0,loading:p,disableZoom:!0};break}o===0&&t.mediaContentType==="IMAGE"&&(i.loading=p);const c=[d?"md:col-span-2":"md:col-span-1",n||s?"":"md:aspect-[4/5]","aspect-square snap-center card-image bg-white dark:bg-contrast/10 w-mobileGallery md:w-full"].join(" ");return u("div",{className:c,children:u(v,{tabIndex:"0",className:"w-full h-full aspect-square fadeIn object-cover",data:m,sizes:d?"(min-width: 64em) 60vw, (min-width: 48em) 50vw, 90vw":"(min-width: 64em) 30vw, (min-width: 48em) 25vw, 90vw",options:{crop:"center"},...i})},t.id||t.image.id)})}):null}export{$ as ProductGallery};
//# sourceMappingURL=e44a4733.js.map
