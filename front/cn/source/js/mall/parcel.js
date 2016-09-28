/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/25 14:55
 */
import React from 'react';
import ReactDOM from 'react-dom';
import model from './parcel/modal';
import Parcel from './parcel/index';
import '../../less/mall/parcel.less';
const Wrap=window.supervar.Wrap;
ReactDOM.render(
    <Wrap content={<Parcel {...model} />} />,
    document.getElementById('J_Container')
);