/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/17 14:26
 */
import React, { PropTypes }from 'react';
import ReactDOM from 'react-dom';
const update = React.addons.update;
class Item extends React.Component {
  static propTypes = {
    snippet       : PropTypes.shape({
      title     : PropTypes.string.isRequired,
      thumbnails: PropTypes.objectOf(PropTypes.object.isRequired).isRequired
    }).isRequired,
    contentDetails: PropTypes.shape({
      videoId: PropTypes.string.isRequired
    }).isRequired,
    currentVideo  : PropTypes.string.isRequired,
    apiUrl        : PropTypes.string.isRequired,
    apiKey        : PropTypes.string.isRequired,
    util          : PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      viewCount: 0
    };
  }

  clickHandler = ()=>location.href = `${location.pathname}?id=${this.props.contentDetails.videoId}`;

  componentDidMount() {
    const {apiUrl, apiKey, util}=this.props;
    const queryObj = {
      key : apiKey,
      part: 'statistics',
      id  : this.props.contentDetails.videoId
    };
    //region 获取视频的观看次数
    fetch(`${apiUrl}videos${util.obj2Search(queryObj)}`)
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
            viewCount: data.items[0].statistics.viewCount
          });
        }
      })
      .catch(error=> {
        console.error(error);//eslint-disable-line
      });
    //endregion

  }

  render() {
    const {snippet, contentDetails, currentVideo, util}=this.props;
    const addThousandsSeparator = util.addThousandsSeparator;
    return (
      <li className={currentVideo === contentDetails.videoId ? 'item active' : 'item'}>
        <div className="item-content"
             onClick={this.clickHandler}>
          <div className="thumbnail">
            <img className="thumbnail-pic"
                 src={snippet.thumbnails.high.url}
                 alt={snippet.title} />
            <span className="play-icon">{''}</span>
          </div>
          <div className="item-desc">
            <p className="name"
               title={snippet.title}>{snippet.title}</p>
            <p className="state">
              <span className="view-count">{addThousandsSeparator(this.state.viewCount)}</span>
              {currentVideo === contentDetails.videoId && <span className="current-play">当前播放</span>}
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default class Videos extends React.Component {
  static propTypes = {
    videos             : PropTypes.array.isRequired,
    currentVideo       : PropTypes.string.isRequired,
    apiUrl             : PropTypes.string.isRequired,
    apiKey             : PropTypes.string.isRequired,
    updateDisableScroll: PropTypes.func.isRequired

  };

  constructor(props) {
    super(props);
    this.state = {
      scroll: {
        marginTop : 20,
        originTop : 20,
        itemScroll: 0
      },
      move  : {
        flag   : false,
        clientY: 0
      }
    };
    this.currentVideo = props.currentVideo;
  }

  scrollItemsAndBar = offset => {
    const itemsWrap = this.refs['items-wrap'];
    const items = this.refs['items'];
    const scroll = this.refs['scroll-wrap'];
    //region 视频列表的滚动
    itemsWrap.scrollTop = itemsWrap.scrollTop + offset;
    //endregion
    //region 滚动条的滚动
    const wrapHeight = itemsWrap.clientHeight - 20;
    const scrollHeight = scroll.clientHeight ? scroll.clientHeight : Number(scroll.style.height.slice(0, -2));
    const scrollOffset = itemsWrap.scrollTop * (wrapHeight - scrollHeight) / (items.clientHeight - wrapHeight);
    const state = update(this.state, {
      scroll: {
        originTop : {$set: scrollOffset + 20},
        marginTop : {$set: scrollOffset + 20},
        itemScroll: {$set: itemsWrap.scrollTop}
      }
    });
    this.setState(state);
  };

  scrollHandler = e=>this.scrollItemsAndBar(e.deltaY);

  mouseDownHandler = e=>this.setState({move: {flag: true, clientY: e.clientY}});

  mouseMoveHandler = e=> {
    if (!this.state.move.flag) return;
    const refs = this.refs;
    const wrapHeight = refs['items-wrap'].clientHeight - 20;
    const scrollHeight = refs['scroll-wrap'].clientHeight;
    const maxOffset = wrapHeight - scrollHeight;
    const oldMarginTop = this.state.scroll.originTop;
    const offsetY = e.clientY - this.state.move.clientY;
    let marginTop = oldMarginTop + offsetY;
    //region 锁定 marginTop 范围
    if (marginTop < 0) {
      marginTop = 0;
    } else if (marginTop > maxOffset) {
      marginTop = maxOffset;
    }
    //endregion

    //region 视频列表的滚动
    const itemsWrap = refs['items-wrap'];
    const items = refs['items'];
    const scrollWrap = refs['scroll-wrap'];
    itemsWrap.scrollTop = this.state.scroll.itemScroll + offsetY * (items.clientHeight - wrapHeight) / (wrapHeight - scrollWrap.clientHeight);
    //endregion

    const scroll = update(this.state.scroll, {
      marginTop: {$set: marginTop}
    });
    this.setState({scroll});
  };

  mouseLeaveHandler = () => {
    const move = update(this.state.move, {
      flag: {$set: false}
    });
    this.setState({move});
  };

  mouseUpHandler = () => {
    const state = update(this.state, {
      scroll: {
        originTop : {$set: this.state.scroll.marginTop},
        itemScroll: {$set: this.refs['items-wrap'].scrollTop}
      },
      move  : {flag: {$set: false}}
    });
    this.setState(state);
  };


  componentWillReceiveProps(nextProps) {
    if (this.currentVideo !== nextProps.currentVideo) {
      this.currentVideo = nextProps.currentVideo;
      let currentIndex = 0;
      for (let i = nextProps.videos.length; i--;) {
        if (nextProps.videos[i].snippet.resourceId.videoId === nextProps.currentVideo) {
          currentIndex = i;
          break;
        }
      }
      const currentLiTop = Math.floor(currentIndex / 3) * 314;
      this.scrollItemsAndBar(currentLiTop);
    }
  }

  componentDidMount() {
    //region 初始化滚动条
    const refs = this.refs;
    const wrapHeight = refs['items-wrap'].clientHeight;
    const itemsHeight = refs['items'].clientHeight;
    if (itemsHeight > wrapHeight) {
      const scrollHeight = wrapHeight * wrapHeight / itemsHeight;
      refs['scroll-wrap'].style.height = scrollHeight + 'px';
    }
    //endregion

    //region 将当前播放视频移动到前排
    const currentLi = ReactDOM.findDOMNode(this.refs['active']);
    const currentLiTop = currentLi.offsetTop - 62;
    this.scrollItemsAndBar(currentLiTop);
    //endregion
  }

  render() {
    const {updateDisableScroll}=this.props;
    return (
      <div className="videos">
        <h2 className="header">全部视频</h2>
        <div
          className="scroll-wrap"
          title="滚动列表"
          onMouseDown={this.mouseDownHandler}
          onMouseMove={this.mouseMoveHandler}
          onMouseLeave={this.mouseLeaveHandler}
          onMouseUp={this.mouseUpHandler}
          style={{...this.state.scroll}}
          ref="scroll-wrap">
          <div className="scroll"></div>
        </div>
        <div className="items-wrap"
             ref="items-wrap"
             onMouseEnter={()=>updateDisableScroll(true)}
             onMouseLeave={()=>updateDisableScroll(false)}
             onWheel={this.scrollHandler}>
          <ul className="items"
              ref="items">
            {this.props.videos.map(data=>
              <Item key={data.id}
                    ref={this.props.currentVideo === data.contentDetails.videoId && 'active'}
                    {...data}
                    {...this.props} />)
            }
          </ul>
        </div>
      </div>
    );
  }
}