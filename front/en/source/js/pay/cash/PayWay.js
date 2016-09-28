/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/22 9:01
 */
import React from 'react';
const path = '/cn/source/img/pay/cash';
const PayWay = props=>(
  <li onClick={props.onClick}
      className={props.way === props.currentPay ? 'select' : ''}>
    <div className="hckie7">
      <div className="vmid_wrap">
          <span className="pay-way vmid ff-wr">
              <img src={path + props.icon}
                   alt={props.iconAlt}
                   className="pay-icon" /><span className="pay-way-name">{props.name}</span></span>
      </div>
    </div>
    <span className="select-icon psa">{''}</span>
  </li>
);
const PropTypes = React.PropTypes;
PayWay.propTypes = {
  icon      : PropTypes.string.isRequired,
  iconAlt   : PropTypes.string.isRequired,
  name      : PropTypes.string.isRequired,
  way       : PropTypes.oneOf(['paypal', 'nationalpay', 'weixin', 'alipay', 'card']),
  currentPay: PropTypes.oneOf(['paypal', 'nationalpay', 'weixin', 'alipay', 'card']),
  onClick   : PropTypes.func.isRequired
};
export default PayWay;