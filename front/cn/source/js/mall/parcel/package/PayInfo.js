/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:42
 */
import React from 'react';
import {
    PropTypes,
    deliveryPropTypes,
    number,
    string
} from '../shorthandValid';
import Preferential from './Preferential';
import Delivery from './Delivery';
import ServerSafe from './PerverSafe';
import PackageTotal from './PackageTotal';
/**
 * 运送方式，包裹保险，优惠方式，单个包裹合计的共同外框
 */
export default class PayInfo extends React.Component {
  static propTypes = {
    DeliveryList: PropTypes.arrayOf(PropTypes.shape(deliveryPropTypes)).isRequired,
    deliveryId  : number.isRequired,
    premiumKey  : string.isRequired,
    item        : number.isRequired
  };

  render() {
    const props = this.props;
    const {DeliveryList, deliveryId, premiumKey, item}=props;
    let currentFreight = 0;
    let currentDiscountFreight = 0;
    let preferential = '';
    let currentDelivery = {};
    DeliveryList.forEach(data=> {
      if (data.DeliveryId === deliveryId) {
        currentFreight = data.Freight;
        currentDiscountFreight = data.DiscountFreight;
        currentDelivery = data;
      }
    });
    if ((currentFreight - currentDiscountFreight).toFixed(2) > 0)
      preferential = (<Preferential item={item} />);
    return (
        <div className="item-pay-info clearfix">
          <ul>
            <Delivery deliveryList={DeliveryList}
                      premiumKey={premiumKey}
                      deliveryId={deliveryId}
                      item={item}
            />
            <ServerSafe item={item}
                        premiumKey={premiumKey}
                        deliveryId={deliveryId} />
            {preferential}
            <PackageTotal premiumKey={premiumKey}
                          delivery={currentDelivery}
                          item={item} />
          </ul>
        </div>
    );
  }
}