(this["webpackJsonpcurrency-app-react"]=this["webpackJsonpcurrency-app-react"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),r=c.n(s),i=(c(9),c.p+"static/media/tom-lamb.04182375.svg"),l=(c(10),c(2)),o=c(0),j=Object(a.createContext)(),h=function(e){var t=e.children,c=Object(a.useState)(localStorage.theme?JSON.parse(localStorage.theme):"light"),n=Object(l.a)(c,2),s=n[0],r=n[1];Object(a.useEffect)((function(){localStorage.theme=JSON.stringify(s)}),[s]);var i={theme:s,handleThemeToggle:function(){r("light"===s?"dark":"light")}};return Object(o.jsx)(j.Provider,{value:i,children:t})},u=function(){var e=Object(a.useContext)(j),t=e.theme,c=e.handleThemeToggle;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{type:"submit",className:"switch",children:[Object(o.jsx)("input",{type:"checkbox",className:"switch-checkbox",onChange:c,name:"themeToggle",id:"themeToggle",checked:"dark"===t}),Object(o.jsxs)("label",{className:"switch-label",htmlFor:"themeToggle",children:[Object(o.jsx)("span",{className:"switch-inner"}),Object(o.jsx)("span",{className:"switch-switch"})]})]})})},m=function(){var e=Object(a.useContext)(j).theme;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("header",{className:"header ".concat(e),children:Object(o.jsxs)("nav",{className:"header__container",children:[Object(o.jsx)("img",{className:"header__img",src:i,alt:"Tom Lamb logo: Yellow initials in a dark coloured container"}),Object(o.jsx)("h1",{className:"header__title",children:"Currencies"}),Object(o.jsx)(u,{})]})})})},b=function(e){var t=e.details,c=Object(a.useContext)(j).theme;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("article",{className:"article ".concat(c),children:[Object(o.jsxs)("div",{className:"article__details",children:[Object(o.jsx)("img",{className:"article__img",src:"".concat("https://currency-app-api.herokuapp.com/").concat(t.logo),alt:""}),Object(o.jsxs)("div",{className:"article__content",children:[Object(o.jsx)("h2",{className:"article__title",children:t.initials}),Object(o.jsx)("p",{className:"article__subtitle",children:t.name})]})]}),Object(o.jsxs)("div",{className:"article__rates",children:[Object(o.jsx)("p",{className:"article__rate",children:"1 EUR = ".concat(t.rate," ").concat(t.initials," ")}),Object(o.jsx)("p",{className:"article__subtitle ".concat(t.rateDelta>=0?"positive":"negative"),children:t.rateDelta>=0?"+".concat(t.rateDelta,"%"):"".concat(t.rateDelta,"%")})]})]})})},d=function(){return fetch("https://currency-app-api.herokuapp.com/currencies").then((function(e){return e.json()}))},O=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,f=function(){var e=Object(a.useContext)(j).theme,t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!1),i=Object(l.a)(r,2),h=i[0],u=i[1],m=Object(a.useState)(!1),b=Object(l.a)(m,2),d=b[0],f=b[1];Object(a.useEffect)((function(){var e=setTimeout((function(){f(!1)}),3e3);return function(){clearTimeout(e)}}),[d]);return Object(o.jsxs)("section",{className:"form__container ".concat(e),children:[h&&Object(o.jsx)("p",{className:"form__errorMessage",children:"Please enter a valid email address."}),d&&Object(o.jsx)("p",{className:"form__validMessage",children:"Congrats ".concat(n," registered!")}),Object(o.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),!1===O.test(n)?(u(!0),f(!1)):(u(!1),fetch("https://currency-app-api.herokuapp.com/addEmail",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({email:n})}).then((function(){f(!0),s("")})).catch((function(){u(!0),f(!1)})))},children:[Object(o.jsx)("h3",{children:"Receive updates by Email"}),Object(o.jsx)("input",{className:"form__input",type:"text",onChange:function(e){s(e.target.value),u(!1)},value:n,placeholder:"Enter your email"}),Object(o.jsx)("button",{className:"form__btn",type:"submit",children:"Register"})]})]})},p=function(){var e=Object(a.useContext)(j).theme,t=Object(a.useState)([]),c=Object(l.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(60),i=Object(l.a)(r,2),h=i[0],u=i[1],m=Object(a.useState)(!1),O=Object(l.a)(m,2),p=O[0],g=O[1];return Object(a.useEffect)((function(){d().then((function(e){s(e)})).catch((function(){g(!0)}))}),[]),Object(a.useEffect)((function(){var e=setInterval((function(){h>1?u(h-1):(u(60),d().then((function(e){s(e)})).catch((function(){g(!0)})))}),1e3);return function(){clearInterval(e)}})),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("main",{className:"main ".concat(e),children:Object(o.jsxs)("section",{className:"main__container",children:[Object(o.jsx)(f,{}),Object(o.jsx)("p",{className:"counter ".concat(e),children:"".concat(h," seconds until refresh...")}),n&&n.map((function(e){return Object(o.jsx)(b,{details:e},e.name)})),p&&Object(o.jsx)("p",{className:"error__message",children:"There has been an error. Please try again."})]})})})},g=c.p+"static/media/github-dark.2a516804.svg",x=c.p+"static/media/github-light.02f4c054.svg",_=function(){var e=Object(a.useContext)(j).theme;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("footer",{className:"footer ".concat(e),children:Object(o.jsx)("a",{href:"https://github.com/Lambtsa/currency-app-react",rel:"noreferrer",target:"_blank",children:Object(o.jsx)("img",{className:"footer__img",src:"dark"===e?x:g,alt:"Github logo ".concat(e)})})})})};var N=function(){return Object(o.jsxs)(h,{children:[Object(o.jsx)(m,{}),Object(o.jsx)(p,{}),Object(o.jsx)(_,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),v()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.3da55807.chunk.js.map