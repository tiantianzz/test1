/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 17:28
 */
import React from 'react';

const CommonStatus = props=>(
    <div className="common_status clearfix hide">
      <ul className="status_ul clearfix">
        <li className="select">
          <div className="timeline clearfix">
            <div className="status_line"></div>
            <div className="status_radius">1</div>
          </div>
          <div className="status_frist">
            <p className="status_name">查看购物车</p>
          </div>
        </li>
        <li className="select">
          <div className="timeline clearfix">
            <div className="status_line"></div>
            <div className="status_radius">2</div>
          </div>
          <div className="status_frist">
            <p className="status_name">提交订单</p>
          </div>
        </li>
        <li className="select">
          <div className="timeline clearfix">
            <div className="status_line"></div>
            <div className="status_radius">3</div>
          </div>
          <div className="status_frist">
            <p className="status_name">收银台结算</p>
          </div>
        </li>
        <li>
          <div className="timeline clearfix">
            <div className="status_line"></div>
            <div className="status_radius">4</div>
          </div>
          <div className="status_frist">
            <p className="status_name">待付款</p>
          </div>
        </li>
        <li>
          <div className="timeline clearfix">
            <div className="status_line"></div>
            <div className="status_radius">5</div>
          </div>
          <div className="status_frist">
            <p className="status_name">付款确认中</p>
          </div>
        </li>
        <li>
          <div className="timeline clearfix">
            <div className="status_line"></div>
            <div className="status_radius">6</div>
          </div>
          <div className="status_frist">
            <p className="status_name">支付成功</p>
          </div>
        </li>
      </ul>
    </div>
);

export default CommonStatus;
