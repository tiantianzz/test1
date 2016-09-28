/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:39
 */
import React from 'react';
import { number, string } from '../shorthandValid';
/**
 * 包裹保险
 */
export default class ServerSafe extends React.Component {
  static propTypes = {
    deliveryId: number.isRequired,
    premiumKey: string.isRequired,
    item      : number.isRequired
  };

  render() {
    const props = this.props;
    const {premiumKey, item}=props;
    return (
        <li className="show-tips service-safe">
          <div style={{width: '314px'}}
               className="fr">
            包裹保险：&nbsp;
            <label className="js-change-show-tips"
                   htmlFor={premiumKey}>
              <input type="checkbox"
                     id={premiumKey} />
              <span className="pl5 pr5">购买包裹保险</span>
              <a href="http://www.dotdotbuy.com/help/show/?id=148"
                 target="_blank">
                <img src="http://static.daigou.com/images/icon_help.gif"
                     style={{marginTop: '-4px'}}
                     alt="包裹保险是？" />
              </a>
            </label>
            <span className="price-info fr"
                  id={`premiumPrice_${item}`}>0.00</span>
            {/*购买包裹保险模块 [[*/}
            <div className="tips-box hide"
                 ref={`premium_${premiumKey}`}>
              <dl>
                <dd>
                  保险费：
                  <input type="text"
                         className="premium mr5 ml10 js-premium"
                         maxLength="5"
                         id={`premiumInput_${premiumKey}`}
                         defaultValue="12" />
                </dd>
                <dd className="grey pl30">
                  （保费=保价金额X2%，保费最低12元起）
                </dd>
                <dd>
                  保价金额：<b id={`premiumSupport_${premiumKey}`}>600.00</b>
                  <b>元</b>
                </dd>
              </dl>
              <div>
                <button className="save js-save-premium">保存</button>
              </div>
            </div>
            {/*购买包裹保险模块 ]]*/}
          </div>
        </li>
    );
  }
}