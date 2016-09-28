/**
 * author: MG
 * 网站地图页面
 * */

import '../../../less/about/about.less'
import '../../../less/about/map/map.less'
import AboutNav from '../AboutNav';
import IconBox from '../IconBox';

const {Wrap,domain} = window.supervar;
const page = `//www.${domain}/cn/page/`;

let linksData = [
    {
        icon : 'aboutIcon-member',  //图标的class
        title : 'superbuy会员',      //名称
        column : 3,                 //false: 链接成一行排列, number: 链接分n列排列
        links : [                   //链接数组
            {href:`${page}login/`,txt:'登录'},
            {href:`${page}login/?type=register`,txt:'注册'},
            {href:`${page}about/aboutUs/`,txt:'关于我们'},
            {href:`${page}help/`,txt:'帮助中心'},
            {href:'http://www.dotdotexpress.com/',txt:'物流中心'},
            {href:'http://mall.dotdotbuy.com/help/demo/quickbuy/step1/',txt:'代购演示'}
        ]
    },
    {
        icon : 'aboutIcon-server',
        title : 'superbuy服务',
        column : 4,
        links : [
            {href:`http://mall.${domain}/`,txt:'商城'},
            // {href:'#',txt:'团购'},
            {href:`//buy.${domain}`,txt:'代购'},
            {href:`http://ex.${domain}/`,txt:'转运'},
            {href:'http://bbs.dotdotbuy.com/forum.php',txt:'社区'},
            {href:'http://bbs.dotdotbuy.com/forum.php?mod=forumdisplay&fid=55',txt:'问答'},
            {href:'http://bbs.dotdotbuy.com/forum.php?mod=forumdisplay&fid=42',txt:'晒单'},
            {href:`//www.${domain}/downloads/`,txt:'手机版'}
        ]
    },
    {
        icon : 'aboutIcon-mall',
        title : 'superbuy商城',
        column : 4,
        links : [
            {href:`//mall.${domain}/goods_lists/%E5%AE%B6%E5%B1%85`,txt:'家居'},
            {href:`//mall.${domain}/goods_lists/%E7%BE%8E%E5%A6%86`,txt:'美妆'},
            {href:`//mall.${domain}/goods_lists/%E9%A3%9F%E5%93%81`,txt:'食品'},
            {href:`//mall.${domain}/goods_lists/%E9%85%8D%E9%A5%B0`,txt:'配饰'},
            {href:`//mall.${domain}/goods_lists/%E6%95%B0%E7%A0%81`,txt:'数码'},
            {href:`//mall.${domain}/goods_lists/%E8%A1%A3%E6%9C%8D`,txt:'衣服'},
            {href:`//mall.${domain}/goods_lists/%E9%9E%8B%E5%AD%90`,txt:'鞋子'},
            {href:`//mall.${domain}/goods_lists/%E5%8C%85%E5%8C%85`,txt:'包包'}
        ]
    },
    {
        icon : 'aboutIcon-tool',
        title : '实用工具',
        column : 3,
        links : [
            {href:'http://www.dotdotexpress.com/postage/country',txt:'物流运费'},
            {href:'http://www.dotdotexpress.com/',txt:'包裹查询'},
            {href:'http://www.dotdotexpress.com/postage/country',txt:'费用估计'},
            {href:'http://www.dotdotexpress.com/tools/post/limit',txt:'邮寄限制'},
            {href:`http://buy.${domain}/views/single/install.html`,txt:'代购助手'}
        ]
    },
    {
        icon : 'aboutIcon-about',
        title : '关于superbuy',
        column : 3,
        links : [
            {href:`${page}about/aboutUs/`,txt:'关于我们'},
            // {href:'#',txt:'业务介绍'},
            {href:`${page}about/joinUs/`,txt:'加入我们'},
            {href:`${page}about/contactUs/`,txt:'联系我们'},
            {href:`${page}about/agreement/`,txt:'服务协议'},
            {href:`${page}about/privacy/`,txt:'隐私声明'},
            {href:`${page}about/registration/`,txt:'商家注册'},
            {href:`${page}about/link/`,txt:'友情链接'},
            {href:'http://www.dotdotexpress.com/',txt:'dotdotexpress'}
        ]
    },
    {
        icon : 'aboutIcon-help',
        title : '帮助中心',
        column : 3,
        links : [
            {href:`${page}help/`,txt:'服务与费用'},
            {href:`${page}help/`,txt:'代购范围'},
            {href:`${page}help/`,txt:'如何挑商品'},
            {href:`${page}help/`,txt:'代购流程'},
            {href:`${page}help/`,txt:'订单状态'},
            {href:`${page}help/`,txt:'Paypal支付'},
            {href:`${page}help/`,txt:'支付宝支付'},
            {href:`${page}help/`,txt:'国际信用卡'},
            {href:`${page}help/`,txt:'微信支付'},
            {href:`${page}help/`,txt:'大宗商品运费'},
            {href:`${page}help/`,txt:'海关及税项'}
        ]
    }
];

class Content extends React.Component{

    render() {

        return (
            <div>
                <AboutNav current="map"/>

                <div className="aboutBanner mapBanner">
                    <h2 className="aboutBanner-inner mapBanner-inner">网站地图</h2>
                </div>

                <div className="aboutMain mapMain clearfix">
                    {linksData.map(box => <IconBox {...box} />)}
                </div>

            </div>
        )
    }
}

ReactDOM.render(<Wrap content={Content} />,document.getElementsByTagName("body")[0]);


