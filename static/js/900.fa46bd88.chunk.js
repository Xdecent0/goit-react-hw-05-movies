"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[900],{900:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s="Cast_castList__ARoWn",i="Cast_castItem__-Jcfe",o=n(791),p=n(689),f=n(515),l=n(184),d=function(){var e=(0,p.UO)().movieId,t=(0,o.useState)([]),n=(0,a.Z)(t,2),c=n[0],d=n[1],v=(0,o.useState)(null),h=(0,a.Z)(v,2),g=h[0],m=h[1],x=(0,o.useState)(!1),k=(0,a.Z)(x,2),w=k[0],_=k[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,_(!0),t.next=4,(0,f.au)(e);case 4:n=t.sent,d(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),m("Try again.");case 11:return t.prev=11,_(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,l.jsxs)(l.Fragment,{children:[w&&"Loading...",g&&(0,l.jsx)("div",{children:g}),(0,l.jsx)("ul",{className:s,children:c.map((function(e){return(0,l.jsxs)("li",{className:i,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.profile_path),alt:"".concat(e.name," portrait")}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:["Name: ",e.name]}),(0,l.jsxs)("p",{children:["Character: ",e.character]})]})]},e.id)}))})]})}},515:function(e,t,n){n.d(t,{Hg:function(){return i},TP:function(){return p},au:function(){return f},q:function(){return o},tx:function(){return l}});var r=n(861),a=n(757),c=n.n(a),u=n(263),s="874182b6b3aecb13c206a219dffff167";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,u.Z.get("/trending/movie/week?api_key=".concat(s,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("/search/movie?api_key=".concat(s,"&page=").concat(n,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=900.fa46bd88.chunk.js.map