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

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var imgsrc = window.supervar.imgsrc_en;

	/* your logic code */

	var information = [{
	    id: 1,
	    title: "first",
	    bigIntro: {},
	    smallIntro: [],
	    pic: [{
	        id: 1,
	        src: imgsrc + "branding/superbuy_pic.png"
	    }, {
	        id: 2,
	        src: imgsrc + "branding/icon_77.png"
	    }]
	}, {
	    id: 2,
	    title: "second",
	    topic: "Difficult",
	    bigIntro: {
	        title1: "Superbuy Shopping Agent,",
	        title2: "Better result than shop by yourself",
	        detail: ["0 Service Fee", "infinite selection", "exclusive quality inspection  ", "expert procurement", "storage & combined delivery", "one-stop trackable after-sales service"]
	    },
	    smallIntro: ["to buy things locally?", "to deal with expensive global delivery fee?", "to use ordering system?", "to communicate with foreign sellers?", "to purchase suitable or quality products?", "to request after-sales?"],
	    pic: [{
	        id: 1,
	        title: "right",
	        src: imgsrc + "branding/s1.png"
	    }]

	}, {
	    id: 3,
	    title: "third",
	    topic: "Concern",
	    bigIntro: {
	        title1: "Superbuy Shopping Agent,",
	        title2: "ensure you satisfied reveive products",
	        detail: ["exclusive quality inspection", "combined delivery", "\r \n \n \n \n180 days free smart storage", "monitoring the entire process ", "\r \n \n \n \n \nhuge items delivery available", "customized packaging available"]
	    },
	    smallIntro: ["with expensive global delivery fee?", "with fake or damaged goods in global shopping?", "with hundreds of shipping restrictions?", "with high possibility of parcel misssing or damaging?", "with money and time consuming for returns and refunds?"],
	    pic: [{
	        id: 1,
	        title: "left",
	        src: imgsrc + "branding/s2.png"
	    }]
	}, {
	    id: 4,
	    title: "fourth",
	    topic: "Fearing",
	    bigIntro: {
	        title1: "Superbuy Shopping Agent,",
	        title2: "your reliable super agent",
	        detail: ['"customer first" at any time', 'one-to-one orders following', '24hr bilingual customer service', 'CEO personally respondent email']
	    },
	    smallIntro: ["about some shopping agents just complete purchasing and delivery but ignore the rest of the issues?", "about some shopping agents jsut simply pass responsibility to sellers and logistics companies?", "about some shopping agents just have undertrained customer service?"],
	    pic: [{
	        id: 1,
	        title: "right",
	        src: imgsrc + "branding/s3.png"
	    }]
	}, {
	    id: 5,
	    title: "fifth",
	    bigIntro: {
	        title1: "Superbuy Platform, strived support",
	        title2: "all your cross-borders needs",
	        detail: ["Quality Guaranteed e-Mall", "Parcel Forward", "Tourism", "B2B"]
	    },
	    smallIntro: ["Trusted a shopping agent platform, but single service cannot satisfy comprehensive demand and need to find other platform?"],
	    pic: [{
	        id: 1,
	        title: "left",
	        src: imgsrc + "branding/s4.png"
	    }]
	}, {
	    id: 6,
	    title: "sixth",
	    bigIntro: {
	        title1: "Superbuy Clud-Trade,",
	        title2: "support your global business",
	        detail: ["API connection between warehouse and malls", "Customized purchasing price", "Exclusive delivery fee   ", "Customized packaging and more", "Drop-shipping available", "Transaction record and output"]
	    },
	    smallIntro: ["Seen business opportunity from shopping agent business model and wanted to start own business, but couldn't find fair value suppliers?", "Cannot customize products for your customers?", "Struggling with order management and parcel delivery?"],
	    pic: [{
	        id: 1,
	        title: "right",
	        src: imgsrc + "branding/s5.png"
	    }]
	}, {}];

	var containmentPropType = React.PropTypes.any;

	if (typeof window !== 'undefined') {
	    containmentPropType = React.PropTypes.instanceOf(Element);
	}
	var FirstPing = React.createClass({
	    displayName: "FirstPing",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "firstPing", id: "index_0" },
	            React.createElement("img", { src: imgsrc + "branding/firstPingBG_en.png", alt: "" })
	        );
	    }
	});

	var SecPing = React.createClass({
	    displayName: "SecPing",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "SecPing", id: "index_1" },
	            React.createElement(
	                "div",
	                { className: "content_box" },
	                React.createElement(
	                    "div",
	                    { className: "SecLeft" },
	                    React.createElement(
	                        "div",
	                        { className: "topic" },
	                        information[1].topic
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: this.props.aa == "true" ? "smallIntro" : "smallIntro_none" },
	                        information[1].smallIntro.map(function (a, b) {
	                            return React.createElement(
	                                "div",
	                                { className: "item_" + b },
	                                React.createElement("img", { src: imgsrc + "branding/layer.png", alt: "" }),
	                                React.createElement(
	                                    "em",
	                                    { className: "information" },
	                                    a
	                                )
	                            );
	                        })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "bigIntro" },
	                        React.createElement(
	                            "div",
	                            { className: "title" },
	                            information[1].bigIntro.title1
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "title" },
	                            information[1].bigIntro.title2
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "detail" },
	                            information[1].bigIntro.detail.map(function (a, b) {
	                                if (b == 0 || b == 1 || b == 3) {
	                                    return React.createElement(
	                                        "em",
	                                        { className: "detail_" + b },
	                                        a,
	                                        React.createElement("em", { className: "circle" })
	                                    );
	                                } else {
	                                    return React.createElement(
	                                        "em",
	                                        { className: "detail_" + b },
	                                        a
	                                    );
	                                }
	                            })
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "SecRight" },
	                    React.createElement("img", { src: imgsrc + "branding/s1.png", alt: "" })
	                )
	            )
	        );
	    }
	});

	var ThirdPing = React.createClass({
	    displayName: "ThirdPing",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "ThirdPing", id: "index_2" },
	            React.createElement(
	                "div",
	                { className: "content_box" },
	                React.createElement(
	                    "div",
	                    { className: "ThirdLeft" },
	                    React.createElement("img", { src: imgsrc + "branding/s2.png", alt: "" })
	                ),
	                React.createElement(
	                    "div",
	                    { className: "ThirdRight" },
	                    React.createElement(
	                        "div",
	                        { className: "topic" },
	                        information[2].topic
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: this.props.aa == "true" ? "smallIntro" : "smallIntro_none" },
	                        information[2].smallIntro.map(function (a, b) {
	                            return React.createElement(
	                                "div",
	                                { className: "item_" + b },
	                                React.createElement("img", { className: "img", src: imgsrc + "branding/layer.png", alt: "" }),
	                                React.createElement(
	                                    "em",
	                                    { className: "information" },
	                                    a
	                                )
	                            );
	                        })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "bigIntro" },
	                        React.createElement(
	                            "div",
	                            { className: "title" },
	                            information[2].bigIntro.title1
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "title" },
	                            information[2].bigIntro.title2
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "detail" },
	                            information[2].bigIntro.detail.map(function (a, b) {
	                                if (b == 0 || b == 2 || b == 4) {
	                                    return React.createElement(
	                                        "em",
	                                        { className: "detail_" + b },
	                                        a,
	                                        React.createElement("em", { className: "circle" })
	                                    );
	                                } else {
	                                    return React.createElement(
	                                        "em",
	                                        { className: "detail_" + b },
	                                        a
	                                    );
	                                }
	                            })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var FourthPing = React.createClass({
	    displayName: "FourthPing",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "FourthPing", id: "index_3" },
	            React.createElement(
	                "div",
	                { className: "content_box" },
	                React.createElement(
	                    "div",
	                    { className: "FourthLeft" },
	                    React.createElement(
	                        "div",
	                        { className: "topic" },
	                        information[3].topic
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: this.props.aa == "true" ? "smallIntro" : "smallIntro_none" },
	                        information[3].smallIntro.map(function (a, b) {
	                            return React.createElement(
	                                "div",
	                                { className: "item_" + b },
	                                React.createElement("img", { className: "img", src: imgsrc + "branding/layer.png", alt: "" }),
	                                React.createElement(
	                                    "em",
	                                    { className: "information" },
	                                    a
	                                )
	                            );
	                        })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "bigIntro" },
	                        React.createElement(
	                            "div",
	                            { className: "title" },
	                            information[3].bigIntro.title1
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "title" },
	                            information[3].bigIntro.title2
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "detail" },
	                            information[3].bigIntro.detail.map(function (a, b) {
	                                if (b == 0 || b == 2) {
	                                    return React.createElement(
	                                        "em",
	                                        { className: "detail_" + b },
	                                        a,
	                                        React.createElement("em", { className: "circle" })
	                                    );
	                                } else {
	                                    return React.createElement(
	                                        "em",
	                                        { className: "detail_" + b },
	                                        a
	                                    );
	                                }
	                            })
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "FourthRight" },
	                    React.createElement("img", { src: imgsrc + "branding/fourthS.png", alt: "" })
	                )
	            )
	        );
	    }
	});

	var FifthPing = React.createClass({
	    displayName: "FifthPing",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "FifthPing", id: "index_4" },
	            React.createElement(
	                "div",
	                { className: "content_box" },
	                React.createElement(
	                    "div",
	                    { className: "FifthLeft" },
	                    React.createElement("img", { src: imgsrc + "branding/HK.png", alt: "" })
	                ),
	                React.createElement(
	                    "div",
	                    { className: "FifthRight" },
	                    React.createElement(
	                        "div",
	                        { className: this.props.aa == "true" ? "smallIntro" : "smallIntro_none" },
	                        information[4].smallIntro.map(function (a, b) {
	                            return React.createElement(
	                                "div",
	                                { className: "item_" + b },
	                                React.createElement("img", { src: imgsrc + "branding/layer.png", alt: "" }),
	                                React.createElement(
	                                    "em",
	                                    { className: "information" },
	                                    a
	                                )
	                            );
	                        })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "bigIntro" },
	                        React.createElement(
	                            "div",
	                            { className: "title" },
	                            information[4].bigIntro.title1
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "title" },
	                            information[4].bigIntro.title2
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "detail" },
	                            information[4].bigIntro.detail.map(function (a, b) {
	                                if (b == 0 || b == 1 || b == 2) {
	                                    return React.createElement(
	                                        "em",
	                                        { className: "detail_" + b },
	                                        a,
	                                        React.createElement("em", { className: "circle" })
	                                    );
	                                } else {
	                                    return React.createElement(
	                                        "em",
	                                        { className: "detail_" + b },
	                                        a
	                                    );
	                                }
	                            })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var SixPing = React.createClass({
	    displayName: "SixPing",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "SixPing", id: "index_5" },
	            React.createElement(
	                "div",
	                { className: "content_box" },
	                React.createElement(
	                    "div",
	                    { className: "SixLeft" },
	                    React.createElement(
	                        "div",
	                        { className: this.props.aa == "true" ? "smallIntro" : "smallIntro_none" },
	                        information[5].smallIntro.map(function (a, b) {
	                            return React.createElement(
	                                "div",
	                                { className: "item_" + b },
	                                React.createElement("img", { src: imgsrc + "branding/layer.png", alt: "" }),
	                                React.createElement(
	                                    "em",
	                                    { className: "information" },
	                                    a
	                                )
	                            );
	                        })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "bigIntro" },
	                        React.createElement(
	                            "div",
	                            { className: "title title1" },
	                            information[5].bigIntro.title1
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "title title2" },
	                            information[5].bigIntro.title2
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "detail" },
	                            information[5].bigIntro.detail.map(function (a, b) {
	                                if (b == 1 || b == 3) {
	                                    return React.createElement(
	                                        "em",
	                                        { className: "detail_" + b },
	                                        a,
	                                        React.createElement("em", { className: "circle" })
	                                    );
	                                } else {
	                                    return React.createElement(
	                                        "em",
	                                        { className: "detail_" + b },
	                                        a
	                                    );
	                                }
	                            })
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "SixRight" },
	                    React.createElement("img", { src: imgsrc + "branding/s5.png", alt: "" })
	                )
	            )
	        );
	    }
	});

	var Branding = React.createClass({
	    displayName: "Branding",

	    propTypes: {
	        onChange: React.PropTypes.func.isRequired,
	        active: React.PropTypes.bool,
	        partialVisibility: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])]),
	        delay: React.PropTypes.number,
	        delayedCall: React.PropTypes.bool,
	        containment: containmentPropType,
	        children: React.PropTypes.element,
	        minTopValue: React.PropTypes.number
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            active: true,
	            partialVisibility: false,
	            minTopValue: 0,
	            delay: 1000,
	            delayedCall: false,
	            containment: null,
	            children: React.createElement('span')
	        };
	    },

	    getInitialState: function getInitialState() {
	        return {
	            isVisible: null,
	            visibilityRect: {}
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        if (this.props.active) {
	            this.startWatching();
	        }
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        this.stopWatching();
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (nextProps.active) {
	            this.setState(this.getInitialState());
	            this.startWatching();
	        } else {
	            this.stopWatching();
	        }
	    },

	    startWatching: function startWatching() {
	        if (this.interval) {
	            return;
	        }
	        this.interval = setInterval(this.check, this.props.delay);
	        // if dont need delayed call, check on load ( before the first interval fires )
	        !this.props.delayedCall && this.check();
	    },

	    stopWatching: function stopWatching() {
	        this.interval = clearInterval(this.interval);
	    },

	    /**
	     * Check if the element is within the visible viewport
	     */
	    check: function check() {
	        var el = ReactDOM.findDOMNode(this);
	        var rect;
	        var containmentRect;

	        // if the component has rendered to null, dont update visibility
	        if (!el) {
	            return this.state;
	        }

	        rect = el.getBoundingClientRect();

	        if (this.props.containment) {
	            containmentRect = this.props.containment.getBoundingClientRect();
	        } else {
	            containmentRect = {
	                top: 0,
	                left: 0,
	                bottom: window.innerHeight || document.documentElement.clientHeight,
	                right: window.innerWidth || document.documentElement.clientWidth
	            };
	        }

	        var visibilityRect = {
	            top: rect.top >= containmentRect.top,
	            left: rect.left >= containmentRect.left,
	            bottom: rect.bottom <= containmentRect.bottom,
	            right: rect.right <= containmentRect.right
	        };

	        var fullVisible = visibilityRect.top && visibilityRect.left && visibilityRect.bottom && visibilityRect.right;

	        var isVisible = fullVisible;

	        // check for partial visibility
	        if (this.props.partialVisibility) {
	            var partialVertical = rect.top >= containmentRect.top && rect.top <= containmentRect.bottom || // Top is visible
	            rect.bottom >= containmentRect.top && rect.bottom <= containmentRect.bottom // Bottom is visible
	            || rect.top <= containmentRect.top && rect.bottom >= containmentRect.bottom; // Center is visible


	            var partialHorizontal = rect.left >= containmentRect.left && rect.left <= containmentRect.right || // Left side is visible
	            rect.right >= containmentRect.left && rect.right <= containmentRect.right // Right side is visible
	            || rect.left <= containmentRect.left && rect.right >= containmentRect.right; // Center is visible

	            var partialVisible = partialVertical && partialHorizontal;

	            // account for partial visibility on a single edge
	            if (typeof this.props.partialVisibility === 'string') {
	                partialVisible = visibilityRect[this.props.partialVisibility];
	            }

	            // if we have minimum top visibility set by props, lets check, if it meets the passed value
	            // so if for instance element is at least 200px in viewport, then show it.
	            isVisible = this.props.minTopValue ? partialVisible && rect.top <= containmentRect.bottom - this.props.minTopValue : partialVisible;
	        }

	        var state = this.state;
	        // notify the parent when the value changes
	        if (this.state.isVisible !== isVisible) {
	            state = {
	                isVisible: isVisible,
	                visibilityRect: visibilityRect
	            };
	            this.setState(state);
	            this.props.onChange(isVisible, visibilityRect);
	        }

	        return state;
	    },

	    render: function render() {
	        return React.Children.only(this.props.children);
	    }
	});
	var timer;

	var Content = function (_React$Component) {
	    _inherits(Content, _React$Component);

	    function Content(props) {
	        _classCallCheck(this, Content);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Content).call(this, props));

	        _this.state = {
	            msg_1: "",
	            msg_2: "",
	            msg_3: "",
	            msg_4: "",
	            msg_5: "",
	            msg_6: "",
	            currImg: 0,
	            class: ["curr", "", "", "", "", ""]

	        };
	        return _this;
	    }

	    _createClass(Content, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var that = this;
	            function slide_1(e) {
	                e.preventDefault();
	                var turn = parseInt(e.wheelDelta || -e.detail);
	                if (turn > 0) {
	                    that.setState({ currImg: that.state.currImg > 0 ? that.state.currImg -= 1 : that.state.currImg = 6 });
	                } else if (turn < 0) {
	                    that.setState({ currImg: that.state.currImg < 6 ? that.state.currImg += 1 : that.state.currImg = 0 });
	                }
	            }
	            if (_typeof(document.onmousewheel) == "object") {
	                document.getElementById("containBox").addEventListener("mousewheel", slide_1, false);
	            }
	            if (typeof document.onmousewheel == "undefined") {
	                document.getElementById("containBox").addEventListener("DOMMouseScroll", slide_1, false);
	            }
	        }
	    }, {
	        key: "slide",
	        value: function slide(e) {
	            e.preventDefault();
	            var that = this;
	            that.setState({ currImg: that.state.currImg < 6 ? that.state.currImg += 1 : that.state.currImg = 0 });
	        }
	    }, {
	        key: "changeIndex",
	        value: function changeIndex(index) {
	            this.state.class = [];
	            this.state.class[index] = "curr";
	            this.setState({ class: this.state.class });
	        }
	    }, {
	        key: "index",
	        value: function index(_index) {
	            this.state.currImg = _index;
	            this.changeIndex(_index);
	        }
	    }, {
	        key: "onChange_1",
	        value: function onChange_1(isVisible) {
	            this.setState({
	                msg_1: isVisible ? "true" : "false"

	            });
	        }
	    }, {
	        key: "onChange_2",
	        value: function onChange_2(isVisible) {
	            this.setState({
	                msg_2: isVisible ? "true" : "false"

	            });
	        }
	    }, {
	        key: "onChange_3",
	        value: function onChange_3(isVisible) {
	            this.setState({
	                msg_3: isVisible ? "true" : "false"

	            });
	        }
	    }, {
	        key: "onChange_4",
	        value: function onChange_4(isVisible) {
	            this.setState({
	                msg_4: isVisible ? "true" : "false"
	            });
	        }
	    }, {
	        key: "onChange_5",
	        value: function onChange_5(isVisible) {
	            this.setState({
	                msg_5: isVisible ? "true" : "false"
	            });
	        }
	    }, {
	        key: "onChange_6",
	        value: function onChange_6(isVisible) {
	            this.setState({
	                msg_6: isVisible ? "true" : "false"
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var self = this;
	            return React.createElement(
	                "div",
	                { className: "containBox", id: "containBox", style: { bottom: this.state.currImg == 6 ? "5320px" : this.state.currImg * 980 + "px" } },
	                React.createElement(
	                    "ul",
	                    { className: "index" },
	                    information.map(function (a, b) {
	                        return React.createElement("li", { className: self.state.currImg == b ? "curr" : "", onClick: self.index.bind(self, b) });
	                    })
	                ),
	                React.createElement(
	                    "a",
	                    { href: "", className: "toNext", onClick: this.slide.bind(this), style: { display: this.state.currImg == 6 ? "none" : "block" } },
	                    React.createElement("em", { className: "flashLight" }),
	                    React.createElement("img", { src: imgsrc + "branding/toNext.png", alt: "" })
	                ),
	                React.createElement(
	                    "div",
	                    { className: "foreground" },
	                    React.createElement(
	                        Branding,
	                        {
	                            contaninment: this.props.containment,
	                            onChange: this.onChange_1.bind(this),
	                            minTopValue: this.props.minTopValue,
	                            partialVisibility: this.props.partialVisibility
	                        },
	                        React.createElement(FirstPing, { aa: this.state.msg_1, num: "0" })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "foreground" },
	                    React.createElement(
	                        Branding,
	                        {
	                            contaninment: this.props.containment,
	                            onChange: this.onChange_2.bind(this),
	                            minTopValue: this.props.minTopValue,
	                            partialVisibility: this.props.partialVisibility
	                        },
	                        React.createElement(SecPing, { aa: this.state.msg_2, num: "1" })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "foreground" },
	                    React.createElement(
	                        Branding,
	                        {
	                            contaninment: this.props.containment,
	                            onChange: this.onChange_3.bind(this),
	                            minTopValue: this.props.minTopValue,
	                            partialVisibility: this.props.partialVisibility
	                        },
	                        React.createElement(ThirdPing, { aa: this.state.msg_3, num: "2" })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "foreground" },
	                    React.createElement(
	                        Branding,
	                        {
	                            contaninment: this.props.containment,
	                            onChange: this.onChange_4.bind(this),
	                            minTopValue: this.props.minTopValue,
	                            partialVisibility: this.props.partialVisibility
	                        },
	                        React.createElement(FourthPing, { aa: this.state.msg_4, num: "3" })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "foreground" },
	                    React.createElement(
	                        Branding,
	                        {
	                            contaninment: this.props.containment,
	                            onChange: this.onChange_5.bind(this),
	                            minTopValue: this.props.minTopValue,
	                            partialVisibility: this.props.partialVisibility
	                        },
	                        React.createElement(FifthPing, { aa: this.state.msg_5, num: "4" })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "foreground" },
	                    React.createElement(
	                        Branding,
	                        {
	                            contaninment: this.props.containment,
	                            onChange: this.onChange_6.bind(this),
	                            minTopValue: this.props.minTopValue,
	                            partialVisibility: this.props.partialVisibility
	                        },
	                        React.createElement(SixPing, { aa: this.state.msg_6, num: "5" })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "foot", id: "foot" },
	                    React.createElement(
	                        "div",
	                        { className: "footer" },
	                        React.createElement("img", { src: imgsrc + "branding/footer_1.png", alt: "" })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "exp" },
	                        React.createElement(
	                            "a",
	                            { href: "" },
	                            "立即体验Superbuy"
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "vit" },
	                        React.createElement(
	                            "a",
	                            { href: "" },
	                            "去逛逛大促活动"
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Content;
	}(React.Component);

	Content.defaultProps = {
	    minTopValue: 10,
	    partialVisibility: true
	};

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
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./branding.less", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./branding.less");
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
	exports.push([module.id, "/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\na:hover {\n  cursor: pointer;\n  text-decoration: none;\n}\n.information {\n  font-family: \"Microsoft Yahei\";\n  font-size: 16px;\n  padding-left: 15px;\n  display: inline-block;\n  font-weight: 400;\n}\n@keyframes mymove {\n  0% {\n    opacity: 0;\n  }\n  from,\n  to {\n    transform: translateY(5px);\n  }\n  100% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(30px);\n  }\n}\n@-webkit-keyframes mymove {\n  /*Safari and Chrome*/\n  0% {\n    opacity: 0;\n  }\n  from,\n  to {\n    transform: translateY(5px);\n  }\n  100% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(30px);\n  }\n}\n@keyframes firstmove {\n  0% {\n    bottom: 150px;\n  }\n  25% {\n    bottom: 200px;\n  }\n  50% {\n    bottom: 300px;\n  }\n  75% {\n    bottom: 400px;\n  }\n  100% {\n    bottom: 500px;\n  }\n}\n@-webkit-keyframes change {\n  0% {\n    bottom: 150px;\n  }\n  25% {\n    bottom: 200px;\n  }\n  50% {\n    bottom: 300px;\n  }\n  75% {\n    bottom: 400px;\n  }\n  100% {\n    bottom: 500px;\n  }\n}\n@-moz-keyframes change {\n  0% {\n    bottom: 150px;\n  }\n  25% {\n    bottom: 200px;\n  }\n  50% {\n    bottom: 300px;\n  }\n  75% {\n    bottom: 400px;\n  }\n  100% {\n    bottom: 500px;\n  }\n}\n@keyframes zoomIn {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-moz-keyframes zoomIn {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes zoomIn {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-o-keyframes zoomIn {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-ms-keyframes zoomIn {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  min-width: 780px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.info_1 {\n  position: fixed;\n  top: 200px;\n  right: 10px;\n  color: red;\n}\n.info_2 {\n  position: fixed;\n  top: 300px;\n  right: 10px;\n  color: yellow;\n}\n.info_3 {\n  position: fixed;\n  top: 400px;\n  right: 10px;\n  color: yellow;\n}\n.info_4 {\n  position: fixed;\n  top: 600px;\n  right: 10px;\n  color: red;\n}\n.info_5 {\n  position: fixed;\n  top: 700px;\n  right: 10px;\n  color: yellow;\n}\n.info_6 {\n  position: fixed;\n  top: 800px;\n  right: 10px;\n  color: red;\n}\n.sensor {\n  display: block;\n  width: 50px;\n  height: 50px;\n  background: red;\n  height: 300px;\n  padding-top: 100px;\n}\n.containBox {\n  position: relative;\n  z-index: 2;\n  background: #FFF;\n  width: 100%;\n  min-height: 5894px;\n  transition: all .9s;\n}\n.firstPing {\n  width: 100%;\n  height: 973px;\n  position: relative;\n  margin: 0 auto;\n}\n.firstPing > img {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  height: 980px;\n}\n.firstPing .floatNav {\n  position: absolute;\n  right: 335px;\n  top: 285px;\n  padding: 50px 13px;\n  background-color: #141d33;\n  border-radius: 8px;\n}\n.firstPing .floatNav .nav_focus {\n  background-color: #1056fb;\n}\n.firstPing .floatNav .nav_default {\n  background-color: #363636;\n}\n.firstPing .floatNav > li {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-top: 33px;\n}\n.firstPing .floatNav > li:hover {\n  cursor: pointer;\n}\n.firstPing .floatNav > li:first-child {\n  margin: 0;\n}\n.firstPing .floatNav > li > a {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.firstPing .mainImg {\n  position: absolute;\n  width: 1200px;\n  left: 20%;\n  animation: firstmove 1.3s linear 0s 1;\n  animation-fill-mode: forwards;\n}\n.firstPing .mainImg > img {\n  width: 80%;\n  margin-left: -234px;\n}\n.firstPing .bright {\n  position: absolute;\n  top: 285px;\n  left: 194px;\n}\n.firstPing .bright_none {\n  display: none;\n}\n.firstPing .icon_toBottom {\n  position: absolute;\n  left: 48%;\n  bottom: 71px;\n}\n.SecPing {\n  width: 100%;\n  margin: 0 auto;\n  height: 973px;\n  position: relative;\n  background: #fff url('/cn/source/img/branding/secondBG.png') no-repeat 0 center;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.SecPing .content_box {\n  width: 1200px;\n  margin: 0 auto;\n}\n.SecPing .content_box:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.SecPing .floatNav {\n  position: absolute;\n  right: -22px;\n  top: 285px;\n  padding: 50px 13px;\n  background-color: #141d33;\n  border-radius: 8px;\n}\n.SecPing .floatNav .nav_focus {\n  background-color: #1056fb;\n}\n.SecPing .floatNav .nav_default {\n  background-color: #363636;\n}\n.SecPing .floatNav > li {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-top: 33px;\n}\n.SecPing .floatNav > li:hover {\n  cursor: pointer;\n}\n.SecPing .floatNav > li:first-child {\n  margin: 0;\n}\n.SecPing .floatNav > li > a {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.SecPing .icon_toBottom {\n  position: absolute;\n  left: 48%;\n  bottom: 71px;\n}\n.SecPing .SecLeft,\n.SecPing .SecRight {\n  float: left;\n  height: 910px;\n}\n.SecPing .SecLeft {\n  width: 710px;\n}\n.SecPing .SecLeft .bigIntro {\n  color: #fff;\n}\n.SecPing .SecLeft .bigIntro .title {\n  font-size: 33px;\n  font-weight: 600;\n}\n.SecPing .SecLeft .bigIntro .detail {\n  font-size: 17px;\n  margin-top: 16px;\n  width: 492px;\n}\n.SecPing .SecLeft .bigIntro .detail .circle {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #115ef9;\n  margin: 0 10px;\n}\n.SecPing .SecLeft .topic {\n  color: #1853b1;\n  font-size: 27px;\n  margin-top: 70px;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\n.SecPing .SecLeft .smallIntro {\n  position: relative;\n  font-weight: 600;\n  margin-bottom: 25px;\n}\n.SecPing .SecLeft .smallIntro:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.SecPing .SecLeft .smallIntro > div {\n  padding: 9px 30px 9px 12px;\n  transform-origin: center bottom;\n  background-color: #1853b1;\n  margin-right: 16px;\n  margin-bottom: 12px;\n  border-radius: 8px;\n  float: left;\n}\n.SecPing .SecLeft .smallIntro > div.item_0 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.4s;\n  animation-fill-mode: backwards;\n  padding-right: 18px;\n}\n.SecPing .SecLeft .smallIntro > div.item_1 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.5s;\n  animation-fill-mode: backwards;\n}\n.SecPing .SecLeft .smallIntro > div.item_2 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.6s;\n  animation-fill-mode: backwards;\n  padding-right: 18px;\n}\n.SecPing .SecLeft .smallIntro > div.item_3 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.7s;\n  animation-fill-mode: backwards;\n  width: 348px;\n}\n.SecPing .SecLeft .smallIntro > div.item_4 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.8s;\n  animation-fill-mode: backwards;\n  padding-right: 18px;\n}\n.SecPing .SecLeft .smallIntro > div.item_5 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 1s;\n  animation-fill-mode: backwards;\n}\n.SecPing .SecLeft .smallIntro_none {\n  visibility: hidden;\n  height: 308px;\n}\n.SecPing .SecRight {\n  width: 487px;\n}\n.SecPing .SecRight > img {\n  padding-top: 72px;\n  display: block;\n  margin: 0 auto;\n  width: 493px;\n  height: 733px;\n}\n.ThirdPing {\n  width: 100%;\n  margin: 0 auto;\n  height: 987px;\n  position: relative;\n  background: #fff url('/cn/source/img/branding/thirdBG_03.png') no-repeat 0 center;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.ThirdPing .content_box {\n  width: 1200px;\n  background-size: cover;\n  margin: 0 auto;\n}\n.ThirdPing .content_box:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.ThirdPing .floatNav {\n  position: absolute;\n  right: -22px;\n  top: 285px;\n  padding: 50px 13px;\n  background-color: #141d33;\n  border-radius: 8px;\n}\n.ThirdPing .floatNav .nav_focus {\n  background-color: #1056fb;\n}\n.ThirdPing .floatNav .nav_default {\n  background-color: #363636;\n}\n.ThirdPing .floatNav > li {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-top: 33px;\n}\n.ThirdPing .floatNav > li:hover {\n  cursor: pointer;\n}\n.ThirdPing .floatNav > li:first-child {\n  margin: 0;\n}\n.ThirdPing .floatNav > li > a {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.ThirdPing .icon_toBottom {\n  position: absolute;\n  left: 48%;\n  bottom: 71px;\n}\n.ThirdPing .ThirdLeft,\n.ThirdPing .ThirdRight {\n  float: left;\n  height: 910px;\n}\n.ThirdPing .ThirdLeft {\n  width: 465px;\n  margin-right: 37px;\n}\n.ThirdPing .ThirdLeft > img {\n  padding-top: 72px;\n  display: block;\n  margin-left: 0;\n  width: 465px;\n  height: 710px;\n}\n.ThirdPing .ThirdRight {\n  width: 693px;\n}\n.ThirdPing .ThirdRight .topic {\n  color: #1853b1;\n  font-size: 27px;\n  margin-top: 70px;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\n.ThirdPing .ThirdRight .bigIntro {\n  color: #fff;\n}\n.ThirdPing .ThirdRight .bigIntro .title {\n  font-size: 32px;\n  font-weight: 600;\n}\n.ThirdPing .ThirdRight .bigIntro .detail {\n  font-size: 18px;\n  line-height: 30px;\n  margin-top: 14px;\n}\n.ThirdPing .ThirdRight .bigIntro .detail .detail_1 {\n  display: inline-block;\n  width: 415px;\n}\n.ThirdPing .ThirdRight .bigIntro .detail .detail_3 {\n  display: inline-block;\n  width: 395px;\n}\n.ThirdPing .ThirdRight .bigIntro .detail .circle {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #115ef9;\n  margin: 0 10px;\n}\n.ThirdPing .ThirdRight .smallIntro {\n  position: relative;\n  font-weight: 600;\n  margin-bottom: 25px;\n  line-height: 1;\n}\n.ThirdPing .ThirdRight .smallIntro:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.ThirdPing .ThirdRight .smallIntro > div {\n  padding: 9px 10px ;\n  transform-origin: center bottom;\n  background-color: #1853b1;\n  margin-right: 16px;\n  margin-bottom: 12px;\n  border-radius: 8px;\n  font-weight: 600;\n  float: left;\n}\n.ThirdPing .ThirdRight .smallIntro > div:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.ThirdPing .ThirdRight .smallIntro > div .img {\n  float: left;\n  padding-top: 10px;\n}\n.ThirdPing .ThirdRight .smallIntro > div .information {\n  float: left;\n}\n.ThirdPing .ThirdRight .smallIntro > div.item_0 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.4s;\n  animation-fill-mode: backwards;\n  width: 271px;\n}\n.ThirdPing .ThirdRight .smallIntro > div.item_0 .information {\n  width: 177px;\n}\n.ThirdPing .ThirdRight .smallIntro > div.item_1 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.9s;\n  animation-fill-mode: backwards;\n  width: 316px;\n}\n.ThirdPing .ThirdRight .smallIntro > div.item_1 .information {\n  width: 253px;\n}\n.ThirdPing .ThirdRight .smallIntro > div.item_2 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.6s;\n  animation-fill-mode: backwards;\n  width: 300px;\n}\n.ThirdPing .ThirdRight .smallIntro > div.item_2 .information {\n  width: 182px;\n}\n.ThirdPing .ThirdRight .smallIntro > div.item_3 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.7s;\n  animation-fill-mode: backwards;\n  width: 289px;\n}\n.ThirdPing .ThirdRight .smallIntro > div.item_3 .information {\n  width: 242px;\n}\n.ThirdPing .ThirdRight .smallIntro > div.item_4 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.8s;\n  animation-fill-mode: backwards;\n}\n.ThirdPing .ThirdRight .smallIntro > div.item_4 .img {\n  padding-top: 0;\n}\n.ThirdPing .ThirdRight .smallIntro_none {\n  visibility: hidden;\n  height: 308px;\n}\n.FourthPing {\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  height: 980px;\n  background: #fff url('/cn/source/img/branding/fourthBG_03.png') no-repeat 0 center;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.FourthPing .content_box {\n  width: 1200px;\n  margin: 0 auto;\n}\n.FourthPing .content_box:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.FourthPing .floatNav {\n  position: absolute;\n  right: -22px;\n  top: 285px;\n  padding: 50px 13px;\n  background-color: #141d33;\n  border-radius: 8px;\n}\n.FourthPing .floatNav .nav_focus {\n  background-color: #1056fb;\n}\n.FourthPing .floatNav .nav_default {\n  background-color: #363636;\n}\n.FourthPing .floatNav > li {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-top: 33px;\n}\n.FourthPing .floatNav > li:hover {\n  cursor: pointer;\n}\n.FourthPing .floatNav > li:first-child {\n  margin: 0;\n}\n.FourthPing .floatNav > li > a {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.FourthPing .icon_toBottom {\n  position: absolute;\n  left: 48%;\n  bottom: 71px;\n}\n.FourthPing .FourthLeft,\n.FourthPing .FourthRight {\n  float: left;\n  height: 910px;\n}\n.FourthPing .FourthLeft {\n  width: 630px;\n}\n.FourthPing .FourthLeft .topic {\n  color: #1853b1;\n  font-size: 27px;\n  margin-top: 70px;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\n.FourthPing .FourthLeft .bigIntro {\n  color: #fff;\n}\n.FourthPing .FourthLeft .bigIntro .title {\n  font-size: 32px;\n  font-weight: 600;\n}\n.FourthPing .FourthLeft .bigIntro .detail {\n  font-size: 18px;\n  margin-top: 13px;\n}\n.FourthPing .FourthLeft .bigIntro .detail .detail_1 {\n  display: inline-block;\n  width: 360px;\n}\n.FourthPing .FourthLeft .bigIntro .detail .circle {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #115ef9;\n  margin: 0 10px;\n}\n.FourthPing .FourthLeft .smallIntro {\n  position: relative;\n  margin-bottom: 45px;\n}\n.FourthPing .FourthLeft .smallIntro > div {\n  padding: 9px 10px ;\n  transform-origin: center bottom;\n  background-color: #1853b1;\n  margin-right: 16px;\n  margin-bottom: 12px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.FourthPing .FourthLeft .smallIntro > div .img {\n  float: left;\n  padding-top: 10px;\n}\n.FourthPing .FourthLeft .smallIntro > div .information {\n  float: left;\n}\n.FourthPing .FourthLeft .smallIntro > div:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.FourthPing .FourthLeft .smallIntro > div.item_0 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.4s;\n  animation-fill-mode: backwards;\n}\n.FourthPing .FourthLeft .smallIntro > div.item_0 .information {\n  width: 455px;\n}\n.FourthPing .FourthLeft .smallIntro > div.item_1 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.5s;\n  animation-fill-mode: backwards;\n}\n.FourthPing .FourthLeft .smallIntro > div.item_1 .information {\n  width: 407px;\n}\n.FourthPing .FourthLeft .smallIntro > div.item_2 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.6s;\n  animation-fill-mode: backwards;\n}\n.FourthPing .FourthLeft .smallIntro > div.item_2 .information {\n  width: 437px;\n}\n.FourthPing .FourthLeft .smallIntro_none {\n  visibility: hidden;\n  height: 308px;\n}\n.FourthPing .FourthRight {\n  width: 488px;\n}\n.FourthPing .FourthRight > img {\n  padding-top: 72px;\n  display: block;\n  margin: 0 auto;\n  width: 488px;\n  height: 750px;\n}\n.FifthPing {\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  height: 980px;\n  background: #fff url('/cn/source/img/branding/fifthBG_04.png') no-repeat 0 center;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.FifthPing .content_box {\n  width: 1200px;\n  margin: 0 auto;\n}\n.FifthPing .content_box:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.FifthPing .floatNav {\n  position: absolute;\n  right: -22px;\n  top: 285px;\n  padding: 50px 13px;\n  background-color: #141d33;\n  border-radius: 8px;\n}\n.FifthPing .floatNav .nav_focus {\n  background-color: #1056fb;\n}\n.FifthPing .floatNav .nav_default {\n  background-color: #363636;\n}\n.FifthPing .floatNav > li {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-top: 33px;\n}\n.FifthPing .floatNav > li:hover {\n  cursor: pointer;\n}\n.FifthPing .floatNav > li:first-child {\n  margin: 0;\n}\n.FifthPing .floatNav > li > a {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.FifthPing .icon_toBottom {\n  position: absolute;\n  left: 48%;\n  bottom: 71px;\n}\n.FifthPing .FifthLeft,\n.FifthPing .FifthRight {\n  float: left;\n  height: 910px;\n}\n.FifthPing .FifthLeft {\n  width: 500px;\n}\n.FifthPing .FifthLeft > img {\n  padding-top: 72px;\n  display: block;\n  margin-left: 0;\n  width: 503px;\n  height: 779px;\n}\n.FifthPing .FifthRight {\n  width: 630px;\n}\n.FifthPing .FifthRight .bigIntro {\n  color: #fff;\n  margin-top: 48px;\n}\n.FifthPing .FifthRight .bigIntro .title {\n  font-size: 32px;\n  font-weight: 600;\n}\n.FifthPing .FifthRight .bigIntro .detail {\n  font-size: 18px;\n  line-height: 30px;\n  margin-top: 10px;\n}\n.FifthPing .FifthRight .bigIntro .detail .circle {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #115ef9;\n  margin: 0 10px;\n}\n.FifthPing .FifthRight .smallIntro {\n  position: relative;\n  margin-top: 144px;\n}\n.FifthPing .FifthRight .smallIntro > div {\n  padding: 9px 10px ;\n  transform-origin: center bottom;\n  background-color: #1853b1;\n  margin-right: 16px;\n  margin-bottom: 12px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.FifthPing .FifthRight .smallIntro > div.item_0 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.4s;\n  animation-fill-mode: backwards;\n}\n.FifthPing .FifthRight .smallIntro > div.item_0 img {\n  vertical-align: baseline;\n}\n.FifthPing .FifthRight .smallIntro > div.item_0 .information {\n  width: 534px;\n}\n.FifthPing .FifthRight .smallIntro_none {\n  visibility: hidden;\n  height: 308px;\n}\n.SixPing {\n  width: 100%;\n  margin: 0 auto;\n  height: 980px;\n  position: relative;\n  background: #fff url('/cn/source/img/branding/sixthBG_04.png') no-repeat 0 center;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.SixPing .content_box {\n  width: 1200px;\n  margin: 0 auto;\n}\n.SixPing .content_box:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.SixPing .floatNav {\n  position: absolute;\n  right: -22px;\n  top: 285px;\n  padding: 50px 13px;\n  background-color: #141d33;\n  border-radius: 8px;\n}\n.SixPing .floatNav .nav_focus {\n  background-color: #1056fb;\n}\n.SixPing .floatNav .nav_default {\n  background-color: #363636;\n}\n.SixPing .floatNav > li {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-top: 33px;\n}\n.SixPing .floatNav > li:hover {\n  cursor: pointer;\n}\n.SixPing .floatNav > li:first-child {\n  margin: 0;\n}\n.SixPing .floatNav > li > a {\n  display: block;\n  width: 10px;\n  height: 10px;\n}\n.SixPing .icon_toBottom {\n  position: absolute;\n  left: 48%;\n  bottom: 71px;\n}\n.SixPing .SixLeft,\n.SixPing .SixRight {\n  float: left;\n  height: 910px;\n}\n.SixPing .SixLeft {\n  width: 700px;\n}\n.SixPing .SixLeft .bigIntro {\n  color: #fff;\n}\n.SixPing .SixLeft .bigIntro .title {\n  font-size: 32px;\n  font-weight: 600;\n}\n.SixPing .SixLeft .bigIntro .title1 {\n  margin-top: 30px;\n}\n.SixPing .SixLeft .bigIntro .title2 {\n  margin-bottom: 13px;\n}\n.SixPing .SixLeft .bigIntro .detail {\n  font-size: 18px;\n  line-height: 30px;\n}\n.SixPing .SixLeft .bigIntro .detail .detail_0 {\n  display: inline-block;\n  width: 608px;\n}\n.SixPing .SixLeft .bigIntro .detail .detail_2 {\n  display: inline-block;\n  width: 348px;\n}\n.SixPing .SixLeft .bigIntro .detail .detail_4 {\n  display: inline-block;\n  width: 318px;\n}\n.SixPing .SixLeft .bigIntro .detail .circle {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #115ef9;\n  margin: 0 10px;\n}\n.SixPing .SixLeft .smallIntro {\n  position: relative;\n}\n.SixPing .SixLeft .smallIntro > div {\n  padding: 9px 10px ;\n  transform-origin: center bottom;\n  background-color: #1853b1;\n  margin-right: 16px;\n  margin-bottom: 12px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.SixPing .SixLeft .smallIntro > div.item_0 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.4s;\n  animation-fill-mode: backwards;\n}\n.SixPing .SixLeft .smallIntro > div.item_0 img {\n  vertical-align: baseline;\n}\n.SixPing .SixLeft .smallIntro > div.item_0 .information {\n  display: inline-block;\n  width: 529px;\n}\n.SixPing .SixLeft .smallIntro > div.item_1 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.5s;\n  animation-fill-mode: backwards;\n}\n.SixPing .SixLeft .smallIntro > div.item_2 {\n  animation: zoomIn 0.2s cubic-bezier(0, 0.25, 0.08, 1) 0.6s;\n  animation-fill-mode: backwards;\n}\n.SixPing .SixLeft .smallIntro_none {\n  visibility: hidden;\n  height: 308px;\n}\n.SixPing .SixRight {\n  width: 488px;\n}\n.SixPing .SixRight > img {\n  padding-top: 72px;\n  display: block;\n  margin: 0 auto;\n  width: 488px;\n  height: 742px;\n}\n.foot {\n  width: 100%;\n  height: 434px;\n  background: #fff url('/cn/source/img/branding/footer_bg.png') no-repeat 0 center;\n  position: relative;\n}\n.foot .footer {\n  margin: 0 auto;\n  width: 432px;\n  height: 369px;\n}\n.foot .footer > img {\n  width: 100%;\n  margin-top: -80px;\n}\n.foot .exp {\n  position: absolute;\n  top: 260px;\n  left: 459px;\n  width: 378px;\n  height: 90px;\n  display: table;\n  text-align: center;\n  background-color: #2b78f3;\n  border-radius: 10px;\n}\n.foot .exp > a {\n  display: table-cell;\n  vertical-align: middle;\n  color: #fff;\n  font-size: 20px;\n}\n.foot .vit {\n  position: absolute;\n  top: 260px;\n  right: 437px;\n  width: 378px;\n  height: 90px;\n  display: table;\n  text-align: center;\n  background-color: #fef135;\n  border-radius: 10px;\n}\n.foot .vit > a {\n  display: table-cell;\n  vertical-align: middle;\n  color: #000;\n  font-size: 20px;\n}\n.index {\n  position: fixed;\n  top: 26vh;\n  right: 7vh;\n  width: 50px;\n  background-color: #141d33;\n  padding: 50px 13px;\n  border-radius: 10px;\n  z-index: 10;\n}\n.index > li {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #363636;\n  margin: 0 auto;\n  margin-bottom: 33px;\n}\n.index > li:hover {\n  cursor: pointer;\n}\n.index > li.curr {\n  background-color: #1056fb;\n}\n.index > li:last-child {\n  margin-bottom: 0;\n}\n.toNext {\n  display: block;\n  position: fixed;\n  top: 910px;\n  left: 965px;\n  z-index: 10;\n}\n.toNext > em {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 45px;\n  animation: change 2s infinite;\n  border-radius: 15px;\n}\n.toNext > img {\n  display: block;\n  margin: 0 auto;\n  width: 30px;\n  height: 60px;\n}\n@keyframes change {\n  from {\n    box-shadow: 0 0 9px #333;\n  }\n  50% {\n    box-shadow: 0 0 18px #fff;\n  }\n  to {\n    box-shadow: 0 0 9px #333;\n  }\n}\n", ""]);

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