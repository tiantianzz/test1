/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/9/27 10:24
 * Description: 活动时间
 */
import React from 'react';
import '../../../less/superday/preheat/status-bar.less';

export default class StatusBar extends React.Component {
  static propTypes = {
    endTime: React.PropTypes.number.isRequired
  };

  render() {
    const leftDate = new Date(this.props.endTime);
    const d = leftDate.getDate()-1;
    const h = leftDate.getHours();
    const m = leftDate.getMinutes();
    const s = leftDate.getSeconds();
    return (
      <div className="status-bar">
        <ul>
          <li className="active">
            <p>0元抢运费折扣券</p>
            <p>北京时间距结束：
              <span className="timer">{d < 10 ? `0${d}` : d}</span>天
              <span className="timer">{h < 10 ? `0${h}` : h}</span>时
              <span className="timer">{m < 10 ? `0${m}` : m}</span>分
              <span className="timer">{s < 10 ? `0${s}` : s}</span>秒
            </p>
          </li>
          <li>
            <p>全球包邮</p>
            <p>9.2~9.4即将开始</p>
          </li>
          <li>
            <p>1元福袋&amp;店铺折扣返现</p>
            <p>9.5~9.6敬请期待</p>
          </li>
        </ul>
      </div>
    );
  }
}