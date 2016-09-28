/**
 * author: MG
 * 友情链接页面
 * */

import '../../../less/about/about.less'
import '../../../less/about/link/link.less'
import AboutNav from '../AboutNav';
import IconBox from '../IconBox';

const {imgsrc_cn : imgsrc,Wrap} = window.supervar;

let linksData = [
    {
        icon : 'aboutIcon-partner', //图标的class
        title : '合作伙伴',          //名称
        column : false,             //false: 链接成一行排列, number: 链接分n列排列
        links : [                   //链接数组
            {href:'http://www.taobao.com/',txt:'淘宝网'},
            {href:'http://www.dangdang.com/',txt:'当当网'},
            {href:'http://www.z.cn/',txt:'亚马逊'},
            {href:'http://www.paipai.com/',txt:'拍拍网'},
            {href:'http://www.m18.com/',txt:'麦考林'},
            {href:'http://www.vancl.com/',txt:'凡客诚品'},
            {href:'http://www.jd.com/',txt:'京东商城'},
            {href:'http://www.tmall.com/',txt:'天猫'},
            {href:'http://www.51buy.com/',txt:'易迅网'},
            // {href:'http://buy.qq.com/',txt:'QQ网购'}
        ]
    },
    {
        icon : 'aboutIcon-logistics',
        title : '物流配送',
        column : false,
        links : [
            {href:'http://www.dhl.com/',txt:'DHL'},
            {href:'http://www.sf-express.com/us/en/',txt:'顺丰国际'},
            {href:'http://www.ems.com.cn/',txt:'EMS'},
            {href:'http://www.singpost.com/',txt:'Singpost'}
        ]
    },
    {
        icon : 'aboutIcon-payment',
        title : '支付方式',
        column : false,
        links : [
            {href:'http://www.paypal.com/',txt:'Paypal'},
            {href:'http://www.alipay.com/',txt:'Alipay'}
        ]
    },
    // {
    //     icon : 'aboutIcon-link',
    //     title : '文字链接',
    //     column : 5,
    //     links : [
    //         {href:'http://www.chinese.net.nz/',txt:'新西兰中文网'},
    //         {href:'http://www.nychinaren.com/',txt:'纽约华人咨询'},
    //         {href:'http://www.vannow.com/',txt:'温哥华家园网'},
    //         {href:'http://www.ixru.com/',txt:'俄罗斯留学网'},
    //         {href:'http://xianning.ganchang.cn/',txt:'咸宁信息网'},
    //         {href:'http://at.haiwaicity.com/',txt:'海外同城网-奥地利站'},
    //         {href:'http://de.haiwaicity.com/',txt:'海外同城网-德国站'},
    //         {href:'http://es.haiwaicity.com/',txt:'海外同城网-西班牙站'},
    //         {href:'http://hu.haiwaicity.com/',txt:'海外同城网-匈牙利站'},
    //         {href:'http://fr.haiwaicity.com/',txt:'海外同城网-法国站'},
    //         {href:'http://www.ickd.cn/',txt:'快递查询'},
    //         {href:'http://www.extrabux.com/stores/puritans-pride',txt:'普丽普莱'},
    //         {href:'http://www.handu.com/',txt:'韩都衣舍'},
    //         {href:'http://www.zbird.com/',txt:'钻石小鸟'},
    //         {href:'http://www.waynot.net/plug/link.asp',txt:'唯奥特打折网'},
    //         {href:'http://www.okhqb.com/',txt:'华强北商城'},
    //         {href:'http://www.lady8844.com/',txt:'爱美网'},
    //         {href:'http://www.hao123.com/',txt:'hao123'},
    //         {href:'http://www.shouluz.cn/',txt:'网站目录'},
    //         {href:'http://www.seek114.com/',txt:'114'}
    //
    //     ]
    // }
];

class Content extends React.Component{

    render() {

        return (
            <div>
                <AboutNav current="link"/>

                <div className="aboutBanner linkBanner">
                    <h2 className="aboutBanner-inner linkBanner-inner">友情链接</h2>
                </div>

                <div className="aboutMain linkMain">
                    {linksData.map(box => <IconBox {...box} />)}
                </div>

            </div>
        )
    }
}

ReactDOM.render(<Wrap content={Content} />,document.getElementsByTagName("body")[0]);


