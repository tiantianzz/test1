/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 17:35
 */
import React, { Component, PropTypes }from 'react';
const number = PropTypes.number;
export default class OrderInfoDetail extends Component {
  static propTypes = {
    orderDisplay: PropTypes.bool.isRequired,
    packageLists: PropTypes.arrayOf(PropTypes.shape({
      PackageNo   : PropTypes.string,
      ItemPrice   : number,
      PackagePrice: number,
      TotalPrice  : number
    }))
  };

  constructor(props) {
    super(props);
    this.state = {
      detailHeight: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      detailHeight: nextProps.orderDisplay
        ? this.refs.infoTable.clientHeight
        : 0
    });
  }

  render() {
    return (
      <div className="order-info-detail"
           style={{height: this.state.detailHeight}}>
        <table className="info-table"
               ref="infoTable">
          <thead>
          <tr>
            <th className="item-name tc">交易流水号
            </th>
            <th className="item-price tc">
              商品价格（元）
            </th>
            <th className="item-total tc">总价（元）</th>
          </tr>
          </thead>
          <tbody>
          {this.props.packageLists.map(data=>(
            <tr key={data.PackageNo}>
              <td className="info-first tl pl-item-name tc">{data.PackageNo}
              </td>
              <td className="info-first">{data.ItemPrice}</td>
              <td className="info-first">{data.TotalPrice}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}
