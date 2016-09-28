/**
 * author: MG
 * 网站地图页面
 * */

import '../../../less/about/about.less'
import '../../../less/about/map/map.less'
import AboutNav from '../AboutNav';
import IconBox from '../IconBox';

const {Wrap,domain} = window.supervar;
const page = `//www.${domain}/en/page/`;

let linksData = [
    {
        icon : 'aboutIcon-member',  //图标的class
        title : 'Superbuy Membership',      //名称
        column : 2,                 //false: 链接成一行排列, number: 链接分n列排列
        links : [                   //链接数组
            {href:`${page}login/`,txt:'Login'},
            {href:`${page}login/?type=register`,txt:'Sign Up'},
            {href:`${page}about/aboutUs/`,txt:'About Us'},
            {href:`${page}help/`,txt:'Help Center'},
            {href:'http://www.dotdotexpress.com/',txt:'Logistics Center'},
            {href:'http://mall.dotdotbuy.com/help/demo/quickbuy/step1/',txt:'Shopping Agent Introductory Video'}
        ]
    },
    {
        icon : 'aboutIcon-server',
        title : 'Superbuy Services',
        column : 2,
        links : [
            // {href:`http://mall.${domain}/`,txt:'商城'},
            // {href:'#',txt:'团购'},
            {href:`${page}shopping/shopping.html`,txt:'Shopping Agent'},
            // {href:`http://ex.${domain}/`,txt:'Parcel Forward'},
            {href:'http://bbs.dotdotbuy.com/forum.php',txt:'Community'},
            {href:'http://bbs.dotdotbuy.com/forum.php?mod=forumdisplay&fid=55',txt:'Q&A'},
            {href:'http://bbs.dotdotbuy.com/forum.php?mod=forumdisplay&fid=42',txt:'Reviews'},
            {href:`//www.${domain}/downloads/`,txt:'Mobile site'}
        ]
    },
    // {
    //     icon : 'aboutIcon-mall',
    //     title : 'Superbuy Mall',
    //     column : 4,
    //     links : [
    //         {href:`//mall.${domain}/goods_lists/%E5%AE%B6%E5%B1%85`,txt:'家居'},
    //         {href:`//mall.${domain}/goods_lists/%E7%BE%8E%E5%A6%86`,txt:'美妆'},
    //         {href:`//mall.${domain}/goods_lists/%E9%A3%9F%E5%93%81`,txt:'食品'},
    //         {href:`//mall.${domain}/goods_lists/%E9%85%8D%E9%A5%B0`,txt:'配饰'},
    //         {href:`//mall.${domain}/goods_lists/%E6%95%B0%E7%A0%81`,txt:'数码'},
    //         {href:`//mall.${domain}/goods_lists/%E8%A1%A3%E6%9C%8D`,txt:'衣服'},
    //         {href:`//mall.${domain}/goods_lists/%E9%9E%8B%E5%AD%90`,txt:'鞋子'},
    //         {href:`//mall.${domain}/goods_lists/%E5%8C%85%E5%8C%85`,txt:'包包'}
    //     ]
    // },
    {
        icon : 'aboutIcon-tool',
        title : 'Useful Tools',
        column : 2,
        links : [
            {href:'http://www.dotdotexpress.com/postage/country',txt:'Shipping Fees'},
            {href:'http://www.dotdotexpress.com/',txt:'Track parcels'},
            {href:'http://www.dotdotexpress.com/postage/country',txt:'Fee Estimation'},
            {href:'http://www.dotdotexpress.com/tools/post/limit',txt:'Mail Limitations'},
            {href:`http://buy.${domain}/views/single/install.html`,txt:'Shopping Agent Assistant'}
        ]
    },
    {
        icon : 'aboutIcon-about',
        title : 'About Superbuy',
        column : 2,
        links : [
            {href:`${page}about/aboutUs/`,txt:'About Us'},
            // {href:'#',txt:'Business Introduction'},
            // {href:'#',txt:'Join Us'},
            {href:`${page}about/contactUs/`,txt:'Contact Us'},
            {href:`${page}about/agreement/`,txt:'Service Agreement'},
            {href:`${page}about/privacy/`,txt:'Privacy Policy'},
            {href:`${page}about/registration/`,txt:'Merchant registration'},
            {href:`${page}about/link/`,txt:'Useful Links'},
            {href:'http://www.dotdotexpress.com/',txt:'dotdotexpress'}
        ]
    },
    {
        icon : 'aboutIcon-help',
        title : 'Help Center',
        column : 2,
        style : {width:"46%"},
        links : [
            {href:`${page}help/`,txt:'Services and Fees'},
            {href:`${page}help/`,txt:'Shopping Agent Scale'},
            {href:`${page}help/`,txt:'How to choose items'},
            {href:`${page}help/`,txt:'Shopping Agent Process'},
            {href:`${page}help/`,txt:'Order status'},
            {href:`${page}help/`,txt:'Paypal'},
            {href:`${page}help/`,txt:'Alipay'},
            {href:`${page}help/`,txt:'International Credit Cards'},
            {href:`${page}help/`,txt:'Wechat Pay'},
            {href:`${page}help/`,txt:'Fee for Large Items Shipment'},
            {href:`${page}help/`,txt:'Customs and Tax'}
        ]
    }
];

class Content extends React.Component{

    render() {

        return (
            <div>
                <AboutNav current="map"/>

                <div className="aboutBanner mapBanner">
                    <h2 className="aboutBanner-inner mapBanner-inner">Site Map</h2>
                </div>

                <div className="aboutMain mapMain clearfix">
                    {linksData.map(box => <IconBox {...box} />)}
                </div>

            </div>
        )
    }
}

ReactDOM.render(<Wrap content={Content} />,document.getElementsByTagName("body")[0]);


