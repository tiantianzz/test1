import '../../less/login/login.less';
import Loading from './src/Loading';
let domain = window.supervar.domain;
supervar.util.setCookie('loginLang','en-US',30,`.${domain}`);
//setCookie('googtrans','/zh-CN/en',30,`www.${domain}`);
//setCookie('googtrans','/zh-CN/en',30);
//setCookie('lang','en-us',365,`.${domain}`);
const eError = ['Information you entered is empty','Information you entered is incorrect','This email has been registered','This email has not yet been registered'];
const pError = ['Information you entered is empty','Information you entered is incorrect','Please enter a 6-20 character password','Inconsistent password','Wrong format in password','Please enter password'];
const vError = ['Information you entered is empty','Verify Code incorrect'];
const containerH = '18px';
const apiUrl = window.supervar.apiURL_login;
const imgSrc = window.supervar.imgsrc_cn;
const hrefUrl ="/en/page/";
//邮箱验证
function emailTest(val, obj) {
	if(val == '' || val == null || typeof(val) == "undefined") {
		obj.container.style.height = containerH;
		obj.inner.innerHTML = obj.inner.title = eError[0];
		return false;
	}
	if(!/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/.test(val)) {
		obj.container.style.height = containerH;
		obj.inner.innerHTML = obj.inner.title = eError[1];
		return false;
	}
	if(obj.callbackMsg) {
		obj.container.style.height = containerH;
		obj.inner.innerHTML = obj.inner.title = obj.callbackMsg;
		return false;
	}
	obj.container.style.height = "0px";
	return true;
}
//密码验证
function loginPasswordTest(val, obj) {
	if(obj.confirm) {
		obj.container.style.height = containerH;
		obj.img.src = imgSrc + 'login/kong.png';
		obj.inner.innerHTML = obj.inner.title = pError[3];
		return false;
	}
	if(obj.callbackMsg) {
		obj.container.style.height = containerH;
		obj.img.src = imgSrc + 'login/kong.png';
		obj.inner.innerHTML = obj.inner.title = obj.callbackMsg;
		return false;
	}
	obj.container.style.height = "0px";
	return true;
}
function passwordTest(val, obj) {
	if(val == '' || val == null || typeof(val) == "undefined") {
		obj.container.style.height = containerH;
		obj.img.src = imgSrc + 'login/kong.png';
		obj.inner.innerHTML = obj.inner.title = pError[0];
		return false;
	}
	if(val.length < 6 || val.length > 20) {
		obj.container.style.height = containerH;
		obj.img.src = imgSrc + 'login/kong.png';
		obj.inner.innerHTML = obj.inner.title = pError[2];
		return false;
	}
	if(obj.confirm) {
		obj.container.style.height = containerH;
		obj.img.src = imgSrc + 'login/kong.png';
		obj.inner.innerHTML = obj.inner.title = pError[3];
		return false;
	}
	if(obj.callbackMsg) {
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
	if(val == '' || val == null || typeof(val) == "undefined") {
		obj.container.style.height = containerH;
		obj.img.src = imgSrc + 'login/kong.png';
		obj.inner.innerHTML = obj.inner.title = vError[0];
		return false;
	}
	if(obj.callbackMsg) {
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
	if(val.type == 'password') {
		val.type = 'text';
		val2.src = imgSrc + 'login/showPsw.png';
	} else {
		val.type = 'password';
		val2.src = imgSrc + 'login/hidePsw.png';
	}
}
//同意协议
function agreePro(val) {
	if(val.name == '0') {
		val.src = imgSrc + 'login/disAgreePro.png';
		val.name = '1';
	} else {
		val.src = imgSrc + 'login/agreePro.png';
		val.name = '0'
	}
}
class ComponentBinding extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	login_name:'',
			login_password:'',
			register_name:'',
			register_password:'',
			captcha:'',
			agreePro:true,
			loginLoading:false,
			registerLoading:false
	    }
	}
	//邮箱后缀提示
	emailAuto(email,emailList,userName){
		let that = this;
		/* 初始化 */
		var emailInput = email,
			list = emailList,
			items = list.getElementsByTagName('li'),
			item1 = items[1],
			len = items.length,
			suffix = [],
			newSuffix, indexA, indexB,
			highlight = 'current',
			isIE = navigator.userAgent.toLowerCase().indexOf('msie') != -1,
			clearClassname = function(){
				for(var i = 1,el;i < len && (el = items[i]);i++){
					el.className = '';
				}
			};
		/* 将邮箱后缀存放到一个新数组中 */
		for(var j = 0,el;j < len && (el = items[j]);j++){
			suffix[suffix.length++] = el.innerHTML;
		}
		/* 邮箱输入框绑定keyup事件 */
		document.onkeydown = function(e){
			var e = e || window.event;
			e.keyCode == 9 ? list.style.display='none' : '';
		}
		emailInput.onkeyup = suggest;
		/* suggest核心部分 */
		function suggest(event){
			var e = event || window.event,
				eCode = e.keyCode,
				val = this.value,
				index = val.indexOf('@'),
				isIndex = index !== -1;
			clearClassname();
			//输入框不为空
			if(val){
				item1.className = highlight;
				list.style.display = 'block';
				for(var i = 1,el;i < len && (el = items[i]);i++){
					el.onmouseover = function(){
						clearClassname();
						item1.className = '';
						this.className = highlight;
						indexA = 1;
						indexB = 0;
					}
					el.onmouseout = function(){
						this.className = '';
						item1.className = highlight;
					}
					el.onclick = function(){
						emailInput.value = this.innerHTML;that.state[userName]=this.innerHTML;
						if(userName == "login"){
							that.state.login_name=this.innerHTML;
							that.setState({login_name:that.state.login_name});
							that.loginEmailTest();
						}else{
							that.state.register_name=this.innerHTML;
							that.setState({register_name:that.state.register_name});
							that.registerEmailTest();
						}
						list.style.display = 'none';
					}
				}
			}
			//输入框为空
			else{
				item1.className = '';
				for(var i = 1,el;i < len && (el = items[i]);i++){
					el.onmouseout = el.onmouseover = el.onclick = null;
				}
				if(eCode === 38 || eCode === 40 || eCode === 13) return;
			}
			//item1.innerHTML = val;
			newSuffix = [];  //初始化空数组
			for(var i = 1, el ;i < len && (el = items[i]);i++){
				/* 以邮箱后缀和输入框中@标志符后是否
				   有相同的字符串来显示或隐藏该元素 */
				el.style.display = isIndex && el.innerHTML.indexOf(val.substring(index)) === -1 ? 'none' : 'block';
				if( i > 0 ) el.innerHTML = (isIndex ? val.substring(0,index) : val) + suffix[i];
				/* 出现@标志符时将新的元素的排列顺序
				   存放到空数组newSuffix中 */
				if((!isIE && window.getComputedStyle(el,null).display === 'block') || (isIE && el.currentStyle.display === 'block')){
					newSuffix[newSuffix.length++] = i;
				}
			}
			
			//items[newSuffix[indexB]].className = highlight;
			/* 判断按键 */
			switch (eCode){
				case 38 :  //上方向键
					keyMove(-1);
					break;
				case 40 : //下方向键
					keyMove(1);
					break;
				case 13 : //回车键
					getVal();
					break;
				default:
					indexA = 1;
					indexB = 0;
					items[newSuffix[indexB]].className = highlight;
					return;
			}
		}
		
		/* 方向键控制元素的高亮效果 */
		function keyMove(n){
			var newLen = newSuffix.length;
			if(newLen > 0 && newLen < 13 ){
				//items[newSuffix[indexB]].className = '';
				items[newSuffix[indexB]].className = item1.className = '';
				indexB += n;
				if (indexB === newLen) indexB -= newLen;
				else if (indexB < 0) indexB += newLen;
				items[newSuffix[indexB]].className = highlight;
			}
			else{
				//items[indexA].className = '';
				items[indexA].className = item1.className = '';
				indexA += n;
				if (indexA === len) indexA -= len - 1;
				else if (indexA === 0) indexA += len - 1;
				items[indexA].className = highlight;
			}
		}
		/* 获取当前高亮元素的值 */
		function getVal(){
			var newLen = newSuffix.length;
			emailInput.value = newLen > 0 && newLen < 13 ? items[newSuffix[indexB]].innerHTML : items[indexA].innerHTML;
			if(userName == "login"){
				that.state.login_name=emailInput.value;
				that.setState({login_name:that.state.login_name});
				that.loginEmailTest();
			}else{
				that.state.register_name=emailInput.value;
				that.setState({register_name:that.state.register_name});
				that.registerEmailTest();
			}
			list.style.display = 'none';
		}
		/* 关闭提示层 */
		document.onclick = function(e){
			var e = e || window.event,
				eNode = e.target ? e.target : e.srcElement;
			if(eNode !== emailInput && eNode !== items[0]){
				list.style.display = 'none';
			}
		}
	}
	loginKeyDownHandle(e){
		if((e.keyCode).toString()=='13') {this.bindingHandle();};
	}
	loginEmailTest(){
		emailTest(this.state.login_name,{
			container:this.refs.loginEmailWarn,
			inner:this.refs.loginEmailError,
		});
	}
	loginPasswordTest(){
		passwordTest(this.state.login_password,{
			container:this.refs.loginPasswordWarn,
			img:this.refs.loginPasswordImg,
			inner:this.refs.loginPasswordError,
		});
	}
	loginPasswordFocus(e){
		passwordFocus(e.target.value,{
			container:this.refs.loginPasswordWarn,
			img:this.refs.loginPasswordImg,
			inner:this.refs.loginPasswordError,
		});
	}
	loginShowPassword(e){
		showPassword(this.refs.loginPassword,e.target);
	}
	bindingHandle(){
		let loginName = (this.refs.loginName.value.toString()).replace(/\+/g,"%2B").replace(/\&/g,"%26");
		let loginPsw = (this.refs.loginPassword.value.toString()).replace(/\+/g,"%2B").replace(/\&/g,"%26");
		let isEmail = emailTest(loginName,{
			container:this.refs.loginEmailWarn,
			inner:this.refs.loginEmailError,
		});
//		let isPsw = passwordTest(loginPsw,{
//			container:this.refs.loginPasswordWarn,
//			img:this.refs.loginPasswordImg,
//			inner:this.refs.loginPasswordError,
//		});
		if(isEmail){
			this.setState({loginLoading:true});
			fetch(`${apiUrl}/api/connect/fillinfo`,{
				method:'POST',
				credentials:'include',
				mode:'cors',
				headers:{"Content-type":"application/x-www-form-urlencoded"},
				body:`login_name=${loginName}&password=${loginPsw}&loginType=login`
			})
			.then(response => response.json())
			.then(data => {
				this.setState({loginLoading:false});
				switch((data.state).toString()){
					case '0':
						window.location.href=`//www.${domain}/account`;
						break;
					default:
						passwordTest(loginPsw,{
							container:this.refs.loginPasswordWarn,
							img:this.refs.loginPasswordImg,
							inner:this.refs.loginPasswordError,
							callbackMsg:data.msg
						});
						break;
				}
			})
		}
	}
	hasExist(){
		fetch(`${apiUrl}/api/ajax/valid-email`,{
			method:'POST',
			credentials:'include',
			mode:'cors',
			headers:{"Content-type":"application/x-www-form-urlencoded"},
			body:'reg_email='+this.refs.registerName.value
		})
		.then(response => response.json())
		.then(data => {
			if((data.state).toString()!='0'){
				emailTest(this.refs.registerName.value,{
					container:this.refs.registerEmailWarn,
					inner:this.refs.registerEmailError,
					callbackMsg:data.msg
				});
	        }
		})
	}
	registerKeyDownHandle(e){
		if((e.keyCode).toString()=='13') {this.registerHandle();};
	}
	registerEmailTest(){
		if(emailTest(this.state.register_name,{
			container:this.refs.registerEmailWarn,
			inner:this.refs.registerEmailError,
		})){
			this.hasExist();
		}
	}	
	registerPasswordTest(){
		passwordTest(this.state.register_password,{
			container:this.refs.registerPasswordWarn,
			img:this.refs.registerPasswordImg,
			inner:this.refs.registerPasswordError,
		});
	}
	registerPasswordFocus(e){
		passwordFocus(e.target.value,{
			container:this.refs.registerPasswordWarn,
			img:this.refs.registerPasswordImg,
			inner:this.refs.registerPasswordError,
		});
	}
	registerShowPassword(e){
		showPassword(this.refs.registerPassword,e.target);
	}
	changeVerifyImg(){
		var theDate = new Date();
		var verifyCodeUrl = `${apiUrl}/api/site/captcha?refresh=`;
    	fetch(verifyCodeUrl + Math.random()+theDate.getTime(),{
    		method:'GET',
			credentials:'include',
			mode:'cors',
			headers:{"Content-type":"application/x-www-form-urlencoded"},
    	}).then(response => response.json()).then(data=>{
    		this.refs.verifyCode.src=apiUrl+data.url;
    	});
	}
	verCodeTest(e){
		this.setState({captcha:e.currentTarget.value})
		if(verifyCodeTest(this.refs.captcha.value,{
			container:this.refs.verCodeWarn,
			img:this.refs.verCodeImg,
			inner:this.refs.verCodeError,
		})){
			fetch(`${apiUrl}/api/ajax/valid-captcha`,{
				method:'POST',
				credentials:'include',
				mode:'cors',
				headers:{"Content-type":"application/x-www-form-urlencoded"},
				body:'reg_captcha='+this.refs.captcha.value
			})
			.then(response => response.json())
			.then(data => {
				if((data.state).toString()!='0'){
					verifyCodeTest(this.refs.captcha.value,{
						container:this.refs.verCodeWarn,
						img:this.refs.verCodeImg,
						inner:this.refs.verCodeError,
						callbackMsg:data.msg
					})
		        }
			})
		};
	}
	agreePro(e){
		this.setState({agreePro:!this.state.agreePro});
		agreePro(e.target);
	}
	registerHandle(e){
		let registerUrl = `${apiUrl}/api/connect/fillinfo`;
		let registerName = (this.state.register_name).replace(/\+/g,"%2B").replace(/\&/g,"%26");
		let registerPsw = (this.state.register_password).replace(/\+/g,"%2B").replace(/\&/g,"%26");
		let verifyCodeValue = this.state.captcha;
		let agreePro = this.state.agreePro;
		let isEmail = emailTest(registerName,{
			container:this.refs.registerEmailWarn,
			inner:this.refs.registerEmailError,
		});
		let isPsw = passwordTest(registerPsw,{
			container:this.refs.registerPasswordWarn,
			img:this.refs.registerPasswordImg,
			inner:this.refs.registerPasswordError,
		});
		let isVer = verifyCodeTest(verifyCodeValue,{
			container:this.refs.verCodeWarn,
			img:this.refs.verCodeImg,
			inner:this.refs.verCodeError,
		});
		if(!agreePro){alert(this.props.mustAgree);return false;}
		this.setState({registerLoading:true});
		fetch(`${apiUrl}/api/ajax/valid-email`,{
			method:'POST',
			credentials:'include',
			mode:'cors',
			headers:{"Content-type":"application/x-www-form-urlencoded"},
			body:'reg_email='+this.refs.registerName.value
		})
		.then(response => response.json())
		.then(data => {
			if((data.state).toString()!='0'){
				this.setState({registerLoading:false});
				emailTest(this.refs.registerName.value,{
					container:this.refs.registerEmailWarn,
					inner:this.refs.registerEmailError,
					callbackMsg:data.msg
				});
	    	}else{
	    		fetch(`${apiUrl}/api/ajax/valid-captcha`,{
					method:'POST',
					credentials:'include',
					mode:'cors',
					headers:{"Content-type":"application/x-www-form-urlencoded"},
					body:'reg_captcha='+this.refs.captcha.value
				})
				.then(response => response.json())
				.then(data => {
					if((data.state).toString()!='0'){
						this.setState({registerLoading:false});
						verifyCodeTest(this.refs.captcha.value,{
							container:this.refs.verCodeWarn,
							img:this.refs.verCodeImg,
							inner:this.refs.verCodeError,
							callbackMsg:data.msg
						})
			        }else{
			        	if(isEmail&&isPsw&isVer&agreePro){
							fetch(registerUrl,{
								method:'POST',
								credentials:'include',
								mode:'cors',
								headers:{"Content-type":"application/x-www-form-urlencoded"},
								body:`login_name=${registerName}&password=${registerPsw}&captcha=${verifyCodeValue}&loginType=signup`
							})
							.then(response => response.json())
							.then(data => {
								this.setState({registerLoading:false});
								switch((data.state).toString()){
									case '0':
										window.location.href=`//www.${domain}/account`;
										break;
									case '20004':
										this.changeVerifyImg();
										verifyCodeTest(this.refs.captcha.value,{
											container:this.refs.verCodeWarn,
											img:this.refs.verCodeImg,
											inner:this.refs.verCodeError,
											callbackMsg:data.msg
										});
										break;
									default:
										this.changeVerifyImg();
										alert(data.msg);
										break;
								}
							})
						}
			        }
				})
	    		
	    	}
		})
	}
	haveAccountHandle(e){
		this.refs.registerName.value = '';
		this.refs.haveTxt.style.color='#ff3366';
		this.refs.haveImg.src=imgSrc+'login/up.png';
		this.refs.haveAccount.style.height='228px';
		
		this.refs.newTxt.style.color='#666';
		this.refs.newImg.src=imgSrc+'login/down.png';
		this.refs.newAccount.style.height=0;
		this.emailAuto(document.getElementById('loginEmail'),document.getElementById('loginList'),'login');
	}
	newAccountHandle(e){
		this.refs.loginName.value = '';
		this.refs.haveTxt.style.color='#666';
		this.refs.haveImg.src=imgSrc+'login/down.png';
		this.refs.haveAccount.style.height=0;
		
		this.refs.newTxt.style.color='#ff3366';
		this.refs.newImg.src=imgSrc+'login/up.png';
		this.refs.newAccount.style.height='390px';
		this.emailAuto(document.getElementById('registerEmail'),document.getElementById('registerList'),'register');
	}
	componentDidMount(){
		this.setState({login_name:supervar.util.getCookie('loginUser')})
		this.emailAuto(document.getElementById('loginEmail'),document.getElementById('loginList'),'login');
	}
	render(){
		return(
			<div>
				<div className="loginContent">
					<div className="thirdBox">
					<div className="thirdSuccessMsg ">
						<div className="thirdImg">
							<img src={imgSrc+"login/success.png"}/><br/>
							<span>{this.props.title}</span>
						</div>
						<span>{this.props.binding1}</span>
						<span>{this.props.binding2}</span>
					</div>
					<div className="accountBox">
						<div className="haveBox">
							<div className="haveTitle accountTitle">
								<span onClick={this.haveAccountHandle.bind(this)} ref="haveTxt">{this.props.loginTitle}</span>
								<img src={imgSrc+"login/up.png"} ref="haveImg"/>
							</div>
							<div className="haveAccount" ref="haveAccount">
								<div className="loginMsg  emailAuto">
									<input type="text" id="loginEmail" value={this.state.login_name}  list="loginList" ref="loginName"  className="inputS" placeholder={this.props.email} onKeyDown={this.loginKeyDownHandle.bind(this)} onChange={(e)=>{this.setState({login_name:e.target.value});}} onBlur={this.loginEmailTest.bind(this)}/>
									{/* ****************
									  * 邮箱后缀自动提示*
										****************/}
									<ul id="loginList">
										<li>{this.props.emailType}</li>
								        <li>@gmail.com</li>
								        <li>@hotmail.com</li>
								        <li>@yahoo.cn</li>
								        <li>@yahoo.com</li>
								        <li>@yahoo.com.sg</li>
								        <li>@yahoo.com.au</li>
								        <li>@yahoo.com.ca</li>
								        <li>@msn.com</li>
								        <li>@163.com</li>
								        <li>@126.com</li>
								        <li>@qq.com</li>
								        <li>@vip.qq.com</li>
								        <li>@live.cn</li>
									</ul>
									<div className="waring " ref="loginEmailWarn">
										<img src={imgSrc+"login/kong.png"}/>
										<span ref="loginEmailError"></span>
									</div>
								</div>
								<div  className="loginMsg">
									<input type="password"  ref="loginPassword" className="inputS" placeholder={this.props.password} onKeyDown={this.loginKeyDownHandle.bind(this)} onFocus={this.loginPasswordFocus.bind(this)} onChange={(e)=>this.setState({login_password:e.target.value})}  onBlur={this.loginPasswordTest.bind(this)}/>
									<div className="showPsw" ><img onClick={this.loginShowPassword.bind(this)} src={imgSrc+"login/hidePsw.png"}/></div>
									<div className="waring " ref="loginPasswordWarn">
										<img ref="loginPasswordImg" src={imgSrc+"login/kong.png"}/>
										<span ref="loginPasswordError"></span>
									</div>
								</div>
								<div className="loading-box">
									<input type="button" ref="loginButton" onClick={this.bindingHandle.bind(this)} className="btnS" value={this.state.loginLoading==true ? '' : this.props.subBtn}/>
									<div className={this.state.loginLoading==true ? "loading loading-active" : "loading loading-default"}><Loading/></div>
								</div>
							</div>
						</div>
						<hr/>
						<div className="newBox">
							<div className="newTitle accountTitle">
								<span onClick={this.newAccountHandle.bind(this)} ref="newTxt">{this.props.registerTitle}</span>
								<img src={imgSrc+"login/down.png"} ref="newImg"/>
							</div>
							<div className="newAccount" ref="newAccount">
								<div className="loginMsg emailAuto">
									<input type="text" id="registerEmail" list="registerList" ref="registerName" className="inputS" placeholder={this.props.email} onKeyDown={this.registerKeyDownHandle.bind(this)} onChange={(e)=>this.setState({register_name:e.target.value})} onBlur={this.registerEmailTest.bind(this)}/>
									{/* ****************
									  * 邮箱后缀自动提示*
									****************/}
									<ul id="registerList">
										<li>{this.props.emailType}</li>
								        <li>@gmail.com</li>
								        <li>@hotmail.com</li>
								        <li>@yahoo.cn</li>
								        <li>@yahoo.com</li>
								        <li>@yahoo.com.sg</li>
								        <li>@yahoo.com.au</li>
								        <li>@yahoo.com.ca</li>
								        <li>@msn.com</li>
								        <li>@163.com</li>
								        <li>@126.com</li>
								        <li>@qq.com</li>
								        <li>@vip.qq.com</li>
								        <li>@live.cn</li>
									</ul>
									<div className="waring " ref="registerEmailWarn">
										<img src={imgSrc+"login/kong.png"}/>
										<span ref="registerEmailError"></span>
									</div>
								</div>
								<div  className="loginMsg">
									<input type="password" ref="registerPassword" className="inputS" placeholder={this.props.password} onKeyDown={this.registerKeyDownHandle.bind(this)} onFocus={this.registerPasswordFocus.bind(this)} onChange={(e)=>this.setState({register_password:e.target.value})} onBlur={this.registerPasswordTest.bind(this)}/>
									<div className="showPsw" ><img onClick={this.registerShowPassword.bind(this)} src={imgSrc+"login/hidePsw.png"}/></div>
									<div className="waring " ref="registerPasswordWarn">
										<img ref="registerPasswordImg" src={imgSrc+"login/kong.png"}/>
										<span ref="registerPasswordError"></span>
									</div>
								</div>
								<div  className="loginMsg">
									<input type="text" ref="captcha" maxLength="4" className="inputS" placeholder={this.props.captcha} onKeyDown={this.registerKeyDownHandle.bind(this)} onChange={this.verCodeTest.bind(this)} />
									<div className="verCode">
										<img src={apiUrl+"/api/site/captcha"} ref="verifyCode" onClick={this.changeVerifyImg.bind(this)} title="Not clear? Click to change"/>
										</div>
									<div className="waring "  ref="verCodeWarn">
										<img ref="verCodeImg" src={imgSrc+"login/kong.png"}/>
										<span ref="verCodeError"></span>
									</div>
								</div>
								<div className="protocol">
									<img ref="agreePro" src={imgSrc+"login/agreePro.png"} onClick={this.agreePro.bind(this)} name="0"/>
									<div>{this.props.agree}<br/><a href={hrefUrl+"about/agreement/"}>{this.props.pro}</a></div>
								</div>
								<div className="loading-box">
									<input type="button" onClick={this.registerHandle.bind(this)} ref="regButton" className="btnS registerBtn" value={this.state.registerLoading==true ? '' : this.props.subBtn}/>
									<div className={this.state.registerLoading==true ? "loading loading-active" : "loading loading-default"}><Loading/></div>
								</div>
							</div>
						</div>
					</div>
					</div>
					<div className="copyTxt">CopyRight&copy;2012-2015&nbsp;superbuy.com&nbsp;All&nbsp;Rights&nbsp;Reserved</div>
				</div>
			</div>
		)
	}
}
ComponentBinding.defaultProps = {
	title:'Verification successful',
	binding1:'In order to provide you better service, please link your SuperBuy account to your current account',
	binding2:'If you do not have an account,please register',
    loginTitle:'I have a SuperBuy account',
    registerTitle:'I don’t have a SuperBuy account',
    email:'E-mail',
    password:'Password',
    subBtn:'Submit and Save',
    captcha:'Verification Code',
    agree:'I have read and agreed',
    pro:'"Privacy Statement and Usage Agreement"',
    signupError:'Submit Failed!',
    mustAgree:'You need to agree with this agreement ',
    emailType:'Please select the correct email'
}
ReactDOM.render(<ComponentBinding/>,document.body);
