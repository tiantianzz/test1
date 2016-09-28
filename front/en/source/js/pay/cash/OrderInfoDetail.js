/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/20 17:35
 */
import React from 'react';
const PropTypes = React.PropTypes;
const number = PropTypes.number;
class OrderInfoDetail extends React.Component {
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
            <th className="item-name tc">Transaction No.
            </th>
            <th className="item-price js-pkg-price tc">
              Item Price(&yen;)
            </th>
            <th className="item-total tc">Total Price(&yen;)</th>
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
OrderInfoDetail.propTypes = {
  orderDisplay: PropTypes.bool.isRequired
};
export default OrderInfoDetail;