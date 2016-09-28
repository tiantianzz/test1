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
class ComponentForgetPsw extends React.Component {
	constructor(props){
		super(props);
		this.state={subError:'',login_name:'',loginLoading:false,}
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
	loginEmailTest(){
		emailTest(this.state.login_name,{
			container:this.refs.emailWarn,
			inner:this.refs.emailError,
		});
	}
	changeVerifyImg(){
		var theDate = new Date();
		var verifyCodeUrl = `${apiUrl}/api/site/captcha?refresh=`;
    	fetch(verifyCodeUrl + Math.random()+theDate.getTime(),{
    		method:'GET',
			credentials:'include',
			mode:'cors',
			headers:{"Content-type":"application/x-www-form-urlencoded"},
    	}).then(res => res.json()).then(data=>{
    		this.refs.verifyCode.src=apiUrl+data.url;
    	});
	}
	verCodeTest(){
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
					this.setState({verCodeEmpty:false})
		        }else{
		        	this.setState({verCodeEmpty:true})
		        }
			})
		};
	}
	forgetPswKeyDownHandle(e){
		if((e.keyCode).toString()=='13') {this.forgetPswHandle();};
	}
	forgetPswHandle(){
		let user_email = (this.refs.userEmail.value.toString()).replace(/\+/g,"%2B").replace(/\&/g,"%26");
		let reg_captcha = this.refs.captcha.value.toString();
		console.log(user_email)
		let isEmail = emailTest(this.refs.userEmail.value.toString(),{
			container:this.refs.emailWarn,
			inner:this.refs.emailError,
		});
		let isVer = verifyCodeTest(this.refs.captcha.value,{
			container:this.refs.verCodeWarn,
			img:this.refs.verCodeImg,
			inner:this.refs.verCodeError,
		});
		if(isEmail&&isVer){
			this.setState({loginLoading:true});
			fetch(`${apiUrl}/api/site/forgetpassword`,{
				method:'POST',
				credentials:'include',
				mode:'cors',
				headers:{"Content-type":"application/x-www-form-urlencoded"},
				body:`user_email=${user_email}&reg_captcha=${reg_captcha}`
			})
			.then(response => response.json())
			.then(data => {
				this.setState({subError:data.msg,loginLoading:false});
				switch((data.state).toString()){
					case '0':
						this.refs.forgetPswMain.style.display='none';
						this.refs.forgetPswSuccess.style.display='block';
						break;
					case '20006':
						this.changeVerifyImg();
						verifyCodeTest(this.refs.captcha.value,{
							container:this.refs.verCodeWarn,
							img:this.refs.verCodeImg,
							inner:this.refs.verCodeError,
							callbackMsg:data.msg
						})
						break;
					default:
						this.changeVerifyImg();
						this.refs.forgetPswError.style.display='block';
						break;
				}
			})
		}
	}
	retryHandle(){
		this.refs.forgetPswError.style.display='none';
	}
	mouseOverHandle(e){
		e.target.src=imgSrc+"login/close2.png";
	}
	mouseOutHandle(e){
		e.target.src=imgSrc+"login/close1.png";
	}
	mouseDownHandle(e){
		e.target.src=imgSrc+"login/close3.png";
	}
	componentDidMount(){
		if(window.location.href.indexOf('?') != -1 && /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/.test(window.location.href.split('?')[1].split('=')[1])){
			this.refs.userEmail.value = window.location.href.split('?')[1].split('=')[1]
		}
		this.emailAuto(document.getElementById('loginEmail'),document.getElementById('loginList'),'login');
	}
	render(){
		return(
			<div>
				<div className="loginContent">
					<div className="logo"><img src={imgSrc+"login/logo.png"}/></div>
					<div className="forgetTitle">{this.props.title}</div>
					<div className="thirdBox forgetPswMain" ref="forgetPswMain">
						<div className="loginMsg">
							<input type="text" id="loginEmail" value={this.state.login_name}  list="loginList" ref="userEmail"  className="inputS" placeholder={this.props.email} onKeyDown={this.forgetPswKeyDownHandle.bind(this)} onChange={(e)=>{this.setState({login_name:e.target.value});}} onBlur={this.loginEmailTest.bind(this)}/>
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
							<div className="waring" ref="emailWarn">
								<img src={imgSrc+"login/kong.png"}/>
								<span ref="emailError"></span>
							</div>
						</div>
						<div  className="loginMsg">
							<input type="text" ref="captcha" maxLength="4" className="inputS" placeholder={this.props.captcha} onKeyDown={this.forgetPswKeyDownHandle.bind(this)} onBlur={this.verCodeTest.bind(this)}/>
							<div className="verCode">
								<img src={apiUrl+"/api/site/captcha"} ref="verifyCode" onClick={this.changeVerifyImg.bind(this)} title="Not clear? Click to change"/>
								</div>
							<div className="waring "  ref="verCodeWarn">
								<img ref="verCodeImg" src={imgSrc+"login/kong.png"}/>
								<span ref="verCodeError"></span>
							</div>
						</div>
						<div className="loading-box">
							<input type="button" className="btnS" value={this.state.loginLoading==true ? '' : this.props.subBtn} onClick={this.forgetPswHandle.bind(this)}/>
							<div className={this.state.loginLoading==true ? "loading loading-active" : "loading loading-default"}><Loading/></div>
						</div>
						<div className="forgetLogin">
							<div>{this.props.haveAccount}</div>
							<a href={`//login.${domain}/`}>{this.props.loginBtn}</a>
							{/*<input type="button" className="btnS" value={this.props.loginBtn} onClick={()=>{window.location.href="/cn/page/login/"}}/>*/}
						</div>
						
					</div>
					<div className="thirdBox forgetPswSuccess" ref="forgetPswSuccess">
						<div className="successMsg">
							<div className="sendedEmail">
								<img src={imgSrc+"login/success.png"}/><br/>
								<span>{this.props.success1}</span>
							</div>
							<span className="changePswTxt">{this.props.success2}</span>
							<input type="button" className="btnS" value={this.props.backHome} onClick={()=>{window.location.href=`//www.${domain}/`}}/>
						</div>
					</div>
					<div className="copyTxt">CopyRight&copy;2012-2015&nbsp;superbuy.com&nbsp;All&nbsp;Rights&nbsp;Reserved</div>

				</div>
				<div className="forgetPswError" ref="forgetPswError">
					<div className="thirdBox errorBox">
						<img className="errorWarn" src={imgSrc+"login/warning.png"}/><br/>
						<p>{this.state.subError}</p>
						<div>
							<input type="button" className="btnS backHome" onClick={()=>{window.location.href=`//www.${domain}/`}} value={this.props.backHome} />
							<input type="button" className="btnS retry" value={this.props.tryAgain} onClick={this.retryHandle.bind(this)}/>
						</div>
						<img className="closeImg" src={imgSrc+"login/close1.png"} onClick={this.retryHandle.bind(this)} onMouseOver={this.mouseOverHandle.bind(this)} onMouseOut={this.mouseOutHandle.bind(this)} onMouseDown={this.mouseDownHandle.bind(this)}/>
					</div>
				</div>
			</div>
		)
	}
}
ComponentForgetPsw.defaultProps = {
    title:'FORGOT PASSWORD',
    email:'E-mail',
    captcha:'Verification Code',
    subBtn:'Submit',
    haveAccount:'I have an account',
    loginBtn:'Login',
    success1:'Retrieving password email has been sent',
    success2:'Please click on the link, within 24 hours, to reset your password',
    backHome:'Back Home',
    subError:'Submission failed. Please try again. ',
    tryAgain:'Retry',
    emailType:'Please select the correct email'
}
ReactDOM.render(<ComponentForgetPsw/>,document.body);
