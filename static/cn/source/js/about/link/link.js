!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(2)},,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();n(3),n(7);var u=n(9),l=o(u),p=n(12),s=o(p),f=window.supervar,h=(f.imgsrc_cn,f.Wrap),b=[{icon:"aboutIcon-partner",title:"合作伙伴",column:!1,links:[{href:"http://www.taobao.com/",txt:"淘宝网"},{href:"http://www.dangdang.com/",txt:"当当网"},{href:"http://www.z.cn/",txt:"亚马逊"},{href:"http://www.paipai.com/",txt:"拍拍网"},{href:"http://www.m18.com/",txt:"麦考林"},{href:"http://www.vancl.com/",txt:"凡客诚品"},{href:"http://www.jd.com/",txt:"京东商城"},{href:"http://www.tmall.com/",txt:"天猫"},{href:"http://www.51buy.com/",txt:"易迅网"}]},{icon:"aboutIcon-logistics",title:"物流配送",column:!1,links:[{href:"http://www.dhl.com/",txt:"DHL"},{href:"http://www.sf-express.com/us/en/",txt:"顺丰国际"},{href:"http://www.ems.com.cn/",txt:"EMS"},{href:"http://www.singpost.com/",txt:"Singpost"}]},{icon:"aboutIcon-payment",title:"支付方式",column:!1,links:[{href:"http://www.paypal.com/",txt:"Paypal"},{href:"http://www.alipay.com/",txt:"Alipay"}]}],d=function(t){function e(){return r(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return i(e,t),c(e,[{key:"render",value:function(){return React.createElement("div",null,React.createElement(l["default"],{current:"link"}),React.createElement("div",{className:"aboutBanner linkBanner"},React.createElement("h2",{className:"aboutBanner-inner linkBanner-inner"},"友情链接")),React.createElement("div",{className:"aboutMain linkMain"},b.map(function(t){return React.createElement(s["default"],t)})))}}]),e}(React.Component);ReactDOM.render(React.createElement(h,{content:d}),document.getElementsByTagName("body")[0])},function(t,e,n){var o=n(4);"string"==typeof o&&(o=[[t.id,o,""]]);n(6)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(5)(),e.push([t.id,".aboutBanner{width:100%}.aboutBanner .aboutBanner-inner{width:1200px;height:100%;background-position:-36px;margin:0 auto}.aboutBanner .aboutBanner-icon{width:70px;height:100%;background:50% no-repeat;float:left}.aboutBanner .aboutBanner-txt{float:left;color:#fff;padding:23px 0 0 23px}.aboutBanner .aboutBanner-txt h2{font-size:30px;line-height:40px}.aboutBanner .aboutBanner-txt p{font-size:18px;line-height:30px}.aboutMain{width:1200px;margin:0 auto;color:#666}.aboutMain,.aboutMain p{font:14px/26px microsoft yahei}.aboutMain a{color:#ff4c62;text-decoration:underline;cursor:pointer}.aboutMain a:hover{text-decoration:none}.aboutMain .aboutTitle{font-size:16px;line-height:32px;font-weight:700;margin-top:50px}.aboutMain strong{font-weight:700}",""])},function(t,e){"use strict";t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=h[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(l(o.parts[a],e))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(l(o.parts[a],e));h[o.id]={id:o.id,refs:1,parts:i}}}}function r(t){for(var e=[],n={},o=0;o<t.length;o++){var r=t[o],a=r[0],i=r[1],c=r[2],u=r[3],l={css:i,media:c,sourceMap:u};n[a]?n[a].parts.push(l):e.push(n[a]={id:a,parts:[l]})}return e}function a(t,e){var n=m(),o=v[v.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),v.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function i(t){t.parentNode.removeChild(t);var e=v.indexOf(t);e>=0&&v.splice(e,1)}function c(t){var e=document.createElement("style");return e.type="text/css",a(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",a(t,e),e}function l(t,e){var n,o,r;if(e.singleton){var a=g++;n=x||(x=c(e)),o=p.bind(null,n,a,!1),r=p.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),o=f.bind(null,n),r=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=c(e),o=s.bind(null,n),r=function(){i(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function p(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var a=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function s(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function f(t,e){var n=e.css,o=e.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}var h={},b=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=b(function(){return document.head||document.getElementsByTagName("head")[0]}),x=null,g=0,v=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return o(n,e),function(t){for(var a=[],i=0;i<n.length;i++){var c=n[i],u=h[c.id];u.refs--,a.push(u)}if(t){var l=r(t);o(l,e)}for(var i=0;i<a.length;i++){var u=a[i];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete h[u.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var o=n(8);"string"==typeof o&&(o=[[t.id,o,""]]);n(6)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(5)(),e.push([t.id,".linkBanner{height:354px;background:url('/cn/source/img/about/link/link_banner.jpg') 50% no-repeat #d0ae32}.linkBanner .linkBanner-inner{background:url('/cn/source/img/about/link/link_banner.jpg') 50% no-repeat;text-indent:-3000px}.linkMain{margin:50px auto 180px}.linkMain .aboutIconBox{padding:0 300px 0 35px}.linkMain .aboutIconBox i{background-image:url('/cn/source/img/about/link/link_icon.png')}.linkMain .aboutIcon-partner{background-position:0 0}.linkMain .aboutIcon-logistics{background-position:-80px 0}.linkMain .aboutIcon-payment{background-position:-160px 0}.linkMain .aboutIcon-link{background-position:-240px 0}",""])},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();n(10);var c=[{href:"../aboutUs/",txt:"关于SuperBuy",id:"aboutUs"},{href:"../contactUs/",txt:"联系我们",id:"contactUs"},{href:"../joinUs/",txt:"加入我们",id:"joinUs"},{href:"../agreement/",txt:"服务协议",id:"agreement"},{href:"../privacy/",txt:"隐私声明",id:"privacy"},{href:"../registration/",txt:"商家注册",id:"registration"},{href:"../link/",txt:"友情链接",id:"link"},{href:"../map/",txt:"网站地图",id:"map"}],u=function(t){function e(){return o(this,e),r(this,Object.getPrototypeOf(e).apply(this,arguments))}return a(e,t),i(e,[{key:"render",value:function(){var t=this.props.current,e=[],n=null;return c.forEach(function(o){o.id===t?n=React.createElement("h2",null,o.txt):e.push(React.createElement("li",null,React.createElement("a",{href:o.href},o.txt)))}),React.createElement("div",{className:"aboutNav"},n,React.createElement("ul",null,e))}}]),e}(React.Component);e["default"]=u},function(t,e,n){var o=n(11);"string"==typeof o&&(o=[[t.id,o,""]]);n(6)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(5)(),e.push([t.id,".aboutNav{width:1200px;margin:0 auto;height:97px}.aboutNav h2{float:left;font-size:18px;line-height:36px;color:#666;margin-top:30px}.aboutNav ul{float:right;margin-top:30px}.aboutNav ul li{display:inline-block}.aboutNav ul li a{margin-left:32px;font:14px/40px microsoft yahei;color:#333;text-decoration:none;cursor:pointer}.aboutNav ul li a:hover{color:#ff4c62!important}",""])},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();n(13);var c=function(t){function e(){return o(this,e),r(this,Object.getPrototypeOf(e).apply(this,arguments))}return a(e,t),i(e,[{key:"render",value:function(){return React.createElement("p",null,this.props.links.map(function(t){return React.createElement("a",{href:t.href,target:"_blank"},t.txt)}))}}]),e}(React.Component),u=function(t){function e(){return o(this,e),r(this,Object.getPrototypeOf(e).apply(this,arguments))}return a(e,t),i(e,[{key:"render",value:function(){for(var t=this.props.column,e=this.props.links.map(function(t){return t}),n=[];e.length;)n.push(e.splice(0,t));return React.createElement("table",null,n.map(function(t){return React.createElement("tr",null,t.map(function(t){return React.createElement("td",null,React.createElement("a",{href:t.href,target:"_blank"},t.txt))}))}))}}]),e}(React.Component),l=function(t){function e(){return o(this,e),r(this,Object.getPrototypeOf(e).apply(this,arguments))}return a(e,t),i(e,[{key:"render",value:function(){return React.createElement("div",{className:"aboutIconBox",style:this.props.style},React.createElement("i",{className:this.props.icon}),React.createElement("div",null,React.createElement("h3",null,this.props.title),this.props.column?React.createElement(u,{links:this.props.links,column:this.props.column}):React.createElement(c,{links:this.props.links})))}}]),e}(React.Component);e["default"]=l},function(t,e,n){var o=n(14);"string"==typeof o&&(o=[[t.id,o,""]]);n(6)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(5)(),e.push([t.id,".aboutIconBox{margin-top:50px;color:#666}.aboutIconBox div{overflow:hidden}.aboutIconBox i{width:59px;height:59px;background-repeat:no-repeat;float:left;margin-right:13px}.aboutIconBox h3{font-size:16px;font-weight:700;line-height:50px}.aboutIconBox a{color:#666;text-decoration:none;font-size:14px;line-height:30px;margin-right:32px}.aboutIconBox a:hover{color:#ff4c62}.aboutIconBox table{width:100%;vertical-align:top}.aboutIconBox table a{margin-right:0}.aboutIconBox table tr{height:42px}",""])}]);