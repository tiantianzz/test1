import '../../../less/help/src/helpMain.less';
let servers=[
	{
		title:"Useful Tools",
		name:'fly',
		detail:"Logistics Enquiries, Fee Estimation, Mail Limitations",
		link:'http://www.dotdotexpress.com/postage/country'
	},
	{
		title:"Superbuy Delivery Address",
		name:"address",
		detail:"Warehouse address of Superbuy Parcel Forward Service",
		link:'http://www.super.com/en/page/help/#p0_16_helpId131'
	},
	{
		title:"Track Your Order",
		name:"progress",
		detail:"Quick check order status, delivery progress, etc.",
		link:'http://www.super.com/en/page/help/#search_helpId8'
	},
	{
		title:"Urged Delivery",
		name:"post",
		detail:"Shopping Agent Order can be urged for delivery after 3 days",
		link:'http://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&configID=126398&jid=3783013802&skillId=6966&pagetitle=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2&enterurl=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2'
	},
	{
		title:"After-Sales",
		name:"apply",
		detail:"Not delivered, items lost / damaged, logistics enquiries assistance",
		link:'http://www.super.com/en/page/help/#search_helpId31'
	},
	{
		title:"Check Balance",
		name:"bankcard",
		detail:"Check account balance, transaction details, refunds, top up",
		link:'http://www.super.com/en/page/help/#p1_24'
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
													<a target="_blank" href={'http://www.super.com/en/page/help/#search_helpId'+item.helpId}>
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
		console.log(window.location.hash)
		return(
			<div className="right-part">	
				<div className="right-container">
					<h1>
						<div>Self-Service Section</div>
					</h1>
					<div className="container clearfix">
						{servers.map(server => {
							return(
								<a href={server.link}  target='_blank' className="server-item fl" onMouseEnter={this.ActiveSever.bind(this)} onMouseLeave={this.BlurServer.bind(this)}>
									<div className="icon">
											<img className="img" name={server.name}  src={supervar.imgsrc_en+"/help/"+server.name+".png"} />
									</div>
									<h2>{server.title}</h2>
									<h3>{server.detail}</h3>
								</a>
							)
						})}
					</div>
					<h1>
						<div>FAQ</div>
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
						<div>Assistance Video</div>
					</h1>
					<div className="more-v">
						<a className="more" target="_blank" href="/en/page/video/index/">More></a>
					</div>
					<div className="container">
						<div className="videos-wrap clearfix">
							{
								videos.map(video => {
									return (
										<div className="video">
											<div className="videobox">
												<a href="/en/page/video/index/" target="_blank">
													<img className="video-img" src={supervar.imgsrc_en+"/help/"+video.videoImg} />
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
						<div>Contact us</div>
					</h1>
					<div className="container clearfix">
						<div className="contactbox" onMouseEnter={this.ActiveSever.bind(this)} onMouseLeave={this.BlurServer.bind(this)}>
							<div className="icon">
									<img name="user" src={supervar.imgsrc_en+"/help/user.png"} />
							</div>
							<h2>Intelligent Robot</h2>
							<h3>Smart customer service will 24/7 </h3>
							<h3>answer your enquiries</h3>
							<a className="contact-a"
								href="https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&jid=3783013802&codeType=custom&spm=2101.892.N.N.ea0e9b7&s=1"
								target="_blank">Contact now</a>
						</div>
						<div className="contactbox" onMouseEnter={this.ActiveSever.bind(this)} onMouseLeave={this.BlurServer.bind(this)}>
							<div className="icon">
									<img name="server" src={supervar.imgsrc_en+"/help/server.png"} />
							</div>
							<h2>Online Customer Service</h2>
							<h3>Mon – Sun 24hrs</h3>
							<h3>Online Service</h3>
							<a className="contact-a"
								href="http://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&configID=126398&jid=3783013802&skillId=6967&lan=en&pagetitle=%E8%8B%B1%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2&enterurl=%E8%8B%B1%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2
" target="_blank">Contact now</a>
						</div>
						<div className="contactbox" id="qq" onMouseEnter={this.ActiveSever.bind(this)} onMouseLeave={this.BlurServer.bind(this)}>
							<div className="icon">
									<img name="qq" src={supervar.imgsrc_en+"/help/qq.png"} />
							</div>
							<h2>Member Q Group </h2>
							<h3>QQ Group:481656937</h3>
							<h3>Share and Communication</h3>
							<a className="contact-a"
								href="http://bbs.dotdotbuy.com/forum.php?mod=viewthread&tid=57468"
								target="_blank">Join Now</a>
						</div>
						<div className="contactbox" onMouseEnter={this.ActiveSever.bind(this)} onMouseLeave={this.BlurServer.bind(this)}>
							<div className="icon">
									<img name="cmail" src={supervar.imgsrc_en+"/help/cmail.png"} />
							</div>
							<h2>Customer Service Email</h2>
							<h3>service@superbuy.com</h3>
							<h3>better to provide order number</h3>
							<a className="contact-a active"
								href="mailto:service@dotdotbuy.com?spm=2101.892.N.N.1061f70"
								target="_blank"
							>Send Now</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default HelpMain;
