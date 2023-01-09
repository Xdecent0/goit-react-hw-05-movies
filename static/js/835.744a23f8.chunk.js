"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[835],{510:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(87),a="MovieList_list__yjDCC",c="MovieList_title__QyMtJ",u=n(184),o=function(e){var t=e.movies,n=e.prevLocation;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:a,children:t.map((function(e){var t=e.id,a=e.title;return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:n},children:(0,u.jsx)("span",{className:c,children:a})})},t)}))})})}},835:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(439),a=n(689),c=n(791),u=n(87),o="SearchBar_searchForm__V6XO6",s="SearchBar_searchInput__S8ff+",i="SearchBar_searchButton__hgPYE",f=n(184),l=function(e){var t=e.onSearch,n=(0,c.useState)(""),a=(0,r.Z)(n,2),u=a[0],l=a[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===u.trim()&&alert("Enter the film title"),t(u),l("")},className:o,children:[(0,f.jsx)("input",{type:"text",name:"searchQuery",value:u,autoComplete:"off",autoFocus:!0,placeholder:"Type to search",onChange:function(e){l(e.target.value.toLowerCase())},className:s}),(0,f.jsx)("button",{type:"submit",className:i,children:"Search"})]})})},p=n(510),h=n(515),v=function(){var e=(0,u.lr)(),t=(0,r.Z)(e,2),n=t[0],o=t[1],s=(0,c.useState)([]),i=(0,r.Z)(s,2),v=i[0],d=i[1],m=(0,c.useState)(""),g=(0,r.Z)(m,2),_=g[0],x=g[1],y=(0,c.useState)(!1),Z=(0,r.Z)(y,2),k=Z[0],w=Z[1],S=(0,a.TH)(),b=n.get("query");return(0,c.useEffect)((function(){if(b){w(!0),(0,h.q)(b).then((function(e){e.length||alert("No movies found!"),d(e)})).catch((function(e){x("Ooops. Try again"),console.log(e)})).finally(w(!1))}}),[b]),(0,f.jsxs)(f.Fragment,{children:[k&&"Loading ...",_&&(0,f.jsx)("div",{children:_}),(0,f.jsx)(l,{onSearch:function(e){o({query:"".concat(e)})}}),v&&(0,f.jsx)(p.Z,{movies:v,prevLocation:S})]})}},515:function(e,t,n){n.d(t,{Hg:function(){return s},TP:function(){return f},au:function(){return l},q:function(){return i},tx:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(263),o="874182b6b3aecb13c206a219dffff167";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,u.Z.get("/trending/movie/week?api_key=".concat(o,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("/search/movie?api_key=".concat(o,"&page=").concat(n,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=835.744a23f8.chunk.js.map