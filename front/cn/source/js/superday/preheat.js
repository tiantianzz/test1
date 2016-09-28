/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/9/26 17:20
 * Description: 品牌升级日-预热期
 */
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import StatusBar from './preheat/StatusBar';
import Wheel from './preheat/Wheel';
import Coupon from './preheat/Coupon';
import Present from './preheat/Present';
import Seckill from './preheat/Seckill';
import Brand from './preheat/Brand';
import Shop from './preheat/Shop';
import Recommend from './preheat/Recommend';
import model from './preheat/model';
import '../../less/superday/preheat.less';

class Preheat extends React.Component {
  static propTypes = {
    endTime: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      endTime: Date.parse(new Date(props.endTime)) - Date.parse(new Date())
    };
  }

  updateEndTime = endTime=>this.setState({endTime});

  componentDidMount() {
    (function timer(that) {
      that.updateEndTime(that.state.endTime - 1000);
      if (0 < that.state.endTime) {
        setTimeout(() =>timer(that), 1000);
      } else {
        that.updateEndTime(0);
      }
    })(this);
  }

  render() {
    const {endTime}=this.state;
    return (
      <div>
        <div className="super-day"></div>
        <StatusBar endTime={endTime} />
        <Wheel />
        <Coupon />
        <Present />
        <Seckill />
        <Brand />
        <Shop />
        <Recommend />
      </div>
    );
  }
}

render(
  <Preheat {...model} />,
  window.container
);