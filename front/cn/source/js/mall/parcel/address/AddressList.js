/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:23
 */
import React from 'react';
import { addressPropTypes, PropTypes, number, string, addressFormValue, addressFormValid } from '../shorthandValid';
import AddAddress from './AddAddress';
import MoreAddress from './MoreAddress';
import Address from './Address';
/**
 * 地址列表
 */
export default class AddressList extends React.Component {
  static propTypes = {
    address               : PropTypes.arrayOf(PropTypes.shape(addressPropTypes).isRequired),
    modalHandler          : PropTypes.func.isRequired,
    addressHandler        : PropTypes.func.isRequired,
    orderHandler          : PropTypes.func.isRequired,
    currentAddressItem    : number.isRequired,
    toggleCurrentAddress  : PropTypes.func.isRequired,
    country               : PropTypes.arrayOf(PropTypes.shape({
      id  : number.isRequired,
      name: string.isRequired
    }).isRequired).isRequired,
    addressFormValue      : PropTypes.shape(addressFormValue.isRequired).isRequired,
    updateAddressFormValue: PropTypes.func.isRequired,
    addressFormValid      : PropTypes.shape(addressFormValid.isRequired).isRequired,
    updateAddressFormValid: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      showSetSuccess: false
    };
    this.toggleDefaultAddress = this.toggleDefaultAddress.bind(this);
    this.toggleCurrentAddress = this.toggleCurrentAddress.bind(this);
  }

  toggleCurrentAddress(currentAddressItem, addressId) {
    fetch(`./order_${addressId}.json`)
        .then(res=> {
          if (res.status === 200) {
            return res.json();
          } else {
            throw Error('Fail get address');
          }
        })
        .then(json=> {
          if (json.Code === 'success') {
            this.props.orderHandler(json);
          }
        })
        .catch(ex=> {
          console.error(ex);//eslint-disable-line
        });
    this.props.toggleCurrentAddress(currentAddressItem);
  }

  toggleDefaultAddress(addressId) {
    const newAddress = [];
    /**
     * TODO:与服务器通信
     * /go/rest POST
     * {bix_method:address_default,biz_data:276150}
     */
    this.props.address.forEach(data=> {
      if (data.AddressId === addressId) {
        data.IsDefault = '1';
      } else {
        data.IsDefault = '0';
      }
      newAddress.push(data);
    });
    this.setState({
      showSetSuccess: true
    });
    setTimeout(()=> {
      this.setState({
        showSetSuccess: false
      });
    }, 1000);
    return this.props.addressHandler(newAddress);
  }

  render() {
    const address = this.props.address;
    const {country, modalHandler, addressFormValue, updateAddressFormValue, addressFormValid, updateAddressFormValid}=this.props;
    let moreAddress = '';
    if (address && address.length > 5) {
      moreAddress = <MoreAddress />;
    }

    return (
        <div className="address">
          <h3>确认收货地址</h3>
          <ul className="address-list">
            {address ? address.map(
                (data, index)=><Address
                    address={data}
                    itemKey={index}
                    currentAddressItem={this.props.currentAddressItem}
                    toggleDefaultAddress={this.toggleDefaultAddress}
                    toggleCurrentAddress={this.toggleCurrentAddress}
                    modalHandler={this.props.modalHandler}
                    key={data.AddressId}
                    showSetSuccess={this.state.showSetSuccess}
                    country={country}
                    addressFormValue={addressFormValue}
                    updateAddressFormValue={updateAddressFormValue}
                    addressFormValid={addressFormValid}
                    updateAddressFormValid={updateAddressFormValid}
                />
            ) : <li>请先填写收货地址</li>}
          </ul>
          {moreAddress}
          <AddAddress
              country={country}
              modalHandler={modalHandler}
              addressFormValue={addressFormValue}
              updateAddressFormValue={updateAddressFormValue}
              addressFormValid={addressFormValid}
              updateAddressFormValid={updateAddressFormValid}
          />
        </div>
    );
  }
}