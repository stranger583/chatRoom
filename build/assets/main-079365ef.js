import{r as _,j as o,s as L,g as p,a as x,c as h,B as j,R as m,b as e,C as u}from"./Chat-c892f74e.js";const P="_root_nfz0t_1",f="_LoginPage_nfz0t_16",v="_LoginPage_container_nfz0t_19",r={root:P,LoginPage:f,LoginPage_container:v},N="_LoginWrapper_q0dc7_1",y="_Login_q0dc7_1",w="_Login_logo_q0dc7_14",R="_Login_forgetPassword_q0dc7_22",q="_Login_or_q0dc7_31",D="_signUp_q0dc7_53",n={LoginWrapper:N,Login:y,Login_logo:w,Login_forgetPassword:R,Login_or:q,signUp:D};function E(){const[g,c]=_.useState();g&&location.replace("../../Instagram");const l=d=>{d.preventDefault(),L(x,p).then(s=>{const i=s.user.displayName,t=s.user.email;if(i===null||t===null)return;const a={displayName:i,email:t};c(a),localStorage.setItem("googleLoginData",JSON.stringify(a))})};return o.jsxs("div",{className:n.LoginWrapper,children:[o.jsxs("div",{className:n.Login,children:[o.jsx("div",{className:n.Login_logo,children:"PROTOTYPE"}),o.jsxs("form",{action:"",children:[o.jsx("div",{className:n.Login_inputText,children:o.jsx("input",{type:"text",placeholder:"Email"})}),o.jsx("div",{className:n.Login_inputText,children:o.jsx("input",{type:"password",placeholder:"Password"})}),o.jsx("div",{children:o.jsx("button",{children:"Login"})}),o.jsx("div",{className:n.Login_or,children:o.jsx("span",{children:"或"})}),o.jsx("div",{children:o.jsx("button",{onClick:l,children:"GoogleLogin"})})]}),o.jsx("a",{href:"",className:n.Login_forgetPassword,children:"忘記密碼"})]}),o.jsx("div",{className:n.signUp,children:o.jsx("div",{children:o.jsxs("p",{children:["沒有帳號嗎 ? ",o.jsx("a",{children:"註冊"})]})})})]})}function U(){return o.jsx("div",{className:r.LoginPage,children:o.jsx("div",{className:r.LoginPage_container,children:o.jsxs(m,{children:[o.jsx(e,{path:"/profile",element:o.jsx("div",{children:"Profile"})}),o.jsx(e,{path:"/register",element:o.jsx(u,{})}),o.jsx(e,{path:"*",element:o.jsx(E,{})})]})})})}const W=h(document.getElementById("root"));W.render(o.jsx(j,{children:o.jsx(U,{})}));
