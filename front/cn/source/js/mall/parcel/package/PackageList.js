/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:48
 */
import React from 'react';
import Goods from './Goods';
import PayInfo from './PayInfo';
import {
    PropTypes,
    goodsPropTypes,
    deliveryPropTypes,
    number
} from '../shorthandValid';
/**
 * 正常包裹
 */
export default class PackageList extends React.Component {
  static propTypes = {
    item        : number.isRequired,
    ItemList    : PropTypes.arrayOf(PropTypes.shape(goodsPropTypes).isRequired).isRequired,
    Undelivery  : PropTypes.arrayOf(PropTypes.number).isRequired,
    Weight      : number.isRequired,
    DeliveryId  : number.isRequired,
    BestPrice   : number.isRequired,
    DeliveryList: PropTypes.arrayOf(PropTypes.shape(deliveryPropTypes)).isRequired

  };

  render() {
    const {ItemList, item, DeliveryId, ...other}= this.props;
    const premiumKey = parseInt(new Date().getTime() * Math.random()).toString(16);
    return (
        <div id="order-list-box">
          <div className="order-list">
            <div className="order-hd">
              <b>包裹&nbsp;{item + 1}</b>
            </div>
            <ul className="order-body">
              {ItemList.map(goods=><Goods goods={goods}
                                          key={goods.ProductId}
                                          error={false} />)}
            </ul>
            <PayInfo
                {...other}
                deliveryId={DeliveryId}
                premiumKey={premiumKey}
                item={item}
            />
          </div>
        </div>

    );
  }
}