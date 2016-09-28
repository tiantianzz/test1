/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 17:37
 */
import React from 'react';
export default function BorderPayModules(props) {
  return (
      <div className="border-pay-moudle hide">
        <p><img src="//static.daigou.com/i/images/pay/wx-pay-icon.jpg"
                alt="微信支付" /></p>
        <div className="wx-ss wx-ss-mt15 c">
          <div className="ss-img-box fl ss-img-box-ml wx-ss-mt15 psr"
               id="js-ss">
            <p className="ss-img">
              <img src="//static.daigou.com/i/images/pay/ewm-pay.jpg"
                   alt="微信二维码" />
            </p>
            <p className="ss-img-info">
              请使用微信扫一扫
              <br />扫描二维码支付
            </p>
          </div>
          <img src="//static.daigou.com/i/images/pay/wx-pay.jpg"
               alt="微信支付"
               className="wx-pay-ss-img psr hide"
               id="js-wx-img" />
        </div>
        <p className="mt40"><a href="">选择其他支付方式</a></p>
      </div>
  );
}
