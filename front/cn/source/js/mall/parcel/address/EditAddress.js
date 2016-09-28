/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/8 10:04
 */
import React from 'react';
import AddressForm from './AddressForm';
import { PropTypes, addressPropTypes, addressFormValue, addressFormValid } from '../shorthandValid';
const update = React.addons.update;
export default class EditAddress extends React.Component {
  static propTypes = {
    address               : PropTypes.shape(addressPropTypes).isRequired,
    modalHandler          : PropTypes.func.isRequired,
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
      box: {
        title        : '修改地址',
        content      : '',
        display      : true,
        width        : 650,
        type         : 'form',
        okText       : '保存',
        cancelText   : '取消',
        okHandler    : this.okHandler,
        cancelHandler: this.cancelHandler
      }
    };
  }

  clickHandler() {
    this.props.modalHandler(this.state.box);
  }

  okHandler() {
    //TODO：ajax submit
  }

  cancelHandler() {
    const newState = update(this.state, {
      box: {display: {$set: false}}
    });
    this.props.modalHandler(newState);
  }

  componentWillMount() {
    const {updateAddressFormValue, updateAddressFormValid, country, address}=this.props;
    const {AddressCountryId, AddressStateId, AddressCity, PostCode, AddressStreet, Addressee, AddressPhone, IsDefault}=address;
    /*设置表单初始状态开始*/
    const addressFormValue = {
      countryId       : AddressCountryId,
      stateId         : AddressStateId,
      city            : AddressCity,
      zipCode         : PostCode,
      fullAddress     : AddressStreet,
      consignee       : Addressee,
      contact         : AddressPhone,
      isDefaultChecked: IsDefault == 1,
      isDefault       : IsDefault
    };
    const addressFormValid = {
      country    : true,
      state      : true,
      city       : true,
      fullAddress: true,
      zipCode    : true,
      consignee  : true,
      contact    : true
    };
    /*设置表单初始状态结束*/
    updateAddressFormValue(addressFormValue);
    updateAddressFormValid(addressFormValid);
    const content = (<AddressForm
        addressFormValue={addressFormValue}
        updateAddressFormValue={updateAddressFormValue}
        addressFormValid={addressFormValid}
        updateAddressFormValid={updateAddressFormValid}
        country={country}
    />);
    const box = update(this.state.box, {
      content: {$set: content}
    });
    this.setState({
      box
    });
  }

  render() {
    return (
        <a href="javascript:void(0);"
           onClick={this.clickHandler}
           className="js-modify modify">修改本地址</a>
    );
  }
}