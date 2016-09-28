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

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(3);

	var _searchNav = __webpack_require__(7);

	var _searchNav2 = _interopRequireDefault(_searchNav);

	var _Pagination = __webpack_require__(10);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	__webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import Paging from '../../../../../plugin/reactcommon/Paging/Paging';
	var util = window.supervar.util;
	var imgsrc = window.supervar.imgsrc_cn;
	// const apiUrl='http://www.super.com/api/';
	var apiUrl = window.supervar.apiURL;

	/* your logic code */

	//位置导航的文字
	var secNavBoxTxt = [{ txt: "Video List" }];

	var ListBox = function (_React$Component) {
	    _inherits(ListBox, _React$Component);

	    function ListBox(props) {
	        _classCallCheck(this, ListBox);

	        var _this = _possibleConstructorReturn(this, (ListBox.__proto__ || Object.getPrototypeOf(ListBox)).call(this, props));

	        _this.state = {
	            listCont: {}
	        };
	        _this.handleChangeCat = _this.props.handleChangeCat.bind(_this);
	        return _this;
	    }

	    _createClass(ListBox, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;

	            document.getElementById("container").style.opacity = 1;
	            fetch(apiUrl + 'shoppingguide/video-cat-list?lang=en-us').then(function (res) {
	                if (res.status === 200) {
	                    return res.json();
	                } else {
	                    throw Error('Response Status: ' + res.message);
	                }
	            }).then(function (data) {
	                if (data.data && data.data.length) {
	                    _this2.setState({
	                        listCont: data.data
	                    }, function () {
	                        // console.log(this.state)
	                    });
	                }
	            }).catch(function (error) {
	                console.error(error);
	            });
	        }
	    }, {
	        key: 'activeClass',
	        value: function activeClass(index) {
	            //改变当前分类的选中样式
	            return index === this.props.catIndex ? "active" : "";
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            // console.log("1111",this.state)
	            return React.createElement(
	                'div',
	                { className: 'sort-nav' },
	                React.createElement(
	                    'ul',
	                    { className: 'clearfix' },
	                    React.createElement(
	                        'li',
	                        { className: this.activeClass(0), onClick: this.handleChangeCat.bind(this, 0, 0) },
	                        React.createElement(
	                            'a',
	                            null,
	                            'All'
	                        )
	                    ),
	                    this.state.listCont.length && this.state.listCont.map(function (v, i) {
	                        return React.createElement(
	                            'li',
	                            { className: _this3.activeClass(i + 1), onClick: _this3.handleChangeCat.bind(_this3, v.id, i + 1) },
	                            React.createElement(
	                                'a',
	                                null,
	                                v.categoryName
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }]);

	    return ListBox;
	}(React.Component);

	var Content = function (_React$Component2) {
	    _inherits(Content, _React$Component2);

	    function Content(props) {
	        _classCallCheck(this, Content);

	        var _this4 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

	        _this4.state = {
	            currPage: 1,
	            pageSize: 20,
	            sortType: 1,
	            cat: 0, //分类
	            catIndex: 0,
	            videosData: {}
	        };
	        _this4.handleChangeCat = _this4.handleChangeCat.bind(_this4);
	        _this4.handleChangePage = _this4.handleChangePage.bind(_this4);
	        _this4.handleGetDatas = _this4.handleGetDatas.bind(_this4);
	        // this.sortByUploadTime=this.sortByUploadTime.bind(this);
	        // this.sortByplays=this.sortByplays.bind(this);
	        _this4.goPrePage = _this4.goPrePage.bind(_this4);
	        _this4.goNextPage = _this4.goNextPage.bind(_this4);
	        _this4.date2str = _this4.date2str.bind(_this4);
	        _this4.getPageConfig = _this4.getPageConfig.bind(_this4);
	        _this4.onPageChange = _this4.onPageChange.bind(_this4);
	        return _this4;
	    }

	    _createClass(Content, [{
	        key: 'handleChangeCat',
	        value: function handleChangeCat(cat, catIndex) {
	            var _this5 = this;

	            //改变分类内容,其改变索引让当前分类添加active样式
	            // console.log(cat,catIndex)
	            this.setState({
	                currPage: 1,
	                cat: cat,
	                catIndex: catIndex
	            }, function () {
	                _this5.handleGetDatas();
	            });
	        }
	    }, {
	        key: 'handleChangePage',
	        value: function handleChangePage(currPage, pageSize, sortType) {
	            var _this6 = this;

	            //根据分页按钮显示不同数据
	            this.setState({
	                currPage: currPage,
	                pageSize: pageSize,
	                sortType: sortType
	            }, function () {
	                _this6.handleGetDatas();
	            });
	        }
	    }, {
	        key: 'handleGetDatas',
	        value: function handleGetDatas() {
	            var _this7 = this;

	            //根据分页、排序、页数获取分页的内容
	            fetch(apiUrl + 'shoppingguide/video-list?currPage=' + this.state.currPage + '&pageSize=' + this.state.pageSize + '&sortType=' + this.state.sortType + '&cat=' + this.state.cat, {
	                credentials: 'include'
	            }).then(function (res) {
	                if (res.status === 200) {
	                    return res.json();
	                } else {
	                    throw Error('Response Status: ' + res.message);
	                }
	            }).then(function (data) {
	                if (data.data && data.data.listResult) {
	                    _this7.setState({
	                        videosData: data.data
	                    }, function () {
	                        // console.log(this.state)
	                    });
	                } else if (data.data.listResult == null) {
	                    _this7.setState({
	                        videosData: {}
	                    }, function () {
	                        // console.log(this.state)
	                    });
	                }
	            }).catch(function (error) {
	                console.error(error);
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.handleGetDatas();
	        }

	        /*subsort-nav*/
	        // sortByUploadTime(){
	        //     this.refs.sortByplays.className="";
	        //     this.refs.sortByUploadTime.className="active";
	        //     this.setState({
	        //         sortType : 1
	        //     },()=>{
	        //         this.handleGetDatas();
	        //     });
	        // }
	        // sortByplays(){
	        //     this.refs.sortByUploadTime.className="";
	        //     this.refs.sortByplays.className="active";
	        //     this.setState({
	        //         sortType : 3
	        //     },()=>{
	        //         this.handleGetDatas();
	        //     });
	        // }

	    }, {
	        key: 'goPrePage',
	        value: function goPrePage() {
	            if (this.state.currPage <= 1) {
	                this.handleChangePage(1, 20, 1);
	            } else {
	                // console.log("goPrePage",this.props.datas.currPage-1)
	                this.handleChangePage(this.state.currPage - 1, 20, 1);
	            }
	        }
	    }, {
	        key: 'goNextPage',
	        value: function goNextPage() {
	            var currPage = this.state.currPage * 1 + 1;
	            var totalPage = Math.ceil(this.state.videosData.totalRow / this.state.pageSize) || 1;
	            if (this.state.currPage < totalPage) {
	                // this.setState({currPage : this.state.currPage+1});
	                this.handleChangePage(currPage, 20, 1);
	            } else {
	                this.handleChangePage(totalPage, 20, 1);
	            }
	        }
	    }, {
	        key: 'date2str',
	        value: function date2str(x, y) {
	            var z = { y: x.getFullYear(), M: x.getMonth() + 1, d: x.getDate(), h: x.getHours(), m: x.getMinutes(), s: x.getSeconds() };
	            return y.replace(/(y+|M+|d+|h+|m+|s+)/g, function (v) {
	                return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-(v.length > 2 ? v.length : 2));
	            });
	        }
	    }, {
	        key: 'getPageConfig',
	        value: function getPageConfig() {
	            return {
	                pageSize: this.state.pageSize,
	                currentPage: this.state.currPage,
	                totalNum: this.state.videosData.totalRow || 1,
	                totalPage: Math.ceil(this.state.videosData.totalRow / this.state.pageSize) || 1
	            };
	        }
	    }, {
	        key: 'onPageChange',
	        value: function onPageChange(currentPage) {
	            var _this8 = this;

	            // console.log("change:" + currentPage, "提示");
	            // this.handleChangePage(currentPage,20,1)
	            this.setState({
	                currPage: currentPage
	            }, function () {
	                _this8.handleGetDatas();
	            });
	        }
	    }, {
	        key: 'renderListCont',
	        value: function renderListCont() {
	            var _this9 = this;

	            //渲染视频列表listCont内容
	            var listCont = React.createElement(
	                'li',
	                { className: 'no-data' },
	                'No data...'
	            );
	            if (this.state.videosData.listResult) {
	                listCont = this.state.videosData.listResult.map(function (v, i) {
	                    return React.createElement(
	                        'li',
	                        { key: i, className: 'item' },
	                        React.createElement(
	                            'h3',
	                            { className: 'h3' },
	                            React.createElement(
	                                'a',
	                                { href: v.href },
	                                v.title
	                            )
	                        ),
	                        React.createElement(
	                            'a',
	                            { className: 'inner-wrap', target: '_blank', href: '../video/index.html?id=' + v.id },
	                            React.createElement(
	                                'div',
	                                { className: 'pic' },
	                                React.createElement('img', { src: v.img, alt: v.title }),
	                                React.createElement(
	                                    'div',
	                                    { className: 'video-tit' },
	                                    v.title
	                                ),
	                                React.createElement(
	                                    'div',
	                                    { className: 'tip clearfix' },
	                                    React.createElement('span', { className: 'ico fl' })
	                                ),
	                                React.createElement('div', { className: 'mask' })
	                            ),
	                            React.createElement(
	                                'div',
	                                { className: 'txt' },
	                                React.createElement(
	                                    'div',
	                                    { className: 'price' },
	                                    React.createElement(
	                                        'span',
	                                        { className: 'now-price' },
	                                        React.createElement(
	                                            'i',
	                                            null,
	                                            '￥'
	                                        ),
	                                        v.price
	                                    )
	                                ),
	                                React.createElement(
	                                    'div',
	                                    { className: 'label' },
	                                    React.createElement(
	                                        'ul',
	                                        { className: 'clearfix' },
	                                        v.keyword.split(',|，').map(function (item) {
	                                            return React.createElement(
	                                                'li',
	                                                null,
	                                                item
	                                            );
	                                        })
	                                    )
	                                ),
	                                React.createElement(
	                                    'div',
	                                    { className: 'foot clearfix' },
	                                    React.createElement(
	                                        'span',
	                                        { className: 'date fr' },
	                                        _this9.date2str(new Date(v.createTime * 1000), "M-d")
	                                    )
	                                )
	                            )
	                        )
	                    );
	                });
	            }
	            return listCont;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'video-list' },
	                React.createElement(_searchNav2.default, { subTit: secNavBoxTxt }),
	                React.createElement(
	                    'div',
	                    { className: 'video-list-wrap' },
	                    React.createElement(
	                        'div',
	                        { className: 'list-box mt30' },
	                        React.createElement(ListBox, { handleChangeCat: this.handleChangeCat, catIndex: this.state.catIndex }),
	                        React.createElement(
	                            'div',
	                            { className: 'subSort-nav clearfix' },
	                            React.createElement(
	                                'div',
	                                { className: 'sort-btn fl' },
	                                React.createElement(
	                                    'ul',
	                                    { className: 'clearfix' },
	                                    React.createElement(
	                                        'li',
	                                        { className: 'active' },
	                                        'Date added'
	                                    )
	                                )
	                            ),
	                            React.createElement(
	                                'div',
	                                { className: 'describe fr' },
	                                React.createElement(
	                                    'span',
	                                    { className: 'total-num' },
	                                    React.createElement(
	                                        'span',
	                                        { className: 'num', ref: 'totalNum' },
	                                        this.state.videosData.totalRow
	                                    ),
	                                    ' video(s)'
	                                ),
	                                React.createElement(
	                                    'span',
	                                    { className: 'cur-page' },
	                                    React.createElement(
	                                        'span',
	                                        { className: 'num' },
	                                        this.state.currPage
	                                    ),
	                                    '/',
	                                    Math.ceil(this.state.videosData.totalRow / this.state.pageSize) || 1
	                                ),
	                                React.createElement(
	                                    'span',
	                                    { className: 'switch-page' },
	                                    React.createElement(
	                                        'span',
	                                        { className: this.state.currPage > 1 ? 'pre-page arrow-btn' : 'pre-page arrow-btn disabled', onClick: this.goPrePage },
	                                        ' < '
	                                    ),
	                                    React.createElement(
	                                        'span',
	                                        { className: this.state.currPage >= this.state.totalPages ? 'next-page arrow-btn disabled' : 'next-page arrow-btn', onClick: this.goNextPage },
	                                        ' > '
	                                    )
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { className: 'list-cont' },
	                            React.createElement(
	                                'ul',
	                                { className: 'list-ul clearfix' },
	                                this.renderListCont()
	                            )
	                        )
	                    ),
	                    React.createElement(_Pagination2.default, _extends({}, this.getPageConfig(), { onPage: this.onPageChange, lang: 'en' }))
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
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./videoList.less", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./videoList.less");
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
	exports.push([module.id, "/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\n/* your business less */\n.mt15 {\n  margin-top: 15px;\n}\n.mt20 {\n  margin-top: 20px;\n}\n.mt25 {\n  margin-top: 25px;\n}\n.mt30 {\n  margin-top: 30px;\n}\n.video-list .video-list-wrap {\n  width: 1200px;\n  margin: 0 auto;\n}\n.video-list .brand {\n  border-bottom: 1px solid #efefef;\n}\n.sort-nav {\n  border-bottom: 2px solid #1268bb;\n}\n.sort-nav li {\n  height: 40px;\n  line-height: 40px;\n  color: #333;\n  padding: 0 20px;\n  float: left;\n  font-size: 18px;\n  cursor: pointer;\n}\n.sort-nav li a {\n  color: #333;\n  text-decoration: none;\n  cursor: pointer;\n}\n.sort-nav li.active {\n  background: #1268bb;\n  color: #fff;\n}\n.sort-nav li.active a {\n  color: #fff;\n}\n.subSort-nav {\n  margin-top: 15px;\n  border: 1px solid #eee;\n  background: #f9f9f9;\n  height: 36px;\n  color: #666;\n}\n.subSort-nav .sort-btn li {\n  padding: 0 24px;\n  height: 36px;\n  float: left;\n  line-height: 36px;\n  cursor: pointer;\n  border-left: 1px solid #eee;\n  border-right: 1px solid transparent;\n  margin-left: -1px;\n}\n.subSort-nav .sort-btn li.active {\n  color: #1267b8;\n  background: #fff;\n  border-color: #eee;\n}\n.subSort-nav .describe {\n  color: #999;\n  line-height: 36px;\n  margin-right: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.subSort-nav .describe .cur-page {\n  margin: 0 15px 0 30px;\n}\n.subSort-nav .describe .num {\n  color: #666;\n}\n.subSort-nav .describe .switch-page {\n  color: #666;\n}\n.subSort-nav .describe .switch-page .arrow-btn {\n  display: inline-block;\n  width: 16px;\n  cursor: pointer;\n}\n.subSort-nav .describe .switch-page .disabled {\n  color: #999;\n}\n.list-cont .list-ul {\n  margin: 0 0 30px -20px;\n}\n.list-cont .no-data {\n  line-height: 300px;\n  font-size: 18px;\n  color: #999;\n  text-align: center;\n}\n.list-cont .item {\n  -webkit-transition: all 0.25s ease-in-out;\n  -moz-transition: all 0.25s ease-in-out;\n  -ms-transition: all 0.25s ease-in-out;\n  -o-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  position: relative;\n  width: 283px;\n  border: 1px solid #eee;\n  margin: 20px 0 0 20px;\n  float: left;\n}\n.list-cont .item img {\n  width: 100%;\n  height: 100%;\n}\n.list-cont .item a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.list-cont .item .inner-wrap {\n  display: block;\n}\n.list-cont .item .pic {\n  position: relative;\n  width: 283px;\n  height: 160px;\n}\n.list-cont .item .pic .video-tit {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 3;\n  width: 263px;\n  padding: 0 10px;\n  height: 160px;\n  line-height: 160px;\n  text-align: center;\n  color: #fff;\n  font-size: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: break-all;\n}\n.list-cont .item .pic .tip {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  z-index: 3;\n  width: 264px;\n  color: #fff;\n  line-height: 16px;\n  height: 16px;\n}\n.list-cont .item .pic .ico {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  background: url('/cn/source/img/sthgood/videoList/video_ico.png') 0 -25px no-repeat;\n}\n.list-cont .item .pic .mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  background: rgba(20, 35, 65, 0.5);\n  display: block;\n}\n.list-cont .item h3 {\n  position: absolute;\n  top: 175px;\n  left: 10px;\n  width: 263px;\n  height: 12px;\n  line-height: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: break-all;\n}\n.list-cont .item h3 a {\n  color: #333;\n}\n.list-cont .item .txt {\n  margin-top: 40px;\n  padding: 0 10px;\n}\n.list-cont .item .txt .price {\n  margin-top: 15px;\n  line-height: 14px;\n  margin-left: -3px;\n}\n.list-cont .item .txt .price i {\n  font-weight: normal;\n  font-style: normal;\n}\n.list-cont .item .txt .price .now-price {\n  font-weight: bold;\n  color: #e5515f;\n  font-size: 16px;\n}\n.list-cont .item .txt .price .old-price {\n  text-decoration: line-through;\n  color: #cbcbcb;\n  margin-left: 10px;\n}\n.list-cont .item .txt .label {\n  margin-top: 25px;\n  padding-left: 20px;\n  border-bottom: 1px solid #eee;\n  background: url('/cn/source/img/sthgood/videoList/video_ico.png') 0 -13px no-repeat;\n  color: #666;\n  overflow: hidden;\n}\n.list-cont .item .txt .label ul {\n  margin-left: -20px;\n  padding-bottom: 10px;\n}\n.list-cont .item .txt .label li {\n  float: left;\n  margin-left: 20px;\n  font-size: 12px;\n  line-height: 12px;\n}\n.list-cont .item .txt .label a {\n  color: #666;\n  cursor: pointer;\n}\n.list-cont .item .txt .foot {\n  padding: 10px 0 15px 0;\n  color: #666;\n  height: 12px;\n  line-height: 12px;\n  overflow: hidden;\n}\n.list-cont .item .txt .foot .scan-num {\n  padding-left: 22px;\n  background: url('/cn/source/img/sthgood/videoList/video_ico.png') 0 2px no-repeat;\n}\n.list-cont .item:hover {\n  -moz-box-shadow: 0px 5px 8px #d5d5d5;\n  -webkit-box-shadow: 0px 5px 8px #d5d5d5;\n  box-shadow: 0px 5px 8px #d5d5d5;\n  -moz-transform: translate(0, -6px);\n  -webkit-transform: translate(0, -6px);\n  -o-transform: translate(0, -6px);\n  transform: translate(0, -6px);\n}\n.list-cont .item:hover .video-tit {\n  color: rgba(255, 255, 255, 0.5);\n}\n.list-cont .item:hover .tip {\n  opacity: 0.5;\n}\n.list-cont .item:hover .mask {\n  background: rgba(0, 0, 0, 0.7) url('/cn/source/img/sthgood/videoList/video_hover_ico.png') center no-repeat;\n}\n/* ^_^ 分页 ^_^*/\n.pagination {\n  height: 40px;\n  text-align: center;\n  margin: 30px auto 60px;\n}\n.pagination .pagination-list {\n  display: inline-block;\n}\n.pagination .pagination-list .break {\n  padding: 0 10px;\n}\n.pagination .pagination-list a {\n  display: inline-block;\n  width: 38px;\n  height: 38px;\n  line-height: 38px;\n  border: 1px solid #eee;\n  text-align: center;\n  color: #333;\n  background: #fff;\n}\n.pagination .pagination-list a .arrow {\n  font-size: 16px;\n}\n.pagination .pagination-list a:hover {\n  text-decoration: none;\n}\n.pagination .pagination-list a.select {\n  border-color: #31afee;\n  color: #fff;\n  background: #31afee;\n}\n.pagination .pagination-list a.disable {\n  color: #ccc;\n}\n.pagination .pagination-list .pagination-prev,\n.pagination .pagination-list .pagination-next {\n  width: 96px;\n}\n.pagination .pagination-list .pagination-prev {\n  margin-right: 10px;\n}\n.pagination .pagination-list .pagination-prev .arrow {\n  margin-right: 5px;\n}\n.pagination .pagination-list .pagination-next {\n  margin-left: 10px;\n}\n.pagination .pagination-list .pagination-next .arrow {\n  margin-left: 5px;\n}\n.pagination .jump-box {\n  line-height: 38px;\n  display: inline-block;\n  color: #9a9a9a;\n  margin-left: 20px;\n}\n.pagination .jump-box .jump-input {\n  width: 40px;\n  padding: 4px 10px;\n  height: 22px;\n  line-height: 22px;\n  border: 1px solid #eee;\n  margin: 0 10px;\n  text-align: center;\n}\n.pagination .jump-box .jump-btn {\n  width: 70px;\n  height: 30px;\n  border: 1px solid #eee;\n  background: #fff;\n  margin: 0 10px;\n  cursor: pointer;\n}\n", ""]);

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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(8);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var imgsrc = window.supervar.imgsrc_cn;

	/**
	 * ===数据
	 */
	var secnavTitle = [{ "title": "Recommended" }, { "title": "Clothing" }, { "title": "Digital" }, { "title": "Home" }, { "title": "Shoes & Bags" }];

	var SecNavBox = function (_React$Component) {
	    _inherits(SecNavBox, _React$Component);

	    function SecNavBox(props) {
	        _classCallCheck(this, SecNavBox);

	        var _this = _possibleConstructorReturn(this, (SecNavBox.__proto__ || Object.getPrototypeOf(SecNavBox)).call(this, props));

	        _this.state = {
	            // searchShow:false
	        };
	        return _this;
	    }

	    _createClass(SecNavBox, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "brand", id: "brand" },
	                React.createElement(
	                    "div",
	                    { className: "secnavbox" },
	                    React.createElement(
	                        "div",
	                        { className: "secnav" },
	                        React.createElement(
	                            "div",
	                            { className: "secnav-left" },
	                            React.createElement(
	                                "span",
	                                { className: "daigou" },
	                                this.props.daigou
	                            ),
	                            React.createElement(
	                                "span",
	                                null,
	                                this.props.sthGood
	                            ),
	                            this.props.subTit.map(function (v) {
	                                return React.createElement(
	                                    "span",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        ">"
	                                    ),
	                                    v.txt
	                                );
	                            })
	                        ),
	                        React.createElement(
	                            "ul",
	                            { className: "secnav-right secnav-right-show" },
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
	                )
	            );
	        }
	    }]);

	    return SecNavBox;
	}(React.Component);

	exports.default = SecNavBox;


	SecNavBox.defaultProps = {
	    daigou: "Shopping Agent",
	    sthGood: "Editor's Pick",
	    subTit: []
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/less-loader/index.js!./searchNav.less", function() {
				var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/less-loader/index.js!./searchNav.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\n/* your business less */\n.brand {\n  position: relative;\n  width: 100%;\n  background: linear-gradient(to bottom, #f6f9fe 0%, #ffffff 100%);\n  height: 50px;\n  display: table;\n  background-color: #c0c2c5;\n}\n.brand .return {\n  width: 40px;\n  position: fixed;\n  bottom: 40px;\n  right: 34px;\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n.brand .top_bg {\n  height: 162px;\n}\n.brand .top_bg > img {\n  width: 100%;\n}\n.brand .header_nav {\n  width: 100%;\n  background-color: #fff;\n}\n.brand .nav_con,\n.brand .container {\n  width: 1200px;\n  margin: 0 auto;\n}\n.brand .container {\n  margin-top: 60px;\n}\n.secnavbox {\n  width: 100%;\n  background: #ffffff;\n  position: absolute;\n  z-index: 4;\n  top: 0;\n}\n.secnavbox .secnav {\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n}\n.secnavbox .secnav-left {\n  float: left;\n  font-size: 18px;\n  color: #641eb4;\n  height: 50px;\n  line-height: 50px;\n  width: 470px;\n  max-width: 470px;\n  overflow: hidden;\n}\n.secnavbox .secnav-left .daigou {\n  padding-right: 10px;\n  margin-top: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 22px;\n  height: 24px;\n  text-align: left;\n  margin-right: 11px;\n  font-size: 16px;\n  color: #333;\n  border-right: 1px solid #ddd;\n}\n.secnavbox .secnav-left span {\n  color: #666;\n  font-size: 14px;\n  display: inline-block;\n  float: left;\n}\n.secnavbox .secnav-left span:last-child {\n  color: #641eb4;\n  max-width: 160px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.secnavbox .secnav-left span:last-child i {\n  color: #666;\n}\n.secnavbox .secnav-left i {\n  margin: 0 5px;\n}\n.secnavbox .secnav-right {\n  float: right;\n  overflow: hidden;\n}\n.secnavbox .secnav-right li {\n  float: left;\n  height: 50px;\n  line-height: 50px;\n}\n.secnavbox .secnav-right a {\n  font-size: 14px;\n  color: #666666;\n  padding: 0 19px;\n  display: inline-block;\n  height: 50px;\n  cursor: default;\n}\n.secnavbox .secnav-right a:hover {\n  color: #641eb4;\n  text-decoration: none;\n}\n.secnavbox .secnav-right-show {\n  display: inline-block;\n}\n.secnavbox .secnav-right-hide {\n  display: none;\n}\n.secnavbox .nav-list-default {\n  display: none;\n}\n.secnavbox .nav-list-active {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * 分页组件 O(∩_∩)O~
	 *
	 * 使用案例方法
	 * getPageConfig() { //初始分页基本数据
	        return {
	            pageSize: this.state.pageSize,                                              //每页的个数
	            currentPage: this.state.currPage,                                           //当前第几页
	            totalNum:this.state.videosData.totalRow || 1 ,                                  //总数据数
	            totalPage: Math.ceil(this.state.videosData.totalRow / this.state.pageSize) || 1 //总页数
	        };
	    }
	 onPageChange(currentPage) { //点击分页的回调方法
	        ..........
	    }

	 <Pagination {...this.getPageConfig()} onPage={this.onPageChange} />
	 */module.exports = React.createClass({
	    displayName: 'exports',

	    getInitialState: function getInitialState() {
	        return {
	            currentPage: this.props.currentPage
	        };
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            cname: "pagination",
	            lang: 'cn',
	            pageSize: 10,
	            totalNum: 0,
	            currentPage: 1,
	            onPage: null
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(props) {
	        this.setState({
	            currentPage: props.currentPage
	        });
	    },
	    click: function click(index) {
	        this.setState({
	            currentPage: index
	        });
	        this.props.onPage && this.props.onPage.call(null, index, this);
	    },
	    goPage: function goPage() {
	        var val = this.refs.jumpInput.value * 1;
	        var offset = 0;
	        var totalPage = Math.ceil(this.props.totalNum / this.props.pageSize);
	        // this.click(val);
	        if (/^[1-9]\d*$/.test(val)) {
	            if (val > totalPage) {
	                this.refs.jumpInput.value = totalPage;
	                offset = totalPage - this.state.currentPage;
	            } else {
	                offset = val - this.state.currentPage;
	            }
	        } else {
	            this.refs.input.value = this.state.currentPage;
	        }
	        this.changePage(offset);
	    },
	    changePage: function changePage(offset) {
	        var target = this.getOffsetStatus(offset);
	        if (target) {
	            this.click(target);
	        }
	    },
	    changePageToFirst: function changePageToFirst() {
	        this.click(1);
	    },
	    changePageToLast: function changePageToLast() {
	        this.click(Math.ceil(this.props.totalNum / this.props.pageSize));
	    },
	    getOffsetStatus: function getOffsetStatus(offset) {
	        var pageNumber = Math.ceil(this.props.totalNum / this.props.pageSize);
	        var target = this.state.currentPage * 1 + offset;
	        // console.log("target:" +target )
	        if (target > 0 && target <= pageNumber) {
	            return target;
	        }
	        return false;
	    },
	    renderItemRange: function renderItemRange(start, end) {
	        var list = [];
	        var pageNumber = this.props.totalNum < this.props.pageSize ? 1 : Math.ceil(this.props.totalNum / this.props.pageSize);
	        for (var i = start; i > 0 && i <= pageNumber && i <= end; i++) {
	            list.push(React.createElement(
	                'a',
	                { key: start + '-' + end + '-' + i,
	                    href: 'javascript:;',
	                    onClick: this.click.bind(this, i),
	                    className: "pagination-num " + (i == this.state.currentPage ? 'select' : '') },
	                i
	            ));
	        }

	        return list;
	    },
	    renderBreak: function renderBreak(index) {
	        return React.createElement(
	            'span',
	            { key: index, className: 'break' },
	            '...'
	        );
	    },
	    renderPage: function renderPage() {
	        var preview = 4;
	        var pageNumber = this.props.totalNum <= this.props.pageSize ? 1 : Math.ceil(this.props.totalNum / this.props.pageSize);
	        var list = [];
	        if (this.state.currentPage <= preview + 1) {
	            list = list.concat(this.renderItemRange(1, this.state.currentPage));
	            if (this.state.currentPage > Math.floor(preview / 2)) {
	                list = list.concat(this.renderItemRange(this.state.currentPage + 1, this.state.currentPage + 2));
	            } else {
	                list = list.concat(this.renderItemRange(this.state.currentPage + 1, preview));
	            }
	            if (pageNumber >= list.length + Math.floor(preview / 2)) {
	                list.push(this.renderBreak(list.length));
	            }
	            if (pageNumber > list.length) {
	                for (var m = pageNumber; m <= pageNumber; m++) {
	                    list = list.concat(this.renderItemRange(m, m));
	                }
	            }
	        } else if (this.state.currentPage > pageNumber - preview && pageNumber > preview + 1) {
	            list = list.concat(this.renderItemRange(1, 2));
	            list.push(this.renderBreak(list.length));
	            if (Math.abs(this.state.currentPage - pageNumber) > Math.floor(preview / 2)) {
	                list = list.concat(this.renderItemRange(this.state.currentPage - 2, this.state.currentPage));
	            } else {
	                list = list.concat(this.renderItemRange(pageNumber - preview + 1, this.state.currentPage));
	            }
	            if (this.state.currentPage != pageNumber) {
	                list = list.concat(this.renderItemRange(this.state.currentPage + 1, pageNumber));
	            }
	        } else {
	            list = list.concat(this.renderItemRange(1, 2));
	            list.push(this.renderBreak(list.length));
	            list = list.concat(this.renderItemRange(this.state.currentPage - Math.floor(preview / 2), this.state.currentPage + Math.floor(preview / 2)));
	            list.push(this.renderBreak(list.length));
	            list = list.concat(this.renderItemRange(pageNumber - 1, pageNumber));
	        }

	        return list;
	    },
	    componentWillMount: function componentWillMount() {
	        var lang_cn = {
	            prev: '上一页',
	            next: '下一页',
	            page: ['共', '页', '到第', '页'],
	            confirm: '确认'
	        };

	        var lang_en = {
	            prev: 'Previous',
	            next: 'Next',
	            page: ['Total ', ' page', 'to page ', ''],
	            confirm: 'Confirm'
	        };
	        this.language = this.props.lang === 'en' ? lang_en : lang_cn;
	    },
	    render: function render() {
	        return (
	            // var allname = className(this.props.className, this.getPropClass());
	            // var prefix = this.getDefaultClass();
	            this.props.totalPage > 1 && React.createElement(
	                'div',
	                { className: 'pagination' },
	                React.createElement(
	                    'div',
	                    { className: "pagination-list" },
	                    React.createElement(
	                        'a',
	                        { href: 'javascript:;', className: "pagination-prev " + (this.getOffsetStatus(-1) ? '' : 'disable'),
	                            onClick: this.changePage.bind(this, -1) },
	                        ' ',
	                        React.createElement(
	                            'span',
	                            { className: 'arrow' },
	                            '<'
	                        ),
	                        this.language.prev
	                    ),
	                    this.renderPage(),
	                    React.createElement(
	                        'a',
	                        { href: 'javascript:;', className: "pagination-next " + (this.getOffsetStatus(1) ? '' : 'disable'),
	                            onClick: this.changePage.bind(this, 1) },
	                        this.language.next,
	                        React.createElement(
	                            'span',
	                            { className: 'arrow' },
	                            '>'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'jump-box' },
	                    React.createElement(
	                        'span',
	                        null,
	                        this.language.page[0],
	                        ' ',
	                        React.createElement(
	                            'span',
	                            null,
	                            Math.ceil(this.props.totalNum / this.props.pageSize)
	                        ),
	                        ' ',
	                        this.language.page[1],
	                        '，'
	                    ),
	                    React.createElement(
	                        'span',
	                        null,
	                        this.language.page[2],
	                        React.createElement('input', { ref: 'jumpInput', className: 'jump-input', type: 'number', min: '1' }),
	                        this.language.page[3],
	                        React.createElement('input', { type: 'button', ref: 'jumpBtn', className: 'jump-btn', onClick: this.goPage.bind(this), value: this.language.confirm })
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 11 */
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

/***/ }
/******/ ]);