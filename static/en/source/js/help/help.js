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

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(4);

	var _TopImg = __webpack_require__(8);

	var _TopImg2 = _interopRequireDefault(_TopImg);

	var _LeftNav = __webpack_require__(15);

	var _LeftNav2 = _interopRequireDefault(_LeftNav);

	var _HelpMain = __webpack_require__(25);

	var _HelpMain2 = _interopRequireDefault(_HelpMain);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var apiUrl = window.supervar.apiURL;

	var ComponentHelp = function (_React$Component) {
		_inherits(ComponentHelp, _React$Component);

		function ComponentHelp() {
			_classCallCheck(this, ComponentHelp);

			return _possibleConstructorReturn(this, (ComponentHelp.__proto__ || Object.getPrototypeOf(ComponentHelp)).apply(this, arguments));
		}

		_createClass(ComponentHelp, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					React.createElement(_TopImg2.default, null),
					React.createElement(
						'div',
						{ className: 'content' },
						React.createElement('div', { id: 'leftNav' }),
						React.createElement('div', { id: 'helpMain' })
					)
				);
			}
		}]);

		return ComponentHelp;
	}(React.Component);

	var Wrap = window.supervar.Wrap;

	var content = ReactDOM.render(React.createElement(Wrap, { content: ComponentHelp }), document.body);

	ReactDOM.render(React.createElement(_HelpMain2.default, null), document.getElementById('helpMain'));
	ReactDOM.render(React.createElement(_LeftNav2.default, null), document.getElementById('leftNav'));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./help.less", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./help.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\n/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\nhtml,\nbody {\n  width: 100%;\n  height: auto !important;\n  background: #ffffff;\n}\n.content {\n  overflow: hidden;\n  width: 1200px;\n  margin: 0 auto;\n}\n", ""]);

	// exports


/***/ },
/* 6 */
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
/* 7 */
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
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

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

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
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


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(9);

	var _SearchHelps = __webpack_require__(11);

	var _SearchHelps2 = _interopRequireDefault(_SearchHelps);

	var _LeftNav = __webpack_require__(15);

	var _LeftNav2 = _interopRequireDefault(_LeftNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TopImg = function (_React$Component) {
		_inherits(TopImg, _React$Component);

		function TopImg() {
			_classCallCheck(this, TopImg);

			return _possibleConstructorReturn(this, (TopImg.__proto__ || Object.getPrototypeOf(TopImg)).apply(this, arguments));
		}

		_createClass(TopImg, [{
			key: 'Search',
			value: function Search() {
				if (this.refs.input.value.length > 0) {
					window.location.hash = "search";
					ReactDOM.unmountComponentAtNode(document.getElementById('leftNav'));
					ReactDOM.render(React.createElement(_LeftNav2.default, null), document.getElementById('leftNav'));
					ReactDOM.unmountComponentAtNode(document.getElementById('helpMain'));
					ReactDOM.render(React.createElement(_SearchHelps2.default, { keywords: this.refs.input.value }), document.getElementById('helpMain'));
				} else {
					alert("Please enter keywords to search");
				}
			}
		}, {
			key: 'keyDownHandle',
			value: function keyDownHandle(e) {
				if (e.keyCode.toString() == '13') {
					this.Search();
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'top-part' },
					React.createElement(
						'div',
						{ className: 'container' },
						React.createElement(
							'h1',
							null,
							React.createElement(
								'a',
								{ href: '/cn/page/help/' },
								'Help Center'
							)
						),
						React.createElement(
							'h2',
							null,
							'Customer First, Extreme Service'
						),
						React.createElement(
							'h2',
							null,
							'7X24Non-Stop Online Service, Exclusive CEO Email'
						),
						React.createElement(
							'div',
							{ className: 'searchbox' },
							React.createElement('input', { placeholder: 'Enter keywords to search', ref: 'input', type: 'text', onKeyDown: this.keyDownHandle.bind(this) }),
							React.createElement(
								'a',
								{ onClick: this.Search.bind(this), ref: 'search' },
								'Search'
							)
						)
					)
				);
			}
		}]);

		return TopImg;
	}(React.Component);

	exports.default = TopImg;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./topImg.less", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./topImg.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\n/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\nhtml,\nbody {\n  width: 100%;\n  height: auto !important;\n  background: #ffffff;\n}\n.content {\n  overflow: hidden;\n  width: 1200px;\n  margin: 0 auto;\n}\n.top-part {\n  width: 100%;\n  height: 500px;\n  background: url('/en/source/img//help/top_img.jpg') no-repeat center 0 #0f1211;\n  background-size: 1920px 500px;\n}\n.top-part .container {\n  width: 1200px;\n  margin: 0 auto;\n  height: 100%;\n}\n.top-part .container h1 {\n  height: 63px;\n  line-height: 63px;\n  padding: 65px 0 60px 0px;\n  font-weight: lighter;\n}\n.top-part .container h1 a {\n  color: #ffffff;\n  font-size: 63px;\n  cursor: pointer;\n}\n.top-part .container h1 a:hover {\n  text-decoration: none;\n}\n.top-part .container h2 {\n  font-size: 24px;\n  color: #ffffff;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 0 22px 0px;\n  font-weight: lighter;\n}\n.top-part .container .searchbox {\n  margin: 22px 0 0 0px;\n  height: 75px;\n}\n.top-part .container .searchbox input[type=text] {\n  width: 509px;\n  text-indent: 28px;\n  color: #7a7a7a;\n  font-size: 24px;\n  height: 73px;\n  line-height: 73px;\n  border: 1px solid #081b35;\n  border-right: 0;\n  float: left;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.top-part .container .searchbox input[type=text]:focus {\n  color: #142341;\n}\n.top-part .container .searchbox a {\n  width: 176px;\n  height: 75px;\n  line-height: 75px;\n  color: #ffffff;\n  font-size: 24px;\n  text-align: center;\n  background-color: #1268bb;\n  border: none;\n  float: left;\n  display: block;\n  cursor: pointer;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.top-part .container .searchbox a:hover {\n  text-decoration: none;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HelpData = __webpack_require__(12);

	var _HelpData2 = _interopRequireDefault(_HelpData);

	var _Pagination = __webpack_require__(14);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zaki on 2016/8/26.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var SearchHelps = function (_React$Component) {
	  _inherits(SearchHelps, _React$Component);

	  function SearchHelps(props) {
	    _classCallCheck(this, SearchHelps);

	    var _this = _possibleConstructorReturn(this, (SearchHelps.__proto__ || Object.getPrototypeOf(SearchHelps)).call(this, props));

	    _this.state = {
	      currentTab: 0,
	      index: 1,
	      size: 15,
	      total: 0,
	      pages: 8,
	      keywords: _this.props.keywords,
	      helps: [],
	      helptabs: []
	    };
	    return _this;
	  }

	  _createClass(SearchHelps, [{
	    key: 'onChange',
	    value: function onChange(current) {
	      this.setState({
	        index: current
	      });
	      this.getHelpData(current);
	    }
	  }, {
	    key: 'handleChangeTab',
	    value: function handleChangeTab(e) {
	      var _this2 = this;

	      var key = e.currentTarget.getAttribute('name');
	      var cateId = e.currentTarget.getAttribute('accessKey');
	      var helpsUrl = window.supervar.apiURL + 'help/list';

	      if (key == 0) {
	        this.getHelpData(1);
	        this.setState({
	          currentTab: key,
	          index: 1
	        });
	      } else {
	        fetch(helpsUrl, {
	          method: "POST",
	          credentials: 'include',
	          headers: {
	            "Content-Type": "application/x-www-form-urlencoded"
	          },
	          body: JSON.stringify({
	            keywords: this.state.keywords,
	            categoryId: cateId,
	            currPage: 1,
	            pageSize: this.state.size
	          })
	        }).then(function (response) {
	          return response.json();
	        }).then(function (data) {
	          if (data.state.toString() == "0") {
	            _this2.setState({
	              helps: data.data.listResult == null ? [] : data.data.listResult,
	              total: data.data.totalRow,
	              currentTab: key,
	              index: 1
	            });
	          }
	        });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.getHelpData(this.state.index);
	    }
	  }, {
	    key: 'getHelpData',
	    value: function getHelpData(current) {
	      var _this3 = this;

	      var helpsUrl = window.supervar.apiURL + 'help/list';
	      fetch(helpsUrl, {
	        method: "POST",
	        credentials: 'include',
	        headers: {
	          "Content-Type": "application/x-www-form-urlencoded"
	        },
	        body: JSON.stringify({
	          keywords: this.state.keywords,
	          currPage: current,
	          pageSize: this.state.size
	        })
	      }).then(function (response) {
	        return response.json();
	      }).then(function (data) {
	        if (data.state.toString() == "0") {
	          _this3.setState({
	            helps: data.data.listResult == null ? [] : data.data.listResult,
	            total: data.data.totalRow,
	            helptabs: data.data.superCate == null ? [] : data.data.superCate.length > 3 ? data.data.superCate.slice(0, 3) : data.data.superCate,
	            currentTab: 0
	          });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      return React.createElement(
	        'div',
	        { className: 'right-part' },
	        React.createElement(
	          'div',
	          { className: 'search-container' },
	          this.state.total > 0 ? React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'ul',
	              { className: 'search-tab clearfix' },
	              React.createElement(
	                'li',
	                { ref: 'tab_0', name: 0, accessKey: 0,
	                  onClick: this.handleChangeTab.bind(this) },
	                React.createElement(
	                  'div',
	                  { className: this.state.currentTab == 0 ? 'active' : '' },
	                  '全部'
	                )
	              ),
	              this.state.helptabs.map(function (tab, i) {
	                return React.createElement(
	                  'li',
	                  { ref: 'tab_' + (i + 1), name: i + 1, accessKey: tab.categoryId,
	                    onClick: _this4.handleChangeTab.bind(_this4) },
	                  React.createElement(
	                    'div',
	                    { className: _this4.state.currentTab == i + 1 ? 'active' : '' },
	                    tab.categoryName
	                  )
	                );
	              })
	            ),
	            React.createElement(
	              'div',
	              { className: 'search-result' },
	              React.createElement(_HelpData2.default, { helpData: this.state.helps, keyWords: this.state.keywords, total: this.state.total })
	            ),
	            React.createElement(
	              'div',
	              { className: 'pagination' },
	              React.createElement(_Pagination2.default, {
	                index: this.state.index,
	                size: this.state.size,
	                total: this.state.total,
	                pages: this.state.pages,
	                callbackParent: this.onChange.bind(this)
	              })
	            )
	          ) : React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'ul',
	              { className: 'search-tab clearfix' },
	              React.createElement(
	                'li',
	                { ref: 'tab_0', name: 0, accessKey: 0,
	                  onClick: this.handleChangeTab.bind(this) },
	                React.createElement(
	                  'div',
	                  { className: this.state.currentTab == 0 ? 'active' : '' },
	                  'ALL'
	                )
	              ),
	              this.state.helptabs.map(function (tab, i) {
	                return React.createElement(
	                  'li',
	                  { ref: 'tab_' + (i + 1), name: i + 1, accessKey: tab.categoryId,
	                    onClick: _this4.handleChangeTab.bind(_this4) },
	                  React.createElement(
	                    'div',
	                    { className: _this4.state.currentTab == i + 1 ? 'active' : '' },
	                    tab.categoryName
	                  )
	                );
	              })
	            ),
	            React.createElement(
	              'div',
	              { className: 'search-result no-result' },
	              'No data'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return SearchHelps;
	}(React.Component);

	exports.default = SearchHelps;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HelpInformation = __webpack_require__(13);

	var _HelpInformation2 = _interopRequireDefault(_HelpInformation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zaki on 2016/8/26.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var HelpData = function (_React$Component) {
	  _inherits(HelpData, _React$Component);

	  function HelpData(props) {
	    _classCallCheck(this, HelpData);

	    return _possibleConstructorReturn(this, (HelpData.__proto__ || Object.getPrototypeOf(HelpData)).call(this, props));
	  }

	  _createClass(HelpData, [{
	    key: 'changeContent',
	    value: function changeContent(helpId) {
	      window.location.hash += "_helpId" + helpId;
	      ReactDOM.unmountComponentAtNode(document.getElementById('helpMain'));
	      ReactDOM.render(React.createElement(_HelpInformation2.default, { helpId: window.location.hash.substring(window.location.hash.indexOf('_helpId') + 7) }), document.getElementById('helpMain'));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'div',
	          { className: 'query' },
	          ' search keywords: ',
	          React.createElement(
	            'span',
	            null,
	            this.props.keyWords
	          ),
	          ' search result：',
	          React.createElement(
	            'span',
	            null,
	            this.props.total,
	            '个'
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'search-result' },
	          this.props.helpData.map(function (helpitem) {
	            return React.createElement(
	              'div',
	              { className: 'help-item' },
	              React.createElement(
	                'div',
	                { className: 'help-title', onClick: _this2.changeContent.bind(_this2, helpitem.helpId) },
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: helpitem.helpTitle } })
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return HelpData;
	}(React.Component);

	exports.default = HelpData;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Author: zaki
	 * Email: codelai@dotdotbuy.com
	 * DateTime: 2016/9/7 10:06
	 */
	var HelpInformation = function (_React$Component) {
	  _inherits(HelpInformation, _React$Component);

	  function HelpInformation(props) {
	    _classCallCheck(this, HelpInformation);

	    var _this = _possibleConstructorReturn(this, (HelpInformation.__proto__ || Object.getPrototypeOf(HelpInformation)).call(this, props));

	    _this.state = {
	      helpId: _this.props.helpId,
	      questionTitle: '',
	      questionInfo: '',
	      message: ''
	    };
	    return _this;
	  }

	  _createClass(HelpInformation, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      var helpsUrl = window.supervar.apiURL + 'help/info';
	      fetch(helpsUrl, {
	        method: "POST",
	        credentials: 'include',
	        headers: {
	          "Content-Type": "application/x-www-form-urlencoded"
	        },
	        body: JSON.stringify({
	          helpId: this.props.helpId
	        })
	      }).then(function (response) {
	        return response.json();
	      }).then(function (data) {
	        if (data.state.toString() == "0") {
	          _this2.setState({
	            questionTitle: data.data.helpTitle,
	            questionInfo: data.data.helpContent
	          });
	        } else {
	          _this2.setState({
	            message: data.msg
	          });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var info = this.state.questionInfo;
	      return React.createElement(
	        'div',
	        { className: 'right-part' },
	        React.createElement(
	          'div',
	          { className: 'search-container' },
	          React.createElement('div', { className: 'category', dangerouslySetInnerHTML: { __html: this.state.questionTitle } }),
	          React.createElement(
	            'div',
	            { className: 'search-result' },
	            React.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.questionInfo } })
	          )
	        )
	      );
	    }
	  }]);

	  return HelpInformation;
	}(React.Component);

	exports.default = HelpInformation;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Created by zaki on 2016/8/26.
	 */

	var Pagination = function (_React$Component) {
	  _inherits(Pagination, _React$Component);

	  function Pagination(props) {
	    _classCallCheck(this, Pagination);

	    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

	    _this.state = {
	      index: props.index
	    };
	    return _this;
	  }

	  _createClass(Pagination, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.index !== this.props.index) {
	        this.setState({ index: nextProps.index });
	      }
	    }
	  }, {
	    key: "handleChange",
	    value: function handleChange(index) {
	      this.setState({
	        index: parseInt(index)
	      });
	      if (this.props.onChange) {
	        this.props.onChange(index);
	      }
	      this.props.callbackParent(index);
	    }
	  }, {
	    key: "getPages",
	    value: function getPages() {
	      var _props = this.props;
	      var total = _props.total;
	      var size = _props.size;
	      var pages = _props.pages;

	      var index = this.state.index;
	      var max = Math.ceil(total / size),
	          left = void 0,
	          right = void 0,
	          span = pages;
	      pages = [];

	      if (max < span) {
	        right = max;
	        left = 1;
	      } else {
	        var center = Math.floor(span / 2) + 1;
	        if (index > max) {
	          index = max;
	        }

	        if (index < center) {
	          left = 1;
	          right = span;
	        } else {
	          left = index - center + 1;
	          right = index + center - 2;
	          if (right > max) {
	            right = max;
	            left = right - center - 2;
	          }
	        }
	      }

	      for (var i = left; i < right + 1; i++) {
	        pages.push(i);
	      }

	      return { pages: pages, max: max };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var items = [];
	      var index = this.state.index;

	      var _getPages = this.getPages();

	      var pages = _getPages.pages;
	      var max = _getPages.max;


	      items.push(React.createElement(
	        "li",
	        { className: "pagination-first", key: "first", onClick: this.handleChange.bind(this, 1) },
	        React.createElement(
	          "a",
	          null,
	          "Home"
	        )
	      ));
	      items.push(React.createElement(
	        "li",
	        { className: index <= 1 ? "disabled" : "", key: "prev", onClick: index <= 1 ? null : this.handleChange.bind(this, index - 1) },
	        React.createElement(
	          "a",
	          null,
	          "Previous Page"
	        )
	      ));

	      for (var i = 0; i < pages.length; i++) {
	        items.push(React.createElement(
	          "li",
	          { className: pages[i] == index ? "active" : "", onClick: this.handleChange.bind(this, pages[i]), key: pages[i] },
	          React.createElement(
	            "a",
	            { className: "" },
	            " ",
	            pages[i]
	          )
	        ));
	      }

	      items.push(React.createElement(
	        "li",
	        { className: index >= max ? "disabled" : "", key: "next", onClick: index >= max ? null : this.handleChange.bind(this, index + 1) },
	        React.createElement(
	          "a",
	          null,
	          "Next Page"
	        )
	      ));

	      items.push(React.createElement(
	        "li",
	        { className: "pagination-last", key: "last", onClick: this.handleChange.bind(this, max) },
	        React.createElement(
	          "a",
	          null,
	          "Last Page"
	        )
	      ));

	      return React.createElement(
	        "ul",
	        { className: "clearfix" },
	        items
	      );
	    }
	  }]);

	  return Pagination;
	}(React.Component);

	exports.default = Pagination;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(16);

	__webpack_require__(17);

	__webpack_require__(22);

	var _HelpContent = __webpack_require__(24);

	var _HelpContent2 = _interopRequireDefault(_HelpContent);

	var _HelpInformation = __webpack_require__(13);

	var _HelpInformation2 = _interopRequireDefault(_HelpInformation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LeftNav = function (_React$Component) {
		_inherits(LeftNav, _React$Component);

		function LeftNav(props) {
			_classCallCheck(this, LeftNav);

			var _this = _possibleConstructorReturn(this, (LeftNav.__proto__ || Object.getPrototypeOf(LeftNav)).call(this, props));

			_this.state = {
				currentSon: -1,
				currentFar: -1,
				categorys: []
			};
			return _this;
		}

		_createClass(LeftNav, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.handlerGetCategories();
			}
		}, {
			key: 'handlerGetCategories',
			value: function handlerGetCategories() {
				var _this2 = this;

				var categoriesUrl = window.supervar.apiURL + 'help/class-list';
				fetch(categoriesUrl, {
					method: "POST",
					credentials: 'include',
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: JSON.stringify({
						parentId: 0
					})
				}).then(function (response) {
					return response.json();
				}).then(function (data) {
					if (data.state.toString() == "0") {
						_this2.setState({
							categorys: data.data
						});
						var hash = window.location.hash;
						if (hash != "#qq") {
							var pId = hash.substring(2, hash.indexOf('_'));
							var helpId = hash.indexOf('helpId');
							if (pId.length > 0) {
								if (pId >= 0) {
									if (data.data.length > 0) {
										if (data.data[parseInt(pId)].hasOwnProperty('sonCategory')) {
											var sonNum = data.data[parseInt(pId)].sonCategory.length;
											document.getElementById('ul_' + pId).style.height = sonNum * 36 + 'px';
										}
									}
								}
							}

							if (helpId > 0) {
								ReactDOM.unmountComponentAtNode(document.getElementById('helpMain'));
								ReactDOM.render(React.createElement(_HelpInformation2.default, { helpId: hash.substring(helpId + 6) }), document.getElementById('helpMain'));
							}
						} else {
							_this2.setScrollTop(_this2.getScrollTop());
						}
					}
				});
			}
		}, {
			key: 'setScrollTop',
			value: function setScrollTop(scroll_top) {
				document.documentElement.scrollTop = scroll_top;
				window.pageYOffset = scroll_top;
				document.body.scrollTop = scroll_top;
			}
		}, {
			key: 'getScrollTop',
			value: function getScrollTop() {
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				return scrollTop;
			}
		}, {
			key: 'showItems',
			value: function showItems(i, e) {
				this.setState({
					currentFar: i
				});
				window.location.hash = 'p' + i + '_';
				var target = e.currentTarget;

				var siblings = this.sibling(target);
				var parentSiblings = this.sibling(target.parentNode);
				for (var _i = 0; _i < parentSiblings.length; _i++) {
					parentSiblings[_i].childNodes[1].style.height = 0 + 'px';
				}
				if (!this.hasClass(target, 'titleActive')) {
					this.addClass(target, 'titleActive');
					if (this.state.categorys[i].hasOwnProperty('sonCategory')) {
						var sonNum = this.state.categorys[i].sonCategory.length;
						for (var _i2 = 0; _i2 < siblings.length; _i2++) {
							siblings[_i2].style.height = sonNum * 36 + 'px';
						}
					}
				} else {
					this.removeClass(target, 'titleActive');
					window.location.hash = "#n";
					for (var _i3 = 0; _i3 < siblings.length; _i3++) {
						siblings[_i3].style.height = 0 + 'px';
					}
				}
			}
		}, {
			key: 'addClass',
			value: function addClass(elem, cls) {
				if (!this.hasClass(elem, cls)) {
					elem.className += ' ' + cls;
				}
			}
		}, {
			key: 'removeClass',
			value: function removeClass(elem, cls) {
				if (this.hasClass(elem, cls)) {
					var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
					while (newClass.indexOf(' ' + cls + ' ') >= 0) {
						newClass = newClass.replace(' ' + cls + ' ', ' ');
					}
					elem.className = newClass.replace(/^\s+|\s+$/g, '');
				}
			}
		}, {
			key: 'hasClass',
			value: function hasClass(elem, cls) {
				cls = cls || '';
				if (cls.replace(/\s/g, '').length == 0) return false;
				return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
			}
		}, {
			key: 'sibling',
			value: function sibling(elem) {
				var siblings = [];
				var n = elem.parentNode.firstChild;
				for (; n; n = n.nextSibling) {
					if (n.nodeType === 1 && n !== elem) {
						siblings.push(n);
					}
				}
				return siblings;
			}
		}, {
			key: 'changeContent',
			value: function changeContent(categoryId, categoryName, i, j, e) {
				window.location.hash = 'p' + j + '_' + categoryId;
				window.localStorage.setItem('categoryName', categoryName);
				this.setState({
					currentSon: categoryId,
					currentName: categoryName
				});
				ReactDOM.unmountComponentAtNode(document.getElementById('helpMain'));
				ReactDOM.render(React.createElement(_HelpContent2.default, { category: categoryId, categoryName: categoryName }), document.getElementById('helpMain'));
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				var hash = window.location.hash;
				return React.createElement(
					'div',
					{ className: 'left-part' },
					React.createElement(
						'h1',
						null,
						'FAQ Categories'
					),
					React.createElement(
						'ul',
						{ className: 'ul-outer' },
						this.state.categorys.map(function (li, i) {
							return React.createElement(
								'li',
								{ className: 'ul-li-outer' },
								React.createElement(
									'div',
									{
										className: i == parseInt(hash.substring(2, hash.indexOf('_'))) ? "title titleActive" : "title",
										onClick: _this3.showItems.bind(_this3, i) },
									React.createElement(
										'h3',
										null,
										li.categoryName
									),
									React.createElement('span', null)
								),
								React.createElement(
									'ul',
									{ className: "ul-inner", id: 'ul_' + i },
									li.hasOwnProperty('sonCategory') ? li.sonCategory.map(function (sli, j) {
										return React.createElement(
											'li',
											{ className: parseInt(hash.substring(hash.indexOf('_') + 1)) == sli.categoryId ? 'ul-li-inner son-active' : 'ul-li-inner',
												onClick: _this3.changeContent.bind(_this3, sli.categoryId, sli.categoryName, j, i) },
											sli.categoryName
										);
									}) : ''
								)
							);
						})
					),
					React.createElement(
						'div',
						{ className: 'mail-box' },
						React.createElement(
							'a',
							{ className: 'container' },
							React.createElement(
								'div',
								null,
								React.createElement(
									'h2',
									null,
									'Problem not yet solved?'
								),
								React.createElement(
									'h2',
									null,
									'Talk to the boss!'
								),
								React.createElement(
									'a',
									{ className: 'mail', href: 'mailto:CEO@superbuy.com?spm=2101.892.N.N.1061f70', target: '_blank' },
									'CEO@superbuy.com'
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'info' },
							React.createElement(
								'h2',
								null,
								'Email is guaranteed replied within 2 days, please check junk mailbox.Or just contact our CEO directly in Group.'
							)
						)
					)
				);
			}
		}]);

		return LeftNav;
	}(React.Component);

	exports.default = LeftNav;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	(function (self) {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function next() {
	        var value = items.shift();
	        return { done: value === undefined, value: value };
	      }
	    };

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function () {
	        return iterator;
	      };
	    }

	    return iterator;
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var list = this.map[name];
	    if (!list) {
	      list = [];
	      this.map[name] = list;
	    }
	    list.push(value);
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    var values = this.map[normalizeName(name)];
	    return values ? values[0] : null;
	  };

	  Headers.prototype.getAll = function (name) {
	    return this.map[normalizeName(name)] || [];
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)];
	  };

	  Headers.prototype.forEach = function (callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function (name) {
	      this.map[name].forEach(function (value) {
	        callback.call(thisArg, value, name, this);
	      }, this);
	    }, this);
	  };

	  Headers.prototype.keys = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push(name);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.values = function () {
	    var items = [];
	    this.forEach(function (value) {
	      items.push(value);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.entries = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push([name, value]);
	    });
	    return iteratorFor(items);
	  };

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    return fileReaderReady(reader);
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    reader.readAsText(blob);
	    return fileReaderReady(reader);
	  }

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString();
	      } else if (!body) {
	        this._bodyText = '';
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type');
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        return this.blob().then(readBlobAsArrayBuffer);
	      };

	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text');
	        } else {
	          return Promise.resolve(this._bodyText);
	        }
	      };
	    } else {
	      this.text = function () {
	        var rejected = consumed(this);
	        return rejected ? rejected : Promise.resolve(this._bodyText);
	      };
	    }

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = input;
	    }

	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }

	  Request.prototype.clone = function () {
	    return new Request(this);
	  };

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function headers(xhr) {
	    var head = new Headers();
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n');
	    pairs.forEach(function (header) {
	      var split = header.trim().split(':');
	      var key = split.shift().trim();
	      var value = split.join(':').trim();
	      head.append(key, value);
	    });
	    return head;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this.type = 'default';
	    this.status = options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = options.statusText;
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }

	  Body.call(Response.prototype);

	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };

	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };

	  var redirectStatuses = [301, 302, 303, 307, 308];

	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }

	    return new Response(null, { status: status, headers: { location: url } });
	  };

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request;
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input;
	      } else {
	        request = new Request(input, init);
	      }

	      var xhr = new XMLHttpRequest();

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL;
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL');
	        }

	        return;
	      }

	      xhr.onload = function () {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        };
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.ontimeout = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;var require;/* WEBPACK VAR INJECTION */(function(process, global, module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.2.1
	 */

	(function () {
	  "use strict";

	  function lib$es6$promise$utils$$objectOrFunction(x) {
	    return typeof x === 'function' || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null;
	  }

	  function lib$es6$promise$utils$$isFunction(x) {
	    return typeof x === 'function';
	  }

	  function lib$es6$promise$utils$$isMaybeThenable(x) {
	    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null;
	  }

	  var lib$es6$promise$utils$$_isArray;
	  if (!Array.isArray) {
	    lib$es6$promise$utils$$_isArray = function lib$es6$promise$utils$$_isArray(x) {
	      return Object.prototype.toString.call(x) === '[object Array]';
	    };
	  } else {
	    lib$es6$promise$utils$$_isArray = Array.isArray;
	  }

	  var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	  var lib$es6$promise$asap$$len = 0;
	  var lib$es6$promise$asap$$vertxNext;
	  var lib$es6$promise$asap$$customSchedulerFn;

	  var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	    lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	    lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	    lib$es6$promise$asap$$len += 2;
	    if (lib$es6$promise$asap$$len === 2) {
	      // If len is 2, that means that we need to schedule an async flush.
	      // If additional callbacks are queued before the queue is flushed, they
	      // will be processed by this flush that we are scheduling.
	      if (lib$es6$promise$asap$$customSchedulerFn) {
	        lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	      } else {
	        lib$es6$promise$asap$$scheduleFlush();
	      }
	    }
	  };

	  function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	    lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	  }

	  function lib$es6$promise$asap$$setAsap(asapFn) {
	    lib$es6$promise$asap$$asap = asapFn;
	  }

	  var lib$es6$promise$asap$$browserWindow = typeof window !== 'undefined' ? window : undefined;
	  var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	  var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	  var lib$es6$promise$asap$$isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	  // test for web worker but not in IE10
	  var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	  // node
	  function lib$es6$promise$asap$$useNextTick() {
	    // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	    // see https://github.com/cujojs/when/issues/410 for details
	    return function () {
	      process.nextTick(lib$es6$promise$asap$$flush);
	    };
	  }

	  // vertx
	  function lib$es6$promise$asap$$useVertxTimer() {
	    return function () {
	      lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	    };
	  }

	  function lib$es6$promise$asap$$useMutationObserver() {
	    var iterations = 0;
	    var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	    var node = document.createTextNode('');
	    observer.observe(node, { characterData: true });

	    return function () {
	      node.data = iterations = ++iterations % 2;
	    };
	  }

	  // web worker
	  function lib$es6$promise$asap$$useMessageChannel() {
	    var channel = new MessageChannel();
	    channel.port1.onmessage = lib$es6$promise$asap$$flush;
	    return function () {
	      channel.port2.postMessage(0);
	    };
	  }

	  function lib$es6$promise$asap$$useSetTimeout() {
	    return function () {
	      setTimeout(lib$es6$promise$asap$$flush, 1);
	    };
	  }

	  var lib$es6$promise$asap$$queue = new Array(1000);
	  function lib$es6$promise$asap$$flush() {
	    for (var i = 0; i < lib$es6$promise$asap$$len; i += 2) {
	      var callback = lib$es6$promise$asap$$queue[i];
	      var arg = lib$es6$promise$asap$$queue[i + 1];

	      callback(arg);

	      lib$es6$promise$asap$$queue[i] = undefined;
	      lib$es6$promise$asap$$queue[i + 1] = undefined;
	    }

	    lib$es6$promise$asap$$len = 0;
	  }

	  function lib$es6$promise$asap$$attemptVertx() {
	    try {
	      var r = require;
	      var vertx = __webpack_require__(20);
	      lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	      return lib$es6$promise$asap$$useVertxTimer();
	    } catch (e) {
	      return lib$es6$promise$asap$$useSetTimeout();
	    }
	  }

	  var lib$es6$promise$asap$$scheduleFlush;
	  // Decide what async method to use to triggering processing of queued callbacks:
	  if (lib$es6$promise$asap$$isNode) {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	  } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	  } else if (lib$es6$promise$asap$$isWorker) {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	  } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	  } else {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	  }
	  function lib$es6$promise$then$$then(onFulfillment, onRejection) {
	    var parent = this;

	    var child = new this.constructor(lib$es6$promise$$internal$$noop);

	    if (child[lib$es6$promise$$internal$$PROMISE_ID] === undefined) {
	      lib$es6$promise$$internal$$makePromise(child);
	    }

	    var state = parent._state;

	    if (state) {
	      var callback = arguments[state - 1];
	      lib$es6$promise$asap$$asap(function () {
	        lib$es6$promise$$internal$$invokeCallback(state, child, callback, parent._result);
	      });
	    } else {
	      lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	    }

	    return child;
	  }
	  var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
	  function lib$es6$promise$promise$resolve$$resolve(object) {
	    /*jshint validthis:true */
	    var Constructor = this;

	    if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.constructor === Constructor) {
	      return object;
	    }

	    var promise = new Constructor(lib$es6$promise$$internal$$noop);
	    lib$es6$promise$$internal$$resolve(promise, object);
	    return promise;
	  }
	  var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	  var lib$es6$promise$$internal$$PROMISE_ID = Math.random().toString(36).substring(16);

	  function lib$es6$promise$$internal$$noop() {}

	  var lib$es6$promise$$internal$$PENDING = void 0;
	  var lib$es6$promise$$internal$$FULFILLED = 1;
	  var lib$es6$promise$$internal$$REJECTED = 2;

	  var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	  function lib$es6$promise$$internal$$selfFulfillment() {
	    return new TypeError("You cannot resolve a promise with itself");
	  }

	  function lib$es6$promise$$internal$$cannotReturnOwn() {
	    return new TypeError('A promises callback cannot return that same promise.');
	  }

	  function lib$es6$promise$$internal$$getThen(promise) {
	    try {
	      return promise.then;
	    } catch (error) {
	      lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	      return lib$es6$promise$$internal$$GET_THEN_ERROR;
	    }
	  }

	  function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	    try {
	      then.call(value, fulfillmentHandler, rejectionHandler);
	    } catch (e) {
	      return e;
	    }
	  }

	  function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	    lib$es6$promise$asap$$asap(function (promise) {
	      var sealed = false;
	      var error = lib$es6$promise$$internal$$tryThen(then, thenable, function (value) {
	        if (sealed) {
	          return;
	        }
	        sealed = true;
	        if (thenable !== value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, value);
	        }
	      }, function (reason) {
	        if (sealed) {
	          return;
	        }
	        sealed = true;

	        lib$es6$promise$$internal$$reject(promise, reason);
	      }, 'Settle: ' + (promise._label || ' unknown promise'));

	      if (!sealed && error) {
	        sealed = true;
	        lib$es6$promise$$internal$$reject(promise, error);
	      }
	    }, promise);
	  }

	  function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	    if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	      lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	    } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	      lib$es6$promise$$internal$$reject(promise, thenable._result);
	    } else {
	      lib$es6$promise$$internal$$subscribe(thenable, undefined, function (value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }, function (reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      });
	    }
	  }

	  function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
	    if (maybeThenable.constructor === promise.constructor && then === lib$es6$promise$then$$default && constructor.resolve === lib$es6$promise$promise$resolve$$default) {
	      lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	    } else {
	      if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	      } else if (then === undefined) {
	        lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	      } else if (lib$es6$promise$utils$$isFunction(then)) {
	        lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	      }
	    }
	  }

	  function lib$es6$promise$$internal$$resolve(promise, value) {
	    if (promise === value) {
	      lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	    } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	      lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
	    } else {
	      lib$es6$promise$$internal$$fulfill(promise, value);
	    }
	  }

	  function lib$es6$promise$$internal$$publishRejection(promise) {
	    if (promise._onerror) {
	      promise._onerror(promise._result);
	    }

	    lib$es6$promise$$internal$$publish(promise);
	  }

	  function lib$es6$promise$$internal$$fulfill(promise, value) {
	    if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	      return;
	    }

	    promise._result = value;
	    promise._state = lib$es6$promise$$internal$$FULFILLED;

	    if (promise._subscribers.length !== 0) {
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	    }
	  }

	  function lib$es6$promise$$internal$$reject(promise, reason) {
	    if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	      return;
	    }
	    promise._state = lib$es6$promise$$internal$$REJECTED;
	    promise._result = reason;

	    lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	  }

	  function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	    var subscribers = parent._subscribers;
	    var length = subscribers.length;

	    parent._onerror = null;

	    subscribers[length] = child;
	    subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	    subscribers[length + lib$es6$promise$$internal$$REJECTED] = onRejection;

	    if (length === 0 && parent._state) {
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	    }
	  }

	  function lib$es6$promise$$internal$$publish(promise) {
	    var subscribers = promise._subscribers;
	    var settled = promise._state;

	    if (subscribers.length === 0) {
	      return;
	    }

	    var child,
	        callback,
	        detail = promise._result;

	    for (var i = 0; i < subscribers.length; i += 3) {
	      child = subscribers[i];
	      callback = subscribers[i + settled];

	      if (child) {
	        lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	      } else {
	        callback(detail);
	      }
	    }

	    promise._subscribers.length = 0;
	  }

	  function lib$es6$promise$$internal$$ErrorObject() {
	    this.error = null;
	  }

	  var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	  function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	    try {
	      return callback(detail);
	    } catch (e) {
	      lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	      return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	    }
	  }

	  function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	    var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	        value,
	        error,
	        succeeded,
	        failed;

	    if (hasCallback) {
	      value = lib$es6$promise$$internal$$tryCatch(callback, detail);

	      if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	        failed = true;
	        error = value.error;
	        value = null;
	      } else {
	        succeeded = true;
	      }

	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	        return;
	      }
	    } else {
	      value = detail;
	      succeeded = true;
	    }

	    if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	      // noop
	    } else if (hasCallback && succeeded) {
	      lib$es6$promise$$internal$$resolve(promise, value);
	    } else if (failed) {
	      lib$es6$promise$$internal$$reject(promise, error);
	    } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	      lib$es6$promise$$internal$$fulfill(promise, value);
	    } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	      lib$es6$promise$$internal$$reject(promise, value);
	    }
	  }

	  function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	    try {
	      resolver(function resolvePromise(value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }, function rejectPromise(reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      });
	    } catch (e) {
	      lib$es6$promise$$internal$$reject(promise, e);
	    }
	  }

	  var lib$es6$promise$$internal$$id = 0;
	  function lib$es6$promise$$internal$$nextId() {
	    return lib$es6$promise$$internal$$id++;
	  }

	  function lib$es6$promise$$internal$$makePromise(promise) {
	    promise[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$id++;
	    promise._state = undefined;
	    promise._result = undefined;
	    promise._subscribers = [];
	  }

	  function lib$es6$promise$promise$all$$all(entries) {
	    return new lib$es6$promise$enumerator$$default(this, entries).promise;
	  }
	  var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	  function lib$es6$promise$promise$race$$race(entries) {
	    /*jshint validthis:true */
	    var Constructor = this;

	    if (!lib$es6$promise$utils$$isArray(entries)) {
	      return new Constructor(function (resolve, reject) {
	        reject(new TypeError('You must pass an array to race.'));
	      });
	    } else {
	      return new Constructor(function (resolve, reject) {
	        var length = entries.length;
	        for (var i = 0; i < length; i++) {
	          Constructor.resolve(entries[i]).then(resolve, reject);
	        }
	      });
	    }
	  }
	  var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	  function lib$es6$promise$promise$reject$$reject(reason) {
	    /*jshint validthis:true */
	    var Constructor = this;
	    var promise = new Constructor(lib$es6$promise$$internal$$noop);
	    lib$es6$promise$$internal$$reject(promise, reason);
	    return promise;
	  }
	  var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

	  function lib$es6$promise$promise$$needsResolver() {
	    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	  }

	  function lib$es6$promise$promise$$needsNew() {
	    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	  }

	  var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	  /**
	    Promise objects represent the eventual result of an asynchronous operation. The
	    primary way of interacting with a promise is through its `then` method, which
	    registers callbacks to receive either a promise's eventual value or the reason
	    why the promise cannot be fulfilled.
	     Terminology
	    -----------
	     - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	    - `thenable` is an object or function that defines a `then` method.
	    - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	    - `exception` is a value that is thrown using the throw statement.
	    - `reason` is a value that indicates why a promise was rejected.
	    - `settled` the final resting state of a promise, fulfilled or rejected.
	     A promise can be in one of three states: pending, fulfilled, or rejected.
	     Promises that are fulfilled have a fulfillment value and are in the fulfilled
	    state.  Promises that are rejected have a rejection reason and are in the
	    rejected state.  A fulfillment value is never a thenable.
	     Promises can also be said to *resolve* a value.  If this value is also a
	    promise, then the original promise's settled state will match the value's
	    settled state.  So a promise that *resolves* a promise that rejects will
	    itself reject, and a promise that *resolves* a promise that fulfills will
	    itself fulfill.
	      Basic Usage:
	    ------------
	     ```js
	    var promise = new Promise(function(resolve, reject) {
	      // on success
	      resolve(value);
	       // on failure
	      reject(reason);
	    });
	     promise.then(function(value) {
	      // on fulfillment
	    }, function(reason) {
	      // on rejection
	    });
	    ```
	     Advanced Usage:
	    ---------------
	     Promises shine when abstracting away asynchronous interactions such as
	    `XMLHttpRequest`s.
	     ```js
	    function getJSON(url) {
	      return new Promise(function(resolve, reject){
	        var xhr = new XMLHttpRequest();
	         xhr.open('GET', url);
	        xhr.onreadystatechange = handler;
	        xhr.responseType = 'json';
	        xhr.setRequestHeader('Accept', 'application/json');
	        xhr.send();
	         function handler() {
	          if (this.readyState === this.DONE) {
	            if (this.status === 200) {
	              resolve(this.response);
	            } else {
	              reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	            }
	          }
	        };
	      });
	    }
	     getJSON('/posts.json').then(function(json) {
	      // on fulfillment
	    }, function(reason) {
	      // on rejection
	    });
	    ```
	     Unlike callbacks, promises are great composable primitives.
	     ```js
	    Promise.all([
	      getJSON('/posts'),
	      getJSON('/comments')
	    ]).then(function(values){
	      values[0] // => postsJSON
	      values[1] // => commentsJSON
	       return values;
	    });
	    ```
	     @class Promise
	    @param {function} resolver
	    Useful for tooling.
	    @constructor
	  */
	  function lib$es6$promise$promise$$Promise(resolver) {
	    this[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$nextId();
	    this._result = this._state = undefined;
	    this._subscribers = [];

	    if (lib$es6$promise$$internal$$noop !== resolver) {
	      typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
	      this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
	    }
	  }

	  lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	  lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	  lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	  lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	  lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	  lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	  lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

	  lib$es6$promise$promise$$Promise.prototype = {
	    constructor: lib$es6$promise$promise$$Promise,

	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	       ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	       Chaining
	      --------
	       The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	       ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	       findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	       ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	       Assimilation
	      ------------
	       Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	       ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	       If the assimliated promise rejects, then the downstream promise will also reject.
	       ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	       Simple Example
	      --------------
	       Synchronous Example
	       ```javascript
	      var result;
	       try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	       Errback Example
	       ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	       Promise Example;
	       ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	       Advanced Example
	      --------------
	       Synchronous Example
	       ```javascript
	      var author, books;
	       try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	       Errback Example
	       ```js
	       function foundBooks(books) {
	       }
	       function failure(reason) {
	       }
	       findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	       Promise Example;
	       ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	       @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	    then: lib$es6$promise$then$$default,

	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	       ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	       // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	       // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	       @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	    'catch': function _catch(onRejection) {
	      return this.then(null, onRejection);
	    }
	  };
	  var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	  function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	    this._instanceConstructor = Constructor;
	    this.promise = new Constructor(lib$es6$promise$$internal$$noop);

	    if (!this.promise[lib$es6$promise$$internal$$PROMISE_ID]) {
	      lib$es6$promise$$internal$$makePromise(this.promise);
	    }

	    if (lib$es6$promise$utils$$isArray(input)) {
	      this._input = input;
	      this.length = input.length;
	      this._remaining = input.length;

	      this._result = new Array(this.length);

	      if (this.length === 0) {
	        lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	      } else {
	        this.length = this.length || 0;
	        this._enumerate();
	        if (this._remaining === 0) {
	          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	        }
	      }
	    } else {
	      lib$es6$promise$$internal$$reject(this.promise, lib$es6$promise$enumerator$$validationError());
	    }
	  }

	  function lib$es6$promise$enumerator$$validationError() {
	    return new Error('Array Methods must be provided an Array');
	  }

	  lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function () {
	    var length = this.length;
	    var input = this._input;

	    for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	      this._eachEntry(input[i], i);
	    }
	  };

	  lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function (entry, i) {
	    var c = this._instanceConstructor;
	    var resolve = c.resolve;

	    if (resolve === lib$es6$promise$promise$resolve$$default) {
	      var then = lib$es6$promise$$internal$$getThen(entry);

	      if (then === lib$es6$promise$then$$default && entry._state !== lib$es6$promise$$internal$$PENDING) {
	        this._settledAt(entry._state, i, entry._result);
	      } else if (typeof then !== 'function') {
	        this._remaining--;
	        this._result[i] = entry;
	      } else if (c === lib$es6$promise$promise$$default) {
	        var promise = new c(lib$es6$promise$$internal$$noop);
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
	        this._willSettleAt(promise, i);
	      } else {
	        this._willSettleAt(new c(function (resolve) {
	          resolve(entry);
	        }), i);
	      }
	    } else {
	      this._willSettleAt(resolve(entry), i);
	    }
	  };

	  lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function (state, i, value) {
	    var promise = this.promise;

	    if (promise._state === lib$es6$promise$$internal$$PENDING) {
	      this._remaining--;

	      if (state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      } else {
	        this._result[i] = value;
	      }
	    }

	    if (this._remaining === 0) {
	      lib$es6$promise$$internal$$fulfill(promise, this._result);
	    }
	  };

	  lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function (promise, i) {
	    var enumerator = this;

	    lib$es6$promise$$internal$$subscribe(promise, undefined, function (value) {
	      enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	    }, function (reason) {
	      enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	    });
	  };
	  function lib$es6$promise$polyfill$$polyfill() {
	    var local;

	    if (typeof global !== 'undefined') {
	      local = global;
	    } else if (typeof self !== 'undefined') {
	      local = self;
	    } else {
	      try {
	        local = Function('return this')();
	      } catch (e) {
	        throw new Error('polyfill failed because global object is unavailable in this environment');
	      }
	    }

	    var P = local.Promise;

	    if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	      return;
	    }

	    local.Promise = lib$es6$promise$promise$$default;
	  }
	  var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

	  var lib$es6$promise$umd$$ES6Promise = {
	    'Promise': lib$es6$promise$promise$$default,
	    'polyfill': lib$es6$promise$polyfill$$default
	  };

	  /* global define:true module:true window: true */
	  if ("function" === 'function' && __webpack_require__(21)['amd']) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return lib$es6$promise$umd$$ES6Promise;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module !== 'undefined' && module['exports']) {
	    module['exports'] = lib$es6$promise$umd$$ES6Promise;
	  } else if (typeof this !== 'undefined') {
	    this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	  }

	  lib$es6$promise$polyfill$$default();
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18), (function() { return this; }()), __webpack_require__(19)(module)))

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./leftNav.less", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./leftNav.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\n/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\nhtml,\nbody {\n  width: 100%;\n  height: auto !important;\n  background: #ffffff;\n}\n.content {\n  overflow: hidden;\n  width: 1200px;\n  margin: 0 auto;\n}\n.left-part {\n  width: 285px;\n  float: left;\n}\n.left-part h1 {\n  font-size: 30px;\n  color: #323232;\n  text-align: left;\n  height: 30px;\n  line-height: 30px;\n  padding: 60px 0 20px;\n}\n.left-part .ul-outer h3 {\n  font-size: 14px;\n  float: left;\n  margin-left: 18px;\n  height: 50px;\n  line-height: 50px;\n  font-weight: bold;\n}\n.left-part .ul-outer span {\n  width: 8px;\n  height: 15px;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  background: url('/en/source/img//help/prev.png') no-repeat center 0;\n  transition: all 0.6s ease-in-out;\n  transform: translateY(-50%) rotate(0deg);\n}\n.left-part .ul-outer .ul-li-outer .title {\n  transition: all 0.6s ease-in-out;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  color: #143c7c;\n}\n.left-part .ul-outer .ul-li-outer .title:hover {\n  background: #143c7c;\n  color: #ffffff;\n}\n.left-part .ul-outer .ul-li-outer .titleActive {\n  background: #143c7c;\n  color: #ffffff;\n}\n.left-part .ul-outer .ul-li-outer .titleActive span {\n  width: 15px;\n  height: 8px;\n  background: url('/en/source/img//help/prev2.png') no-repeat center 0;\n  transform: translateY(-50%) rotate(0deg);\n}\n.left-part .ul-inner {\n  overflow: hidden;\n  width: 100%;\n  height: 0;\n  text-align: left;\n  border: none;\n  transition: all 0.6s ease-in-out;\n}\n.left-part .ul-inner li {\n  transition: all 0.6s ease-in-out;\n  cursor: pointer;\n  height: 36px;\n  line-height: 36px;\n  color: #5a5a5a;\n  text-indent: 21px;\n  font-size: 12px;\n}\n.left-part .ul-inner li:hover {\n  background: #ddd;\n}\n.left-part .ul-inner .son-active {\n  background: #ddd;\n}\n.left-part .mail-box {\n  background: url('/en/source/img//help/sendmail.png') no-repeat center 0;\n  height: 350px;\n  margin-top: 10px;\n  position: relative;\n  overflow: hidden;\n}\n.left-part .mail-box .container {\n  display: block;\n  height: 165px;\n  width: 285px;\n  position: absolute;\n  left: 0;\n  top: 100px;\n  background: rgba(239, 239, 239, 0.5);\n  text-decoration: none;\n  cursor: pointer;\n  margin-bottom: 6px;\n}\n.left-part .mail-box .container div {\n  height: 110px;\n  width: 255px;\n  background: #FFFFFF;\n  margin: 15px;\n  padding-top: 25px;\n}\n.left-part .mail-box .container div h2 {\n  height: 30px;\n  line-height: 30px;\n  font-size: 22px;\n  color: #333333;\n  text-align: center;\n}\n.left-part .mail-box .container div .mail {\n  text-align: center;\n  display: block;\n  margin-top: 18px;\n  font-size: 22px;\n  height: 24px;\n  line-height: 22px;\n  color: #1072ba;\n  cursor: pointer;\n  text-decoration: none;\n}\n.left-part .mail-box .info {\n  position: absolute;\n  left: 0;\n  top: 275px;\n  width: 100%;\n}\n.left-part .mail-box .info h2 {\n  font-size: 12px;\n  color: #666666;\n  line-height: 20px;\n  margin-top: 10px;\n  text-align: center;\n}\n.left-part .mail-box .send-email {\n  width: 285px;\n  height: 350px;\n  opacity: 0.9;\n  position: absolute;\n  left: 0;\n  top: 350px;\n  background: #3c5e5a;\n  transition: top 1s;\n}\n.left-part .mail-box .send-email .tips {\n  position: absolute;\n  width: 215px;\n  top: 50px;\n  left: 35px;\n  line-height: 30px;\n  font-size: 14px;\n  text-align: center;\n  color: #ffffff;\n}\n.left-part .mail-box .send-email a {\n  display: block;\n  position: absolute;\n  width: 125px;\n  height: 35px;\n  text-align: center;\n  line-height: 35px;\n  background: #4abaac;\n  color: #ffffff;\n  font-size: 16px;\n  left: 80px;\n  top: 200px;\n}\n.left-part .mail-box:hover .send-email {\n  top: 0;\n}\n", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Pagination = __webpack_require__(14);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	var _HelpInformation = __webpack_require__(13);

	var _HelpInformation2 = _interopRequireDefault(_HelpInformation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HelpContent = function (_React$Component) {
		_inherits(HelpContent, _React$Component);

		function HelpContent(props) {
			_classCallCheck(this, HelpContent);

			var _this = _possibleConstructorReturn(this, (HelpContent.__proto__ || Object.getPrototypeOf(HelpContent)).call(this, props));

			_this.state = {
				category: _this.props.category,
				categoryName: _this.props.categoryName,
				index: 1,
				size: 15,
				total: 0,
				pages: 8,
				helps: []
			};
			return _this;
		}

		_createClass(HelpContent, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				this.getHelpData(this.state.index);
			}
		}, {
			key: 'onChange',
			value: function onChange(current) {
				this.setState({
					index: current
				});
				this.getHelpData(current);
			}
		}, {
			key: 'getHelpData',
			value: function getHelpData(current) {
				var _this2 = this;

				var helpsUrl = window.supervar.apiURL + 'help/list';
				fetch(helpsUrl, {
					method: "POST",
					credentials: 'include',
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: JSON.stringify({
						keywords: this.state.keywords,
						categoryId: this.state.category,
						currPage: current,
						pageSize: this.state.size
					})
				}).then(function (response) {
					return response.json();
				}).then(function (data) {
					if (data.state.toString() == "0") {
						_this2.setState({
							helps: data.data.listResult,
							total: data.data.totalRow
						});
					}
				});
			}
		}, {
			key: 'changeContent',
			value: function changeContent(helpId) {
				window.location.hash += "_helpId" + helpId;
				ReactDOM.unmountComponentAtNode(document.getElementById('helpMain'));
				ReactDOM.render(React.createElement(_HelpInformation2.default, { helpId: window.location.hash.substring(window.location.hash.indexOf('_helpId') + 7) }), document.getElementById('helpMain'));
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return React.createElement(
					'div',
					{ className: 'right-part' },
					React.createElement(
						'div',
						{ className: 'search-container' },
						React.createElement(
							'div',
							{ className: 'category' },
							this.state.categoryName
						),
						this.state.total > 0 ? React.createElement(
							'div',
							null,
							React.createElement(
								'div',
								{ className: 'search-result' },
								this.state.helps.map(function (helpitem) {
									return React.createElement(
										'div',
										{ className: 'help-item' },
										React.createElement(
											'div',
											{ className: 'help-title', onClick: _this3.changeContent.bind(_this3, helpitem.helpId) },
											React.createElement('div', { dangerouslySetInnerHTML: { __html: helpitem.helpTitle } })
										)
									);
								})
							),
							React.createElement(
								'div',
								{ className: 'pagination' },
								React.createElement(_Pagination2.default, {
									index: this.state.index,
									size: this.state.size,
									total: this.state.total,
									pages: this.state.pages,
									callbackParent: this.onChange.bind(this)
								})
							)
						) : React.createElement(
							'div',
							{ className: 'search-result no-result' },
							'No Result'
						)
					)
				);
			}
		}]);

		return HelpContent;
	}(React.Component);

	exports.default = HelpContent;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(26);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var servers = [{
		title: "Useful Tools",
		name: 'fly',
		detail: "Logistics Enquiries, Fee Estimation, Mail Limitations",
		link: 'http://www.dotdotexpress.com/postage/country'
	}, {
		title: "Superbuy Delivery Address",
		name: "address",
		detail: "Warehouse address of Superbuy Parcel Forward Service",
		link: 'http://www.super.com/en/page/help/#p0_16_helpId131'
	}, {
		title: "Track Your Order",
		name: "progress",
		detail: "Quick check order status, delivery progress, etc.",
		link: 'http://www.super.com/en/page/help/#search_helpId8'
	}, {
		title: "Urged Delivery",
		name: "post",
		detail: "Shopping Agent Order can be urged for delivery after 3 days",
		link: 'http://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&configID=126398&jid=3783013802&skillId=6966&pagetitle=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2&enterurl=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2'
	}, {
		title: "After-Sales",
		name: "apply",
		detail: "Not delivered, items lost / damaged, logistics enquiries assistance",
		link: 'http://www.super.com/en/page/help/#search_helpId31'
	}, {
		title: "Check Balance",
		name: "bankcard",
		detail: "Check account balance, transaction details, refunds, top up",
		link: 'http://www.super.com/en/page/help/#p1_24'
	}];
	var videos = [{
		title: "视频名称一二三四五",
		videoLink: 'www.baidu.com',
		videoImg: 'help1.jpg'
	}, {
		title: "视频名称一二三四五",
		videoLink: 'www.baidu.com',
		videoImg: 'help2.jpg'
	}, {
		title: "视频名称一二三四五",
		videoLink: 'www.baidu.com',
		videoImg: 'help2.jpg'
	}];

	var ComponentAdvice = function (_React$Component) {
		_inherits(ComponentAdvice, _React$Component);

		function ComponentAdvice() {
			_classCallCheck(this, ComponentAdvice);

			return _possibleConstructorReturn(this, (ComponentAdvice.__proto__ || Object.getPrototypeOf(ComponentAdvice)).apply(this, arguments));
		}

		_createClass(ComponentAdvice, [{
			key: 'render',
			value: function render() {
				var panels = this.props.panels;
				return React.createElement(
					'div',
					{ className: 'tabs-bd' },
					React.createElement(
						'div',
						{ className: 'tab-panel' },
						panels.categoryList.map(function (infos) {
							return React.createElement(
								'div',
								{ className: 'tab-detail' },
								React.createElement(
									'h2',
									null,
									infos.categoryName
								),
								infos.list.map(function (item) {
									return React.createElement(
										'p',
										null,
										React.createElement(
											'a',
											{ target: '_blank', href: 'http://www.super.com/en/page/help/#search_helpId' + item.helpId },
											React.createElement('span', { dangerouslySetInnerHTML: { __html: item.helpTitle } })
										)
									);
								})
							);
						})
					)
				);
			}
		}]);

		return ComponentAdvice;
	}(React.Component);

	var HelpMain = function (_React$Component2) {
		_inherits(HelpMain, _React$Component2);

		function HelpMain(props) {
			_classCallCheck(this, HelpMain);

			var _this2 = _possibleConstructorReturn(this, (HelpMain.__proto__ || Object.getPrototypeOf(HelpMain)).call(this, props));

			_this2.state = {
				currentTab: 0,
				questions: []
			};
			return _this2;
		}

		_createClass(HelpMain, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				this.handlerGetHotQuestions();
			}
		}, {
			key: 'handlerGetHotQuestions',
			value: function handlerGetHotQuestions() {
				var _this3 = this;

				var Url = window.supervar.apiURL + 'help/hot-list';
				fetch(Url, {
					method: "POST",
					credentials: 'include',
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					}
				}).then(function (response) {
					return response.json();
				}).then(function (data) {
					if (data.state.toString() == "0") {
						_this3.setState({
							questions: data.data.slice(0, 3)
						});
					}
				});
			}
		}, {
			key: 'showTabs',
			value: function showTabs(e) {
				var currentTab = e.target.getAttribute('name');
				this.setState({
					currentTab: parseInt(currentTab)
				});
			}
		}, {
			key: 'ActiveSever',
			value: function ActiveSever(e) {
				var eles = e.currentTarget.childNodes;
				for (var i = 0; i < eles.length; i++) {
					if (eles[i].nodeName == "DIV") {
						var name = eles[i].childNodes[0].name;
						eles[i].childNodes[0].src = supervar.imgsrc_cn + "/help/" + name + "_hover.png";
					} else if (eles[i].nodeName == 'H3') {
						eles[i].style.color = "#429ad3";
					} else if (eles[i].nodeName == 'A') {
						eles[i].style.color = "#ffffff";
						eles[i].style.background = "#1268bb";
						eles[i].style.border = "1px solid #1268bb";
					} else {
						eles[i].style.color = "#142341";
					}
				}
			}
		}, {
			key: 'BlurServer',
			value: function BlurServer(e) {
				var eles = e.currentTarget.childNodes;
				for (var i = 0; i < eles.length; i++) {
					if (eles[i].nodeName == "DIV") {
						var name = eles[i].childNodes[0].name;
						eles[i].childNodes[0].src = supervar.imgsrc_cn + "/help/" + name + ".png";
					} else if (eles[i].nodeName == 'H3') {
						eles[i].style.color = "#323232";
					} else if (eles[i].nodeName == 'A') {
						eles[i].style.color = "#323232";
						eles[i].style.background = "#ffffff";
						eles[i].style.border = "1px solid #081b35";
					} else {
						eles[i].style.color = "#142341";
					}
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _this4 = this;

				console.log(window.location.hash);
				return React.createElement(
					'div',
					{ className: 'right-part' },
					React.createElement(
						'div',
						{ className: 'right-container' },
						React.createElement(
							'h1',
							null,
							React.createElement(
								'div',
								null,
								'Self-Service Section'
							)
						),
						React.createElement(
							'div',
							{ className: 'container clearfix' },
							servers.map(function (server) {
								return React.createElement(
									'a',
									{ href: server.link, target: '_blank', className: 'server-item fl', onMouseEnter: _this4.ActiveSever.bind(_this4), onMouseLeave: _this4.BlurServer.bind(_this4) },
									React.createElement(
										'div',
										{ className: 'icon' },
										React.createElement('img', { className: 'img', name: server.name, src: supervar.imgsrc_en + "/help/" + server.name + ".png" })
									),
									React.createElement(
										'h2',
										null,
										server.title
									),
									React.createElement(
										'h3',
										null,
										server.detail
									)
								);
							})
						),
						React.createElement(
							'h1',
							null,
							React.createElement(
								'div',
								null,
								'FAQ'
							)
						),
						React.createElement(
							'div',
							{ className: 'container' },
							this.state.questions.length > 0 ? React.createElement(
								'div',
								null,
								React.createElement(
									'ul',
									{ className: 'tabs-nav clearfix', ref: 'T_nav' },
									this.state.questions.map(function (li, i) {
										return React.createElement(
											'li',
											null,
											React.createElement(
												'a',
												{ name: i, className: _this4.state.currentTab == i ? "active" : "", onClick: _this4.showTabs.bind(_this4) },
												li.categoryName
											)
										);
									})
								),
								React.createElement(ComponentAdvice, { panels: this.state.questions[this.state.currentTab] })
							) : React.createElement('div', null)
						),
						React.createElement(
							'h1',
							null,
							React.createElement(
								'div',
								null,
								'Assistance Video'
							)
						),
						React.createElement(
							'div',
							{ className: 'more-v' },
							React.createElement(
								'a',
								{ className: 'more', target: '_blank', href: '/en/page/video/index/' },
								'More>'
							)
						),
						React.createElement(
							'div',
							{ className: 'container' },
							React.createElement(
								'div',
								{ className: 'videos-wrap clearfix' },
								videos.map(function (video) {
									return React.createElement(
										'div',
										{ className: 'video' },
										React.createElement(
											'div',
											{ className: 'videobox' },
											React.createElement(
												'a',
												{ href: '/en/page/video/index/', target: '_blank' },
												React.createElement('img', { className: 'video-img', src: supervar.imgsrc_en + "/help/" + video.videoImg })
											)
										),
										React.createElement(
											'div',
											{ className: 'vname' },
											video.title
										)
									);
								})
							)
						),
						React.createElement(
							'h1',
							null,
							React.createElement(
								'div',
								null,
								'Contact us'
							)
						),
						React.createElement(
							'div',
							{ className: 'container clearfix' },
							React.createElement(
								'div',
								{ className: 'contactbox', onMouseEnter: this.ActiveSever.bind(this), onMouseLeave: this.BlurServer.bind(this) },
								React.createElement(
									'div',
									{ className: 'icon' },
									React.createElement('img', { name: 'user', src: supervar.imgsrc_en + "/help/user.png" })
								),
								React.createElement(
									'h2',
									null,
									'Intelligent Robot'
								),
								React.createElement(
									'h3',
									null,
									'Smart customer service will 24/7 '
								),
								React.createElement(
									'h3',
									null,
									'answer your enquiries'
								),
								React.createElement(
									'a',
									{ className: 'contact-a',
										href: 'https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&jid=3783013802&codeType=custom&spm=2101.892.N.N.ea0e9b7&s=1',
										target: '_blank' },
									'Contact now'
								)
							),
							React.createElement(
								'div',
								{ className: 'contactbox', onMouseEnter: this.ActiveSever.bind(this), onMouseLeave: this.BlurServer.bind(this) },
								React.createElement(
									'div',
									{ className: 'icon' },
									React.createElement('img', { name: 'server', src: supervar.imgsrc_en + "/help/server.png" })
								),
								React.createElement(
									'h2',
									null,
									'Online Customer Service'
								),
								React.createElement(
									'h3',
									null,
									'Mon – Sun 24hrs'
								),
								React.createElement(
									'h3',
									null,
									'Online Service'
								),
								React.createElement(
									'a',
									{ className: 'contact-a',
										href: 'http://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&configID=126398&jid=3783013802&skillId=6967&lan=en&pagetitle=%E8%8B%B1%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2&enterurl=%E8%8B%B1%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2\r\n', target: '_blank' },
									'Contact now'
								)
							),
							React.createElement(
								'div',
								{ className: 'contactbox', id: 'qq', onMouseEnter: this.ActiveSever.bind(this), onMouseLeave: this.BlurServer.bind(this) },
								React.createElement(
									'div',
									{ className: 'icon' },
									React.createElement('img', { name: 'qq', src: supervar.imgsrc_en + "/help/qq.png" })
								),
								React.createElement(
									'h2',
									null,
									'Member Q Group '
								),
								React.createElement(
									'h3',
									null,
									'QQ Group:481656937'
								),
								React.createElement(
									'h3',
									null,
									'Share and Communication'
								),
								React.createElement(
									'a',
									{ className: 'contact-a',
										href: 'http://bbs.dotdotbuy.com/forum.php?mod=viewthread&tid=57468',
										target: '_blank' },
									'Join Now'
								)
							),
							React.createElement(
								'div',
								{ className: 'contactbox', onMouseEnter: this.ActiveSever.bind(this), onMouseLeave: this.BlurServer.bind(this) },
								React.createElement(
									'div',
									{ className: 'icon' },
									React.createElement('img', { name: 'cmail', src: supervar.imgsrc_en + "/help/cmail.png" })
								),
								React.createElement(
									'h2',
									null,
									'Customer Service Email'
								),
								React.createElement(
									'h3',
									null,
									'service@superbuy.com'
								),
								React.createElement(
									'h3',
									null,
									'better to provide order number'
								),
								React.createElement(
									'a',
									{ className: 'contact-a active',
										href: 'mailto:service@dotdotbuy.com?spm=2101.892.N.N.1061f70',
										target: '_blank'
									},
									'Send Now'
								)
							)
						)
					)
				);
			}
		}]);

		return HelpMain;
	}(React.Component);

	exports.default = HelpMain;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./helpMain.less", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./helpMain.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\n/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\nhtml,\nbody {\n  width: 100%;\n  height: auto !important;\n  background: #ffffff;\n}\n.content {\n  overflow: hidden;\n  width: 1200px;\n  margin: 0 auto;\n}\n.right-part {\n  float: right;\n  width: 915px;\n  background: #ffffff;\n}\n.show {\n  display: block;\n}\n.hide {\n  display: none;\n}\n.search-container {\n  margin: 64px 0px 80px 68px;\n}\n.search-container .search-tab {\n  border-bottom: 1px solid #d2d2d2;\n}\n.search-container .search-tab li {\n  float: left;\n  width: 200px;\n  height: 44px;\n  overflow: hidden;\n}\n.search-container .search-tab li div {\n  width: 80px;\n  height: 41px;\n  line-height: 41px;\n  text-align: center;\n  font-size: 16px;\n  color: #323232;\n  cursor: pointer;\n}\n.search-container .search-tab li div:hover {\n  color: #143c7c;\n  border-bottom: 3px solid #143c7c;\n}\n.search-container .search-tab li div.active {\n  color: #143c7c;\n  border-bottom: 3px solid #143c7c;\n}\n.search-container .query {\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n  color: #323232;\n}\n.search-container .query span {\n  color: #1268bb;\n  padding: 0 60px 0 5px;\n}\n.search-container .search-result {\n  padding-top: 10px;\n}\n.search-container .search-result .help-item {\n  margin: 0 0;\n  cursor: pointer;\n}\n.search-container .search-result .help-item .help-title {\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n  color: #333333;\n  font-weight: bold;\n}\n.search-container .search-result .help-item .help-content p {\n  line-height: 24px;\n  font-size: 12px;\n  color: #505050;\n}\n.search-container .no-result {\n  height: 400px;\n  line-height: 400px;\n  text-align: center;\n}\n.search-container .category {\n  width: 100%;\n  height: 56px;\n  line-height: 56px;\n  font-size: 18px;\n  color: #333;\n  border-bottom: 1px solid #d2d2d2;\n  font-weight: bold;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.pagination {\n  width: 100%;\n  height: 30px;\n  margin-top: 20px;\n  text-align: center;\n}\n.pagination ul {\n  width: 680px;\n  margin: 0 auto;\n}\n.pagination ul li {\n  float: left;\n}\n.pagination ul li a {\n  display: block;\n  font-size: 14px;\n  color: #000000;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n  margin: 0 10px;\n  padding: 0 7px;\n}\n.pagination ul li a:hover {\n  color: #26569e;\n  border-bottom: 3px solid #26569e;\n  text-decoration: none;\n}\n.pagination ul li span {\n  display: block;\n  font-size: 14px;\n  color: #000000;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n  margin: 0 10px;\n  padding: 0 7px;\n}\n.pagination ul .active a {\n  color: #26569e;\n  border-bottom: 3px solid #26569e;\n  text-decoration: none;\n}\n.pagination ul .disabled a {\n  cursor: default;\n}\n.right-container {\n  margin-left: 20px ;\n}\n.right-container h1 {\n  position: relative;\n  margin: 64px 0px 30px 0;\n}\n.right-container h1 div {\n  font-size: 30px;\n  color: #4a4a4a;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n}\n.right-container .more-v {\n  text-align: center;\n  width: 100%;\n  margin-top: -20px;\n}\n.right-container .more-v a {\n  color: #274e9b;\n  font-size: 12px;\n  cursor: pointer;\n}\n.right-container .more-v a:hover {\n  text-decoration: none;\n  color: #0087cc;\n}\n.right-container .container {\n  width: 895px;\n}\n.right-container .container .server-item {\n  display: block;\n  width: 283px;\n  height: 283px;\n  color: #505050;\n  border: 1px solid #c4d5e2;\n  border-radius: 2px;\n  margin-right: 15px;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.right-container .container .server-item:nth-child(3n+3) {\n  margin-right: 0;\n}\n.right-container .container .server-item .icon {\n  display: block;\n  width: 100%;\n  height: 75px;\n  line-height: 75px;\n  text-align: center;\n  margin-top: 44px;\n}\n.right-container .container .server-item .icon .img {\n  width: 75px;\n  height: 75px;\n  vertical-align: middle;\n}\n.right-container .container .server-item h2 {\n  font-size: 22px;\n  color: #142341;\n  line-height: 24px;\n  margin: 22px auto 8px;\n  text-align: center;\n}\n.right-container .container .server-item h3 {\n  font-size: 14px;\n  color: #9b9b9b;\n  width: 85%;\n  line-height: 36px;\n  text-align: center;\n  margin: 10px auto;\n}\n.right-container .container .server-item:hover {\n  color: #142341 !important;\n  border: 1px solid #26569e;\n  text-decoration: none;\n}\n.right-container .container .tabs-nav {\n  width: 895px;\n  height: 42px;\n  border-bottom: 1px solid #f2f2f2;\n}\n.right-container .container .tabs-nav li {\n  float: left;\n  overflow: hidden;\n  margin-right: 90px;\n}\n.right-container .container .tabs-nav li a {\n  display: inline-block;\n  width: 100%;\n  height: 42px;\n  line-height: 42px;\n  text-align: center;\n  color: #323232;\n  font-size: 24px;\n  cursor: pointer;\n}\n.right-container .container .tabs-nav li a:hover {\n  text-decoration: none;\n  color: #26569e;\n  border-bottom: 2px solid #26569e;\n}\n.right-container .container .tabs-nav li .active {\n  text-decoration: none;\n  color: #26569e;\n  border-bottom: 2px solid #26569e;\n}\n.right-container .container .tabs-nav li:nth-last-child(1) {\n  margin-right: 0;\n}\n.right-container .container .tabs-nav .active {\n  color: #26569e;\n}\n.right-container .container .tab-detail {\n  padding-left: 10px;\n  color: #505050;\n  padding-bottom: 10px;\n}\n.right-container .container .tab-detail h2 {\n  height: 14px;\n  line-height: 14px;\n  padding: 24px 0 10px 0;\n  font-size: 14px;\n  color: #333333;\n  font-weight: bold;\n}\n.right-container .container .tab-detail p {\n  height: 14px;\n  line-height: 14px;\n  font-size: 12px;\n  padding-bottom: 6px;\n  color: #505050;\n}\n.right-container .container .tab-detail p a {\n  cursor: pointer;\n  color: #666666;\n}\n.right-container .container .tab-detail p a:hover {\n  color: #26569e;\n}\n.right-container .container .videos-wrap {\n  width: 895px;\n  margin-top: 20px;\n}\n.right-container .container .videos-wrap .video {\n  width: 285px;\n  height: 200px;\n  float: left;\n  text-align: center;\n  margin-right: 20px;\n}\n.right-container .container .videos-wrap .video .videobox {\n  width: 285px;\n  height: 160px;\n  margin: 0 auto;\n  border: 1px solid darkblue;\n}\n.right-container .container .videos-wrap .video .videobox .video-img {\n  width: 285px;\n  height: 160px;\n}\n.right-container .container .videos-wrap .video .vname {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  color: #323232;\n  font-size: 12px;\n}\n.right-container .container .videos-wrap .video:nth-last-child(1) {\n  margin-right: 0;\n}\n.right-container .container .contactbox {\n  width: 203px;\n  height: 253px;\n  float: left;\n  margin-right: 20px;\n  margin-bottom: 80px;\n  border-radius: 2px;\n  border: 1px solid #c4d5e2;\n}\n.right-container .container .contactbox:nth-last-child(1) {\n  margin-right: 0;\n}\n.right-container .container .contactbox:hover {\n  border: 5px solid #2b4f89;\n  width: 195px;\n  height: 245px;\n}\n.right-container .container .contactbox .icon {\n  display: block;\n  margin-top: 28px;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n}\n.right-container .container .contactbox .icon img {\n  vertical-align: middle;\n}\n.right-container .container .contactbox h2 {\n  margin-top: 20px;\n  height: 23px;\n  line-height: 23px;\n  margin-bottom: 22px;\n  font-size: 16px;\n  color: #142341;\n  text-align: center;\n}\n.right-container .container .contactbox h3 {\n  margin-bottom: 10px;\n  font-size: 12px;\n  height: 12px;\n  line-height: 12px;\n  color: #323232;\n  text-align: center;\n}\n.right-container .container .contactbox .contact-a {\n  display: block;\n  width: 128px;\n  height: 33px;\n  text-align: center;\n  line-height: 33px;\n  border-radius: 2px;\n  border: 1px solid #081b35;\n  color: #323232;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 15px auto;\n}\n.right-container .container .contactbox .contact-a:hover {\n  background: #1268bb;\n  color: #ffffff;\n  border-color: #1268bb;\n  text-decoration: none;\n}\n", ""]);

	// exports


/***/ }
/******/ ]);