/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var imgsrc = window.supervar.imgsrc_en;

	/* your logic code */

	var Content = function (_React$Component) {
	    _inherits(Content, _React$Component);

	    function Content() {
	        _classCallCheck(this, Content);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Content).apply(this, arguments));
	    }

	    _createClass(Content, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            document.getElementById("container").style.opacity = 1;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "container" },
	                React.createElement(
	                    "div",
	                    { className: "appUpper" },
	                    React.createElement(
	                        "div",
	                        { className: "content" },
	                        React.createElement(
	                            "div",
	                            { className: "title" },
	                            React.createElement("img", { src: imgsrc + "appdownload/title.png", alt: "" })
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "qr" },
	                            React.createElement(
	                                "div",
	                                { className: "qrImg" },
	                                React.createElement("img", { src: imgsrc + "appdownload/2v.png", alt: "" })
	                            ),
	                            React.createElement(
	                                "em",
	                                { className: "scan" },
	                                "Scan QR code to download"
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "button" },
	                            React.createElement(
	                                "a",
	                                { href: "" },
	                                React.createElement(
	                                    "em",
	                                    { className: "icon" },
	                                    React.createElement("img", { src: imgsrc + "appdownload/ios_icon.png", alt: "" })
	                                ),
	                                React.createElement(
	                                    "em",
	                                    { className: "cat_intro" },
	                                    React.createElement(
	                                        "em",
	                                        null,
	                                        "Download on the "
	                                    ),
	                                    React.createElement(
	                                        "em",
	                                        null,
	                                        "App Store"
	                                    )
	                                )
	                            ),
	                            React.createElement(
	                                "a",
	                                { href: "" },
	                                React.createElement(
	                                    "em",
	                                    { className: "icon" },
	                                    React.createElement("img", { src: imgsrc + "appdownload/android_icon.png", alt: "" })
	                                ),
	                                React.createElement(
	                                    "em",
	                                    { className: "cat_intro" },
	                                    React.createElement(
	                                        "em",
	                                        null,
	                                        "Available on the Android "
	                                    ),
	                                    React.createElement(
	                                        "em",
	                                        null,
	                                        "App Store"
	                                    )
	                                )
	                            )
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "appLower" },
	                    React.createElement(
	                        "div",
	                        { className: "sd" },
	                        React.createElement("img", { src: imgsrc + "appdownload/sd.png", alt: "" })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "content" },
	                        React.createElement(
	                            "div",
	                            { className: "first" },
	                            React.createElement(
	                                "div",
	                                { className: "circle" },
	                                React.createElement("img", { src: imgsrc + "appdownload/commodity.png", alt: "" })
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "intro" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "Infinite Choice"
	                                ),
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "Items from Taobao, Tmall, and other e-commerce platforms are available"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "iphone" },
	                                React.createElement("img", { src: imgsrc + "appdownload/a_iphone6.png", alt: "" })
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "second" },
	                            React.createElement(
	                                "div",
	                                { className: "circle" },
	                                React.createElement("img", { src: imgsrc + "appdownload/pay.png", alt: "" })
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "intro" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "Easy Pay"
	                                ),
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "Multiple payment methods are available, safe and convenient."
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "iphone" },
	                                React.createElement("img", { src: imgsrc + "appdownload/b_iphone6.png", alt: "" })
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "third" },
	                            React.createElement(
	                                "div",
	                                { className: "circle" },
	                                React.createElement("img", { src: imgsrc + "appdownload/delivery_fee.png", alt: "" })
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "intro" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "Shipping Perks"
	                                ),
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "Cooperation with international famous logistics companies"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "iphone" },
	                                React.createElement("img", { src: imgsrc + "appdownload/c_iphone6.png", alt: "" })
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Content;
	}(React.Component);

	var Wrap = window.supervar.Wrap;
	var content = ReactDOM.render(React.createElement(Wrap, { content: Content }), document.getElementById("container"));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./APPDownLoad.less", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./APPDownLoad.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\n/* your business less */\nbody {\n  min-width: 760px;\n  margin: 0 auto;\n}\n.container {\n  width: 100%;\n}\n.container .appUpper {\n  width: 100%;\n  height: 665px;\n  background: #fff url('/en/source/img/appdownload/banner.png') no-repeat 0 center;\n  background-size: cover;\n}\n.container .appUpper .content {\n  width: 1200px;\n  margin: 0 auto;\n  height: 665px;\n  position: relative;\n}\n.container .appUpper .content .qr {\n  position: absolute;\n  left: 621px;\n  top: 256px;\n  text-align: center;\n}\n.container .appUpper .content .qr .qrImg {\n  padding-right: 20px;\n  border-right: 1px solid #303539;\n}\n.container .appUpper .content .qr .scan {\n  font-size: 18px;\n  color: #fff;\n  display: block;\n  margin: -9px auto 0;\n  width: 125px;\n}\n.container .appUpper .content .title {\n  position: absolute;\n  top: 142px;\n  left: 605px;\n}\n.container .appUpper .content .title > img {\n  width: 261px;\n  height: 80px;\n}\n.container .appUpper .content .button {\n  float: right;\n  margin-top: 275px;\n  width: 300px;\n}\n.container .appUpper .content .button > a {\n  display: block;\n  height: 80px;\n  border-radius: 60px;\n  background-color: #1a69b8;\n  margin-bottom: 30px ;\n}\n.container .appUpper .content .button > a:hover {\n  cursor: pointer;\n}\n.container .appUpper .content .button > a:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.container .appUpper .content .button > a > em {\n  float: left;\n}\n.container .appUpper .content .button > a > .cat_intro {\n  margin-left: 20px;\n  margin-top: 11px;\n}\n.container .appUpper .content .button > a > .cat_intro em {\n  display: block;\n  color: #fff;\n}\n.container .appUpper .content .button > a > .cat_intro em:first-child {\n  font-size: 16px;\n}\n.container .appUpper .content .button > a > .cat_intro em:last-child {\n  font-size: 24px;\n}\n.container .appUpper .content .button > a > .icon {\n  margin-left: 33px;\n  margin-top: 15px;\n}\n.container .appLower {\n  width: 100%;\n  padding-top: 60px;\n  position: relative;\n  height: 883px;\n  overflow: hidden;\n}\n.container .appLower .sd {\n  position: absolute;\n  bottom: 0;\n  margin: 0 auto;\n  width: 100%;\n}\n.container .appLower .sd > img {\n  width: 100%;\n}\n.container .appLower .content {\n  width: 1200px;\n  margin: 0 auto;\n}\n.container .appLower .content:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.container .appLower .content > div {\n  float: left;\n  width: 400px;\n}\n.container .appLower .content > div .iphone {\n  text-align: center;\n  margin-top: 67px;\n}\n.container .appLower .content > div .intro {\n  text-align: center;\n  margin-top: 33px;\n}\n.container .appLower .content > div .intro > em {\n  display: block;\n  line-height: 1.5;\n}\n.container .appLower .content > div .intro > em:first-child {\n  font-size: 32px;\n  color: #152340;\n  font-weight: 600;\n  line-height: 2;\n}\n.container .appLower .content > div .intro > em:last-child {\n  font-size: 16px;\n  color: #666;\n  line-height: 1.5;\n}\n.container .appLower .content > div .circle {\n  width: 182px;\n  height: 182px;\n  border-radius: 50%;\n  background-color: #1a69b8;\n  margin: 0 auto;\n  display: table;\n}\n.container .appLower .content > div .circle > img {\n  display: block;\n  margin: 0 auto;\n  margin-top: 65px;\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);