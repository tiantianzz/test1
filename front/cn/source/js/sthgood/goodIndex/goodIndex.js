import '../../../less/sthgood/goodIndex/goodIndex.less';
import SecNavBox from './src/SecNav';
const imgsrc=window.supervar.imgsrc_cn+"sthgood/goodIndex/";
const apiUrl=window.supervar.apiURL;
const domain = window.supervar.domain;
const hrefUrl ="/cn/page/";
const APILanguage = 'cn';
const listTitle=[
	{"title":"Men Fashion"},
	{"title":"Cyber Center"},
	{"title":"Home & Garden"},
	{"title":"Creative toys"},
	{"title":"Travel & Bags"},
	{"title":"Cosmetics"},
	{"title":"Baby Time"},
	{"title":"Miscellaneous"},
];
const topSelect = [
	{
		"id":"0",
		"title":"新品TOP榜",
	},{
		"id":"1",
		"title":"热销TOP榜",
	},{
		"id":"2",
		"title":"本地TOP榜",
	}
];
const model = {
	reasons : {
        title : '为什么选择',
	    content : ['大客户服务','0元服务费','个性化服务','无忧赔付','品牌价值'],
	    learnMore : {
	        txt : '了解更多',
	        href : '#'
	    }
    }
}
//轮播图
let topBannerInterval;
class TopBanner extends React.Component{
	constructor(props){
		super(props);
		this.state={bannerOver:false,topBannerLen:0,topBannerIndex:0,requestData:[]}
	}
	moveToLeft(){
		if(this.state.topBannerLen+this.state.topBannerIndex==1){
			this.setState({bannerOver:true,topBannerIndex:1})
		}else{
			this.setState({bannerOver:false})
		}
		this.setState({topBannerIndex:--this.state.topBannerIndex,})
	}
	turnRight(){
		if(this.state.topBannerIndex>-this.state.topBannerLen+1){
			this.setState({topBannerIndex:--this.state.topBannerIndex,})
		}
	}
	turnLeft(){
		if(this.state.topBannerIndex<0){
			this.setState({topBannerIndex:++this.state.topBannerIndex,})
		}
	}
	componentDidMount(){
		let that = this;
		topBannerInterval=setInterval(function(){that.moveToLeft();},timeSpan);
		fetch(`${apiUrl}advert/vert?platform=web&position=superGoodsIndex`,{
			method:"GET",
			credentials:'include',
		}).then(res => res.json())
		.then(data => {
			this.setState({requestData:data.data,topBannerLen:data.data.length})
		}).catch(ex=> console.log("banner is loading failed",ex));
	}
	render(){
		return(
			<div className="banner" onMouseOver={()=>{clearInterval(topBannerInterval)}} onMouseOut={()=>{let that = this;topBannerInterval=setInterval(function(){that.moveToLeft();},timeSpan);}}>
				<div className="banner-box">
					<ul ref="banner" className="ul-move" style={{transform:"translateX("+this.state.topBannerIndex*100+"%)"}}>
	        		{
	        			this.state.requestData.map((a)=>{
	        				return(<li><a href={a.href} target="_blank"><img src={a.img} alt={a.alt}/></a></li>)
	        			})
	        		}
					</ul>
					<div className="bannerTag">
						{
							this.state.requestData.map((a,b)=>{
	            				return(<span onClick={(e)=>{this.setState({topBannerIndex:parseInt(e.currentTarget.getAttribute('name'))})}} name={-b} className={this.state.topBannerIndex==-b ? "bannerTag-active" : "bannerTag-default"}></span>)
	            			})
						}
					</div>
					<div className="banner-change">
						<div className="banner-left"><img src={imgsrc+"banner_left.png"} onClick={this.turnLeft.bind(this)}/></div>
						<div className="banner-right"><img src={imgsrc+"banner_right.png"} onClick={this.turnRight.bind(this)}/></div>
					</div>
				</div>
            </div>
		)
	}
}
//发现好品牌-左边
class FindLeft extends React.Component{
	constructor(props){
		super(props);
		this.state={leftHover:false,leftIndex:0,requestData:[]}
	}
	componentDidMount(){
		fetch(`${apiUrl}shoppingguide/recommend-brand?language=${APILanguage}`,{
			method:"GET",
			credentials:'include',
		}).then(res => res.json())
		.then(data => {
			this.setState({requestData:data.data})
		}).catch(ex=> console.log("推荐品牌 is loading failed",ex));
	}
	render(){
		return(
			<div className="find-left">
				<div className="left-top">
					<h1>{this.props.pinpai}</h1>
					<a className="look-more" href={hrefUrl+"sthgood/brand"} target="_blank">{this.props.more}</a>
				</div>
				<div className="left-middle" onMouseOver={()=>{this.setState({leftHover:true})}} onMouseOut={()=>{this.setState({leftHover:false})}}>
					<ul style={{left:this.state.leftIndex*310+"px"}}>
					{
						this.state.requestData.map((a,b)=>{if(b<2)
							return (
								<li>
									<img className="left-img" src={a.img}/>
									<div className="left-msg">
										<span>{a.shopName}</span>
										<p>{a.benefitDesc}</p>
									</div>
									<div className={this.state.leftHover==true ? "left-middle-text left-middle-active" : "left-middle-text left-middle-default"}>
										<img src={a.shopImg}/>
										<a href={a.href} target="_blank"><input type="button" value={this.props.interBtn} /></a>
									</div>
								</li>
							)
						})
					}
					</ul>
					<div className="left-middle-border"></div>
				</div>

				<div className="bannerTag leftTag">
					{
						this.state.requestData.map((a,b)=>{if(b<2)
            				return(<span onMouseOver={(e)=>{this.setState({leftIndex:parseInt(e.currentTarget.getAttribute('name'))})}} name={-b} className={this.state.leftIndex==-b ? "bannerTag-active" : "bannerTag-default"}></span>)
            			})
					}
				</div>
				
			</div>
		)
	}
}
//发现好品牌-列表内容
class FindList extends React.Component{
	render(){
		return(
			<div className="find-right-middle">
				<div className="find-right-list">
					{
						this.props.name.map((a,b)=>{if(b<4)
							return(
								<div className="right-listbox">
									<img className="big-img" src={a.img}/>
									<div className="listbox-bottom">
										<img className="small-img" src={a.shopImg}/>
										<div className="listbox-bottom-box">
											<div className="listbox-bottom-move">
												<span>{a.shopName}</span>
												<p>{a.benefitDesc}</p>
												<a href={a.href} target="_blank"><input type="button" value={this.props.interBtn} /></a>
											</div>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
				<div className="find-right-bottom">
					{
						this.props.name.map((a,b)=>{if(b>=4&&b<9)
							return(<a href={a.href} target="_blank"><img src={a.shopImg}/></a>)
						})
					}
				</div>
			</div>
			
		)
	}
	
}
//发现好品牌-父组件
let findCurrentPage = 1;
class Find extends React.Component{
	constructor(props){
		super(props);
		this.state={spanActive:0,requestData:[],requestListData:[],requestFindDetailData:[],findPage:1}
	}
	componentDidMount(){
		fetch(`${apiUrl}shoppingguide/child-cat-list?language=${APILanguage}`,{
			method:"GET",
			credentials:'include',
		}).then(res => res.json())
		.then(data => {
			this.setState({requestListData:data.data,spanActive:data.data[0].id});
			fetch(`${apiUrl}shoppingguide/child-get-cat-list?currPage=1&pageSize=9&language=${APILanguage}&cat=${data.data[0].id}`,{
				method:"GET",
				credentials:'include',
			}).then(res => res.json())
			.then(data => {
				this.setState({
					requestFindDetailData:data.data.listResult,
					findPage:Math.ceil(data.data.totalRow/data.data.pageSize)
				})
			}).catch(ex=> {this.setState({requestFindDetailData:[{'title':this.props.noData}]});console.log("特定分类有好店列表-初始化  is loading failed",ex)});
		}).catch(ex=> console.log("有好店分类  is loading failed",ex));
		
		
	}
	changeList(e){
		let tabIndex = e.currentTarget.getAttribute('name');
		for(var i=0;i<this.state.requestListData.length;i++){
			document.getElementsByClassName('find-list-title')[i].className='span-default find-list-title';
		}
		e.target.className = 'span-active find-list-title';
		this.setState({spanActive:tabIndex});
		fetch(`${apiUrl}shoppingguide/child-get-cat-list?currPage=1&pageSize=9&language=${APILanguage}&cat=${parseInt(tabIndex)}`,{
			method:"GET",
			credentials:'include',
		}).then(res => res.json())
		.then(data => {
			this.setState({requestFindDetailData:data.data.listResult,findPage:Math.ceil(data.data.totalRow/data.data.pageSize)})
		}).catch(ex=>{this.setState({requestFindDetailData:[{'title':this.props.noData}]});console.log("特定分类有好店列表  is loading failed",ex)} );
	}
	refreshHandle(e){
		findCurrentPage++;
		findCurrentPage > this.state.findPage ? findCurrentPage=1 : '';
		let cat = parseInt(this.state.spanActive);
		fetch(`${apiUrl}shoppingguide/child-get-cat-list?currPage=${findCurrentPage}&pageSize=9&language=${APILanguage}&cat=${cat}`,{
			method:"GET",
			credentials:'include',
		}).then(res => res.json())
		.then(data => {
			this.setState({requestFindDetailData:data.data.listResult})
		}).catch(ex=> {console.log("特定分类有好店列表-刷新findCurrentPage  is loading failed",ex);});
	}
	render(){
		return(
			<div className="findbox">
				<FindLeft />
				<div className="find-right">
					<div className="title-nav">
						{
							this.state.requestListData.map((a,b)=>{if(b<6)
								return(<span className={b==0 ? "span-active find-list-title" : "span-default find-list-title"} name={a.id} onClick={this.changeList.bind(this)}>{a.categoryName}</span>)
							})
						}
					</div>
					<div className="find-right-change" onClick={this.refreshHandle.bind(this)}><img src={imgsrc+"find_refresh.png"}/>{this.props.change}</div>
					<FindList name={this.state.requestFindDetailData}/>
				</div>
			</div>
		)
	}
}
class TopData extends React.Component{
	constructor(props){
		super(props);
		this.state={shopActive:-1}
	}
	render(){
		return(
			<div className="topselect-list">
				{
					this.props.name.map((a,b)=>{
						return(
							<div name={b} className="topselect-listbox"  onMouseOver={(e)=>{this.setState({shopActive:e.currentTarget.getAttribute('name')})}} onMouseOut={()=>{this.setState({shopActive:-1})}}>
								<a href={`${hrefUrl}buy/?url=${encodeURIComponent(a.href)}`} target="_blank"><img src={a.img}/>
								<div className={this.state.shopActive==b ? "add2-shopcar add2-shopcar-active" : "add2-shopcar add2-shopcar-default"}>
									<span>{this.props.shopCar}</span>
								</div>
								</a>
								<div className="goods-detail">
									<span className="price">¥{a.price}</span><span className="oldPrice">¥{a.discountPrice}</span>
									<p title={a.title}>{a.title.length>=25 ? a.title.substring(0,25)+'...' : a.title}</p>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}
//top榜内容列表
class TopSelectList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			spanActive:0,
			newsActive:false,
			topData:[],
			newTopData:[],
			hotTopData:[],
			localTopData:[],
			requestTopDetailData:[],
		}
	}
	changeList(e){
		let tabIndex = e.currentTarget.getAttribute('name');
		var topSelectUrl = `${apiUrl}top/news?pagesize=10`;
		this.setState({spanActive:tabIndex});
		switch(tabIndex){
			case '0':
				this.setState({newsActive:false,topData:this.state.newTopData});
				break;
			case '1':
				this.setState({newsActive:true,topData:this.state.hotTopData});
				break;
			case '2':
				this.setState({newsActive:false,topData:this.state.localTopData});
				break;
		}
	}
	componentDidMount(){
		//新品top
		fetch(`${apiUrl}top/news?pagesize=10&language=${APILanguage}`,{
			method:"POST",
			credentials:'include',
			headers:{"Content-type":"application/x-www-form-urlencoded"}
		}).then(res => res.json())
		.then(data => {
			this.setState({newTopData:data.data,topData:data.data})
		}).catch(ex=> console.log("newTop is loading failed",ex));
		
		//热销top
		fetch(`${apiUrl}top/hot?pagesize=10&language=${APILanguage}`,{
			method:"POST",
			credentials:'include',
			headers:{"Content-type":"application/x-www-form-urlencoded"}
		}).then(res => res.json())
		.then(data => {
			this.setState({hotTopData:data.data})
		}).catch(ex=> console.log("hotTop is loading failed",ex));
		
		//本地top
		fetch(`${apiUrl}top/area?pagesize=10&language=${APILanguage}`,{
			method:"POST",
			credentials:'include',
			headers:{"Content-type":"application/x-www-form-urlencoded"}
		}).then(res => res.json())
		.then(data => {
			this.setState({localTopData:data.data})
		}).catch(ex=> console.log("localTopData is loading failed",ex))
	}
	render(){
		return(
			<div>
				<div className="title-nav topselect-nav">
					{
						topSelect.map((a,b)=>{
							return(<span name={b}  className={this.state.spanActive==b ? "span-active" : "span-default"} onClick={this.changeList.bind(this)}>{a.title}</span>)
						})
					}
				</div>
				<div className={this.state.newsActive==true ? "news" : "news-close" }>
					{this.props.news}
					<span>{this.props.time}</span>
					<span className="close" onClick={()=>{this.setState({newsActive:false})}}><img src={imgsrc+"topSelect_close.png"}/></span>
				</div>
				<TopData name={this.state.topData}/>
			</div>
			
		)
	}
}
//购物时报
let [timeSpan,newsIndex,newsBannerLen,buyNewsInterval] = [4000,0,0];
class TopSelectBuyNews extends React.Component{
	constructor(props){
		super(props);
		this.state={bannerOver:false,requestNewsData:[]}
	}
	moveToTop(){
		newsIndex--;
		if(newsBannerLen+newsIndex==-1){
			newsIndex=0;
			this.setState({bannerOver:true});
		}else{
			this.setState({bannerOver:false})
		}
		this.refs.newsBanner.style.top=newsIndex*53+"px";
		
	}
	userImgError(e){
		e.target.src='/cn/source/img/Header/avatar-default.png';
		e.target.style.backgroundColor = '#4f5360'
	}
	componentDidMount(){
		let that = this;
		buyNewsInterval=setInterval(function(){that.moveToTop();},timeSpan/2);
		
		fetch(`${apiUrl}shoppingguide/sale-daily?language=${APILanguage}&currPage=1&pageSize=21`,{
			method:"GET",
			credentials:'include',
		}).then(res => res.json())
		.then(data => {
			newsBannerLen = data.data.listResult.length;
			this.setState({requestNewsData:data.data.listResult})
		}).catch(ex=> console.log("buyNews  is loading failed",ex));
	}
	render(){
		return(
			<div className="buy-news">
				<h1>{this.props.buyNews}</h1>
				<div className="new-box" onMouseOver={()=>{clearInterval(buyNewsInterval);}} onMouseOut={()=>{let that = this;buyNewsInterval=setInterval(function(){that.moveToTop();},timeSpan/2);}}>
					<ul ref="newsBanner" className={this.state.bannerOver==true ? "news-over" : "news-move"}>
						{
							this.state.requestNewsData.map((a)=>{
								return(
									<li>
										<img src={a.userImg} onError={this.userImgError.bind(this)}/>
										<p>{this.props.time}<a title={a.title} href={`${hrefUrl}buy/?url=${encodeURIComponent(a.href)}`} target="_blank">{a.title.length>=24 ? a.title.substring(0,24)+'...' : a.title}</a></p>
									</li>
								)
							})
						}
						{
							this.state.requestNewsData.map((a,b)=>{if(b<3)
								return(
									<li>
										<img src={a.userImg}/>
										<p>{this.props.time}<a title={a.title} href={`${hrefUrl}buy/?url=${encodeURIComponent(a.href)}`} target="_blank">{a.title.length>=24 ? a.title.substring(0,24)+'...' : a.title}</a></p>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}
//今日头条
class TopSelectTodayNews extends React.Component{
	constructor(props){
		super(props);
		this.state={bannerOver:false,requestTodayNewsData:[]}
	}
	componentDidMount(){
		fetch(`${apiUrl}shoppingguide/today-front-page?language=${APILanguage}&currPage=1&pageSize=8`,{
			method:"GET",
			credentials:'include',
		}).then(res => res.json())
		.then(data => {
			this.setState({requestTodayNewsData:data.data.listResult})
		}).catch(ex=> console.log("今日头条  is loading failed",ex));
	}
	render(){
		return(
			<div className="today-news">
				<h1>{this.props.todayNews}</h1>
				<ul>
					{
						this.state.requestTodayNewsData.map((a,b)=>{let timeStart = new Date(a.startTime*1000);if(b<4)
							return(
								<li><a title={a.title} href={a.href} target="_blank">【{a.sellerPlatform}】{a.title}</a><span>{(timeStart.getMonth()+1)+'/'+timeStart.getDate()}&nbsp;({a.processStatusName})</span></li>
							)
						})
					}
				</ul>
				<div className="ul-border"></div>
				<ul>
					{
						this.state.requestTodayNewsData.map((a,b)=>{let timeStart = new Date(a.startTime*1000);if(b>=4&&b<8)
							return(
								<li><a title={a.title} href={a.href} target="_blank">【{a.sellerPlatform}】{a.title}</a><span>{(timeStart.getMonth()+1)+'/'+timeStart.getDate()}&nbsp;({a.processStatusName})</span></li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}	
//top榜父组件
class TopSelect extends React.Component{
	render(){
		return(
			<div className="topselect">
				<h1>{this.props.topSelect}</h1>
				<p className="sub-title">{this.props.buy}</p>		
				<TopSelectList />
				<TopSelectBuyNews />
				<TopSelectTodayNews />
			</div>
		)
	}
}
//边看边买
class LookBuy extends React.Component{
	constructor(props){
		super(props);
		this.state={requestData:[]}
	}
	componentDidMount(){
		fetch(`${apiUrl}shoppingguide/look-buy?language=${APILanguage}&currPage=1&pageSize=4`,{
			method:"GET",
			credentials:'include'
		}).then(res => res.json())
		.then(data => {
			this.setState({requestData:data.data.listResult})
		}).catch(ex=> console.log("LookBuy is loading failed",ex))
	}
	render(){
		var thisState = this.state.requestData;
		return(
			<div className="lookbuy-bg">
				<div className="lookbuy">
					<h1>{this.props.lookBuy}</h1>
					<p className="sub-title">{this.props.rules}<a href={hrefUrl+'sthgood/videoList/'}>{this.props.allVideo}</a></p>
					<div className="video-box">
						<a href={thisState.length!=0 ? hrefUrl+"sthgood/video/?id="+thisState[0].id : ''} target="_blank">
							<div className="video-left-box">
								<div className="video-source">
									<img className="video-img" src={thisState.length!=0 ? thisState[0].videoImg : ''}/>
									<div className="video-begin"></div>
								</div>
								<div className="video-info">
									<div className="video-title">{thisState.length!=0 ? thisState[0].title : '' }</div>
									{/**  推荐指数
									<div className="video-likeNums">{this.props.likeNums}
										<div className="video-start" style={{backgroundPositionX:((thisState.length!=0 ? thisState[0].likeNums :0)-5)*13+"px"}}></div>
									</div>
									
									<div className="video-browseNums">{thisState.length!=0 ? thisState[0].browseNums : '' }</div>
									**/}
								</div>
							</div>
						</a>
						<div className="video-box-list">
						{
							this.state.requestData.map((a)=>{
								return(
									<a href={hrefUrl+"sthgood/video/?id="+a.id} target="_blank">
										<div className="video-item-box">
											<div className="video-source">
												<img className="video-img" src={a.videoImg}/>
												<div className="video-begin"></div>
											</div>
											<div className="video-info">
												<div className="video-title">{a.title}</div>
												{/**  推荐指数
												<div className="video-likeNums">{this.props.likeNums}
													<div className="video-start" style={{backgroundPositionX:(a.likeNums-5)*13+"px"}}></div>
												</div>
												
												<div className="video-browseNums">{a.browseNums}</div>
												**/}
											</div>
										</div>
									</a>
								)
							})
						}
						</div>
					</div>
					
				</div>
			</div>
		)
	}
}
//流行经典
class Classics extends React.Component{
	constructor(props){
		super(props);
		this.state={requestData:[]}
	}
	componentDidMount(){
		fetch(`${apiUrl}shoppingguide/category-product?language=${APILanguage}&pageSize=10`,{
			method:"GET",
			credentials:'include'
		}).then(res => res.json())
		.then(data => {
			this.setState({requestData:data.data})
		}).catch(ex=> console.log("Classics is loading failed",ex))
	}
	render(){
		return(
			<div className="classics">
				<h1>{this.props.classics}</h1>
				<p className="sub-title">{this.props.choice}
					{/**<a className="look-more" href="#">{this.props.classicsMore}</a>**/}
				</p>
				<div className="classics-box">
					<div className="classics-left">
						<a href={this.state.requestData.length != 0 ? hrefUrl+"subject/subject.html?id="+this.state.requestData[0].id : ''} target="_blank" >
							<img src={this.state.requestData.length != 0 ?  this.state.requestData[0].headImgHref : ''}/>
						</a>
					</div>
					<div className="classics-right">
						{
							this.state.requestData.length != 0 ? 
							this.state.requestData[0].boardProductList.map((a,b)=>{if(b<4)
								return(
									<div>
										<a href={`${hrefUrl}buy/?url=${encodeURIComponent(a.href)}`} target="_blank"><img src={a.img}/></a>
										<p>¥{a.price}</p>
									</div>
								)
							})
							: ''
						}
					</div>
					<div className="classics-bottom">
						{
							this.state.requestData.length != 0 ? 
							this.state.requestData[0].boardProductList.map((a,b)=>{if(b>=4&&b<10)
								return(
									<div>
										<a href={`${hrefUrl}buy/?url=${encodeURIComponent(a.href)}`} target="_blank"><img src={a.img}/></a>
										<p>¥{a.price}</p>
									</div>
								)
							})
							: ''
						}
					</div>
				</div>
				
			</div>
		)
	}
}
//趣创意
let [ideasIndex,ideasBannerLen,ideasBannerInterval] = [0,0]
class Ideas extends React.Component{
	constructor(props){
		super(props);
		this.state={bannerOver:false,requestData:[]}
	}
	moveToLeft(){
		ideasIndex--;
		if(ideasBannerLen+ideasIndex==-1){
			ideasIndex=0;
			this.setState({bannerOver:true})
		}else{
			this.setState({bannerOver:false})
		}
		this.refs.banner.style.left=ideasIndex*372+"px";
	}
	turnLeft(){
		this.moveToLeft();
	}
	turnRight(){
		if(ideasIndex<0){
			ideasIndex++;
			this.refs.banner.style.left=ideasIndex*372+"px";
		}
		
	}
	componentDidMount(){
		let that = this;
		//ideasBannerInterval=setInterval(function(){that.moveToLeft();},timeSpan);
		fetch(`${apiUrl}shoppingguide/category-group?language=${APILanguage}&pageSize=9`,{
			method:"GET",
			credentials:'include'
		}).then(res => res.json())
		.then(data => {
			ideasBannerLen = data.data.length;
			this.setState({requestData:data.data})
		}).catch(ex=> console.log("Ideas is loading failed",ex))
	}
	render(){
		return(
			<div className="ideas" 
//				onMouseOver={()=>{clearInterval(ideasBannerInterval)}} 
//				onMouseOut={()=>{let that = this;ideasBannerInterval=setInterval(function(){that.moveToLeft();},timeSpan);}}
				>
				<h1>{this.props.ideas}</h1>
				<p className="sub-title">{this.props.choice}
					<a className="look-more" href={hrefUrl+"sthgood/ideas/"}>{this.props.ideasMore}</a>
				</p>
				<div className="ideas-content">
					<div className="ideas-nav">
						<ul ref="banner" className={this.state.bannerOver==true ? "ul-over" : "ul-move"}>
		            		{
		            			this.state.requestData.map((a)=>{
		            				return(
		            					<li>
		            						<a href={hrefUrl+"subject/subject.html?id="+a.id}><img src={a.listImgHref}/></a>
		            						<div className="ideas-type"><span title={a.categoryName}>{a.categoryName}</span></div>
		            						<div className="ideas-title">
		            							<span title={a.deputyCategoryName}>{a.deputyCategoryName}</span>
		            							<span title={a.desc}>{a.desc}</span>
		            						</div>
		            					</li>
		            				)
		            			})
		            		}
		            		{
		            			this.state.requestData.lenght>=3 ? 
		            			this.state.requestData.map((a,b)=>{if(b<3)
		            				return(
		            					<li>
		            						<a href={hrefUrl+"subject/subject.html?id="+a.id}><img src={a.listImgHref}/></a>
		            						<div className="ideas-type"><span title={a.categoryName}>{a.categoryName}</span></div>
		            						<div className="ideas-title">
		            							<span title={a.deputyCategoryName}>{a.deputyCategoryName}</span>
		            							<span title={a.desc}>{a.desc}</span>
		            						</div>
		            					</li>
		            				)
		            			})
		            			:
		            			''
		            		}
		                </ul>
					</div>
					<div className="turn-left"><img src={imgsrc+"turn_left.png"} onClick={this.turnLeft.bind(this)}/></div>
					<div className="turn-right"><img src={imgsrc+"turn_right.png"} onClick={this.turnRight.bind(this)}/></div>
				</div>
				
			</div>
		)
	}
}
//有好店
let [goodshopIndex,goodshopBannerLen]=[0,0];
class Goodshop extends React.Component{
	constructor(props){
		super(props);
		this.state={bannerOver:false,requestData:[]}
	}
	moveToLeft(){
		goodshopIndex--;
		if(goodshopBannerLen+goodshopIndex==-1){
			goodshopIndex=0;
			this.setState({bannerOver:true})
		}else{
			this.setState({bannerOver:false})
		}
		this.refs.banner.style.left=goodshopIndex*370+"px";
	}
	turnLeft(){
		this.moveToLeft();
	}
	turnRight(){
		if(goodshopIndex<0){
			goodshopIndex++;
			this.refs.banner.style.left=goodshopIndex*370+"px";
		}
	}
	componentDidMount(){
		let that = this;
		var goodshopBannerInterval=setInterval(function(){that.moveToLeft();},timeSpan);
		
		fetch(`${apiUrl}shoppingguide/guide-goods?language=${APILanguage}&currPage=1&pageSize=9`,{
			method:"GET",
			credentials:'include'
		}).then(res => res.json())
		.then(data => {
			goodshopBannerLen = data.data.listResult.length;
			this.setState({requestData:data.data.listResult})
		}).catch(ex=> console.log("有好店 is loading failed",ex))
	}
	render(){
		return(
			<div className="goodshop">
				<h1>{this.props.goodshop}</h1>
				<p>{this.props.choice}
					<a className="look-more" href="#">{this.props.goodshopMore}</a>
				</p>
				<div className="goodshop-content">
					<div className="goodshop-nav">
						<ul ref="banner" className={this.state.bannerOver==true ? "ul-over" : "ul-move"}>
		            		{
		            			this.state.requestData.map((a)=>{
		            				return(<li><a href={a.href}><img alt={a.alt} src={a.img}/></a></li>)
		            			})
		            		}
		            		{
		            			this.state.requestData.map((a,b)=>{if(b<3)
		            				return(<li><a href={a.href}><img alt={a.alt} src={a.img}/></a></li>)
		            			})
		            		}
		                </ul>
					</div>
					<div className="turn-left"><img src={imgsrc+"turn_left.png"} onClick={this.turnLeft.bind(this)}/></div>
					<div className="turn-right"><img src={imgsrc+"turn_right.png"} onClick={this.turnRight.bind(this)}/></div>
				</div>
				
			</div>
		)
	}
}


class Content extends React.Component{
    render(){
        return(
            <div className="content">
            	<TopBanner />
        		<SecNavBox />
        		<Find />
        		<TopSelect />
        		<LookBuy />
        		<Classics />
        		<Ideas />
        	{/**<Goodshop />**/}
        		<div className="buy-reasons">
				    <dl className="clearfix">
				        <dt><span>{model.reasons.title}</span><br/><em>Superbuy</em></dt>
				        {model.reasons.content.map(item=><dd><i></i><span>{item}</span></dd>)}
				    </dl>
				   {/**<a className="look-more" href={model.reasons.learnMore.href}>{model.reasons.learnMore.txt}</a>**/}
				</div>
            </div>
        )
    }
}
FindList.defaultProps={
	interBtn:'进入店铺',
}
FindLeft.defaultProps={
	pinpai:'发现好品牌',
	more:'查看更多',
	yuanchuang:'原创精神&艺术潮',
	zhekou:'新品8折优惠  满199立减20',
	interBtn:'进入店铺',
}
Find.defaultProps={
	interBtn:'进入店铺',
	change:'换一批',
	noData:'暂无数据'
}
TopData.defaultProps={
	shopCar:"立即购买",
}
TopSelectList.defaultProps={
	save:"收藏",
	news:"榜单规则：每月Superbuy全站销量TOP10的商品上榜",
	time:"更新时间：每月第二周周二北京时间12:00更新",
}
TopSelect.defaultProps={
	topSelect:"全球TOP精选",
	buy:"大家都在买",
	
}
TopSelectBuyNews.defaultProps={
	buyNews:"购物时报",
	time:"在刚刚购买了"
}
TopSelectTodayNews.defaultProps={
	todayNews:"大平台今日头条",
}
LookBuy.defaultProps={
	lookBuy:"边看边买",
	rules:"视频是检验好货的真实标准",
	allVideo:"查看全部视频",
	likeNums:"推荐指数"
}
Classics.defaultProps={
	classics:"Superbuy流行经典",
	choice:"为你精心挑选",
	classicsMore:"查看更多",
	classicsLeftText:"中式潮牌 X 匠心督造 "
}
Ideas.defaultProps={
	ideas:"Superbuy趣创意",
	choice:"好奇有趣在这里",
	ideasMore:"查看更多",
}
Goodshop.defaultProps={
	goodshop:"Superbuy好店驾到",
	choice:"为您精心挑选",
	goodshopMore:"查看更多",
}
var Wrap = window.supervar.Wrap;
var content=ReactDOM.render(
    <Wrap content={Content} />,
    document.getElementById("container")
);

