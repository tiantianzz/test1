/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:37
 */
import React from 'react';
import { PropTypes, string, number } from '../shorthandValid';
const DeliveryItem = props=>(
    <dd>
      <label>
        <input type="radio"
               name={`delivery${props.item}`}
               value={props.DeliveryId} />
        <span className="name">{props.DeliveryName}</span>
        <span className="fright ff-arial orange bold">&yen;&nbsp;{props.Freight.toFixed(2)}</span>
        <span className="time">寄送时效：{props.DeliveryCycle.replace('——', '-')}</span>
        <span className="fr">
            <a href="http://www.dotdotexpress.com/postage/country/?countryid=0"
               target="_blank">详情</a>
          </span>
      </label>
    </dd>
);
DeliveryItem.propTypes = {
  DeliveryName : PropTypes.string.isRequired,
  Freight      : PropTypes.number.isRequired,
  DeliveryCycle: PropTypes.string.isRequired,
  DeliveryId   : PropTypes.number.isRequired,
  item         : PropTypes.number.isRequired
};
/**
 * 运送方式
 */
export default class Delivery extends React.Component {
  static propTypes = {
    deliveryList: PropTypes.arrayOf(PropTypes.shape({
      DeliveryName   : string.isRequired,
      Freight        : number.isRequired,
      DeliveryCycle  : string.isRequired,
      DiscountFreight: number.isRequired
    })).isRequired,
    deliveryId  : number.isRequired,
    premiumKey  : string.isRequired,
    item        : number.isRequired
  };

  constructor() {
    super();
    this.state = {
      display: false
    };
  }

  render() {
    const props = this.props;
    const deliveryList = props.deliveryList;
    let currentDelivery = '';
    deliveryList.forEach(data=> {
      if (data.DeliveryId == props.deliveryId) {
        currentDelivery = data.DeliveryName;
      }
    });
    return (
        <li className="show-tips delivery-tips">
          <div style={{width: '314px'}}
               className="fr">
            运送方式：
            <a href="#"
               className="show-btn">{currentDelivery}</a>
            {/*运输方式选择模块 [[*/}
            <div className="tips-box hide"
                 ref={`delivery_${props.premiumKey}`}>
              <dl>
                {deliveryList.map(
                    delivery=>
                        <DeliveryItem
                            key={delivery.DeliveryId}
                            item={props.item}
                            {...delivery}
                        />
                )}
              </dl>
              <div>
                <button className="save">保存</button>
                <a href="#"
                   className="ml10">取消</a>
              </div>
            </div>
            {/*运输方式选择模块 ]]*/}
          </div>
        </li>
    );

  }
}