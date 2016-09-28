/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/16 14:57
 */
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import Video from './index/Video';
import Videos from './index/Videos';
import '../../less/video/index.less';
const Wrap = window.supervar.Wrap;
const util = window.supervar.util;
const config = {
  apiUrl      : 'https://www.googleapis.com/youtube/v3/',
  apiKey      : 'AIzaSyAbRKTX2e5wOy_tr8EbHMLezmyw8ygZYvw',
  playlistId  : 'PLn-bsoP40XJyuQP8GrLdFTDUQbnKeD2U6',
  currentVideo: 'uUmbS_Mn2a8'
};
class Content extends React.Component {
  static propTypes = {
    apiUrl      : PropTypes.string.isRequired,
    apiKey      : PropTypes.string.isRequired,
    playlistId  : PropTypes.string.isRequired,
    currentVideo: PropTypes.string.isRequired,
    util        : PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    const util = props.util;
    const currentVideoId = util.getQueryString('id');
    this.state = {
      videos       : {},
      disableScroll: false,
      currentVideo : currentVideoId ? currentVideoId : props.currentVideo
    };
  }

  updateCurrentVideo = currentVideo=> this.setState({currentVideo});

  updateDisableScroll = disableScroll=> this.setState({disableScroll});

  scrollHandler = e=> {
    if (this.state.disableScroll) e.preventDefault();
  };

  componentDidMount() {
    const {apiUrl, apiKey, playlistId, util}=this.props;
    const queryObj = {
      key       : apiKey,
      part      : 'snippet,contentDetails',
      maxResults: 50,
      playlistId
    };
    //region 使用 playlistId 获取视频列表
    fetch(`${apiUrl}playlistItems${util.obj2Search(queryObj)}`)
      .then(res=> {
        if (res.status === 200) {
          return res.json();
        } else {
          throw Error(`Response Status: ${res.message}`);
        }
      })
      .then(data=> {
        if (data.items && data.items.length) {
          this.setState({
            videos: data.items
          });
        }
      })
      .catch(error=> {
        console.error(error);//eslint-disable-line
      });
    //endregion
  }

  render() {
    const {currentVideo, ...other}=this.props;
    return (
      <div className="main"
           onWheel={this.scrollHandler}>
        <Video
          {...other}
          currentVideo={this.state.currentVideo}
          updateCurrentVideo={this.updateCurrentVideo}
        />
        {this.state.videos.length &&
        <Videos {...this.state} {...other} updateDisableScroll={this.updateDisableScroll} />}
      </div>
    );
  }
}
//region 组件渲染
render(
  <Wrap content={<Content {...config} util={util} />} />,
  document.getElementById('container')
);
//endregion
