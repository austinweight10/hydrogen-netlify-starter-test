import{l as c}from"./1986dff3.js";import{r as e}from"./index.6189f3cc.js";function u(a,t){const[o,r]=e.exports.useState("loading"),s=JSON.stringify(t);return e.exports.useEffect(()=>{async function i(){try{r("loading"),await c(a,t),r("done")}catch{r("error")}}i()},[a,s,t]),o}export{u};
//# sourceMappingURL=b0814017.js.map
