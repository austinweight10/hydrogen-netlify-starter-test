import{j as o}from"./index.fcab2dec.js";function i(t){return o("button",{className:"text-primary/50",...t,onClick:()=>{fetch("/account/logout",{method:"POST"}).then(()=>{typeof(t==null?void 0:t.onClick)=="function"&&t.onClick(),window.location.href="/"})},children:"Logout"})}export{i as LogoutButton};
//# sourceMappingURL=18b85e0e.js.map
