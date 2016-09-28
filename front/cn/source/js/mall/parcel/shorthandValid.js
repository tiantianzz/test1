/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:18
 */
import React from 'react';
const PropTypes = React.PropTypes;
const number = PropTypes.number;
const string = PropTypes.string;
const addressPropTypes = {
  AddressId         : string.isRequired,
  AddressCountryCode: string.isRequired,
  AddressCountry    : string.isRequired,
  AddressState      : string,
  AddressCity       : string,
  AddressStreet     : string,
  PostCode          : string,
  Addressee         : string.isRequired,
  AddressPhone      : string.isRequired,
  IsDefault         : string,
  AddressCountryId  : string.isRequired,
  AddressStateId    : string.isRequired
};
const goodsPropTypes = {
  ProductId : number.isRequired,
  sku_id    : number.isRequired,
  num       : number.isRequired,
  weight    : number.isRequired,
  price     : number.isRequired,
  undelivery: PropTypes.arrayOf(PropTypes.number),
  Pic       : string.isRequired,
  Title     : string.isRequired,
  SubTitle  : string,
  Property  : string.isRequired
};
const deliveryPropTypes = {
  DeliveryName   : string.isRequired,
  Freight        : number.isRequired,
  DeliveryCycle  : string.isRequired,
  DiscountFreight: number.isRequired
};
const addressFormValue = {
  countryId       : string,
  stateId         : string,
  city            : string,
  zipCode         : string,
  fullAddress     : string,
  consignee       : string,
  contact         : string,
  isDefaultChecked: PropTypes.bool,
  isDefault       : string
};
const addressFormValid = {
  country    : PropTypes.bool,
  state      : PropTypes.bool,
  city       : PropTypes.bool,
  fullAddress: PropTypes.bool,
  zipCode    : PropTypes.bool,
  consignee  : PropTypes.bool,
  contact    : PropTypes.bool
};
export {
    addressPropTypes,
    goodsPropTypes,
    deliveryPropTypes,
    number,
    string,
    PropTypes,
    addressFormValue,
    addressFormValid
};