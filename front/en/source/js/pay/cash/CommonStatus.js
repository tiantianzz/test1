/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 17:28
 */
import React from 'react';

const CommonStatus = props=>(
    <div className="common_status clearfix">
      <ul className="status_ul clearfix">
        <li className="select">
          <div className="timeline clearfix">
            <div className="status_line"></div>
            <div className="status_radius">1</div>
          </div>
          <div className="status_frist">
            <p className="status_name">Shopping Cart</p>
          </div>
        </li>
        <li className="select">
          <div className="timeline clearfix">
            <div className="status_line"></div>
            <div className="status_radius">2</div>
          </div>
          <div className="status_frist">
            <p className="status_name">Submit order </p>
          </div>
        </li>
        <li className="select">
          <div className="timeline clearfix">
            <div className="status_line"></div>
            <div className="status_radius">3</div>
          </div>
          <div className="status_frist">
            <p className="status_name">Check out</p>
          </div>
        </li>
        <li>
          <div className="timeline clearfix">
            <div className="status_line"></div>
            <div className="status_radius">4</div>
          </div>
          <div className="status_frist">
            <p className="status_name">Payment Pending </p>
          </div>
        </li>
        <li>
          <div className="timeline clearfix">
            <div className="status_line"></div>
            <div className="status_radius">5</div>
          </div>
          <div className="status_frist">
            <p className="status_name">Payment Confirming </p>
          </div>
        </li>
        <li>
          <div className="timeline clearfix">
            <div className="status_line"></div>
            <div className="status_radius">6</div>
          </div>
          <div className="status_frist">
            <p className="status_name">Payment successful</p>
          </div>
        </li>
      </ul>
    </div>
);

export default CommonStatus;
