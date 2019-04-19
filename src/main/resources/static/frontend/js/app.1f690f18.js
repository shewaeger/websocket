(function(e){function t(t){for(var n,s,l=t[0],c=t[1],i=t[2],p=0,f=[];p<l.length;p++)s=l[p],o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/ws/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"1bc9":function(e,t,r){},"1e95":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._l(e.groupControllers,function(e,t,n){return r("group-controller",{key:n,attrs:{propControllers:e,controllerName:t}})}),r("v-dialog",{attrs:{persistent:""},model:{value:e.dialog.show,callback:function(t){e.$set(e.dialog,"show",t)},expression:"dialog.show"}},[r("v-card",[r("v-card-title",{staticClass:"headline red lighten-2",attrs:{"primary-title":""}},[e._v("\n          Error\n        ")]),r("v-card-text",{staticClass:"headline"},[e._v("\n          "+e._s(e.dialog.message)+"\n        ")])],1)],1)],2)},a=[],s=(r("28a5"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"group-controller"},[r("v-expansion-panel",[r("v-expansion-panel-content",{scopedSlots:e._u([{key:"header",fn:function(){return[r("h1",[e._v(e._s(e.controllerName))])]},proxy:!0}])},[r("v-card",[r("v-card-actions",[r("v-expansion-panel",e._l(e.propControllers,function(t){return r("v-expansion-panel-content",{key:t.id,scopedSlots:e._u([{key:"header",fn:function(){return[r("div",[e._v(e._s(t.name))])]},proxy:!0}],null,!0)},[r("method",{attrs:{controller:t},on:{methodSend:function(t){return e.$emit("methodSend",t)}}})],1)}),1)],1)],1)],1)],1)],1)}),l=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ws-controller"},[""!=e.controller.description?r("div",{staticClass:"description"},[r("h3",[e._v("Description:")]),r("p",[e._v(e._s(e.controller.description))])]):e._e(),e._l(e.parameters,function(t,n){return r("v-textarea",{key:n,attrs:{name:"input-7-1",label:e.paramNames[n],outline:"","auto-grow":""},model:{value:e.parameters[n],callback:function(t){e.$set(e.parameters,n,t)},expression:"parameters[key]"}})}),r("v-btn",{attrs:{color:"#050"},on:{click:e.sendMessage}},[e._v("Send")]),e.response&&0!=e.response.length?r("div",{staticClass:"serverResponse"},[r("h3",[e._v("Resopnse:")]),r("v-textarea",{attrs:{name:"input-7-1",label:e.controller.name,outline:"",readonly:!0,"auto-grow":"",error:e.errorResponse},model:{value:e.response,callback:function(t){e.response=t},expression:"response"}})],1):e._e()],2)},i=[],u=(r("6b54"),r("7f7f"),r("f499")),p=r.n(u),f=(r("ac6a"),{components:{},props:["controller"],data:function(){return{response:"",errorResponse:!1,parameters:[],paramNames:[],generatedObjects:[]}},created:function(){var e=this;this.controller.parameters.forEach(function(t){e.parameters.push(p()(e.getObjectFromScheme(t.schema),null,4)),e.paramNames.push(t.name)})},computed:{apiHref:function(){return"/ws/web-socket-api/"+this.controller.id}},methods:{sendMessage:function(){var e=this,t="["+this.parameters.join(",")+"]",r=JSON.parse(t);this.$axios.post(this.apiHref,r).then(function(t){e.errorResponse=!1,e.response=p()(t.data,null,4)}).catch(function(t){e.errorResponse=!0,e.response=p()(t.response.data,null,4)})},getObjectFromScheme:function(e){var t=this,r={};switch(e.type){case"string":if(e.enum)r=e.enum[0]?e.enum[0]:"";else if(e.format)switch(e.format){case"date-time":r=(new Date).toString();break;default:r=e.format;break}else r="string";break;case"number":case"integer":r=0;break;case"boolean":r=!1;break;case"array":r=[this.getObjectFromScheme(e.items)];break;case"object":if(e.$ref&&this.generatedObjects[e.$ref])return this.generatedObjects[e.$ref];var n=e.properties;this.$_.forEach(n,function(e,n){r[n]=t.getObjectFromScheme(e)}),this.generatedObjects[e.id]=r}return r}}}),d=f,h=(r("73aa1"),r("2877")),m=Object(h["a"])(d,c,i,!1,null,null,null),v=m.exports,b={components:{Method:v},props:["propControllers","controllerName"],data:function(){return{controllers:[]}}},g=b,_=(r("db11"),Object(h["a"])(g,s,l,!1,null,null,null)),y=_.exports,w={components:{GroupController:y},data:function(){return{groupControllers:[],dialog:{show:!1,message:""}}},created:function(){var e=this;this.$axios.get("/ws/web-socket-api").then(function(t){e.groupControllers=e.$_.groupBy(t.data,function(e){var t=e.idOwner.split(".");return t[t.length-1]})}).catch(function(t){console.error(t),e.dialog.message="Unable to connect to server",e.dialog.show=!0})}},x=w,k=(r("034f"),Object(h["a"])(x,o,a,!1,null,null,null)),O=k.exports,j=r("85f2"),$=r.n(j),S=r("bc3a"),C=r.n(S),M=r("2ef0"),N=r.n(M),E=r("cc7d"),P=r.n(E),R=r("74d1"),F=r.n(R),J={install:function(e){$()(e.prototype,"$axios",{value:C.a}),$()(e.prototype,"$_",{value:N.a}),$()(e.prototype,"$sockJS",{value:P.a}),$()(e.prototype,"$stomp",{value:F.a})}},T=r("ce5b"),D=r.n(T);r("da64"),r("bf40"),r("d1e7");n["default"].use(D.a),n["default"].config.productionTip=!1,n["default"].use(J),new n["default"]({render:function(e){return e(O)}}).$mount("#app")},"64a9":function(e,t,r){},"73aa1":function(e,t,r){"use strict";var n=r("1e95"),o=r.n(n);o.a},db11:function(e,t,r){"use strict";var n=r("1bc9"),o=r.n(n);o.a}});
//# sourceMappingURL=app.1f690f18.js.map