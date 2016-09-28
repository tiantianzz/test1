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

	/* your logic code */
	var Content = function (_React$Component) {
	    _inherits(Content, _React$Component);

	    function Content() {
	        _classCallCheck(this, Content);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Content).apply(this, arguments));
	    }

	    _createClass(Content, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "container", id: "top" },
	                React.createElement(
	                    "div",
	                    { className: "banner" },
	                    React.createElement("img", { src: "../faq/img/images/banner_02.jpg", alt: "Know SuperBuy in 15 Questions" })
	                ),
	                React.createElement(
	                    "div",
	                    { className: "return_icon" },
	                    React.createElement(
	                        "a",
	                        { href: "#top" },
	                        React.createElement("img", { src: "../faq/img/images/icon.jpg", alt: "" })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "content" },
	                    React.createElement(
	                        "div",
	                        { className: "questions" },
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                "a",
	                                { href: "#ans_01" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        "01"
	                                    )
	                                ),
	                                React.createElement("i", { className: "clear" }),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "什么是代购服务？流程是怎样的？如何收费呢？"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                "a",
	                                { href: "#ans_02" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        "02"
	                                    )
	                                ),
	                                React.createElement("i", { className: "clear" }),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "为什么要买中国的东西？感觉有很多假冒伪劣啊!"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                "a",
	                                { href: "#ans_03" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        "03"
	                                    )
	                                ),
	                                React.createElement("i", { className: "clear" }),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "市场上有很多代购网站，为什么我要选择你们？"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                "a",
	                                { href: "#ans_04" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        "04"
	                                    )
	                                ),
	                                React.createElement("i", { className: "clear" }),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "淘宝现在也有海外版，可以直接寄送到海外了，我在淘宝买就可以了？"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                "a",
	                                { href: "#ans_05" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        "05"
	                                    )
	                                ),
	                                React.createElement("i", { className: "clear" }),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "在网上跨境买东西我总是担心买回来的商品有问题，或者快递服务出问题，你们只是一个代购商，会对这些情况负责吗？ "
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                "a",
	                                { href: "#ans_06" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        "06"
	                                    )
	                                ),
	                                React.createElement("i", { className: "clear" }),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "我想买很大型的东西，但通过普通快递费用很高，你们能给出更便宜的价格吗？"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                "a",
	                                { href: "#ans_07" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        "07"
	                                    )
	                                ),
	                                React.createElement("i", { className: "clear" }),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "我想买食品、液体、电器等等，都能寄吗？"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                "a",
	                                { href: "#ans_08" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        "08"
	                                    )
	                                ),
	                                React.createElement("i", { className: "clear" }),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "我对中国的商品不太了解，怕买贵了或买的不合适，你们会帮忙吗？"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                "a",
	                                { href: "#ans_09" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        "09"
	                                    )
	                                ),
	                                React.createElement("i", { className: "clear" }),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "我有自己的生意，可以跟你们合作吗？"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                "a",
	                                { href: "#ans_10" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        "10"
	                                    )
	                                ),
	                                React.createElement("i", { className: "clear" }),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "你们除了代购以外还能提供其他涉及跨境的服务吗？我什么事都能找你们吗？"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                "a",
	                                { href: "#ans_11" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        "11"
	                                    )
	                                ),
	                                React.createElement("i", { className: "clear" }),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "我对你们的某次服务非常生气，怎样才能让我平静下来？"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                "a",
	                                { href: "#ans_12" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    React.createElement(
	                                        "i",
	                                        null,
	                                        "12"
	                                    )
	                                ),
	                                React.createElement("i", { className: "clear" }),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "你们什么服务费用都不收怎么维持啊？我可以捐钱给你们吗？"
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "answers" },
	                        React.createElement(
	                            "div",
	                            { id: "ans_01" },
	                            React.createElement(
	                                "div",
	                                { className: "title" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "01"
	                                ),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "什么是代购服务？流程是怎样的？如何收费呢？"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "代购服务是我们的核心服务，由我们按照用户指示为其在中国购买商品，并提供购买建议、质量检验、存储、寄送、售后服务等一条龙服务，确保用户收到满意的商品，使用我们的代购服务会比自己购买更简单轻松，且有更好的结果。"
	                                ),
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "用户只需要下载我们的App或者登陆我们的网页，就可以购买自己想要的商品，还可以以当地货币支付。代购流程如下："
	                                ),
	                                React.createElement(
	                                    "table",
	                                    { cellPadding: "0", cellSpacing: "0" },
	                                    React.createElement(
	                                        "tr",
	                                        null,
	                                        React.createElement(
	                                            "td",
	                                            null,
	                                            "01"
	                                        ),
	                                        React.createElement(
	                                            "td",
	                                            null,
	                                            "使用我们的app或登录我们的网站挑选需要我们代购的商品，或提供商品具体信息，我们将为您采购。-- 在这一步我们会根据商品给出有关邮寄和购买的提示与建议，甚至协助您寻找更理想的商品 "
	                                        )
	                                    ),
	                                    React.createElement(
	                                        "tr",
	                                        null,
	                                        React.createElement(
	                                            "td",
	                                            null,
	                                            "02"
	                                        ),
	                                        React.createElement(
	                                            "td",
	                                            null,
	                                            "商品到达我们的仓库，我们将为您检验并入库。-- 您可以使用我们的仓库免费保存6个月"
	                                        )
	                                    ),
	                                    React.createElement(
	                                        "tr",
	                                        null,
	                                        React.createElement(
	                                            "td",
	                                            null,
	                                            "03"
	                                        ),
	                                        React.createElement(
	                                            "td",
	                                            null,
	                                            "您在自己觉得合适的时间指示我们将商品寄送给您。-- 如果您不赶时间可以多集齐一些商品寄送，比较节省运费。"
	                                        )
	                                    ),
	                                    React.createElement(
	                                        "tr",
	                                        null,
	                                        React.createElement(
	                                            "td",
	                                            null,
	                                            "04"
	                                        ),
	                                        React.createElement(
	                                            "td",
	                                            null,
	                                            "无论商品是在途还是已经送到您的手上，我们的客户服务都会对您负责，协助您解决任何售后问题 ",
	                                            React.createElement("br", null),
	                                            "0服务费是我们的服务理念，客户只需要支付商品费与运费即可，无需支付额外的服务费。但这不代表我们会在服务质量上有所妥协，恰恰相反我们的目标是提供业内最优质的服务，我们欢迎用户随时将我们与其他同业的收费以及服务质量进行比较  (",
	                                            React.createElement(
	                                                "a",
	                                                { href: "http://www.dotdotbuy.com/html/about/pages/compare.html", target: "_blank" },
	                                                "点击查看对比"
	                                            ),
	                                            ")."
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { id: "ans_02" },
	                            React.createElement(
	                                "div",
	                                { className: "title" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "02"
	                                ),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "为什么要买中国的东西？感觉有很多假冒伪劣啊!"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "我们的专家服务队会给我们的客户提供更加专业的建议和推荐，而且我们也会检测商品质量，对有疑问的商品会在寄送前及时与用户沟通确认并协助用户直接进行退还，尽可能的避免用户收到预期之外的商品而浪费时间与金钱。另外也因为随着中国经济发展，生活中越来越多有趣、有特色、有质量的商品都是来自中国。"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { id: "ans_03" },
	                            React.createElement(
	                                "div",
	                                { className: "title" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "03"
	                                ),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "市场上有很多代购网站，为什么我要选择你们？"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "SuperBuy的创始人其实也是市值超过2000亿美金的腾讯控股创办人之一，SuperBuy团队的理想是打造最好的购物服务，所以首先能够有强大的研发实力推出非常好用的产品，并且有很多首创的用户受惠措施，比如完全免服务费、7x24小时客户服务、最优汇率承诺、意外赔付承诺等，我们坚持将自己与同行的对比在网站公开，并直接显示同行的名称方便用户核实，非常透明。",
	                                    React.createElement("br", null),
	                                    "由此就可以看出我们对自己的产品和服务多么有自信。 费用低又服务好，你可能不会相信，但这就是一个有理想的团队所打造的真实结果，因此SuperBuy在网络上的用户口碑也非常好，非常值得尝试。"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { id: "ans_04" },
	                            React.createElement(
	                                "div",
	                                { className: "title" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "04"
	                                ),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "淘宝现在也有海外版，可以直接寄送到海外了，我在淘宝买就可以了？"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "淘宝只是一个平台，是单个卖家的商品直发海外，而我们是一个服务者。淘宝跟我们最大的差异是以下三点： 验货服务，合并运送，与售后的保障。",
	                                    React.createElement("br", null),
	                                    "我们为客户提供验货服务从而减低客户退货或不满意的问题。也可以将多个商家的不同商品拆除外包装入库，并一起打包寄往海外，节省大笔包裹运费。最后我们对用户遇到的商品和物流问题都会负责，提供细致的售后客户服务，这也是淘宝无法提供的。总之我们不像淘宝只是一个提供买卖双方交易的平台，而是对买方进行服务和负责，是用户可以依赖的朋友。"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { id: "ans_05" },
	                            React.createElement(
	                                "div",
	                                { className: "title" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "05"
	                                ),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "在网上跨境买东西我总是担心买回来的商品有问题，或者快递服务出问题，你们只是一个代购商，会对这些情况负责吗？"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "正如前面所说，SuperBuy不只是完成代购这个行为，还会提供强有力的售后保障服务，包括商品质量问题和物流问题。我们不会像一般平台那样把责任推给卖家和物流公司，我们是客户可以依赖的朋友，我们独家提供7x24小时客户服务，专业的中英文客服团队会为你认真跟进任何问题，直到您的问题解决为止，用户至上是我们的宗旨。"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { id: "ans_06" },
	                            React.createElement(
	                                "div",
	                                { className: "title" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "06"
	                                ),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "我想买很大型的东西，但通过普通快递费用很高，你们能给出更便宜的价格吗？"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "当然可以，我们有合作的物流商，比如说我们已经和DHL签订了大件服务，并可提供海运服务，我们对任何大件寄送都会给出特别方案，详情请看 ",
	                                    React.createElement(
	                                        "a",
	                                        { href: "", target: "_blank" },
	                                        "大件寄送"
	                                    ),
	                                    "通过我们邮寄，可以为您推荐最合适物流方式，以更便宜的价格寄出。"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { id: "ans_07" },
	                            React.createElement(
	                                "div",
	                                { className: "title" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "07"
	                                ),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "我想买食品、液体、电器等等，都能寄吗？"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "不用担心，只要是合法的商品我们会尽可能的给您提供寄送帮助。一些特殊商品会因为国家不同而有不同限制，详情您可以咨询客服。"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { id: "ans_08" },
	                            React.createElement(
	                                "div",
	                                { className: "title" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "08"
	                                ),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "我对中国的商品不太了解，怕买贵了或买的不合适，你们会帮忙吗？"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "当然可以，您可以将您购买需求告知我们，我们 ",
	                                    React.createElement(
	                                        "a",
	                                        { href: "http://www.dotdotbuy.com/account/expertservice/expert-question\n", target: "_blank" },
	                                        "专家服务"
	                                    ),
	                                    "会为您选购国内网站信誉好、价格实惠的同类商品。"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { id: "ans_09" },
	                            React.createElement(
	                                "div",
	                                { className: "title" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "09"
	                                ),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "我有自己的生意，可以跟你们合作吗？"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "当然可以，如果您有合作意向，可以访问我们的 ",
	                                    React.createElement(
	                                        "a",
	                                        { href: "", target: "_blank" },
	                                        "大客户专页"
	                                    ),
	                                    "，我们市场部的同事将与您沟通，希望合作愉快！"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { id: "ans_10" },
	                            React.createElement(
	                                "div",
	                                { className: "title" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "10"
	                                ),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "你们除了代购以外还能提供其他涉及跨境的服务吗？我什么事都能找你们吗？"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                "是的，我们现在还提供全球旅游门票订购和个性化旅游服务。而且不仅于此，我们的跨国团队中有各行各业的资深人士，并且拥有多个国家的合作者，如果您有其他跨境的需求或想法，如果在中国寻找一个商业机会、在马来西亚为自己建造一座专业天文台、或者不知道某个商品能在哪个国家买到，都可以跟我们联系，也许我们能提供协助，我们的目标是成为用户在遇到跨国需求时可依赖的朋友。"
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { id: "ans_11" },
	                            React.createElement(
	                                "div",
	                                { className: "title" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "11"
	                                ),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "我对你们的某次服务非常生气，怎样才能让我平静下来？"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "如果您对我们的服务有不满意的地方，可以随时联系我们的24小时在线客服，将您的问题反馈给我们。 当然，您也可以直接联系我们的CEO（ceo@superbuy.com），直接表达您的用户体验，因为我们的理念是用户至上，所以我们绝对不会接受自己的服务让用户感觉不快，一定会坚持聆听和彻底解决用户遇到的问题。"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { id: "ans_12" },
	                            React.createElement(
	                                "div",
	                                { className: "title" },
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "12"
	                                ),
	                                React.createElement(
	                                    "i",
	                                    null,
	                                    "你们什么服务费用都不收怎么维持啊？我可以捐钱给你们吗？"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "目前我们的想法就是为用户提供最优质的服务，我们坚信当越来越多的用户认同我们的时候，我们一定会获得回报。您能留下来并向我们给出意见和建议，以及把我们介绍给您的亲朋好友就是对我们最大的回报与感谢。"
	                                )
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
	var content = ReactDOM.render(React.createElement(Wrap, { content: Content }), document.body);

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
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./faq.less", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./faq.less");
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
	exports.push([module.id, "/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\n/* your business less */\nhtml,\nbody,\ndiv,\naddress,\niframe,\nul,\nol,\ndl,\ndt,\ndd,\nli,\ndl,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\ntable,\ncaption,\nth,\ntd,\nform,\nlegend,\nfieldset,\ninput,\nbutton,\nselect,\ntextarea,\np {\n  margin: 0;\n  padding: 0;\n  font-style: normal;\n  font-family: \"Source Sans Pro\", \"Microsoft Yahei\", arial, sans-serif;\n  font-size: 18px;\n}\nol,\nul,\nli {\n  list-style-type: none;\n}\nem,\ni {\n  font-style: normal;\n}\n.li-ell {\n  word-break: keep-all;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\nselect,\ninput,\nimg {\n  vertical-align: middle;\n}\nimg,\niframe,\nfieldset {\n  border: 0;\n}\nbody {\n  color: #e4eafa;\n  background: #474b56;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.clear {\n  clear: both;\n  width: 100%;\n  overflow: hidden;\n  height: 0;\n}\n.clear-inlineblock-gap {\n  font-size: 0;\n}\n.fl {\n  float: left;\n}\n.fr {\n  float: right;\n}\na {\n  text-decoration: none;\n  outline: none;\n}\na:hover {\n  text-decoration: none;\n  cursor: pointer;\n}\n.container .banner {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n.container .return_icon {\n  position: fixed;\n  right: 235px;\n  top: 568px;\n}\n.content {\n  width: 1200px;\n  margin: 0 auto;\n  margin-top: 74px;\n}\n.content .questions {\n  margin-bottom: 128px;\n}\n.content .questions > div {\n  width: 100%;\n  height: 88px;\n  display: table;\n  text-transform: none;\n}\n.content .questions > div:first-child {\n  border: none;\n}\n.content .questions > div:last-child {\n  border-bottom: 1px dashed #565a65;\n}\n.content .questions > div > a {\n  color: #f4f1fa;\n  line-height: 1;\n  display: table-cell;\n  vertical-align: middle;\n  transition: all 0.3s ease 0s;\n  border-bottom: 1px dashed #565a65;\n  position: relative;\n  padding-left: 9px;\n}\n.content .questions > div > a:hover {\n  background: none repeat scroll 0 0#303440;\n  background-size: 120%;\n  font-weight: 500;\n  color: #f4f1fa;\n  border: none;\n}\n.content .questions > div > a em {\n  float: left;\n  display: table;\n  height: 35px;\n  z-index: 100;\n  position: relative;\n  bottom: 12px;\n  transform: rotate(40deg);\n  border-right: 1px solid #f4f1fa;\n  text-align: right;\n  right: 9px;\n}\n.content .questions > div > a em i {\n  display: table-cell;\n  vertical-align: middle;\n  transform: rotate(320deg);\n}\n.content .answers {\n  margin-bottom: 198px;\n}\n.content .answers > div {\n  padding-bottom: 80px;\n  margin-top: 40px;\n  border-bottom: 1px solid #565a65;\n}\n.content .answers > div .title {\n  margin-bottom: 40px;\n  font-size: 26px;\n  font-family: \"Source Sans Pro Light\";\n  color: #fff;\n}\n.content .answers > div .title em {\n  margin-right: 11px;\n}\n.content .answers > div .detail {\n  font-family: \"Source Sans Pro Light\";\n  color: #cad6f6;\n}\n.content .answers > div .detail > p {\n  font-family: \"Source Sans Pro Light\";\n}\n.content .answers > div .detail em {\n  display: block;\n  margin-top: 50px;\n}\n.content .answers > div .detail table tr td {\n  padding-top: 28px;\n  vertical-align: top;\n}\n.content .answers > div .detail table tr td:last-child {\n  padding-left: 11px;\n  font-family: \"Source Sans Pro Light\";\n}\n", ""]);

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