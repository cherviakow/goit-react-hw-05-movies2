"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[654],{924:function(n,t,e){e.d(t,{Df:function(){return u},TP:function(){return p},g4:function(){return s},n8:function(){return d},zv:function(){return f}});var r=e(861),a=e(687),o=e.n(a),i=e(340),c=new URLSearchParams({api_key:"d8fff794203ae9c9fd4883749cedddba",language:"en-US"});i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/week?".concat(c));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?".concat(c,"&query=").concat(t));case 2:return e=n.sent,r=e.data,console.log(r.results),n.abrupt("return",r.results);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?").concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?").concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?").concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},126:function(n,t,e){e.d(t,{e:function(){return i}});var r=e(689),a=e(225),o=e(184),i=function(n){var t=n.movies,e=(0,r.TH)();return(0,o.jsx)(a.im,{children:(0,o.jsx)(a.B7,{children:t.map((function(n){var t=n.id,r=n.title,i=n.original_name,c=n.poster_path;return(0,o.jsx)(a.H2,{children:(0,o.jsxs)(a.up,{to:"/movies/".concat(t),state:{from:e},children:[c?(0,o.jsx)(a.SR,{src:"https://image.tmdb.org/t/p/w500/".concat(c)}):(0,o.jsx)(a._0,{}),(0,o.jsx)(a._V,{children:null!==r&&void 0!==r?r:i})]})},t)}))})})}},225:function(n,t,e){e.d(t,{B7:function(){return x},H2:function(){return h},SR:function(){return g},_0:function(){return b},_V:function(){return m},im:function(){return w},up:function(){return v}});var r,a,o,i,c,u,s,p=e(168),f=e(87),d=e(795),l=e(696),x=d.Z.ul(r||(r=(0,p.Z)(["\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),h=d.Z.li(a||(a=(0,p.Z)(["\n  flex-basis: calc((100% - 100px) / 5);\n  height: 420px;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: var(--bg);\n  box-shadow: var(--main-shadow);\n  /* @media only screen and (min-width: 768px) {\n    min-height: 390px;\n  } */\n"]))),v=(0,d.Z)(f.rU)(o||(o=(0,p.Z)(["\n  object-fit: cover;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: space-around; */\n  height: 100%;\n\n  &:hover img {\n    filter: grayscale(0);\n  }\n\n  &:hover p {\n    color: var(--accent);\n  }\n"]))),g=d.Z.img(i||(i=(0,p.Z)(["\n  display: block;\n  height: 330px;\n  max-width: 100%;\n  margin-bottom: 5px;\n  filter: grayscale(0.4);\n\n  transition: all 200ms ease-in-out;\n"]))),m=d.Z.p(c||(c=(0,p.Z)(["\n  display: block;\n  height: auto;\n  padding: 10px 8px;\n  font-weight: 500;\n  margin: auto;\n  font-size: 8px;\n  text-align: center;\n  transition: all 200ms ease-in-out;\n  @media only screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),b=(0,d.Z)(l.boB)(u||(u=(0,p.Z)(["\n  width: 200px;\n  height: 330px;\n"]))),w=d.Z.div(s||(s=(0,p.Z)(["\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n"])))},654:function(n,t,e){e.r(t),e.d(t,{Movies:function(){return m},default:function(){return b}});var r,a,o,i=e(439),c=e(791),u=e(87),s=e(924),p=e(168),f=e(795),d=f.Z.form(r||(r=(0,p.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  \n"]))),l=f.Z.input(a||(a=(0,p.Z)(["\n  padding: 13px 20px;\n  width: 300px;\n  border-radius: 4px;\n\n  font-size: 18px;\n  color: var(--secondary);\n\n  box-shadow: var(--inset-shadow);\n  border: none;\n\n  :focus {\n    outline: 3px solid var(--bg);\n    box-shadow: 0px 0px 0px 6px var(--accent);\n  }\n"]))),x=f.Z.button(o||(o=(0,p.Z)(["\n  padding: 8px 14px;\n\n  font-weight: 700;\n  font-size: 22px;\n\n  border-radius: 4px;\n\n  border: none;\n  color: var(--accent);\n  background-color: var(--bg);\n  box-shadow: var(--main-shadow);\n\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n\n  :hover,\n  :focus-visible {\n    color: var(--bg);\n    background-color: var(--accent);\n  }\n\n  :focus {\n    outline: 3px solid var(--bg);\n    box-shadow: 0px 0px 0px 6px var(--accent);\n  }\n"]))),h=e(184),v=function(n){var t=n.onChange,e=n.onSubmit;return(0,h.jsxs)(d,{onSubmit:e,children:[(0,h.jsx)(l,{type:"text",onChange:t}),(0,h.jsx)(x,{children:"Search"})]})},g=e(126),m=function(){var n=(0,c.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,c.useState)(""),o=(0,i.Z)(a,2),p=o[0],f=o[1],d=(0,u.lr)(),l=(0,i.Z)(d,2),x=l[0],m=l[1];(0,c.useEffect)((function(){var n,t=null!==(n=x.get("query"))&&void 0!==n?n:"";t&&(0,s.g4)(t).then(r)}),[x]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{onChange:function(n){f(n.target.value)},onSubmit:function(n){n.preventDefault(),m(""!==p?{query:p}:{})}}),(0,h.jsx)(g.e,{movies:e})]})},b=m}}]);
//# sourceMappingURL=654.4a30251e.chunk.js.map