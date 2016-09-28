/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 19:48
 */
import React from 'react';
import OrderTotal from './OrderTotal';
import Box from '../../../../react-plugin/box';
import CommonStep from './CommonStep';
import CommonStatus from './CommonStatus';
export default class Cash extends React.Component {
  constructor() {
    super();
    /*eslint-disable*/
    this.state = {
      orderDisplay : false,
      currentPay   : 'paypal',
      currentBank  : 'CMB',
      orderTimeLeft: 0,
      order        : {
        "TotalMoney"        : 0,
        "NeedPayDollarMoney": 0,
        "NeedPayMoney"      : 0,
        "BalanceMoney"      : 0,
        "OrderTime"         : 0,
        "PackageLists"      : [],
        "ThirdPayForPC"     : {
          "Rate"       : 1.0,
          "RateWastage": 1.0,
          "Wastage"    : 0.1
        }
      },
      box          : {}
    };
    /*eslint-enable*/
    this.util = window.supervar.util;
  }

  getOrder = ()=> {
    const isDg = this.util.getQueryString('isDg');
    const key = this.util.getQueryString('key');
    fetch(`${window.supervar.apiURL}payment/ajax/rest?biz_method=buy_order_trade_pay&biz_data=${key}`
      , {credentials: 'include'})
      .then(res=> {
        if (res.status === 200) {
          return res.json();
        } else {
          throw Error(`Fail Net: ${res.state}`);
        }
      })
      .then(json=> {
        if (json.state === 0) {
          const orderTimeLeft = ((Number(json.data.OrderTime) + (72 * 3600) - Date.parse(new Date()) / 1000) / 60).toFixed(0);
          this.updateOrderTimeLeft(Number(orderTimeLeft));
          (()=> {
            if (orderTimeLeft < 0) return;
            setTimeout(function timer() {
              let orderTimeLeft = this.state.orderTimeLeft;
              if (orderTimeLeft > 0) {
                this.updateOrderTimeLeft(--orderTimeLeft);
                setTimeout(timer.bind(this), 60000);
              }
            }.bind(this), 60000);
          })();
          this.setState({
            order: json.data
          });
        } else {
          throw Error(`Fail Data: ${json.state}`);
        }
      })
      .catch(error=> {
        console.error(error);//eslint-disable-line
      });
  };
  
  updateOrderTimeLeft = orderTimeLeft=> this.setState({orderTimeLeft});
  updateBox = box=>this.setState({box});
  toggleDetail = orderDisplay=>this.setState({orderDisplay});
  togglePay = currentPay=> this.setState({currentPay});
  toggleBank = currentBank =>this.setState({currentBank});

  componentDidMount() {
    this.getOrder();

  }

  render() {
    const state = this.state;
    return (
      <div className="main mb60">
        {/*<CommonStep />*/}
        {/*<CommonStatus />*/}
        <OrderTotal
          box={this.state.box}
          updateBox={this.updateBox}
          toggleDetail={this.toggleDetail}
          orderDisplay={state.orderDisplay}
          order={this.state.order}
          togglePay={this.togglePay}
          currentPay={state.currentPay}
          toggleBank={this.toggleBank}
          currentBank={state.currentBank}
          orderTimeLeft={this.state.orderTimeLeft}
          {...this.props}
        />
        <Box {...this.state.box} />
      </div>
    );
  }
}