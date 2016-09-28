/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/19 10:41
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Cash from './cash/Index';
import model from './cash/model';
import '../../less/pay/cash.less';
const Wrap=window.supervar.Wrap;
ReactDOM.render(
    <Wrap content={<Cash {...model}/>} />,
    document.getElementById('container')
);

