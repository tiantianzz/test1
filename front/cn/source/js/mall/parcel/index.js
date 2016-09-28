/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:24
 */
import React from 'react';
import AddressList from './address/AddressList';
import PackageBoxWrap from './package/PackageBoxWrap';
import Total from './Total';
import { PropTypes, number, string } from './shorthandValid';
import Box from '../../../../react-plugin/box';
import 'whatwg-fetch';
import 'es6-promise';
export default class Parcel extends React.Component {
  static propTypes = {
    country: PropTypes.arrayOf(PropTypes.shape({
      id  : number.isRequired,
      name: string.isRequired
    }).isRequired).isRequired
  };

  constructor() {
    super();
    this.state = {
      box               : {},
      currentAddressItem: 0,
      addressFormValue  : {
        countryId       : '124491',
        stateId         : '',
        city            : '',
        zipCode         : '',
        fullAddress     : '',
        consignee       : '',
        contact         : '',
        isDefaultChecked: false,
        isDefault       : '1'
      },
      addressFormValid: {
        country    : true,
        state      : false,
        city       : false,
        fullAddress: false,
        zipCode    : false,
        consignee  : false,
        contact    : false
      }
    };
    this.modalHandler = this.modalHandler.bind(this);
    this.addressHandler = this.addressHandler.bind(this);
    this.orderHandler = this.orderHandler.bind(this);
    this.toggleCurrentAddress = this.toggleCurrentAddress.bind(this);
    this.updateAddressFormValue = this.updateAddressFormValue.bind(this);
    this.updateAddressFormValid=this.updateAddressFormValid.bind(this);
  }

  updateAddressFormValue(addressFormValue) {
    return this.setState({addressFormValue});
  }
  updateAddressFormValid(addressFormValid) {
    return this.setState({addressFormValid});
  }
  modalHandler(box) {
    return this.setState({box});
  }

  addressHandler(address) {
    return this.setState({address});
  }

  orderHandler(order) {
    return this.setState({order});
  }

  toggleCurrentAddress(currentAddressItem) {
    return this.setState({currentAddressItem});
  }
  updateDelivery(item,deliveryId){

  }
  componentDidMount() {
    fetch('./address.json')
        .then(res=> {
          if (res.status === 200) {
            return res.json();
          } else {
            throw Error('Fail get address');
          }
        })
        .then(json=> {
          if (json.Code === 'success') {
            let defaultAddressId = '';
            this.setState({
              address: json.ShippingAddressArray
            });
            json.ShippingAddressArray.forEach(address=> {
              if (address.IsDefault == 1) {
                defaultAddressId = address.AddressId;
              }
            });
            const orderUrl = `order_${defaultAddressId}`;
            fetch(`./${orderUrl}.json`)
                .then(res=> {
                  if (res.status === 200) {
                    return res.json();
                  }
                })
                .then(json=> {
                  if (json.Code === 'success') {
                    this.setState({
                      order: json
                    });
                  }
                })
                .catch(ex=> {
                  console.error(ex);//eslint-disable-line
                });
          }
        })
        .catch(ex=> {
          console.error(ex);//eslint-disable-line
        });

  }

  render() {
    const {country}=this.props;
    return (
        <div className="main pt20 pb50">
          <AddressList
              country={country}
              address={this.state.address}
              addressHandler={this.addressHandler}
              addressFormValue={this.state.addressFormValue}
              updateAddressFormValue={this.updateAddressFormValue}
              addressFormValid={this.state.addressFormValid}
              updateAddressFormValid={this.updateAddressFormValid}
              orderHandler={this.orderHandler}
              currentAddressItem={this.state.currentAddressItem}
              toggleCurrentAddress={this.toggleCurrentAddress}
              modalHandler={this.modalHandler}
          />
          <PackageBoxWrap order={this.state.order} />
          <Total
              address={this.state.address}
              currentAddressItem={this.state.currentAddressItem}
              order={this.state.order}
          />
          <Box {...this.state.box} />
        </div>
    );
  }
}

