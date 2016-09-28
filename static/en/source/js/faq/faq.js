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
	                                    "What is 'Shopping Agent Service'? How does it work? How do you charge it?"
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
	                                    "Why Chinese products as there are loads fake-branded ones out the market?"
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
	                                    "There are so many other online sales service and plus many other shopping agents, why SuperBuy?"
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
	                                    "Taobao also has its overseas version where items can be shipped to all around the world, no need to use other shopping agent?"
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
	                                    "Product quality is always a worrying issue via online shopping platform,especially delivery issue. As a shopping agent,would you take these responsibilities? "
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
	                                    "I would like to buy a huge item, but the standard delivery is expensive,do you have other shipping options for me?"
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
	                                    "I would like to buy food,liquid,electronic products,etc.,would that be possible to ship?"
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
	                                    "I'm not familiar with Chinese products in terms of price and quality,would you able to help?"
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
	                                    "I'm an entrepreneur,how can we cooperate?"
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
	                                    "Apart from the Shopping Agent Service,what else services do you provide? "
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
	                                    "I'm not happy with your services, what can you do to calm me down?"
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
	                                    "As you don't charge for any services fee, how can you run your business? Can I donate some money to you? "
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
	                                    "What is 'Shopping Agent Service'? How does it work? How do you charge it?"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "Shopping Agent Service is our cord service. We purchase items from China to our customers based on customers’ wants and instructions. In addition, we provide services for the whole process from recommendation in purchasing, quality inspection, storage, delivery and after sales services to ensure our customers receive satisfied items. The better shopping experience will be gained by using our Shopping Agent service."
	                                ),
	                                React.createElement(
	                                    "em",
	                                    null,
	                                    "Through SuperBuy’s website or smartphone app, you can get what you want by making payments with local currency. The processes is shown as below:"
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
	                                            "Use our App or login to our website to search the items you would like us to purchase for you by providing items details. In this step, we will provide some related information,such as delivery or purchase tip/ recommendations,or even to assist you to find the better options. "
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
	                                            "Once the items have arrived to our warehouse, we will inspect the items quality for you and store them in our warehouse. You have up to 6 months free storage to store your items."
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
	                                            "You could pick a suitable time for delivery and remind us to deliver your items to you. If you do not need those items immediately, we recommend you to stock more items and deliver them into one shipment in order to save delivery fee."
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
	                                            "No matter whether the items are on its way or arrived to your place, our customer service will take responsibilities to assist you regarding to any after-sales ",
	                                            React.createElement("br", null),
	                                            "0 service fee is our service philosophy. Customers just need to pay the items costs and delivery fee, no other additional service fee is added. However, it does not mean our service quality would be compromised. In contrast, our goal is to provide the best customer service in this field. Therefore, we welcome our customers to compare us with other service providers in the market in terms of service quality and charges (",
	                                            React.createElement(
	                                                "a",
	                                                { href: "", target: "_blank" },
	                                                "Comparison of other service providers"
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
	                                    "Why Chinese products as there are loads fake-branded ones out the market?"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "First of all,the most important reason is we have our expert team to recommend and inspect the products quality for you to make your shopping experience safer and easier. Our experts will communicate with customers before any questionable items have been sent out in terms of any returns or refunds. We will try our best to avoid any unsatisfied results occurred, when receiving unexpected products,in terms of money and time wasting. In addition,with the rapid development of Chinese economy,it is very common to see more appealing,innovative and quality products made in China."
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
	                                    "There are so many other online sales service and plus many other shopping agents, why SuperBuy?"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "The founder of SuperBuy is also one of the founders of Tencent Holdings Limited,a Chinese investment holding company with market value of over US$200 billion. With the vision to create the best shopping services,the SuperBuy crew have utilizes their strength in R&D to introduce amazing products, as well as implementing pioneering measures beneficial to our users. For example, free service charge, 24-hour customer services, best foreign exchange rate promise, promise compensation in damaged goods and more. SuperBuy also has high transparency, in a way that we insist to display companies of the same industry for making contrast and users can therefore gain greater access to information."
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
	                                    "Taobao also has its overseas version where items can be shipped to all around the world, no need to use other shopping agent?"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "Taobao is only an e-commerce platform for a single seller to sell their products overseas. In contrast, we are a service provider. The most obvious distinctions are detailed inspection services, combined delivery services, and after-sales services.",
	                                    React.createElement("br", null),
	                                    "We will inspect items for our customers in order to reduce the chance of returns or unsatisfied. And customers can combine varied items into one parcel to deliver abroad in terms of money saving. Last but not the least, our fabulous customer services are incredible and irreplaceable as our customer service will solve any problems regarding to the items and delivery. Taobao cannot provide this incredible service but we can. To sum up, we are not like Taobao for being an online commerce platform, but we provide services and responsible for our customers in order to become the reliable friends with our users."
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
	                                    "Product quality is always a worrying issue via online shopping platform,especially delivery issue. As a shopping agent,would you take these responsibilities?"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "As mentioned earlier, SuperBuy is not only providing shopping agent services to our customer, we also provide a strong and efficient after-sales service, including quality issues and delivery issues. We are not like other platforms that transfer the responsibilities to sellers or logistics companies, because SuperBuy is our customers’ reliable friends. Our unique 24/7 customer service team, who are professional and bilingual, will follow up any of your enquiries until your questions have been solved because customer first is our aim."
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
	                                    "I would like to buy a huge item, but the standard delivery is expensive,do you have other shipping options for me?"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "Of course you can, we have established great relationships with logistics companies. For example, we have established relationship with DHL for huge parcel shipping, and soon we will launch our maritime transport option for customers. In addition, we will provide recommendation for every huge shipping orders (see",
	                                    React.createElement(
	                                        "a",
	                                        { href: "", target: "_blank" },
	                                        "huge parcel delivery"
	                                    ),
	                                    "for more details). By using our services, we will recommend the most suitable shipping option for your items with the most reasonable cost."
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
	                                    "I would like to buy food,liquid,electronic products,etc.,would that be possible to ship?"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "Don't worry, as long as your items are legal, we will try our best to provide the best advices we can to you. Some special items might have different limitations due to the countries policy. Please contact our customer service team for more help."
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
	                                    "I'm not familiar with Chinese products in terms of price and quality,would you able to help?"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "Of course you can, simply tell us what you want. We ",
	                                    React.createElement(
	                                        "a",
	                                        { href: "http://www.dotdotbuy.com/account/expertservice/expert-question\n", target: "_blank" },
	                                        "Experts Service"
	                                    ),
	                                    "team will help you to find good reputed sellers, greater quality similar items with lower price, etc."
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
	                                    "I'm an entrepreneur,how can we cooperate?"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "Of course you can. If you would like to work with us, please feel free to visit our",
	                                    React.createElement(
	                                        "a",
	                                        { href: "", target: "_blank" },
	                                        "Business Customer page"
	                                    ),
	                                    "for more information. Our marketing team will follow up all the details with you as soon as we have received your request."
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
	                                    "Apart from the Shopping Agent Service,what else services do you provide?"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                "Yes, we also provide other services like tourism. We are currently providing worldwide tourist attraction tickets sales and bespoke travel plan services for our customers. Furthermore, our international team contains professionals from different industries and has business partners from all around the world. In terms of any enquiries or needs regarding to the cross-border business, such as looking for a business opportunity in China, setting up a personal professional observatory in Malaysia, or don’t know where to buy a product, feel free to contact us. We may be able to provide helps because SuperBuy’s goal is to become our customers’ reliable friends."
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
	                                    "I'm not happy with your services, what can you do to calm me down?"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "If you have any enquires or complaints, please feel free to contact our 24/7 online customer services team at any time. In addition, feel free to contact our CEO by sending him an email (ceo@superbuy.com) to express your shopping experiences with us. Our vision is to provide the best service to our customers and satisfy them, so that we will not allow seeing unsatisfied cases occurred. If so, we will definitely listen to our customers and solve the relevant issues for sure."
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
	                                    "As you don't charge for any services fee, how can you run your business? Can I donate some money to you?"
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "detail" },
	                                React.createElement(
	                                    "p",
	                                    null,
	                                    "At the moment, we are aiming to provide the best customer services we can to our customers because we believe that the more satisfied users we gain the more relevant returns we gain. Your loyalties to stay with us and provide us your comments and suggests, and word-of-mouth to share us with your friends and families are the greatest returns for us."
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
	ReactDOM.render(React.createElement(Wrap, { content: Content }), document.body);

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