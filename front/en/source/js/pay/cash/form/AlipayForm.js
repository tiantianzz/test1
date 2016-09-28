/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/12 17:53
 */
import React, { PropTypes } from 'react';
const string = PropTypes.string;
export default class AlipayForm extends React.Component {
  static propTypes = {
    _input_charset   : string.isRequired,
    anti_phishing_key: PropTypes.number.isRequired,
    body             : string.isRequired,
    notify_url       : string.isRequired,
    out_trade_no     : string.isRequired,
    partner          : string.isRequired,
    payment_type     : string.isRequired,
    return_url       : string.isRequired,
    seller_email     : string.isRequired,
    service          : string.isRequired,
    subject          : string.isRequired,
    total_fee        : PropTypes.number.isRequired,
    sign             : string.isRequired,
    sign_type        : string.isRequired,
    ali_host         : string,
    defaultbank      : string,
    paymethod        : string,
    submit           : string
  };

  componentDidUpdate() {
    this.refs['form'].submit();
  }

  componentDidMount() {
    this.refs['form'].submit();
  }

  render() {
    const {
      _input_charset,
      anti_phishing_key,
      body,
      notify_url,
      out_trade_no,
      partner,
      payment_type,
      return_url,
      seller_email,
      service,
      subject,
      total_fee,
      sign,
      sign_type,
      ali_host,
      defaultbank,
      paymethod
    }=this.props;
    const bankInfo = paymethod === 'bankPay'
      ? (<div>
      <input type="hidden"
             name="defaultbank"
             value={defaultbank} />
      <input type="hidden"
             name="paymethod"
             value={paymethod} />
    </div>)
      : '';
    return (
      <form action={ali_host}
            ref="form"
            style={{display: 'none'}}
            target="_blank"
            method="get">
        <input type="hidden"
               name="_input_charset"
               value={_input_charset} />
        <input type="hidden"
               name="anti_phishing_key"
               value={anti_phishing_key} />
        <input type="hidden"
               name="body"
               value={body} />
        <input type="hidden"
               name="notify_url"
               value={notify_url} />
        <input type="hidden"
               name="out_trade_no"
               value={out_trade_no} />
        <input type="hidden"
               name="partner"
               value={partner} />
        <input type="hidden"
               name={payment_type}
               value="1" />
        <input type="hidden"
               name="return_url"
               value={return_url} />
        <input type="hidden"
               name="seller_email"
               value={seller_email} />
        <input type="hidden"
               name="service"
               value={service} />
        <input type="hidden"
               name="subject"
               value={subject} />
        <input type="hidden"
               name="total_fee"
               value={total_fee} />
        <input type="hidden"
               name="sign"
               value={sign} />
        <input type="hidden"
               name="sign_type"
               value={sign_type} />
        {bankInfo}
      </form>
    );
  }
}