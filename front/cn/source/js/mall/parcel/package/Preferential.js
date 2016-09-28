/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:40
 */
import React from 'react';
/**
 * 优惠方式
 */
export default class Preferential extends React.Component {
  static propTypes = {
    item: React.PropTypes.number.isRequired
  };

  render() {
    const {item}=this.props;
    return (
        <li className="show-pre"
            id={`show_pre_${item}`}>
          <div className="fr"
               style={{width: '314px'}}>
            优惠方式：
            <div className="show-tips">
              <select className="js-coupon-select">
                <option value="0">不使用任何优惠</option>
                <option value="1">使用积分</option>
                <option value="2">使用优惠券</option>
              </select>
              <span className="select-bg">{''}</span>

              <div className="pre-box fr ml10">

              </div>

              <span className="use-point ml5 mr20 hide">
								<input type="text"
                       className="input-border"
                       placeholder="100积分=1元" />
							</span>
              {/*优惠券选择模块 [[*/}
              <div className="tips-box hide">
                <dl className="coupon-box"
                    id="coupon_{{=key}}">{''}</dl>
                <div>
                  <button className="save js-coupon-save">保存
                  </button>
                  <a href="###"
                     className="ml10 js-close-tips">取消</a>
                </div>
                {/*优惠券选择模块 ]]*/}
              </div>
            </div>
            <span className="price-info fr">-0.00</span>
          </div>
        </li>
    );
  }
}