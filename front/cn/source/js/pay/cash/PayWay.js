/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/22 9:01
 */
import React, { PropTypes } from 'react';

export default function PayWay(props) {
  const path = '/cn/source/img/pay/cash';
  return (
    <li onClick={props.onClick}
        className={props.way === props.currentPay ? 'select' : ''}>
      <div className="hckie7">
        <div className="vmid_wrap">
          <span className="pay-way vmid ff-wr">
              <img src={path + props.icon}
                   alt={props.iconAlt}
                   className="pay-icon" />{props.name}</span>
        </div>
      </div>
      <span className="select-icon psa">{''}</span>
    </li>
  );
}
PayWay.propTypes = {
  icon      : PropTypes.string.isRequired,
  iconAlt   : PropTypes.string.isRequired,
  name      : PropTypes.string.isRequired,
  way       : PropTypes.oneOf(['paypal', 'nationalpay', 'weixin', 'alipay', 'card']),
  currentPay: PropTypes.oneOf(['paypal', 'nationalpay', 'weixin', 'alipay', 'card']),
  onClick   : PropTypes.func.isRequired
};