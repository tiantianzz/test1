/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/16 15:55
 */
/*global YT:false*/
import React, { PropTypes } from 'react';

export default class Video extends React.Component {
  static propTypes = {
    apiUrl            : PropTypes.string.isRequired,
    apiKey            : PropTypes.string.isRequired,
    playlistId        : PropTypes.string.isRequired,
    currentVideo      : PropTypes.string.isRequired,
    updateCurrentVideo: PropTypes.func.isRequired,
    util              : PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      video          : {
        snippet   : {
          title      : 'SuperBuy官方介绍视频',
          description: '视频描述'
        },
        statistics: {
          viewCount: 0
        }
      },
      descriptionOpen: false
    };
  }

  toggleDescription = () =>this.setState({descriptionOpen: !this.state.descriptionOpen});


  updateDescription = ()=> {
    const textHeight = this.refs['description-text'].clientHeight;
    const descriptionEle = this.refs['description'];
    let lineHeight = this.props.util.getComputedStyle(descriptionEle, 'lineHeight');
    lineHeight = Number(lineHeight.slice(0, -2));
    this.refs['toggle_btn'].className = textHeight > lineHeight ? '' : 'hide';
  };

  getVideoInfo = ()=> {
    //region 获取当前播放视频的信息
    const util = this.props.util;
    const {apiUrl, apiKey, currentVideo}=this.props;
    const queryObj = {
      key : apiKey,
      part: 'statistics,snippet',
      id  : currentVideo
    };
    fetch(`${apiUrl}videos${util.obj2Search(queryObj)}`)
      .then(res=> {
        if (res.status === 200) {
          return res.json();
        } else {
          throw Error(`Response Status: ${res.message}`);
        }
      })
      .then(data=> {
        // console.log(data.items[0]);
        if (data.items && data.items.length) {
          this.setState({
            video: data.items[0]
          });
        }
      })
      .catch(error=> {
      });
    //endregion
  };

  componentDidUpdate() {
    //region 获取元素的 line-height
    const descriptionEle = this.refs['description'];
    let lineHeight = this.props.util.getComputedStyle(descriptionEle, 'lineHeight');
    lineHeight = Number(lineHeight.slice(0, -2));
    //endregion
    this.refs['description'].style.maxHeight = this.state.descriptionOpen
      ? this.refs['description-text'].clientHeight + 'px'
      : lineHeight + lineHeight / 2 + 'px';
    this.updateDescription();
  }

  componentDidMount() {
    //region Insert IFrame API script
    (document.getElementsByTagName('head')[0] || document.body).appendChild(document.createElement('script')).src = 'https://www.youtube.com/iframe_api';
    //endregion
    window.onload = ()=> {
      //region IFrame Player API
      const {updateCurrentVideo}=this.props;
      const getVideoInfo = this.getVideoInfo;
      const player = new YT.Player(this.refs['player'], {
        height    : '1200',
        width     : '675',
        videoId   : this.props.currentVideo,
        playerVars: {
          autoplay      : 1,
          iv_load_policy: 3,
          showinfo      : 0,
          rel           : 0,
          // origin        : 'http://daigou.com',
          listType      : 'playlist',
          list          : this.props.playlistId,
          // playlist      : this.props.playlistId,
          color         : 'white'
        },
        events    : {
          onStateChange(e){
            const videoData = player.getVideoData();
            updateCurrentVideo(videoData['video_id']);
            if (e.data === 0) {
              getVideoInfo();
              player.stopVideo();
            }
          }
        }
      });
    };
    //endregion
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
    //endregion
    this.updateDescription();
    this.getVideoInfo();
  }

  render() {
    const {toggleBtn, descriptionOpen, video}=this.state;
    return (
      <div className="video">
        <div className="video-frame">
          <div ref="player"></div>
        </div>
        <div className="video-detail">
          <div className="left">
            <p className="name">{video.snippet.title}</p>
            <p className="view-number gray">{this.props.util.addThousandsSeparator(video.statistics.viewCount)}人观看</p>
            <p className="description gray" ref="description">
              <span ref="description-text" id="desc">{video.snippet.description}</span>
            </p>
            <p ref="toggle_btn" className={toggleBtn ? '' : 'hide'}>
              <a href="javascript:void(0)" onClick={this.toggleDescription}>{descriptionOpen ? '收起' : '展开'}</a>
            </p>
          </div>
          <div className="right">
            <div>
              <a className="go-youTube" title="前往YouTube上观看" target="_blank" href={`https://www.youtube.com/watch?list=${this.props.playlistId}&v=${this.props.currentVideo}`}>YouTube上观看</a>
            </div>
            <div className="share-icon"
                 title="分享视频">
              <div className="border-skip"></div>
              <div id="bdshare" className="bdsharebuttonbox">
                <a href="#" className="bds_weixin" data-cmd="weixin" title="分享到微信">{}</a>
                <a href="#" className="bds_qzone" data-cmd="qzone" title="分享到QQ空间">{}</a>
                <a href="#" className="bds_fbook" data-cmd="fbook" title="分享到Facebook">{}</a>
                <a href="#" className="bds_twi" data-cmd="twi" title="分享到Twitter">{}</a>
                <a href="#" className="bds_tsina" data-cmd="tsina" title="分享到新浪微博">{}</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}