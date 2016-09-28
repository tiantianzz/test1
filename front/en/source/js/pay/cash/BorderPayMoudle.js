/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 17:37
 */
import React from 'react';
const BorderPayMoudle = props=>(
    <div className="border-pay-moudle">
      <p><img src="//static.daigou.com/i/images/pay/wx-pay-icon.jpg"
              alt="Wechat Pay" /></p>
      <div className="wx-ss wx-ss-mt15 c">
        <div className="ss-img-box fl ss-img-box-ml wx-ss-mt15 psr"
             id="js-ss">
          <p className="ss-img">
            <img src="//static.daigou.com/i/images/pay/ewm-pay.jpg"
                 alt="QR Code"/>
          </p>
          <p className="ss-img-info">
            Please use Wechat to scan
            <br/>the QR Code in order to pay
          </p>
        </div>
        <img src="//static.daigou.com/i/images/pay/wx-pay.jpg"
             alt="Wechat Pay"
             className="wx-pay-ss-img psr hide"
             id="js-wx-img" />
      </div>
      <p className="mt40"><a href="">Other payment methods</a></p>
    </div>
);
export default BorderPayMoudle;