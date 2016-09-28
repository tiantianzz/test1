/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:35
 */
import React from 'react';
import {PropTypes,number} from './shorthandValid';
/**
 * 所有包裹合计
 */
export default class Total extends React.Component {
  static propTypes = {
    address           : PropTypes.arrayOf(PropTypes.any),
    order             : PropTypes.objectOf(PropTypes.any),
    currentAddressItem: number.isRequired

  };

  render() {
    const {address, order, currentAddressItem}=this.props;
    let defaultAddress = {};
    let total = 0;
    const receiver = ['-'];
    const receiverName = ['-'];
    (address=> {
      if (address) {
        address.forEach((data, item)=> {
          if (item === currentAddressItem) {
            defaultAddress = data;
          }
        });
        ((d, r, n)=> {
          if (d) {
            r.splice(0, 1);
            n.splice(0, 1);
            r.push(d.AddressCountry);
            r.push(d.AddressState);
            r.push(d.AddressCity);
            r.push(d.AddressStreet);
            n.push(d.Addressee);
            n.push(d.AddressPhone);
          }
        })(defaultAddress, receiver, receiverName);
      }
    })(address);
    (order=> {
      if (order && order.Project && order.Project) {
        order.Project.forEach(project=> {
          project.ItemList.forEach(item=> {
            total += Number(item.price);
          });
        });
      }
    })(order);
    return (
        <div id="total_box">
          <div className="total-pay-info-box clearfix mt20">
            <div className="total-pay-info">
              <ul className="black">
                <li>
                  <span className="fs18 ff-wr">应付总额：</span>
                  <span className="fs30 bold ml10 orange ff-arial">&yen;
                    <span id="total_price">{total.toFixed(2)}</span></span>
                </li>
                <li className="mt20">
                  <span className="bold">寄送至：</span>
                  <span id="receiver">{receiver.join(' ')}</span>
                </li>
                <li className="mt10">
                  <span className="bold">收货人：</span>
                  <span id="receiver_name">{receiverName.join(' ')}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="clearfix">
            <div className="pay-box fr">
              <a href="/account/cart/"
                 className="mr20">返回购物车</a>
              <button className="pay-btn fs18 ff-wr white"
                      id="submit">提交订单
              </button>
            </div>
          </div>
        </div>
    );
  }
}