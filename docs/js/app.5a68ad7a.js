(function(t){function e(e){for(var c,l,i=e[0],s=e[1],a=e[2],d=0,f=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(c=!1)}c&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var c={},o={app:0},r=[];function l(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=c,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)l.d(n,c,function(e){return t[e]}.bind(null,c));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/unrest-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=(n("ac1f"),n("5319"),Object(c["f"])("div",{class:"main-nav"},null,-1)),r=Object(c["f"])("h2",null,"Toasts",-1),l=Object(c["f"])("h2",null,"Alert",-1),i=Object(c["f"])("h2",null,"Dropdown",-1),s=Object(c["f"])("button",{type:"button"},"Dropdown with content",-1),a=Object(c["e"])(" Custom conetnt goes here "),u=Object(c["f"])("button",{type:"button"},"Dropdown with items",-1),d={type:"button"},f=Object(c["f"])("h2",null,"Modal",-1),b=Object(c["e"])("Woo");function j(t,e,n,j,O,p){var h=Object(c["l"])("ur-dropdown"),m=Object(c["l"])("ur-modal"),v=Object(c["l"])("ur-ui");return Object(c["h"])(),Object(c["c"])("div",null,[o,Object(c["f"])("div",null,[r,(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(O.toast_levels,(function(t){return Object(c["h"])(),Object(c["c"])("button",{onClick:function(e){return p.doToast(t)},key:t}," Toast "+Object(c["n"])(t),9,["onClick"])})),128))]),Object(c["f"])("div",null,[l,(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(O.alerts,(function(t,e){return Object(c["h"])(),Object(c["c"])("button",{key:e,onClick:function(t){return p.doAlert(e)}}," Alert using "+Object(c["n"])(e.replace(/_/g," + ")),9,["onClick"])})),128))]),Object(c["f"])("div",null,[i,Object(c["f"])(h,null,{content:Object(c["o"])((function(){return[a]})),default:Object(c["o"])((function(){return[s]})),_:1}),Object(c["f"])(h,{items:O.dropdown_items},{default:Object(c["o"])((function(){return[u]})),_:1},8,["items"]),Object(c["f"])(h,{items:O.select_items},{default:Object(c["o"])((function(){return[Object(c["f"])("button",d,"Selected Color: "+Object(c["n"])(O.selected_color),1)]})),_:1},8,["items"])]),Object(c["f"])("div",null,[f,Object(c["f"])("button",{onClick:e[1]||(e[1]=function(t){return O.modal=!0})},"Show Modal"),O.modal?(Object(c["h"])(),Object(c["c"])(m,{key:0,close:function(){return O.modal=!1},title:"This is a modal"},{default:Object(c["o"])((function(){return[b]})),_:1},8,["close"])):Object(c["d"])("",!0)]),Object(c["f"])(v)])}n("d81d");var O={class:"ur-popper"};function p(t,e,n,o,r,l){return Object(c["h"])(),Object(c["c"])("div",O,[Object(c["k"])(t.$slots,"default")])}n("a9e3"),n("1276");var h=n("39c3"),m={props:{target:Object,placement:String,offset:[Array,String]},data:function(){return{popper:null}},watch:{target:"reset"},mounted:function(){this.reset()},unmount:function(){this.popper.destroy()},methods:{reset:function(){var t;null===(t=this.popper)||void 0===t||t.destroy();var e=[],n="string"===typeof this.offset?this.offset.split(",").map(Number):this.offset;n&&e.push({name:"offset",options:{offset:n}});var c=this.placement,o=void 0===c?"bottom-start":c,r=this.target,l=void 0===r?this.$el.parentElement:r;this.popper=Object(h["a"])(l,this.$el,{placement:o,modifiers:e})}}};m.render=p;var v=m,y={key:0,class:"dropdown-items"};function k(t,e,n,o,r,l){var i=Object(c["l"])("ur-popper");return Object(c["h"])(),Object(c["c"])("div",{onClick:e[1]||(e[1]=function(){return t.toggleFocus&&t.toggleFocus.apply(t,arguments)}),class:"ur-dropdown"},[Object(c["k"])(t.$slots,"default"),t.focused?(Object(c["h"])(),Object(c["c"])(i,{key:0,class:"popdown"},{default:Object(c["o"])((function(){return[Object(c["k"])(t.$slots,"content",{},(function(){var t;return[null!==(t=n.items)&&void 0!==t&&t.length?(Object(c["h"])(),Object(c["c"])("div",y,[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(l.preppedItems,(function(t){return Object(c["h"])(),Object(c["c"])(Object(c["m"])(t.tagName),Object(c["g"])({class:"dropdown-item"},t.attrs,{key:t.key}),{default:Object(c["o"])((function(){return[t.icon?(Object(c["h"])(),Object(c["c"])("i",{key:0,class:"fa fa-".concat(t.icon)},null,2)):Object(c["d"])("",!0),Object(c["e"])(" "+Object(c["n"])(t.text),1)]})),_:2},1040)})),128))])):Object(c["d"])("",!0)]}))]})),_:3})):Object(c["d"])("",!0)])}var g={data:function(){return{focused:!1}},methods:{onFocus:function(){},onBlur:function(){},toggleFocus:function(t){t.__dropdown_touched!==this&&(t.__dropdown_touched=t.__dropdown_touched||this,this.focused?(document.removeEventListener("click",this.toggleFocus),this.onFocus()):t.shiftKey||t.ctrlKey||(document.addEventListener("click",this.toggleFocus),this.onBlur()),this.focused=!this.focused)}}},_=function(t){return"string"===typeof t&&(t={text:t,to:t}),t.attrs=t.attrs||{},t.tagName=t.tagName||"div",t.to&&(t.attrs.to=t.to,t.tagName="router-link"),t.href&&(t.attrs.href=t.href,t.tagName="a"),t.click&&(t.attrs.onclick=t.click,t.attrs.class="cursor-pointer"),t.key=t.key||t.text||t.icon,t},w={mixins:[g],props:{items:Array},components:{UrPopper:v},computed:{preppedItems:function(){return this.items.map(_)}}};w.render=k;var x=w,C={class:"modal"},T={class:"modal-content"},A={key:0,class:"modal-header"},S={key:0,class:"modal-title"},E={class:"modal-body"},F={class:"modal-footer"};function P(t,e,n,o,r,l){return Object(c["h"])(),Object(c["c"])("div",C,[Object(c["f"])("div",{class:"modal-mask",onClick:e[1]||(e[1]=function(){return n.close&&n.close.apply(n,arguments)})}),Object(c["f"])("div",T,[n.title?(Object(c["h"])(),Object(c["c"])("div",A,[n.title?(Object(c["h"])(),Object(c["c"])("div",S,Object(c["n"])(n.title),1)):Object(c["d"])("",!0)])):Object(c["d"])("",!0),Object(c["f"])("div",E,[Object(c["k"])(t.$slots,"default")]),Object(c["f"])("div",F,[Object(c["k"])(t.$slots,"actions",{},(function(){return[Object(c["f"])("button",{class:"btn -secondary",onClick:e[2]||(e[2]=function(){return n.close&&n.close.apply(n,arguments)})},"Close")]}))])])])}var $={props:{close:Function,title:String}};$.render=P;var L=$,M=(n("4160"),1e4),N=["success","error","info","warn","todo"],D=Object(c["i"])({toasts:[],alert:null,confirm:null}),B=function(t){var e=t.id;D.toasts[e]&&(D.toasts[e].hidden=!0)},I=function(t){var e=t.text,n=t.level,c=t.delay,o=void 0===c?M:c,r=D.toasts.length;D.toasts.push({id:r,text:e,level:n}),o&&setTimeout((function(){return B({id:r})}),o)},J=function(t){return I({text:t,level:"info"})};J.add=I,J.hide=B,J.LEVELS=N,N.forEach((function(t){return J[t]=function(e){return I({level:t,text:e})}}));var K=function(t){return D.alert=t},V=function(t){return D.confirm=t},U={toast:J,alert:K,confirm:V,state:D},W={class:"toast-list"},q={class:"text"},z={key:0,class:"modal"},G={class:"modal-content"},H={key:0,class:"modal-title"},Q={class:"modal-body"},R={class:"modal-footer"};function X(t,e,n,o,r,l){return Object(c["h"])(),Object(c["c"])(c["a"],null,[Object(c["f"])("div",W,[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(l.toasts,(function(t){return Object(c["h"])(),Object(c["c"])("div",{key:t.id,class:"toast ".concat(t.level)},[Object(c["f"])("div",q,Object(c["n"])(t.text),1),Object(c["f"])("i",{class:"fa fa-close",onClick:function(e){return l.hideToast(t)}},null,8,["onClick"])],2)})),128))]),l.alert?(Object(c["h"])(),Object(c["c"])("div",z,[Object(c["f"])("div",{class:"modal-mask",onClick:e[1]||(e[1]=function(){return l.closeAlert&&l.closeAlert.apply(l,arguments)})}),Object(c["f"])("div",G,[l.alert.title?(Object(c["h"])(),Object(c["c"])("h2",H,[l.alert.icon?(Object(c["h"])(),Object(c["c"])("i",{key:0,class:"fa fa-".concat(l.alert.icon)},null,2)):Object(c["d"])("",!0),Object(c["e"])(" "+Object(c["n"])(l.alert.title),1)])):Object(c["d"])("",!0),Object(c["f"])("div",Q,[l.alert.icon&&!l.alert.title?(Object(c["h"])(),Object(c["c"])("i",{key:0,class:"fa fa-".concat(l.alert.icon)},null,2)):Object(c["d"])("",!0),Object(c["e"])(" "+Object(c["n"])(l.alert.text),1)]),Object(c["f"])("div",R,[Object(c["f"])("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=function(){return l.closeAlert&&l.closeAlert.apply(l,arguments)})},"Ok")])])])):Object(c["d"])("",!0)],64)}n("4de4");var Y=function(t){if(t)return"string"===typeof t&&(t={text:t}),t},Z=function(t){},tt=function(){},et={computed:{toasts:function(){return U.state.toasts.filter((function(t){return!t.hidden}))},alert:function(){return Y(U.state.alert)},confirm:function(){return Z(U.state.confirm)}},methods:{closeAlert:function(t){var e=this.alert,n=e.confirm,c=void 0===n?tt:n,o=e.abort,r=void 0===o?tt:o;(t?c:r)(),U.state.alert=null},hideToast:U.toast.hide}};et.render=X;var nt=et;U.Component=nt;var ct=U,ot={install:function(t){t.component("ur-popper",v),t.component("ur-dropdown",x),t.component("ur-modal",L)}},rt={text:"Text only alert",text_icon:{icon:"warning",text:"Alert text goes here"},icon_title:{icon:"warning",title:"Alert Title"},text_icon_title:{icon:"warning",title:"Alert Title",text:"Alert text goes here"}},lt=["string",{text:"This is text"},{text:"This item has an icon",icon:"birthday-cake"},{text:"This item has an click",click:function(){return ct.toast("Clicked dropdown item")}}],it={name:"App",components:{"ur-ui":ct.Component},data:function(){var t=this,e=["red","green","blue"].map((function(e){return{text:e,click:function(){return t.selected_color=e}}}));return{toast_levels:ct.toast.LEVELS,alerts:rt,dropdown_items:lt,select_items:e,selected_color:e[0].text,modal:!1}},methods:{doToast:function(t){ct.toast[t]("This is a ".concat(t," toast."))},doAlert:function(t){ct.alert(rt[t])}}};it.render=j;var st=it,at=(n("7ac0"),Object(c["b"])(st));at.use(ot),at.mount("#app")},"7ac0":function(t,e,n){}});
//# sourceMappingURL=app.5a68ad7a.js.map