/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 18:12
 */
import React, { PropTypes, Component } from 'react';
import OrderTotalInfo from './OrderTotalInfo';
import OrderInfoDetail from './OrderInfoDetail';
import BorderPayModule from './BorderPayMoudle';
import PayForm from './PayForm';
import valid from './valid';

const number = PropTypes.number;
const string = PropTypes.string;
export default class OrderTotal extends Component {
  static propTypes = {
    toggleDetail : PropTypes.func.isRequired,
    orderDisplay : PropTypes.bool.isRequired,
    togglePay    : PropTypes.func.isRequired,
    currentPay   : PropTypes.oneOf(valid.currentPay),
    payWays      : PropTypes.arrayOf(PropTypes.shape({
      id     : number.isRequired,
      icon   : string.isRequired,
      iconAlt: string.isRequired,
      name   : string.isRequired,
      way    : PropTypes.oneOf(valid.way).isRequired
    }).isRequired).isRequired,
    banks        : PropTypes.arrayOf(PropTypes.shape({
      id   : number.isRequired,
      title: string.isRequired,
      value: string.isRequired
    }).isRequired).isRequired,
    toggleBank   : PropTypes.func.isRequired,
    currentBank  : PropTypes.oneOf(valid.currentBank).isRequired,
    orderTimeLeft: number,
    order        : PropTypes.shape({

      TotalMoney        : number,
      NeedPayDollarMoney: number,
      NeedPayMoney      : number,
      OrderTime         : number,
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
    updateBox    : PropTypes.func
  };

  render() {
    const props = this.props;
    return (
      <div className="order-total">
        <OrderTotalInfo
          toggleDetail={props.toggleDetail}
          orderDisplay={props.orderDisplay}
          order={props.order}
          timerRun={props.timerRun}
          orderTimeLeft={props.orderTimeLeft}
        />
        <OrderInfoDetail
          packageLists={props.order.PackageLists}
          orderDisplay={props.orderDisplay}
        />
        {/*<BorderPayModule />*/}
        <PayForm
          {...props}
        />
      </div>
    );
  }
}