/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/9/27 10:26
 * Description: 积分抽大奖
 */
import React from 'react';
import '../../../less/superday/preheat/wheel.less';

export default class Wheel extends React.Component {
  render() {
    return (
      <div className="wheel">
        <div className="banner"></div>
        <div className="content">
          <div className="list-wrap">
            <div className="label">
              <strong><a href="">登录查看积分&nbsp;&gt;</a></strong>
              <strong className="none">我的积分：<span id="J_Integral">1868</span></strong>
            </div>
            <div className="list">
              <div className="list-inner">
              <div className="list-shadow"></div>
                <ul>
                  <li><span>小小明</span>获得<strong>四等奖</strong><strong>5元运费券</strong></li>
                  <li><span>小小明</span>获得<strong>四等奖</strong><strong>5元运费券</strong></li>
                  <li><span>小小明</span>获得<strong>四等奖</strong><strong>5元运费券</strong></li>
                  <li><span>小小明</span>获得<strong>四等奖</strong><strong>5元运费券</strong></li>
                  <li><span>小小明</span>获得<strong>四等奖</strong><strong>5元运费券</strong></li>
                  <li><span>小小明</span>获得<strong>四等奖</strong><strong>5元运费券</strong></li>
                  <li><span>小小明</span>获得<strong>四等奖</strong><strong>5元运费券</strong></li>
                  <li><span>小小明</span>获得<strong>四等奖</strong><strong>5元运费券</strong></li>
                  <li><span>小小明</span>获得<strong>四等奖</strong><strong>5元运费券</strong></li>
                  <li><span>小小明</span>获得<strong>四等奖</strong><strong>5元运费券</strong></li>
                  <li><span>小小明</span>获得<strong>四等奖</strong><strong>5元运费券</strong></li>
                  <li><span>小小明</span>获得<strong>四等奖</strong><strong>5元运费券</strong></li>
                </ul>
              </div>
            </div>
            <div className="prize"></div>
          </div>
          <div className="lottery">
            <div className="plate-wrap">
              <div className="plate"></div>
              <div className="btn-box">
                <a href="javascript:void(0)" className="btn-lottery">{}</a>
              </div>
            </div>
            <div className="rule">
              <dl>
                <dt>抽奖规则：</dt>
                <dd>每天可免费抽奖<i className="twice">{}</i>次，使用30个积分可再抽一次。
                  <a href="javascript:void(0)">详细规则&nbsp;&gt;</a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}