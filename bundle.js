!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!j[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--b&&0===g&&S()}(e,t),n&&n(e,t)};var t,i=!0,r="fb85879d0bd93a7bc1aa",o={},l=[],a=[];function s(e){var n=C[e];if(!n)return D;var i=function(i){return n.hot.active?(C[i]?-1===C[i].parents.indexOf(e)&&C[i].parents.push(e):(l=[e],t=i),-1===n.children.indexOf(i)&&n.children.push(i)):(console.warn("[HMR] unexpected require("+i+") from disposed module "+e),l=[]),D(i)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(n){D[e]=n}}};for(var o in D)Object.prototype.hasOwnProperty.call(D,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(i,o,r(o));return i.e=function(e){return"ready"===u&&p("prepare"),g++,D.e(e).then(n,(function(e){throw n(),e}));function n(){g--,"prepare"===u&&(y[e]||_(e),0===g&&0===b&&S())}},i.t=function(e,n){return 1&n&&(e=i(e)),D.t(e,-2&n)},i}function d(n){var i={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:t!==n,active:!0,accept:function(e,n){if(void 0===e)i._selfAccepted=!0;else if("function"==typeof e)i._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)i._acceptedDependencies[e[t]]=n||function(){};else i._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)i._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)i._declinedDependencies[e[n]]=!0;else i._declinedDependencies[e]=!0},dispose:function(e){i._disposeHandlers.push(e)},addDisposeHandler:function(e){i._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=i._disposeHandlers.indexOf(e);n>=0&&i._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(h={})[n]=e[n],p("ready");break;case"ready":$(n);break;case"prepare":case"check":case"dispose":case"apply":(m=m||[]).push(n)}},check:k,apply:O,status:function(e){if(!e)return u;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var n=c.indexOf(e);n>=0&&c.splice(n,1)},data:o[n]};return t=void 0,i}var c=[],u="idle";function p(e){u=e;for(var n=0;n<c.length;n++)c[n].call(null,e)}var f,h,v,m,b=0,g=0,y={},w={},j={};function x(e){return+e+""===e?+e:e}function k(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return i=e,p("check"),(n=1e4,n=n||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var i=new XMLHttpRequest,o=D.p+""+r+".hot-update.json";i.open("GET",o,!0),i.timeout=n,i.send(null)}catch(e){return t(e)}i.onreadystatechange=function(){if(4===i.readyState)if(0===i.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===i.status)e();else if(200!==i.status&&304!==i.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(i.responseText)}catch(e){return void t(e)}e(n)}}}))).then((function(e){if(!e)return p(E()?"ready":"idle"),null;w={},y={},j=e.c,v=e.h,p("prepare");var n=new Promise((function(e,n){f={resolve:e,reject:n}}));h={};return _(0),"prepare"===u&&0===g&&0===b&&S(),n}));var n}function _(e){j[e]?(w[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=D.p+""+e+"."+r+".hot-update.js",document.head.appendChild(n)}(e)):y[e]=!0}function S(){p("ready");var e=f;if(f=null,e)if(i)Promise.resolve().then((function(){return O(i)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(x(t));e.resolve(n)}}function O(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function n(i){var a,s,d,c,u;function f(e){for(var n=[e],t={},i=n.map((function(e){return{chain:[e],id:e}}));i.length>0;){var r=i.pop(),o=r.id,l=r.chain;if((c=C[o])&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:l,moduleId:o};if(c.hot._main)return{type:"unaccepted",chain:l,moduleId:o};for(var a=0;a<c.parents.length;a++){var s=c.parents[a],d=C[s];if(d){if(d.hot._declinedDependencies[o])return{type:"declined",chain:l.concat([s]),moduleId:o,parentId:s};-1===n.indexOf(s)&&(d.hot._acceptedDependencies[o]?(t[s]||(t[s]=[]),b(t[s],[o])):(delete t[s],n.push(s),i.push({chain:l.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function b(e,n){for(var t=0;t<n.length;t++){var i=n[t];-1===e.indexOf(i)&&e.push(i)}}E();var g={},y=[],w={},k=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var S;u=x(_),S=h[_]?f(u):{type:"disposed",moduleId:_};var O=!1,$=!1,M=!1,P="";switch(S.chain&&(P="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":i.onDeclined&&i.onDeclined(S),i.ignoreDeclined||(O=new Error("Aborted because of self decline: "+S.moduleId+P));break;case"declined":i.onDeclined&&i.onDeclined(S),i.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+P));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(S),i.ignoreUnaccepted||(O=new Error("Aborted because "+u+" is not accepted"+P));break;case"accepted":i.onAccepted&&i.onAccepted(S),$=!0;break;case"disposed":i.onDisposed&&i.onDisposed(S),M=!0;break;default:throw new Error("Unexception type "+S.type)}if(O)return p("abort"),Promise.reject(O);if($)for(u in w[u]=h[u],b(y,S.outdatedModules),S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,u)&&(g[u]||(g[u]=[]),b(g[u],S.outdatedDependencies[u]));M&&(b(y,[S.moduleId]),w[u]=k)}var H,I=[];for(s=0;s<y.length;s++)u=y[s],C[u]&&C[u].hot._selfAccepted&&w[u]!==k&&!C[u].hot._selfInvalidated&&I.push({module:u,parents:C[u].parents.slice(),errorHandler:C[u].hot._selfAccepted});p("dispose"),Object.keys(j).forEach((function(e){!1===j[e]&&function(e){delete installedChunks[e]}(e)}));var T,A,q=y.slice();for(;q.length>0;)if(u=q.pop(),c=C[u]){var B={},L=c.hot._disposeHandlers;for(d=0;d<L.length;d++)(a=L[d])(B);for(o[u]=B,c.hot.active=!1,delete C[u],delete g[u],d=0;d<c.children.length;d++){var R=C[c.children[d]];R&&((H=R.parents.indexOf(u))>=0&&R.parents.splice(H,1))}}for(u in g)if(Object.prototype.hasOwnProperty.call(g,u)&&(c=C[u]))for(A=g[u],d=0;d<A.length;d++)T=A[d],(H=c.children.indexOf(T))>=0&&c.children.splice(H,1);p("apply"),void 0!==v&&(r=v,v=void 0);for(u in h=void 0,w)Object.prototype.hasOwnProperty.call(w,u)&&(e[u]=w[u]);var U=null;for(u in g)if(Object.prototype.hasOwnProperty.call(g,u)&&(c=C[u])){A=g[u];var W=[];for(s=0;s<A.length;s++)if(T=A[s],a=c.hot._acceptedDependencies[T]){if(-1!==W.indexOf(a))continue;W.push(a)}for(s=0;s<W.length;s++){a=W[s];try{a(A)}catch(e){i.onErrored&&i.onErrored({type:"accept-errored",moduleId:u,dependencyId:A[s],error:e}),i.ignoreErrored||U||(U=e)}}}for(s=0;s<I.length;s++){var F=I[s];u=F.module,l=F.parents,t=u;try{D(u)}catch(e){if("function"==typeof F.errorHandler)try{F.errorHandler(e)}catch(n){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),i.ignoreErrored||U||(U=n),U||(U=e)}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:u,error:e}),i.ignoreErrored||U||(U=e)}}if(U)return p("fail"),Promise.reject(U);if(m)return n(i).then((function(e){return y.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}));return p("idle"),new Promise((function(e){e(y)}))}(n=n||{})}function E(){if(m)return h||(h={}),m.forEach($),m=void 0,!0}function $(n){Object.prototype.hasOwnProperty.call(h,n)||(h[n]=e[n])}var C={};function D(n){if(C[n])return C[n].exports;var t=C[n]={i:n,l:!1,exports:{},hot:d(n),parents:(a=l,l=[],a),children:[]};return e[n].call(t.exports,t,t.exports,s(n)),t.l=!0,t.exports}D.m=e,D.c=C,D.d=function(e,n,t){D.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,n){if(1&n&&(e=D(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(D.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)D.d(t,i,function(n){return e[n]}.bind(null,i));return t},D.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(n,"a",n),n},D.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},D.p="",D.h=function(){return r},s("./src/index.js")(D.s="./src/index.js")}({"./node_modules/css-loader/dist/cjs.js!./src/reset.css":function(e,n,t){"use strict";t.r(n);var i=t("./node_modules/css-loader/dist/runtime/api.js"),r=t.n(i)()(!1);r.push([e.i,"\n\n    /* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n  ",""]),n.default=r},"./node_modules/css-loader/dist/cjs.js!./src/style.css":function(e,n,t){"use strict";t.r(n);var i=t("./node_modules/css-loader/dist/runtime/api.js"),r=t.n(i),o=t("./node_modules/css-loader/dist/runtime/getUrl.js"),l=t.n(o),a=t("./src/assets/diner1.jpg"),s=r()(!1);s.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Cherry+Cream+Soda&family=Oregano&family=Warnes&display=swap);"]);var d=l()(a.a);s.push([e.i,"/*     font-family: 'Cherry Cream Soda', cursive;\n    font-family: 'Oregano', cursive;\n    font-family: 'Warnes', cursive;\n    */   \n    \n\n    body {\n        background-image: url("+d+");\n        background-color: beige;\n    }\n    \n    .header {\n        color: black;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        height: 100px;\n        background-color: rgba(220,218,215,1);\n        font-family: 'Warnes', cursive;\n    }\n    \n    \n    .logo {\n        font-size: 3.5rem;\n        padding-left: 50px;\n    }\n    \n    .menu-bar {\n        display: flex;\n        font-size: 2rem;  \n        padding-right: 20px;\n    }\n    \n    .menu-bar div {\n        padding-right: 15px;\n    }\n\n    .menu-bar div:hover {\n        color: purple;\n    }\n    \n    \n    \n    #content {\n        height: 650px;\n        width: 1000px;\n        background-color:  rgb(241, 224, 243, 0.9);\n        margin: 0 auto;\n        margin-top: 40px;\n        display: flex;\n        justify-content: center;\n        font-family: 'Cherry Cream Soda', cursive;\n    }\n\n    .menu-tabs {\n        background-color:  rgb(241, 224, 243, 0.9);\n        position: relative;\n        min-height: 350px;\n        width: 900px;\n        clear: both;    \n        top: 30px;\n        \n    }\n    .tab {\n        float: left;\n    }\n\n    .tab label {\n        background: #eee;\n        padding: 10px;\n        border: 1px solid #ccc;\n        margin-left: -1px;\n        position: relative;\n        left: 1px;\n    }\n\n    .tab [type=radio] {\n        display: none;\n    }\n\n\n    .welcome-page {\n        text-align: center;\n        padding-top: 30px;\n    }\n\n    .welcome-page > * {\n        padding: 10px;\n    }\n\n    .welcome-page table {\n        margin: 0 auto;\n    }\n\n    .menu-page {\n        position: absolute;\n        top: 28px;\n        left: 0;\n        background: white;\n        right: 0;\n        bottom: 0;\n        padding: 20px;\n        border: 1px solid #ccc;\n        margin: 20px;\n    }\n\n    [type=radio]:checked ~ label {\n        background: white;\n        border-bottom: 1px solid white;\n        z-index: 2;\n    }\n\n    [type=radio]:checked ~ label ~ .menu-page {\n        z-index: 1;\n    }\n\n    .menu-items {\n        display: grid;\n        grid-template-columns: 3fr 1fr 3fr 1fr;\n    }\n\n    .items-col li, .price li {\n        padding-bottom: 10px;\n        padding-top: 10px;\n        border-bottom: 1px solid peachpuff;\n    }\n\n    .gallery {\n        margin-top: 50px;\n       position: relative;\n       width: 900px;\n       border: 1px solid black;\n       display: flex;\n\n      /* clear: both; */\n    }\n\n    .pic-container {\n        width: 250px;\n        height: 200px;\n        border: 1px solid green;\n        /* background-image: url('./assets/food1.jpg'); */\n    }\n\n    .contact-details {\n        display: grid;\n        grid-template-columns: 66% 33%;\n        padding-top: 20px;\n    }\n\n    .map {\n      \n    }",""]),n.default=s},"./node_modules/css-loader/dist/runtime/api.js":function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var r=(l=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(s," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([r]).join("\n")}var l,a,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(r[l]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);i&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},"./node_modules/css-loader/dist/runtime/getUrl.js":function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":function(e,n,t){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),l=[];function a(e){for(var n=-1,t=0;t<l.length;t++)if(l[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},i=[],r=0;r<e.length;r++){var o=e[r],s=n.base?o[0]+n.base:o[0],d=t[s]||0,c="".concat(s," ").concat(d);t[s]=d+1;var u=a(c),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(l[u].references++,l[u].updater(p)):l.push({identifier:c,updater:m(p,n),references:1}),i.push(c)}return i}function d(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var l=o(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(n)}return n}var c,u=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function p(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(n,r);else{var o=document.createTextNode(r),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(o,l[n]):e.appendChild(o)}}function f(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,v=0;function m(e,n){var t,i,r;if(n.singleton){var o=v++;t=h||(h=d(n)),i=p.bind(null,t,o,!1),r=p.bind(null,t,o,!0)}else t=d(n),i=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=a(t[i]);l[r].references--}for(var o=s(e,n),d=0;d<t.length;d++){var c=a(t[d]);0===l[c].references&&(l[c].updater(),l.splice(c,1))}t=o}}}},"./src/assets/diner1.jpg":function(e,n,t){"use strict";n.a=t.p+"091f2e8adba7d9064af4c1ba9dcc37ee.jpg"},"./src/index.js":function(e,n,t){"use strict";t.r(n);t("./src/reset.css"),t("./src/style.css"),t("./src/assets/diner1.jpg"),t.p;var i=()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("added-content"),n.innerHTML="\n    <div class='welcome-page'>\n    <h1>Welcome to the World Famous BB Diner</h1>\n    <p>Serving delicious, hearty inexpensive food to the people of Deermeadow, Washington since\n        1989. We pride ourselves that all our food is home made from the best available ingredients.\n    </p>\n    <p>Opening Hours</p>\n    <table>\n        <tr><td>Monday:</td> <td>24hrs</td></tr>\n        <tr><td>Tuesday:</td> <td>24hrs</td></tr>\n        <tr><td>Wednesday:</td> <td>24hrs</td></tr>\n        <tr><td>Thursday:</td> <td>24hrs</td></tr>\n        <tr><td>Friday:</td> <td>24hrs</td></tr>\n        <tr><td>Saturday:</td> <td>24hrs</td></tr>\n        <tr><td>Sunday:</td> <td>Closed</td></tr>\n    </table>\n    \n    <p>Delivery Available - Events Catered</p>\n    <p>Our speciality is Blueberry Pie</p>\n    </div>\n    ",e.appendChild(n)};var r=()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("added-content"),n.innerHTML='\n    <div class="menu-tabs">\n    \n    <div class="tab">\n      <input type="radio" id="breakfast" name="tab-group-1" checked>\n       <label for="breakfast">Breakfast</label>\n        \n        <div class="menu-page">\n         <div class="menu-items">\n      \n           <div class="items-col">\n               <ul>\n                 <li>2 Eggs, Any Style</li>\n                 <li>The "Double" B</li>\n                 <li>Omlette with Cheese</li>\n                 <li>Pancakes and Waffles</li>\n                 <li>Steak and Eggs</li>\n                </ul>\n            </div>\n        \n            <div class="price">\n                <ul>\n                  <li>$4.00</li>\n                  <li>$7.00</li>\n                  <li>$5.25</li>\n                  <li>$5.75</li>\n                  <li>$9.95</li>\n                </ul>\n            </div>\n        \n            <div class="items-col">\n                <ul>\n                  <li>French Toast</li>\n                  <li>Lumberjack Special</li>\n                  <li>Woodsman\'s Combo Breakfast</li>\n                  <li>Oatmeal</li>\n                  <li></li>\n                 </ul>\n            </div>\n        \n            <div class="price">\n                <ul>\n                 <li>$6.75</li>\n                 <li>$6.25</li>\n                 <li>$9.95</li>\n                 <li>$4.50</li>\n                 <li></li>\n                 </ul>\n            </div>\n          </div>\n\n          <div>\n            All above served with toast, hash browns and bacon or Sausage\n          </div>  \n       </div> \n    </div>\n     \n    <div class="tab">\n     <input type="radio" id="burgers" name="tab-group-1">\n         <label for="burgers">Burgers & Sides</label>\n  \n            <div class="menu-page">\n             <div class="menu-items">\n                \n              <div class="items-col">\n               <ul>\n                <li>Quarter Pounder Hamburger</li>\n                <li>BB Special</li>\n                <li>Chicken Steak Burger</li>\n                <li>Roast Beef</li>\n                <li>Ham and Cheese</li>\n               </ul>\n              </div>\n             \n             <div class="price">\n                <ul>\n                 <li>$7.85</li>\n                 <li>$7.95</li>\n                 <li>$6.50</li>\n                 <li>$7.95</li>\n                 <li>$5.50</li>\n                </ul>\n            </div>\n   \n           <div class="items-col">\n             <ul>\n                <li>French Fries</li>\n                <li>Onion Rings</li>\n                <li>Soup of the Day</li>\n                <li>Salad</li>\n                <li></li>\n             </ul>\n            </div>\n\n            <div class="price">\n             <ul>\n              <li>$3.75</li>\n              <li>$3.50</li>\n              <li>$3.75</li>\n              <li>$3.95</li>\n              <li></li>\n             </ul>\n           </div>\n\n        </div>    \n\n            <div>\n                All Burgers Served with Fries or Onion Rings\n            </div>\n       </div> \n    </div>\n     \n     <div class="tab">\n       <input type="radio" id="specials" name="tab-group-1">\n        <label for="specials">Specials</label>\n       \n       <div class="menu-page">\n       <div class="menu-items">\n   \n       <div class="items-col">\n         <ul>\n             <li>B.B.Q Ribs</li>\n             <li>Corned Beef</li>\n             <li>Spaghetti & Meatballs</li>\n             <li>Fish Special</li>\n             <li>Beef Stew</li>\n         </ul>\n       </div>\n     \n       <div class="price">\n        <ul>\n            <li>$11.00</li>\n            <li>$8.95</li>\n            <li>$8.50</li>\n            <li>$11.25</li>\n            <li>$8.49</li>\n        </ul>\n       </div>\n\n       <div class="items-col">\n        <ul>\n            <li>Roast Chicken</li>\n            <li>Pork Schnitzel</li>\n            <li>Woodsman\'s Gumbo</li>\n            <li>Surf and Turf</li>\n            <li>"T" Bone Steak</li>\n        </ul>\n       </div>\n\n       <div class="price">\n         <ul>\n             <li>$8.75</li>\n             <li>$7.95</li>\n             <li>$6.66</li>\n             <li>$14.00</li>\n             <li>$12.95</li>\n         </ul>\n       </div>\n\n   </div>\n\n\n    </div> \n   </div>\n \n    <div class="tab">\n      <input type="radio" id="drinks" name="tab-group-1">\n      <label for="drinks">Drinks and Deserts</label>\n      \n      <div class="menu-page">\n      <div class="menu-items">\n\n       <div class="items-col">\n         <ul>\n             <li>Coffee or Tea</li>\n             <li>Orange Juice</li>\n             <li>Malt</li>\n             <li>Rootbeer Float</li>\n             <li>Soda</li>\n         </ul>\n        </div>\n\n        <div class="price">\n          <ul>\n              <li>$1.75</li>\n              <li>$2.50</li>\n              <li>$3.50</li>\n              <li>$3.50</li>\n              <li>$2.25</li>\n          </ul>\n        </div>\n\n        <div class="items-col">\n         <ul>\n             <li>Blueberry Pie</li>\n             <li>Cherry Pie</li>\n             <li>Pumpkin Pie</li>\n             <li>LingonBerry Pie</li>\n             <li>Ice Cream Sundae</li>\n         </ul>\n        </div>\n\n        <div class="price">\n          <ul>\n              <li>$2.75</li>\n              <li>$2.25</li>\n              <li>$2.95</li>\n              <li>$2.50</li>\n              <li>$2.00</li>\n          </ul>\n        </div>\n\n       </div>\n       \n       <div>\n        All Pies Served With Ice Cream or Cream\n       </div> \n\n        </div> \n    </div>\n\n    \n    </div>\n    <div class="gallery">\n\n     <div class="pic-container">\n       \n       \n     </div>\n\n\n\n    </div>  \n  \n    ',e.appendChild(n)};var o=()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("added-content"),n.innerHTML='\n    <div class="contact-details">\n    <div class="map">\n    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2676.4478001478856!2d-118.34029938502476!3d47.86965677776303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549dd054fff74921%3A0xb74f072320737f62!2sDavenport%2C%20WA%2099122%2C%20USA!5e0!3m2!1sen!2suk!4v1596298264587!5m2!1sen!2suk" width="500" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>\n\n    </div>\n    <div class="address">\n        <ul>\n            <li>34 Wind River Ave</li>\n            <li>Deer Meadow</li>\n            <li>Washington</li>\n            <li>Tel: 0832 322 334</li>\n        </ul>\n        <p>Email: bbdinerdeermeadow5@gmail.com</p>\n    </div>\n</div>\n    ',e.appendChild(n)};const l=document.querySelector(".home-tab"),a=document.querySelector(".food-menu"),s=document.querySelector(".contact");(()=>{i();const e=e=>{const n=document.querySelector(".added-content");n&&n.remove();switch(e.target.className){case"home-tab":i();break;case"food-menu":r();break;case"contact":o()}};l.addEventListener("click",e),a.addEventListener("click",e),s.addEventListener("click",e)})()},"./src/reset.css":function(e,n,t){var i=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t("./node_modules/css-loader/dist/cjs.js!./src/reset.css");"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},l=i(r,o);if(!r.locals||e.hot.invalidate){var a=r.locals;e.hot.accept("./node_modules/css-loader/dist/cjs.js!./src/reset.css",(function(){"string"==typeof(r=(r=t("./node_modules/css-loader/dist/cjs.js!./src/reset.css")).__esModule?r.default:r)&&(r=[[e.i,r,""]]),function(e,n){if(!e&&n||e&&!n)return!1;var t;for(t in e)if(e[t]!==n[t])return!1;for(t in n)if(!e[t])return!1;return!0}(a,r.locals)?(a=r.locals,l(r)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=r.locals||{}},"./src/style.css":function(e,n,t){var i=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t("./node_modules/css-loader/dist/cjs.js!./src/style.css");"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},l=i(r,o);if(!r.locals||e.hot.invalidate){var a=r.locals;e.hot.accept("./node_modules/css-loader/dist/cjs.js!./src/style.css",(function(){"string"==typeof(r=(r=t("./node_modules/css-loader/dist/cjs.js!./src/style.css")).__esModule?r.default:r)&&(r=[[e.i,r,""]]),function(e,n){if(!e&&n||e&&!n)return!1;var t;for(t in e)if(e[t]!==n[t])return!1;for(t in n)if(!e[t])return!1;return!0}(a,r.locals)?(a=r.locals,l(r)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),e.exports=r.locals||{}}});