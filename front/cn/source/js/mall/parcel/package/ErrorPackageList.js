/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:46
 */
import React from 'react';
import Goods from './Goods';
import { PropTypes, goodsPropTypes } from '../shorthandValid';
/**
 * 异常包裹
 */
export default class ErrorPackageList extends React.Component {
  static propTypes = {
    ItemList: PropTypes.arrayOf(PropTypes.shape(goodsPropTypes).isRequired).isRequired
  };

  render() {
    const {ItemList}=this.props;
    return (
        <div className="order-list error-list">
          <span className="order-hd orange icon-tips ml10">
            <span className="icon">{''}</span>
            &nbsp;抱歉，以下商品还未开放您所在地区的寄送路线，我们正在努力中，敬请谅解 T_T
          </span>
          <ul className="order-body">
            {ItemList.map(goods=><Goods goods={goods}
                                        key={goods.ProductId}
                                        error={false} />)}
          </ul>
        </div>);
  }
}