/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:44
 */
import React from 'react';
import {PropTypes,goodsPropTypes} from '../shorthandValid';
/**
 * 包裹的商品
 */
const Goods = props=> {
  const {error, ProductId, Pic, Title, Property, num, price}=props.goods;
  let baseInfo = (
      <a href={`/goods/${ProductId}`}
         target="_blank">
        <img src="http://static.daigou.com/i/images/mall/mall-icon.jpg"
             alt="超级买" />
        &nbsp;{Title}
      </a>
  );
  if (props.error) {
    baseInfo = Title;
  }

  return (
      <li>
        <div className="th item-info">
          <div className="td-pic">
            <a href={error ? '#' : `/goods/${ProductId}`}
               target="_blank">
              <img src={Pic}
                   alt={Title} />
            </a>
          </div>
          <div className="td-info">
            <div className="base-info">
              {baseInfo}
              <div className="spec">{Property}</div>
            </div>
          </div>
        </div>
        <div className="th item-num tc">{num}</div>
        {/*<div className="th item-weight tc">{weight.toFixed(2)}</div>*/}
        <div className="th item-price tc">
          <span className="orange">{(price * num).toFixed(2)}</span>
        </div>
      </li>
  );
};
Goods.propTypes = {
  goods: PropTypes.shape(goodsPropTypes).isRequired,
  error: PropTypes.bool.isRequired
};
export default Goods;