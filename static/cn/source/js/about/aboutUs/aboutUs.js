!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(2)},,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(3),n(7);var s=n(9),c=o(s),l=window.supervar,p=l.imgsrc_cn,f=l.Wrap,b=[{image:p+"about/aboutUs/aboutUs_slide04.jpg"},{image:p+"about/aboutUs/aboutUs_slide05.jpg"},{image:p+"about/aboutUs/aboutUs_slide06.jpg"},{image:p+"about/aboutUs/aboutUs_slide01.jpg"},{image:p+"about/aboutUs/aboutUs_slide02.jpg"},{image:p+"about/aboutUs/aboutUs_slide03.jpg"}],d=function(e){function t(){a(this,t);var e=r(this,Object.getPrototypeOf(t).call(this));return e.state={active:0},e}return i(t,e),u(t,[{key:"componentWillMount",value:function(){this.maxActive=this.props.items.length-3}},{key:"handleSlideAdd",value:function(){var e=this;this.setState(function(t){return{active:t.active>=e.maxActive?0:++t.active}})}},{key:"handleSlideReduce",value:function(){var e=this;this.setState(function(t){return{active:t.active<=0?e.maxActive:--t.active}})}},{key:"render",value:function(){return React.createElement("div",{className:"Slide"},React.createElement("ul",{style:{left:223*-this.state.active+"px"}},this.props.items.map(function(e,t){return React.createElement("li",{ref:"item-"+t},React.createElement("img",{src:e.image}))})),React.createElement("i",{className:"Slide-btn",onClick:this.handleSlideReduce.bind(this)}," "),React.createElement("i",{className:"Slide-btn",onClick:this.handleSlideAdd.bind(this)}," "))}}]),t}(React.Component),h=function(e){function t(){return a(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return React.createElement("div",null,React.createElement(c["default"],{current:"aboutUs"}),React.createElement("div",{className:"aboutBanner aboutUsBanner"},React.createElement("h2",{className:"aboutBanner-inner aboutUsBanner-inner"},"为全球用户提供购买大中华商品服务")),React.createElement("div",{className:"aboutMain aboutUsMain"},React.createElement("p",{style:{marginTop:"50px"}},React.createElement("i",{className:"aboutUs-logo",title:"superbuy"},"superbuy"),"于2012年由腾讯控股（0700.HK）创始成员之一的",React.createElement("em",null,"贡海星"),"先生发起成立，是海外用户网购中国的领先品牌，成立3年来已经为全球100多个国家的用户提供极具美誉的中国电商购物服务，在全球用户群中有极高的美誉度，深受全球用户的喜爱，并成为诸多同业的模仿对象。"),React.createElement(d,{items:b}),React.createElement("p",null,"公司核心成员来自中国互联网及传统行业的重量级企业。通过互联网思维与传统服务意识的结合，为全球用户提供优质的购买中国商品服务，覆盖代购、检验、仓储、寄送、售后等所有环节。以一站式服务让消费者彻底告别信息不对称、运费昂贵、售后困难等问题，便利且安心的满足自己的跨境购物需求。",React.createElement("i",{className:"aboutUs-logo",title:"superbuy"},"Superbuy"),"同时也向世界各地企业商家提供批量商业服务，让更多的商家能分享世界大市场的价值。"),React.createElement("br",null),React.createElement("p",null,"2016年业务开始全面扩展提速，货源地将扩展到香港、台湾等大中华地区，用户范围将扩展到全球多语种用户。“打造极致产品+极致服务， 做最好的跨境购物神器”，",React.createElement("i",{className:"aboutUs-logo",title:"superbuy"},"superbuy"),"将通过自己的努力改变跨境电商行业，为世界消费者的购物体验带来革命性的提升，期待能为每一位消费者带来快乐。"),React.createElement("br",null),React.createElement("p",null,"如对",React.createElement("i",{className:"aboutUs-logo",title:"superbuy"},"superbuy"),"有任何意见与期待，欢迎随时联系我们的CEO",React.createElement("a",{href:"mailto:CEO@superbuy.com"},"（CEO@superbuy.com）"),"。"),React.createElement("p",{className:"aboutUs-number"},React.createElement("strong",null,"70"),"个国家/地区,",React.createElement("strong",null,"1,000,000"),"用户"),React.createElement("img",{src:p+"about/aboutUs/aboutUs_pic02.jpg",alt:"我们都在用superbuy",width:"1200",height:"416"})),React.createElement("div",{className:"aboutUs-bottom"},React.createElement("img",{src:p+"about/aboutUs/aboutUs_pic03.png",alt:""})))}}]),t}(React.Component);ReactDOM.render(React.createElement(f,{content:h}),document.getElementsByTagName("body")[0])},function(e,t,n){var o=n(4);"string"==typeof o&&(o=[[e.id,o,""]]);n(6)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".aboutBanner{width:100%}.aboutBanner .aboutBanner-inner{width:1200px;height:100%;background-position:-36px;margin:0 auto}.aboutBanner .aboutBanner-icon{width:70px;height:100%;background:50% no-repeat;float:left}.aboutBanner .aboutBanner-txt{float:left;color:#fff;padding:23px 0 0 23px}.aboutBanner .aboutBanner-txt h2{font-size:30px;line-height:40px}.aboutBanner .aboutBanner-txt p{font-size:18px;line-height:30px}.aboutMain{width:1200px;margin:0 auto;color:#666}.aboutMain,.aboutMain p{font:14px/26px microsoft yahei}.aboutMain a{color:#ff4c62;text-decoration:underline;cursor:pointer}.aboutMain a:hover{text-decoration:none}.aboutMain .aboutTitle{font-size:16px;line-height:32px;font-weight:700;margin-top:50px}.aboutMain strong{font-weight:700}",""])},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(o[r]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],a=b[o.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](o.parts[r]);for(;r<o.parts.length;r++)a.parts.push(c(o.parts[r],t))}else{for(var i=[],r=0;r<o.parts.length;r++)i.push(c(o.parts[r],t));b[o.id]={id:o.id,refs:1,parts:i}}}}function a(e){for(var t=[],n={},o=0;o<e.length;o++){var a=e[o],r=a[0],i=a[1],u=a[2],s=a[3],c={css:i,media:u,sourceMap:s};n[r]?n[r].parts.push(c):t.push(n[r]={id:r,parts:[c]})}return t}function r(e,t){var n=m(),o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function c(e,t){var n,o,a;if(t.singleton){var r=v++;n=g||(g=u(t)),o=l.bind(null,n,r,!1),a=l.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),o=f.bind(null,n),a=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),o=p.bind(null,n),a=function(){i(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else a()}}function l(e,t,n,o){var a=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var r=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function p(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(a),r&&URL.revokeObjectURL(r)}var b={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=a(e);return o(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var u=n[i],s=b[u.id];s.refs--,r.push(s)}if(e){var c=a(e);o(c,t)}for(var i=0;i<r.length;i++){var s=r[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete b[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(8);"string"==typeof o&&(o=[[e.id,o,""]]);n(6)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".aboutUsBanner{height:354px;background:url('/cn/source/img/about/aboutUs/aboutUs_banner.jpg') 50% no-repeat #9fa4aa}.aboutUsBanner .aboutUsBanner-inner{background:url('/cn/source/img/about/aboutUs/aboutUs_banner.jpg') 50% no-repeat;text-indent:-3000px}.aboutUsMain{font:16px/32px microsoft yahei!important}.aboutUsMain em{color:#ff4c62}.aboutUsMain p{font:inherit}.aboutUsMain a{color:#ff4c62;text-decoration:none}.aboutUs-logo{display:inline-block;width:74px;height:16px;margin:0 2px;background:url('/cn/source/img/about/aboutUs/aboutUs_logo.png') no-repeat;vertical-align:-4px;text-indent:-2000px;overflow:hidden}.aboutUs-number{font-size:24px!important;text-align:center;line-height:200px!important}.aboutUs-number strong{font-size:44px;font-weight:700}.aboutUs-bottom{width:100%;background:#4abdad;margin-top:140px}.aboutUs-bottom img{display:block;margin:0 auto}.Slide{width:659px;height:165px;margin:30px auto;position:relative;overflow:hidden}.Slide ul{width:220%;position:absolute;top:0;left:0;transition:left .4s ease}.Slide li{width:213px;height:165px;float:left;margin-right:10px}.Slide img{display:block;width:100%;height:100%}.Slide .Slide-btn{display:block;position:absolute;width:22px;height:50px;background:url('/cn/source/img/about/aboutUs/aboutUs_slide_btns.png') 0 0 no-repeat;top:58px;cursor:pointer;z-index:2}.Slide .Slide-btn:nth-of-type(1){left:0}.Slide .Slide-btn:nth-of-type(1):hover{background-position:0 -50px}.Slide .Slide-btn:nth-of-type(2){right:0;background-position:-22px 0}.Slide .Slide-btn:nth-of-type(2):hover{background-position:-22px -50px}",""])},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(10);var u=[{href:"../aboutUs/",txt:"关于SuperBuy",id:"aboutUs"},{href:"../contactUs/",txt:"联系我们",id:"contactUs"},{href:"../joinUs/",txt:"加入我们",id:"joinUs"},{href:"../agreement/",txt:"服务协议",id:"agreement"},{href:"../privacy/",txt:"隐私声明",id:"privacy"},{href:"../registration/",txt:"商家注册",id:"registration"},{href:"../link/",txt:"友情链接",id:"link"},{href:"../map/",txt:"网站地图",id:"map"}],s=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return r(t,e),i(t,[{key:"render",value:function(){var e=this.props.current,t=[],n=null;return u.forEach(function(o){o.id===e?n=React.createElement("h2",null,o.txt):t.push(React.createElement("li",null,React.createElement("a",{href:o.href},o.txt)))}),React.createElement("div",{className:"aboutNav"},n,React.createElement("ul",null,t))}}]),t}(React.Component);t["default"]=s},function(e,t,n){var o=n(11);"string"==typeof o&&(o=[[e.id,o,""]]);n(6)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".aboutNav{width:1200px;margin:0 auto;height:97px}.aboutNav h2{float:left;font-size:18px;line-height:36px;color:#666;margin-top:30px}.aboutNav ul{float:right;margin-top:30px}.aboutNav ul li{display:inline-block}.aboutNav ul li a{margin-left:32px;font:14px/40px microsoft yahei;color:#333;text-decoration:none;cursor:pointer}.aboutNav ul li a:hover{color:#ff4c62!important}",""])}]);