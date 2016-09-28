/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 17:27
 */
import React from 'react';
const CommonStep = props=>(
    <div className="common_step clearfix hide">
      <ul>
        <li className="select">
          <div className="step_text clearfix">
                        <span> <i className="step-icon">{''}</i>
                        支付商品费用
                    </span>
            <div className="witerline"></div>
          </div>
          <i className="mod_arrow">{''}</i>
        </li>
        <li>
          <div className="step_text clearfix">
                        <span>
                        <i className="step-icon">{''}</i>
                        为您代购
                    </span>
            <div className="witerline"></div>
          </div>
          <i className="mod_arrow">{''}</i>
        </li>
        <li>
          <div className="step_text clearfix">
                        <span>
                        <i className="step-icon">{''}</i>
                        支付国际运费
                    </span>
            <div className="witerline"></div>
          </div>
          <i className="mod_arrow">{''}</i>
        </li>
        <li>
          <div className="step_text clearfix">
                        <span>
                        <i className="step-icon">{''}</i>
                        发货
                    </span>
            <div className="witerline"></div>
          </div>
          <i className="mod_arrow">{''}</i>
        </li>
      </ul>
    </div>
);
export default CommonStep;
