/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:23
 */
import React from 'react';
import AddressForm from './AddressForm';
import { PropTypes, addressFormValue, addressFormValid } from '../shorthandValid';
const update = React.addons.update;
/**
 * 使用新地址
 */
export default class AddAddress extends React.Component {
  static propTypes = {
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
        title        : '添加收货地址',
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
    //TODO：ajax 提交
  }

  cancelHandler() {
    const newState = update(this.state, {
      box: {display: {$set: false}}
    });
    this.props.modalHandler(newState);
  }


  componentWillMount() {
    const {updateAddressFormValue, updateAddressFormValid, country}=this.props;
    /*设置表单初始状态开始*/
    const addressFormValue = {
      countryId       : '124491',
      stateId         : '',
      city            : '',
      zipCode         : '',
      fullAddress     : '',
      consignee       : '',
      contact         : '',
      isDefaultChecked: false,
      isDefault       : '1'
    };
    const addressFormValid = {
      country    : true,
      state      : false,
      city       : false,
      fullAddress: false,
      zipCode    : false,
      consignee  : false,
      contact    : false
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

  componentDidUpdate() {

  }

  render() {
    return (
        <div className="mt10">
          <a href="javascript:void(0);"
             onClick={this.clickHandler}
             className="new edit js-addnew">使用新地址</a>
        </div>
    );
  }
}