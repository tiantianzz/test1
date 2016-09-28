/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:53
 */
import React from 'react';
import PackageBox from './PackageBox';
const PropTypes=React.PropTypes;
const PackageLoading = ()=>(
    <div className="tc p50 pb100">
      <img src="http://static.daigou.com/images/loading_32_32.gif" />&nbsp;&nbsp;
      玩命加载中...
    </div>
);
/**
 * 所有包裹的外部元素
 */
export default class PackageBoxWrap extends React.Component {
  static propTypes = {
    order: PropTypes.shape({
      Project    : PropTypes.arrayOf(PropTypes.object).isRequired,
      InvalidList: PropTypes.arrayOf(PropTypes.object).isRequired,
      Code       : PropTypes.oneOf(['success', 'fail'])
    })
  };

  render() {
    const props = this.props;
    let packageLoading = <PackageLoading />;
    let packageBox = '';
    if (props.order && props.order.Code === 'success') {
      packageLoading = '';
      packageBox = <PackageBox {...props.order} />;
    }
    return (
        <div className="order-box mt40">
          {packageLoading}
          {packageBox}
        </div>
    );
  }
}
