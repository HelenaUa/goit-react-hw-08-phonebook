"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[880],{4423:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,o,i,s,c,l=t(2791),d=t(9434),u=t(6907),p=t(3634),x=t(6916),h=function(n){return n.contacts.items},m=function(n){return n.filters.value},f=function(n){return n.contacts.isLoading},g=function(n){return n.contacts.error},b=(0,x.P1)([h,m],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),v=t(168),j=t(6444),y=(t(7021),(0,j.vJ)(r||(r=(0,v.Z)(["\nbody {\n  // margin: 40px 60px;\n  margin: 0 auto;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}"])))),Z=t(9439),C=t(5984),k=t(5705),w=(0,j.ZP)(k.l0)(a||(a=(0,v.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\npadding: 15px;\nborder: 1px solid black;\nwidth: 350px;"]))),P=(0,j.ZP)(k.gN)(o||(o=(0,v.Z)(["\npadding-left:5px;\nheight:30px;\nborder-radius:6px;\nmax-width:320px;"]))),F=j.ZP.button(i||(i=(0,v.Z)(["\nwidth:110px;\npadding: 4px;\nborder: 1px solid black;\nborder-radius:4px;\nbackground-color: white;\ncursor: pointer;\n&:hover,\n&:focus{\n    background-color: lightgray;\n    border: 1px solid gray;"]))),S=j.ZP.label(s||(s=(0,v.Z)(["\ndisplay:flex;\ngap: 5px;\nflex-direction:column;"]))),A=t(184);function N(){var n=(0,l.useState)(""),e=(0,Z.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),o=(0,Z.Z)(a,2),i=o[0],s=o[1],c=(0,d.I0)(),u=(0,d.v9)(h);return(0,A.jsx)(k.J9,{initialValues:{name:"",phone:""},onSubmit:function(n){var e={id:(0,C.x0)(),name:t,phone:i};u.some((function(n){return n.name===t}))?alert("".concat(t," is already in contacts")):(c((0,p.uK)(e)),r(""),s(""))},children:(0,A.jsxs)(w,{autoComplete:"off",children:[(0,A.jsxs)(S,{htmlFor:"name",children:["Name",(0,A.jsx)(P,{type:"text",name:"name",value:t,onChange:function(n){return r(n.currentTarget.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,A.jsx)(k.Bc,{name:"name",component:"div"})]}),(0,A.jsxs)(S,{htmlFor:"phone",children:["Number",(0,A.jsx)(P,{type:"tel",name:"phone",value:i,onChange:function(n){return s(n.currentTarget.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,A.jsx)(k.Bc,{name:"phone",component:"div"})]}),(0,A.jsx)(F,{type:"submit",children:"Add contact"})]})})}var z,B=j.ZP.input(c||(c=(0,v.Z)(["\npadding-left:5px;\nheight:30px;\nborder-radius:6px;\nwidth:320px;"]))),I=t(3165);function q(){var n=(0,d.I0)(),e=(0,d.v9)(m);return(0,A.jsxs)("div",{children:[(0,A.jsx)("h3",{children:"Find contacts by name"}),(0,A.jsx)(B,{type:"text",value:e,onChange:function(e){n((0,I.b)(e.currentTarget.value))}})]})}var D=j.ZP.button(z||(z=(0,v.Z)(["\nmargin-left: 20px;\nborder-radius:4px;\nborder: 1px solid gray;\n&:hover,\n&:focus{\n    background-color: lightgray;"])));function L(n){var e=n.name,t=n.phone,r=n.onDeleteContact;return(0,A.jsxs)("li",{children:[(0,A.jsxs)("span",{children:[e,": "]}),(0,A.jsx)("span",{children:t}),(0,A.jsx)(D,{type:"button",onClick:r,children:"Delete"})]})}function M(){var n=(0,d.I0)(),e=(0,d.v9)(b);return(0,A.jsx)("ul",{style:{paddingLeft:"20px"},children:e.map((function(e){return(0,A.jsx)(L,{name:e.name,phone:e.phone,onDeleteContact:function(){return t=e.id,void n((0,p.GK)(t));var t}},e.name)}))})}function _(){var n=(0,d.I0)(),e=(0,d.v9)(f),t=(0,d.v9)(g);return(0,l.useEffect)((function(){n((0,p.yF)())}),[n]),(0,A.jsxs)(u.B6,{children:[(0,A.jsx)(u.ql,{children:(0,A.jsx)("title",{children:"Your contacts"})}),(0,A.jsxs)("div",{children:[(0,A.jsx)(y,{}),(0,A.jsx)("h1",{children:"Phonebook"}),(0,A.jsx)(N,{}),(0,A.jsx)("h2",{children:"Contacts"}),(0,A.jsx)(q,{}),e&&!t&&(0,A.jsx)("b",{children:"Request in progress..."}),(0,A.jsx)(M,{})]})]})}}}]);
//# sourceMappingURL=880.c96bce76.chunk.js.map