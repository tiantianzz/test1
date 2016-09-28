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
	supervar.util.setCookie('loginLang', 'zh-CN', 30, '.' + domain);
	//setCookie('googtrans','/zh-CN/zh-CN',30,`www.${domain}`);
	//setCookie('googtrans','/zh-CN/zh-CN',30);
	//setCookie('lang','zh-cn',365,`.${domain}`);
	var eError = ['输入信息不能为空', '输入信息有误', '该邮箱已被占用', '该邮箱未注册'];
	var pError = ['输入信息不能为空', '输入信息有误', '请输入6-20个字符密码', '两次输入密码不一致', '密码格式错误', '请输入密码'];
	var vError = ['输入信息不能为空', '验证码错误'];
	var containerH = '18px';
	var apiUrl = window.supervar.apiURL_login;
	var imgSrc = window.supervar.imgsrc_cn;
	var hrefUrl = "/cn/page/";
	//邮箱验证
	function emailTest(val, obj) {
		if (val == '' || val == null || typeof val == "undefined") {
			obj.container.style.height = containerH;
			obj.inner.innerHTML = obj.inner.title = eError[0];
			return false;
		}
		if (!/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/.test(val)) {
			obj.container.style.height = containerH;
			obj.inner.innerHTML = obj.inner.title = eError[1];
			return false;
		}
		if (obj.callbackMsg) {
			obj.container.style.height = containerH;
			obj.inner.innerHTML = obj.inner.title = obj.callbackMsg;
			return false;
		}
		obj.container.style.height = "0px";
		return true;
	}
	//密码验证
	function _loginPasswordTest(val, obj) {
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
	//验证码验证
	function verifyCodeTest(val, obj) {
		if (val == '' || val == null || typeof val == "undefined") {
			obj.container.style.height = containerH;
			obj.img.src = imgSrc + 'login/kong.png';
			obj.inner.innerHTML = obj.inner.title = vError[0];
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
	function loginPasswordFocus(val, obj) {
		obj.container.style.height = containerH;
		obj.img.src = imgSrc + 'login/title.png';
		obj.inner.innerHTML = obj.inner.title = pError[5];
	}
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
	//同意协议
	function _agreePro(val) {
		if (val.name == '0') {
			val.src = imgSrc + 'login/disAgreePro.png';
			val.name = '1';
		} else {
			val.src = imgSrc + 'login/agreePro.png';
			val.name = '0';
		}
	}

	var ComponentLogin = function (_React$Component) {
		_inherits(ComponentLogin, _React$Component);

		function ComponentLogin(props) {
			_classCallCheck(this, ComponentLogin);

			var _this = _possibleConstructorReturn(this, (ComponentLogin.__proto__ || Object.getPrototypeOf(ComponentLogin)).call(this, props));

			_this.state = {
				login_name: '',
				login_password: '',
				register_name: '',
				register_password: '',
				captcha: '',
				agreePro: true,
				loginLoading: false,
				registerLoading: false
			};
			return _this;
		}
		//邮箱后缀提示


		_createClass(ComponentLogin, [{
			key: 'emailAuto',
			value: function emailAuto(email, emailList, userName) {
				var that = this;
				/* 初始化 */
				var emailInput = email,
				    list = emailList,
				    items = list.getElementsByTagName('li'),
				    item1 = items[1],
				    len = items.length,
				    suffix = [],
				    newSuffix,
				    indexA,
				    indexB,
				    highlight = 'current',
				    isIE = navigator.userAgent.toLowerCase().indexOf('msie') != -1,
				    clearClassname = function clearClassname() {
					for (var i = 1, el; i < len && (el = items[i]); i++) {
						el.className = '';
					}
				};
				/* 将邮箱后缀存放到一个新数组中 */
				for (var j = 0, el; j < len && (el = items[j]); j++) {
					suffix[suffix.length++] = el.innerHTML;
				}
				/* 邮箱输入框绑定keyup事件 */
				document.onkeydown = function (e) {
					var e = e || window.event;
					e.keyCode == 9 ? list.style.display = 'none' : '';
				};
				emailInput.onkeyup = suggest;
				/* suggest核心部分 */
				function suggest(event) {
					var e = event || window.event,
					    eCode = e.keyCode,
					    val = this.value,
					    index = val.indexOf('@'),
					    isIndex = index !== -1;
					clearClassname();
					//输入框不为空
					if (val) {
						item1.className = highlight;
						list.style.display = 'block';
						for (var i = 1, el; i < len && (el = items[i]); i++) {
							el.onmouseover = function () {
								clearClassname();
								item1.className = '';
								this.className = highlight;
								indexA = 1;
								indexB = 0;
							};
							el.onmouseout = function () {
								this.className = '';
								item1.className = highlight;
							};
							el.onclick = function () {
								emailInput.value = this.innerHTML;that.state[userName] = this.innerHTML;
								if (userName == "login") {
									that.state.login_name = this.innerHTML;
									that.setState({ login_name: that.state.login_name });
									that.loginEmailTest();
								} else {
									that.state.register_name = this.innerHTML;
									that.setState({ register_name: that.state.register_name });
									that.registerEmailTest();
								}
								list.style.display = 'none';
							};
						}
					}
					//输入框为空
					else {
							item1.className = '';
							for (var i = 1, el; i < len && (el = items[i]); i++) {
								el.onmouseout = el.onmouseover = el.onclick = null;
							}
							if (eCode === 38 || eCode === 40 || eCode === 13 || eCode === 9) return;
						}
					//item1.innerHTML = val;
					newSuffix = []; //初始化空数组
					for (var i = 1, el; i < len && (el = items[i]); i++) {
						/* 以邮箱后缀和输入框中@标志符后是否
	        有相同的字符串来显示或隐藏该元素 */
						el.style.display = isIndex && el.innerHTML.indexOf(val.substring(index)) === -1 ? 'none' : 'block';
						if (i > 0) el.innerHTML = (isIndex ? val.substring(0, index) : val) + suffix[i];
						/* 出现@标志符时将新的元素的排列顺序
	        存放到空数组newSuffix中 */
						if (!isIE && window.getComputedStyle(el, null).display === 'block' || isIE && el.currentStyle.display === 'block') {
							newSuffix[newSuffix.length++] = i;
						}
					}

					//items[newSuffix[indexB]].className = highlight;
					/* 判断按键 */
					switch (eCode) {
						case 38:
							//上方向键
							keyMove(-1);
							break;
						case 40:
							//下方向键
							keyMove(1);
							break;
						case 13:
							//回车键
							getVal();
							break;
						case 9:
							//Tab键
							list.style.display = 'none';
							break;
						default:
							indexA = 1;
							indexB = 0;
							items[newSuffix[indexB]].className = highlight;
							return;
					}
				}

				/* 方向键控制元素的高亮效果 */
				function keyMove(n) {
					var newLen = newSuffix.length;
					if (newLen > 0 && newLen < 13) {
						//items[newSuffix[indexB]].className = '';
						items[newSuffix[indexB]].className = item1.className = '';
						indexB += n;
						if (indexB === newLen) indexB -= newLen;else if (indexB < 0) indexB += newLen;
						items[newSuffix[indexB]].className = highlight;
					} else {
						//items[indexA].className = '';
						items[indexA].className = item1.className = '';
						indexA += n;
						if (indexA === len) indexA -= len - 1;else if (indexA === 0) indexA += len - 1;
						items[indexA].className = highlight;
					}
				}
				/* 获取当前高亮元素的值 */
				function getVal() {
					var newLen = newSuffix.length;
					emailInput.value = newLen > 0 && newLen < 13 ? items[newSuffix[indexB]].innerHTML : items[indexA].innerHTML;
					if (userName == "login") {
						that.state.login_name = emailInput.value;
						that.setState({ login_name: that.state.login_name });
						that.loginEmailTest();
					} else {
						that.state.register_name = emailInput.value;
						that.setState({ register_name: that.state.register_name });
						that.registerEmailTest();
					}
					list.style.display = 'none';
				}
				/* 关闭提示层 */
				document.onclick = function (e) {
					var e = e || window.event,
					    eNode = e.target ? e.target : e.srcElement;
					if (eNode !== emailInput && eNode !== items[0]) {
						list.style.display = 'none';
					}
				};
			}
		}, {
			key: 'changeToLogin',
			value: function changeToLogin() {
				this.refs.loginTxt.style.color = '#ffffff';
				this.refs.registerTxt.style.color = '#6e6871';
				this.refs.borderB.style.left = '70px';
				this.refs.loginBox.style.height = '420px';
				this.refs.loginBox.style.left = '50px';
				this.refs.loginBox.style.top = '0px';
				this.refs.loginBox.style.zIndex = '10';
				this.refs.registerBox.style.height = '380px';
				this.refs.registerBox.style.left = '100px';
				this.refs.registerBox.style.top = '20px';
				this.refs.registerBox.style.zIndex = '5';
				this.emailAuto(document.getElementById('loginEmail'), document.getElementById('loginList'), 'login');
			}
		}, {
			key: 'changeToRegister',
			value: function changeToRegister() {
				this.changeVerifyImg();
				this.refs.loginTxt.style.color = '#6e6871';
				this.refs.registerTxt.style.color = '#ffffff';
				this.refs.borderB.style.left = '310px';
				this.refs.loginBox.style.height = '380px';
				this.refs.loginBox.style.left = '0px';
				this.refs.loginBox.style.top = '20px';
				this.refs.loginBox.style.zIndex = '5';
				this.refs.registerBox.style.height = '420px';
				this.refs.registerBox.style.left = '50px';
				this.refs.registerBox.style.top = '0px';
				this.refs.registerBox.style.zIndex = '10';
				this.emailAuto(document.getElementById('registerEmail'), document.getElementById('registerList'), 'register');
			}
		}, {
			key: 'loginKeyDownHandle',
			value: function loginKeyDownHandle(e) {
				if (e.keyCode.toString() == '13') {
					this.loginHandle();
				};
			}
		}, {
			key: 'loginEmailTest',
			value: function loginEmailTest() {
				emailTest(this.refs.login_name.value, {
					container: this.refs.loginEmailWarn,
					inner: this.refs.loginEmailError
				});
			}
		}, {
			key: 'loginPasswordTest',
			value: function loginPasswordTest() {
				_loginPasswordTest(this.refs.login_password.value, {
					container: this.refs.loginPasswordWarn,
					img: this.refs.loginPasswordImg,
					inner: this.refs.loginPasswordError
				});
			}
		}, {
			key: 'loginShowPassword',
			value: function loginShowPassword(e) {
				showPassword(this.refs.login_password, e.currentTarget);
			}
		}, {
			key: 'loginHandle',
			value: function loginHandle() {
				var _this2 = this;

				var loginUrl = apiUrl + '/api/site/login';
				var loginName = this.refs.login_name.value.toString().replace(/\+/g, "%2B").replace(/\&/g, "%26");
				var loginPsw = this.refs.login_password.value.toString().replace(/\+/g, "%2B").replace(/\&/g, "%26");
				var isEmail = emailTest(loginName, {
					container: this.refs.loginEmailWarn,
					inner: this.refs.loginEmailError
				});
				//		let isPsw = passwordTest(loginPsw,{
				//			container:this.refs.loginPasswordWarn,
				//			img:this.refs.loginPasswordImg,
				//			inner:this.refs.loginPasswordError,
				//		});
				if (isEmail) {
					this.setState({ loginLoading: true });
					fetch(loginUrl, {
						method: 'POST',
						credentials: 'include',
						mode: 'cors',
						headers: { "Content-type": "application/x-www-form-urlencoded" },
						body: 'login_name=' + loginName + '&password=' + loginPsw
					}).then(function (response) {
						return response.json();
					}).then(function (data) {
						_this2.setState({ loginLoading: false });
						switch (data.state.toString()) {
							case '0':
								supervar.util.setCookie('loginUser', loginName, 30, '.' + domain);
								window.location.href = document.referrer == "" ? '//www.' + domain + '/account' : document.referrer;
								break;
							default:
								_loginPasswordTest(loginPsw, {
									container: _this2.refs.loginPasswordWarn,
									img: _this2.refs.loginPasswordImg,
									inner: _this2.refs.loginPasswordError,
									callbackMsg: data.msg
								});
								break;
						}
					}).catch(function (e) {
						console.log("error", e);
					});
				}
			}
		}, {
			key: 'imgOver',
			value: function imgOver(e) {
				switch (e.target.className) {
					case 'facebook':
						e.target.src = imgSrc + 'login/facebookHover.png';break;
					case 'weibo':
						e.target.src = imgSrc + 'login/weiboHover.png';break;
					case 'qq':
						e.target.src = imgSrc + 'login/qqHover.png';break;
					case 'weixin':
						e.target.src = imgSrc + 'login/weixinHover.png';break;
				}
			}
		}, {
			key: 'imgOut',
			value: function imgOut(e) {
				switch (e.target.className) {
					case 'facebook':
						e.target.src = imgSrc + 'login/facebook.png';break;
					case 'weibo':
						e.target.src = imgSrc + 'login/weibo.png';break;
					case 'qq':
						e.target.src = imgSrc + 'login/qq.png';break;
					case 'weixin':
						e.target.src = imgSrc + 'login/weixin.png';break;
				}
			}
		}, {
			key: 'hasExist',
			value: function hasExist() {
				var _this3 = this;

				fetch(apiUrl + '/api/ajax/valid-email', {
					method: 'POST',
					credentials: 'include',
					mode: 'cors',
					headers: { "Content-type": "application/x-www-form-urlencoded" },
					body: 'reg_email=' + this.refs.register_name.value
				}).then(function (response) {
					return response.json();
				}).then(function (data) {
					if (data.state.toString() != '0') {
						emailTest(_this3.refs.register_name.value, {
							container: _this3.refs.registerEmailWarn,
							inner: _this3.refs.registerEmailError,
							callbackMsg: data.msg
						});
					}
				});
			}
		}, {
			key: 'registerKeyDownHandle',
			value: function registerKeyDownHandle(e) {
				if (e.keyCode.toString() == '13') {
					this.registerHandle();
				};
			}
		}, {
			key: 'registerEmailTest',
			value: function registerEmailTest() {
				if (emailTest(this.state.register_name, {
					container: this.refs.registerEmailWarn,
					inner: this.refs.registerEmailError
				})) {
					this.hasExist();
				}
			}
		}, {
			key: 'registerPasswordTest',
			value: function registerPasswordTest() {
				passwordTest(this.state.register_password, {
					container: this.refs.registerPasswordWarn,
					img: this.refs.registerPasswordImg,
					inner: this.refs.registerPasswordError
				});
			}
		}, {
			key: 'registerPasswordFocus',
			value: function registerPasswordFocus(e) {
				passwordFocus(e.currentTarget.value, {
					container: this.refs.registerPasswordWarn,
					img: this.refs.registerPasswordImg,
					inner: this.refs.registerPasswordError
				});
			}
		}, {
			key: 'registerShowPassword',
			value: function registerShowPassword(e) {
				showPassword(this.refs.register_password, e.currentTarget);
			}
		}, {
			key: 'changeVerifyImg',
			value: function changeVerifyImg() {
				var _this4 = this;

				var theDate = new Date();
				var verifyCodeUrl = apiUrl + '/api/site/captcha?refresh=';
				fetch(verifyCodeUrl + Math.random() + theDate.getTime(), {
					method: 'GET',
					credentials: 'include',
					mode: 'cors',
					headers: { "Content-type": "application/x-www-form-urlencoded" }
				}).then(function (response) {
					return response.json();
				}).then(function (data) {
					_this4.refs.verifyCode.src = apiUrl + data.url;
				});
			}
		}, {
			key: 'verCodeTest',
			value: function verCodeTest(e) {
				var _this5 = this;

				this.setState({ captcha: e.currentTarget.value });
				if (verifyCodeTest(this.refs.captcha.value, {
					container: this.refs.verCodeWarn,
					img: this.refs.verCodeImg,
					inner: this.refs.verCodeError
				})) {
					fetch(apiUrl + '/api/ajax/valid-captcha', {
						method: 'POST',
						credentials: 'include',
						mode: 'cors',
						headers: { "Content-type": "application/x-www-form-urlencoded" },
						body: 'reg_captcha=' + this.refs.captcha.value
					}).then(function (response) {
						return response.json();
					}).then(function (data) {
						if (data.state.toString() != '0') {
							verifyCodeTest(_this5.refs.captcha.value, {
								container: _this5.refs.verCodeWarn,
								img: _this5.refs.verCodeImg,
								inner: _this5.refs.verCodeError,
								callbackMsg: data.msg
							});
						}
					});
				};
			}
		}, {
			key: 'agreePro',
			value: function agreePro(e) {
				this.setState({ agreePro: !this.state.agreePro });
				_agreePro(e.currentTarget);
			}
		}, {
			key: 'registerHandle',
			value: function registerHandle(e) {
				var _this6 = this;

				var registerUrl = apiUrl + '/api/site/signup';
				var registerName = this.state.register_name.replace(/\+/g, "%2B").replace(/\&/g, "%26");
				var registerPsw = this.state.register_password.replace(/\+/g, "%2B").replace(/\&/g, "%26");
				var verifyCodeValue = this.state.captcha;
				var agreePro = this.state.agreePro;
				var isEmail = emailTest(registerName, {
					container: this.refs.registerEmailWarn,
					inner: this.refs.registerEmailError
				});
				var isPsw = passwordTest(registerPsw, {
					container: this.refs.registerPasswordWarn,
					img: this.refs.registerPasswordImg,
					inner: this.refs.registerPasswordError
				});
				var isVer = verifyCodeTest(verifyCodeValue, {
					container: this.refs.verCodeWarn,
					img: this.refs.verCodeImg,
					inner: this.refs.verCodeError
				});
				if (!agreePro) {
					alert(this.props.mustAgree);return false;
				}
				this.setState({ registerLoading: true });
				fetch(apiUrl + '/api/ajax/valid-email', {
					method: 'POST',
					headers: { "Content-type": "application/x-www-form-urlencoded" },
					body: 'reg_email=' + this.refs.register_name.value
				}).then(function (response) {
					return response.json();
				}).then(function (data) {
					if (data.state.toString() != '0') {
						_this6.setState({ registerLoading: false });
						emailTest(_this6.refs.register_name.value, {
							container: _this6.refs.registerEmailWarn,
							inner: _this6.refs.registerEmailError,
							callbackMsg: data.msg
						});
					} else {
						if (isEmail && isPsw & isVer & agreePro) {
							fetch(registerUrl, {
								method: 'POST',
								credentials: 'include',
								mode: 'cors',
								headers: { "Content-type": "application/x-www-form-urlencoded" },
								body: 'login_name=' + registerName + '&password=' + registerPsw + '&captcha=' + verifyCodeValue + '&checkbox=' + agreePro
							}).then(function (response) {
								return response.json();
							}).then(function (data) {
								_this6.setState({ registerLoading: false });
								switch (data.state.toString()) {
									case '0':
										alert(_this6.props.signupSuccess);
										supervar.util.setCookie('loginUser', registerName, 30, '.' + domain);
										window.location.href = document.referrer == "" ? '//www.' + domain + '/account' : document.referrer;
										break;
									case '20004':
										_this6.changeVerifyImg();
										verifyCodeTest(_this6.refs.captcha.value, {
											container: _this6.refs.verCodeWarn,
											img: _this6.refs.verCodeImg,
											inner: _this6.refs.verCodeError,
											callbackMsg: data.msg
										});
										break;
									default:
										_this6.changeVerifyImg();
										alert(data.msg);
										break;
								}
							});
						}
					}
				});
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var type = supervar.util.search2Obj();
				type.type == "register" ? this.changeToRegister() : '';
				this.setState({ login_name: supervar.util.getCookie('loginUser') });
				this.emailAuto(document.getElementById('loginEmail'), document.getElementById('loginList'), 'login');
			}
		}, {
			key: 'render',
			value: function render() {
				var _this7 = this;

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
							{ className: 'loginAndRegister' },
							React.createElement(
								'span',
								{ ref: 'loginTxt', className: 'loginTxt', onClick: this.changeToLogin.bind(this) },
								this.props.loginTitle
							),
							React.createElement(
								'span',
								{ ref: 'registerTxt', className: 'registerTxt', onClick: this.changeToRegister.bind(this) },
								this.props.registerTitle
							),
							React.createElement('div', { className: 'borderB', ref: 'borderB' })
						),
						React.createElement(
							'div',
							{ className: 'mainBox' },
							React.createElement(
								'div',
								{ className: 'loginBox', ref: 'loginBox' },
								React.createElement(
									'div',
									{ className: 'loginMsg emailAuto' },
									React.createElement('input', { type: 'text', id: 'loginEmail', value: this.state.login_name, list: 'loginList', ref: 'login_name', className: 'inputS', placeholder: this.props.email, onChange: function onChange(e) {
											_this7.setState({ login_name: e.currentTarget.value });
										}, onBlur: this.loginEmailTest.bind(this) }),
									React.createElement(
										'ul',
										{ id: 'loginList' },
										React.createElement(
											'li',
											null,
											this.props.emailType
										),
										React.createElement(
											'li',
											null,
											'@gmail.com'
										),
										React.createElement(
											'li',
											null,
											'@hotmail.com'
										),
										React.createElement(
											'li',
											null,
											'@yahoo.cn'
										),
										React.createElement(
											'li',
											null,
											'@yahoo.com'
										),
										React.createElement(
											'li',
											null,
											'@yahoo.com.sg'
										),
										React.createElement(
											'li',
											null,
											'@yahoo.com.au'
										),
										React.createElement(
											'li',
											null,
											'@yahoo.com.ca'
										),
										React.createElement(
											'li',
											null,
											'@msn.com'
										),
										React.createElement(
											'li',
											null,
											'@163.com'
										),
										React.createElement(
											'li',
											null,
											'@126.com'
										),
										React.createElement(
											'li',
											null,
											'@qq.com'
										),
										React.createElement(
											'li',
											null,
											'@vip.qq.com'
										),
										React.createElement(
											'li',
											null,
											'@live.cn'
										)
									),
									React.createElement(
										'div',
										{ className: 'waring ', ref: 'loginEmailWarn' },
										React.createElement('img', { src: imgSrc + "login/kong.png" }),
										React.createElement('span', { ref: 'loginEmailError' })
									)
								),
								React.createElement(
									'div',
									{ className: 'loginMsg forgotPsw' },
									React.createElement('input', { type: 'password', ref: 'login_password', className: 'inputS', placeholder: this.props.password, onKeyDown: this.loginKeyDownHandle.bind(this), onBlur: function onBlur(e) {
											_this7.setState({ login_password: e.target.value });
										} }),
									React.createElement(
										'div',
										{ className: 'showPsw' },
										React.createElement('img', { onClick: this.loginShowPassword.bind(this), src: imgSrc + "login/hidePsw.png" })
									),
									React.createElement(
										'div',
										{ className: 'waring ', ref: 'loginPasswordWarn' },
										React.createElement('img', { ref: 'loginPasswordImg', src: imgSrc + "login/kong.png" }),
										React.createElement('span', { ref: 'loginPasswordError' })
									),
									React.createElement(
										'div',
										{ className: 'fotgetPsw' },
										React.createElement(
											'a',
											{ href: hrefUrl + "login/forgotPassword/?forgotEmail=" + this.state.login_name },
											this.props.forgotPsw
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'loading-box' },
									React.createElement('input', { type: 'button', ref: 'login_button', onClick: this.loginHandle.bind(this), className: 'btnS', value: this.state.loginLoading == true ? '' : this.props.loginBtn }),
									React.createElement(
										'div',
										{ className: this.state.loginLoading == true ? "loading loading-active" : "loading loading-default" },
										React.createElement(_Loading2.default, null)
									)
								),
								React.createElement(
									'div',
									{ className: 'otherWay' },
									React.createElement(
										'span',
										null,
										this.props.thirdParty
									),
									React.createElement(
										'div',
										null,
										React.createElement(
											'a',
											{ href: '//www.' + domain + '/connect/facebook' },
											React.createElement('img', { onMouseOver: this.imgOver.bind(this), onMouseOut: this.imgOut.bind(this), className: 'facebook', src: imgSrc + "login/facebook.png" })
										),
										React.createElement(
											'a',
											{ href: '//www.' + domain + '/connect/weibo' },
											React.createElement('img', { onMouseOver: this.imgOver.bind(this), onMouseOut: this.imgOut.bind(this), className: 'weibo', src: imgSrc + "login/weibo.png" })
										),
										React.createElement(
											'a',
											{ href: '//www.' + domain + '/connect/qq' },
											React.createElement('img', { onMouseOver: this.imgOver.bind(this), onMouseOut: this.imgOut.bind(this), className: 'qq', src: imgSrc + "login/qq.png" })
										),
										React.createElement(
											'a',
											{ href: '//www.' + domain + '/connect/wechat' },
											React.createElement('img', { onMouseOver: this.imgOver.bind(this), onMouseOut: this.imgOut.bind(this), className: 'weixin', src: imgSrc + "login/weixin.png" })
										)
									)
								)
							),
							React.createElement(
								'div',
								{ className: 'registerBox', ref: 'registerBox' },
								React.createElement(
									'div',
									{ className: 'loginMsg emailAuto' },
									React.createElement('input', { type: 'text', id: 'registerEmail', list: 'registerList', ref: 'register_name', className: 'inputS', placeholder: this.props.email, onKeyDown: this.registerKeyDownHandle.bind(this), onChange: function onChange(e) {
											return _this7.setState({ register_name: e.currentTarget.value });
										}, onBlur: this.registerEmailTest.bind(this) }),
									React.createElement(
										'ul',
										{ id: 'registerList' },
										React.createElement(
											'li',
											null,
											this.props.emailType
										),
										React.createElement(
											'li',
											null,
											'@gmail.com'
										),
										React.createElement(
											'li',
											null,
											'@hotmail.com'
										),
										React.createElement(
											'li',
											null,
											'@yahoo.cn'
										),
										React.createElement(
											'li',
											null,
											'@yahoo.com'
										),
										React.createElement(
											'li',
											null,
											'@yahoo.com.sg'
										),
										React.createElement(
											'li',
											null,
											'@yahoo.com.au'
										),
										React.createElement(
											'li',
											null,
											'@yahoo.com.ca'
										),
										React.createElement(
											'li',
											null,
											'@msn.com'
										),
										React.createElement(
											'li',
											null,
											'@163.com'
										),
										React.createElement(
											'li',
											null,
											'@126.com'
										),
										React.createElement(
											'li',
											null,
											'@qq.com'
										),
										React.createElement(
											'li',
											null,
											'@vip.qq.com'
										),
										React.createElement(
											'li',
											null,
											'@live.cn'
										)
									),
									React.createElement(
										'div',
										{ className: 'waring ', ref: 'registerEmailWarn' },
										React.createElement('img', { src: imgSrc + "login/kong.png" }),
										React.createElement('span', { ref: 'registerEmailError' })
									)
								),
								React.createElement(
									'div',
									{ className: 'loginMsg' },
									React.createElement('input', { type: 'password', ref: 'register_password', className: 'inputS', placeholder: this.props.password, onKeyDown: this.registerKeyDownHandle.bind(this), onFocus: this.registerPasswordFocus.bind(this), onChange: function onChange(e) {
											return _this7.setState({ register_password: e.currentTarget.value });
										}, onBlur: this.registerPasswordTest.bind(this) }),
									React.createElement(
										'div',
										{ className: 'showPsw' },
										React.createElement('img', { onClick: this.registerShowPassword.bind(this), src: imgSrc + "login/hidePsw.png" })
									),
									React.createElement(
										'div',
										{ className: 'waring ', ref: 'registerPasswordWarn' },
										React.createElement('img', { ref: 'registerPasswordImg', src: imgSrc + "login/kong.png" }),
										React.createElement('span', { ref: 'registerPasswordError' })
									)
								),
								React.createElement(
									'div',
									{ className: 'loginMsg' },
									React.createElement('input', { type: 'text', ref: 'captcha', maxLength: '4', className: 'inputS', placeholder: this.props.captcha, onKeyDown: this.registerKeyDownHandle.bind(this), onChange: this.verCodeTest.bind(this) }),
									React.createElement(
										'div',
										{ className: 'verCode' },
										React.createElement('img', { src: apiUrl + "/api/site/captcha", ref: 'verifyCode', onClick: this.changeVerifyImg.bind(this), title: 'Not clear? Click to change' })
									),
									React.createElement(
										'div',
										{ className: 'waring ', ref: 'verCodeWarn' },
										React.createElement('img', { ref: 'verCodeImg', src: imgSrc + "login/kong.png" }),
										React.createElement('span', { ref: 'verCodeError' })
									)
								),
								React.createElement(
									'div',
									{ className: 'protocol' },
									React.createElement('img', { ref: 'agreePro', src: imgSrc + "login/agreePro.png", onClick: this.agreePro.bind(this), name: '0' }),
									React.createElement(
										'div',
										null,
										this.props.agree,
										React.createElement(
											'a',
											{ href: hrefUrl + "about/agreement/", target: '_blank' },
											this.props.pro
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'loading-box' },
									React.createElement('input', { type: 'button', onClick: this.registerHandle.bind(this), ref: 'reg_button', className: 'btnS registerBtn', value: this.state.registerLoading == true ? '' : this.props.registerBtn }),
									React.createElement(
										'div',
										{ className: this.state.registerLoading == true ? "loading loading-active" : "loading loading-default" },
										React.createElement(_Loading2.default, null)
									)
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'copyTxt' },
							'CopyRight©2012-2015 superbuy.com All Rights Reserved'
						)
					)
				);
			}
		}]);

		return ComponentLogin;
	}(React.Component);

	ComponentLogin.defaultProps = {
		loginTitle: '登录',
		registerTitle: '注册',
		email: '邮箱',
		password: '密码',
		forgotPsw: '忘记密码?',
		loginBtn: '登录',
		thirdParty: '您还可以通过以下方式登录',
		captcha: '验证码',
		agree: '我已阅读并同意',
		pro: '《隐私声明、使用协议》',
		registerBtn: '注册',
		alertError: '用户名或密码错误',
		signupSuccess: '注册成功!',
		signupError: '注册失败!',
		mustAgree: '您必须同意此协议',
		emailType: '请选择邮箱类型'
	};
	ReactDOM.render(React.createElement(ComponentLogin, null), document.body);

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