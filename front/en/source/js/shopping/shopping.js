import '../../less/shopping/shopping.less';
import Slide from '../../../../plugin/reactcommon/Slide/Slide';
import {Secnav,SthGood,Reviews} from '../../../../cn/source/js/shopping/src/Common';

var imgsrc=window.supervar.imgsrc_cn;//main
var imgsrc_en=window.supervar.imgsrc_en;
var apiurl=window.supervar.apiURL;
var domain="//www."+window.supervar.domain;
var hrefUrl=domain+"/en/page/";
var staticdata={
    secnav:{title:"Shopping Agent",list:[{href:`${hrefUrl}sthgood/goodIndex/`,text:"Editor's Pick"}]},
    search:{
        tab:[{type:"active",text:"Bulletin Board"}],
        input:"Search items name or paste the product URL from other websites",
        butt:"Search",
        searchWarn:'please input http:// url'
    },
    guide:{
        guide1:{
            h4:"Start Shopping Agent Journey",
            h5:"Or you can also use it via the following methods",
            h6:"FAQ",
            left:[{text:"Download APP"},{text:"Shopping Agent Guidance >"}],
            right:[{text:"Install Shopping Agent Assistant"},{text:"Available for most of the browsers"},{href:"#",text:"Installation Guidance >"},{href:"#",text:"Install Now"}]
        },
        guide2:{
            h4:"Why Superbuy",
            h6:"Know more >",
            left:[
                {img:imgsrc+"shopping/why1.png",txt1:"Business Services",txt2:"Exclusive shopping discount for merchants purchase"},
                {img:imgsrc+"shopping/why2.png",txt1:"0 Service Fee",txt2:"Exclusive for members"},
                {img:imgsrc+"shopping/why3.png",txt1:"Personalized Services",txt2:"24/7 Bilingual customer services"},
                {img:imgsrc+"shopping/why4.png",txt1:"Promised compensation for damaged goods",txt2:"No worries for parcels"},
                {img:imgsrc+"shopping/why5.png",txt1:"Brand Value",txt2:"CEO answers your questions via email"},
                {img:imgsrc+"shopping/why6.png",txt1:"1-click Shopping Agent",txt2:"Intelligent tool for easy shopping"}
            ],
            right:imgsrc_en+"shopping/why1.jpg"
        },
        guide3:{
            h4:"Shopping Agent Process",
            h6:"Check image-text tutorial >",
            title:"Shopping Process",
            left:[
                {img:imgsrc+"shopping/why6.png",txt:"Purchasing"},
                {img:imgsrc+"shopping/to.png"},
                {img:imgsrc+"shopping/pro1.png",txt:"Inspection and storage"},
                {img:imgsrc+"shopping/to.png"},
                {img:imgsrc+"shopping/pro2.png",txt:"Delivery"},
                {img:imgsrc+"shopping/to.png"},
                {img:imgsrc+"shopping/pro3.png",txt:"After-sales Services"},
            ],
            right:imgsrc_en+"shopping/pro1.jpg"
        }
    },
    sthgood:{
        h3:"Something Good",
        h4:"See more >",
        top:{
            title:[{txt:"Top Global Selection"},{txt:"People are buying"}],
            tab:[{class:"active",txt:"New Arrivals"},{txt:"Hot"},{txt:"US"}]
        },
        vedio:{
            title:[{txt:"Watch and Buy"},{txt:"Live is the only way to exam quality standard"}],
            star:"推荐指数"
        },
        goodshop:{
            title:[{txt:"Superbuy New Ideas"},{txt:"Exclusive for you"}]
        },
    },
    reviews:{
        h3:"Superbuy Users’ Reviews",
        h4:"Show the different you",
        h5:{href:"http://bbs.dotdotbuy.com/forum.php",txt:"See more >"}
    }
};

var jsondata={
    search:{
        notis:[{category:"有奖活动",title:"挑战最强cos王！"},{category:"公告",title:"DDB新线路-中东7国专线"},{category:"公告",title:"澳大利亚 & 新西兰 物流专线开通"}],
        forum:[{title:"【有奖活动】挑战最强cos王！"},{title:"【公告】DDB新线路-中东7国专线"},{title:"【公告】澳大利亚 & 新西兰 物流专线开通"}]
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
    componentWillMount(){
        fetch(`${apiurl}advert/announce?pagesize=3&currentpage=1`,{credentials: 'include'}).then(res => res.json()).then(data=>{
            this.setState({notis:data.data[0].announcements});
        }).catch(ex=> console.log("advert/announce is loading failed",ex));
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
    	var url = this.refs.searchInput.value;
    	if(url!=''){
    		// /^https?:\/\//.test(url) ? window.location.href=`${hrefUrl}buy/?url=${encodeURIComponent(url)}` : alert(this.props.static.searchWarn)
    		/^https?:\/\//.test(url) ? window.location.href=`${hrefUrl}buy/?url=${encodeURIComponent(url)}` : window.location.href=`${hrefUrl}search/?keyword=${encodeURIComponent(url)}`
    	}else{
            alert("Search items name or paste the product URL from other websites");
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
                                {this.state.notis.map(function (data) {
                                    return <li className={data.category=="有奖公告"?"hot":""} alt={data.alt}><a href={data.href} target="_blank">{data.title}</a></li>
                                })}
                                <li className="more"><a href="http://bbs.dotdotbuy.com/forum.php?mod=forumdisplay&fid=50">more ></a></li>
                            </ul>
                        </div>
                        {/*<div className={"tabitem "+this.state.type[1]}>*/}
                            {/*<ul>*/}
                                {/*{this.state.forum.map(function (data) {*/}
                                    {/*return <li className={data.class}>{data.title}</li>*/}
                                {/*})}*/}
                                {/*<li className="more"><a href="#">更多 ></a></li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
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
        fetch(`${apiurl}advert/vert?platform=web&position=daigouIndex`,{credentials: 'include'}).then( res => res.json() ).then( data => {
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
var test=ReactDOM.render(
    <Wrap content={Content} cn={`//buy.${window.supervar.domain}`} />,
    document.getElementById("container")
);