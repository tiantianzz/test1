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

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(2);

	var _Loading = __webpack_require__(6);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var domain = window.supervar.domain;
	supervar.util.setCookie('loginLang', 'en-US', 30, '.' + domain);
	//setCookie('googtrans','/zh-CN/en',30,`www.${domain}`);
	//setCookie('googtrans','/zh-CN/en',30);
	//setCookie('lang','en-us',365,`.${domain}`);
	var eError = ['Information you entered is empty', 'Information you entered is incorrect', 'This email has been registered', 'This email has not yet been registered'];
	var pError = ['Information you entered is empty', 'Information you entered is incorrect', 'Please enter a 6-20 character password', 'Inconsistent password', 'Wrong format in password', 'Please enter password'];
	var vError = ['Information you entered is empty', 'Verify Code incorrect'];
	var containerH = '18px';
	var apiUrl = window.supervar.apiURL_login;
	var imgSrc = window.supervar.imgsrc_cn;
	var hrefUrl = "/en/page/";
	//密码验证
	function passwordTest(val, obj) {
		if (val == '' || val == null || typeof val == "undefined") {
			obj.container.style.height = containerH;
			obj.img.src = imgSrc + 'login/kong.png';
			obj.inner.innerHTML = obj.inner.title = pError[0];
			return false;
		}
		if (val.length < 6 || val.length > 20) {
			obj.container.style.height = containerH;
			obj.img.src = imgSrc + 'login/kong.png';
			obj.inner.innerHTML = obj.inner.title = pError[2];
			return false;
		}
		if (obj.confirm) {
			obj.container.style.height = containerH;
			obj.img.src = imgSrc + 'login/kong.png';
			obj.inner.innerHTML = obj.inner.title = pError[3];
			return false;
		}
		if (obj.callbackMsg) {
			obj.container.style.height = containerH;
			obj.img.src = imgSrc + 'login/kong.png';
			obj.inner.innerHTML = obj.inner.title = obj.callbackMsg;
			return false;
		}
		obj.container.style.height = "0px";
		return true;
	}
	//密码框获得焦点时出现提示信息
	function passwordFocus(val, obj) {
		obj.container.style.height = containerH;
		obj.img.src = imgSrc + 'login/title.png';
		obj.inner.innerHTML = obj.inner.title = pError[2];
	}
	//显示、隐藏密码
	function showPassword(val, val2) {
		if (val.type == 'password') {
			val.type = 'text';
			val2.src = imgSrc + 'login/showPsw.png';
		} else {
			val.type = 'password';
			val2.src = imgSrc + 'login/hidePsw.png';
		}
	}
	var pswSame = false;

	var ComponentResetPsw = function (_React$Component) {
		_inherits(ComponentResetPsw, _React$Component);

		function ComponentResetPsw(props) {
			_classCallCheck(this, ComponentResetPsw);

			var _this = _possibleConstructorReturn(this, (ComponentResetPsw.__proto__ || Object.getPrototypeOf(ComponentResetPsw)).call(this, props));

			_this.state = {
				newPsw: null,
				newPswConfirm: null,
				subError: '',
				loginLoading: false
			};
			return _this;
		}

		_createClass(ComponentResetPsw, [{
			key: 'newPswFocus',
			value: function newPswFocus(e) {
				passwordFocus(e.target.value, {
					container: this.refs.newPswWarn,
					img: this.refs.newPswImg,
					inner: this.refs.newPswError
				});
			}
		}, {
			key: 'newPswConfirmFocus',
			value: function newPswConfirmFocus(e) {
				passwordFocus(e.target.value, {
					container: this.refs.newPswConfirmWarn,
					img: this.refs.newPswConfirmImg,
					inner: this.refs.newPswConfirmError
				});
			}
		}, {
			key: 'newPswTest',
			value: function newPswTest() {
				passwordTest(this.state.newPsw, {
					container: this.refs.newPswWarn,
					img: this.refs.newPswImg,
					inner: this.refs.newPswError
				});
			}
		}, {
			key: 'newPswConfirmTest',
			value: function newPswConfirmTest() {
				passwordTest(this.state.newPswConfirm, {
					container: this.refs.newPswConfirmWarn,
					img: this.refs.newPswConfirmImg,
					inner: this.refs.newPswConfirmError
				});
				this.state.newPsw != this.state.newPswConfirm ? pswSame = false : pswSame = true;
				if (!pswSame) {
					passwordTest(this.state.newPswConfirm, {
						container: this.refs.newPswConfirmWarn,
						img: this.refs.newPswConfirmImg,
						inner: this.refs.newPswConfirmError,
						confirm: true
					});
				}
			}
		}, {
			key: 'resetPswKeyDownHandle',
			value: function resetPswKeyDownHandle(e) {
				if (e.keyCode.toString() == '13') {
					this.resetPswHandle();
				};
			}
		}, {
			key: 'resetPswHandle',
			value: function resetPswHandle() {
				var _this2 = this;

				var newPsw = this.refs.newPsw.value.replace(/\+/g, "%2B").replace(/\&/g, "%26");
				var newPswConfirm = this.refs.newPswConfirm.value.replace(/\+/g, "%2B").replace(/\&/g, "%26");
				var search = window.location.search.replace(/&amp;/g, '&');
				var urlMsg = supervar.util.search2Obj(search);
				var newPswPass = passwordTest(newPsw, {
					container: this.refs.newPswWarn,
					img: this.refs.newPswImg,
					inner: this.refs.newPswError
				});
				var newPswConfirmPass = passwordTest(newPswConfirm, {
					container: this.refs.newPswConfirmWarn,
					img: this.refs.newPswConfirmImg,
					inner: this.refs.newPswConfirmError
				});
				newPsw != newPswConfirm ? pswSame = false : pswSame = true;
				if (!pswSame) {
					passwordTest(this.state.newPswConfirm, {
						container: this.refs.newPswConfirmWarn,
						img: this.refs.newPswConfirmImg,
						inner: this.refs.newPswConfirmError,
						confirm: true
					});
				}
				if (newPswPass && newPswConfirmPass && pswSame) {
					this.setState({ loginLoading: true });
					fetch(apiUrl + '/api/site/resetpassword', {
						method: 'POST',
						credentials: 'include',
						mode: 'cors',
						headers: { "Content-type": "application/x-www-form-urlencoded" },
						body: 'password=' + newPsw + '&confirmpassword=' + newPswConfirm + '&email=' + urlMsg.email + '&code=' + urlMsg.code
					}).then(function (response) {
						return response.json();
					}).then(function (data) {
						_this2.setState({ subError: data.msg, loginLoading: false });
						switch (data.state.toString()) {
							case '0':
								_this2.refs.forgetPswMain.style.display = 'none';
								_this2.refs.forgetPswSuccess.style.display = 'block';
								break;
							default:
								_this2.refs.forgetPswError.style.display = 'block';
								break;
						}
					});
				}
			}
		}, {
			key: 'newShowPassword',
			value: function newShowPassword(e) {
				showPassword(this.refs.newPsw, e.target);
			}
		}, {
			key: 'confirmShowPassword',
			value: function confirmShowPassword(e) {
				showPassword(this.refs.newPswConfirm, e.target);
			}
		}, {
			key: 'retryHandle',
			value: function retryHandle() {
				this.refs.forgetPswError.style.display = 'none';
			}
		}, {
			key: 'mouseOverHandle',
			value: function mouseOverHandle(e) {
				e.target.src = imgSrc + "login/close2.png";
			}
		}, {
			key: 'mouseOutHandle',
			value: function mouseOutHandle(e) {
				e.target.src = imgSrc + "login/close1.png";
			}
		}, {
			key: 'mouseDownHandle',
			value: function mouseDownHandle(e) {
				e.target.src = imgSrc + "login/close3.png";
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return React.createElement(
					'div',
					null,
					React.createElement(
						'div',
						{ className: 'loginContent' },
						React.createElement(
							'div',
							{ className: 'logo' },
							React.createElement('img', { src: imgSrc + "login/logo.png" })
						),
						React.createElement(
							'div',
							{ className: 'forgetTitle' },
							this.props.title
						),
						React.createElement(
							'div',
							{ className: 'thirdBox forgetPswMain', ref: 'forgetPswMain' },
							React.createElement(
								'div',
								{ className: 'loginMsg' },
								React.createElement('input', { type: 'password', ref: 'newPsw', className: 'inputS', placeholder: this.props.newPassword, onKeyDown: this.resetPswKeyDownHandle.bind(this), onFocus: this.newPswFocus.bind(this), onChange: function onChange(e) {
										return _this3.setState({ newPsw: e.target.value });
									}, onBlur: this.newPswTest.bind(this) }),
								React.createElement(
									'div',
									{ className: 'showPsw' },
									React.createElement('img', { onClick: this.newShowPassword.bind(this), src: imgSrc + "login/hidePsw.png" })
								),
								React.createElement(
									'div',
									{ className: 'waring', ref: 'newPswWarn' },
									React.createElement('img', { ref: 'newPswImg', src: imgSrc + "login/kong.png" }),
									React.createElement('span', { ref: 'newPswError' })
								)
							),
							React.createElement(
								'div',
								{ className: 'loginMsg' },
								React.createElement('input', { type: 'password', ref: 'newPswConfirm', className: 'inputS', placeholder: this.props.confirmPsw, onKeyDown: this.resetPswKeyDownHandle.bind(this), onFocus: this.newPswConfirmFocus.bind(this), onChange: function onChange(e) {
										_this3.setState({ newPswConfirm: e.target.value });
									}, onBlur: this.newPswConfirmTest.bind(this) }),
								React.createElement(
									'div',
									{ className: 'showPsw' },
									React.createElement('img', { onClick: this.confirmShowPassword.bind(this), src: imgSrc + "login/hidePsw.png" })
								),
								React.createElement(
									'div',
									{ className: 'waring', ref: 'newPswConfirmWarn' },
									React.createElement('img', { ref: 'newPswConfirmImg', src: imgSrc + "login/kong.png" }),
									React.createElement('span', { ref: 'newPswConfirmError' })
								)
							),
							React.createElement(
								'div',
								{ className: 'loading-box' },
								React.createElement('input', { type: 'button', className: 'btnS', value: this.state.loginLoading == true ? '' : this.props.subBtn, onClick: this.resetPswHandle.bind(this) }),
								React.createElement(
									'div',
									{ className: this.state.loginLoading == true ? "loading loading-active" : "loading loading-default" },
									React.createElement(_Loading2.default, null)
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'thirdBox forgetPswSuccess', ref: 'forgetPswSuccess' },
							React.createElement(
								'div',
								{ className: 'successMsg' },
								React.createElement(
									'div',
									{ className: 'sendedEmail' },
									React.createElement('img', { src: imgSrc + "login/success.png" }),
									React.createElement('br', null),
									React.createElement(
										'span',
										null,
										this.props.success1
									)
								),
								React.createElement(
									'span',
									{ className: 'changePswTxt' },
									this.props.success2
								),
								React.createElement(
									'div',
									null,
									React.createElement('input', { type: 'button', className: 'btnS backHome', onClick: function onClick() {
											window.location.href = '//login.' + domain + '/en/page/login/';
										}, value: this.props.loginBtn }),
									React.createElement('input', { type: 'button', className: 'btnS retry', onClick: function onClick() {
											window.location.href = '//www.' + domain + '/en/page/';
										}, value: this.props.backHome })
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'copyTxt' },
							'CopyRight©2012-2015 superbuy.com All Rights Reserved'
						)
					),
					React.createElement(
						'div',
						{ className: 'forgetPswError', ref: 'forgetPswError' },
						React.createElement(
							'div',
							{ className: 'thirdBox errorBox' },
							React.createElement('img', { className: 'errorWarn', src: imgSrc + "login/warning.png" }),
							React.createElement('br', null),
							React.createElement(
								'p',
								null,
								this.state.subError
							),
							React.createElement(
								'div',
								null,
								React.createElement('input', { type: 'button', className: 'btnS backHome', onClick: function onClick() {
										window.location.href = '//www.' + domain + '/en/page/';
									}, value: this.props.backHome }),
								React.createElement('input', { type: 'button', className: 'btnS retry', value: this.props.tryAgain, onClick: this.retryHandle.bind(this) })
							),
							React.createElement('img', { className: 'closeImg', src: imgSrc + "login/close1.png", onClick: this.retryHandle.bind(this), onMouseOver: this.mouseOverHandle.bind(this), onMouseOut: this.mouseOutHandle.bind(this), onMouseDown: this.mouseDownHandle.bind(this) })
						)
					)
				);
			}
		}]);

		return ComponentResetPsw;
	}(React.Component);

	ComponentResetPsw.defaultProps = {
		title: 'RESET PASSWORD',
		newPassword: 'New password',
		confirmPsw: 'New password confirm',
		subBtn: 'Submit',
		loginBtn: 'Login',
		success1: 'You have successfully changed your password.',
		success2: 'You can use your new password to login now. ',
		backHome: 'Back Home',
		subError: 'Reset password failed. Please try again.',
		tryAgain: 'Retry'
	};
	ReactDOM.render(React.createElement(ComponentResetPsw, null), document.body);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./login.less", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./login.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\n/*icon*/\n/* public path */\n/* page width */\n/* css3.0 */\n/* 阴影 */\n/* 文字阴影 */\n/* 旋转 */\n/* 平移 */\n/* 缩放 */\n/* 扭曲 */\n/* transform */\n/* 渐变 */\n/* 三角形 */\n.transform {\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\ninput::-ms-clear {\n  display: none;\n}\na {\n  cursor: pointer !important;\n}\n.login,\n.forgotPassword,\n.resetPassword,\n.binding {\n  width: 100%;\n  height: 100%;\n  background: url('/cn/source/img//login/loginbg.jpg') no-repeat center 0;\n  background-size: 1920px 460px;\n  color: #999999;\n}\n.login .loginContent,\n.forgotPassword .loginContent,\n.resetPassword .loginContent,\n.binding .loginContent {\n  width: 480px;\n  text-align: center;\n  margin: 60px auto 0;\n  padding-bottom: 35px;\n}\n.logo img {\n  margin-bottom: 30px;\n  width: 250px;\n  height: 50px;\n}\n.loginAndRegister {\n  width: 100%;\n  height: 40px;\n  margin: 0 auto 28px;\n  position: relative;\n}\n.loginAndRegister span {\n  float: left;\n  text-align: center;\n  width: 100px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n  cursor: pointer;\n  margin: 0 70px;\n}\n.loginAndRegister .loginTxt {\n  color: #ffffff;\n}\n.loginAndRegister .registerTxt {\n  color: #6e6871;\n}\n.loginAndRegister .borderB {\n  position: absolute;\n  width: 100px;\n  height: 1px;\n  background: #ccc9cc;\n  left: 70px;\n  top: 40px;\n  transition: all 0.6s ease-in-out;\n}\n.mainBox {\n  position: relative;\n  left: -50px;\n  width: 580px;\n  height: 520px;\n}\n.mainBox .common {\n  background: #fff;\n  padding: 50px 0;\n  border-radius: 3px;\n  box-shadow: 0 0 50px #777;\n  width: 480px;\n  height: 420px;\n  transition: all 0.6s ease-in-out;\n}\n.mainBox .loginBox {\n  background: #fff;\n  padding: 50px 0;\n  border-radius: 3px;\n  box-shadow: 0 0 50px #777;\n  width: 480px;\n  height: 420px;\n  transition: all 0.6s ease-in-out;\n  position: absolute;\n  left: 50px;\n  top: 0;\n  z-index: 10;\n}\n.mainBox .registerBox {\n  background: #fff;\n  padding: 50px 0;\n  border-radius: 3px;\n  box-shadow: 0 0 50px #777;\n  width: 480px;\n  height: 420px;\n  transition: all 0.6s ease-in-out;\n  position: absolute;\n  left: 100px;\n  top: 20px;\n  height: 380px;\n  z-index: 5;\n}\n.emailAuto {\n  position: relative;\n}\n#loginList,\n#registerList {\n  padding-left: 0;\n  width: 360px;\n  list-style: none;\n  border: 1px solid #74c9e6;\n  -moz-border-radius: 0 0 2px 2px;\n  border-radius: 2px;\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  background: #fff;\n  display: none;\n  z-index: 9999;\n}\n#loginList li,\n#registerList li {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  text-indent: 10px;\n  cursor: pointer;\n  overflow: hidden;\n  text-align: left;\n}\n#loginList li.first_li,\n#registerList li.first_li {\n  cursor: default;\n}\n#loginList .current,\n#registerList .current {\n  background: #baeafb;\n}\n.loginMsg {\n  width: 360px;\n  height: 80px;\n  margin: 0 auto;\n  position: relative;\n}\n.loginMsg input {\n  width: 360px;\n  height: 50px;\n  line-height: 38px;\n  border: 1px solid #999999;\n  outline-color: #ff3366;\n  border-radius: 3px;\n  text-indent: 10px;\n}\n.loginMsg .waring {\n  text-align: left;\n  height: 0px;\n  margin-top: 3px;\n  overflow: hidden;\n  transition: all 0.6s ease-in-out;\n}\n.loginMsg .waring img {\n  width: 16px;\n  height: 16px;\n  float: left;\n  border-radius: 50%;\n}\n.loginMsg .waring span {\n  vertical-align: middle;\n  text-indent: 5px;\n  display: inline-block;\n  width: 343px;\n  white-space: normal;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.loginMsg .showPsw {\n  position: absolute;\n  right: 12px;\n  top: 13px;\n}\n.loginMsg .showPsw img {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n.loginMsg .fotgetPsw {\n  text-align: right;\n  position: absolute;\n  right: 0;\n  top: 70px;\n}\n.loginMsg .fotgetPsw a {\n  color: #1daadf;\n  text-decoration: none;\n  cursor: pointer;\n}\n.forgotPsw {\n  height: 90px;\n}\n.loading-box {\n  overflow: hidden;\n  position: relative;\n}\n.loading-box .loading {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -moz-transform: rotate(0) translate(0) scale(1) skew(0);\n  -webkit-transform: rotate(0) translate(0) scale(1) skew(0);\n  -o-transform: rotate(0) translate(0) scale(1) skew(0);\n  transform: rotate(0) translate(0) scale(1) skew(0);\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n}\n.loading-box .loading-default {\n  display: none;\n}\n.loading-box .loading-active {\n  display: block;\n}\n.btnS {\n  border: 1px solid #999999;\n  outline-color: #ff3366;\n  width: 360px;\n  height: 50px;\n  background-color: #eb606f;\n  margin: 30px 0 30px;\n  border-width: 0;\n  border-radius: 3px;\n  cursor: pointer;\n  color: #fff;\n  font-size: 16px;\n  position: relative;\n  z-index: 1;\n}\n.btnS:link {\n  background-color: #e94e5f;\n}\n.btnS:hover {\n  background-color: #d14655;\n}\n.btnS:active {\n  box-shadow: 0 0 0 2px #ff3366;\n}\n.binding .btnS {\n  margin-bottom: 10px;\n}\n.otherWay span {\n  width: 360px;\n  display: block;\n  margin: 0 auto 10px;\n  padding-bottom: 10px;\n}\n.otherWay a {\n  display: inline-block;\n  margin: 0 25px;\n  width: 52px;\n  height: 52px;\n}\n.copyTxt {\n  margin-top: 120px;\n}\n.forgetPswMain {\n  padding-bottom: 50px!important;\n}\n.thirdBox {\n  background: #fff;\n  padding: 50px 0 0;\n  border-radius: 3px;\n  box-shadow: 0 0 50px #777;\n}\n.forgetPswError {\n  display: none;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  background: rgba(50, 50, 50, 0.5);\n  position: fixed;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n.forgetPswError .errorBox {\n  position: absolute;\n  width: 600px;\n  height: 230px;\n  left: 50%;\n  top: 40%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.forgetPswError .errorBox .closeImg {\n  margin: 0;\n  width: 20px;\n  height: 20px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  cursor: pointer;\n}\n.forgetPswError .errorBox .errorWarn {\n  margin: 10px 0 22px;\n}\n.forgetPswError .errorBox p {\n  color: #333333;\n  margin-bottom: 15px;\n}\n.forgetPswError .errorBox input {\n  width: 140px;\n  height: 40px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.forgetPswSuccess {\n  display: none;\n}\n.successMsg {\n  text-align: center;\n  width: 360px;\n  overflow: hidden;\n  margin: 0 auto;\n}\n.successMsg img {\n  border-radius: 50%;\n  width: 28px;\n  height: 28px;\n  vertical-align: middle;\n}\n.successMsg .sendedEmail {\n  font-size: 16px;\n  color: #ff3366;\n  overflow: hidden;\n  margin-bottom: 5px;\n}\n.successMsg .sendedEmail span {\n  vertical-align: middle;\n  display: inline-block;\n  text-indent: 5px;\n}\n.successMsg .changePswTxt {\n  margin: 10px 0 50px;\n  display: block;\n}\n.thirdSuccessMsg {\n  text-align: center;\n  width: 360px;\n  overflow: hidden;\n  margin: 0 auto 30px;\n}\n.thirdSuccessMsg img {\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  vertical-align: middle;\n}\n.thirdSuccessMsg span {\n  margin-bottom: 5px;\n  display: block;\n}\n.thirdSuccessMsg .thirdImg {\n  font-size: 16px;\n  color: #333333;\n  overflow: hidden;\n  margin-bottom: 5px;\n}\n.thirdSuccessMsg .thirdImg span {\n  vertical-align: middle;\n  display: inline-block;\n  text-indent: 5px;\n  font-weight: bold;\n  margin: 5px 0 0;\n}\n.accountBox .accountTitle {\n  margin-bottom: 26px;\n  font-size: 16px;\n}\n.accountBox .accountTitle span {\n  cursor: pointer;\n  font-weight: bold;\n}\n.accountBox .accountTitle img {\n  width: 13px;\n  height: 8px;\n  margin-left: 22px;\n}\n.accountBox .haveTitle {\n  color: #ff3366;\n}\n.accountBox .newTitle {\n  color: #666666;\n}\n.accountBox .haveAccount {\n  height: 228px;\n  overflow: hidden;\n  transition: all 0.6s ease-in-out;\n}\n.accountBox .newAccount {\n  height: 0;\n  overflow: hidden;\n  transition: all 0.6s ease-in-out;\n}\n.accountBox .btnS {\n  margin-top: 10px;\n}\n.protocol {\n  text-align: left;\n  width: 360px;\n  margin: 20px auto 0;\n  overflow: hidden;\n}\n.protocol img {\n  float: left;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.protocol div {\n  display: inline-block;\n  text-indent: 5px;\n  vertical-align: -webkit-baseline-middle;\n}\n.protocol a {\n  text-decoration: underline;\n  color: #1daadf;\n  cursor: pointer;\n}\n.registerBtn {\n  z-index: 1;\n}\n.forgetTitle {\n  color: #ff3366;\n  font-size: 16px ;\n  margin: 0 0 40px;\n}\n.forgetLogin {\n  height: 103px;\n  overflow: hidden;\n}\n.forgetLogin a {\n  margin: 30px 0 80px;\n  display: block;\n}\n.verCode {\n  position: absolute;\n  right: 0px;\n  top: 2px;\n}\n.verCode img {\n  height: 48px;\n  width: 120px;\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Loading = function (_React$Component) {
		_inherits(Loading, _React$Component);

		function Loading() {
			_classCallCheck(this, Loading);

			return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
		}

		_createClass(Loading, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "spinner" },
					React.createElement(
						"div",
						{ className: "spinner-container container1" },
						React.createElement("div", { className: "circle1" }),
						React.createElement("div", { className: "circle2" }),
						React.createElement("div", { className: "circle3" }),
						React.createElement("div", { className: "circle4" })
					),
					React.createElement(
						"div",
						{ className: "spinner-container container2" },
						React.createElement("div", { className: "circle1" }),
						React.createElement("div", { className: "circle2" }),
						React.createElement("div", { className: "circle3" }),
						React.createElement("div", { className: "circle4" })
					),
					React.createElement(
						"div",
						{ className: "spinner-container container3" },
						React.createElement("div", { className: "circle1" }),
						React.createElement("div", { className: "circle2" }),
						React.createElement("div", { className: "circle3" }),
						React.createElement("div", { className: "circle4" })
					)
				);
			}
		}]);

		return Loading;
	}(React.Component);

	exports.default = Loading;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./loading.less", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/less-loader/index.js!./loading.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".container1 > div,\n.container2 > div,\n.container3 > div {\n  width: 6px;\n  height: 6px;\n  background-color: #333;\n  border-radius: 100%;\n  position: absolute;\n  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;\n  animation: bouncedelay 1.2s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  position: relative;\n}\n.spinner .spinner-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.spinner .container2 {\n  -webkit-transform: rotateZ(45deg);\n  transform: rotateZ(45deg);\n}\n.spinner .container3 {\n  -webkit-transform: rotateZ(90deg);\n  transform: rotateZ(90deg);\n}\n.spinner .circle1 {\n  top: 0;\n  left: 0;\n}\n.spinner .circle2 {\n  top: 0;\n  right: 0;\n}\n.spinner .circle3 {\n  right: 0;\n  bottom: 0;\n}\n.spinner .circle4 {\n  left: 0;\n  bottom: 0;\n}\n.spinner .container2 .circle1 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.spinner .container3 .circle1 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.spinner .container1 .circle2 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.spinner .container2 .circle2 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n.spinner .container3 .circle2 {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n.spinner .container1 .circle3 {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n.spinner .container2 .circle3 {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.spinner .container3 .circle3 {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n.spinner .container1 .circle4 {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n.spinner .container2 .circle4 {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n.spinner .container3 .circle4 {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n@-webkit-keyframes bouncedelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes bouncedelay {\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n", ""]);

	// exports


/***/ }
/******/ ]);