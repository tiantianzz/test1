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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var imgsrc = window.supervar.imgsrc_en;
	var apiUrl = 'http://www.super.com/api/';
	var hrefUrl = "/en/page/";
	var domain = window.supervar.domain;

	var findType = [{
	    "id": 0,
	    "title": "热门",
	    "detail": [{
	        "id": 0,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品9折优惠  满199立减20",
	        "info": "热门0"
	    }, {

	        "id": 1,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "热门1"
	    }, {

	        "id": 2,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "热门2"
	    }, {

	        "id": 3,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "热门3"
	    }, {

	        "id": 4,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "热门1"
	    }, {

	        "id": 5,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "热门1"
	    }, {

	        "id": 6,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "热门1"
	    }, {

	        "id": 7,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "热门1"
	    }, {

	        "id": 8,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "热门1"
	    }, {

	        "id": 9,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "热门1"
	    }]
	}, {
	    "id": 1,
	    "title": "服饰",
	    "detail": [{
	        "id": 0,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "服饰0"
	    }, {

	        "id": 1,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "折优惠  满199立减20",
	        "info": "服饰1"
	    }, {

	        "id": 2,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "服饰2"
	    }, {

	        "id": 3,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "服饰3"
	    }, {

	        "id": 4,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "服饰4"
	    }, {

	        "id": 5,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "服饰5"
	    }, {

	        "id": 6,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "服饰6"
	    }, {

	        "id": 7,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "服饰7"
	    }, {

	        "id": 8,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "服饰8"
	    }, {

	        "id": 9,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "服饰9"
	    }]
	}, {
	    "id": 2,
	    "title": "数码",
	    "detail": [{
	        "id": 0,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 1,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 2,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 3,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 4,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 5,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 6,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 7,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 8,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 9,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }]
	}, {
	    "id": 3,
	    "title": "配饰",
	    "detail": [{
	        "id": 0,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 1,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 2,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 3,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 4,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 5,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 6,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 7,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 8,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 9,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }]
	}, {
	    "id": 4,
	    "title": "家居",
	    "detail": [{
	        "id": 0,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 1,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 2,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 3,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 4,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 5,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 6,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 7,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 8,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 9,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }]
	}, {
	    "id": 5,
	    "title": "玩具",
	    "detail": [{
	        "id": 0,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 1,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 2,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 3,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 4,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 5,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 6,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 7,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 8,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 9,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }]
	}, {
	    "id": 6,
	    "title": "鞋箱",
	    "detail": [{
	        "id": 0,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 1,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 2,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 3,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 4,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 5,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 6,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 7,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 8,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }, {

	        "id": 9,
	        "bigImg": "#",
	        "smallImg": "#",
	        "title1": "原创精神&艺术潮",
	        "title2": "新品8折优惠  满199立减20",
	        "info": "#"
	    }]
	}];
	var secnavTitle = [{ "title": "Recommended" }, { "title": "Clothing" }, { "title": "Digital" }, { "title": "Home" }, { "title": "Shoes & Bags" }];
	var listTitle = [{ "title": "男士品味" }, { "title": "酷玩数码" }, { "title": "温馨家居" }, { "title": "超炫玩具" }, { "title": "靓包旅行" }, { "title": "美妆私享" }, { "title": "亲子时光" }, { "title": "其他" }];

	var SecNavBox = function (_React$Component) {
	    _inherits(SecNavBox, _React$Component);

	    function SecNavBox(props) {
	        _classCallCheck(this, SecNavBox);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SecNavBox).call(this, props));

	        _this.state = {
	            searchShow: false,
	            moreImg: false,
	            secList: false
	        };
	        return _this;
	    }
	    /*
	    search(){
	        let searchValue = this.refs.search.value;
	        if(searchValue==''||searchValue==null){
	            alert("请输入搜索内容")
	        }else{
	            alert(searchValue)
	        }
	    }
	    searchHandle(e){
	        if((e.keyCode).toString()=='13') {this.search();};
	    }
	    showSearch(e){
	        //e.stopPropagation();
	        if(this.state.searchShow==false){
	            this.refs.search.focus();
	            e.target.getAttribute('name') == "hideSearch" ? this.setState({searchShow:true,moreImg:false,secList:false}) : '';
	        }else{
	            this.search();
	        }
	     }
	    showList(){
	        this.setState({
	            moreImg:!this.state.moreImg,
	            secList:!this.state.secList
	        });
	    }
	    componentDidMount(){
	        let that =this;
	        window.onclick = function(e){
	            if(e.target.getAttribute('name')!='hideSearch' && e.target.getAttribute('name')!='searchInput'){
	                that.setState({searchShow:false});
	                that.refs.search.value='';
	            }
	        }
	    }
	    */


	    _createClass(SecNavBox, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'secnavbox' },
	                React.createElement(
	                    'div',
	                    { className: 'secnav' },
	                    React.createElement(
	                        'div',
	                        { className: 'secnav-left' },
	                        React.createElement(
	                            'a',
	                            { href: '//buy.' + domain + '/', target: '_blank' },
	                            React.createElement(
	                                'span',
	                                { className: 'daigou' },
	                                this.props.daigou
	                            )
	                        ),
	                        React.createElement(
	                            'a',
	                            { href: hrefUrl + 'sthgood/goodIndex/', target: '_blank' },
	                            this.props.sthGood
	                        )
	                    ),
	                    React.createElement(
	                        'ul',
	                        { className: this.state.searchShow == true ? "secnav-right secnav-right-hide" : "secnav-right secnav-right-show" },
	                        secnavTitle.map(function (a) {
	                            return React.createElement(
	                                'li',
	                                null,
	                                React.createElement(
	                                    'a',
	                                    { href: '#' },
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

	var Hotbrand = function (_React$Component2) {
	    _inherits(Hotbrand, _React$Component2);

	    function Hotbrand(props) {
	        _classCallCheck(this, Hotbrand);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Hotbrand).call(this, props));

	        _this2.state = {
	            hover: -1,
	            requestData: []
	        };
	        return _this2;
	    }

	    _createClass(Hotbrand, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            fetch('http://www.super.com/api/shoppingguide/recommend-brand?language=en&debug=1', {
	                method: "GET"
	            }).then(function (res) {
	                return res.json();
	            }).then(function (data) {
	                _this3.setState({ requestData: data.data });
	            });
	            this.handleMouseOver = this.handleMouseOver.bind(this);
	            this.handleMouseOut = this.handleMouseOut.bind(this);
	        }
	    }, {
	        key: 'handleMouseOver',
	        value: function handleMouseOver(e) {
	            var hoverElement = e.currentTarget.getAttribute("name");
	            this.setState({ hover: hoverElement });
	        }
	    }, {
	        key: 'handleMouseOut',
	        value: function handleMouseOut(e) {
	            this.setState({ hover: -1 });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            return React.createElement(
	                'div',
	                { className: 'brand_content' },
	                React.createElement(
	                    'div',
	                    { className: 'title' },
	                    React.createElement(
	                        'em',
	                        null,
	                        'Discovery'
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'brand_box' },
	                    this.state.requestData && this.state.requestData.map(function (a, b) {
	                        return React.createElement(
	                            'div',
	                            { name: a.id, onMouseOver: _this4.handleMouseOver, onMouseOut: _this4.handleMouseOut, className: 'brand' },
	                            React.createElement(
	                                'div',
	                                { className: 'border', style: { borderColor: _this4.state.hover == a.id ? "#824cc0" : "#af8ed8" } },
	                                ' '
	                            ),
	                            React.createElement('img', { src: a.img, alt: '', className: 'big_img' }),
	                            React.createElement(
	                                'div',
	                                { style: { display: _this4.state.hover == a.id ? "none" : "block" }, className: 'desc' },
	                                React.createElement(
	                                    'em',
	                                    null,
	                                    a.desc
	                                ),
	                                React.createElement(
	                                    'em',
	                                    null,
	                                    a.benefitDesc
	                                )
	                            ),
	                            React.createElement(
	                                'div',
	                                { style: { display: _this4.state.hover == a.id ? "block" : "none" }, className: 'enter' },
	                                React.createElement('img', { src: a.shopImg, alt: '', className: 'shopImg' }),
	                                React.createElement(
	                                    'a',
	                                    { className: 'button', href: hrefUrl + "buy/?url=" + encodeURIComponent(a.href), target: 'blank' },
	                                    'Visit Store'
	                                )
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }]);

	    return Hotbrand;
	}(React.Component);

	var FindList = function (_React$Component3) {
	    _inherits(FindList, _React$Component3);

	    function FindList(props) {
	        _classCallCheck(this, FindList);

	        var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(FindList).call(this, props));

	        _this5.state = {
	            imgShow: true,
	            infoShow: false,
	            activeTab: 0,
	            requestData: []
	        };
	        return _this5;
	    }

	    _createClass(FindList, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this6 = this;

	            fetch('http://www.super.com/api/shoppingguide/child-get-cat-list?language=en&cat=' + this.props.name + '&currPage=1&pageSize=1&debug=1', {
	                method: "GET"
	            }).then(function (res) {
	                return res.json();
	            }).then(function (data) {
	                _this6.setState({ requestData: data.data.listResult });
	            });
	        }
	    }, {
	        key: 'handleMouseOver',
	        value: function handleMouseOver(e) {
	            var tabIndex = e.currentTarget.getAttribute('name');
	            this.setState({
	                imgShow: false,
	                infoShow: true,
	                activeTab: tabIndex
	            });
	        }
	    }, {
	        key: 'handleMouseOut',
	        value: function handleMouseOut(e) {
	            var tabIndex = e.currentTarget.getAttribute('name');
	            this.setState({
	                imgShow: true,
	                infoShow: false,
	                activeTab: -1
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this7 = this;

	            return React.createElement(
	                'div',
	                { className: 'find-right-list' },
	                console.log(this.props.name),
	                this.state.requestData && this.state.requestData.map(function (a, b) {
	                    return React.createElement(
	                        'div',
	                        { name: b, className: 'right-listbox', onMouseOver: _this7.handleMouseOver.bind(_this7), onMouseOut: _this7.handleMouseOut.bind(_this7) },
	                        React.createElement('img', { className: 'big-img', src: a.img }),
	                        React.createElement(
	                            'div',
	                            { className: 'listbox-bottom' },
	                            React.createElement('img', { className: 'small-img', src: a.shopImg, style: { display: _this7.state.activeTab == b ? "none" : "block" } }),
	                            React.createElement(
	                                'div',
	                                { className: 'brand-info', style: { display: _this7.state.activeTab == b ? "block" : "none" } },
	                                a.title
	                            ),
	                            React.createElement(
	                                'div',
	                                { className: 'listbox-bottom-box' },
	                                React.createElement(
	                                    'div',
	                                    { className: 'listbox-bottom-move' },
	                                    React.createElement(
	                                        'span',
	                                        null,
	                                        a.desc
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        a.benefitDesc
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { href: hrefUrl + "buy/?url=" + encodeURIComponent(a.href), target: 'blank' },
	                                        React.createElement('input', { type: 'button', value: _this7.props.interBtn })
	                                    )
	                                )
	                            )
	                        )
	                    );
	                })
	            );
	        }
	    }]);

	    return FindList;
	}(React.Component);

	var Find = function (_React$Component4) {
	    _inherits(Find, _React$Component4);

	    function Find(props) {
	        _classCallCheck(this, Find);

	        var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(Find).call(this, props));

	        _this8.state = {
	            spanActive: 0,
	            requestData: []
	        };
	        return _this8;
	    }

	    _createClass(Find, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this9 = this;

	            fetch(apiUrl + 'shoppingguide/child-cat-list?language=en&debug=1', {
	                method: "GET"
	            }).then(function (res) {
	                return res.json();
	            }).then(function (data) {
	                _this9.setState({ requestData: data.data });
	            });
	        }
	    }, {
	        key: 'changeList',
	        value: function changeList(e) {
	            var tabIndex = e.currentTarget.getAttribute('name');
	            this.setState({ spanActive: tabIndex });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this10 = this;

	            return React.createElement(
	                'div',
	                { className: 'outer' },
	                React.createElement(
	                    'div',
	                    { className: 'topic' },
	                    'World Top Selection'
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'listBox' },
	                    React.createElement(
	                        'div',
	                        { className: 'list_nav' },
	                        this.state.requestData && this.state.requestData.map(function (a, b) {
	                            return React.createElement(
	                                'span',
	                                { name: a.id, className: _this10.state.spanActive == a.id ? "active" : "default", onClick: _this10.changeList.bind(_this10) },
	                                a.categoryName
	                            );
	                        })
	                    ),
	                    React.createElement(FindList, { name: this.state.spanActive })
	                )
	            );
	        }
	    }]);

	    return Find;
	}(React.Component);

	/* your logic code */


	var Content = function (_React$Component5) {
	    _inherits(Content, _React$Component5);

	    function Content() {
	        _classCallCheck(this, Content);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Content).apply(this, arguments));
	    }

	    _createClass(Content, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'brand', id: 'brand' },
	                React.createElement(SecNavBox, null),
	                React.createElement(
	                    'div',
	                    { className: 'container' },
	                    React.createElement(Hotbrand, null),
	                    React.createElement(Find, null)
	                )
	            );
	        }
	    }]);

	    return Content;
	}(React.Component);

	var Wrap = window.supervar.Wrap;
	var content = ReactDOM.render(React.createElement(Wrap, { content: Content }), document.getElementById("container"));
	FindList.defaultProps = {
	    interBtn: '进入店铺'
	};
	SecNavBox.defaultProps = {
	    daigou: 'Shopping Agent',
	    sthGood: "Editor's Pick",
	    search: 'http://在这里输入或粘贴您要代购商品的地址'
	};

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
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./brand.less", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./brand.less");
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
	exports.push([module.id, "/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\n/* your business less */\n.cover {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, #000000 100%);\n  top: 0;\n  left: 0;\n}\na {\n  text-decoration: none !important;\n}\na:hover {\n  cursor: pointer !important;\n}\n.info {\n  position: absolute;\n  bottom: 7px;\n  left: 7px;\n  text-align: center;\n  vertical-align: middle;\n  width: 95%;\n  background: #fff;\n  border-collapse: separate;\n  border-spacing: 13px;\n}\n.click_button {\n  border: 1px solid #631fb1;\n  margin: 0 auto;\n  display: block;\n  width: 168px;\n  height: 45px;\n  text-align: center;\n  font-size: 18px;\n  outline: none;\n  text-decoration: none;\n  margin-top: 12px;\n}\n.click_button:hover {\n  cursor: pointer;\n}\n.brand {\n  position: relative;\n  width: 100%;\n  background: #f6f9fe url('/cn/source/img/sthgood/brand/bg_upper.png') no-repeat 0 9px;\n  display: table;\n}\n.brand .return {\n  width: 40px;\n  position: fixed;\n  bottom: 40px;\n  right: 34px;\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n.brand .top_bg {\n  height: 162px;\n}\n.brand .top_bg > img {\n  width: 100%;\n}\n.brand .header_nav {\n  width: 100%;\n  background-color: #fff;\n}\n.brand .nav_con,\n.brand .container {\n  width: 1200px;\n  margin: 0 auto;\n}\n.secnavbox {\n  width: 100%;\n  background: #ffffff;\n  position: absolute;\n  z-index: 4;\n  top: 0;\n  border-bottom: 1px solid #efefef;\n}\n.secnavbox .secnav {\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n}\n.secnavbox .secnav-left {\n  float: left;\n  font-size: 18px;\n  color: #641eb4;\n  height: 50px;\n  line-height: 50px;\n}\n.secnavbox .secnav-left .daigou {\n  padding-right: 11px;\n  height: 24px;\n  text-align: left;\n  margin-right: 11px;\n  font-size: 24px;\n  color: #393939;\n  border-right: 1px solid #142341;\n}\n.secnavbox .secnav-search {\n  float: right;\n  min-width: 25px;\n  width: auto;\n  height: 30px;\n  position: relative;\n  margin-top: 10px;\n}\n.secnavbox .secnav-search input {\n  position: absolute;\n  height: 30px;\n  line-height: 30px;\n  background: #f6f4f7;\n  color: #999999;\n  text-indent: 13px;\n  border: 0;\n  outline: none;\n}\n.secnavbox .secnav-search .search {\n  width: 0;\n  left: 0px;\n}\n.secnavbox .secnav-search .search-active {\n  width: 760px;\n  left: -735px;\n}\n.secnavbox .secnav-search img {\n  position: absolute;\n  right: 10px;\n  top: 6px;\n  width: 18px;\n  height: 18px;\n  display: block;\n  cursor: pointer;\n}\n.secnavbox .secnav-right {\n  float: right;\n  overflow: hidden;\n}\n.secnavbox .secnav-right li {\n  float: left;\n  height: 50px;\n  line-height: 50px;\n  padding: 0 19px;\n}\n.secnavbox .secnav-right a {\n  font-size: 14px;\n  color: #666666;\n}\n.secnavbox .secnav-right a:hover {\n  color: #641eb4;\n}\n.secnavbox .secnav-right-show {\n  display: inline-block;\n}\n.secnavbox .secnav-right-hide {\n  display: none;\n}\n.secnavbox .secnav-more {\n  float: right;\n  width: 42px;\n  height: 50px;\n  cursor: pointer;\n  position: relative;\n}\n.secnavbox .secnav-more img {\n  width: 18px;\n  height: 4px;\n  display: block;\n  transform-origin: left;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n.secnavbox .secnav-more-close {\n  background: #ffffff;\n}\n.secnavbox .secnav-more-close img {\n  transform: rotate(0deg) translateX(-50%) translateY(-50%);\n}\n.secnavbox .secnav-more-active {\n  background: #eeeeee;\n}\n.secnavbox .secnav-more-active img {\n  transform: rotate(-90deg) translateX(-50%) translateY(-50%);\n}\n.secnavbox .nav-list {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  overflow: hidden;\n  border: 1px solid #eeeeee;\n}\n.secnavbox .nav-list li {\n  background: #ffffff;\n  width: 156px;\n  height: 52px;\n  padding-left: 20px;\n  line-height: 52px;\n  text-align: left;\n  border-bottom: 1px solid #eeeeee;\n}\n.secnavbox .nav-list li:hover {\n  background: #eeeeee;\n}\n.secnavbox .nav-list li:nth-of-type(1),\n.secnavbox .nav-list li:nth-of-type(2) {\n  background: #fff url('/cn/source/img/sthgood/brand/secnav_slide.png') no-repeat 149px center;\n  background-size: 12px 12px;\n}\n.secnavbox .nav-list li:nth-of-type(1):hover,\n.secnavbox .nav-list li:nth-of-type(2):hover {\n  background: #eee url('/cn/source/img/sthgood/brand/secnav_slide.png') no-repeat 149px center;\n}\n.secnavbox .nav-list li:nth-of-type(1) a,\n.secnavbox .nav-list li:nth-of-type(2) a {\n  color: #6736a3;\n}\n.secnavbox .nav-list a {\n  color: #999999;\n  font-size: 14px;\n  cursor: pointer;\n}\n.secnavbox .nav-list-default {\n  display: none;\n}\n.secnavbox .nav-list-active {\n  display: block;\n}\n.header_nav {\n  height: 51px;\n  content: \"\";\n  display: block;\n  clear: both;\n  padding-top: 15px;\n}\n.header_nav .topic {\n  width: 194px;\n  float: left;\n}\n.header_nav .topic em:first-child {\n  font-size: 22px;\n  color: #393939;\n  padding-right: 16px;\n  border-right: 1px solid #152340;\n}\n.header_nav .topic em:last-child {\n  font-size: 18px;\n  color: #631fb1;\n  padding-left: 12px;\n}\n.header_nav .topic em:last-child:hover {\n  cursor: pointer;\n}\n.header_nav .search_box {\n  position: relative;\n  float: left;\n  width: 465px;\n}\n.header_nav .search_box .input {\n  height: 31px;\n  display: inline-block;\n  margin: 0 auto;\n  width: 100%;\n  float: left;\n  background-color: #f6f4f7;\n  border: 0;\n  outline: none;\n  -webkit-appearance: none;\n  display: none;\n}\n.header_nav .search_box .search_button {\n  position: absolute;\n  top: 14px;\n  right: 0;\n  border: none;\n  outline: none;\n  margin: 0 auto;\n  margin-top: -10px;\n}\n.header_nav .search_box .search_button:hover {\n  cursor: pointer;\n}\n.header_nav .nav_bar {\n  float: right;\n}\n.header_nav .nav_bar > li {\n  float: left;\n  margin-left: 20px;\n}\n.header_nav .nav_bar > li > a {\n  font-size: 14px;\n  display: inline-block;\n  height: 28px;\n  line-height: 28px;\n  margin-bottom: 5px;\n  color: #666;\n  text-decoration: none;\n}\n.header_nav .nav_bar > li > a:hover {\n  cursor: pointer;\n  color: #631fb1;\n}\n.header_nav .nav_bar > li:last-child > a {\n  margin-top: -4px;\n}\n.container {\n  position: relative;\n}\n.container .brand_content {\n  width: 100%;\n  height: 475px;\n  margin-top: 120px;\n}\n.container .brand_content .title {\n  width: 100%;\n  height: 80px;\n  background-color: #fff;\n  border-bottom: 1px solid #efefef;\n  text-align: center;\n}\n.container .brand_content .title > em {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 600;\n  margin-top: 20px;\n}\n.container .brand_content > .brand_box {\n  width: 100%;\n  background-color: #f6f4f7;\n  padding: 17px 0;\n}\n.container .brand_content > .brand_box:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.container .brand_content > .brand_box > .brand {\n  float: left;\n  width: 270px;\n  height: 350px;\n  position: relative;\n  margin-right: 17px;\n}\n.container .brand_content > .brand_box > .brand:first-child {\n  margin-left: 17px;\n}\n.container .brand_content > .brand_box > .brand .border {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 264px;\n  height: 354px;\n  background-color: transparent;\n  border: 6px solid #637ac2;\n  z-index: 2;\n}\n.container .brand_content > .brand_box > .brand .big_img {\n  display: block;\n  margin: 0 auto;\n  width: 280px;\n  height: 360px;\n}\n.container .brand_content > .brand_box > .brand .desc,\n.container .brand_content > .brand_box > .brand .enter {\n  position: absolute;\n  bottom: 0;\n}\n.container .brand_content > .brand_box > .brand .desc {\n  width: 100%;\n  height: 80px;\n  z-index: 1;\n  background-color: #fff;\n  text-align: center;\n}\n.container .brand_content > .brand_box > .brand .desc > em {\n  display: block;\n  width: 100%;\n}\n.container .brand_content > .brand_box > .brand .desc > em:first-child {\n  font-size: 14px;\n  color: #999;\n  margin-top: 20px;\n}\n.container .brand_content > .brand_box > .brand .desc > em:last-child {\n  font-size: 14px;\n  color: #631fb2;\n  margin-bottom: 20px;\n}\n.container .brand_content > .brand_box > .brand .enter {\n  width: 100%;\n  height: 123px;\n  background-color: #fff;\n  text-align: center;\n  margin: 0 auto;\n}\n.container .brand_content > .brand_box > .brand .enter .shopImg {\n  display: block;\n  width: 72px;\n  margin: 20px auto 17px;\n}\n.container .brand_content > .brand_box > .brand .enter .button {\n  width: 168px;\n  display: block;\n  background-color: #631fb2;\n  padding: 15px 0;\n  color: #fff;\n  font-size: 18px;\n  position: absolute;\n  z-index: 3;\n  left: 50px;\n  text-decoration: none;\n}\n.container .brand_content > .brand_box > .brand .enter .button:hover {\n  cursor: pointer;\n}\n.listBox {\n  margin: 0 auto;\n  padding-bottom: 44px;\n  margin-bottom: 57px;\n  border: 1px solid #eee;\n  text-align: center;\n}\n.listBox .list_nav {\n  width: 100%;\n  margin: 0 auto;\n  border-bottom: 1px solid #eee;\n}\n.listBox .list_nav > span {\n  position: relative;\n  display: inline-block;\n  width: 74px;\n  height: 78px;\n  line-height: 78px;\n  font-size: 17px;\n}\n.listBox .list_nav > span:hover {\n  cursor: pointer;\n}\n.listBox .list_nav .active {\n  color: #641eb4;\n  border-bottom: 2px solid #641eb4 ;\n}\n.listBox .list_nav .active:before {\n  content: '';\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border: 8px solid transparent;\n  border-bottom-color: #641eb4;\n}\n.listBox .list_nav .default {\n  color: #666666;\n  border-bottom: 2px solid #ffffff;\n}\n.listBox .find-right-list {\n  margin: 19px;\n}\n.listBox .find-right-list:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.listBox .find-right-list .right-listbox {\n  float: left;\n  width: 221px;\n  height: 354px;\n  margin-right: 12px;\n  margin-bottom: 39px;\n  border: 1px solid #eee;\n}\n.listBox .find-right-list .right-listbox > a {\n  cursor: pointer;\n}\n.listBox .find-right-list .right-listbox:hover {\n  box-shadow: 0px 0px 4px #00aeff;\n}\n.listBox .find-right-list .right-listbox .big-img {\n  width: 100%;\n  height: 221px;\n}\n.listBox .find-right-list .right-listbox .listbox-bottom {\n  text-align: center;\n}\n.listBox .find-right-list .right-listbox .listbox-bottom .listbox-bottom-box {\n  overflow: hidden;\n  position: relative;\n  height: 60px;\n}\n.listBox .find-right-list .right-listbox .listbox-bottom .listbox-bottom-box .listbox-bottom-move {\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  width: 100%;\n}\n.listBox .find-right-list .right-listbox .listbox-bottom .listbox-bottom-box .listbox-bottom-move span {\n  color: #a9a9a9;\n  display: block;\n  height: 30px;\n}\n.listBox .find-right-list .right-listbox .listbox-bottom .listbox-bottom-box .listbox-bottom-move p {\n  color: #641eb4;\n  margin: 0px auto;\n  height: 30px;\n}\n.listBox .find-right-list .right-listbox .listbox-bottom .listbox-bottom-box .listbox-bottom-move:hover {\n  top: -55px;\n}\n.listBox .find-right-list .right-listbox .listbox-bottom .small-img {\n  width: 78px;\n  height: 25px;\n  display: block;\n  margin: 20px auto;\n}\n.listBox .find-right-list .right-listbox .listbox-bottom .brand-info {\n  width: 190px;\n  padding: 15px;\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n}\n.listBox .find-right-list .right-listbox .listbox-bottom input {\n  cursor: pointer;\n  width: 145px;\n  height: 45px;\n  line-height: 45px;\n  font-size: 18px;\n  color: #ffffff;\n  text-align: center;\n  margin: 0 auto;\n  border: 0;\n  background: #641eb4;\n}\n.outer .topic {\n  width: 100%;\n  text-align: center;\n  font-size: 22px;\n  font-weight: 600;\n  padding-top: 106px;\n  padding-bottom: 33px;\n}\n", ""]);

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