(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),u=n(14),i=n(3),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return o.a.createElement("li",{className:"note"},e.content,o.a.createElement("button",{onClick:n},a," "))},m=function(t){var e=t.message;return null===e?null:o.a.createElement("div",{className:"error"},e)},s=n(2),f=n.n(s),p=function(){var t=f.a.get("/api/notes"),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},d=function(t){return f.a.post("/api/notes",t).then((function(t){return t.data}))},v=function(t,e){return f.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},h=function(t){var e=Object(a.useState)([]),n=Object(i.a)(e,2),r=n[0],c=n[1],s=Object(a.useState)(""),f=Object(i.a)(s,2),h=f[0],b=f[1],g=Object(a.useState)(!0),E=Object(i.a)(g,2),O=E[0],j=E[1],k=Object(a.useState)("some error happened..."),S=Object(i.a)(k,2),w=S[0],y=S[1];Object(a.useEffect)((function(){p().then((function(t){c(t)}))}),[]),console.log("render",r.length,"notes");var I=O?r:r.filter((function(t){return!0===t.important}));return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(m,{message:w}),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return j(!O)}},"show ",O?"important":"all")),o.a.createElement("ul",null,I.map((function(t,e){return o.a.createElement(l,{key:e,note:t,toggleImportance:function(){return function(t){var e=r.find((function(e){return e.id===t})),n=Object(u.a)({},e,{important:!e.important});v(t,n).then((function(e){c(r.map((function(n){return n.id!==t?n:e})))})).catch((function(t){y("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){y(null)}),5e3)}))}(t.id)}})}))),o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:h,date:(new Date).toISOString(),important:Math.random()>.5,id:r.length+1};d(e).then((function(t){c(r.concat(t)),b("")})),c(r.concat(e)),b("")}},o.a.createElement("input",{value:h,onChange:function(t){console.log(t.target.value),b(t.target.value)}}),o.a.createElement("button",{type:"submit"},"save")))};n(37);c.a.render(o.a.createElement(h,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.85780acc.chunk.js.map