(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(7),a=t.n(r),s=t(9),o=t(2),l=t(5),i=(t(14),t(8)),j=t(0);var b=function(){var e=Object(c.useState)(i),n=Object(l.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),b=Object(l.a)(a,2),d=b[0],O=b[1],u=Object(c.useState)({name:"",openOnWeekdays:!1,openOnWeekend:!1}),h=Object(l.a)(u,2),p=h[0],k=h[1],m=function(e){console.log(e.currentTarget.id),console.log(e.currentTarget.value),console.log(e.currentTarget.checked),"name"===e.currentTarget.id?k(Object(o.a)(Object(o.a)({},p),{},{name:e.currentTarget.value})):"week"===e.currentTarget.id?k(Object(o.a)(Object(o.a)({},p),{},{openOnWeekdays:e.currentTarget.checked})):"weekends"===e.currentTarget.id&&k(Object(o.a)(Object(o.a)({},p),{},{openOnWeekend:e.currentTarget.checked}))},x=function(e){e.preventDefault()};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Mis clubs"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"filter",children:"Mostrar"}),Object(j.jsxs)("select",{value:d,onChange:function(e){O(e.target.value)},children:[Object(j.jsx)("option",{value:"other",children:"Todos"}),Object(j.jsx)("option",{value:"week",children:"Los que abren entre semana"}),Object(j.jsx)("option",{value:"weekend",children:"Los que abren en fin de semana"})]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("ul",{children:t.filter((function(e){return"week"!==d||!0===e.openOnWeekdays})).filter((function(e){return"weekend"!==d||!0===e.openOnWeekend})).map((function(e,n){return Object(j.jsxs)("li",{id:n,children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"Nombre: "}),""+e.name]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"Abierto entre semana:"}),e.openOnWeekdays?" Si":" No"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"Abierto el fin de semana:"}),e.openOnWeekend?"Si":"No"]}),Object(j.jsx)("button",{onClick:x,children:"X"})]},n)}))})]}),Object(j.jsx)("main",{children:Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"name",children:"Nombre del club"}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",placeholder:" Ej. Rob\xf3tica",onChange:m}),Object(j.jsx)("label",{htmlFor:"week",children:"\xbfAbre entre semana?"}),Object(j.jsx)("input",{type:"checkbox",name:"week",id:"week",onChange:m}),Object(j.jsx)("label",{htmlFor:"weekends",children:"\xbfAbre los fines de semana?"}),Object(j.jsx)("input",{type:"checkbox",name:"weekends",id:"weekends",onChange:m}),Object(j.jsx)("input",{type:"submit",value:"A\xf1adir",onClick:function(e){e.preventDefault(),""!==p.name&&(r([].concat(Object(s.a)(t),[p])),k({name:"",openOnWeekdays:"",openOnWeekend:""})),console.log(t)}})]})})]})};a.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.8fe21516.chunk.js.map