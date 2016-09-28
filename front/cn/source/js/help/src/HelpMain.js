import '../../../less/help/src/helpMain.less';
let servers=[
	{
		title:"实用物流工具",
		name:'fly',
		detail:"物流运费查询、包裹查询、",
		line2:"费用估算、邮寄限制",
		link:'http://www.dotdotexpress.com/postage/country'
	},
	{
		title:"SuperBuy收货地址",
		name:"address",
		detail:"SuperBuy仓库的转运服务",
		line2:"寄送地址",
		link:'http://www.super.com/cn/page/help/#p0_16_helpId131'
	},
	{
		title:"配送进度",
		name:"progress",
		detail:"快速查看订单详情、",
		line2:"配送进度等",
		link:'http://www.super.com/cn/page/help/#search_helpId8'
	},
	{
		title:"催促发货",
		name:"post",
		detail:"代购订单超过3天未发货",
		line2:"可在此催促发货",
		link:'http://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&configID=126398&jid=3783013802&skillId=6966&pagetitle=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2&enterurl=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2'
	},
	{
		title:"售后申请",
		name:"apply",
		detail:"未收到包裹、商品少件/有损、",
		line2:"协助查询物流",
		link:'http://www.super.com/cn/page/help/#search_helpId31'
	},
	{
		title:"余额查询",
		name:"bankcard",
		detail:"查询账户余额、消费记录、",
		line2:"退款明细、余额充值",
		link:'http://www.super.com/cn/page/help/#p1_24'
	}
];
let videos=[
	{
		title:"视频名称一二三四五",
		videoLink:'www.baidu.com',
		videoImg:'help1.jpg'
	},
	{
		title:"视频名称一二三四五",
		videoLink:'www.baidu.com',
		videoImg:'help2.jpg'
	}
	,
	{
		title:"视频名称一二三四五",
		videoLink:'www.baidu.com',
		videoImg:'help2.jpg'
	}
]
class ComponentAdvice extends React.Component{
	render(){
		var panels = this.props.panels;
		return (
			<div className="tabs-bd">
				<div className="tab-panel">
						{
							panels.categoryList.map(infos => {
								return (
									<div className="tab-detail">
										<h2>{infos.categoryName}</h2>
										{
											infos.list.map(item => {
												return (
													<p>
														<a target="_blank" href={'http://www.super.com/cn/page/help/#search_helpId'+item.helpId}>
															<span dangerouslySetInnerHTML={{__html:item.helpTitle}}></span>
														</a>
													</p>
												)
											})
										}
									</div>
								)
							})
						}
				</div>
			</div>
		);
	}
}

//export default ComponentAdvice;

class HelpMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTab: 0,
			questions : []
		}
	}

	componentWillMount() {
		this.handlerGetHotQuestions();
	}

	handlerGetHotQuestions(){
		let Url = window.supervar.apiURL+'help/hot-list';
		fetch(Url,{
			method: "POST",
			credentials: 'include',
			headers: {
				"Content-Type":"application/x-www-form-urlencoded"
			}
		})
			.then(response => response.json())
			.then(data => {
				if(data.state.toString()=="0"){
					this.setState({
						questions:data.data.slice(0,3)
					})
				}
			})
	}

	showTabs(e){
		var currentTab=e.target.getAttribute('name');
		this.setState({
				currentTab:parseInt(currentTab)
			}
		)
	}
	ActiveSever(e){
		var eles = e.currentTarget.childNodes;
		for(var i=0;i<eles.length;i++){
			if(eles[i].nodeName =="DIV"){
				var name = eles[i].childNodes[0].name;
				eles[i].childNodes[0].src=supervar.imgsrc_cn+"/help/"+name+"_hover.png";
			}
			else if(eles[i].nodeName =='H3'){
				eles[i].style.color="#429ad3";
			}
			else if(eles[i].nodeName =='A'){
				eles[i].style.color="#ffffff";
				eles[i].style.background="#1268bb";
				eles[i].style.border="1px solid #1268bb";
			}
			else{
				eles[i].style.color="#142341";
			}
		}
	}
	
	BlurServer(e){
		var eles = e.currentTarget.childNodes;
		for(var i=0;i<eles.length;i++){
			if(eles[i].nodeName =="DIV"){
				var name = eles[i].childNodes[0].name;
				eles[i].childNodes[0].src=supervar.imgsrc_cn+"/help/"+name+".png";
			}
			else if(eles[i].nodeName =='H3'){
				eles[i].style.color="#323232";
			}
			else if(eles[i].nodeName =='A'){
				eles[i].style.color="#323232";
				eles[i].style.background="#ffffff";
				eles[i].style.border="1px solid #081b35";
			}
			else{
				eles[i].style.color="#142341";
			}
		}
		
	}
	render() {
		return(
			<div className="right-part">	
				<div className="right-container">
					<h1>
						<div>自助服务区</div>
					</h1>
					<div className="container clearfix">
						{servers.map(server => {
							return(
								<a href={server.link} target='_blank' className="server-item fl" onMouseEnter={this.ActiveSever.bind(this)} onMouseLeave={this.BlurServer.bind(this)}>
									<div className="icon">
											<img className="img" name={server.name}  src={supervar.imgsrc_cn+"/help/"+server.name+".png"} />
									</div>
									<h2>{server.title}</h2>
									<h3>{server.detail}</h3>
									<h3>{server.line2}</h3>
								</a>
							)
						})}
					</div>
					<h1>
						<div>热门问题</div>
					</h1>
					<div className="container">
						{
							this.state.questions.length > 0 ?
							<div>
								<ul className="tabs-nav clearfix" ref="T_nav">
									{
										this.state.questions.map( (li,i )=> {
											return (
												<li>
													<a name={i} className={this.state.currentTab==i?"active":""} onClick={this.showTabs.bind(this)}>{li.categoryName}</a>
												</li>
											)
										})
									}
								</ul>
								<ComponentAdvice panels={this.state.questions[this.state.currentTab]} />
							</div>
							:
							<div></div>
						}
					</div>
					<h1>
						<div>帮助视频</div>
					</h1>
					<div className="more-v">
						<a className="more" target="_blank" href="/cn/page/video/index/">更多></a>
					</div>
					<div className="container">
						<div className="videos-wrap clearfix">
							{
								videos.map(video => {
									return (
										<div className="video">
											<div className="videobox">
												<a href="/cn/page/video/index/" target="_blank">
													<img className="video-img" src={supervar.imgsrc_cn+"/help/"+video.videoImg} />
												</a>
											</div>
											<div className="vname">{video.title}</div>
										</div>
									)
								})
							}
						</div>
					</div>
					<h1>
						<div>联系我们</div>
					</h1>
					<div className="container clearfix">
						<div className="contactbox" onMouseEnter={this.ActiveSever.bind(this)} onMouseLeave={this.BlurServer.bind(this)}>
							<div className="icon">
									<img name="user" src={supervar.imgsrc_cn+"/help/user.png"} />
							</div>
							<h2>智能机器人</h2>
							<h3>智能客服24小时候命</h3>
							<h3>解答您各种咨询</h3>
							<a 	href="https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&jid=3783013802&codeType=custom&spm=2101.892.N.N.ea0e9b7&s=1" 
								target="_blank"
								className="contact-a">立即联系</a>
						</div>
						<div className="contactbox" onMouseEnter={this.ActiveSever.bind(this)} onMouseLeave={this.BlurServer.bind(this)}>
							<div className="icon">
									<img name="server" src={supervar.imgsrc_cn+"/help/server.png"} />
							</div>
							<h2>在线客服</h2>
							<h3>周一至周日24小时</h3>
							<h3>在线服务</h3>
							<a className="contact-a"
								href="http://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&configID=126398&jid=3783013802&skillId=6966&pagetitle=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2&enterurl=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2
" target="_blank">立即联系</a>
						</div>
						<div id="qq" className="contactbox" onMouseEnter={this.ActiveSever.bind(this)} onMouseLeave={this.BlurServer.bind(this)}>
							<div className="icon">
									<img name="qq" src={supervar.imgsrc_cn+"/help/qq.png"} />
							</div>
							<h2>会员Q群 </h2>
							<h3>QQ群:481656937</h3>
							<h3>实时吐槽、分享、交流</h3>
							<a
								href="http://bbs.dotdotbuy.com/forum.php?mod=viewthread&tid=57468"
								target="_blank"
							className="contact-a">立即加入</a>
						</div>
						<div className="contactbox" onMouseEnter={this.ActiveSever.bind(this)} onMouseLeave={this.BlurServer.bind(this)}>
							<div className="icon">
									<img name="cmail" src={supervar.imgsrc_cn+"/help/cmail.png"} />
							</div>
							<h2>客服邮箱</h2>
							<h3>service@superbuy.com</h3>
							<h3>建议提交待解决订单号</h3>
							<a className="contact-a active"
								href="mailto:service@dotdotbuy.com?spm=2101.892.N.N.1061f70"
								target="_blank"
							>发送邮件</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default HelpMain;
