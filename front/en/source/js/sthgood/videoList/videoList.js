import '../../../less/sthgood/videoList/videoList.less';
import SecNavBox from './src/searchNav';
import Pagination from './src/Pagination';
import 'whatwg-fetch';
// import Paging from '../../../../../plugin/reactcommon/Paging/Paging';
const util = window.supervar.util;
var imgsrc=window.supervar.imgsrc_cn;
// const apiUrl='http://www.super.com/api/';
const apiUrl=window.supervar.apiURL;

/* your logic code */

//位置导航的文字
var secNavBoxTxt=[
    {txt:"Video List"}
];

class ListBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listCont:{}
        }
        this.handleChangeCat = this.props.handleChangeCat.bind(this);
    }

    componentWillMount(){
        document.getElementById("container").style.opacity=1;
        fetch(`${apiUrl}shoppingguide/video-cat-list?lang=en-us`)
            .then(res=> {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw Error(`Response Status: ${res.message}`);
                }
            })
            .then(data=> {
                if (data.data && data.data.length) {
                    this.setState({
                        listCont: data.data
                    },()=> {
                        // console.log(this.state)
                    });
                }
            })
            .catch(error=> {
                console.error(error);
            });
    }

    activeClass(index){ //改变当前分类的选中样式
        return index === this.props.catIndex ? "active" : "";
    }

    render(){
        // console.log("1111",this.state)
        return(
            <div className="sort-nav">
                <ul className="clearfix">
                    <li className={this.activeClass(0)} onClick={this.handleChangeCat.bind(this,0,0)}><a >All</a></li>
                    {
                        this.state.listCont.length && this.state.listCont.map((v,i) =>
                            <li className={this.activeClass(i+1)} onClick={this.handleChangeCat.bind(this,v.id,i+1)}><a>{v.categoryName}</a></li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currPage : 1,
            pageSize : 20,
            sortType : 1,
            cat:0, //分类
            catIndex:0,
            videosData:{}
        }
        this.handleChangeCat = this.handleChangeCat.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleGetDatas = this.handleGetDatas.bind(this);
        // this.sortByUploadTime=this.sortByUploadTime.bind(this);
        // this.sortByplays=this.sortByplays.bind(this);
        this.goPrePage=this.goPrePage.bind(this);
        this.goNextPage=this.goNextPage.bind(this);
        this.date2str=this.date2str.bind(this);
        this.getPageConfig=this.getPageConfig.bind(this);
        this.onPageChange=this.onPageChange.bind(this);
    }

    handleChangeCat(cat,catIndex){ //改变分类内容,其改变索引让当前分类添加active样式
        // console.log(cat,catIndex)
        this.setState({
            currPage : 1,
            cat:cat,
            catIndex:catIndex
        },()=>{
            this.handleGetDatas();
        });
    }

    handleChangePage(currPage,pageSize,sortType){//根据分页按钮显示不同数据
        this.setState({
            currPage : currPage,
            pageSize : pageSize,
            sortType : sortType
        },()=>{
            this.handleGetDatas();
        });
    }

    handleGetDatas(){//根据分页、排序、页数获取分页的内容
        fetch(`${apiUrl}shoppingguide/video-list?currPage=${this.state.currPage}&pageSize=${this.state.pageSize}&sortType=${this.state.sortType}&cat=${this.state.cat}`,{
                credentials: 'include'
            })
            .then(res=> {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw Error(`Response Status: ${res.message}`);
                }
            })
            .then(data=> {
                if (data.data && data.data.listResult) {
                    this.setState({
                        videosData: data.data
                    },()=> {
                        // console.log(this.state)
                    });
                }else if(data.data.listResult == null){
                    this.setState({
                        videosData: {}
                    },()=> {
                        // console.log(this.state)
                    });
                }
            })
            .catch(error=> {
                console.error(error);
            });
    }

    componentDidMount(){
        this.handleGetDatas();
    }

    /*subsort-nav*/
    // sortByUploadTime(){
    //     this.refs.sortByplays.className="";
    //     this.refs.sortByUploadTime.className="active";
    //     this.setState({
    //         sortType : 1
    //     },()=>{
    //         this.handleGetDatas();
    //     });
    // }
    // sortByplays(){
    //     this.refs.sortByUploadTime.className="";
    //     this.refs.sortByplays.className="active";
    //     this.setState({
    //         sortType : 3
    //     },()=>{
    //         this.handleGetDatas();
    //     });
    // }
    goPrePage(){
        if(this.state.currPage <= 1 ){
            this.handleChangePage(1,20,1);
        }else{
            // console.log("goPrePage",this.props.datas.currPage-1)
            this.handleChangePage(this.state.currPage-1,20,1);
        }
    }
    goNextPage(){
        let currPage = this.state.currPage*1+1;
        let totalPage = Math.ceil(this.state.videosData.totalRow/this.state.pageSize) || 1;
        if(this.state.currPage < totalPage){
            // this.setState({currPage : this.state.currPage+1});
            this.handleChangePage(currPage,20,1);
        }else{
            this.handleChangePage(totalPage,20,1);
        }
    }
    date2str(x,y){
        var z ={y:x.getFullYear(),M:x.getMonth()+1,d:x.getDate(),h:x.getHours(),m:x.getMinutes(),s:x.getSeconds()};
        return y.replace(/(y+|M+|d+|h+|m+|s+)/g,function(v) {return ((v.length>1?"0":"")+eval('z.'+v.slice(-1))).slice(-(v.length>2?v.length:2))});
    }

    getPageConfig() {
        return {
            pageSize: this.state.pageSize,
            currentPage: this.state.currPage,
            totalNum:this.state.videosData.totalRow || 1 ,
            totalPage: Math.ceil(this.state.videosData.totalRow / this.state.pageSize) || 1
        };
    }
    onPageChange(currentPage) {
        // console.log("change:" + currentPage, "提示");
        // this.handleChangePage(currentPage,20,1)
        this.setState({
            currPage : currentPage
        },()=>{
            this.handleGetDatas();
        });
    }
    renderListCont(){ //渲染视频列表listCont内容
        let listCont = <li className="no-data">No data...</li>;
        if(this.state.videosData.listResult){
            listCont = this.state.videosData.listResult.map((v,i) =>
                <li key={i} className="item">
                    <h3 className="h3"><a href={v.href}>{v.title}</a></h3>
                    <a className="inner-wrap" target="_blank" href={'../video/index.html?id='+v.id}>
                        <div className="pic">
                            <img src={v.img} alt={v.title}/>
                            <div className="video-tit">{v.title}</div>
                            <div className="tip clearfix">
                                <span className="ico fl"></span>
                                {/*<span className="time fr"></span>*/}
                            </div>
                            <div className="mask"></div>
                        </div>
                        <div className="txt">
                            <div className="price">
                                <span className="now-price"><i>￥</i>{v.price}</span>
                                {/*<span className="old-price"><i>￥</i>{v.discountPrice}</span>*/}
                            </div>
                            <div className="label">
                                <ul className="clearfix">
                                    {
                                        v.keyword.split(',|，').map(item =>
                                            <li>{item}</li>
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="foot clearfix">
                                {/*<span className="scan-num fl">{v.browseNums}</span>*/}
                                <span className="date fr">{this.date2str(new Date(v.createTime*1000),"M-d")}</span>
                            </div>
                        </div>
                    </a>
                </li>
            )
        }
        return listCont;
    }

    render(){
        return(
            <div className="video-list">
                <SecNavBox subTit={secNavBoxTxt}/>
                <div className="video-list-wrap">
                    <div className="list-box mt30">

                        <ListBox handleChangeCat={this.handleChangeCat} catIndex={this.state.catIndex}/>

                        <div className="subSort-nav clearfix">
                            <div className="sort-btn fl">
                                <ul className="clearfix">
                                    {/*ref="sortByUploadTime" onClick={this.sortByUploadTime}*/}
                                    <li className="active" >Date added</li>
                                    {/*<li ref="sortByplays" onClick={this.sortByplays}>Most popular</li>*/}
                                </ul>
                            </div>
                            <div className="describe fr">
                                <span className="total-num" ><span className="num" ref="totalNum">{this.state.videosData.totalRow}</span> video(s)</span>
                                <span className="cur-page"><span className="num">{this.state.currPage}</span>/{Math.ceil(this.state.videosData.totalRow/this.state.pageSize) || 1}</span>
                                <span className="switch-page">
                                    <span className={this.state.currPage>1 ? 'pre-page arrow-btn' : 'pre-page arrow-btn disabled'} onClick={this.goPrePage}> &lt; </span>
                                    <span className={this.state.currPage>= this.state.totalPages ?  'next-page arrow-btn disabled' : 'next-page arrow-btn'}  onClick={this.goNextPage}> &gt; </span>
                                </span>
                            </div>
                        </div>

                        <div className="list-cont">
                            <ul className="list-ul clearfix">
                                {
                                    this.renderListCont()
                                }
                            </ul>
                        </div>
                    </div>

                    <Pagination {...this.getPageConfig()} onPage={this.onPageChange} lang="en"/>

                    {/*<Paging handleChangePage={this.onPageChange.bind(this)} totalPage="2" pageNo='1' />*/}
                </div>
            </div>
        )
    }
}

var Wrap = window.supervar.Wrap;
var content=ReactDOM.render(
    <Wrap content={Content} />,
    document.getElementById("container")
);