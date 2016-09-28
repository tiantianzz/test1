/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:51
 */
import React from 'react';
import ErrorPackageList from './ErrorPackageList';
import PackageList from './PackageList';
const PropTypes = React.PropTypes;
const PackageTip = props=>(
    <span className="order-hd orange icon-tips ml10">
          <span className="icon">{''}</span>&nbsp;
      为了协助您更好的清关，我们将根据商品的类型，拆分包裹（订单）进行寄送.
          </span>
);
export default class PackageBox extends React.Component {
  static propTypes = {
    Project    : PropTypes.arrayOf(PropTypes.object).isRequired,
    InvalidList: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const props = this.props;
    return (
        <div>
          <h3>
            确认订单信息
            {props.Project != null && props.Project.length > 1 ? <PackageTip /> : ''}
          </h3>
          <div className="order-th">
            <div className="th item-info">商品信息</div>
            <div className="th item-num">数量</div>
            {/*<div className="th item-weight">重量（g）</div>*/}
            <div className="th item-price">价格（元）</div>
          </div>
          {props.Project.length
              ? props.Project.map(
              (project, item)=>
                  <PackageList item={item}
                               key={item}
                               {...project} />)
              : ''}
          {props.InvalidList.length
              ? <ErrorPackageList ItemList={props.InvalidList} />
              : ''}
        </div>
    );
  }
}