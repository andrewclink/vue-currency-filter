!function(t){function n(n){for(var r,a,s=n[0],c=n[1],l=n[2],f=0,p=[];f<s.length;f++)a=s[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(u&&u(n);p.length;)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,s=1;s<e.length;s++){var c=e[s];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={0:0},i=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/vue-currency-filter/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=c;i.push([200,1]),e()}({1:function(t,n,e){var r=e(194);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(201).default)("4f649deb",r,!0,{})},193:function(t,n,e){"use strict";var r=e(1);e.n(r).a},194:function(t,n,e){(t.exports=e(195)(!1)).push([t.i,"a {\n  color: #f0843b;\n}\npre {\n  border-left: solid 0.25em #f0843b;\n}\n.radio--blue:checked + label:before {\n  background-color: #f0843b;\n}\n.radio--blue + label:after, .radio--blue + label:before {\n  border: 1px solid #f0843b;\n}\n.header {\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);\n  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);\n  position: fixed;\n  top: 0;\n  z-index: 100;\n  width: 100%;\n  height: 60px;\n  background: #f0853b;\n}\n.header__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header__brand {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: .2em;\n}\n.header__brand img {\n  width: 50px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n}\n.header__title {\n  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;\n  font-style: normal;\n  font-size: 1.8rem;\n  font-weight: 500;\n  margin-left: .5em;\n}\n.app {\n  margin-top: 70px;\n}\n.form__group {\n  max-width: 500px;\n}\n.form__icon {\n  width: 250px;\n  background-color: #f0843b;\n}\n.form__wrapper {\n  margin-left: 5px;\n}\n.m-b-5 {\n  margin-bottom: 5px;\n}\n.result__filter,\n.result__filter--default {\n  font-size: 20px;\n}\n.left {\n  text-align: left;\n}\n.footer {\n  width: 100%;\n  background: #f0853b;\n  text-align: center;\n  padding: 1em;\n}\n",""])},200:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e(2),i=e.n(o),a=e(4),s=e.n(a),c=Array.prototype.map,l=Array.isArray,u=Object.prototype.toString,f={__isNull:function(t){return null==t},__isString:function(t){return!!(""===t||t&&t.charCodeAt&&t.substr)},__isArray:function(t){return l?l(t):"[object Array]"===u.call(t)},__isObject:function(t){return t&&"[object Object]"===u.call(t)},__defaults:function(t,n){var e;for(e in t=t||{},n=n||{})n.hasOwnProperty(e)&&null==t[e]&&(t[e]=n[e]);return t},__map:function(t,n,e){var r,o,i=[];if(!t)return i;if(c&&t.map===c)return t.map(n,e);for(r=0,o=t.length;r<o;r++)i[r]=n.call(e,t[r],r,t);return i}},p={};function d(t,n){return t=Math.round(Math.abs(t)),isNaN(t)?n:t}p.settings={currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}};var m=p.unformat=p.parse=function(t,n){if(f.__isArray(t))return f.__map(t,function(t){return m(t,n)});if("number"==typeof(t=t||0))return t;n=n||p.settings.number.decimal;var e=new RegExp("[^0-9-"+n+"]",["g"]),r=parseFloat((""+t).replace(/\((?=\d+)(.*)\)/,"-$1").replace(e,"").replace(n,"."));return isNaN(r)?0:r},_=p.toFixed=function(t,n){n=d(n,p.settings.number.precision);var e=Number(p.unformat(t)+"e"+n),r=Math.round(e);return Number(r+"e-"+n).toFixed(n)},v=p.formatNumber=p.format=function(t,n,e,r){if(f.__isArray(t))return f.__map(t,function(t){return v(t,n,e,r)});t=m(t);var o=f.__defaults(f.__isObject(n)?n:{precision:n,thousand:e,decimal:r},p.settings.number),i=d(o.precision),a=t<0?"-":"",s=parseInt(_(Math.abs(t||0),i),10)+"",c=s.length>3?s.length%3:0;return a+(c?s.substr(0,c)+o.thousand:"")+s.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+o.thousand)+(i?o.decimal+_(Math.abs(t),i).split(".")[1]:"")},g=p.formatMoney=function(t,n,e,r,o,i){if(f.__isArray(t))return f.__map(t,function(t){return g(t,n,e,r,o,i)});t=m(t);var a=f.__defaults(f.__isObject(n)?n:{symbol:n,precision:e,thousand:r,decimal:o,format:i},p.settings.currency),s=function(t){var n=p.settings.currency.format;return"function"==typeof t&&(t=t()),f.__isString(t)&&t.match("%v")?{pos:t,neg:t.replace("-","").replace("%v","-%v"),zero:t}:t&&t.pos&&t.pos.match("%v")?t:f.__isString(n)?p.settings.currency.format={pos:n,neg:n.replace("%v","-%v"),zero:n}:n}(a.format);return(t>0?s.pos:t<0?s.neg:s.zero).replace("%s",a.symbol).replace("%v",v(Math.abs(t),d(a.precision),a.thousand,a.decimal))},b=p;function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var h={install:function(t,n){var e={symbol:"",thousandsSeparator:".",fractionCount:0,fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0,precision:0};f.__isNull(n)&&(n={});var r=f.__defaults(n,e);t.filter("currency",function(t,n,e,o,i,a,s,c){var l=f.__defaults({symbol:n,thousandsSeparator:e,fractionCount:o,fractionSeparator:i,symbolPosition:a,symbolSpacing:s,precision:c},r);"object"===y(n)&&(l=f.__defaults(n,r));var u=0,p="-"===String(t).charAt(0);p&&(t=String(t).slice(1));var d=parseFloat(t);isNaN(d)||(u=d);var m="%s%v";return m="front"===l.symbolPosition?l.symbolSpacing?"%s %v":"%s%v":l.symbolSpacing?"%v %s":"%v%s",l.precision>0&&(t=b.unformat(t)/Math.pow(10,l.precision)),l.fractionCount>0&&(t=b.toFixed(t,l.fractionCount)),u=b.formatMoney(t,{format:m,symbol:l.symbol,precision:l.fractionCount,thousand:l.thousandsSeparator,decimal:l.fractionSeparator}),p&&(u="-"+u),u}),t.prototype.$CurrencyFilter={setConfig:function(t){r=f.__defaults(t,e)},getConfig:function(){return r}}}},S={name:"app",data:function(){return{textInput:2e4,configSymbol:"$",configSeparator:".",configFractionCount:0,configFractionSeparator:",",configSymbolPosition:"front",configSymbolSpacing:!0,configPrecision:0,templateHtml:"<span>{{ 20000 | currency}}</span>",templateHtmlCustom:"\n          \x3c!-- or with custom config --\x3e\n          <span>\n          {{ 20000 | currency(\n              configSymbol, configSeparator, configFractionCount,\n              configFractionSeparator, configSymbolPosition, configSymbolSpacing,\n              configPrecision\n            )\n          }}\n          </span>"}},methods:{updateData:function(t){f.__isNull(t.symbol)||(this.configSymbol=t.symbol),f.__isNull(t.thousandsSeparator)||(this.configSeparator=t.thousandsSeparator),f.__isNull(t.fractionCount)||(this.configFractionCount=t.fractionCount),f.__isNull(t.fractionSeparator)||(this.configFractionSeparator=t.fractionSeparator),f.__isNull(t.symbolPosition)||(this.configSymbolPosition=t.symbolPosition),f.__isNull(t.symbolSpacing)||(this.configSymbolSpacing=t.symbolSpacing),f.__isNull(t.precision)||(this.precision=t.precision)}}},C=(e(193),e(5)),x=Object(C.a)(S,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"VueCurrencyFilter",attrs:{id:"app"}},[t._m(0),t._v(" "),e("div",{staticClass:"app"},[e("div",{staticClass:"grid__row content centered"},[e("h1",[t._v("Lightweight vue currency filter based on accounting.js By Irfan Maulana")]),t._v(" "),e("h2",[t._v("Example : ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.textInput,expression:"textInput"}],staticClass:"textfield textfield--shadow",attrs:{type:"tel",pattern:"[0-9]*"},domProps:{value:t.textInput},on:{input:function(n){n.target.composing||(t.textInput=n.target.value)}}}),t._v(" "),e("div",[e("b",[t._v("Before filter")]),t._v(" : "+t._s(t.textInput))]),t._v(" "),e("div",[e("b",[t._v("After filter - Default Configuration")]),t._v(" :\n\t\t\t\t\t"),e("b",{staticClass:"result__filter--default"},[t._v(t._s(t._f("currency")(t.textInput)))])]),t._v(" "),e("div",[e("b",[t._v("After filter - Custom Configuration")]),t._v(" :\n\t\t\t\t\t"),e("b",{staticClass:"result__filter"},[t._v(t._s(t._f("currency")(t.textInput,t.configSymbol,t.configSeparator,t.configFractionCount,t.configFractionSeparator,t.configSymbolPosition,t.configSymbolSpacing,t.configPrecision)))])]),t._v(" "),e("div",[e("b",[t._v("After filter - Custom Configuration Using Object")]),t._v(" :\n\t\t\t\t\t"),e("b",{staticClass:"result__filter--object"},[t._v(t._s(t._f("currency")(t.textInput,{fractionCount:2,symbol:"¥"})))])]),t._v(" "),e("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"7974047383"}}),t._v(" "),e("h2",[t._v("Customize Config :")]),t._v(" "),e("div",{staticClass:"form__group"},[e("div",{staticClass:"form__icon form__icon--radius-left"},[t._v("\n\t\t\t\t\t\tSymbol\n\t\t\t\t\t")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.configSymbol,expression:"configSymbol"}],staticClass:"textfield",attrs:{type:"text"},domProps:{value:t.configSymbol},on:{input:function(n){n.target.composing||(t.configSymbol=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"form__group"},[e("div",{staticClass:"form__icon form__icon--radius-left"},[t._v("\n\t\t\t\t\t\tSeparator\n\t\t\t\t\t")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.configSeparator,expression:"configSeparator"}],staticClass:"textfield",attrs:{type:"text"},domProps:{value:t.configSeparator},on:{input:function(n){n.target.composing||(t.configSeparator=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"form__group"},[e("div",{staticClass:"form__icon form__icon--radius-left"},[t._v("\n\t\t\t\t\t\tFraction Count\n\t\t\t\t\t")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.configFractionCount,expression:"configFractionCount"}],staticClass:"textfield",attrs:{type:"tel",pattern:"[0-9]*"},domProps:{value:t.configFractionCount},on:{input:function(n){n.target.composing||(t.configFractionCount=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"form__group"},[e("div",{staticClass:"form__icon form__icon--radius-left"},[t._v("\n\t\t\t\t\t\tFraction Separator\n\t\t\t\t\t")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.configFractionSeparator,expression:"configFractionSeparator"}],staticClass:"textfield",attrs:{type:"text"},domProps:{value:t.configFractionSeparator},on:{input:function(n){n.target.composing||(t.configFractionSeparator=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"form__group m-b-5"},[e("div",{staticClass:"form__icon form__icon--radius-left"},[t._v("\n\t\t\t\t\t\tSymbol Position\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"form__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.configSymbolPosition,expression:"configSymbolPosition"}],staticClass:"radio radio--blue",attrs:{type:"radio",id:"radio-form-1",name:"radio-symbol"},domProps:{value:"front",checked:t._q(t.configSymbolPosition,"front")},on:{change:function(n){t.configSymbolPosition="front"}}}),t._v(" "),e("label",{attrs:{for:"radio-form-1"}},[t._v("Front")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.configSymbolPosition,expression:"configSymbolPosition"}],staticClass:"radio radio--blue",attrs:{type:"radio",id:"radio-form-2",name:"radio-symbol"},domProps:{value:"back",checked:t._q(t.configSymbolPosition,"back")},on:{change:function(n){t.configSymbolPosition="back"}}}),t._v(" "),e("label",{attrs:{for:"radio-form-2"}},[t._v("End of text")])])]),t._v(" "),e("div",{staticClass:"form__group m-b-5"},[e("div",{staticClass:"form__icon form__icon--radius-left"},[t._v("\n\t\t\t\t\t\tSymbol Spacing\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"form__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.configSymbolSpacing,expression:"configSymbolSpacing"}],staticClass:"radio radio--blue",attrs:{type:"radio",id:"radio-form-3",name:"radio-spacing"},domProps:{value:!0,checked:t._q(t.configSymbolSpacing,!0)},on:{change:function(n){t.configSymbolSpacing=!0}}}),t._v(" "),e("label",{attrs:{for:"radio-form-3"}},[t._v("Yes")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.configSymbolSpacing,expression:"configSymbolSpacing"}],staticClass:"radio radio--blue",attrs:{type:"radio",id:"radio-form-4",name:"radio-spacing"},domProps:{value:!1,checked:t._q(t.configSymbolSpacing,!1)},on:{change:function(n){t.configSymbolSpacing=!1}}}),t._v(" "),e("label",{attrs:{for:"radio-form-4"}},[t._v("No")])])])],1)]),t._v(" "),e("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"7974047383"}}),t._v(" "),e("div",{staticClass:"grid__row content centered"},[e("h2",[t._v("Download")]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("        "),e("code",{staticClass:"bash"},[t._v("\n          # NPM\n          npm install vue-currency-filter\n\n          # Yarn\n          yarn add vue-currency-filter\n        ")]),t._v("\n      ")])]),t._v(" "),e("div",{staticClass:"grid__row content centered"},[e("h2",[t._v("Usage Guide")]),t._v(" "),e("h3",[t._v("In main.js")]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("        "),e("code",{staticClass:"javascript"},[t._v("\n          import VueCurrencyFilter from 'vue-currency-filter'\n          Vue.use(VueCurrencyFilter) // or with custom config\n          Vue.use(VueCurrencyFilter,\n          {\n            symbol : '$',\n            thousandsSeparator: '.',\n            fractionCount: 2,\n            fractionSeparator: ',',\n            symbolPosition: 'front',\n            symbolSpacing: true\n          })\n        ")]),t._v("\n      ")]),t._v(" "),e("h3",[t._v("In template")]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("        "),e("code",{staticClass:"html"},[t._v("\n          "+t._s(t.templateHtml)+"\n          "+t._s(t.templateHtmlCustom)+"\n        ")]),t._v("\n      ")])]),t._v(" "),e("div",{staticClass:"grid__row content centered"},[e("h2",[t._v("For Nuxt.js Project")]),t._v(" "),e("h3",[t._v("Create file `plugins/currency.js`, with code :")]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("        "),e("code",{staticClass:"javascript"},[t._v("\n          import VueCurrencyFilter from 'vue-currency-filter'\n          Vue.use(VueCurrencyFilter) // or with custom config\n          Vue.use(VueCurrencyFilter,\n          {\n            symbol : '$',\n            thousandsSeparator: '.',\n            fractionCount: 2,\n            fractionSeparator: ',',\n            symbolPosition: 'front',\n            symbolSpacing: true\n          })\n        ")]),t._v("\n      ")]),t._v(" "),e("h3",[t._v("Then update your nuxt.config.js, with code :")]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("        "),e("code",{staticClass:"javascript"},[t._v("\n          module.exports = {\n            plugins: [\n              { src: '~/plugins/currency', ssr: false }\n            ]\n          }\n        ")]),t._v("\n      ")])]),t._v(" "),t._m(1),t._v(" "),e("footer",{staticClass:"footer"},[t._v("\n      Copyright © 2017 Irfan Maulana, All Rights Reserved.\n    ")])],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("header",{staticClass:"site__header header",attrs:{role:"header"}},[n("div",{staticClass:"header__wrapper"},[n("div",{staticClass:"header__brand"},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:"favicon/favicon-96x96.png",alt:"Vue-Currency-Filter Logo",title:"Vue-Currency-Filter Logo"}})]),this._v(" "),n("div",{staticClass:"header__title"},[this._v(" Vue-Currency-Filter")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"grid__row content centered"},[n("h2",[this._v("Contribute")]),n("p",[this._v(" Feel free to fork "),n("i",{staticClass:"fa fa-code-fork"}),this._v(" on "),n("a",{attrs:{href:"https://github.com/mazipan/vue-currency-filter",target:"_blank"}},[this._v("GitHub "),n("i",{staticClass:"fa fa-github"})]),this._v(" if you have any features "),n("i",{staticClass:"fa fa-cart-plus"}),this._v(" or bugs "),n("i",{staticClass:"fa fa-bug"}),this._v("!")])])}],!1,null,null,null);x.options.__file="App.vue";var w=x.exports;"serviceWorker"in navigator?navigator.serviceWorker.register("/vue-currency-filter/sw.js").then(function(){console.log("Service Worker has been registered")}).catch(function(t){return console.error("Error during service worker registration:",t)}):console.warn("Service Worker is not supported"),r.a.use(e(199)),r.a.use(i.a.Adsense),r.a.use(i.a.InArticleAdsense),r.a.use(i.a.InFeedAdsense),r.a.use(s.a),r.a.use(h,{symbol:"$"}),new r.a({el:"#app",render:function(t){return t(w)}})}});