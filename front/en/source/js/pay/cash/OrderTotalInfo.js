/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 17:31
 */
import React, { PropTypes, Component } from 'react';
const number = PropTypes.number;
const string = PropTypes.string;
class Timer extends Component {
  static propTypes = {
    order        : PropTypes.shape({
      TotalMoney        : number,
      NeedPayDollarMoney: number,
      OrderTime         : number,
      NeedPayMoney      : number,
      BalanceMoney      : number,
      PackageLists      : PropTypes.arrayOf(PropTypes.shape({
        PackageNo   : string,
        ItemPrice   : number,
        PackagePrice: number,
        TotalPrice  : number
      })),
      ThirdPayForPc     : PropTypes.shape({
        Rate       : number,
        RateWastage: number,
        Wastage    : number
      })
    }).isRequired,
    orderTimeLeft: number
  };

  render() {
    const timer = this.props.orderTimeLeft;
    const hour = timer > 0
      ? Math.floor(timer / 60) > 10
      ? Math.floor(timer / 60)
      : '0' + Math.floor(timer / 60)
      : 0;
    const minute = timer > 0
      ? (timer % 60) > 10
      ? timer % 60
      : '0' + timer % 60
      : 0;
    return (
      <p className="timer-warning txt-mt">
        Please complete the payment in
        <span className="timer"> {hour} {hour > 10 ? 'hours' : 'hour'} {minute} {minute > 10 ? 'minutes' : 'minute'}</span>
        , otherwise the order will be cancelled automatically.
      </p>
    );

  }
}
export default class OrderTotalInfo extends Component {
  static propTypes = {
    toggleDetail : PropTypes.func.isRequired,
    orderDisplay : PropTypes.bool.isRequired,
    orderTimeLeft: number,
    order        : PropTypes.shape({
      TotalMoney        : number,
      NeedPayDollarMoney: number,
      OrderTime         : number,
      NeedPayMoney      : number,
      BalanceMoney      : number,
      PackageLists      : PropTypes.arrayOf(PropTypes.shape({
        PackageNo   : string,
        ItemPrice   : number,
        PackagePrice: number,
        TotalPrice  : number
      })),
      ThirdPayForPc     : PropTypes.shape({
        Rate       : number,
        RateWastage: number,
        Wastage    : number
      })
    }).isRequired
  };

  render() {
    const isFromCart = document.referrer.search('cart') > 0;
    const isDg = window.supervar.util.getQueryString('isDg');
    const {order, toggleDetail, orderDisplay, orderTimeLeft}=this.props;
    return (
      <div className="order-total-info tc c fs14">
        <p className="order-nums txt-mt">

          {
            order.PackageLists.length
              ? <span className="pkg-success-info">
              {
                orderTimeLeft > 0
                  ? isFromCart ? 'Order Submitted! ' : ''
                  : 'Order Expired! '
              }
              </span>
              : ''
          }
          Total<span className="package-num"> {order.PackageLists.length} </span>Orders.
        </p>
        {
          isDg == 1 && order.OrderTime && orderTimeLeft > 0
            ? <Timer order={order}
                     orderTimeLeft={orderTimeLeft} />
            : ''
        }
        <div className="order-info-price mt30 clear">
          <div className="money-title top-fixed">Total amount payable:&nbsp;&nbsp;</div>
          <div className="order-price">
          <span className="money-style">
            <i className="ff-wr fsn">&yen;</i>
            <strong className="ff-wr bold">{order.TotalMoney}</strong>
          </span>
            <div className="order-info fr"
                 onClick={()=> {
                   if (order.PackageLists.length)toggleDetail(!orderDisplay);
                 }}>
              Order details
              {/*<i className="order-info-icon open">{''}</i>*/}
              <i className={orderDisplay ? 'order-info-icon open' : 'order-info-icon'}>{''}</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}