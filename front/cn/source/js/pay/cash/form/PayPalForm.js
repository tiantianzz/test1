/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/12 11:02
 */
import React, { PropTypes } from 'react';
const string = PropTypes.string;
const number = PropTypes.number;
export default class PayPalForm extends React.Component {
  static propTypes = {
    url            : string.isRequired,
    notifyUrl      : string.isRequired,
    returnUrl      : string.isRequired,
    invoice        : string.isRequired,
    business       : string.isRequired,
    userId         : number.isRequired,
    amount         : number.isRequired,
    landingPage    : PropTypes.oneOf(['Login', 'Billing']),
    addressCountry : string,
    addressStreet  : string,
    addressCIty    : string,
    addressState   : string,
    addressZip     : string,
    addressOverride: number,
    submit         : string
  };

  componentDidUpdate(prevProps) {
    this.refs['form'].submit();
  }

  componentDidMount() {
    this.refs['form'].submit();
  }

  render() {
    const {
      url,
      notifyUrl,
      returnUrl,
      invoice,
      business,
      userId,
      amount,
      landingPage,
      addressCountry,
      addressStreet,
      addressCIty,
      addressState,
      addressZip,
      addressOverride
    }=this.props;
    const address = addressCountry
      ? (<div>
      <input type="hidden"
             value={addressCountry} />
      <input type="hidden"
             value={addressStreet} />
      <input type="hidden"
             value={addressCIty} />
      <input type="hidden"
             value={addressState} />
      <input type="hidden"
             value={addressZip} />
      <input type="hidden"
             value={addressOverride} />
    </div>)
      : '';
    return (
      <form ref="form"
            method="post"
            target="_blank"
            style={{display: 'none'}}
            action={url}>
        <div>
          <input type="hidden"
                 name="cmd"
                 value="_xclick" />
          <input type="hidden"
                 name="notify_url"
                 value={notifyUrl} />
          <input type="hidden"
                 name="return"
                 value={returnUrl} />
          <input type="hidden"
                 name="business"
                 value={business} />
          <input type="hidden"
                 name="currency_code"
                 value="USD" />
          <input type="hidden"
                 name="item_number"
                 value={invoice} />
          <input type="hidden"
                 name="item_name"
                 value="Superbuy Product" />
          <input type="hidden"
                 name="custom"
                 value={userId} />
          <input type="hidden"
                 name="rm"
                 value="2" />
          <input type="hidden"
                 name="landing_page"
                 value={landingPage} />
          <input type="hidden"
                 name="charset"
                 value="utf-8" />
          <input type="hidden"
                 name="amount"
                 value={amount} />
          <input type="hidden"
                 name="invoice"
                 value={invoice} />
          <input type="hidden"
                 name="no_shipping"
                 value="1" />
          {address}
          />
        </div>
      </form>
    );
  }
}
