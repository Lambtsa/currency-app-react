(this["webpackJsonpcurrency-app-react"]=this["webpackJsonpcurrency-app-react"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),r=c.n(a),i=(c(9),c.p+"static/media/tom-lamb.04182375.svg"),l=(c(10),c(0)),j=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{type:"submit",className:"switch",children:[Object(l.jsx)("input",{type:"checkbox",className:"switch-checkbox",name:"themeToggle",id:"themeToggle"}),Object(l.jsxs)("label",{className:"switch-label",htmlFor:"themeToggle",children:[Object(l.jsx)("span",{className:"switch-inner"}),Object(l.jsx)("span",{className:"switch-switch"})]})]})})},o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("nav",{className:"header__container",children:[Object(l.jsx)("img",{className:"header__img",src:i,alt:"Tom Lamb logo: Yellow initials in a dark coloured container"}),Object(l.jsx)("h1",{className:"header__title",children:"Currencies"}),Object(l.jsx)(j,{})]})})})},h=c(3),b=function(e){var t=e.details;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("article",{className:"article",children:[Object(l.jsxs)("div",{className:"article__details",children:[Object(l.jsx)("img",{className:"article__img",src:"http://localhost:8080".concat(t.logo),alt:""}),Object(l.jsxs)("div",{className:"article__content",children:[Object(l.jsx)("h2",{className:"article__title",children:t.initials}),Object(l.jsx)("p",{className:"article__subtitle",children:t.name})]})]}),Object(l.jsx)("div",{className:"article__rates",children:Object(l.jsx)("p",{className:"article__subtitle",children:t.rate})})]})})},u=function(){return fetch("https://currency-app-api.herokuapp.com/currencies").then((function(e){return e.json()}))},m=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(60),r=Object(h.a)(a,2),i=r[0],j=r[1];return Object(n.useEffect)((function(){u().then((function(e){s(e.rates)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){var e=setInterval((function(){i>1?j(i-1):(j(60),u().then((function(e){s(e.rates)})).catch((function(e){console.log(e)})))}),1e3);return function(){clearInterval(e)}})),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("main",{children:Object(l.jsxs)("section",{className:"main__container",children:[Object(l.jsx)("p",{className:"counter",children:"".concat(i," seconds until refresh...")}),c&&c.map((function(e){return Object(l.jsx)(b,{details:e},e.name)}))]})})})},d=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{children:"\xa9 2021 Tom Lamb. All rights reserved."})})})};var O=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsx)(m,{}),Object(l.jsx)(d,{})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.f6abff7a.chunk.js.map