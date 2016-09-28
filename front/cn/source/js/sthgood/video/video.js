import '../../../less/sthgood/video/video.less';
// import React from 'react';
import SecNavBox from '../videoList/src/searchNav';
import { PropTypes } from 'react';
var imgsrc=window.supervar.imgsrc_cn;

/* your logic code */
//位置导航的文字
var secNavBoxTxt=[
    {txt:"视频列表"}
];

/**
 * 视频播放区域
 */
class VideoFrame extends React.Component{
    componentDidMount() {
        //region Insert IFrame API script
        (document.getElementsByTagName('head')[0] || document.body).appendChild(document.createElement('script')).src = 'https://www.youtube.com/iframe_api';
        //endregion
        window.onload = ()=> {
            //region IFrame Player API
            // const {updateCurrentVideo,getVideoInfo}=this.props;
            const currentVideoId = util.getQueryString('v',this.props.video.videoHref);
            const player = new YT.Player(this.refs['player'], {
                height    : '690',
                width     : '1200',
                videoId   : currentVideoId,
                playerVars: {
                    autoplay      : 1,
                    iv_load_policy: 3,
                    showinfo      : 0,
                    rel           : 0,
                    // origin        : 'http://daigou.com',
                    // listType      : 'playlist',
                    // list          : this.props.playlistId,
                    // playlist      : this.props.playlistId,
                    color         : 'white'
                },
                events    : {
                    onStateChange(e){
                        const videoData = player.getVideoData();
                        // updateCurrentVideo(videoData['video_id']);
                        if (e.data === 0) {
                            // this.getVideoInfo();
                            player.stopVideo();
                        }
                    }
                }
            });
        };
    }

    render(){
        return(
            <div className="video-frame">
                <div className="main-box">
                    <div id="player" ref="player"></div>
                </div>
            </div>
        )
    }
}

/**
 * 视频详细信息
 */
class VideoDetail extends React.Component{
    componentDidMount() {
        //region 百度分享按钮
        window._bd_share_config = {
            common: {
                bdDesc    : 'SuperBuy视频中心',
                bdText    : 'SuperBuy视频中心',
                bdMini    : '2',
                bdMiniList: false,
                bdPic     : '',
                bdStyle   : '1',
                bdSize    : '24'
            },
            share : {}
        };
        (document.getElementsByTagName('head')[0] || document.body).appendChild(document.createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5);
    }

    render(){
        // console.log(this.props)
        return(
            <div className="video-detail clearfix">
                <div className="fl">
                    <h2 className="video-name">
                        {this.props.videoData.title}
                    </h2>
                </div>

                <div className="fr clearfix">
                    <a href={this.props.videoData.videoHref} title="前往YouTube上观看" target="_blank" className="go-youTube fl"></a>
                    <div className="share-icon fl"title="分享视频">
                        <i className="ico"></i>
                        <div className="border-skip"></div>
                        <div id="bdshare" className="bdsharebuttonbox">
                            <a href="#" className="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                            <a href="#" className="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                            <a href="#" className="bds_fbook" data-cmd="fbook" title="分享到Facebook"></a>
                            <a href="#" className="bds_twi" data-cmd="twi" title="分享到Twitter"></a>
                            <a href="#" className="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * 商品信息
 */
class ProInfo extends React.Component{

    render(){
        // console.log(this.props.videoData)
        return(
            <div className="pro-info">
                <div className="hd clearfix">
                    <div className="user fl">
                        <img src={this.props.videoData.userImg} alt={this.props.videoData.nickName} />
                            <span className="username">{this.props.videoData.nickName}</span>
                            <span>购买的宝贝</span>
                    </div>
                    <div className="fr video-info">
                        {/*<span className="scan-num">{this.props.videoData.browseNums}</span>*/}
                        <span className="date">{this.props.date2str(new Date(this.props.videoData.createTime*1000),"M-d")}</span>
                    </div>
                </div>
                <div className="bd clearfix">
                    <div className="pro-detail fl">
                        <div className="pic">
                            <img src={this.props.videoData.img} alt={this.props.videoData.productTitle} />
                        </div>
                        <h3 className="pro-name">
                            {this.props.videoData.productTitle}
                        </h3>
                        <div className="price">
                            <span className="now-price"><i>￥</i>{this.props.videoData.price}</span>
                            {/*<span className="old-price"><i>￥</i>{this.props.videoData.discountPrice}</span>*/}
                        </div>
                    </div>
                    <div className="quality-check fl">
                        <div className="inner-wrap">
                            <ul className="clearfix">
                                <li className="tit">质检评测</li>
                                <li className="basic-info">
                                    <div className="item"><span className="label">{this.props.videoData.checkContent}</span></div>
                                </li>
                                <li className="intro">{this.props.videoData.recommendContent}</li>
                            </ul>
                            <div className="quality-check-people">
                                质检员：{this.props.videoData.checker}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * 视频列表
 */
class VideoList extends React.Component{
    renderListCont(){ //渲染视频列表listCont内容
        let listCont = <li className="no-data">暂无数据...</li>;
        if(this.props.videosData.listResult) {
            listCont = this.props.videosData.listResult.map((v,i) =>
                <li key={i} className="item" data-videoId={util.getQueryString('v',v.videoHref)} data-id={v.id}>
                    <h3 className="h3"><a target="_blank" href={v.href}>{v.productTitle}</a></h3>
                    <a className="inner-wrap" target="_blank" href={'./index.html?id='+v.id+(this.props.videosData.currPage>1 ? '&page='+this.props.videosData.currPage : '')}>
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
                                <span className="date fr">{this.props.date2str(new Date(v.createTime*1000),"M-d") || " "}</span>
                            </div>
                        </div>
                    </a>
                </li>
            )
        }
        return listCont;
    }
    render(){
        // console.log(this.props.videoListData.videosData.listResult);
        return(
            <div className="video-list">
                <div className="hd clearfix">
                    <h3 className="fl">边买边看选集</h3>
                    <div className="switch-btn fr" title="换一批" onClick={this.props.changeVideoListData}>换一批</div>
                </div>
                <div className="bd">
                    <ul className="list-ul clearfix">
                        {
                            this.renderListCont()
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

/**
 *  content渲染组件
 */
const util = window.supervar.util;
// const superbuyApiUrl='http://www.super.com/api/';
const superbuyApiUrl=window.supervar.apiURL;
const config = {
    apiUrl      : 'https://www.googleapis.com/youtube/v3/',
    apiKey      : 'AIzaSyAbRKTX2e5wOy_tr8EbHMLezmyw8ygZYvw',
    // playlistId  : 'PLn-bsoP40XJyuQP8GrLdFTDUQbnKeD2U6',
    // currentVideo: 'jRn4WpoNAyo'
};
class Content extends React.Component{
    constructor(props) {
        super(props);
        // const currentVideoId = util.getQueryString('videoId');
        const id = util.getQueryString('id');
        const currPage = util.getQueryString('page')*1;
        this.state = {
            videos: {//存储视频分页基本信息
                currPage : currPage || 1,
                pageSize : 4,
                sortType : 0,
            },
            videosData:{}, //存储视频列表内容信息
            video:{},//存储本视频单页面的视频信息
            id : id ? id : this.props.id //在superbuy数据库对应的id编号
            // currentVideoId : currentVideoId ? currentVideoId : props.currentVideoId //视频在youtube对应的id
        };
        this.updateCurrentVideo = this.updateCurrentVideo.bind(this);
        this.getVideoInfo = this.getVideoInfo.bind(this);
        this.getVideoList = this.getVideoList.bind(this);
        this.changeVideoListData = this.changeVideoListData.bind(this);
    }

    date2str(x,y){
        var z ={y:x.getFullYear(),M:x.getMonth()+1,d:x.getDate(),h:x.getHours(),m:x.getMinutes(),s:x.getSeconds()};
        return y.replace(/(y+|M+|d+|h+|m+|s+)/g,function(v) {return ((v.length>1?"0":"")+eval('z.'+v.slice(-1))).slice(-(v.length>2?v.length:2))});
    }

    getVideoInfo() {//获取当前播放视频的信息
        fetch(`${superbuyApiUrl}shoppingguide/video-info?id=${this.state.id}`,{
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
                if (data.data.id) {
                    this.setState({
                        video: data.data
                    },()=>{
                        document.title = this.state.video.title + document.title.replace(/^视频播放/,'');
                    });
                }
            })
            .catch(error=> {
                console.error(error);
            });
    }

    getVideoList(){ // 获取分页视频列表
        fetch(`${superbuyApiUrl}shoppingguide/video-list?currPage=${this.state.videos.currPage}&pageSize=${this.state.videos.pageSize}`,{
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
                if (data.data.listResult && data.data.listResult.length) {
                    this.setState({
                        videosData:data.data
                    });
                }
            })
            .catch(error=> {
                console.error(error);
            });
    }

    updateCurrentVideo(videoId,id) { //点击更换其他视频
    //     this.setState({
    //         currentVideoId :videoId,
    //         id : id
    //     },()=>{
    //         this.getVideoInfo();
    //     });
    //
    }

    changeVideoListData() { //换一批视频
        let totalPage = Math.ceil(this.state.videosData.totalRow / 4);
        let currPage = this.state.videos.currPage;
        currPage = currPage < totalPage ? currPage + 1 : 1;

        this.setState({
            videos:{
                currPage : currPage,
                pageSize : 4,
                sortType : 0,
            }
        },()=>{
            // console.log("changeVideoListData",this.state);
            this.getVideoList();
        });
    }

    componentDidMount() {
        this.getVideoInfo();
        this.getVideoList();
        // console.log(this.state.videos);
    }

    render(){
        // const other = this.props;
        secNavBoxTxt[1]={'txt':this.state.video.title};
        return(
            <div className="video">
                <SecNavBox subTit={secNavBoxTxt}/>
                <VideoFrame {...this.state}/>
                <div className="main-box clearfix">
                    <VideoDetail videoData={this.state.video}/>
                    <ProInfo videoData={this.state.video} date2str={this.date2str}/>
                    <VideoList
                        videosData={this.state.videosData}
                        updateCurrentVideo={this.updateCurrentVideo}
                        changeVideoListData={this.changeVideoListData}
                        date2str={this.date2str}/>
                </div>
            </div>
        )
    }
}
Content.propTypes = {
    apiUrl      : PropTypes.string.isRequired,
    apiKey      : PropTypes.string.isRequired,
};

var Wrap = window.supervar.Wrap;
var content=ReactDOM.render(
    <Wrap content={<Content {...config}  />} />,
    document.getElementById("container")
);