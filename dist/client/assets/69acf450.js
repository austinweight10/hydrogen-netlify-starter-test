import{r as d,C as o}from"./index.6189f3cc.js";import{l as s}from"./1986dff3.js";import{u as c}from"./555f9022.js";import"./39240f87.js";import"./204a9453.js";const m="https://cdn.shopify.com/shopifycloud/boomerang/shopify-boomerang-hydrogen.min.js";function l(){const{storeDomain:n}=c();return d.exports.useEffect(()=>{try{(function(){if(window.BOOMR&&(window.BOOMR.version||window.BOOMR.snippetExecuted))return;window.BOOMR=window.BOOMR||{},window.BOOMR.hydrogenPerformanceEvent=e=>{const r=new Date().getTime();o.publish(o.eventNames.PERFORMANCE,!0,e);const i=o.getPageAnalyticsData().shopify.shopId||"";fetch("https://monorail-edge.shopifysvc.com/v1/produce",{method:"post",headers:{"content-type":"text/plain"},body:JSON.stringify({schema_id:"hydrogen_buyer_performance/2.0",payload:{...e,shop_id:i.substring(i.lastIndexOf("/")+1)||""},metadata:{event_created_at_ms:r,event_sent_at_ms:new Date().getTime()}})})},window.BOOMR.storeDomain=n;function t(e){window.BOOMR_onload=e&&e.timeStamp||Date.now()}function a(e){e.detail.BOOMR.init(),e.detail.BOOMR.t_end=Date.now()}window.addEventListener?window.addEventListener("load",t,!1):window.attachEvent&&window.attachEvent("onload",t),document.addEventListener?document.addEventListener("onBoomerangLoaded",a):document.attachEvent&&document.attachEvent("onpropertychange",function(e){e||(e=event),e.propertyName==="onBoomerangLoaded"&&a(e)})})(),s(m).catch(()=>{})}catch{}},[n]),null}export{l as PerformanceMetrics};
//# sourceMappingURL=69acf450.js.map
