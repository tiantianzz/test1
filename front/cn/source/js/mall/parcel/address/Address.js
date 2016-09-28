/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:24
 */
import React from 'react';
import EditAddress from './EditAddress';
import { PropTypes, addressPropTypes, number, addressFormValue, addressFormValid } from '../shorthandValid';
const update = React.addons.update;
/**
 * 地址详细
 */
export default class Address extends React.Component {
  static propTypes = {
    address               : PropTypes.shape(addressPropTypes).isRequired,
    itemKey               : number.isRequired,
    modalHandler          : PropTypes.func.isRequired,
    toggleDefaultAddress  : PropTypes.func.isRequired,
    currentAddressItem    : number.isRequired,
    toggleCurrentAddress  : PropTypes.func.isRequired,
    showSetSuccess        : PropTypes.bool.isRequired,
    country               : PropTypes.arrayOf(PropTypes.shape({
      id  : PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    addressFormValue      : PropTypes.shape(addressFormValue.isRequired).isRequired,
    updateAddressFormValue: PropTypes.func.isRequired,
    addressFormValid      : PropTypes.shape(addressFormValid.isRequired).isRequired,
    updateAddressFormValid: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.okHandler = this.okHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
    this.state = {
      box        : {
        title        : '温馨提示',
        content      : '更换地址后，您需要重新确认订单信息哦！',
        display      : true,
        okHandler    : this.okHandler,
        cancelHandler: this.cancelHandler

      },
      addressId  : '',
      currentItem: ''
    };
  }

  okHandler() {
    this.props.toggleCurrentAddress(this.state.currentItem, this.state.addressId);
    this.cancelHandler();
  }

  cancelHandler() {
    const newState = update(this.state, {
      box: {display: {$set: false}}
    });
    this.props.modalHandler(newState);
  }

  clickHandler(currentItem, addressId) {
    this.setState({currentItem, addressId});
    this.props.modalHandler(this.state.box);
  }

  render() {
    const address = this.props.address;
    const props = this.props;
    const {
        country,
        modalHandler,
        addressFormValue,
        updateAddressFormValue,
        addressFormValid,
        updateAddressFormValid
    }=this.props;
    let setSuccessTip = '';
    if (address.IsDefault == 1) {
      setSuccessTip = (<span className={props.showSetSuccess
          ? 'msg orange js-msg ml10'
          : 'msg orange js-msg ml10 hide'}>设置成功！</span>);
    }
    return (
        <li onClick={props.currentAddressItem === props.itemKey
            ? ()=>undefined
            : ()=>this.clickHandler(props.itemKey, address.AddressId)}
            className={props.itemKey > 4
                ? 'address-item clearfix hide'
                : (props.currentAddressItem === props.itemKey
                ? (address.IsDefault == 1
                ? 'address-item clearfix selected default'
                : 'address-item clearfix selected')
                : address.IsDefault == 1
                ? 'address-item clearfix default'
                : 'address-item clearfix')}>
          <i className="J_Marker marker iconfont icon-dituzuobiao">{''}</i>
          <span className="marker-tip">寄送至</span>
          <div className="address-info">
            <EditAddress
                address={props.address}
                modalHandler={modalHandler}
                country={country}
                addressFormValue={addressFormValue}
                updateAddressFormValue={updateAddressFormValue}
                addressFormValid={addressFormValid}
                updateAddressFormValid={updateAddressFormValid}
            />
            <input name="address"
                   className="js-MakePoint"
                   value={address.AddressId}
                   id={`addrId_${address.AddressId}`}
                   onChange={()=>undefined}
                   checked={props.currentAddressItem === props.itemKey}
                   type="radio" />
            <label htmlFor={`addrId_${address.AddressId}`}
                   className="user-address">
              {address.AddressCountry}
              &nbsp;{address.AddressState}
              &nbsp;{address.AddressCity}
              &nbsp;{address.AddressStreet}
              &nbsp;({address.Addressee}&nbsp;收)
              &nbsp;<em>{address.AddressPhone}</em>
            </label>
            <em className={address.IsDefault == 1
                ? 'tip js-tips'
                : 'tip js-tips hide'}>默认地址</em>
            {setSuccessTip}
            <a className="set-default js-set-default"
               onClick={e=> {
                 props.toggleDefaultAddress(address.AddressId);
                 e.stopPropagation();
               }}
               href="javascript:void(0);">设置为默认收货地址</a></div>
        </li>
    );
  }
}