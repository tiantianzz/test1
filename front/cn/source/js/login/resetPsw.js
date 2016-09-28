import '../../less/login/login.less';
import Loading from './src/Loading';
let domain = window.supervar.domain;
supervar.util.setCookie('loginLang', 'zh-CN', 30, `.${domain}`);
//setCookie('googtrans','/zh-CN/zh-CN',30,`www.${domain}`);
//setCookie('googtrans','/zh-CN/zh-CN',30);
//setCookie('lang','zh-cn',365,`.${domain}`);
const eError = ['输入信息不能为空', '输入信息有误', '该邮箱已被占用', '该邮箱未注册'];
const pError = ['输入信息不能为空', '输入信息有误', '请输入6-20个字符密码', '两次输入密码不一致', '密码格式错误','请输入密码'];
const vError = ['输入信息不能为空', '验证码错误'];
const containerH = '18px';
const apiUrl = window.supervar.apiURL_login;
const imgSrc = window.supervar.imgsrc_cn;
const hrefUrl = "/cn/page/";
//密码验证
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
//密码框获得焦点时出现提示信息
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
let pswSame = false; 
class ComponentResetPsw extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	newPsw:null,
			newPswConfirm:null,
			subError:'',
			loginLoading:false,
	    }
	}
	newPswFocus(e){
		passwordFocus(e.target.value,{
			container:this.refs.newPswWarn,
			img:this.refs.newPswImg,
			inner:this.refs.newPswError,
		});
	}
	newPswConfirmFocus(e){
		passwordFocus(e.target.value,{
			container:this.refs.newPswConfirmWarn,
			img:this.refs.newPswConfirmImg,
			inner:this.refs.newPswConfirmError,
		});
	}
	newPswTest(){
		passwordTest(this.state.newPsw,{
			container:this.refs.newPswWarn,
			img:this.refs.newPswImg,
			inner:this.refs.newPswError,
		});
	}
	newPswConfirmTest(){
		passwordTest(this.state.newPswConfirm,{
			container:this.refs.newPswConfirmWarn,
			img:this.refs.newPswConfirmImg,
			inner:this.refs.newPswConfirmError,
		});
		this.state.newPsw!=this.state.newPswConfirm ? pswSame=false : pswSame=true;
		if(!pswSame){
			passwordTest(this.state.newPswConfirm,{
				container:this.refs.newPswConfirmWarn,
				img:this.refs.newPswConfirmImg,
				inner:this.refs.newPswConfirmError,
				confirm:true
			});
		} 
	}
	resetPswKeyDownHandle(e){
		if((e.keyCode).toString()=='13') {this.resetPswHandle();};
	}
	resetPswHandle(){
		let newPsw = (this.refs.newPsw.value).replace(/\+/g,"%2B").replace(/\&/g,"%26");
		let newPswConfirm = (this.refs.newPswConfirm.value).replace(/\+/g,"%2B").replace(/\&/g,"%26");
		let search = window.location.search.replace(/&amp;/g,'&');
		let urlMsg = supervar.util.search2Obj(search);
		let newPswPass = passwordTest(newPsw,{
			container:this.refs.newPswWarn,
			img:this.refs.newPswImg,
			inner:this.refs.newPswError,
		});
		let newPswConfirmPass = passwordTest(newPswConfirm,{
			container:this.refs.newPswConfirmWarn,
			img:this.refs.newPswConfirmImg,
			inner:this.refs.newPswConfirmError,
		});
		newPsw!=newPswConfirm ? pswSame=false : pswSame=true;
		if(!pswSame){
			passwordTest(this.state.newPswConfirm,{
				container:this.refs.newPswConfirmWarn,
				img:this.refs.newPswConfirmImg,
				inner:this.refs.newPswConfirmError,
				confirm:true
			});
		} 
		if(newPswPass&&newPswConfirmPass&&pswSame){
			this.setState({loginLoading:true});
			fetch(`${apiUrl}/api/site/resetpassword`,{
				method:'POST',
				credentials:'include',
				mode:'cors',
				headers:{"Content-type":"application/x-www-form-urlencoded"},
				body:`password=${newPsw}&confirmpassword=${newPswConfirm}&email=${urlMsg.email}&code=${urlMsg.code}`
			})
			.then(response => response.json())
			.then(data => {
				this.setState({subError:data.msg,loginLoading:false});
				switch((data.state).toString()){
					case '0':
						this.refs.forgetPswMain.style.display='none';
						this.refs.forgetPswSuccess.style.display='block';
						break;
					default:
						this.refs.forgetPswError.style.display='block';
						break;
				}
			})
		}

	}
	newShowPassword(e){
		showPassword(this.refs.newPsw,e.target);
	}
	confirmShowPassword(e){
		showPassword(this.refs.newPswConfirm,e.target);
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
	render(){
		return(
			<div>
				<div className="loginContent">
					<div className="logo"><img src={imgSrc+"login/logo.png"}/></div>
					<div className="forgetTitle">{this.props.title}</div>
					<div className="thirdBox forgetPswMain" ref="forgetPswMain">
						<div className="loginMsg">
							<input type="password" ref="newPsw" className="inputS" placeholder={this.props.newPassword} onKeyDown={this.resetPswKeyDownHandle.bind(this)} onFocus={this.newPswFocus.bind(this)} onChange={(e)=>this.setState({newPsw:e.target.value})} onBlur={this.newPswTest.bind(this)}/>
							<div className="showPsw" ><img onClick={this.newShowPassword.bind(this)} src={imgSrc+"login/hidePsw.png"}/></div>
							<div className="waring" ref="newPswWarn">
								<img ref="newPswImg" src={imgSrc+"login/kong.png"}/>
								<span ref="newPswError"></span>
							</div>
						</div>
						<div className="loginMsg">
							<input type="password" ref="newPswConfirm" className="inputS" placeholder={this.props.confirmPsw} onKeyDown={this.resetPswKeyDownHandle.bind(this)} onFocus={this.newPswConfirmFocus.bind(this)} onChange={(e)=>{this.setState({newPswConfirm:e.target.value});}} onBlur={this.newPswConfirmTest.bind(this)}/>
							<div className="showPsw" ><img onClick={this.confirmShowPassword.bind(this)} src={imgSrc+"login/hidePsw.png"}/></div>
							<div className="waring" ref="newPswConfirmWarn">
								<img ref="newPswConfirmImg" src={imgSrc+"login/kong.png"}/>
								<span ref="newPswConfirmError"></span>
							</div>
						</div>
						<div className="loading-box">
							<input type="button" className="btnS" value={this.state.loginLoading==true ? '' : this.props.subBtn} onClick={this.resetPswHandle.bind(this)}/>
							<div className={this.state.loginLoading==true ? "loading loading-active" : "loading loading-default"}><Loading/></div>
						</div>
					</div>
					<div className="thirdBox forgetPswSuccess" ref="forgetPswSuccess">
						<div className="successMsg">
							<div className="sendedEmail">
								<img src={imgSrc+"login/success.png"}/><br/>
								<span>{this.props.success1}</span>
							</div>
							<span className="changePswTxt">{this.props.success2}</span>
							<div>
								<input type="button" className="btnS" onClick={()=>{window.location.href=`//login.${domain}/`}} value={this.props.loginBtn} />
								<input type="button" className="btnS" onClick={()=>{window.location.href=`//www.${domain}/`}} value={this.props.backHome}/>
							</div>
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
ComponentResetPsw.defaultProps = {
    title:'重置密码',
    newPassword:'新密码',
    confirmPsw:'确认密码',
    subBtn:'提交',
    loginBtn:'登录',
    success1:'恭喜您已经重置密码！',
    success2:'现在可以用新密码登录了。',
    backHome:'返回首页',
    subError:'重置密码失败,请重试!',
    tryAgain:'再试一次',
}
ReactDOM.render(<ComponentResetPsw/>,document.body);