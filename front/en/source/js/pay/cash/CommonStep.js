/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 17:27
 */
import React from 'react';
const CommonStep = props=>(
    <div className="common_step clearfix">
      <ul className="tc">
        <li className="select">
          <div className="step_text clearfix">
                        <span> <i className="step-icon">{''}</i>
                        Payment
                    </span>
            <div className="witerline"></div>
          </div>
          <i className="mod_arrow">{''}</i>
        </li>
        <li>
          <div className="step_text clearfix">
                        <span>
                        <i className="step-icon">{''}</i>
                        Shopping Agent Process
                    </span>
            <div className="witerline"></div>
          </div>
          <i className="mod_arrow">{''}</i>
        </li>
        <li>
          <div className="step_text clearfix">
                        <span>
                        <i className="step-icon">{''}</i>
                        Payment for international delivery fee
                    </span>
            <div className="witerline"></div>
          </div>
          <i className="mod_arrow">{''}</i>
        </li>
        <li>
          <div className="step_text clearfix">
                        <span>
                        <i className="step-icon">{''}</i>
                        Delivery
                    </span>
            <div className="witerline"></div>
          </div>
          <i className="mod_arrow">{''}</i>
        </li>
      </ul>
    </div>
);
export default CommonStep;
