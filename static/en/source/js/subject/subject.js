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

	var imgsrc = window.supervar.imgsrc_cn + "subject/";
	var apiUrl = window.supervar.apiURL;
	var hrefUrl = "/en/page/";
	var APILanguage = 'en';
	/* your logic code */
	var jsonData = {
	    brand: [{ img: "#", href: "#" }, { img: "#", href: "#" }, { img: "#", href: "#" }, { img: "#", href: "#" }, { img: "#", href: "#" }, { img: "#", href: "#" }, { img: "#", href: "#" }],
	    subjectList: [{
	        type: 0,
	        title: '热卖新品',
	        data: [{
	            img: "#",
	            href: "#",
	            title: "春季新款设计师改良旗袍中国风印花民族风修身连衣裙收到了快放假哦我公交是地方吉欧斯啊",
	            platform: "taobao",
	            disPrice: "249.00",
	            price: "169.00",
	            num: 12
	        }, {
	            img: "#",
	            href: "#",
	            title: "春季新款设计师改良旗袍中国风印花民族风修身连衣裙收到了快放假哦我公交是地方吉欧斯啊",
	            platform: "taobao",
	            disPrice: "249.00",
	            price: "169.00",
	            num: 0
	        }, {
	            img: "#",
	            href: "#",
	            title: "春季新款设计师改良旗袍中国风印花民族风修身连衣裙收到了快放假哦我公交是地方吉欧斯啊",
	            platform: "taobao",
	            disPrice: "249.00",
	            price: "169.00",
	            num: 12
	        }, {
	            img: "#",
	            href: "#",
	            title: "春季新款设计师改良旗袍中国风印花民族风修身连衣裙收到了快放假哦我公交是地方吉欧斯啊",
	            platform: "taobao",
	            disPrice: "249.00",
	            price: "169.00",
	            num: 12
	        }, {
	            img: "#",
	            href: "#",
	            title: "春季新款设计师改良旗袍中国风印花民族风修身连衣裙收到了快放假哦我公交是地方吉欧斯啊",
	            platform: "taobao",
	            disPrice: "249.00",
	            price: "169.00",
	            num: 12
	        }]
	    }, {
	        type: 1,
	        title: '独家美衣',
	        data: [{
	            img: "#",
	            href: "javascript:;",
	            title: "春季新款设计师改良旗袍中国风印花民族风修身连衣裙改良旗袍中国风印花民族风修身连衣裙啦啦啦啦啦啦啦啦",
	            platform: "taobao",
	            disPrice: "249.00",
	            price: "169.00",
	            num: 12
	        }, {
	            img: "#",
	            href: "javascript:;",
	            title: "春季新款设计师改良旗袍中国风印花民族风修身连衣裙改良旗袍中国风印花民族风修身连衣裙啦啦啦啦啦啦啦啦",
	            platform: "taobao",
	            disPrice: "249.00",
	            price: "169.00",
	            num: 0
	        }]
	    }],
	    ideas: [{
	        href: "#",
	        listImgHref: "#",
	        categoryName: "烘焙小物1",
	        recommendReason: "甜蜜烘焙 爱的美味",
	        recommendPrice: "1"
	    }, {
	        href: "#",
	        listImgHref: "#",
	        categoryName: "烘焙小物2",
	        recommendReason: "甜蜜烘焙 爱的美味",
	        recommendPrice: "2"
	    }, {
	        href: "#",
	        listImgHref: "#",
	        categoryName: "烘焙小物3",
	        recommendReason: "甜蜜烘焙 爱的美味",
	        recommendPrice: "3"
	    }, {
	        href: "#",
	        listImgHref: "#",
	        categoryName: "烘焙小物4",
	        recommendReason: "甜蜜烘焙 爱的美味",
	        recommendPrice: "4"
	    }]
	};
	var staticData = {
	    brand: { "title": "Selected Brands" },
	    hotSell: { "add2ShopCar": "Add to Cart", "selled": "Sold out", "tagArr": ["Hot", "New", "Classics", "Pupular"] },
	    beautifulClothes: { "add2ShopCar": "Add to Cart", "selled": "Sold out", "tagArr": ["Hot", "New", "Classics", "Pupular"] },
	    ideas: { "title": "Previous Events", "more": "More", "disCountPre": "Up to ", "disCountNext": "% off" }
	};
	var staticVar = {
	    backColor: '#fff',
	    suspendFontColor: '',
	    suspendHeadImgHref: '',
	    suspendBodyImgHref: '',
	    suspendTailImgHref: ''
	};
	//banner图

	var Banner = function (_React$Component) {
	    _inherits(Banner, _React$Component);

	    function Banner() {
	        _classCallCheck(this, Banner);

	        return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
	    }

	    _createClass(Banner, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            document.getElementById("container").style.opacity = 1;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "banner" },
	                React.createElement("img", { src: this.props.datas.headImgHref })
	            );
	        }
	    }]);

	    return Banner;
	}(React.Component);
	//自定义模块


	var UserDefault = function (_React$Component2) {
	    _inherits(UserDefault, _React$Component2);

	    function UserDefault() {
	        _classCallCheck(this, UserDefault);

	        return _possibleConstructorReturn(this, (UserDefault.__proto__ || Object.getPrototypeOf(UserDefault)).apply(this, arguments));
	    }

	    _createClass(UserDefault, [{
	        key: "render",
	        value: function render() {
	            var headImg = this.props.datas.headImgHref;
	            return React.createElement(
	                "div",
	                { id: headImg != '' && headImg != null ? "floor" + this.props.item : this.props.item, className: "user-defined" },
	                headImg != '' && headImg != null ? React.createElement(
	                    "div",
	                    { className: "sell-title", style: { background: staticVar.backColor } },
	                    React.createElement("img", { src: headImg })
	                ) : '',
	                React.createElement("div", { className: "user-defined-box", dangerouslySetInnerHTML: { __html: this.props.datas.customDefinitionCode } })
	            );
	        }
	    }]);

	    return UserDefault;
	}(React.Component);
	//优选品牌


	var _ref = [4000, 0, 0];
	var timeSpan = _ref[0];
	var brandLen = _ref[1];
	var brandIndex = _ref[2];
	var brandInterval = _ref[3];

	var Brand = function (_React$Component3) {
	    _inherits(Brand, _React$Component3);

	    function Brand(props) {
	        _classCallCheck(this, Brand);

	        var _this3 = _possibleConstructorReturn(this, (Brand.__proto__ || Object.getPrototypeOf(Brand)).call(this, props));

	        _this3.state = { brandOver: false, requestData: [], onOff: true };
	        return _this3;
	    }

	    _createClass(Brand, [{
	        key: "moveToLeft",
	        value: function moveToLeft() {
	            brandIndex--;
	            this.setState({ brandOver: false });
	            this.refs.brandUl.style.left = brandIndex * 152 + "px";
	            if (brandLen + brandIndex <= 0) {
	                var that = this;
	                setTimeout(function () {
	                    brandIndex = 0;
	                    that.setState({ brandOver: true });
	                    that.refs.brandUl.style.left = brandIndex * 152 + "px";
	                    that.setState({ onOff: true });
	                }, 801);
	            }
	        }
	    }, {
	        key: "turnLeft",
	        value: function turnLeft() {
	            this.setState({ onOff: false });
	            this.moveToLeft();
	        }
	    }, {
	        key: "turnRight",
	        value: function turnRight() {
	            this.setState({ onOff: false });
	            if (brandIndex == 0) {
	                this.setState({ brandOver: true });
	                this.refs.brandUl.style.left = -brandLen * 152 + "px";
	                brandIndex = -brandLen + 1;
	                var that = this;
	                setTimeout(function () {
	                    that.tab();
	                }, 10);
	            } else {
	                brandIndex++;
	                this.tab();
	            }
	        }
	    }, {
	        key: "tab",
	        value: function tab() {
	            this.setState({ brandOver: false });
	            this.refs.brandUl.style.left = brandIndex * 152 + "px";
	        }
	    }, {
	        key: "tEnd",
	        value: function tEnd() {
	            this.setState({ onOff: true });
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var that = this;
	            this.refs.brandUl.addEventListener("transitionend", this.tEnd.bind(this), false);
	            brandInterval = setInterval(function () {
	                return that.moveToLeft();
	            }, timeSpan);
	            brandLen = this.props.datas.boardProductList.length;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this4 = this;

	            var headImg = this.props.datas.headImgHref;
	            return React.createElement(
	                "div",
	                { id: headImg != '' && headImg != null ? "floor" + this.props.item : this.props.item, className: "optimizing-brand" },
	                headImg != '' && headImg != null ? React.createElement(
	                    "div",
	                    { className: "sell-title", style: { background: staticVar.backColor } },
	                    React.createElement("img", { src: headImg })
	                ) : '',
	                React.createElement(
	                    "div",
	                    { className: "brand-box" },
	                    React.createElement(
	                        "div",
	                        { className: "brand-title" },
	                        this.props.static.title
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "brand-content", onMouseOver: function onMouseOver() {
	                                clearInterval(brandInterval);
	                            }, onMouseOut: function onMouseOut() {
	                                var that = _this4;brandInterval = setInterval(function () {
	                                    return that.moveToLeft();
	                                }, timeSpan);
	                            } },
	                        React.createElement(
	                            "div",
	                            { className: "brand-nav" },
	                            React.createElement(
	                                "ul",
	                                { ref: "brandUl", className: this.state.brandOver == true ? "brand-over" : "brand-move" },
	                                this.props.datas.boardProductList.map(function (a, b) {
	                                    return React.createElement(
	                                        "li",
	                                        null,
	                                        React.createElement("img", { src: a.shopImg }),
	                                        React.createElement(
	                                            "a",
	                                            { href: a.href, target: "_blank" },
	                                            React.createElement(
	                                                "div",
	                                                { className: "hover-box" },
	                                                a.shopName
	                                            )
	                                        )
	                                    );
	                                }),
	                                this.props.datas.boardProductList.length > 6 ? this.props.datas.boardProductList.map(function (a, b) {
	                                    if (b < 6) return React.createElement(
	                                        "li",
	                                        null,
	                                        React.createElement("img", { src: a.shopImg }),
	                                        React.createElement(
	                                            "a",
	                                            { href: a.href, target: "_blank" },
	                                            React.createElement(
	                                                "div",
	                                                { className: "hover-box" },
	                                                a.shopName
	                                            )
	                                        )
	                                    );
	                                }) : ''
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "turn-left" },
	                            React.createElement("img", { src: imgsrc + "brand_left.png", onClick: this.state.onOff == true ? this.turnLeft.bind(this) : "" })
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "turn-right" },
	                            React.createElement("img", { src: imgsrc + "brand_right.png", onClick: this.state.onOff == true ? this.turnRight.bind(this) : "" })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Brand;
	}(React.Component);
	//专题样式一


	var HotSell = function (_React$Component4) {
	    _inherits(HotSell, _React$Component4);

	    function HotSell() {
	        _classCallCheck(this, HotSell);

	        return _possibleConstructorReturn(this, (HotSell.__proto__ || Object.getPrototypeOf(HotSell)).apply(this, arguments));
	    }

	    _createClass(HotSell, [{
	        key: "render",
	        value: function render() {
	            var _this6 = this;

	            var headImg = this.props.datas.headImgHref;
	            return React.createElement(
	                "div",
	                { id: headImg != '' && headImg != null ? "floor" + this.props.item : this.props.item, className: "hot-sell" },
	                headImg != '' && headImg != null ? React.createElement(
	                    "div",
	                    { className: "sell-title", style: { background: staticVar.backColor } },
	                    React.createElement("img", { src: headImg })
	                ) : '',
	                this.props.datas.boardProductList.map(function (a, b) {
	                    return React.createElement(
	                        "div",
	                        { className: "sell-item" },
	                        React.createElement(
	                            "div",
	                            { className: a.num == 0 ? "hot-sell-tag sell-tag-selled" : "hot-sell-tag sell-tag-default" },
	                            _this6.props.static.tagArr[0]
	                        ),
	                        React.createElement(
	                            "a",
	                            { href: hrefUrl + "buy/?url=" + encodeURIComponent(a.href), target: "_blank" },
	                            React.createElement("img", { className: "shop-img", src: a.img })
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "goods-detail" },
	                            React.createElement(
	                                "p",
	                                null,
	                                a.title.length >= 34 ? a.title.substring(0, 34) + '...' : a.title
	                            ),
	                            React.createElement("img", { className: "plate-img", src: imgsrc + a.sellerPlatform + '.png' }),
	                            React.createElement(
	                                "div",
	                                { className: "goods-buy" },
	                                React.createElement(
	                                    "div",
	                                    { className: "dis-price" },
	                                    "¥",
	                                    a.discountPrice
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "now-price" },
	                                    "¥",
	                                    a.price
	                                )
	                            ),
	                            React.createElement(
	                                "a",
	                                { className: "buy-now", type: "button", href: hrefUrl + "buy/?url=" + encodeURIComponent(a.href), target: "_blank" },
	                                _this6.props.static.add2ShopCar
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: a.num == 0 ? "cover-selled cover-selled-selled" : "cover-selled cover-selled-default" },
	                            _this6.props.static.selled
	                        )
	                    );
	                })
	            );
	        }
	    }]);

	    return HotSell;
	}(React.Component);
	//专题样式二


	var BeautifulClothes = function (_React$Component5) {
	    _inherits(BeautifulClothes, _React$Component5);

	    function BeautifulClothes() {
	        _classCallCheck(this, BeautifulClothes);

	        return _possibleConstructorReturn(this, (BeautifulClothes.__proto__ || Object.getPrototypeOf(BeautifulClothes)).apply(this, arguments));
	    }

	    _createClass(BeautifulClothes, [{
	        key: "render",
	        value: function render() {
	            var _this8 = this;

	            var headImg = this.props.datas.headImgHref;
	            return React.createElement(
	                "div",
	                { id: headImg != '' && headImg != null ? "floor" + this.props.item : this.props.item, className: "beautiful—clothes" },
	                headImg != '' && headImg != null ? React.createElement(
	                    "div",
	                    { className: "sell-title", style: { background: staticVar.backColor } },
	                    React.createElement("img", { src: headImg })
	                ) : '',
	                this.props.datas.boardProductList.map(function (a, b) {
	                    return React.createElement(
	                        "div",
	                        { className: "clothes-item" },
	                        React.createElement(
	                            "a",
	                            { href: hrefUrl + "buy/?url=" + encodeURIComponent(a.href), target: "_blank" },
	                            React.createElement("img", { className: "clothes-img", src: a.img }),
	                            React.createElement(
	                                "div",
	                                { className: a.num == 0 ? "hot-sell-tag sell-tag-selled" : "hot-sell-tag sell-tag-default" },
	                                _this8.props.static.tagArr[0]
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: a.num == 0 ? "cover-selled cover-selled-selled" : "cover-selled cover-selled-default" },
	                                _this8.props.static.selled
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "clothes-detail" },
	                            React.createElement(
	                                "p",
	                                null,
	                                a.title.length >= 41 ? a.title.substring(0, 41) + '...' : a.title
	                            ),
	                            React.createElement("img", { className: "plate-img", src: imgsrc + a.sellerPlatform + '.png' }),
	                            React.createElement(
	                                "div",
	                                { className: "clothes-buy" },
	                                React.createElement(
	                                    "div",
	                                    { className: "dis-price" },
	                                    "¥",
	                                    a.disPrice
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "now-price" },
	                                    "¥",
	                                    a.price
	                                )
	                            ),
	                            React.createElement(
	                                "a",
	                                { className: "buy-now", type: "button", href: hrefUrl + "buy/?url=" + encodeURIComponent(a.href), target: "_blank" },
	                                _this8.props.static.add2ShopCar
	                            )
	                        )
	                    );
	                })
	            );
	        }
	    }]);

	    return BeautifulClothes;
	}(React.Component);
	//专题楼层


	var SubjectList = function (_React$Component6) {
	    _inherits(SubjectList, _React$Component6);

	    function SubjectList(props) {
	        _classCallCheck(this, SubjectList);

	        var _this9 = _possibleConstructorReturn(this, (SubjectList.__proto__ || Object.getPrototypeOf(SubjectList)).call(this, props));

	        _this9.state = { requestData: [] };
	        return _this9;
	    }

	    _createClass(SubjectList, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this10 = this;

	            fetch(apiUrl + "shoppingguide/cat-detail-web?cat=" + this.props.name, {
	                method: "GET",
	                credentials: 'include'
	            }).then(function (res) {
	                return res.json();
	            }).then(function (data) {
	                _this10.setState({ requestData: data.data });
	            }).catch(function (ex) {
	                return console.log("楼层 is loading failed", ex);
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                null,
	                this.state.requestData.map(function (a, b) {
	                    switch (a.childCategoryType) {
	                        case 1:
	                            //专题分类
	                            switch (a.cols) {
	                                case 4:
	                                    return React.createElement(HotSell, { item: b, "static": staticData.hotSell, datas: a });
	                                    break;
	                                case 2:
	                                    return React.createElement(BeautifulClothes, { item: b, "static": staticData.beautifulClothes, datas: a });
	                                    break;
	                                default:
	                                    return React.createElement(HotSell, { item: b, "static": staticData.hotSell, datas: a });
	                                    break;
	                            }
	                            break;
	                        case 2:
	                            //店铺专题分类
	                            return React.createElement(Brand, { item: b, "static": staticData.brand, datas: a });
	                            break;
	                        case 3:
	                            //优惠推荐图片组合,app用

	                            break;
	                        case 4:
	                            //自定义代码
	                            return React.createElement(UserDefault, { item: b, datas: a });
	                            break;

	                    }
	                })
	            );
	        }
	    }]);

	    return SubjectList;
	}(React.Component);
	//右侧楼层导航


	var Floor = function (_React$Component7) {
	    _inherits(Floor, _React$Component7);

	    function Floor(props) {
	        _classCallCheck(this, Floor);

	        var _this11 = _possibleConstructorReturn(this, (Floor.__proto__ || Object.getPrototypeOf(Floor)).call(this, props));

	        _this11.state = { floorIndex: -1, requestData: [] };
	        return _this11;
	    }

	    _createClass(Floor, [{
	        key: "floorHandle",
	        value: function floorHandle(e) {
	            var clickFloor = e.currentTarget.getAttribute('name');
	            document.documentElement.scrollTop = document.body.scrollTop = document.getElementById('floor' + clickFloor).offsetTop - 20;
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this12 = this;

	            fetch(apiUrl + "shoppingguide/cat-detail-web?cat=" + this.props.name, {
	                method: "GET",
	                credentials: 'include'
	            }).then(function (res) {
	                return res.json();
	            }).then(function (data) {
	                var that = _this12;
	                var floorLen = 0;
	                data.data.map(function (a) {
	                    if (a.headImgHref != '' && a.headImgHref != null) {
	                        floorLen++;
	                    }
	                });
	                window.onscroll = function () {
	                    for (var i = floorLen - 1; i >= 0; i--) {
	                        var scrollTop = document.getElementById('floor' + i).offsetTop - (document.documentElement.scrollTop || document.body.scrollTop);
	                        if (scrollTop < 400) {
	                            that.setState({ floorIndex: i });return false;
	                        } else {
	                            that.setState({ floorIndex: -1 });
	                        }
	                    }
	                };
	                _this12.setState({ requestData: data.data });
	            }).catch(function (ex) {
	                return console.log("楼层 is loading failed", ex);
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this13 = this;

	            return React.createElement(
	                "div",
	                { className: this.state.floorIndex != -1 ? "floor-box floor-box-active" : "floor-box floor-box-default" },
	                React.createElement(
	                    "div",
	                    { className: "floor-top" },
	                    React.createElement("img", { src: staticVar.suspendHeadImgHref })
	                ),
	                this.state.requestData.map(function (a, b) {
	                    if (a.headImgHref != '' && a.headImgHref != null) return React.createElement(
	                        "div",
	                        { name: b, className: "floor-default", style: { color: staticVar.suspendFontColor, background: 'url(' + staticVar.suspendBodyImgHref + ') no-repeat center center' }, onClick: _this13.floorHandle.bind(_this13) },
	                        a.categoryName
	                    );
	                }),
	                React.createElement(
	                    "div",
	                    { className: "floor-footer" },
	                    React.createElement("img", { src: staticVar.suspendTailImgHref })
	                )
	            );
	        }
	    }]);

	    return Floor;
	}(React.Component);
	//往期专题


	var _ref2 = [0, 0];
	var ideasIndex = _ref2[0];
	var ideasBannerLen = _ref2[1];
	var ideasBannerInterval = _ref2[2];

	var Ideas = function (_React$Component8) {
	    _inherits(Ideas, _React$Component8);

	    function Ideas(props) {
	        _classCallCheck(this, Ideas);

	        var _this14 = _possibleConstructorReturn(this, (Ideas.__proto__ || Object.getPrototypeOf(Ideas)).call(this));

	        _this14.state = { bannerOver: false, requestData: [] };
	        return _this14;
	    }

	    _createClass(Ideas, [{
	        key: "moveToLeft",
	        value: function moveToLeft() {
	            ideasIndex--;
	            if (ideasBannerLen + ideasIndex == -1) {
	                ideasIndex = 0;
	                this.setState({ bannerOver: true });
	            } else {
	                this.setState({ bannerOver: false });
	            }
	            this.refs.banner.style.left = ideasIndex * 386 + "px";
	        }
	    }, {
	        key: "turnLeft",
	        value: function turnLeft() {
	            this.moveToLeft();
	        }
	    }, {
	        key: "turnRight",
	        value: function turnRight() {
	            if (ideasIndex < 0) {
	                ideasIndex++;
	                this.refs.banner.style.left = ideasIndex * 386 + "px";
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this15 = this;

	            var that = this;
	            //ideasBannerInterval=setInterval(function(){that.moveToLeft();},timeSpan);
	            fetch(apiUrl + "shoppingguide/category-group?language=" + APILanguage + "&pageSize=9", {
	                method: "GET",
	                credentials: 'include'
	            }).then(function (res) {
	                return res.json();
	            }).then(function (data) {
	                ideasBannerLen = data.data.length;
	                _this15.setState({ requestData: data.data });
	            }).catch(function (ex) {
	                return console.log("Ideas is loading failed", ex);
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "ideas" },
	                React.createElement(
	                    "div",
	                    { className: "title" },
	                    React.createElement(
	                        "span",
	                        null,
	                        this.props.static.title
	                    ),
	                    React.createElement(
	                        "a",
	                        { className: "look-more", href: hrefUrl + "sthgood/ideas/" },
	                        this.props.static.more
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "ideas-content"
	                        //              	onMouseOver={()=>{clearInterval(ideasBannerInterval)}} 
	                        //              	onMouseOut={()=>{let that = this;ideasBannerInterval=setInterval(()=>that.moveToLeft(),timeSpan);}}
	                    },
	                    React.createElement(
	                        "div",
	                        { className: "ideas-nav" },
	                        React.createElement(
	                            "ul",
	                            { ref: "banner", className: this.state.bannerOver == true ? "ul-over" : "ul-move" },
	                            this.state.requestData.map(function (a) {
	                                return React.createElement(
	                                    "li",
	                                    null,
	                                    React.createElement(
	                                        "a",
	                                        { href: hrefUrl + "subject/subject.html?id=" + a.id },
	                                        React.createElement("img", { src: a.listImgHref })
	                                    ),
	                                    React.createElement(
	                                        "div",
	                                        { className: "ideas-type" },
	                                        React.createElement(
	                                            "span",
	                                            { title: a.categoryName },
	                                            a.categoryName
	                                        )
	                                    ),
	                                    React.createElement(
	                                        "div",
	                                        { className: "ideas-title" },
	                                        React.createElement(
	                                            "span",
	                                            { title: a.deputyCategoryName },
	                                            a.deputyCategoryName
	                                        ),
	                                        React.createElement(
	                                            "span",
	                                            { title: a.desc },
	                                            a.desc
	                                        )
	                                    )
	                                );
	                            }),
	                            this.state.requestData.lenght >= 3 ? this.state.requestData.map(function (a, b) {
	                                if (b < 3) return React.createElement(
	                                    "li",
	                                    null,
	                                    React.createElement(
	                                        "a",
	                                        { href: hrefUrl + "subject/subject.html?id=" + a.id },
	                                        React.createElement("img", { src: a.listImgHref })
	                                    ),
	                                    React.createElement(
	                                        "div",
	                                        { className: "ideas-type" },
	                                        React.createElement(
	                                            "span",
	                                            { title: a.categoryName },
	                                            a.categoryName
	                                        )
	                                    ),
	                                    React.createElement(
	                                        "div",
	                                        { className: "ideas-title" },
	                                        React.createElement(
	                                            "span",
	                                            { title: a.deputyCategoryName },
	                                            a.deputyCategoryName
	                                        ),
	                                        React.createElement(
	                                            "span",
	                                            { title: a.desc },
	                                            a.desc
	                                        )
	                                    )
	                                );
	                            }) : ''
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "turn-left" },
	                        React.createElement("img", { src: imgsrc + "turn_left.png", onClick: this.turnLeft.bind(this) })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "turn-right" },
	                        React.createElement("img", { src: imgsrc + "turn_right.png", onClick: this.turnRight.bind(this) })
	                    )
	                )
	            );
	        }
	    }]);

	    return Ideas;
	}(React.Component);
	//父组件


	var Content = function (_React$Component9) {
	    _inherits(Content, _React$Component9);

	    function Content(props) {
	        _classCallCheck(this, Content);

	        var _this16 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

	        _this16.state = { subjectId: '', requestData: [] };
	        return _this16;
	    }

	    _createClass(Content, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _this17 = this;

	            document.getElementById("container").style.opacity = 1;
	            this.setState({ subjectId: supervar.util.search2Obj().id });
	            fetch(apiUrl + "shoppingguide/cat-info?cat=" + supervar.util.search2Obj().id, {
	                method: "GET",
	                credentials: 'include'
	            }).then(function (res) {
	                return res.json();
	            }).then(function (data) {
	                staticVar.backColor = data.data.backgroundColor;
	                staticVar.suspendFontColor = data.data.suspendFontColor;
	                staticVar.suspendHeadImgHref = data.data.suspendHeadImgHref;
	                staticVar.suspendBodyImgHref = data.data.suspendBodyImgHref;
	                staticVar.suspendTailImgHref = data.data.suspendTailImgHref;
	                _this17.setState({ requestData: data.data });
	            }).catch(function (ex) {
	                return console.log("banner is loading failed", ex);
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "subject", style: { background: staticVar.backColor } },
	                React.createElement(Banner, { datas: this.state.requestData }),
	                React.createElement(
	                    "div",
	                    { className: "subject-content" },
	                    React.createElement(SubjectList, { name: this.state.subjectId }),
	                    React.createElement(Ideas, { "static": staticData.ideas })
	                ),
	                React.createElement(Floor, { name: this.state.subjectId })
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
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./subject.less", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./subject.less");
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
	exports.push([module.id, "/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\n/* your business less */\n* {\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\na {\n  cursor: pointer !important;\n}\n.textOver {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.subject {\n  width: 100%;\n  overflow: hidden;\n  background: #e8e8e8;\n}\n.subject .banner {\n  width: 1920px;\n  height: 500px;\n  position: relative;\n  left: 50%;\n}\n.subject .banner img {\n  width: 1920px;\n  height: 500px;\n  position: absolute;\n  left: -50%;\n}\n.subject .subject-content {\n  width: 1200px;\n  margin: 0 auto;\n}\n.subject .subject-content .user-defined,\n.subject .subject-content .optimizing-brand,\n.subject .subject-content .hot-sell,\n.subject .subject-content .ideas,\n.subject .subject-content .beautiful—clothes {\n  width: 100%;\n  margin-bottom: 40px;\n  overflow: hidden;\n}\n.subject .subject-content .user-defined {\n  overflow: hidden;\n}\n.subject .subject-content .user-defined-box {\n  background: #dfdfdf;\n  overflow: hidden;\n}\n.subject .subject-content .optimizing-brand {\n  overflow: hidden;\n}\n.subject .subject-content .optimizing-brand .brand-box {\n  background: #fff;\n  overflow: hidden;\n}\n.subject .subject-content .optimizing-brand .brand-title {\n  font-size: 20px;\n  color: #2c2c2c;\n  float: left;\n  height: 100px;\n  line-height: 100px;\n  width: 200px;\n  text-align: center;\n}\n.subject .subject-content .optimizing-brand .brand-content {\n  float: right;\n  margin: 19px 21px 0 0;\n  width: 968px;\n  height: 64px;\n  position: relative;\n  overflow: hidden;\n}\n.subject .subject-content .optimizing-brand .brand-nav {\n  width: 904px;\n  height: 64px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n.subject .subject-content .optimizing-brand ul {\n  width: auto;\n  height: 64px;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  white-space: nowrap;\n}\n.subject .subject-content .optimizing-brand .brand-move {\n  transition: all 0.8s linear;\n  -weikit-transition: all 0.8s linear;\n  -o-transition: all 0.8s linear;\n  -ms-transition: all 0.8s linear;\n  -moz-transition: all 0.8s linear;\n}\n.subject .subject-content .optimizing-brand .brand-over {\n  transition: all 0s linear;\n  -weikit-transition: all 0s linear;\n  -o-transition: all 0s linear;\n  -ms-transition: all 0s linear;\n  -moz-transition: all 0s linear;\n}\n.subject .subject-content .optimizing-brand li {\n  width: 144px;\n  height: 62px;\n  display: inline-block;\n  margin-right: 8px;\n  position: relative;\n}\n.subject .subject-content .optimizing-brand li:last-child {\n  margin-right: 0;\n}\n.subject .subject-content .optimizing-brand li a {\n  overflow: hidden;\n}\n.subject .subject-content .optimizing-brand li img {\n  width: 142px;\n  height: 62px;\n  border: 1px solid #b5b5b5;\n}\n.subject .subject-content .optimizing-brand li .hover-box {\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n  line-height: 38px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  overflow: hidden;\n  background: rgba(200, 200, 200, 0.8) url('/cn/source/img/subject/brand_shop.png') no-repeat center 33px;\n  background-size: 19px 19px;\n  height: 0;\n  transition: all 0.2s linear;\n  -weikit-transition: all 0.2s linear;\n  -o-transition: all 0.2s linear;\n  -ms-transition: all 0.2s linear;\n  -moz-transition: all 0.2s linear;\n}\n.subject .subject-content .optimizing-brand li:hover .hover-box {\n  height: 64px;\n}\n.subject .subject-content .optimizing-brand .turn-left,\n.subject .subject-content .optimizing-brand .turn-right {\n  position: absolute;\n  top: 16px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.subject .subject-content .optimizing-brand .turn-left img,\n.subject .subject-content .optimizing-brand .turn-right img {\n  width: 15px;\n  height: 28px;\n}\n.subject .subject-content .optimizing-brand .turn-left {\n  left: 0px;\n}\n.subject .subject-content .optimizing-brand .turn-right {\n  right: 0px;\n}\n.subject .subject-content .hot-sell {\n  transition: all 0.8s linear;\n  -weikit-transition: all 0.8s linear;\n  -o-transition: all 0.8s linear;\n  -ms-transition: all 0.8s linear;\n  -moz-transition: all 0.8s linear;\n}\n.subject .subject-content .hot-sell .sell-item {\n  float: left;\n  width: 288px;\n  height: 410px;\n  margin: 0 16px 16px 0;\n  background: #fff;\n  position: relative;\n}\n.subject .subject-content .hot-sell .sell-item .shop-img {\n  width: 288px;\n  height: 288px;\n  display: block;\n}\n.subject .subject-content .hot-sell .sell-item .goods-detail {\n  width: 264px;\n  height: 98px;\n  margin: 12px auto;\n}\n.subject .subject-content .hot-sell .sell-item p {\n  height: 32px;\n  line-height: 14px;\n  font-size: 14px;\n  color: #666;\n}\n.subject .subject-content .hot-sell .sell-item .plate-img {\n  width: 16px;\n  height: 16px;\n  display: block;\n  margin-top: 6px;\n}\n.subject .subject-content .hot-sell .sell-item .goods-buy {\n  float: left;\n  overflow: hidden;\n  margin: 12px 0 0;\n}\n.subject .subject-content .hot-sell .sell-item .dis-price {\n  font-size: 14px;\n  line-height: 14px;\n  color: #999;\n  text-decoration: line-through;\n}\n.subject .subject-content .hot-sell .sell-item .now-price {\n  font-size: 18px;\n  line-height: 22px;\n  color: #ff5064;\n}\n.subject .subject-content .hot-sell .sell-item .buy-now {\n  width: 90px;\n  height: 36px;\n  float: right;\n  color: #fff;\n  border: 0;\n  border-radius: 2px;\n  margin-top: 12px;\n  cursor: pointer;\n  background: #ff5064;\n  text-decoration: none;\n}\n.subject .subject-content .hot-sell .sell-item .hot-sell-tag {\n  position: absolute;\n  left: 6px;\n  top: -3px;\n  width: 32px;\n  height: 46px;\n  line-height: 46px;\n  font-size: 14px;\n  background: #ff7e00;\n  color: #fff;\n  text-align: center;\n}\n.subject .subject-content .hot-sell .sell-item .sell-tag-default {\n  display: none;\n}\n.subject .subject-content .hot-sell .sell-item .sell-tag-selled {\n  display: block;\n}\n.subject .subject-content .hot-sell .sell-item .cover-selled {\n  position: absolute;\n  left: 84px;\n  top: 84px;\n  width: 120px;\n  height: 120px;\n  line-height: 120px;\n  background: rgba(51, 51, 51, 0.8);\n  font-size: 18px;\n  color: #fff;\n  border-radius: 50%;\n  text-align: center;\n}\n.subject .subject-content .hot-sell .sell-item .cover-selled-default {\n  display: none;\n}\n.subject .subject-content .hot-sell .sell-item .cover-selled-selled {\n  display: block;\n}\n.subject .subject-content .hot-sell .sell-item:nth-of-type(4n+1) {\n  margin-right: 0;\n}\n.subject .subject-content .beautiful—clothes {\n  width: 100%;\n  transition: all 0.8s linear;\n  -weikit-transition: all 0.8s linear;\n  -o-transition: all 0.8s linear;\n  -ms-transition: all 0.8s linear;\n  -moz-transition: all 0.8s linear;\n}\n.subject .subject-content .beautiful—clothes .clothes-title {\n  width: 1198px;\n  text-align: center;\n  height: 68px;\n  line-height: 68px;\n  background: #fff;\n  font-size: 20px;\n  color: #727272;\n  border: solid 1px #bfbfbf;\n  margin-bottom: 28px;\n  overflow: hidden;\n}\n.subject .subject-content .beautiful—clothes .clothes-item {\n  width: 592px;\n  height: 288px;\n  float: left;\n  margin: 0 16px 16px 0;\n}\n.subject .subject-content .beautiful—clothes .clothes-item a {\n  display: block;\n  position: relative;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .hot-sell-tag {\n  position: absolute;\n  left: 6px;\n  top: -3px;\n  width: 32px;\n  height: 46px;\n  line-height: 46px;\n  font-size: 14px;\n  background: #ff7e00;\n  color: #fff;\n  text-align: center;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .sell-tag-default {\n  display: none;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .sell-tag-selled {\n  display: block;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .cover-selled {\n  position: absolute;\n  left: 84px;\n  top: 84px;\n  width: 120px;\n  height: 120px;\n  line-height: 120px;\n  background: rgba(51, 51, 51, 0.8);\n  font-size: 18px;\n  color: #fff;\n  border-radius: 50%;\n  text-align: center;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .cover-selled-default {\n  display: none;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .cover-selled-selled {\n  display: block;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .clothes-img {\n  float: left;\n  width: 290px;\n  height: 288px;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .clothes-detail {\n  float: left;\n  width: 302px;\n  height: 288px;\n  background: #fff;\n  position: relative;\n}\n.subject .subject-content .beautiful—clothes .clothes-item p {\n  padding: 36px 12px 12px;\n  font-size: 18px;\n  line-height: 24px;\n  color: #666;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .plate-img {\n  width: 16px;\n  height: 16px;\n  display: block;\n  padding-left: 12px;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .clothes-buy {\n  width: 108px;\n  height: 46px;\n  position: absolute;\n  left: 12px;\n  bottom: 12px;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .dis-price {\n  font-size: 14px;\n  line-height: 14px;\n  color: #999;\n  margin-bottom: 8px;\n  text-decoration: line-through;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .now-price {\n  font-size: 26px;\n  line-height: 26px;\n  font-weight: bold;\n  color: #ff5064;\n}\n.subject .subject-content .beautiful—clothes .clothes-item .buy-now {\n  width: 120px;\n  height: 48px;\n  color: #fff;\n  text-align: center;\n  line-height: 48px;\n  font-size: 18px;\n  border: 0;\n  border-radius: 2px;\n  cursor: pointer;\n  position: absolute;\n  right: 12px;\n  bottom: 12px;\n  background: #ff5064;\n  text-decoration: none;\n}\n.subject .subject-content .beautiful—clothes .clothes-item:nth-of-type(2n+1) {\n  margin-right: 0;\n}\n.subject .subject-content .ideas .title {\n  font-size: 20px;\n  color: #2c2c2c;\n  height: 70px;\n  line-height: 70px;\n  background: #949494;\n  width: 100%;\n  overflow: hidden;\n}\n.subject .subject-content .ideas .title span {\n  float: left;\n  margin-left: 20px;\n}\n.subject .subject-content .ideas .title a {\n  float: right;\n  margin-right: 20px;\n  padding-right: 28px;\n  background: url('/cn/source/img/subject/more.png') no-repeat right center;\n  background-size: 24px 11px;\n  text-decoration: none;\n  color: #2c2c2c;\n}\n.subject .subject-content .ideas .ideas-content {\n  width: 100%;\n  height: 318px;\n  background: #fff;\n  position: relative;\n  overflow: hidden;\n}\n.subject .subject-content .ideas .ideas-nav {\n  height: 256px;\n  width: 1122px;\n  position: relative;\n  overflow: hidden;\n  margin: 22px auto 0;\n}\n.subject .subject-content .ideas .ideas-nav ul {\n  width: auto;\n  height: 256px;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  white-space: nowrap;\n}\n.subject .subject-content .ideas .ideas-nav .ul-move {\n  transition: all 0.8s linear;\n  -weikit-transition: all 0.8s linear;\n  -o-transition: all 0.8s linear;\n  -ms-transition: all 0.8s linear;\n  -moz-transition: all 0.8s linear;\n}\n.subject .subject-content .ideas .ideas-nav .ul-over {\n  transition: all 0s linear;\n  -weikit-transition: all 0s linear;\n  -o-transition: all 0s linear;\n  -ms-transition: all 0s linear;\n  -moz-transition: all 0s linear;\n}\n.subject .subject-content .ideas .ideas-nav li {\n  display: inline-block;\n  height: 256px;\n  width: 350px;\n  margin-right: 36px;\n  background: #eaeaea;\n}\n.subject .subject-content .ideas .ideas-nav li:last-child {\n  margin-right: 0;\n}\n.subject .subject-content .ideas .ideas-nav li a {\n  overflow: hidden;\n}\n.subject .subject-content .ideas .ideas-nav li img {\n  width: 350px;\n  height: 175px;\n}\n.subject .subject-content .ideas .ideas-nav li div {\n  width: 310px;\n  margin: 19px auto;\n  text-align: left;\n}\n.subject .subject-content .ideas .ideas-nav li .ideas-type {\n  color: #999999;\n  font-size: 14px;\n  line-height: 14px;\n}\n.subject .subject-content .ideas .ideas-nav li .ideas-type span {\n  width: 310px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.subject .subject-content .ideas .ideas-nav li .ideas-title {\n  font-size: 18px;\n  overflow: hidden;\n  margin-top: 11px;\n}\n.subject .subject-content .ideas .ideas-nav li .ideas-title span {\n  float: right;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.subject .subject-content .ideas .ideas-nav li .ideas-title span:first-child {\n  color: #333333;\n  width: 100px;\n  float: left;\n}\n.subject .subject-content .ideas .ideas-nav li .ideas-title span:last-child {\n  color: #641eb4;\n  width: 200px;\n  float: right;\n  text-align: right;\n}\n.subject .subject-content .ideas .turn-left,\n.subject .subject-content .ideas .turn-right {\n  position: absolute;\n  top: 97px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.subject .subject-content .ideas .turn-left img,\n.subject .subject-content .ideas .turn-right img {\n  width: 17px;\n  height: 31px;\n}\n.subject .subject-content .ideas .turn-left {\n  left: 12px;\n}\n.subject .subject-content .ideas .turn-right {\n  right: 12px;\n}\n.subject .floor-box {\n  position: fixed;\n  top: 285px;\n  right: -270px;\n  font-size: 20px;\n  text-align: center;\n  transition: all 0.4s linear;\n  -weikit-transition: all 0.4s linear;\n  -o-transition: all 0.4s linear;\n  -ms-transition: all 0.4s linear;\n  -moz-transition: all 0.4s linear;\n  overflow: hidden;\n  z-index: 9999;\n}\n.subject .floor-box div {\n  cursor: pointer;\n  color: #fff;\n  /*.transition(.8s);*/\n}\n.subject .floor-box .floor-top,\n.subject .floor-box .floor-footer {\n  cursor: auto;\n  overflow: hidden;\n}\n.subject .floor-box .floor-default {\n  height: 50px;\n  line-height: 50px;\n}\n.subject .floor-box .floor-active {\n  height: 150px;\n  line-height: 150px;\n}\n.subject .floor-box-default {\n  right: -270px;\n}\n.subject .floor-box-active {\n  right: 70px;\n}\n.subject .sell-title {\n  width: 1200px;\n  text-align: center;\n  height: 70px;\n  line-height: 70px;\n  background: #fff;\n  font-size: 20px;\n  color: #727272;\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n", ""]);

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


/***/ }
/******/ ]);