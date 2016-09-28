import '../../less/subject/subject.less';

const imgsrc=window.supervar.imgsrc_cn+"subject/";
const apiUrl=window.supervar.apiURL;
const hrefUrl ="/en/page/";
const APILanguage = 'en';
/* your logic code */
const jsonData = {
    brand:[{img:"#",href:"#"},{img:"#",href:"#"},{img:"#",href:"#"},{img:"#",href:"#"},{img:"#",href:"#"},{img:"#",href:"#"},{img:"#",href:"#"}],
    subjectList:[{
        type:0,
        title:'热卖新品',
        data:[{
            img:"#",
            href:"#",
            title:"春季新款设计师改良旗袍中国风印花民族风修身连衣裙收到了快放假哦我公交是地方吉欧斯啊",
            platform:"taobao",
            disPrice:"249.00",
            price:"169.00",
            num:12
        },{
            img:"#",
            href:"#",
            title:"春季新款设计师改良旗袍中国风印花民族风修身连衣裙收到了快放假哦我公交是地方吉欧斯啊",
            platform:"taobao",
            disPrice:"249.00",
            price:"169.00",
            num:0
        },{
            img:"#",
            href:"#",
            title:"春季新款设计师改良旗袍中国风印花民族风修身连衣裙收到了快放假哦我公交是地方吉欧斯啊",
            platform:"taobao",
            disPrice:"249.00",
            price:"169.00",
            num:12
        },{
            img:"#",
            href:"#",
            title:"春季新款设计师改良旗袍中国风印花民族风修身连衣裙收到了快放假哦我公交是地方吉欧斯啊",
            platform:"taobao",
            disPrice:"249.00",
            price:"169.00",
            num:12
        },{
            img:"#",
            href:"#",
            title:"春季新款设计师改良旗袍中国风印花民族风修身连衣裙收到了快放假哦我公交是地方吉欧斯啊",
            platform:"taobao",
            disPrice:"249.00",
            price:"169.00",
            num:12
        }]
    },{
        type:1,
        title:'独家美衣',
        data:[{
            img:"#",
            href:"javascript:;",
            title:"春季新款设计师改良旗袍中国风印花民族风修身连衣裙改良旗袍中国风印花民族风修身连衣裙啦啦啦啦啦啦啦啦",
            platform:"taobao",
            disPrice:"249.00",
            price:"169.00",
            num:12
        },{
            img:"#",
            href:"javascript:;",
            title:"春季新款设计师改良旗袍中国风印花民族风修身连衣裙改良旗袍中国风印花民族风修身连衣裙啦啦啦啦啦啦啦啦",
            platform:"taobao",
            disPrice:"249.00",
            price:"169.00",
            num:0
        }]
    }],
    ideas:[{
        href:"#",
        listImgHref:"#",
        categoryName:"烘焙小物1",
        recommendReason:"甜蜜烘焙 爱的美味",
        recommendPrice:"1"
    },{
        href:"#",
        listImgHref:"#",
        categoryName:"烘焙小物2",
        recommendReason:"甜蜜烘焙 爱的美味",
        recommendPrice:"2"
    },{
        href:"#",
        listImgHref:"#",
        categoryName:"烘焙小物3",
        recommendReason:"甜蜜烘焙 爱的美味",
        recommendPrice:"3"
    },{
        href:"#",
        listImgHref:"#",
        categoryName:"烘焙小物4",
        recommendReason:"甜蜜烘焙 爱的美味",
        recommendPrice:"4"
    }]
};
const staticData={
    brand:{"title":"Selected Brands"},
    hotSell:{"add2ShopCar":"Add to Cart","selled":"Sold out","tagArr":["Hot","New","Classics","Pupular"]},
    beautifulClothes:{"add2ShopCar":"Add to Cart","selled":"Sold out","tagArr":["Hot","New","Classics","Pupular"]},
    ideas:{"title":"Previous Events","more":"More","disCountPre":"Up to ","disCountNext":"% off"}
}
let staticVar = {
	backColor:'#fff',
	suspendFontColor:'',
	suspendHeadImgHref:'',
	suspendBodyImgHref:'',
	suspendTailImgHref:''
}
//banner图
class Banner extends React.Component{
    componentWillMount(){
        document.getElementById("container").style.opacity=1;
    }
    render(){
        return(
            <div className="banner"><img src={this.props.datas.headImgHref}/></div>
        )
    }
}
//自定义模块
class UserDefault extends React.Component{
    render(){
    	let headImg = this.props.datas.headImgHref;
        return(
            <div id={(headImg!=''&&headImg!=null) ?  "floor"+this.props.item : this.props.item} className="user-defined">
            	{
            		(headImg!=''&&headImg!=null) ? <div className="sell-title" style={{background:staticVar.backColor}}><img src={headImg}/></div> : ''
            	}
				<div className="user-defined-box" dangerouslySetInnerHTML={{__html:this.props.datas.customDefinitionCode}}></div>
            </div>
        )
    }
}
//优选品牌
let [timeSpan,brandLen,brandIndex,brandInterval]=[4000,0,0];
class Brand extends React.Component{
    constructor(props){
        super(props);
        this.state={brandOver:false,requestData:[],onOff:true}
    }
    moveToLeft(){
        brandIndex--;
        this.setState({brandOver:false});
        this.refs.brandUl.style.left=brandIndex*152+"px";
        if(brandLen+brandIndex<=0){
            var that=this;
            setTimeout(function(){
                brandIndex=0;
                that.setState({brandOver:true})
                that.refs.brandUl.style.left=brandIndex*152+"px";
                that.setState({onOff:true});
            },801);
        }
    }
    turnLeft(){
        this.setState({onOff:false});
        this.moveToLeft();
    }
    turnRight(){
        this.setState({onOff:false});
        if(brandIndex==0){
            this.setState({brandOver:true});
            this.refs.brandUl.style.left=-brandLen*152+"px";
            brandIndex=-brandLen+1;
            var that=this;
            setTimeout(function(){that.tab()},10);
        }else{
            brandIndex++;
            this.tab();
        }
    }
    tab(){
        this.setState({brandOver:false});
        this.refs.brandUl.style.left=brandIndex*152+"px";
    }
    tEnd(){
        this.setState({onOff:true});
    }
    componentDidMount(){
        let that = this;
        this.refs.brandUl.addEventListener("transitionend",this.tEnd.bind(this),false);
        brandInterval=setInterval(()=>that.moveToLeft(),timeSpan);
        brandLen = this.props.datas.boardProductList.length;
    }
    render(){
    	let headImg = this.props.datas.headImgHref;
        return(
            <div id={(headImg!=''&&headImg!=null) ?  "floor"+this.props.item : this.props.item} className="optimizing-brand" >
            	{
            		(headImg!=''&&headImg!=null) ? <div className="sell-title" style={{background:staticVar.backColor}}><img src={headImg}/></div> : ''
            	}
            	<div className="brand-box">
	                <div className="brand-title">{this.props.static.title}</div>
	                <div className="brand-content" onMouseOver={()=>{clearInterval(brandInterval)}} onMouseOut={()=>{let that = this;brandInterval=setInterval(()=>that.moveToLeft(),timeSpan);}}>
	                    <div className="brand-nav">
	                        <ul ref="brandUl" className={this.state.brandOver==true ? "brand-over" : "brand-move"}>
	                            {
	                                this.props.datas.boardProductList.map((a,b)=>{
	                                    return(
	                                        <li>
	                                            <img src={a.shopImg}/>
	                                            <a href={a.href} target="_blank"><div className="hover-box">{a.shopName}</div></a>
	                                        </li>
	                                    )
	                                })
	                            }
	                            {
	                            	this.props.datas.boardProductList.length > 6 ?
	                                this.props.datas.boardProductList.map((a,b)=>{if(b<6)
	                                    return(
	                                        <li>
	                                            <img src={a.shopImg}/>
	                                            <a href={a.href} target="_blank"><div className="hover-box">{a.shopName}</div></a>
	                                        </li>
	                                    )
	                                })
	                                :
	                                ''
	                            }
	                        </ul>
	                    </div>
	                    <div className="turn-left"><img src={imgsrc+"brand_left.png"} onClick={this.state.onOff==true ? this.turnLeft.bind(this) : ""}/></div>
	                    <div className="turn-right"><img src={imgsrc+"brand_right.png"} onClick={this.state.onOff==true ? this.turnRight.bind(this) : ""}/></div>
	                </div>
	            </div>
            </div>
        )
    }
}
//专题样式一
class HotSell extends React.Component{
    render(){
    	let headImg = this.props.datas.headImgHref;
        return(
            <div id={(headImg!=''&&headImg!=null) ?  "floor"+this.props.item : this.props.item} className="hot-sell">
            	{
            		(headImg!=''&&headImg!=null) ? <div className="sell-title" style={{background:staticVar.backColor}}><img src={headImg}/></div> : ''
            	}
                {
                    this.props.datas.boardProductList.map((a,b)=>{
                        return(
                            <div className="sell-item">
                                <div className={a.num==0 ? "hot-sell-tag sell-tag-selled" : "hot-sell-tag sell-tag-default"}>{this.props.static.tagArr[0]}</div>
                                <a href={`${hrefUrl}buy/?url=${encodeURIComponent(a.href)}`} target="_blank"><img className="shop-img" src={a.img}/></a>
                                <div className="goods-detail">
                                    <p>{a.title.length>=34 ? a.title.substring(0,34)+'...' : a.title}</p>
                                    <img className="plate-img" src={imgsrc+a.sellerPlatform+'.png'} />
                                    <div className="goods-buy">
                                        <div className="dis-price">¥{a.discountPrice}</div>
                                        <div className="now-price">¥{a.price}</div>
                                    </div>
                                    <a className="buy-now" type="button" href={`${hrefUrl}buy/?url=${encodeURIComponent(a.href)}`} target="_blank">{this.props.static.add2ShopCar}</a>
                                </div>
                                <div className={a.num==0 ? "cover-selled cover-selled-selled" : "cover-selled cover-selled-default"}>{this.props.static.selled}</div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
//专题样式二
class BeautifulClothes extends React.Component{
    render(){
    	let headImg = this.props.datas.headImgHref;
        return(
            <div id={(headImg!=''&&headImg!=null) ?  "floor"+this.props.item : this.props.item} className="beautiful—clothes">
                {
            		(headImg!=''&&headImg!=null) ? <div className="sell-title" style={{background:staticVar.backColor}}><img src={headImg}/></div> : ''
            	}
                {
                    this.props.datas.boardProductList.map((a,b)=>{
                        return(
                            <div className="clothes-item">
                                <a href={`${hrefUrl}buy/?url=${encodeURIComponent(a.href)}`}  target="_blank">
                                    <img className="clothes-img" src={a.img}/>
                                    <div className={a.num==0 ? "hot-sell-tag sell-tag-selled" : "hot-sell-tag sell-tag-default"}>{this.props.static.tagArr[0]}</div>
                                    <div className={a.num==0 ? "cover-selled cover-selled-selled" : "cover-selled cover-selled-default"}>{this.props.static.selled}</div>
                                </a>
                                <div className="clothes-detail">
                                    <p>{a.title.length>=41 ? a.title.substring(0,41)+'...' : a.title}</p>
                                    <img className="plate-img" src={imgsrc+a.sellerPlatform+'.png'} />
                                    <div className="clothes-buy">
                                        <div className="dis-price">¥{a.disPrice}</div>
                                        <div className="now-price">¥{a.price}</div>
                                    </div>
                                    <a className="buy-now" type="button" href={`${hrefUrl}buy/?url=${encodeURIComponent(a.href)}`} target="_blank">{this.props.static.add2ShopCar}</a>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
//专题楼层
class SubjectList extends React.Component{
    constructor(props){
		super(props);
		this.state={requestData:[]}
	}
	componentDidMount(){
		fetch(`${apiUrl}shoppingguide/cat-detail-web?cat=${this.props.name}`,{
			method:"GET",
			credentials:'include',
		}).then(res => res.json())
		.then(data => {
			this.setState({requestData:data.data})
		}).catch(ex=> console.log("楼层 is loading failed",ex));
	}
    render(){
        return(
            <div>
                {	
                	this.state.requestData.map((a,b)=>{
                        switch(a.childCategoryType){
                            case 1 ://专题分类
                            	switch(a.cols){
		                            case 4 :
		                                return (<HotSell item={b} static={staticData.hotSell} datas={a}/>)
		                                break;
		                            case 2 :
		                                return (<BeautifulClothes item={b} static={staticData.beautifulClothes} datas={a}/>)
		                                break;
		                            default :
		                            	return (<HotSell item={b} static={staticData.hotSell} datas={a}/>)
		                                break;
		                        }
                                break;
                            case 2 ://店铺专题分类
                                return (<Brand item={b} static={staticData.brand} datas={a}/>)
                                break;
                            case 3 ://优惠推荐图片组合,app用
                                
                                break;
                            case 4 ://自定义代码
                                return (<UserDefault item={b} datas={a}/>)
                                break;
                            
                        }
                   })
                }
            </div>
        )
    }
}
//右侧楼层导航
class Floor extends React.Component{
    constructor(props){
        super(props);
        this.state = {floorIndex:-1,requestData:[]};
    }
    floorHandle(e){
        let clickFloor = e.currentTarget.getAttribute('name');
        document.documentElement.scrollTop = document.body.scrollTop = document.getElementById('floor'+clickFloor).offsetTop - 20;
    }
    componentDidMount(){
    	fetch(`${apiUrl}shoppingguide/cat-detail-web?cat=${this.props.name}`,{
			method:"GET",
			credentials:'include',
		}).then(res => res.json())
		.then(data => {
			let that = this;
			let floorLen = 0;
			data.data.map(a=>{
				if(a.headImgHref!=''&&a.headImgHref!=null){floorLen++}
			});
	        window.onscroll = function(){
	            for(let i=floorLen-1;i>=0;i--){
	                let scrollTop = document.getElementById('floor'+i).offsetTop - ( document.documentElement.scrollTop || document.body.scrollTop);
	                if(scrollTop<400){
	                    that.setState({floorIndex:i}) ;return false;
	                }else{
	                    that.setState({floorIndex:-1});
	                }
	            }
	        }
	        this.setState({requestData:data.data})
		}).catch(ex=> console.log("楼层 is loading failed",ex));
        
    }
    render(){
        return(
            <div className={this.state.floorIndex!=-1 ? "floor-box floor-box-active" : "floor-box floor-box-default"} >
                <div className="floor-top"  >
                	<img src={staticVar.suspendHeadImgHref} />
                </div>
                {
                    this.state.requestData.map((a,b)=>{if(a.headImgHref != '' && a.headImgHref != null)
                        return(
                            <div name={b} className="floor-default" style={{color:staticVar.suspendFontColor,background:'url('+staticVar.suspendBodyImgHref+') no-repeat center center'}} onClick={this.floorHandle.bind(this)}>{a.categoryName}</div>
                        )
                    })
                }
                <div className="floor-footer"  >
                	<img src={staticVar.suspendTailImgHref} />
                </div>
            </div>
        )
    }
}
//往期专题
let [ideasIndex,ideasBannerLen,ideasBannerInterval] = [0,0];
class Ideas extends React.Component{
    constructor(props){
        super();
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
        this.refs.banner.style.left=ideasIndex*386+"px";
    }
    turnLeft(){
        this.moveToLeft();
    }
    turnRight(){
        if(ideasIndex<0){
            ideasIndex++;
            this.refs.banner.style.left=ideasIndex*386+"px";
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
            <div className="ideas">
                <div className="title">
                    <span>{this.props.static.title}</span>
                    <a className="look-more" href={hrefUrl+"sthgood/ideas/"}>{this.props.static.more}</a>
                </div>
                <div className="ideas-content" 
//              	onMouseOver={()=>{clearInterval(ideasBannerInterval)}} 
//              	onMouseOut={()=>{let that = this;ideasBannerInterval=setInterval(()=>that.moveToLeft(),timeSpan);}}
                	>
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
//父组件
class Content extends React.Component{
	constructor(props){
		super(props);
		this.state={subjectId:'',requestData:[]}
	}
    componentWillMount(){
        document.getElementById("container").style.opacity=1;
        this.setState({subjectId:supervar.util.search2Obj().id})
        fetch(`${apiUrl}shoppingguide/cat-info?cat=${supervar.util.search2Obj().id}`,{
			method:"GET",
			credentials:'include',
		}).then(res => res.json())
		.then(data => {
			staticVar.backColor = data.data.backgroundColor;
			staticVar.suspendFontColor = data.data.suspendFontColor;
			staticVar.suspendHeadImgHref = data.data.suspendHeadImgHref;
			staticVar.suspendBodyImgHref = data.data.suspendBodyImgHref;
			staticVar.suspendTailImgHref = data.data.suspendTailImgHref;
			this.setState({requestData:data.data});
		}).catch(ex=> console.log("banner is loading failed",ex));
   }
    render(){
        return(
            <div className="subject" style={{background:staticVar.backColor}}>
                <Banner datas={this.state.requestData}/>
                <div className="subject-content">
                    <SubjectList name={this.state.subjectId}/>
                    <Ideas static={staticData.ideas} />
                </div>
                <Floor name={this.state.subjectId}/>
            </div>
        )
    }
}
var Wrap = window.supervar.Wrap;
var content=ReactDOM.render(
    <Wrap content={Content} />,
    document.getElementById("container")
);