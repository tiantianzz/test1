/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 17:57
 */
import React, { PropTypes, Component } from 'react';
import PayWays from './PayWays';
import valid from './valid';
import PayPalForm from './form/PayPalForm';
import AlipayForm from './form/AlipayForm';
const number = PropTypes.number;
const string = PropTypes.string;
const NeedPay = props=> {
  let needPay = '';
  let actualPay = '';
  const margin = {martinTop: 2};
  const height = {height: 21};
  if (props.currentPay === 'paypal' || props.currentPay === 'nationalpay') {
    needPay = (<div className="text-pay-info ff-st fs14 clear-before-after mb10">
      <div style={margin}
           className="money-title">Amount still need to pay:&nbsp;</div>
      <div style={height}>
        <i className="ff-wr fsn">&yen;</i>
        <strong className="ff-wr fs16">{props.order.NeedPayMoney}</strong>
      </div>
    </div>);
    actualPay = (
      <div className="ff-st fs14 text-pay-info">
        <div className="money-title top-fixed">Actual amount payable:&nbsp;</div>
        <div>
          <span className="money-style">
          <i className="ff-wr fsn">$</i>
          <strong className="ff-wr bold">{props.order.NeedPayDollarMoney}</strong>
         </span>
        </div>
      </div>
    );
  } else {
    needPay = '';
    actualPay = (
      <div className="ff-st fs14 text-pay-info">
        <div className="money-title top-fixed">Actual amount payable:&nbsp;</div>
        <div>
          <span className="money-style">
          <i className="ff-wr fsn">&yen;</i>
          <strong className="ff-wr bold">{props.order.NeedPayMoney}</strong>
         </span>
        </div>
      </div>
    );
  }
  return (
    <div className="need-pay-info tc clear-before-after mb40">
      <div className="fs14 text-pay-info clear-before-after mb5">
        <div style={margin}
             className="money-title">Credit:&nbsp;</div>
        <div style={height}>
          <i className="ff-wr fsn">&yen;</i>
          <span className="remain fs16 ff-wr">{props.order.BalanceMoney}</span>
        </div>
      </div>
      {needPay}
      {actualPay}
    </div>
  );
};
const PayPal = props=>(
  <div className={props.currentPay === 'paypal' ? 'pay-info tc' : 'pay-info tc hide'}>
    <p className="tips-info tips-info-orange ff-st">
      Service charge for foreign currency top up: PayPal is liable to charge
      each foreign currency top up: {props.order.ThirdPayForPC.RateWastage}%+US${props.order.ThirdPayForPC.RateWastage}
      <br />Current exchange rate with SuperBuy: 1:{props.order.ThirdPayForPC.Rate}
    </p>
    <p className="tips-info tips-info-grey ff-st">
      PayPal is the biggest worldwide online payment platform, where users
      could pay their orders by using international credit cards or any bank
      cards.
      <br /> US dollar is used as the only common currency, top up process
      might take up to 60 minutes.
      <br />Once the credit has added to your account, you can then continue to
      complete the payment for items or parcels delivery.
    </p>
  </div>
);

const NationalPay = props=>(
  <div className={props.currentPay === 'nationalpay' ? 'pay-info tc' : 'pay-info  tc hide'}>
    <p className="tips-info tips-info-orange ff-st">
      Service charge for foreign currency top up: PayPal is liable to charge
      each foreign currency top up: {props.order.ThirdPayForPC.RateWastage}%+US${props.order.ThirdPayForPC.RateWastage}
      <br />Current exchange rate with SuperBuy: 1:{props.order.ThirdPayForPC.Rate}
    </p>
    <p className="tips-info tips-info-grey ff-st">
      PayPal is the biggest worldwide online payment platform, where users
      could pay their orders by using international credit cards or any bank
      cards.
      <br /> US dollar is used as the only common currency, top up process
      might take up to 60 minutes.
      <br />Once the credit has added to your account, you can then continue to
      complete the payment for items or parcels delivery.
    </p>
  </div>
);

const Weixin = props=>(
  <div className={props.currentPay === 'weixin' ? 'pay-info tc hide' : 'pay-info tc hide'}>
    <p className="tips-info tips-info-grey ff-st">
      Scan QR Code to pay. Fast and safe. Pay immediately. No service charge.
      <br /> Available for mostly Chinese debit / credit cards.
    </p>
  </div>
);

const Alipay = props=>(
  <div className={props.currentPay === 'alipay' ? 'pay-info tc' : 'pay-info tc hide'}>
    <p className="tips-info tips-info-grey ff-st">
      Alipay (China) is the biggest Chinese third-party online payment
      platform owned by Alibaba Group.
      <br /> RMB is used as the only common currency, top up process might take
      up to 60 minutes. Once the credit has added to your account,
      <br />you can then continue to complete the payment for items or parcels delivery.
    </p>
  </div>
);
NeedPay.propTypes = PayPal.propTypes = NationalPay.propTypes = {
  currentPay: PropTypes.oneOf(valid.currentPay).isRequired,
  order     : PropTypes.shape({
    TotalMoney        : number.isRequired,
    NeedPayDollarMoney: number.isRequired,
    NeedPayMoney      : number.isRequired,
    orderTime         : number,
    BalanceMoney      : number.isRequired,
    PackageLists      : PropTypes.arrayOf(PropTypes.shape({
      PackageNo   : string,
      ItemPrice   : number,
      PackagePrice: number,
      TotalPrice  : number
    })),
    ThirdPayForPC     : PropTypes.shape({
      Rate       : number,
      RateWastage: number,
      Wastage    : number
    })
  }).isRequired
};
Weixin.propTypes = Alipay.propTypes = {
  currentPay: string.isRequired
};
const Banks = props=>(
  <div className={props.currentPay === 'card' ? 'pay-info' : 'pay-info tc hide'}>
    <ul className="pay-stylelist c">
      {props.banks.map(card=>
        <li className={props.currentBank === card.value ? 'bank select' : 'bank'}
            key={`card-${card.id}`}
            onClick={()=>props.toggleBank(card.value)}
            title={card.title}>
          <label>
            <input type="radio"
                   value={card.value}
                   name="type"
                   checked={props.currentBank === card.value}
                   onChange={e=> {
                     props.toggleBank(card.value);
                     e.stopPropagation();
                   }}
                   className="radio" />
          </label>
        </li>
      )}
    </ul>
  </div>
);
Banks.propTypes = {
  currentPay : string.isRequired,
  banks      : PropTypes.arrayOf(PropTypes.shape({
    id   : PropTypes.number.isRequired,
    title: string.isRequired,
    value: string.isRequired
  }).isRequired).isRequired,
  toggleBank : PropTypes.func.isRequired,
  currentBank: PropTypes.oneOf(valid.currentBank).isRequired
};
class PayForm extends React.Component {
  static propTypes = {
    togglePay    : PropTypes.func.isRequired,
    currentPay   : PropTypes.oneOf(valid.currentPay).isRequired,
    payWays      : PropTypes.arrayOf(PropTypes.shape({
      id     : PropTypes.number.isRequired,
      icon   : string.isRequired,
      iconAlt: string.isRequired,
      name   : string.isRequired,
      way    : PropTypes.oneOf(valid.way).isRequired
    }).isRequired).isRequired,
    banks        : PropTypes.arrayOf(PropTypes.shape({
      id   : PropTypes.number.isRequired,
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
      orderTime         : number,
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

  constructor() {
    super();
    this.state = {
      paypalForm: '',
      alipayForm: ''
    };
  }

  showPayPrompt = ()=> {
    /**
     * 关闭支付信息提示
     */
    const closeHandler = ()=>this.props.updateBox({display: false});
    /**
     * 查询支付结果,pay/payTransit.html
     */
    const okHandler = ()=> {
      location.href = `/views/pay/payTransit.html${location.search}`;
    };
    /**
     * 跳转支付帮助,pay/payHelp.html
     */
    const cancelHandler = ()=> {
      location.href = `/en/page/help/#p1_23`;
    };
    const box = {
      display     : true,
      title       : 'Payment Information',
      okButton    : true,
      okText      : 'Payment completed',
      okHandler,
      cancelButton: true,
      cancelText  : 'Problems in completing payment',
      cancelHandler,
      closeButton : true,
      closeHandler,
      messageType : 'ok',
      width       : 680,
      content     : (
        <div className="content-text">
          <h3>Please complete your payment in the new window</h3>
          <div>
            <p>Please do not close this window before completing the payment</p>
            <p>Please choose the following options based on your payment status</p>
          </div>
        </div>
      )
    };
    this.props.updateBox(box);
  };

  goPay = ()=> {
    const {orderTimeLeft, currentPay, currentBank}=this.props;
    /**
     * PayPal 统一处理函数
     * @param landingPage {'Login'|'Billing'} PayPal 支付或者 PayPal 国际支付
     */
    const goPayPal = landingPage=> {
      fetch(`${window.supervar.apiURL}payment/paypal/pay?landing_page=${landingPage}`
        , {credentials: 'same-origin'})
        .then(res=> {
          if (res.status === 200) {
            return res.json();
          } else {
            throw Error(`Response Status: ${res.state}`);
          }
        })
        .then(json=> {
          if (json.state === 0) {
            this.setState({
              paypalForm: <PayPalForm {...json.data} timestamp={Date.now()} />
            });
          } else {
            throw Error(`Data State: ${json.state}`);
          }
        })
        .catch(error=> {
          console.error(error);//eslint-disable-line
        });
    };
    /**
     * Alipay 统一处理函数
     * @param type {undefined|valid.currentBank} 银行代号
     */
    const goAlipay = type=> {
      const apiPath = type ? `payment/alipay/pay?type=${type}` : 'payment/alipay/pay';
      fetch(`${window.supervar.apiURL}${apiPath}`, {credentials: 'same-origin'})
        .then(res=> {
          if (res.status === 200) {
            return res.json();
          } else {
            throw Error(`Response Status: ${res.state}`);

          }
        })
        .then(json=> {
          if (json.state === 0) {
            this.setState({
              alipayForm: <AlipayForm {...json.data} timestamp={Date.now()} />
            });
          } else {
            throw Error(`Data State: ${json.state}`);
          }
        })
        .catch(error=> {
          console.error(error);//eslint-disable-line
        });
    };

    /**
     * 判断订单是否过期
     */
    if (!this.props.order.PackageLists.length) return;
    if (orderTimeLeft <= 0) {
      const closeHandler = ()=>this.props.updateBox({display: false});
      const box = {
        title       : 'Notes',
        display     : true,
        okButton    : false,
        cancelButton: false,
        width       : 550,
        closeHandler,
        content     : 'We are sorry to tell you that your order is expired, please re-submit.'
      };
      this.props.updateBox(box);
      return;
    }

    this.showPayPrompt();

    switch (currentPay) {
      case 'paypal': {
        goPayPal('Login');
        break;
      }
      case 'nationalpay': {
        goPayPal('Billing');
        break;
      }
      case 'weixin': {
        window.open('/payment/wechat/pay');
        break;
      }
      case 'alipay': {
        goAlipay();
        break;
      }
      case 'card': {
        goAlipay(currentBank);
        break;
      }
    }


  };

  render() {
    const {orderTimeLeft, currentPay, banks, currentBank, toggleBank, order}=this.props;
    const btnClass = order.PackageLists.length > 0
      ? 'go-pay-btn tdec-none fs14 ff-st bold'
      : 'go-pay-btn disabled tdec-none fs14 ff-st bold';
    return (
      <div>
        <NeedPay
          currentPay={currentPay}
          order={order}
        />
        <PayPal
          currentPay={currentPay}
          order={order}
        />
        <NationalPay
          currentPay={currentPay}
          order={order}
        />
        <Weixin currentPay={currentPay} />
        <Alipay currentPay={currentPay} />
        <PayWays {...this.props} />
        <Banks
          currentBank={currentBank}
          toggleBank={toggleBank}
          currentPay={currentPay}
          banks={banks}
        />
        {this.state.paypalForm}
        {this.state.alipayForm}
        <div className="go-pay mt35 tc">
          <a href="javascript:void(0)"
             onClick={this.goPay}
             className={btnClass}>Pay now</a>
        </div>
      </div>
    );
  }
}

export default PayForm;