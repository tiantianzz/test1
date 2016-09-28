/**
 * author: MG
 * 商家注册页面
 * */

import '../../../less/about/about.less';
import '../../../less/about/registration/registration.less';
import AboutNav from '../AboutNav';

const {imgsrc_cn,Wrap} = window.supervar;

class Content extends React.Component{
    render(){
        return (
            <div>
                <AboutNav current="registration" />

                <div className="aboutBanner registrationBanner">
                    <h2 className="aboutBanner-inner registrationBanner-inner">Superbuy诚邀商家合作共同开拓海外市场，错过了电商，不要再错过正在发展的国际市场</h2>
                </div>

                <div className="aboutMain registrationMain">
                    <h3 className="aboutTitle">跟我们合作你可以获得</h3>
                    <ul className="registrationBenefit clearfix">
                        <li>
                            <img src={imgsrc_cn + 'about/registration/registration_icon01.png'} width="100" height="100"/>
                            <p>全球高消费力的客户</p>
                            <span>我们拥有来自北美、亚太、欧洲等世界各地的庞大用户群，购物需求广，消费能力强</span>
                        </li>
                        <li>
                            <img src={imgsrc_cn + 'about/registration/registration_icon02.png'} width="100" height="100"/>
                            <p>成交更多的海外订单</p>
                            <span>帮您轻松打开远销海外的大门，拓展您的海外市场提高您的订单总量</span>
                        </li>
                        <li>
                            <img src={imgsrc_cn + 'about/registration/registration_icon03.png'} width="100" height="100"/>
                            <p>快速发展的外贸电商</p>
                            <span>海外电商的快速发展时代，我们用户群体的高速增长趋势，必将成为您海外贸易路上的转折点</span>
                        </li>
                    </ul>
                    <a href="http://bbs.dotdotbuy.com/forum.php?mod=viewthread&tid=55184" target="_blank" className="registration-joinButton">申请加入</a>

                    <h3 className="aboutTitle">商家申请指南</h3>
                    <i className="registrationGuide-line"> </i>
                    <dl className="registrationGuide">
                        <dt>1</dt>
                        <dd>
                            <p>核对合作指南</p>
                            <span>商家阅读申请指南，确认合作条件</span>
                        </dd>
                    </dl>
                    <dl className="registrationGuide">
                        <dt>2</dt>
                        <dd>
                            <p>提交申请资料</p>
                            <span>符合条件的商家注册账号并完善相关资料，提交申请</span>
                        </dd>
                    </dl>
                    <dl className="registrationGuide">
                        <dt>3</dt>
                        <dd>
                            <p>确认合作意向</p>
                            <span>资料审核通过，双方确认合作意向</span>
                        </dd>
                    </dl>
                    <div className="cb"></div>

                    <table className="registrationTable">
                        <tr>
                            <th colSpan="2">商家经营的店铺需要同时满足以下条件（或者类似标准同比折算）：</th>
                        </tr>
                        <tr>
                            <td>月销售额</td>
                            <td>5000以上</td>
                        </tr>
                        <tr>
                            <td>好评率</td>
                            <td>&gt;=95%</td>
                        </tr>
                        <tr>
                            <td>投诉率</td>
                            <td>&lt;=1%</td>
                        </tr>
                        <tr>
                            <td>退款率</td>
                            <td>&lt;=20%</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Wrap content={Content} />,document.getElementsByTagName("body")[0]);


