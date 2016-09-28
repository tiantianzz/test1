/**
 * author: MG
 * 页面底部
 * */

import './src/Footer.less';

const {util,domain} = window.supervar;
const page = `//www.${domain}/cn/page/`;

let model = {
    linkBox: [
        {
            txt: '新手上路',
            children: [
                {txt: '新用户注册',href:`${page}help/#p1_21_helpId6`},
                {txt: '商品寄送范围',href:`${page}help/#p2_28_helpId37`},
                {txt: '会员等级与积分',href:`${page}help/#p3_39_helpId92`},
                {txt: '出入境物品限制',href:`${page}help/#p5_40_helpId33`}
            ]
        },
        {
            txt: '代购指南',
            children: [
                {txt: '代购演示',href:`${page}help/#p0_14_helpId19`},
                {txt: '服务与费用',href:`${page}help/#p0_14_helpId34`},
                {txt: '订单状态',href:`${page}help/#p0_14_helpId21`},
                {txt: '退换货服务',href:`${page}help/#-1_helpId145`}
            ]
        },
        {
            txt: '支付方式',
            children: [
                {txt: '充值方式',href:`${page}help/#p1_23_helpId40`},
                {txt: 'Paypal支付',href:`${page}help/#p1_23_helpId22`},
                {txt: '国际信用卡',href:`${page}help/#p1_23_helpId23`},
                {txt: '微信支付',href:`${page}help/#p1_23_helpId174`}
            ]
        },
        {
            txt: '配送相关',
            children: [
                {txt: '物流运费',href:'http://www.dotdotexpress.com/postage/country'},
                {txt: '集中打包',href:`${page}help/#p2_29_helpId30`},
                {txt: '海关及税项',href:`${page}help/#p2_30_helpId41`},
                {txt: '收货注意事项',href:`${page}help/#p4_53_helpId2`}
            ]
        },
        {
            txt: '售后服务',
            children: [
                {txt: '商品保管期',href:`${page}help/#p5_41_helpId1`},
                {txt: '验货规则',href:`${page}help/#p4_55_helpId132`},
                {txt: '售后政策',href:`${page}help/#p4_54_helpId31`},
                {txt: '保险及赔偿',href:`${page}help/#p4_55_helpId148`}
            ]
        }
    ],
    'serviceTxt': '7x24小时服务热线：',
    'emailTxt': '服务邮箱：',
    'about': [
        {txt: '关于我们',href:`${page}about/aboutUs/`},
        {txt: '联系我们',href:`${page}about/contactUs/`},
        {txt: '加入我们',href:`${page}about/joinUs/`},
        {txt: '服务协议',href:`${page}about/agreement/`},
        {txt: '隐私声明',href:`${page}about/privacy/`},
        {txt: '帮助中心',href:`${page}help/`},
        {txt: '商家注册',href:`${page}about/registration/`},
        {txt: '友情链接',href:`${page}about/link/`},
        {txt: '网站地图',href:`${page}about/map/`},
        {txt: 'dotdotexpress',href:'http://www.dotdotexpress.com/'}
    ],
    backToTop : '返回顶部'
};

let body = document.body;

class Footer extends React.Component {
    constructor(){
        super();

        this.state = {
            showBTT : false, //是否显示返回顶部
            positionBTT : false //返回顶部是否是position定位
        };
    }
    initGoToTop(){
        let clientHeight = body.clientHeight;
        let footerTop = util.getDomPosition(this.refs.footer).top;
        let timer = null,flag = true;
        let unFlag = ()=>{
            flag = true;
        };

        let onScroll = ()=>{

            clearTimeout(timer);
            let scrollTop = util.getScrollTop();
            if(flag){
                footerTop = util.getDomPosition(this.refs.footer).top;
                flag = false;
            }
            // console.log(scrollTop,footerTop)

            if(scrollTop  < 100 === this.state.showBTT){
                this.setState((state)=>({
                    showBTT : !state.showBTT
                }))
            }

            if(scrollTop + clientHeight < footerTop === this.state.positionBTT){
                this.setState((state)=>({
                    positionBTT : !state.positionBTT
                }))
            }

            timer = setTimeout(unFlag,80);

        };

        onScroll();
        window.addEventListener('scroll',onScroll,false);
    }
    handleBackToTop(){
        util.setScrollTop(0);
        this.setState(()=>({
            showBTT : false
        }));
        if(util.getConstructorName(this.props.handleBackToTop) === 'Function'){
            this.props.handleBackToTop();
        }
    }
    componentDidMount(){
        if(this.props.backToTop !== false){
            this.initGoToTop()
        }
    }
    render() {
        return (
            <footer className="m-footer" ref="footer">
                <div className="footer-wrap">
                    <div className={(this.state.positionBTT ? 'positionBTT' : '') + " footer-backToTop"} title={model.backToTop} onClick={this.handleBackToTop.bind(this)} style={{display: this.props.backToTop === false || this.state.showBTT === false ? 'none' : 'block'}}></div>
                    <div className="clearfix">
                        {model.linkBox.map(dl => {
                            return(
                                <dl>
                                    <dt>{dl.txt}</dt>
                                    {dl.children.map(dd => <dd><a href={dd.href} target="_blank">{dd.txt}</a></dd>)}
                                </dl>
                            );
                        })}

                        <div className="footer-contact">
                            <p>{model.serviceTxt}</p>
                            <a href="tel:0086-755-33085566">+86-755-33085566</a>
                            <p>{model.emailTxt}</p>
                            <a href="mailto:service@superbuy.com">SERVICE@SUPERBUY.COM</a>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <ul>
                            {model.about.map((item,i) =>
                                <li>
                                    <a href={item.href} target="_blank">{item.txt}</a>
                                    <i dangerouslySetInnerHTML={{__html : i < model.about.length - 1 ? '|' : ''}}></i>
                                </li>
                            )}
                        </ul>
                        <p>Copyright©2012-2016 superbuy.com All Rights Reserved <a href="http://www.miibeian.gov.cn" target="_blank">粤ICP备13062081号-4</a></p>
                        {/*<p className="footer-copyRight">深圳市点点淘科技有限公司 版权所有</p>*/}
                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;

