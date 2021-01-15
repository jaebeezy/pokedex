(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{134:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(1),a=t.n(c),i=t(24),o=t.n(i),s=t(7),u=t.n(s),p=t(8),l=t(6),f=t(9),b=t.n(f),j=t(4),d=t(5),x=t(11);function m(){var n=Object(j.a)(["\n  width: 40px;\n  height: 40px;\n  margin: 100px auto;\n  background-color: #333;\n\n  border-radius: 100%;\n  -webkit-animation: "," 1s infinite ease-in-out;\n  animation: "," 1s infinite ease-in-out;\n"]);return m=function(){return n},n}function h(){var n=Object(j.a)(["\n0% { \n  -webkit-transform: scale(0);\n  transform: scale(0);\n} 100% {\n  -webkit-transform: scale(1.0);\n  transform: scale(1.0);\n  opacity: 0;\n}"]);return h=function(){return n},n}function O(){var n=Object(j.a)(["\n  background-color: white;\n\n  z-index: 2;\n\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  width: 470px;\n  height: 135px;\n\n  animation: 0.4s ",";\n\n  box-shadow: 2px 2px 20px rgb(211, 211, 211);\n  p {\n    text-transform: capitalize;\n    margin: 0.2rem;\n  }\n\n  div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0.25rem;\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    width: 170px;\n    height: 300px;\n    p {\n      font-size: 7px;\n      margin: 0.1rem;\n    }\n  }\n"]);return O=function(){return n},n}function g(){var n=Object(j.a)(["",""]);return g=function(){return n},n}function v(){var n=Object(j.a)(["\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"]);return v=function(){return n},n}function k(){var n=Object(j.a)(['\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: "Press Start 2P", cursive;\n  height: 100%;\n  width: 100%;\n']);return k=function(){return n},n}function y(){var n=Object(j.a)(["\n  border: 1px solid #ececec;\n  border-radius: 10px;\n  background-color: ",";\n  padding: 5px 10px 5px 10px;\n  text-transform: capitalize;\n  margin: 0.1rem;\n  font-size: 10px;\n"]);return y=function(){return n},n}function w(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 10vh;\n\n  animation: 0.3s "," ease-in;\n\n  &:hover {\n    transform: scale(1.05);\n    cursor: pointer;\n  }\n\n  a {\n    font-size: 6px;\n    text-decoration: none;\n    color: black;\n  }\n"]);return w=function(){return n},n}function B(){var n=Object(j.a)(["\n  color: #333;\n  font-size: 32px;\n  animation: 0.8s ",";\n\n  &:hover {\n    transform: scale(1.05);\n    cursor: pointer;\n  }\n"]);return B=function(){return n},n}function C(){var n=Object(j.a)(["\n  max-width: 200px;\n  max-height: 200px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  animation: 0.8s ",";\n\n  border: 0.5px solid transparent;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  p {\n    font-size: 8px;\n  }\n\n  img {\n    width: 96px;\n    height: 96px;\n\n    &:hover {\n      transform: scale(1.15);\n    }\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(j.a)(["",""]);return z=function(){return n},n}function E(){var n=Object(j.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }"]);return E=function(){return n},n}var F=Object(d.b)(E()),S=Object(d.b)(z(),x.rubberBand),A=d.a.div(C(),S),P=d.a.h1(B(),S),D=d.a.div(w(),F),I={fire:"#fd7d25",water:"#4492C4",grass:"#9BCC50",poison:"#B97FC9",bug:"#729F3F",normal:"#A4ACAF",ground:"#AB9842",flying:"#96d6e8",fairy:"#FDB9E9",fighting:"#D56723",rock:"#dbaa76",psychic:"#F366B9",electric:"#EED536",steel:"#9FB7B8",ice:"#51C4E7",ghost:"#7B62A3",dragon:"#F16E57"},J=d.a.a(y(),(function(n){var e=n.color;return I[e]||"".concat(e)})),_=d.a.div(k()),H=d.a.div(v()),M=Object(d.b)(g(),x.flipInX),W=d.a.div(O(),M),X=Object(d.b)(h()),Y=d.a.div(m(),X,X),q=function(){return Object(r.jsx)(Y,{})},G=function(n){var e=n.url,t=n.name,a=n.image,i=n.num,o=Object(c.useState)([]),s=Object(l.a)(o,2),f=s[0],j=s[1],d=Object(c.useState)(!0),x=Object(l.a)(d,2),m=x[0],h=x[1];return Object(c.useEffect)((function(){return function(){var n=Object(p.a)(u.a.mark((function n(){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.get(e);case 3:t=n.sent,j(t.data),h(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}()(),function(){j([])}}),[e]),Object(r.jsxs)(W,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:a,alt:t}),Object(r.jsxs)("p",{children:["#",i]}),Object(r.jsx)("p",{children:t})]}),m?Object(r.jsx)(q,{}):Object(r.jsxs)("div",{children:[f.types&&f.types.map((function(n){return Object(r.jsx)(J,{color:n.type.name,children:n.type.name},n.type.name)})),Object(r.jsxs)("p",{children:["Height: ",f.height/10,"m"]}),Object(r.jsxs)("p",{children:["Weight: ",f.weight/10,"kg"]}),Object(r.jsxs)("p",{children:["Base experience: ",f.base_experience]})]}),m?Object(r.jsx)(q,{}):Object(r.jsx)("div",{children:f.stats&&f.stats.map((function(n){return Object(r.jsxs)("p",{children:[n.stat.name,": ",n.base_stat]},n.stat.name)}))})]})},K=function(n){var e=n.name,t=n.url,a=n.image,i=n.num,o=Object(c.useState)(!0),s=Object(l.a)(o,2),u=s[0],p=s[1];return Object(r.jsxs)(A,{onClick:function(){p(!u)},children:[Object(r.jsx)("img",{src:a,alt:"".concat(e)}),Object(r.jsx)("p",{children:e}),u?null:Object(r.jsx)(G,{name:e,url:t,image:a,num:i})]})},L=function(){return Object(r.jsx)(D,{children:Object(r.jsx)("a",{target:"_blank",href:"https://jae-young.com",rel:"noreferrer",children:"Created by Jae Young \xa9 2021"})})},N=t(131),Q=function(){var n=Object(c.useState)([]),e=Object(l.a)(n,2),t=e[0],a=e[1],i=Object(c.useState)(!0),o=Object(l.a)(i,2),s=o[0],f=o[1];Object(c.useEffect)((function(){(function(){var n=Object(p.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.get("https://pokeapi.co/api/v2/pokemon?limit=151/");case 3:e=n.sent,a(e.data.results),f(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}})()()}),[]);return Object(r.jsxs)(_,{children:[Object(r.jsx)(P,{children:"Pok\xe9dex"}),s?Object(r.jsx)(q,{}):Object(r.jsx)(H,{children:t.map((function(n,e){return Object(r.jsx)(K,{name:N.startCase(n.name),image:(t=e,"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png")),url:n.url,num:e+1},n.url);var t}))}),Object(r.jsx)(L,{})]})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.d6aedfa2.chunk.js.map