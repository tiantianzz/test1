import '../../less/shopping/shopping.less';
import Slide from '../../../../plugin/reactcommon/Slide/Slide';
import {Secnav,SthGood,Reviews} from './src/Common';

var imgsrc=window.supervar.imgsrc_cn;
var apiurl=window.supervar.apiURL;
var domain="//www."+window.supervar.domain;
var hrefUrl=domain+"/cn/page/";

var staticdata={
    secnav:{title:"代购",list:[{href:domain+"/views/single/install.html",text:"购物助手"},{href:`${hrefUrl}sthgood/goodIndex/`,text:"有好货"}]},
    search:{
        input:"输入商品名称或粘贴想要代购的商品地址",
        tab:[{type:"active",text:"公告"},{text:"论坛"}],
        butt:"搜索",
        searchWarn:'请输入http://链接'
    },
    guide:{
        guide1:{
            h4:"开启购物之旅",
            h5:"您也可以用以下方式进行代购",
            h6:"常见问题 >",
            left:[{text:"下载APP"},{href:hrefUrl+"appdownload/APPDownLoad.html",text:"新手指引>"}],
            right:[{text:"安装代购助手"},{text:"支持多种浏览器，淘宝、天猫一键购物"},
                {href:domain+"/views/single/install.html",text:"安装指引>"},
                {href:domain+"/views/single/install.html",text:"立刻安装"}]
        },
        guide2:{
            h4:"为什么选择Superbuy",
            h6:"了解更多 >",
            left:[
                {img:imgsrc+"shopping/why1.png",txt1:"大客户服务",txt2:"采购批发一步到位专享运费折扣"},
                {img:imgsrc+"shopping/why2.png",txt1:"0元服务费",txt2:"会员永久享有"},
                {img:imgsrc+"shopping/why3.png",txt1:"个性化服务",txt2:"7×24小时中英双语客服"},
                {img:imgsrc+"shopping/why4.png",txt1:"无忧赔付",txt2:"0担忧包裹"},
                {img:imgsrc+"shopping/why5.png",txt1:"品牌价值",txt2:"腾讯创始股东创办CEO邮箱解答"},
                {img:imgsrc+"shopping/why6.png",txt1:"一键代购",txt2:"智能神器轻松购物"}
                ],
            right:imgsrc+"shopping/why1.jpg"
        },
        guide3:{
            h4:"代购流程",
            h6:"查看图文教程 >",
            title:"Shopping Process",
            left:[
                {img:imgsrc+"shopping/why6.png",txt:"采购"},
                {img:imgsrc+"shopping/to.png"},
                {img:imgsrc+"shopping/pro1.png",txt:"检验及入库"},
                {img:imgsrc+"shopping/to.png"},
                {img:imgsrc+"shopping/pro2.png",txt:"寄送"},
                {img:imgsrc+"shopping/to.png"},
                {img:imgsrc+"shopping/pro3.png",txt:"售后服务"},
            ],
            right:imgsrc+"shopping/pro1.jpg"
        }
    },
    sthgood:{
        h3:"有好货",
        h4:"查看更多 >",
        top:{
            title:[{txt:"全球Top精选"},{txt:"大家都在买"}],
            tab:[{class:"active",txt:"新品Top榜"},{txt:"热销Top榜"},{txt:"美国Top榜"}]
        },
        vedio:{
            title:[{txt:"边看边买"},{txt:"直播是检验好货的唯一标准"}],
            star:"推荐指数"
        },
        goodshop:{
            title:[{txt:"super趣创意"},{txt:"为您精心挑选"}]
        },
    },
    reviews:{
        h3:"Superbuy买家晒单",
        h4:"SHOW出不一样的自己",
        h5:{href:"http://bbs.dotdotbuy.com/forum.php",txt:"查看更多 >"}
    }
};

var jsondata={
    search:{
        notis:[{type:"hot",title:"【有奖活动】挑战最强cos王！"},{title:"【公告】DDB新线路-中东7国专线"},{title:"【公告】澳大利亚 & 新西兰 物流专线开通"}],
        forum:[{subject:"【有奖活动】挑战最强cos王！"},{subject:"【公告】DDB新线路-中东7国专线"},{subject:"【公告】澳大利亚 & 新西兰 物流专线开通"}]
    },
    slide:[],
    sthgood:{
        top:[],
        vedio:[],
        goodshop:[
            {img:imgsrc+"shopping/temp/shop1.png"},
            {img:imgsrc+"shopping/temp/shop2.png"},
            {img:imgsrc+"shopping/temp/shop3.png"}
        ]
    },
    reviews:[]
};

class Search extends React.Component{
    componentDidMount(){
        fetch(`${apiurl}advert/announce?pagesize=3&currentpage=1`,{credentials: "include"}).then(res => res.json()).then(data=>{
            this.setState({notis:data.data[0].announcements});
        }).catch(ex=> console.log("advert/announce is loading failed",ex));
        //forum
        fetch(`${apiurl}bbs/getannouncementlist?pagesize=3`,{credentials: "include"}).then(res => res.json()).then(data=>{
            this.setState({forum:data.data});
        }).catch(ex=> console.log("bbs/getannouncementlist is loading failed",ex));
    }
    constructor(props){
        super();
        this.state={type:["active",""],notis:props.data.notis,forum:props.data.forum};
    }
    changeimg(index){
        this.state.type=["",""];
        this.state.type[index]="active";
        this.setState({type:this.state.type});
    }
    searchHandle(){
    	var url = this.refs.searchInput.value.trim();
    	if(url!=''){
    		// /^https?:\/\//.test(url) ? window.location.href=`${hrefUrl}buy/?url=${encodeURIComponent(url)}` : alert(this.props.static.searchWarn)
    		/^https?:\/\//.test(url) ? window.location.href=`${hrefUrl}buy/?url=${encodeURIComponent(url)}` : window.location.href=`${hrefUrl}search/?keyword=${encodeURIComponent(url)}`
    	}else{
    	    alert("输入商品名称或粘贴想要代购的商品地址");
        }
    }
    keyDownHandle(e){
		if((e.keyCode).toString()=='13') {this.searchHandle();};
	}
    render(){
        var that=this;
        return(
            <div className="search" id="search">
                <div className="searchbox fl">
                    <input ref="searchInput" type="text" placeholder={this.props.static.input} onKeyDown={this.keyDownHandle.bind(this)}/>
                    <button title={this.props.static.butt} onClick={this.searchHandle.bind(this)}>{this.props.static.butt}</button>
                </div>
                <div className="inforbox fl">
                    <div className="tab">
                        <ul>
                            {this.props.static.tab.map(function (data,index) {
                                return <li className={that.state.type[index]} onClick={that.changeimg.bind(that,index)}>{data.text}</li>
                            })}
                        </ul>
                    </div>
                    <div className="tabcont">
                        <div className={"tabitem "+this.state.type[0]}>
                            <ul>
                                {!this.state.notis || this.state.notis.map(function (data) {
                                    return <li className="li-el" alt={data.alt}><a href={data.href} target="blank">{data.title}</a></li>
                                })}
                                <li className="more"><a href="http://bbs.dotdotbuy.com/forum.php?mod=forumdisplay&fid=50" target="blank">更多 ></a></li>
                            </ul>
                        </div>
                        <div className={"tabitem "+this.state.type[1]}>
                            <ul>
                                {!this.state.forum || this.state.forum.map(function (data) {
                                    return <li className="li-el"><a href={data.url} target="blank">{data.subject}</a></li>
                                })}
                                <li className="more"><a href="http://bbs.dotdotbuy.com/forum.php" target="blank">更多 ></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

class Guide extends React.Component{
    render(){
        return(
            <div className="guide">
                <GuideItem1 static={this.props.static.guide1} />
                <GuideItem2 static={this.props.static.guide2} />
                <GuideItem3 static={this.props.static.guide3} />
            </div>
        )
    }
}

class GuideItem1 extends React.Component{
    render(){
        return(
            <div className="guideitem">
                <div className="guidetitle">
                    <h4>{this.props.static.h4}</h4>
                    <h5>{this.props.static.h5}</h5>
                    <h6><a href={hrefUrl+"faq/faq.html"} target="_blank">{this.props.static.h6} > </a></h6>
                </div>
                <div className="guidecont">
                    <div className="fl buyleft">
                        <ul>
                            {this.props.static.left.map(function (data) {
                                return <li>{data.href?<a href={data.href}>{data.text}</a>:data.text}</li>
                            })}
                        </ul>
                    </div>
                    <div className="buyright fr">
                        <ul>
                            {this.props.static.right.map(function (data) {
                                return <li>{data.href?<a href={data.href} target="blank">{data.text}</a>:data.text}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

class GuideItem2 extends React.Component{
    render(){
        return(
            <div className="guideitem">
                <div className="guidetitle">
                    <h4>{this.props.static.h4}</h4>
                    <h6><a href={domain} target="_blank">{this.props.static.h6}</a></h6>
                </div>
                <div className="guidecont">
                    <div className="whyleft fl">
                        <ul>
                            {this.props.static.left.map(function (data) {
                                return (
                                    <li>
                                        <ol>
                                            <li><img src={data.img} alt=""/></li>
                                            <li>{data.txt1}</li>
                                            <li>{data.txt2}</li>
                                        </ol>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="whyright fr">
                        <a href={hrefUrl+"video/index/"} target="blank"><img src={this.props.static.right} alt=""/></a>
                    </div>
                </div>
            </div>
        )
    }
}

class GuideItem3 extends React.Component{
    render(){
        return(
            <div className="guideitem">
                <div className="guidetitle">
                    <h4>{this.props.static.h4}</h4>
                    <h6><a href="http://www.dotdotbuy.com/html/about/pages/buy.html?spm=2101.892.N.N.a996fcf" target="_blank">{this.props.static.h6}</a></h6>
                </div>
                <div className="guidecont">
                    <div className="processleft fl">
                        <h5>{this.props.static.title}</h5>
                        <ul>
                            {this.props.static.left.map(function (data) {
                                return (
                                    <li><img src={data.img} alt=""/>{!data.txt || <p>{data.txt}</p>}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="processright fr">
                        <a href={hrefUrl+"video/index/"} target="blank"><img src={this.props.static.right} alt=""/></a>
                    </div>
                </div>
            </div>
        )
    }
}

/* your logic code */
class Content extends React.Component{
    constructor(){
        super();
        this.state={slide:jsondata.slide};
    }
    componentWillMount(){
        //show page
        document.getElementById("container").style.opacity=1;
        //fetch
        fetch(`${apiurl}advert/vert?platform=web&position=daigouIndex`,{credentials: "include"}).then( res => res.json() ).then( data => {
            this.setState({slide:data.data});
        }).catch( ex => console.log('advert/vert is loading failed', ex) )
    }
    render(){
        return(
            <div className="content">
                <Secnav static={staticdata.secnav} />
                <Slide full="true" scrollwidth="1920">
                    {this.state.slide.map(function (data) {
                        return <a href={data.href}><img src={data.img} alt={data.alt} title={data.title}/></a>
                    })}
                </Slide>
                <Search static={staticdata.search} data={jsondata.search} />
                <Guide static={staticdata.guide} />
                <SthGood static={staticdata.sthgood} data={jsondata.sthgood} />
                <Reviews static={staticdata.reviews} data={jsondata.reviews} />
            </div>
        )
    }
}

var Wrap = window.supervar.Wrap;
ReactDOM.render(
    <Wrap content={Content} en="/en/page/shopping/shopping.html" />,
    document.getElementById("container")
);