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

	module.exports = __webpack_require__(10);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(11);

	var _SecNav = __webpack_require__(13);

	var _SecNav2 = _interopRequireDefault(_SecNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var imgsrc = window.supervar.imgsrc_cn + "sthgood/goodIndex/";
	var apiUrl = window.supervar.apiURL;
	var domain = window.supervar.domain;
	var hrefUrl = "/en/page/";
	var APILanguage = 'en';
	var listTitle = [{ "title": "Men Fashion" }, { "title": "Cyber Center" }, { "title": "Home & Garden" }, { "title": "Creative toys" }, { "title": "Travel & Bags" }, { "title": "Cosmetics" }, { "title": "Baby Time" }, { "title": "Miscellaneous" }];
	var topSelect = [{
		"id": "0",
		"title": "New Arrivals"
	}, {
		"id": "1",
		"title": "World Top"
	}, {
		"id": "2",
		"title": "Local TOP"
	}];
	var model = {
		reasons: {
			title: 'Why',
			content: ['Business Channel', '0 Service Fee', 'Personalized Services', 'Promise compensation for damaged goods', 'Brand Value'],
			learnMore: {
				txt: 'Know more',
				href: '#'
			}
		}
	};
	//轮播图
	var topBannerInterval = void 0;

	var TopBanner = function (_React$Component) {
		_inherits(TopBanner, _React$Component);

		function TopBanner(props) {
			_classCallCheck(this, TopBanner);

			var _this = _possibleConstructorReturn(this, (TopBanner.__proto__ || Object.getPrototypeOf(TopBanner)).call(this, props));

			_this.state = { bannerOver: false, topBannerLen: 0, topBannerIndex: 0, requestData: [] };
			return _this;
		}

		_createClass(TopBanner, [{
			key: 'moveToLeft',
			value: function moveToLeft() {
				if (this.state.topBannerLen + this.state.topBannerIndex == 1) {
					this.setState({ bannerOver: true, topBannerIndex: 1 });
				} else {
					this.setState({ bannerOver: false });
				}
				this.setState({ topBannerIndex: --this.state.topBannerIndex });
			}
		}, {
			key: 'turnRight',
			value: function turnRight() {
				if (this.state.topBannerIndex > -this.state.topBannerLen + 1) {
					this.setState({ topBannerIndex: --this.state.topBannerIndex });
				}
			}
		}, {
			key: 'turnLeft',
			value: function turnLeft() {
				if (this.state.topBannerIndex < 0) {
					this.setState({ topBannerIndex: ++this.state.topBannerIndex });
				}
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				var that = this;
				topBannerInterval = setInterval(function () {
					that.moveToLeft();
				}, timeSpan);
				fetch(apiUrl + 'advert/vert?platform=web&position=superGoodsIndex', {
					method: "GET",
					credentials: 'include'
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					_this2.setState({ requestData: data.data, topBannerLen: data.data.length });
				}).catch(function (ex) {
					return console.log("banner is loading failed", ex);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return React.createElement(
					'div',
					{ className: 'banner', onMouseOver: function onMouseOver() {
							clearInterval(topBannerInterval);
						}, onMouseOut: function onMouseOut() {
							var that = _this3;topBannerInterval = setInterval(function () {
								that.moveToLeft();
							}, timeSpan);
						} },
					React.createElement(
						'div',
						{ className: 'banner-box' },
						React.createElement(
							'ul',
							{ ref: 'banner', className: 'ul-move', style: { transform: "translateX(" + this.state.topBannerIndex * 100 + "%)" } },
							this.state.requestData.map(function (a) {
								return React.createElement(
									'li',
									null,
									React.createElement(
										'a',
										{ href: a.href, target: '_blank' },
										React.createElement('img', { src: a.img, alt: a.alt })
									)
								);
							})
						),
						React.createElement(
							'div',
							{ className: 'bannerTag' },
							this.state.requestData.map(function (a, b) {
								return React.createElement('span', { onClick: function onClick(e) {
										_this3.setState({ topBannerIndex: parseInt(e.currentTarget.getAttribute('name')) });
									}, name: -b, className: _this3.state.topBannerIndex == -b ? "bannerTag-active" : "bannerTag-default" });
							})
						),
						React.createElement(
							'div',
							{ className: 'banner-change' },
							React.createElement(
								'div',
								{ className: 'banner-left' },
								React.createElement('img', { src: imgsrc + "banner_left.png", onClick: this.turnLeft.bind(this) })
							),
							React.createElement(
								'div',
								{ className: 'banner-right' },
								React.createElement('img', { src: imgsrc + "banner_right.png", onClick: this.turnRight.bind(this) })
							)
						)
					)
				);
			}
		}]);

		return TopBanner;
	}(React.Component);
	//发现好品牌-左边


	var FindLeft = function (_React$Component2) {
		_inherits(FindLeft, _React$Component2);

		function FindLeft(props) {
			_classCallCheck(this, FindLeft);

			var _this4 = _possibleConstructorReturn(this, (FindLeft.__proto__ || Object.getPrototypeOf(FindLeft)).call(this, props));

			_this4.state = { leftHover: false, leftIndex: 0, requestData: [] };
			return _this4;
		}

		_createClass(FindLeft, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this5 = this;

				fetch(apiUrl + 'shoppingguide/recommend-brand?language=' + APILanguage, {
					method: "GET",
					credentials: 'include'
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					_this5.setState({ requestData: data.data });
				}).catch(function (ex) {
					return console.log("推荐品牌 is loading failed", ex);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this6 = this;

				return React.createElement(
					'div',
					{ className: 'find-left' },
					React.createElement(
						'div',
						{ className: 'left-top' },
						React.createElement(
							'h1',
							null,
							this.props.pinpai
						),
						React.createElement(
							'a',
							{ className: 'look-more', href: hrefUrl + "sthgood/brand", target: '_blank' },
							this.props.more
						)
					),
					React.createElement(
						'div',
						{ className: 'left-middle', onMouseOver: function onMouseOver() {
								_this6.setState({ leftHover: true });
							}, onMouseOut: function onMouseOut() {
								_this6.setState({ leftHover: false });
							} },
						React.createElement(
							'ul',
							{ style: { left: this.state.leftIndex * 310 + "px" } },
							this.state.requestData.map(function (a, b) {
								if (b < 2) return React.createElement(
									'li',
									null,
									React.createElement('img', { className: 'left-img', src: a.img }),
									React.createElement(
										'div',
										{ className: 'left-msg' },
										React.createElement(
											'span',
											null,
											a.shopName
										),
										React.createElement(
											'p',
											null,
											a.benefitDesc
										)
									),
									React.createElement(
										'div',
										{ className: _this6.state.leftHover == true ? "left-middle-text left-middle-active" : "left-middle-text left-middle-default" },
										React.createElement('img', { src: a.shopImg }),
										React.createElement(
											'a',
											{ href: a.href, target: '_blank' },
											React.createElement('input', { type: 'button', value: _this6.props.interBtn })
										)
									)
								);
							})
						),
						React.createElement('div', { className: 'left-middle-border' })
					),
					React.createElement(
						'div',
						{ className: 'bannerTag leftTag' },
						this.state.requestData.map(function (a, b) {
							if (b < 2) return React.createElement('span', { onMouseOver: function onMouseOver(e) {
									_this6.setState({ leftIndex: parseInt(e.currentTarget.getAttribute('name')) });
								}, name: -b, className: _this6.state.leftIndex == -b ? "bannerTag-active" : "bannerTag-default" });
						})
					)
				);
			}
		}]);

		return FindLeft;
	}(React.Component);
	//发现好品牌-列表内容


	var FindList = function (_React$Component3) {
		_inherits(FindList, _React$Component3);

		function FindList() {
			_classCallCheck(this, FindList);

			return _possibleConstructorReturn(this, (FindList.__proto__ || Object.getPrototypeOf(FindList)).apply(this, arguments));
		}

		_createClass(FindList, [{
			key: 'render',
			value: function render() {
				var _this8 = this;

				return React.createElement(
					'div',
					{ className: 'find-right-middle' },
					React.createElement(
						'div',
						{ className: 'find-right-list' },
						this.props.name.map(function (a, b) {
							if (b < 4) return React.createElement(
								'div',
								{ className: 'right-listbox' },
								React.createElement('img', { className: 'big-img', src: a.img }),
								React.createElement(
									'div',
									{ className: 'listbox-bottom' },
									React.createElement('img', { className: 'small-img', src: a.shopImg }),
									React.createElement(
										'div',
										{ className: 'listbox-bottom-box' },
										React.createElement(
											'div',
											{ className: 'listbox-bottom-move' },
											React.createElement(
												'span',
												null,
												a.shopName
											),
											React.createElement(
												'p',
												null,
												a.benefitDesc
											),
											React.createElement(
												'a',
												{ href: a.href, target: '_blank' },
												React.createElement('input', { type: 'button', value: _this8.props.interBtn })
											)
										)
									)
								)
							);
						})
					),
					React.createElement(
						'div',
						{ className: 'find-right-bottom' },
						this.props.name.map(function (a, b) {
							if (b >= 4 && b < 9) return React.createElement(
								'a',
								{ href: a.href, target: '_blank' },
								React.createElement('img', { src: a.shopImg })
							);
						})
					)
				);
			}
		}]);

		return FindList;
	}(React.Component);
	//发现好品牌-父组件


	var findCurrentPage = 1;

	var Find = function (_React$Component4) {
		_inherits(Find, _React$Component4);

		function Find(props) {
			_classCallCheck(this, Find);

			var _this9 = _possibleConstructorReturn(this, (Find.__proto__ || Object.getPrototypeOf(Find)).call(this, props));

			_this9.state = { spanActive: 0, requestData: [], requestListData: [], requestFindDetailData: [], findPage: 1 };
			return _this9;
		}

		_createClass(Find, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this10 = this;

				fetch(apiUrl + 'shoppingguide/child-cat-list?language=' + APILanguage, {
					method: "GET",
					credentials: 'include'
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					_this10.setState({ requestListData: data.data, spanActive: data.data[0].id });
					fetch(apiUrl + 'shoppingguide/child-get-cat-list?currPage=1&pageSize=9&language=' + APILanguage + '&cat=' + data.data[0].id, {
						method: "GET",
						credentials: 'include'
					}).then(function (res) {
						return res.json();
					}).then(function (data) {
						_this10.setState({
							requestFindDetailData: data.data.listResult,
							findPage: Math.ceil(data.data.totalRow / data.data.pageSize)
						});
					}).catch(function (ex) {
						_this10.setState({ requestFindDetailData: [{ 'title': _this10.props.noData }] });console.log("特定分类有好店列表-初始化  is loading failed", ex);
					});
				}).catch(function (ex) {
					return console.log("有好店分类  is loading failed", ex);
				});
			}
		}, {
			key: 'changeList',
			value: function changeList(e) {
				var _this11 = this;

				var tabIndex = e.currentTarget.getAttribute('name');
				for (var i = 0; i < this.state.requestListData.length; i++) {
					document.getElementsByClassName('find-list-title')[i].className = 'span-default find-list-title';
				}
				e.target.className = 'span-active find-list-title';
				this.setState({ spanActive: tabIndex });
				fetch(apiUrl + 'shoppingguide/child-get-cat-list?currPage=1&pageSize=9&language=' + APILanguage + '&cat=' + parseInt(tabIndex), {
					method: "GET",
					credentials: 'include'
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					_this11.setState({ requestFindDetailData: data.data.listResult, findPage: Math.ceil(data.data.totalRow / data.data.pageSize) });
				}).catch(function (ex) {
					_this11.setState({ requestFindDetailData: [{ 'title': _this11.props.noData }] });console.log("特定分类有好店列表  is loading failed", ex);
				});
			}
		}, {
			key: 'refreshHandle',
			value: function refreshHandle(e) {
				var _this12 = this;

				findCurrentPage++;
				findCurrentPage > this.state.findPage ? findCurrentPage = 1 : '';
				var cat = parseInt(this.state.spanActive);
				fetch(apiUrl + 'shoppingguide/child-get-cat-list?currPage=' + findCurrentPage + '&pageSize=9&language=' + APILanguage + '&cat=' + cat, {
					method: "GET",
					credentials: 'include'
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					_this12.setState({ requestFindDetailData: data.data.listResult });
				}).catch(function (ex) {
					console.log("特定分类有好店列表-刷新findCurrentPage  is loading failed", ex);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this13 = this;

				return React.createElement(
					'div',
					{ className: 'findbox' },
					React.createElement(FindLeft, null),
					React.createElement(
						'div',
						{ className: 'find-right' },
						React.createElement(
							'div',
							{ className: 'title-nav' },
							this.state.requestListData.map(function (a, b) {
								if (b < 6) return React.createElement(
									'span',
									{ className: b == 0 ? "span-active find-list-title" : "span-default find-list-title", name: a.id, onClick: _this13.changeList.bind(_this13) },
									a.categoryName
								);
							})
						),
						React.createElement(
							'div',
							{ className: 'find-right-change', onClick: this.refreshHandle.bind(this) },
							React.createElement('img', { src: imgsrc + "find_refresh.png" }),
							this.props.change
						),
						React.createElement(FindList, { name: this.state.requestFindDetailData })
					)
				);
			}
		}]);

		return Find;
	}(React.Component);

	var TopData = function (_React$Component5) {
		_inherits(TopData, _React$Component5);

		function TopData(props) {
			_classCallCheck(this, TopData);

			var _this14 = _possibleConstructorReturn(this, (TopData.__proto__ || Object.getPrototypeOf(TopData)).call(this, props));

			_this14.state = { shopActive: -1 };
			return _this14;
		}

		_createClass(TopData, [{
			key: 'render',
			value: function render() {
				var _this15 = this;

				return React.createElement(
					'div',
					{ className: 'topselect-list' },
					this.props.name.map(function (a, b) {
						return React.createElement(
							'div',
							{ name: b, className: 'topselect-listbox', onMouseOver: function onMouseOver(e) {
									_this15.setState({ shopActive: e.currentTarget.getAttribute('name') });
								}, onMouseOut: function onMouseOut() {
									_this15.setState({ shopActive: -1 });
								} },
							React.createElement(
								'a',
								{ href: hrefUrl + 'buy/?url=' + encodeURIComponent(a.href), target: '_blank' },
								React.createElement('img', { src: a.img }),
								React.createElement(
									'div',
									{ className: _this15.state.shopActive == b ? "add2-shopcar add2-shopcar-active" : "add2-shopcar add2-shopcar-default" },
									React.createElement(
										'span',
										null,
										_this15.props.shopCar
									)
								)
							),
							React.createElement(
								'div',
								{ className: 'goods-detail' },
								React.createElement(
									'span',
									{ className: 'price' },
									'¥',
									a.price
								),
								React.createElement(
									'span',
									{ className: 'oldPrice' },
									'¥',
									a.discountPrice
								),
								React.createElement(
									'p',
									{ title: a.title },
									a.title.length >= 25 ? a.title.substring(0, 25) + '...' : a.title
								)
							)
						);
					})
				);
			}
		}]);

		return TopData;
	}(React.Component);
	//top榜内容列表


	var TopSelectList = function (_React$Component6) {
		_inherits(TopSelectList, _React$Component6);

		function TopSelectList(props) {
			_classCallCheck(this, TopSelectList);

			var _this16 = _possibleConstructorReturn(this, (TopSelectList.__proto__ || Object.getPrototypeOf(TopSelectList)).call(this, props));

			_this16.state = {
				spanActive: 0,
				newsActive: false,
				topData: [],
				newTopData: [],
				hotTopData: [],
				localTopData: [],
				requestTopDetailData: []
			};
			return _this16;
		}

		_createClass(TopSelectList, [{
			key: 'changeList',
			value: function changeList(e) {
				var tabIndex = e.currentTarget.getAttribute('name');
				var topSelectUrl = apiUrl + 'top/news?pagesize=10';
				this.setState({ spanActive: tabIndex });
				switch (tabIndex) {
					case '0':
						this.setState({ newsActive: false, topData: this.state.newTopData });
						break;
					case '1':
						this.setState({ newsActive: true, topData: this.state.hotTopData });
						break;
					case '2':
						this.setState({ newsActive: false, topData: this.state.localTopData });
						break;
				}
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this17 = this;

				//新品top
				fetch(apiUrl + 'top/news?pagesize=10&language=' + APILanguage, {
					method: "POST",
					credentials: 'include',
					headers: { "Content-type": "application/x-www-form-urlencoded" }
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					_this17.setState({ newTopData: data.data, topData: data.data });
				}).catch(function (ex) {
					return console.log("newTop is loading failed", ex);
				});

				//热销top
				fetch(apiUrl + 'top/hot?pagesize=10&language=' + APILanguage, {
					method: "POST",
					credentials: 'include',
					headers: { "Content-type": "application/x-www-form-urlencoded" }
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					_this17.setState({ hotTopData: data.data });
				}).catch(function (ex) {
					return console.log("hotTop is loading failed", ex);
				});

				//本地top
				fetch(apiUrl + 'top/area?pagesize=10&language=' + APILanguage, {
					method: "POST",
					credentials: 'include',
					headers: { "Content-type": "application/x-www-form-urlencoded" }
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					_this17.setState({ localTopData: data.data });
				}).catch(function (ex) {
					return console.log("localTopData is loading failed", ex);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this18 = this;

				return React.createElement(
					'div',
					null,
					React.createElement(
						'div',
						{ className: 'title-nav topselect-nav' },
						topSelect.map(function (a, b) {
							return React.createElement(
								'span',
								{ name: b, className: _this18.state.spanActive == b ? "span-active" : "span-default", onClick: _this18.changeList.bind(_this18) },
								a.title
							);
						})
					),
					React.createElement(
						'div',
						{ className: this.state.newsActive == true ? "news" : "news-close" },
						this.props.news,
						React.createElement(
							'span',
							null,
							this.props.time
						),
						React.createElement(
							'span',
							{ className: 'close', onClick: function onClick() {
									_this18.setState({ newsActive: false });
								} },
							React.createElement('img', { src: imgsrc + "topSelect_close.png" })
						)
					),
					React.createElement(TopData, { name: this.state.topData })
				);
			}
		}]);

		return TopSelectList;
	}(React.Component);
	//购物时报


	var _ref = [4000, 0, 0];
	var timeSpan = _ref[0];
	var newsIndex = _ref[1];
	var newsBannerLen = _ref[2];
	var buyNewsInterval = _ref[3];

	var TopSelectBuyNews = function (_React$Component7) {
		_inherits(TopSelectBuyNews, _React$Component7);

		function TopSelectBuyNews(props) {
			_classCallCheck(this, TopSelectBuyNews);

			var _this19 = _possibleConstructorReturn(this, (TopSelectBuyNews.__proto__ || Object.getPrototypeOf(TopSelectBuyNews)).call(this, props));

			_this19.state = { bannerOver: false, requestNewsData: [] };
			return _this19;
		}

		_createClass(TopSelectBuyNews, [{
			key: 'moveToTop',
			value: function moveToTop() {
				newsIndex--;
				if (newsBannerLen + newsIndex == -1) {
					newsIndex = 0;
					this.setState({ bannerOver: true });
				} else {
					this.setState({ bannerOver: false });
				}
				this.refs.newsBanner.style.top = newsIndex * 53 + "px";
			}
		}, {
			key: 'userImgError',
			value: function userImgError(e) {
				e.target.src = '/cn/source/img/Header/avatar-default.png';
				e.target.style.backgroundColor = '#4f5360';
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this20 = this;

				var that = this;
				buyNewsInterval = setInterval(function () {
					that.moveToTop();
				}, timeSpan / 2);

				fetch(apiUrl + 'shoppingguide/sale-daily?language=' + APILanguage + '&currPage=1&pageSize=21', {
					method: "GET",
					credentials: 'include'
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					newsBannerLen = data.data.listResult.length;
					_this20.setState({ requestNewsData: data.data.listResult });
				}).catch(function (ex) {
					return console.log("buyNews  is loading failed", ex);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this21 = this;

				return React.createElement(
					'div',
					{ className: 'buy-news' },
					React.createElement(
						'h1',
						null,
						this.props.buyNews
					),
					React.createElement(
						'div',
						{ className: 'new-box', onMouseOver: function onMouseOver() {
								clearInterval(buyNewsInterval);
							}, onMouseOut: function onMouseOut() {
								var that = _this21;buyNewsInterval = setInterval(function () {
									that.moveToTop();
								}, timeSpan / 2);
							} },
						React.createElement(
							'ul',
							{ ref: 'newsBanner', className: this.state.bannerOver == true ? "news-over" : "news-move" },
							this.state.requestNewsData.map(function (a) {
								return React.createElement(
									'li',
									null,
									React.createElement('img', { src: a.userImg, onError: _this21.userImgError.bind(_this21) }),
									React.createElement(
										'p',
										null,
										_this21.props.time,
										React.createElement(
											'a',
											{ title: a.title, href: hrefUrl + 'buy/?url=' + encodeURIComponent(a.href), target: '_blank' },
											a.title.length >= 24 ? a.title.substring(0, 24) + '...' : a.title
										)
									)
								);
							}),
							this.state.requestNewsData.map(function (a, b) {
								if (b < 3) return React.createElement(
									'li',
									null,
									React.createElement('img', { src: a.userImg }),
									React.createElement(
										'p',
										null,
										_this21.props.time,
										React.createElement(
											'a',
											{ title: a.title, href: hrefUrl + 'buy/?url=' + encodeURIComponent(a.href), target: '_blank' },
											a.title.length >= 24 ? a.title.substring(0, 24) + '...' : a.title
										)
									)
								);
							})
						)
					)
				);
			}
		}]);

		return TopSelectBuyNews;
	}(React.Component);
	//今日头条


	var TopSelectTodayNews = function (_React$Component8) {
		_inherits(TopSelectTodayNews, _React$Component8);

		function TopSelectTodayNews(props) {
			_classCallCheck(this, TopSelectTodayNews);

			var _this22 = _possibleConstructorReturn(this, (TopSelectTodayNews.__proto__ || Object.getPrototypeOf(TopSelectTodayNews)).call(this, props));

			_this22.state = { bannerOver: false, requestTodayNewsData: [] };
			return _this22;
		}

		_createClass(TopSelectTodayNews, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this23 = this;

				fetch(apiUrl + 'shoppingguide/today-front-page?language=' + APILanguage + '&currPage=1&pageSize=8', {
					method: "GET",
					credentials: 'include'
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					_this23.setState({ requestTodayNewsData: data.data.listResult });
				}).catch(function (ex) {
					return console.log("今日头条  is loading failed", ex);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'today-news' },
					React.createElement(
						'h1',
						null,
						this.props.todayNews
					),
					React.createElement(
						'ul',
						null,
						this.state.requestTodayNewsData.map(function (a, b) {
							var timeStart = new Date(a.startTime * 1000);if (b < 4) return React.createElement(
								'li',
								null,
								React.createElement(
									'a',
									{ title: a.title, href: a.href, target: '_blank' },
									'【',
									a.sellerPlatform,
									'】',
									a.title
								),
								React.createElement(
									'span',
									null,
									timeStart.getMonth() + 1 + '/' + timeStart.getDate(),
									' (',
									a.processStatusName,
									')'
								)
							);
						})
					),
					React.createElement('div', { className: 'ul-border' }),
					React.createElement(
						'ul',
						null,
						this.state.requestTodayNewsData.map(function (a, b) {
							var timeStart = new Date(a.startTime * 1000);if (b >= 4 && b < 8) return React.createElement(
								'li',
								null,
								React.createElement(
									'a',
									{ title: a.title, href: a.href, target: '_blank' },
									'【',
									a.sellerPlatform,
									'】',
									a.title
								),
								React.createElement(
									'span',
									null,
									timeStart.getMonth() + 1 + '/' + timeStart.getDate(),
									' (',
									a.processStatusName,
									')'
								)
							);
						})
					)
				);
			}
		}]);

		return TopSelectTodayNews;
	}(React.Component);
	//top榜父组件


	var TopSelect = function (_React$Component9) {
		_inherits(TopSelect, _React$Component9);

		function TopSelect() {
			_classCallCheck(this, TopSelect);

			return _possibleConstructorReturn(this, (TopSelect.__proto__ || Object.getPrototypeOf(TopSelect)).apply(this, arguments));
		}

		_createClass(TopSelect, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'topselect' },
					React.createElement(
						'h1',
						null,
						this.props.topSelect
					),
					React.createElement(
						'p',
						{ className: 'sub-title' },
						this.props.buy
					),
					React.createElement(TopSelectList, null),
					React.createElement(TopSelectBuyNews, null),
					React.createElement(TopSelectTodayNews, null)
				);
			}
		}]);

		return TopSelect;
	}(React.Component);
	//边看边买


	var LookBuy = function (_React$Component10) {
		_inherits(LookBuy, _React$Component10);

		function LookBuy(props) {
			_classCallCheck(this, LookBuy);

			var _this25 = _possibleConstructorReturn(this, (LookBuy.__proto__ || Object.getPrototypeOf(LookBuy)).call(this, props));

			_this25.state = { requestData: [] };
			return _this25;
		}

		_createClass(LookBuy, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this26 = this;

				fetch(apiUrl + 'shoppingguide/look-buy?language=' + APILanguage + '&currPage=1&pageSize=4', {
					method: "GET",
					credentials: 'include'
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					_this26.setState({ requestData: data.data.listResult });
				}).catch(function (ex) {
					return console.log("LookBuy is loading failed", ex);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var thisState = this.state.requestData;
				return React.createElement(
					'div',
					{ className: 'lookbuy-bg' },
					React.createElement(
						'div',
						{ className: 'lookbuy' },
						React.createElement(
							'h1',
							null,
							this.props.lookBuy
						),
						React.createElement(
							'p',
							{ className: 'sub-title' },
							this.props.rules,
							React.createElement(
								'a',
								{ href: hrefUrl + 'sthgood/videoList/' },
								this.props.allVideo
							)
						),
						React.createElement(
							'div',
							{ className: 'video-box' },
							React.createElement(
								'a',
								{ href: thisState.length != 0 ? hrefUrl + "sthgood/video/?id=" + thisState[0].id : '', target: '_blank' },
								React.createElement(
									'div',
									{ className: 'video-left-box' },
									React.createElement(
										'div',
										{ className: 'video-source' },
										React.createElement('img', { className: 'video-img', src: thisState.length != 0 ? thisState[0].videoImg : '' }),
										React.createElement('div', { className: 'video-begin' })
									),
									React.createElement(
										'div',
										{ className: 'video-info' },
										React.createElement(
											'div',
											{ className: 'video-title' },
											thisState.length != 0 ? thisState[0].title : ''
										)
									)
								)
							),
							React.createElement(
								'div',
								{ className: 'video-box-list' },
								this.state.requestData.map(function (a) {
									return React.createElement(
										'a',
										{ href: hrefUrl + "sthgood/video/?id=" + a.id, target: '_blank' },
										React.createElement(
											'div',
											{ className: 'video-item-box' },
											React.createElement(
												'div',
												{ className: 'video-source' },
												React.createElement('img', { className: 'video-img', src: a.videoImg }),
												React.createElement('div', { className: 'video-begin' })
											),
											React.createElement(
												'div',
												{ className: 'video-info' },
												React.createElement(
													'div',
													{ className: 'video-title' },
													a.title
												)
											)
										)
									);
								})
							)
						)
					)
				);
			}
		}]);

		return LookBuy;
	}(React.Component);
	//流行经典


	var Classics = function (_React$Component11) {
		_inherits(Classics, _React$Component11);

		function Classics(props) {
			_classCallCheck(this, Classics);

			var _this27 = _possibleConstructorReturn(this, (Classics.__proto__ || Object.getPrototypeOf(Classics)).call(this, props));

			_this27.state = { requestData: [] };
			return _this27;
		}

		_createClass(Classics, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this28 = this;

				fetch(apiUrl + 'shoppingguide/category-product?language=' + APILanguage + '&pageSize=10', {
					method: "GET",
					credentials: 'include'
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					_this28.setState({ requestData: data.data });
				}).catch(function (ex) {
					return console.log("Classics is loading failed", ex);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'classics' },
					React.createElement(
						'h1',
						null,
						this.props.classics
					),
					React.createElement(
						'p',
						{ className: 'sub-title' },
						this.props.choice
					),
					React.createElement(
						'div',
						{ className: 'classics-box' },
						React.createElement(
							'div',
							{ className: 'classics-left' },
							React.createElement(
								'a',
								{ href: this.state.requestData.length != 0 ? hrefUrl + "subject/subject.html?id=" + this.state.requestData[0].id : '', target: '_blank' },
								React.createElement('img', { src: this.state.requestData.length != 0 ? this.state.requestData[0].headImgHref : '' })
							)
						),
						React.createElement(
							'div',
							{ className: 'classics-right' },
							this.state.requestData.length != 0 ? this.state.requestData[0].boardProductList.map(function (a, b) {
								if (b < 4) return React.createElement(
									'div',
									null,
									React.createElement(
										'a',
										{ href: hrefUrl + 'buy/?url=' + encodeURIComponent(a.href), target: '_blank' },
										React.createElement('img', { src: a.img })
									),
									React.createElement(
										'p',
										null,
										'¥',
										a.price
									)
								);
							}) : ''
						),
						React.createElement(
							'div',
							{ className: 'classics-bottom' },
							this.state.requestData.length != 0 ? this.state.requestData[0].boardProductList.map(function (a, b) {
								if (b >= 4 && b < 10) return React.createElement(
									'div',
									null,
									React.createElement(
										'a',
										{ href: hrefUrl + 'buy/?url=' + encodeURIComponent(a.href), target: '_blank' },
										React.createElement('img', { src: a.img })
									),
									React.createElement(
										'p',
										null,
										'¥',
										a.price
									)
								);
							}) : ''
						)
					)
				);
			}
		}]);

		return Classics;
	}(React.Component);
	//趣创意


	var _ref2 = [0, 0];
	var ideasIndex = _ref2[0];
	var ideasBannerLen = _ref2[1];
	var ideasBannerInterval = _ref2[2];

	var Ideas = function (_React$Component12) {
		_inherits(Ideas, _React$Component12);

		function Ideas(props) {
			_classCallCheck(this, Ideas);

			var _this29 = _possibleConstructorReturn(this, (Ideas.__proto__ || Object.getPrototypeOf(Ideas)).call(this, props));

			_this29.state = { bannerOver: false, requestData: [] };
			return _this29;
		}

		_createClass(Ideas, [{
			key: 'moveToLeft',
			value: function moveToLeft() {
				ideasIndex--;
				if (ideasBannerLen + ideasIndex == -1) {
					ideasIndex = 0;
					this.setState({ bannerOver: true });
				} else {
					this.setState({ bannerOver: false });
				}
				this.refs.banner.style.left = ideasIndex * 372 + "px";
			}
		}, {
			key: 'turnLeft',
			value: function turnLeft() {
				this.moveToLeft();
			}
		}, {
			key: 'turnRight',
			value: function turnRight() {
				if (ideasIndex < 0) {
					ideasIndex++;
					this.refs.banner.style.left = ideasIndex * 372 + "px";
				}
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this30 = this;

				var that = this;
				//ideasBannerInterval=setInterval(function(){that.moveToLeft();},timeSpan);
				fetch(apiUrl + 'shoppingguide/category-group?language=' + APILanguage + '&pageSize=9', {
					method: "GET",
					credentials: 'include'
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					ideasBannerLen = data.data.length;
					_this30.setState({ requestData: data.data });
				}).catch(function (ex) {
					return console.log("Ideas is loading failed", ex);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'ideas'
						//				onMouseOver={()=>{clearInterval(ideasBannerInterval)}} 
						//				onMouseOut={()=>{let that = this;ideasBannerInterval=setInterval(function(){that.moveToLeft();},timeSpan);}}
					},
					React.createElement(
						'h1',
						null,
						this.props.ideas
					),
					React.createElement(
						'p',
						{ className: 'sub-title' },
						this.props.choice,
						React.createElement(
							'a',
							{ className: 'look-more', href: hrefUrl + "sthgood/ideas/" },
							this.props.ideasMore
						)
					),
					React.createElement(
						'div',
						{ className: 'ideas-content' },
						React.createElement(
							'div',
							{ className: 'ideas-nav' },
							React.createElement(
								'ul',
								{ ref: 'banner', className: this.state.bannerOver == true ? "ul-over" : "ul-move" },
								this.state.requestData.map(function (a) {
									return React.createElement(
										'li',
										null,
										React.createElement(
											'a',
											{ href: hrefUrl + "subject/subject.html?id=" + a.id },
											React.createElement('img', { src: a.listImgHref })
										),
										React.createElement(
											'div',
											{ className: 'ideas-type' },
											React.createElement(
												'span',
												{ title: a.categoryName },
												a.categoryName
											)
										),
										React.createElement(
											'div',
											{ className: 'ideas-title' },
											React.createElement(
												'span',
												{ title: a.deputyCategoryName },
												a.deputyCategoryName
											),
											React.createElement(
												'span',
												{ title: a.desc },
												a.desc
											)
										)
									);
								}),
								this.state.requestData.lenght >= 3 ? this.state.requestData.map(function (a, b) {
									if (b < 3) return React.createElement(
										'li',
										null,
										React.createElement(
											'a',
											{ href: hrefUrl + "subject/subject.html?id=" + a.id },
											React.createElement('img', { src: a.listImgHref })
										),
										React.createElement(
											'div',
											{ className: 'ideas-type' },
											React.createElement(
												'span',
												{ title: a.categoryName },
												a.categoryName
											)
										),
										React.createElement(
											'div',
											{ className: 'ideas-title' },
											React.createElement(
												'span',
												{ title: a.deputyCategoryName },
												a.deputyCategoryName
											),
											React.createElement(
												'span',
												{ title: a.desc },
												a.desc
											)
										)
									);
								}) : ''
							)
						),
						React.createElement(
							'div',
							{ className: 'turn-left' },
							React.createElement('img', { src: imgsrc + "turn_left.png", onClick: this.turnLeft.bind(this) })
						),
						React.createElement(
							'div',
							{ className: 'turn-right' },
							React.createElement('img', { src: imgsrc + "turn_right.png", onClick: this.turnRight.bind(this) })
						)
					)
				);
			}
		}]);

		return Ideas;
	}(React.Component);
	//有好店


	var goodshopIndex = 0;
	var goodshopBannerLen = 0;

	var Goodshop = function (_React$Component13) {
		_inherits(Goodshop, _React$Component13);

		function Goodshop(props) {
			_classCallCheck(this, Goodshop);

			var _this31 = _possibleConstructorReturn(this, (Goodshop.__proto__ || Object.getPrototypeOf(Goodshop)).call(this, props));

			_this31.state = { bannerOver: false, requestData: [] };
			return _this31;
		}

		_createClass(Goodshop, [{
			key: 'moveToLeft',
			value: function moveToLeft() {
				goodshopIndex--;
				if (goodshopBannerLen + goodshopIndex == -1) {
					goodshopIndex = 0;
					this.setState({ bannerOver: true });
				} else {
					this.setState({ bannerOver: false });
				}
				this.refs.banner.style.left = goodshopIndex * 370 + "px";
			}
		}, {
			key: 'turnLeft',
			value: function turnLeft() {
				this.moveToLeft();
			}
		}, {
			key: 'turnRight',
			value: function turnRight() {
				if (goodshopIndex < 0) {
					goodshopIndex++;
					this.refs.banner.style.left = goodshopIndex * 370 + "px";
				}
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this32 = this;

				var that = this;
				var goodshopBannerInterval = setInterval(function () {
					that.moveToLeft();
				}, timeSpan);

				fetch(apiUrl + 'shoppingguide/guide-goods?language=' + APILanguage + '&currPage=1&pageSize=9', {
					method: "GET",
					credentials: 'include'
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					goodshopBannerLen = data.data.listResult.length;
					_this32.setState({ requestData: data.data.listResult });
				}).catch(function (ex) {
					return console.log("有好店 is loading failed", ex);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'goodshop' },
					React.createElement(
						'h1',
						null,
						this.props.goodshop
					),
					React.createElement(
						'p',
						null,
						this.props.choice,
						React.createElement(
							'a',
							{ className: 'look-more', href: '#' },
							this.props.goodshopMore
						)
					),
					React.createElement(
						'div',
						{ className: 'goodshop-content' },
						React.createElement(
							'div',
							{ className: 'goodshop-nav' },
							React.createElement(
								'ul',
								{ ref: 'banner', className: this.state.bannerOver == true ? "ul-over" : "ul-move" },
								this.state.requestData.map(function (a) {
									return React.createElement(
										'li',
										null,
										React.createElement(
											'a',
											{ href: a.href },
											React.createElement('img', { alt: a.alt, src: a.img })
										)
									);
								}),
								this.state.requestData.map(function (a, b) {
									if (b < 3) return React.createElement(
										'li',
										null,
										React.createElement(
											'a',
											{ href: a.href },
											React.createElement('img', { alt: a.alt, src: a.img })
										)
									);
								})
							)
						),
						React.createElement(
							'div',
							{ className: 'turn-left' },
							React.createElement('img', { src: imgsrc + "turn_left.png", onClick: this.turnLeft.bind(this) })
						),
						React.createElement(
							'div',
							{ className: 'turn-right' },
							React.createElement('img', { src: imgsrc + "turn_right.png", onClick: this.turnRight.bind(this) })
						)
					)
				);
			}
		}]);

		return Goodshop;
	}(React.Component);

	var Content = function (_React$Component14) {
		_inherits(Content, _React$Component14);

		function Content() {
			_classCallCheck(this, Content);

			return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
		}

		_createClass(Content, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'content' },
					React.createElement(TopBanner, null),
					React.createElement(_SecNav2.default, null),
					React.createElement(Find, null),
					React.createElement(TopSelect, null),
					React.createElement(LookBuy, null),
					React.createElement(Classics, null),
					React.createElement(Ideas, null),
					React.createElement(
						'div',
						{ className: 'buy-reasons' },
						React.createElement(
							'dl',
							{ className: 'clearfix' },
							React.createElement(
								'dt',
								null,
								React.createElement(
									'span',
									null,
									model.reasons.title
								),
								React.createElement('br', null),
								React.createElement(
									'em',
									null,
									'Superbuy'
								)
							),
							model.reasons.content.map(function (item) {
								return React.createElement(
									'dd',
									null,
									React.createElement('i', null),
									React.createElement(
										'span',
										null,
										item
									)
								);
							})
						)
					)
				);
			}
		}]);

		return Content;
	}(React.Component);

	FindList.defaultProps = {
		interBtn: 'Visit Store'
	};
	FindLeft.defaultProps = {
		pinpai: 'Discovery',
		more: 'See more',
		yuanchuang: '原创精神&艺术潮',
		zhekou: '新品8折优惠  满199立减20',
		interBtn: 'Visit Store'
	};
	Find.defaultProps = {
		interBtn: 'Visit Store',
		change: 'Refresh',
		noData: 'noData'
	};

	TopSelectList.defaultProps = {
		save: "Save",
		shopCar: "Buy Now",
		news: "List rule:Monthy top 10 hot sale products",
		time: "Turnove time: Each Tuesday in the second week of the month at 12:00 (Beijing Time)."
	};
	TopSelect.defaultProps = {
		topSelect: "World Top Selection",
		buy: "People like to buy them"

	};
	TopSelectBuyNews.defaultProps = {
		buyNews: "Shopping News",
		time: "Just bought"
	};
	TopSelectTodayNews.defaultProps = {
		todayNews: "Platforms Today Headline"
	};
	LookBuy.defaultProps = {
		lookBuy: "Watch and Buy",
		rules: "Live is the only way to exam quality standard",
		allVideo: "Watch all",
		likeNums: "Rating"
	};
	Classics.defaultProps = {
		classics: "Superbuy Classic Fashion",
		choice: "Exclusive for you",
		classicsMore: "See more",
		classicsLeftText: "中式潮牌 X 匠心督造 "
	};
	Ideas.defaultProps = {
		ideas: "Superbuy New Ideas",
		choice: "The most curious and creative items",
		ideasMore: "See more"
	};
	Goodshop.defaultProps = {
		goodshop: "Superbuy Good Stores",
		choice: "Exclusive for you",
		goodshopMore: "See more"
	};
	var Wrap = window.supervar.Wrap;
	var content = ReactDOM.render(React.createElement(Wrap, { content: Content }), document.getElementById("container"));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./goodIndex.less", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./goodIndex.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\n/* your business less */\n* {\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n.content {\n  position: relative;\n  overflow: hidden;\n}\na {\n  cursor: pointer!important;\n}\n.textOver {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\na {\n  cursor: pointer !important;\n}\n.banner {\n  height: 500px;\n  width: 1920px;\n  position: relative;\n  left: 50%;\n}\n.banner .banner-box {\n  left: -50%;\n  position: relative;\n  height: 100%;\n}\n.banner ul {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  white-space: nowrap;\n}\n.banner ul li {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n}\n.banner ul li img {\n  display: block;\n  width: 1920px;\n  height: 500px;\n}\n.banner .ul-move {\n  transition: all 0.8s ease-in-out;\n}\n.banner .ul-over {\n  transition: all 0s ease-in-out;\n}\n.banner .banner-change {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  width: 1334px;\n  height: 67px;\n  overflow: hidden;\n  display: none;\n}\n.banner .banner-change div {\n  cursor: pointer;\n}\n.banner .banner-change .banner-left {\n  float: left;\n}\n.banner .banner-change .banner-right {\n  float: right;\n}\n.bannerTag {\n  position: absolute;\n  bottom: 14px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.bannerTag span {\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  margin: 0 4px;\n  border: 1px solid #641eb4;\n  cursor: pointer;\n}\n.bannerTag .bannerTag-default {\n  background: transparent;\n}\n.bannerTag .bannerTag-active {\n  background: #641eb4;\n}\n.title-nav {\n  text-align: center;\n  height: 80px;\n}\n.title-nav span {\n  display: inline-block;\n  padding: 0 24px;\n  height: 78px;\n  line-height: 78px;\n  font-size: 18px;\n  cursor: pointer;\n  position: relative;\n  float: left;\n}\n.title-nav span:first-child {\n  margin-left: 25px ;\n}\n.title-nav .span-default {\n  color: #666666;\n  border-bottom: 2px solid #ffffff;\n}\n.title-nav .span-active {\n  color: #641eb4;\n  border-bottom: 2px solid #641eb4 ;\n}\n.title-nav .span-active:before {\n  content: '';\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border: 8px solid transparent;\n  border-bottom-color: #641eb4;\n}\n.findbox {\n  width: 1200px;\n  margin: 70px auto 0;\n  overflow: hidden;\n}\n.findbox .find-left {\n  width: 370px;\n  height: 524px;\n  border: 1px solid #eeeeee;\n  float: left;\n  box-sizing: border-box;\n  position: relative;\n}\n.findbox .left-top {\n  width: 310px;\n  height: 78px;\n  line-height: 78px;\n  margin: 0 auto;\n}\n.findbox .left-top h1 {\n  float: left;\n  font-size: 24px;\n  color: #000000;\n  height: 78px;\n  line-height: 78px;\n}\n.findbox .left-middle {\n  width: 310px;\n  height: 398px;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n.findbox .left-middle .left-middle-border {\n  width: 298px;\n  height: 386px;\n  border: 6px solid rgba(100, 30, 180, 0.5);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.findbox .left-middle ul {\n  width: auto;\n  height: 398px;\n  white-space: nowrap;\n  transition: all 0.8s ease-in-out;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.findbox .left-middle li {\n  display: inline-block;\n  position: relative;\n  width: 310px;\n  height: 398px;\n}\n.findbox .left-middle .left-img {\n  width: 310px;\n  height: 310px;\n  display: block;\n}\n.findbox .left-middle .left-msg {\n  width: 301px;\n  height: 88px;\n  text-align: center;\n}\n.findbox .left-middle .left-msg span {\n  color: #999;\n  padding-top: 25px;\n  display: block;\n}\n.findbox .left-middle .left-msg p {\n  color: #641eb4;\n  margin: 0px auto 20px ;\n}\n.findbox .left-middle .left-middle-text {\n  width: 298px;\n  height: 130px;\n  position: absolute;\n  left: 6px;\n  bottom: 6px;\n  text-align: center;\n  font-size: 14px;\n  background: #ffffff;\n  overflow: hidden;\n  z-index: 999;\n}\n.findbox .left-middle .left-middle-text img {\n  width: 120px;\n  height: 40px;\n  display: block;\n  margin: 15px auto;\n}\n.findbox .left-middle .left-middle-text input {\n  cursor: pointer;\n  width: 170px;\n  height: 48px;\n  line-height: 48px;\n  font-size: 18px;\n  color: #ffffff ;\n  text-align: center;\n  margin: 0 auto;\n  border: 0;\n  background: #641eb4;\n  border-radius: 2px;\n}\n.findbox .left-middle .left-middle-default {\n  display: none;\n}\n.findbox .left-middle .left-middle-active {\n  display: block;\n}\n.findbox .find-right {\n  width: 830px;\n  height: 524px;\n  float: left;\n  position: relative;\n}\n.findbox .find-right .title-nav {\n  border: 1px solid #eeeeee;\n}\n.findbox .find-right .find-right-change {\n  height: 18px;\n  position: absolute;\n  right: 27px;\n  top: 30px;\n  font-size: 14px;\n  color: #666666;\n  cursor: pointer;\n}\n.findbox .find-right .find-right-change img {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin-right: 7px;\n}\n.findbox .find-right .find-right-middle {\n  width: 100%;\n  height: 446px;\n  text-align: center;\n  background: #f6f4f7;\n}\n.findbox .find-right .find-right-list {\n  overflow: hidden;\n}\n.findbox .find-right .right-listbox {\n  float: left;\n  width: 184px;\n  height: 314px;\n  margin: 14px 7px 17px;\n}\n.findbox .find-right .right-listbox:first-child {\n  margin-left: 25px;\n}\n.findbox .find-right .right-listbox .big-img {\n  width: 186px;\n  height: 186px;\n  display: block;\n  margin: 0 auto ;\n}\n.findbox .find-right .listbox-bottom {\n  overflow: hidden;\n  width: 184px;\n  height: 126px;\n  background: #ffffff;\n  border: 1px solid #eeeeee;\n  border-top-width: 0;\n  font-size: 14px;\n  text-align: center;\n}\n.findbox .find-right .listbox-bottom input {\n  cursor: pointer;\n  width: 144px;\n  height: 48px;\n  line-height: 48px;\n  font-size: 18px;\n  color: #ffffff ;\n  text-align: center;\n  margin: 0 auto;\n  border: 0;\n  background: #641eb4;\n  border-radius: 2px;\n}\n.findbox .find-right .listbox-bottom .small-img {\n  width: 100px;\n  height: 40px;\n  display: block;\n  margin: 10px auto;\n}\n.findbox .find-right .listbox-bottom .listbox-bottom-box {\n  overflow: hidden;\n  position: relative;\n  height: 50px;\n}\n.findbox .find-right .listbox-bottom .listbox-bottom-move {\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  width: 100%;\n}\n.findbox .find-right .listbox-bottom .listbox-bottom-move span,\n.findbox .find-right .listbox-bottom .listbox-bottom-move p {\n  display: block;\n  height: 22px;\n  overflow: hidden;\n}\n.findbox .find-right .listbox-bottom .listbox-bottom-move:hover {\n  top: -60px;\n}\n.findbox .find-right .listbox-bottom span {\n  color: #a9a9a9;\n}\n.findbox .find-right .listbox-bottom p {\n  color: #641eb4;\n  margin: 0px auto 20px ;\n}\n.findbox .find-right .find-right-bottom {\n  width: 100%;\n  height: 62px;\n  padding-top: 15px;\n  border-top: 1px solid #eeeeee;\n}\n.findbox .find-right .find-right-bottom a {\n  width: 144px;\n  height: 62px;\n  border: 1px solid #eee;\n  margin: 0 8px;\n  float: left;\n  background: #fff;\n}\n.findbox .find-right .find-right-bottom a:hover {\n  width: 142px;\n  height: 60px;\n  border: 2px solid #641eb4;\n}\n.findbox .find-right .find-right-bottom a:hover img {\n  width: 140px;\n  height: 47px;\n  margin: 6px auto;\n}\n.findbox .find-right .find-right-bottom a:first-child {\n  margin-left: 25px;\n}\n.findbox .find-right .find-right-bottom img {\n  width: 140px;\n  height: 47px;\n  display: block;\n  margin: 7px auto;\n}\n.topselect {\n  width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n  overflow: hidden;\n}\n.topselect h1 {\n  font-weight: bold;\n  font-size: 24px;\n  color: #333333;\n  margin: 70px 0 0px;\n}\n.topselect .sub-title {\n  font-size: 14px;\n  color: #666;\n  height: 40px;\n  line-height: 40px;\n}\n.topselect .topselect-nav {\n  border: 1px solid #eee;\n}\n.topselect .topselect-nav span {\n  float: none;\n}\n.topselect .topselect-nav span:first-child {\n  margin-left: 0;\n}\n.topselect .news {\n  overflow: hidden;\n  width: 100%;\n  height: 31px;\n  line-height: 31px;\n  background: #f6f4f7;\n  text-align: center;\n  font-size: 12px;\n  color: #999999;\n}\n.topselect .news span {\n  margin-left: 37px;\n  display: inline-block;\n}\n.topselect .news .close {\n  cursor: pointer;\n}\n.topselect .news .close img {\n  width: 10px;\n  height: 10px;\n  display: block;\n}\n.topselect .news-close {\n  height: 0;\n  overflow: hidden;\n}\n.topselect .topselect-list {\n  overflow: hidden;\n}\n.topselect .topselect-listbox {\n  width: 216px;\n  height: 306px;\n  border: 1px solid #eeeeee;\n  float: left;\n  position: relative;\n  margin: 11px ;\n}\n.topselect .topselect-listbox:nth-of-type(1):after {\n  content: '1';\n}\n.topselect .topselect-listbox:nth-of-type(2):after {\n  content: '2';\n}\n.topselect .topselect-listbox:nth-of-type(3):after {\n  content: '3';\n}\n.topselect .topselect-listbox:nth-of-type(1):before,\n.topselect .topselect-listbox:nth-of-type(2):before,\n.topselect .topselect-listbox:nth-of-type(3):before {\n  content: '';\n  width: 0px;\n  height: 0px;\n  border-width: 40px 20px 10px;\n  border-style: solid;\n  border-color: #ff9600;\n  border-bottom-color: transparent;\n  position: absolute;\n  left: -10px;\n  top: -13px;\n}\n.topselect .topselect-listbox:nth-of-type(1):after,\n.topselect .topselect-listbox:nth-of-type(2):after,\n.topselect .topselect-listbox:nth-of-type(3):after {\n  width: 40px;\n  height: 50px;\n  position: absolute;\n  left: -10px;\n  top: -13px;\n  text-align: center;\n  color: #fff;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 45px;\n}\n.topselect .topselect-listbox:last-child {\n  margin-right: 0px;\n}\n.topselect .topselect-listbox img {\n  width: 214px;\n  height: 214px;\n  display: block;\n  margin: 0 auto;\n}\n.topselect .topselect-listbox .add2-shopcar {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 184px;\n  overflow: hidden;\n}\n.topselect .topselect-listbox .add2-shopcar span {\n  color: #fff;\n  font-size: 12px;\n  width: 100%;\n  text-align: left;\n  float: left;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n.topselect .topselect-listbox .add2-shopcar span:last-child {\n  text-align: center;\n  background: rgba(255, 80, 100, 0.8);\n}\n.topselect .topselect-listbox .add2-shopcar-default {\n  display: none;\n}\n.topselect .topselect-listbox .add2-shopcar-active {\n  display: block;\n}\n.topselect .topselect-listbox .goods-detail {\n  width: 194px;\n  overflow: hidden;\n  margin: 0 auto;\n}\n.topselect .topselect-listbox .goods-detail span {\n  font-size: 16px;\n  width: 50%;\n  height: 40px;\n  line-height: 40px;\n  float: left;\n}\n.topselect .topselect-listbox .goods-detail .price {\n  text-align: left;\n  color: #6736a3;\n}\n.topselect .topselect-listbox .goods-detail .oldPrice {\n  text-align: right;\n  color: #999999;\n  text-decoration: line-through;\n}\n.topselect .topselect-listbox .goods-detail p {\n  font-size: 14px;\n  color: #666666;\n  float: left;\n  text-align: left;\n  line-height: 20px;\n}\n.topselect .buy-news,\n.topselect .today-news {\n  float: left;\n  margin-top: 70px;\n  height: 238px;\n}\n.topselect .buy-news h1,\n.topselect .today-news h1 {\n  margin: 0;\n  height: 75px;\n  line-height: 75px;\n  text-align: center;\n}\n.topselect .buy-news .new-box,\n.topselect .today-news .new-box {\n  width: 100%;\n  height: 162px;\n  overflow: hidden;\n  position: relative;\n}\n.topselect .buy-news {\n  border: 1px solid #eee;\n  width: 368px;\n}\n.topselect .buy-news h1 {\n  border-bottom: 1px solid #eee;\n}\n.topselect .buy-news ul {\n  width: 100%;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.topselect .buy-news .news-move {\n  transition: all 0.8s ease-in-out;\n}\n.topselect .buy-news .news-over {\n  transition: all 0s ease-in-out;\n}\n.topselect .buy-news li {\n  width: 333px;\n  height: 40px;\n  margin: 13px 0 13px 13px;\n}\n.topselect .buy-news img {\n  float: left;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  border-radius: 50%;\n}\n.topselect .buy-news p {\n  float: right;\n  font-size: 12px;\n  color: #333333;\n  width: 280px;\n  text-align: left;\n}\n.topselect .buy-news p a {\n  color: #274e9b;\n}\n.topselect .today-news {\n  border: 1px solid #eee;\n  border-left-width: 0;\n  width: 829px;\n  overflow: hidden;\n}\n.topselect .today-news ul {\n  float: left;\n  overflow: hidden;\n  width: 414px;\n  height: 140px;\n}\n.topselect .today-news li {\n  margin-left: 31px;\n  width: 342px;\n  font-size: 14px;\n  color: #999999 ;\n  height: 34px;\n  line-height: 34px;\n  text-align: left;\n}\n.topselect .today-news li a {\n  float: left;\n  color: #999;\n  width: 250px;\n  height: 34px;\n  line-height: 34px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.topselect .today-news li a:hover {\n  color: #641eb4;\n}\n.topselect .today-news li span {\n  float: right;\n}\n.topselect .today-news .ul-border {\n  float: left;\n  width: 1px;\n  height: 140px;\n  background: #f3f3f3;\n}\n.lookbuy-bg {\n  width: 100%;\n  height: 582px;\n  background: #f3f3f3;\n  overflow: hidden;\n  margin: 60px 0 0;\n}\n.lookbuy {\n  width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n}\n.lookbuy h1 {\n  font-weight: bold;\n  font-size: 24px;\n  color: #333333;\n  margin: 70px 0 0px;\n}\n.lookbuy .sub-title {\n  position: relative;\n  font-size: 14px;\n  color: #666666;\n  height: 40px;\n  line-height: 40px;\n}\n.lookbuy .sub-title a {\n  position: absolute;\n  right: 14px;\n  cursor: pointer;\n  text-align: left;\n  width: 95px;\n  float: right;\n  font-size: 14px;\n  color: #274e9b;\n  background: #f3f3f3 url('/cn/source/img/sthgood/goodIndex/find_more.png') no-repeat 90px center;\n  background-size: 5px 10px;\n}\n.lookbuy .video-box {\n  overflow: hidden;\n}\n.lookbuy .video-left-box {\n  float: left;\n  width: 612px;\n  height: 420px;\n  overflow: hidden;\n  position: relative;\n}\n.lookbuy .video-left-box:hover .video-info .video-title {\n  color: #641eb4;\n}\n.lookbuy .video-left-box:hover .video-begin {\n  background: url('/cn/source/img/sthgood/goodIndex/video_begin_big2.png') no-repeat 0px center;\n}\n.lookbuy .video-left-box .video-source {\n  width: 612px;\n  height: 345px;\n  position: relative;\n}\n.lookbuy .video-left-box .video-img {\n  width: 612px;\n  height: 345px;\n  display: block;\n}\n.lookbuy .video-left-box .video-begin {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: url('/cn/source/img/sthgood/goodIndex/video_begin_big1.png') no-repeat 0px center;\n  background-size: 100px 100px;\n}\n.lookbuy .video-left-box .video-info {\n  width: 100%;\n  height: 75px;\n  overflow: hidden;\n  background: #fff;\n  color: #999;\n  font-size: 14px;\n}\n.lookbuy .video-left-box .video-title {\n  float: left;\n  color: #666;\n  font-size: 18px;\n  margin: 0 0 0 10px;\n  line-height: 75px;\n}\n.lookbuy .video-left-box .video-browseNums {\n  float: right;\n  margin: 27px 10px 0 0 ;\n  width: 52px;\n  height: 21px;\n  line-height: 21px;\n  text-indent: 28px;\n  background: url('/cn/source/img/sthgood/goodIndex/video_eye.png') no-repeat 0px center;\n  background-size: 22px 16px;\n}\n.lookbuy .video-box-list {\n  float: left;\n  width: 588px;\n  height: 420px ;\n  overflow: hidden;\n}\n.lookbuy .video-box-list .video-item-box {\n  float: left;\n  width: 264px;\n  height: 195px;\n  margin: 0 0 30px 30px ;\n  background: #ffffff;\n}\n.lookbuy .video-box-list .video-item-box:hover .video-info .video-title {\n  color: #641eb4;\n}\n.lookbuy .video-box-list .video-item-box:hover .video-begin {\n  background: url('/cn/source/img/sthgood/goodIndex/video_begin_small2.png') no-repeat 0px center;\n}\n.lookbuy .video-box-list .video-source {\n  width: 264px;\n  height: 150px;\n  position: relative;\n}\n.lookbuy .video-box-list .video-img {\n  width: 264px;\n  height: 150px;\n  display: block;\n}\n.lookbuy .video-box-list .video-begin {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  width: 57px;\n  height: 57px;\n  border-radius: 50%;\n  background: url('/cn/source/img/sthgood/goodIndex/video_begin_small1.png') no-repeat 0px center;\n  background-size: 57px 57px;\n}\n.lookbuy .video-box-list .video-info {\n  width: 100%;\n  height: 45px;\n  overflow: hidden;\n  background: #fff;\n  color: #999;\n  font-size: 14px;\n}\n.lookbuy .video-box-list .video-title {\n  float: left;\n  color: #666;\n  font-size: 14px;\n  margin: 0 0 0 10px;\n  line-height: 45px;\n}\n.lookbuy .video-box-list .video-browseNums {\n  float: right;\n  margin: 12px 10px 0 0 ;\n  width: 37px;\n  height: 21px;\n  line-height: 21px;\n  text-indent: 20px;\n  background: url('/cn/source/img/sthgood/goodIndex/video_eye.png') no-repeat 0px center;\n  background-size: 15px 11px;\n}\n.classics {\n  width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 30px;\n  margin-bottom: 80px;\n}\n.classics h1 {\n  font-weight: bold;\n  font-size: 24px;\n  color: #333333;\n  margin: 70px 0 0px;\n}\n.classics .sub-title {\n  height: 40px;\n  line-height: 40px;\n}\n.classics .classics-box {\n  overflow: hidden;\n}\n.classics .classics-left {\n  float: left;\n  overflow: hidden;\n  position: relative;\n}\n.classics .classics-left img {\n  width: 794px;\n  height: 397px;\n  display: block;\n}\n.classics .classics-right,\n.classics .classics-bottom {\n  overflow: hidden;\n  text-align: center;\n}\n.classics .classics-right div,\n.classics .classics-bottom div {\n  float: left;\n}\n.classics .classics-right a,\n.classics .classics-bottom a {\n  overflow: hidden;\n  display: block;\n}\n.classics .classics-right img,\n.classics .classics-bottom img {\n  display: block;\n}\n.classics .classics-right p,\n.classics .classics-bottom p {\n  font-weight: bold;\n  font-size: 18px;\n  color: #641eb4;\n}\n.classics .classics-right div {\n  width: 185px;\n  height: 185px;\n  margin: 0 0 18px 18px;\n  overflow: hidden;\n  background: #efeded;\n  position: relative;\n}\n.classics .classics-right img {\n  width: 185px;\n  height: 185px;\n}\n.classics .classics-right p {\n  height: 36px;\n  line-height: 36px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n.classics .classics-bottom {\n  width: 100%;\n  height: 225px;\n}\n.classics .classics-bottom div {\n  width: 185px;\n  height: 239px;\n  overflow: hidden;\n  margin-right: 18px;\n}\n.classics .classics-bottom div:last-child {\n  margin-right: 0;\n}\n.classics .classics-bottom img {\n  width: 185px;\n  height: 185px;\n}\n.classics .classics-bottom p {\n  height: 54px;\n  line-height: 54px;\n  width: 100%;\n}\n.ideas {\n  width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #eee;\n  padding-bottom: 30px;\n  margin-bottom: 80px;\n}\n.ideas h1 {\n  font-weight: bold;\n  font-size: 24px;\n  color: #333333;\n  margin: 70px 0 0px;\n}\n.ideas .sub-title {\n  position: relative;\n  font-size: 14px;\n  color: #666666;\n  height: 40px;\n  line-height: 40px;\n}\n.ideas .sub-title a {\n  position: absolute;\n  right: 14px;\n  color: #274e9b;\n  cursor: pointer;\n}\n.ideas .ideas-content {\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.ideas .ideas-nav {\n  height: 282px;\n  width: 1117px;\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n}\n.ideas .ideas-nav ul {\n  width: auto;\n  height: 282px;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  white-space: nowrap;\n}\n.ideas .ideas-nav .ul-move {\n  transition: all 0.8s ease-in-out;\n}\n.ideas .ideas-nav .ul-over {\n  transition: all 0s ease-in-out;\n}\n.ideas .ideas-nav li {\n  display: inline-block;\n  border: 1px solid #eee;\n  height: 280px;\n  width: 346px;\n  margin: 0 12px;\n}\n.ideas .ideas-nav li:last-child {\n  margin-right: 0;\n}\n.ideas .ideas-nav li img {\n  width: 348px;\n  height: 200px;\n  margin: -1px 0 10px -1px;\n}\n.ideas .ideas-nav li div {\n  width: 303px;\n  margin: 0 auto 8px;\n  text-align: left;\n}\n.ideas .ideas-nav li .ideas-type {\n  color: #999999;\n  font-size: 14px;\n  height: 27px;\n}\n.ideas .ideas-nav li .ideas-type span {\n  vertical-align: super;\n  text-indent: 0px;\n  display: inline-block;\n  height: 18px;\n  line-height: 18px;\n  width: 303px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ideas .ideas-nav li .ideas-title {\n  font-size: 18px;\n  height: 27px;\n  overflow: hidden;\n}\n.ideas .ideas-nav li .ideas-title span {\n  float: right;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ideas .ideas-nav li .ideas-title span:first-child {\n  color: #333333;\n  width: 90px;\n  float: left;\n}\n.ideas .ideas-nav li .ideas-title span:last-child {\n  color: #641eb4;\n  width: 210px;\n  float: right;\n  text-align: right;\n}\n.turn-left,\n.turn-right {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  overflow: hidden;\n  cursor: pointer;\n  padding: 5px;\n}\n.turn-left img,\n.turn-right img {\n  width: 11px;\n  height: 18px;\n}\n.turn-left {\n  left: 20px;\n}\n.turn-right {\n  right: 20px;\n}\n.goodshop {\n  width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #eee;\n  padding-bottom: 30px;\n  margin-bottom: 80px;\n}\n.goodshop h1 {\n  font-weight: bold;\n  font-size: 24px;\n  color: #333333;\n  margin: 40px 0 0px;\n}\n.goodshop .sub-title {\n  position: relative;\n  font-size: 14px;\n  color: #666666;\n  margin-bottom: 27px;\n  height: 21px;\n}\n.goodshop .sub-title a {\n  position: absolute;\n  right: 14px;\n  color: #274e9b;\n  cursor: pointer;\n}\n.goodshop .goodshop-content {\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.goodshop .goodshop-nav {\n  height: 230px;\n  width: 1117px;\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n}\n.goodshop .goodshop-nav ul {\n  width: auto;\n  height: 230px;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  white-space: nowrap;\n}\n.goodshop .goodshop-nav .ul-move {\n  transition: all 0.8s ease-in-out;\n}\n.goodshop .goodshop-nav .ul-over {\n  transition: all 0s ease-in-out;\n}\n.goodshop .goodshop-nav li {\n  display: inline-block;\n  height: 230px;\n  width: 346px;\n  margin: 0 12px;\n}\n.goodshop .goodshop-nav li:last-child {\n  margin-right: 0;\n}\n.goodshop .goodshop-nav li img {\n  width: 346px;\n  height: 230px;\n  margin-bottom: 10px;\n}\na.look-more {\n  text-align: left;\n  padding-right: 14px;\n  float: right;\n  font-size: 14px;\n  color: #274e9b;\n  background: #fff url('/cn/source/img/sthgood/goodIndex/find_more.png') no-repeat 67px center;\n  background-size: 5px 10px;\n}\n.buy-reasons {\n  width: 1200px;\n  height: 80px;\n  box-sizing: border-box;\n  border: 1px solid #eee;\n  margin: 75px auto;\n  position: relative;\n}\n.buy-reasons dl {\n  height: 100%;\n}\n.buy-reasons dt {\n  float: left;\n  width: 158px;\n  height: 100%;\n  border-right: 1px solid #eee;\n  background: #f6f4f7;\n  text-align: center;\n  line-height: 22px;\n  font-size: 18px;\n}\n.buy-reasons dt span {\n  display: inline-block;\n  margin-top: 18px;\n}\n.buy-reasons dt em {\n  color: #143c7c;\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n.buy-reasons dd {\n  float: left;\n  height: 40px;\n  margin: 4px 20px 0;\n  text-align: center;\n  padding: 0 30px;\n}\n.buy-reasons dd i {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: url('/cn/source/img//buy/icon_reasons.png') center 0 no-repeat;\n  margin: 0 auto;\n}\n.buy-reasons dd span {\n  float: left;\n  color: #999;\n  width: 100%;\n  line-height: 15px;\n}\n.buy-reasons dd:nth-of-type(2) i {\n  background-position: center -50px;\n}\n.buy-reasons dd:nth-of-type(3) i {\n  background-position: center -100px;\n}\n.buy-reasons dd:nth-of-type(4) i {\n  background-position: center -150px;\n}\n.buy-reasons dd:nth-of-type(5) i {\n  background-position: center -200px;\n}\n.buy-reasons a {\n  position: absolute;\n  top: 30px;\n  right: 14px;\n  color: #274e9b;\n  line-height: 18px;\n  background: #fff url('/cn/source/img/sthgood/goodIndex/find_more.png') no-repeat 78px center;\n}\n.buy-reasons dd:nth-of-type(3) span {\n  width: 100px;\n}\n.buy-reasons dd:nth-of-type(4) span {\n  width: 145px;\n}\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(14);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var domain = window.supervar.domain;
	var hrefUrl = "/en/page/";
	var secnavTitle = [{ "title": "Selection" }, { "title": "Clothing" }, { "title": "Digital" }, { "title": "Home" }, { "title": "Shoes & Bags" }];

	var SecNavBox = function (_React$Component) {
		_inherits(SecNavBox, _React$Component);

		function SecNavBox(props) {
			_classCallCheck(this, SecNavBox);

			var _this = _possibleConstructorReturn(this, (SecNavBox.__proto__ || Object.getPrototypeOf(SecNavBox)).call(this, props));

			_this.state = {
				searchShow: false,
				moreImg: false
			};
			return _this;
		}
		//	search(){
		//		let searchValue = this.refs.search.value;
		//		if(searchValue==''||searchValue==null){
		//			alert(this.props.alertWarn);
		//		}else{
		//			var patt1=new RegExp("[a-zA-z]+://[^\s]*");
		//			if(patt1.test(searchValue)){
		//				window.open(`${hrefUrl}buy/?url=${encodeURIComponent(searchValue)}`);
		//			}else{
		//				alert(this.props.urlWarn);
		//			}
		//		}
		//		this.refs.search.value = '';
		//		this.refs.search.focus();
		//	}
		//	searchHandle(e){
		//		if((e.keyCode).toString()=='13') {this.search();};
		//	}
		//	showSearch(e){
		//		if(this.state.searchShow==false){
		//			this.refs.search.focus();
		//			e.target.getAttribute('name') == "hideSearch" ? this.setState({searchShow:true,moreImg:false}) : '';
		//		}else{
		//			this.search();
		//		}
		//		
		//	}
		//	showList(){
		//		this.setState({
		//			moreImg:!this.state.moreImg,
		//		});
		//	}
		//	componentDidMount(){
		//		let that =this;
		//		window.onclick = function(e){
		//			if(e.target.getAttribute('name')!='hideSearch' && e.target.getAttribute('name')!='searchInput'){
		//				that.setState({searchShow:false});
		//				that.refs.search.value='';
		//			}
		//			if(e.target.getAttribute('name')!='secnavMore') that.setState({moreImg:false});
		//		}
		//	}


		_createClass(SecNavBox, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "secnavbox" },
					React.createElement(
						"div",
						{ className: "secnav" },
						React.createElement(
							"div",
							{ className: "secnav-left" },
							React.createElement(
								"a",
								{ href: "//buy." + domain + "/" },
								React.createElement(
									"span",
									{ className: "daigou" },
									this.props.daigou
								)
							),
							React.createElement(
								"a",
								{ href: hrefUrl + 'sthgood/goodIndex/' },
								this.props.sthGood
							)
						),
						React.createElement(
							"ul",
							{ className: this.state.searchShow == true ? "secnav-right secnav-right-hide" : "secnav-right secnav-right-show" },
							secnavTitle.map(function (a) {
								return React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										{ href: "#" },
										a.title
									)
								);
							})
						)
					)
				);
			}
		}]);

		return SecNavBox;
	}(React.Component);

	SecNavBox.defaultProps = {
		daigou: 'Shopping Agent',
		sthGood: 'Something Good',
		search: 'http://enter or pastes the items URL here',
		alertWarn: 'Please enter link address!',
		urlWarn: 'Please enter the correct link address!'
	};
	exports.default = SecNavBox;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/less-loader/index.js!./secNav.less", function() {
				var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/less-loader/index.js!./secNav.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\n.secnavbox {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  z-index: 4;\n  top: 0;\n}\n.secnavbox .secnav {\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n}\n.secnavbox .secnav-left {\n  float: left;\n  font-size: 18px;\n  color: #641eb4;\n  height: 50px;\n  line-height: 50px;\n}\n.secnavbox .secnav-left a {\n  text-decoration: none;\n}\n.secnavbox .secnav-left .daigou {\n  padding-right: 11px;\n  height: 24px;\n  text-align: left;\n  margin-right: 11px;\n  font-size: 24px;\n  color: #393939;\n  border-right: 1px solid #142341;\n  font-weight: bold;\n}\n.secnavbox .secnav-search {\n  float: right;\n  min-width: 25px;\n  width: auto;\n  height: 30px;\n  position: relative;\n  margin-top: 10px;\n}\n.secnavbox .secnav-search input {\n  position: absolute;\n  height: 30px;\n  line-height: 30px;\n  background: #f6f4f7;\n  color: #999999;\n  text-indent: 13px;\n  border: 0;\n  outline: none;\n}\n.secnavbox .secnav-search .search {\n  width: 0;\n  left: 0px;\n}\n.secnavbox .secnav-search .search-active {\n  width: 760px;\n  left: -735px;\n}\n.secnavbox .secnav-search img {\n  position: absolute;\n  right: 10px;\n  top: 6px;\n  width: 18px;\n  height: 18px;\n  display: block;\n  cursor: pointer;\n}\n.secnavbox .secnav-right {\n  float: right;\n  overflow: hidden;\n}\n.secnavbox .secnav-right li {\n  float: left;\n  height: 50px;\n  line-height: 50px;\n  padding: 0 19px;\n}\n.secnavbox .secnav-right a {\n  font-size: 14px;\n  color: #666666;\n}\n.secnavbox .secnav-right a:hover {\n  color: #641eb4;\n}\n.secnavbox .secnav-right-show {\n  display: inline-block;\n}\n.secnavbox .secnav-right-hide {\n  display: none;\n}\n.secnavbox .secnav-more {\n  float: right;\n  width: 42px;\n  height: 50px;\n  cursor: pointer;\n  position: relative;\n}\n.secnavbox .secnav-more img {\n  width: 18px;\n  height: 4px;\n  display: block;\n  transform-origin: left;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n.secnavbox .secnav-more-close {\n  background: #ffffff;\n}\n.secnavbox .secnav-more-close img {\n  transform: rotate(0deg) translateX(-50%) translateY(-50%);\n}\n.secnavbox .secnav-more-active {\n  background: #eeeeee;\n}\n.secnavbox .secnav-more-active img {\n  transform: rotate(-90deg) translateX(-50%) translateY(-50%);\n}\n.secnavbox .nav-list {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  overflow: hidden;\n  border: 1px solid #eeeeee;\n}\n.secnavbox .nav-list li {\n  background: #ffffff;\n  width: 156px;\n  height: 52px;\n  padding-left: 20px;\n  line-height: 52px;\n  text-align: left;\n  border-bottom: 1px solid #eeeeee;\n}\n.secnavbox .nav-list li:hover {\n  background: #eeeeee;\n}\n.secnavbox .nav-list li:nth-of-type(1),\n.secnavbox .nav-list li:nth-of-type(2) {\n  background: #fff url('/cn/source/img/sthgood/goodIndex/secnav_slide.png') no-repeat 149px center;\n  background-size: 12px 12px;\n}\n.secnavbox .nav-list li:nth-of-type(1):hover,\n.secnavbox .nav-list li:nth-of-type(2):hover {\n  background: #eee url('/cn/source/img/sthgood/goodIndex/secnav_slide.png') no-repeat 149px center;\n}\n.secnavbox .nav-list li:nth-of-type(1) a,\n.secnavbox .nav-list li:nth-of-type(2) a {\n  color: #6736a3;\n}\n.secnavbox .nav-list a {\n  color: #999999;\n  font-size: 14px;\n  cursor: pointer;\n}\n.secnavbox .nav-list-default {\n  display: none;\n}\n.secnavbox .nav-list-active {\n  display: block;\n}\n", ""]);

	// exports


/***/ }
/******/ ]);