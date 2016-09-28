/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/29 15:40
 */
import React from 'react';
import {PropTypes,number,string} from '../shorthandValid';
/**
 * 单个包裹合计
 */
export default class PackageTotal extends React.Component {
  static propTypes = {
    premiumKey: string.isRequired,
    item      : number.isRequired,
    delivery  : PropTypes.shape({
      ItemPrice      : number.isRequired,
      Freight        : number.isRequired,
      CustomsCost    : number.isRequired,
      FuelCost       : number.isRequired,
      ServiceCost    : number.isRequired,
      ServicePercent : number.isRequired,
      DiscountFreight: number.isRequired,
      DiscountService: number.isRequired,
      SurchargeCost  : number.isRequired,
      AllCost        : number.isRequired
    }).isRequired
  };

  render() {
    const {premiumKey, delivery, item}=this.props;
    const {
        ItemPrice,
        Freight,
        CustomsCost,
        FuelCost,
        ServiceCost,
        ServicePercent,
        DiscountFreight,
        DiscountService,
        SurchargeCost,
        AllCost
    }=delivery;
    let cost = [];
    const fixedTwo = data=>data.toFixed(2);
    (()=> {
      if (ItemPrice > 0)
        cost.push(<dd key="package_1">商品总价：<span>{fixedTwo(ItemPrice)}元</span>
        </dd>);
      if (Freight > 0)
        cost.push(<dd key="package_2">包裹运费：<span>{fixedTwo(Freight)}元</span>
        </dd>);
      if (CustomsCost > 0)
        cost.push(<dd key="package_3">报关费：<span>{fixedTwo(CustomsCost)}元</span>
        </dd>);
      if (FuelCost > 0)
        cost.push(<dd key="package_4">燃油附加费：<span>{fixedTwo(FuelCost)}元</span>
        </dd>);
      if (ServiceCost > 0)
        cost.push(<dd key="package_5">服务费：<span>{fixedTwo(ServiceCost)}元</span>
        </dd>);
      if (ServicePercent > 0)
        cost.push(<dd key="package_6">
          服务费比例：<span>{fixedTwo(ServicePercent)}元</span></dd>);
      if (DiscountFreight > 0)
        cost.push(<dd key="package_7">
          运费折扣：<span>{fixedTwo(DiscountFreight)}元</span></dd>);
      if (DiscountService > 0)
        cost.push(<dd key="package_8">
          服务费折扣：<span>{fixedTwo(DiscountService)}元</span></dd>);
      if (SurchargeCost > 0)
        cost.push(<dd key="package_9">
          操作费：<span>{fixedTwo(SurchargeCost)}元</span></dd>);
      if (AllCost > 0) {
        cost.push(<dt key="package_10">
          总计：<span>{fixedTwo(ItemPrice + AllCost)}元</span></dt>);
      } else {
        cost.push(<dt key="package_10">所有费用：<span>{fixedTwo(ItemPrice)}元</span>
        </dt>);
      }
    })();
    return (
        <li className="mt10 tr show-tips service-allprice">
          <div className="fr"
               style={{minWidth: '313px', position: 'relative'}}>
            包裹合计（含运费及各项费用）：
            <span className="price-info fr fs18 bold ml20">
              &yen;<em>{fixedTwo(ItemPrice + AllCost)}</em>
            <img src="http://static.daigou.com/images/icon_help.gif"
                 className="pl5"
                 style={{marginTop: '-4px'}}
            />
            </span>
            {/*包裹各项费用模块 [[*/}
            <div className="tips-box hide"
                 ref={`allMoney_${premiumKey}`}>
              <span className="arrow">{''}</span>
              <dl ref={`allprice_${item}`}>
                {cost}
              </dl>
            </div>
            {/*包裹各项费用模块 ]]*/}
          </div>
        </li>
    );
  }
}
