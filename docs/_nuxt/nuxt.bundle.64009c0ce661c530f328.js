webpackJsonp([6],{114:function(t,n,e){"use strict";n.a={}},115:function(t,n,e){"use strict";e.d(n,"b",function(){return w});var r=e(56),o=e.n(r),i=e(38),a=e.n(i),s=e(64),u=e.n(s),c=e(16),p=(e.n(c),e(62)),d=e.n(p),l=e(116),f=(e.n(l),e(3)),h=e(42),A=e.n(h),x=e(118),g=e(65),m=e(119),v=e(66),C=e(125),b=e(128),y=e(67);e.d(n,"a",function(){return v.a});var w=function(){var t=d()(o.a.mark(function t(n){var e,r,i,s,c,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=Object(x.a)(),t.next=4;break;case 4:return r=u()({router:e,_nuxt:{defaultTransition:_,transitions:[_],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?a()({},_,{name:t}):a()({},_,t):_}),this.$options._nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){"string"==typeof(t=t||null)&&(t={statusCode:500,message:t});var n=this._nuxt||this.$options._nuxt;return n.dateErr=Date.now(),n.err=t,t}}},b.a),i=n?n.next:function(t){return r.router.push(t)},s=e.currentRoute,n||(c=Object(y.e)(e.options.base),s=e.resolve(c).route),p=Object(y.d)({isServer:!!n,isClient:!n,route:s,next:i,error:r._nuxt.error.bind(r),req:n?n.req:void 0,res:n?n.res:void 0,beforeRenderFns:n?n.beforeRenderFns:void 0},r),t.abrupt("return",{app:r,router:e});case 10:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}();f.default.component(g.a.name,g.a),f.default.component(m.a.name,m.a),f.default.component(C.a.name,C.a),f.default.use(A.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var _={name:"page",mode:"out-in"}},118:function(t,n,e){"use strict";function r(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:p,routes:[{path:"/",component:a,name:"index"},{path:"/stockwise",component:s,name:"stockwise"},{path:"/epicklist",component:u,name:"epicklist"},{path:"/currencytracker",component:c,name:"currencytracker"}],fallback:!1})}n.a=r;var o=e(3),i=e(41);o.default.use(i.default);var a=function(){return e.e(4).then(e.bind(null,140)).then(function(t){return t.default||t})},s=function(){return e.e(1).then(e.bind(null,141)).then(function(t){return t.default||t})},u=function(){return e.e(2).then(e.bind(null,142)).then(function(t){return t.default||t})},c=function(){return e.e(3).then(e.bind(null,143)).then(function(t){return t.default||t})},p=function(t,n,e){if(e)return e;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r}},119:function(t,n,e){"use strict";e(3);n.a={name:"nuxt-link",functional:!0,render:function(t,n){return t("router-link",n.data,n.children)}}},120:function(t,n,e){var r=e(121);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(40)("38d22a32",r,!0)},121:function(t,n,e){n=t.exports=e(39)(!0),n.push([t.i,".error-page[data-v-4a472eb0]{color:#000;background:#fff;top:0;bottom:0;left:0;right:0;position:absolute;font-family:SF UI Text,Helvetica Neue,Lucida Grande;text-align:center;padding-top:20%}.error-code[data-v-4a472eb0]{display:inline-block;font-size:24px;font-weight:500;vertical-align:top;border-right:1px solid rgba(0,0,0,.298039);margin:0 20px 0 0;padding:10px 23px}.error-wrapper-message[data-v-4a472eb0]{display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle}.error-message[data-v-4a472eb0]{font-size:14px;font-weight:400;margin:0;padding:0}.error-link[data-v-4a472eb0]{color:#00bcd4;font-weight:400;text-decoration:none;font-size:14px}","",{version:3,sources:["D:/Work/Rigidas/uk-rigi-docs/.nuxt/components/nuxt-error.vue"],names:[],mappings:"AACA,6BACE,WAAY,AACZ,gBAAiB,AACjB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oDAA6D,AAC7D,kBAAmB,AACnB,eAAiB,CAClB,AACD,6BACE,qBAAsB,AACtB,eAAgB,AAChB,gBAAiB,AACjB,mBAAoB,AACpB,2CAAgD,AAChD,kBAAyB,AACzB,iBAAmB,CACpB,AACD,wCACE,qBAAsB,AACtB,gBAAiB,AACjB,iBAAkB,AAClB,YAAa,AACb,qBAAuB,CACxB,AACD,gCACE,eAAgB,AAChB,gBAAoB,AACpB,SAAY,AACZ,SAAa,CACd,AACD,6BACE,cAAe,AACf,gBAAoB,AACpB,qBAAsB,AACtB,cAAgB,CACjB",file:"nuxt-error.vue",sourcesContent:['\n.error-page[data-v-4a472eb0] {\n  color: #000;\n  background: #fff;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  font-family: "SF UI Text", "Helvetica Neue", "Lucida Grande";\n  text-align: center;\n  padding-top: 20%;\n}\n.error-code[data-v-4a472eb0] {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 500;\n  vertical-align: top;\n  border-right: 1px solid rgba(0, 0, 0, 0.298039);\n  margin: 0px 20px 0px 0px;\n  padding: 10px 23px;\n}\n.error-wrapper-message[data-v-4a472eb0] {\n  display: inline-block;\n  text-align: left;\n  line-height: 49px;\n  height: 49px;\n  vertical-align: middle;\n}\n.error-message[data-v-4a472eb0] {\n  font-size: 14px;\n  font-weight: normal;\n  margin: 0px;\n  padding: 0px;\n}\n.error-link[data-v-4a472eb0] {\n  color: #00BCD4;\n  font-weight: normal;\n  text-decoration: none;\n  font-size: 14px;\n}\n'],sourceRoot:""}])},123:function(t,n,e){"use strict";n.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.error.message||"An error occured"}}}},124:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"error-page"},[e("div",[e("h1",{staticClass:"error-code"},[t._v(t._s(t.error.statusCode))]),e("div",{staticClass:"error-wrapper-message"},[e("h2",{staticClass:"error-message"},[t._v(t._s(t.error.message))])]),404===t.error.statusCode?e("p",[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e()])])},o=[],i={render:r,staticRenderFns:o};n.a=i},125:function(t,n,e){"use strict";var r=e(126),o=e(127),i=e(17),a=i(r.a,o.a,null,null,null);n.a=a.exports},126:function(t,n,e){"use strict";var r=e(3),o=e(65),i=e(66);n.a={name:"nuxt",props:["nuxtChildKey"],beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},created:function(){r.default.prototype.$nuxt=this,this.$root.$nuxt=this,this.setLayout=this.$root.setLayout.bind(this.$root),"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.$root.error},mounted:function(){this.$root.$loading&&this.$root.$loading.start&&(this.$loading=this.$root.$loading)},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())}},computed:{routerViewKey:function(){return void 0!==this.nuxtChildKey||this.$route.matched.length>1?this.nuxtChildKey||"":this.$route.fullPath.split("#")[0]}},components:{NuxtChild:o.a,NuxtError:i.a}}},127:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.nuxt.err?e("nuxt-error",{attrs:{error:t.nuxt.err}}):e("nuxt-child",{key:t.routerViewKey})},o=[],i={render:r,staticRenderFns:o};n.a=i},128:function(t,n,e){"use strict";var r=e(129),o=e(137),i=e(17),a=i(r.a,o.a,null,null,null);n.a=a.exports},129:function(t,n,e){"use strict";var r=e(16),o=e.n(r),i=e(130),a=e(135),s=(e.n(a),{_default:function(){return e.e(0).then(e.bind(null,144)).then(function(t){return t.default||t})}});n.a={head:{titleTemplate:"%s - Documentation",script:[{src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"},{src:"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.27/js/uikit.min.js"},{src:"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.27/js/uikit-icons.min.js"}],link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.27/css/uikit.min.css"}],meta:[],style:[]},data:function(){return{layout:null,layoutName:""}},mounted:function(){this.$loading=this.$refs.loading,this.$nuxt.$loading=this.$loading},methods:{setLayout:function(t){t&&s["_"+t]||(t="default"),this.layoutName=t;var n="_"+t;return this.layout=s[n],this.layout},loadLayout:function(t){var n=this;t&&s["_"+t]||(t="default");var e="_"+t;return"function"!=typeof s[e]?o.a.resolve(s[e]):s[e]().then(function(t){return s[e]=t,s[e]}).catch(function(t){if(n.$nuxt)return n.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}},130:function(t,n,e){"use strict";function r(t){e(131)}var o=e(133),i=e(134),a=e(17),s=r,u=a(o.a,i.a,s,"data-v-4b8d3fe4",null);n.a=u.exports},131:function(t,n,e){var r=e(132);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(40)("45fe6eae",r,!0)},132:function(t,n,e){n=t.exports=e(39)(!0),n.push([t.i,".progress[data-v-4b8d3fe4]{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;-o-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}","",{version:3,sources:["D:/Work/Rigidas/uk-rigi-docs/.nuxt/components/nuxt-loading.vue"],names:[],mappings:"AACA,2BACE,eAAgB,AAChB,MAAS,AACT,OAAU,AACV,QAAW,AACX,WAAY,AACZ,QAAU,AACV,yCAA6C,AAC7C,oCAAwC,AACxC,iCAAqC,AACrC,UAAW,AACX,yBAA0B,AAC1B,cAAgB,CACjB",file:"nuxt-loading.vue",sourcesContent:["\n.progress[data-v-4b8d3fe4] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  -o-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n"],sourceRoot:""}])},133:function(t,n,e){"use strict";var r=e(3);n.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"black",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},134:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},o=[],i={render:r,staticRenderFns:o};n.a=i},135:function(t,n,e){var r=e(136);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(40)("02e5374c",r,!0)},136:function(t,n,e){n=t.exports=e(39)(!0),n.push([t.i,".rigi-logo{height:50px}.rigi-top-bar{background-color:#00aec6;top:0}.rigi-content,.rigi-top-bar{position:absolute;width:100%}.rigi-content{top:80px}.rigi-sidebar-left{width:300px!important;padding:45px 45px 60px;border-right:1px solid #e5e5e5;height:100%}.uk-nav-header{padding:8px 0;border-bottom:1px solid #e5e5e5}.rigi-sidebar-right{width:300px!important;padding:45px 45px 60px;border-left:1px solid #e5e5e5;height:100%}.uk-navbar-toggle{color:#fff}","",{version:3,sources:["D:/Work/Rigidas/uk-rigi-docs/assets/css/custom.css"],names:[],mappings:"AAAA,WACI,WAAY,CACf,AAED,cACI,yBAAyB,AAEzB,KAAM,CAET,AAED,4BALI,kBAAkB,AAElB,UAAW,CAOd,AAJD,cAEI,QAAS,CAEZ,AAED,mBACI,sBAAwB,AACxB,uBAA6B,AAC7B,+BAAgC,AAChC,WAAY,CACf,AAED,eACI,cAAe,AACf,+BAAiC,CACpC,AAED,oBACI,sBAAwB,AACxB,uBAA6B,AAC7B,8BAA+B,AAC/B,WAAY,CACf,AAED,kBACI,UAAY,CACf",file:"custom.css",sourcesContent:[".rigi-logo {\r\n    height:50px;\r\n}\r\n\r\n.rigi-top-bar {\r\n    background-color:#00aec6;\r\n    position:absolute;\r\n    top:0;\r\n    width:100%;\r\n}\r\n\r\n.rigi-content {\r\n    position:absolute;\r\n    top:80px;\r\n    width:100%;\r\n}\r\n\r\n.rigi-sidebar-left {\r\n    width: 300px !important;\r\n    padding: 45px 45px 60px 45px;\r\n    border-right: 1px #e5e5e5 solid;\r\n    height:100%;\r\n}\r\n\r\n.uk-nav-header {\r\n    padding: 8px 0;\r\n    border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n.rigi-sidebar-right {\r\n    width: 300px !important;\r\n    padding: 45px 45px 60px 45px;\r\n    border-left: 1px #e5e5e5 solid;\r\n    height:100%;\r\n}\r\n\r\n.uk-navbar-toggle {\r\n    color: #fff;\r\n}"],sourceRoot:""}])},137:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"__nuxt"}},[e("nuxt-loading",{ref:"loading"}),t.layout?e(t.layout,{tag:"component"}):t._e()],1)},o=[],i={render:r,staticRenderFns:o};n.a=i},65:function(t,n,e){"use strict";var r=(e(3),["name","mode","css","type","duration","enterClass","leaveClass","enterActiveClass","enterActiveClass","leaveActiveClass","enterToClass","leaveToClass"]),o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled"];n.a={name:"nuxt-child",functional:!0,render:function(t,n){var e=n.parent,i=n.data;i.nuxtChild=!0;for(var a=e,s=e.$nuxt.nuxt.transitions,u=e.$nuxt.nuxt.defaultTransition,c=0;e;)e.$vnode&&e.$vnode.data.nuxtChild&&c++,e=e.$parent;i.nuxtChildDepth=c;var p=s[c]||u,d={};r.forEach(function(t){void 0!==p[t]&&(d[t]=p[t])});var l={};return o.forEach(function(t){"function"==typeof p[t]&&(l[t]=p[t].bind(a))}),t("transition",{props:d,on:l},[t("router-view",i)])}}},66:function(t,n,e){"use strict";function r(t){e(120)}var o=e(123),i=e(124),a=e(17),s=r,u=a(o.a,i.a,s,"data-v-4a472eb0",null);n.a=u.exports},67:function(t,n,e){"use strict";function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.options.data||R;!n&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=e.call(this);return this.$ssrContext&&(n=this.$ssrContext.asyncData[t.options.name]),E()({},r,n)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function o(t){return t.options?(t._Ctor=t,t.extendOptions=t.options):(t=j.default.extend(t),t._Ctor=t),!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t}function i(t){return[].concat.apply([],t.matched.map(function(t){return k()(t.components).map(function(n){return t.components[n]})}))}function a(t){return[].concat.apply([],t.matched.map(function(t){return k()(t.instances).map(function(n){return t.instances[n]})}))}function s(t,n){return Array.prototype.concat.apply([],t.matched.map(function(t,e){return k()(t.components).map(function(r){return n(t.components[r],t.instances[r],t,r,e)})}))}function u(t,n){var e={isServer:!!t.isServer,isClient:!!t.isClient,isDev:!1,app:n,route:t.to?t.to:t.route,payload:t.payload,error:t.error,base:"/",env:{},hotReload:t.hotReload||!1},r=t.next;return e.params=e.route.params||{},e.query=e.route.query||{},e.redirect=function(t,n,o){t&&(e._redirected=!0,"string"!=typeof t||void 0!==n&&"object"!==(void 0===n?"undefined":_()(n))||(o=n||{},n=t,t=302),r({path:n,query:o,status:t}))},t.req&&(e.req=t.req),t.res&&(e.res=t.res),t.from&&(e.from=t.from),e.isServer&&t.beforeRenderFns&&(e.beforeNuxtRender=function(n){return t.beforeRenderFns.push(n)}),e}function c(t,n){return!t.length||n._redirected?y.a.resolve():p(t[0],n).then(function(){return c(t.slice(1),n)})}function p(t,n){var e=void 0;return e=2===t.length?new y.a(function(e){t(n,function(t,r){t&&n.error(t),r=r||{},e(r)})}):t(n),e&&(e instanceof y.a||"function"==typeof e.then)||(e=y.a.resolve(e)),e}function d(t){var n=window.location.pathname;return t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash}function l(t,n){return x(f(t,n))}function f(t,n){for(var e,r=[],o=0,i=0,a="",s=n&&n.delimiter||"/";null!=(e=D.exec(t));){var u=e[0],c=e[1],p=e.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var d=t[i],l=e[2],f=e[3],h=e[4],A=e[5],x=e[6],v=e[7];a&&(r.push(a),a="");var C=null!=l&&null!=d&&d!==l,b="+"===x||"*"===x,y="?"===x||"*"===x,w=e[2]||s,_=h||A;r.push({name:f||o++,prefix:l||"",delimiter:w,optional:y,repeat:b,partial:C,asterisk:!!v,pattern:_?m(_):v?".*":"[^"+g(w)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function h(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function A(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function x(t){for(var n=new Array(t.length),e=0;e<t.length;e++)"object"===_()(t[e])&&(n[e]=new RegExp("^(?:"+t[e].pattern+")$"));return function(e,r){for(var o="",i=e||{},a=r||{},s=a.pretty?h:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p,d=i[c.name];if(null==d){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(d)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+C()(d)+"`");if(0===d.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var l=0;l<d.length;l++){if(p=s(d[l]),!n[u].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+C()(p)+"`");o+=(0===l?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?A(d):s(d),!n[u].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}function g(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function m(t){return t.replace(/([=!:$\/()])/g,"\\$1")}n.a=r,n.j=o,n.f=i,n.g=a,n.c=s,n.d=u,n.h=c,n.i=p,n.e=d,n.b=l;var v=e(138),C=e.n(v),b=e(16),y=e.n(b),w=e(43),_=e.n(w),B=e(63),k=e.n(B),$=e(64),E=e.n($),j=e(3),R=function(){return{}};window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},69:function(t,n,e){"use strict";function r(t,n){if(!t||!t.options||!t.options[n])return{};var e=t.options[n];if("function"==typeof e){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return e.apply(void 0,o)}return e}function o(t,n,e){var o=function(t){var o=r(t,"transition",n,e);return"string"==typeof o?{name:o}:o};return t.map(function(t){var n=b()({},o(t));if(e&&e.matched.length&&e.matched[0].components.default){var r=o(e.matched[0].components.default);v()(r).filter(function(t){return r[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){n[t]=r[t]})}return n})}function i(t){var n=Object(B.e)(t.options.base);return Object(B.c)(t.match(n),function(t,n,e,r,o){if("function"!=typeof t||t.options){var i=Object(B.j)(t);return e.components[r]=i,i}return t().then(function(t){var n=Object(B.j)(t);return T.serverRendered&&(Object(B.a)(n,T.data[o]),T.components&&(t.options.components=b()(n.options.components,T.components[o])),n._Ctor=n),e.components[r]=n,n})})}function a(t,n,e){var r=this,o=[],i=!1;if(void 0!==e&&(o=[],e.middleware&&(o=o.concat(e.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"!=typeof w.a[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),w.a[t]}),!i)return Object(B.h)(o,n)}function s(t,n){Object(B.c)(t,function(t,n,e,r){return"object"!==(void 0===t?"undefined":d()(t))||t.options||(t=y.default.extend(t),t._Ctor=t,e.components[r]=t),t})}function u(t,n){var e=this;this._hashChanged||y.default.nextTick(function(){var n=Object(B.g)(t);R=n.map(function(t,n){if(!t)return"";if(j[n]===t.constructor._path&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var r in e)y.default.set(t.$data,r,e[r])}return t.constructor.options.__file}),e._hadError&&e._dateLastError===e.$options._nuxt.dateErr&&e.error();var r=e.$options._nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof r&&(r=r(e._context)),e.setLayout(r)})}function c(t){window._nuxtReadyCbs.forEach(function(n){"function"==typeof n&&n(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),O.afterEach(function(n,e){t.$nuxt.$emit("routeChanged",n,e)})}Object.defineProperty(n,"__esModule",{value:!0});var p=e(43),d=e.n(p),l=e(56),f=e.n(l),h=e(16),A=e.n(h),x=e(62),g=e.n(x),m=e(63),v=e.n(m),C=e(38),b=e.n(C),y=e(3),w=e(114),_=e(115),B=e(67),k=function(){var t=g()(f.a.mark(function t(n,e,r){var o,i,a;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.fullPath.split("#")[0],i=n.fullPath.split("#")[0],this._hashChanged=o===i,!this._hashChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,A.a.all(Object(B.c)(n,function(t,n,e,r){if("function"!=typeof t||t.options){var o=Object(B.j)(t);return e.components[r]=o,o}return t().then(function(t){var n=Object(B.j)(t);return e.components[r]=n,n})}));case 7:r(),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(4),t.t0||(t.t0={}),a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),r(!1);case 16:case"end":return t.stop()}},t,this,[[4,10]])}));return function(n,e,r){return t.apply(this,arguments)}}(),$=function(){var t=g()(f.a.mark(function t(n,e,r){var i,s,u,c,p,d,l,h,x=this;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._hashChanged){t.next=2;break}return t.abrupt("return",r());case 2:if(i=!1,s=function(t){x.$loading.finish&&x.$loading.finish(),i||(i=!0,r(t))},u=Object(B.d)({to:n,from:e,isClient:!0,next:s.bind(this),error:this.error.bind(this)},D),this._context=u,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,c=Object(B.f)(n),c.length){t.next=23;break}return t.next=12,a.call(this,c,u);case 12:if(!u._redirected){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,this.loadLayout("function"==typeof _.a.layout?_.a.layout(u):_.a.layout);case 16:return p=t.sent,t.next=19,a.call(this,c,u,p);case 19:if(!u._redirected){t.next=21;break}return t.abrupt("return");case 21:return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",r());case 23:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(o(c,n,e)),t.prev=25,t.next=28,a.call(this,c,u);case 28:if(!u._redirected){t.next=30;break}return t.abrupt("return");case 30:return d=c[0].options.layout,"function"==typeof d&&(d=d(u)),t.next=34,this.loadLayout(d);case 34:return d=t.sent,t.next=37,a.call(this,c,u,d);case 37:if(!u._redirected){t.next=39;break}return t.abrupt("return");case 39:if(l=!0,c.forEach(function(t){l&&"function"==typeof t.options.validate&&(l=t.options.validate({params:n.params||{},query:n.query||{}}))}),l){t.next=44;break}return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",r());case 44:return t.next=46,A.a.all(c.map(function(t,e){if(t._path=Object(B.b)(n.matched[e].path)(n.params),!x._hadError&&t._path===j[e]&&e+1!==c.length)return A.a.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,a=o&&i?30:45;if(o){var s=Object(B.i)(t.options.asyncData,u).then(function(n){Object(B.a)(t,n),x.$loading.increase&&x.$loading.increase(a)});r.push(s)}if(i){var p=t.options.fetch(u);p&&(p instanceof A.a||"function"==typeof p.then)||(p=A.a.resolve(p)),p.then(function(t){x.$loading.increase&&x.$loading.increase(a)}),r.push(p)}return A.a.all(r)}));case 46:j=c.map(function(t,e){return Object(B.b)(n.matched[e].path)(n.params)}),this.$loading.finish&&this.$loading.finish(),i||r(),t.next=62;break;case 51:return t.prev=51,t.t0=t.catch(25),t.t0||(t.t0={}),j=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,h=_.a.layout,"function"==typeof h&&(h=h(u)),t.next=60,this.loadLayout(h);case 60:this.error(t.t0),r(!1);case 62:case"end":return t.stop()}},t,this,[[25,51]])}));return function(n,e,r){return t.apply(this,arguments)}}(),E=function(){var t=g()(f.a.mark(function t(n){var e,r,a,p;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return D=n.app,O=n.router,t.next=4,A.a.all(i(O));case 4:return e=t.sent,r=new y.default(D),a=T.layout||"default",t.next=9,r.loadLayout(a);case 9:if(r.setLayout(a),p=function(){r.$mount("#__nuxt"),y.default.nextTick(function(){c(r)})},r.setTransitions=r.$options._nuxt.setTransitions.bind(r),e.length&&(r.setTransitions(o(e,O.currentRoute)),j=O.currentRoute.matched.map(function(t){return Object(B.b)(t.path)(O.currentRoute.params)}),R=e.map(function(t){return t.options.__file})),r.error=r.$options._nuxt.error.bind(r),r.$loading={},T.error&&r.error(T.error),O.beforeEach(k.bind(r)),O.beforeEach($.bind(r)),O.afterEach(s),O.afterEach(u.bind(r)),!T.serverRendered){t.next=23;break}return p(),t.abrupt("return");case 23:$.call(r,O.currentRoute,O.currentRoute,function(t){if(!t)return s(O.currentRoute,O.currentRoute),u.call(r,O.currentRoute,O.currentRoute),void p();var n=!1;O.afterEach(function(){n||(n=!0,p())}),O.push(t)});case 24:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}(),j=[],R=[],D=void 0,O=void 0,T=window.__NUXT__||{};T.components=window.__COMPONENTS__||null,Object(_.b)().then(E).catch(function(t){console.error("[nuxt] Error while initializing app",t)})}},[69]);
//# sourceMappingURL=nuxt.bundle.64009c0ce661c530f328.js.map