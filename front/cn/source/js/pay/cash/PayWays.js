/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 17:39
 */
import React, { PropTypes } from 'react';
import PayWay from './PayWay';
export default class PayWays extends React.Component {
  static propTypes = {
    togglePay : PropTypes.func.isRequired,
    currentPay: PropTypes.oneOf(['paypal', 'nationalpay', 'weixin', 'alipay', 'card']),
    payWays   : PropTypes.arrayOf(React.PropTypes.shape({
      id     : PropTypes.number.isRequired,
      icon   : PropTypes.string.isRequired,
      iconAlt: PropTypes.string.isRequired,
      name   : PropTypes.string.isRequired,
      way    : PropTypes.oneOf(['paypal', 'nationalpay', 'weixin', 'alipay', 'card'])
    }).isRequired).isRequired
  };

  render() {
    const {currentPay}=this.props;
    return (
        <div className="pay-ways mt20">
          <ul className="arrows tc">
            <li className={currentPay !== 'paypal'&&'hidden'}>{}</li>
            <li className={currentPay !== 'nationalpay'&&'hidden'}>{}</li>
            <li className={currentPay !== 'weixin'&&'hidden'}>{}</li>
            <li className={currentPay !== 'alipay'&&'hidden'}>{}</li>
            <li className={currentPay !== 'card'&&'hidden'}>{}</li>
          </ul>
          <ul className="c tc items">
            {this.props.payWays.map(payWay=>
                <PayWay key={`pay-${payWay.id}`}
                        onClick={()=> this.props.togglePay(payWay.way)}
                        currentPay={this.props.currentPay} {...payWay} />
            )}
          </ul>
        </div>
    );
  }
}