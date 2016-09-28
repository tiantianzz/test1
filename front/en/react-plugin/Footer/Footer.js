/**
 * author: MG
 * 页面底部
 * */

import './src/Footer.less';

const {util,domain} = window.supervar;
const page = `//www.${domain}/en/page/`;

let model = {
    linkBox: [
        {
            txt: 'Beginner\'s Guide',
            children: [
                {txt:'Sign Up',href:`${page}help/#p1_21_helpId6`},
                {txt:'Regions available for delivery',href:`${page}help/#p2_28_helpId37`},
                {txt:'Membership Level and Credits',href:`${page}help/#p3_39_helpId92`},
                {txt:'Forbidden/Controlled Items',href:`${page}help/#p5_40_helpId33`}
            ]
        },
        {
            txt: 'Shopping Agent Guidance',
            children: [
                {txt:'Procedures',href:`${page}help/#p0_14_helpId19`},
                {txt:'Serivce and Charge',href:`${page}help/#p0_14_helpId34`},
                {txt:'Order Status',href:`${page}help/#p0_14_helpId21`},
                {txt:'Returns and Refunds',href:`${page}help/#-1_helpId145`}
            ]
        },
        {
            txt: 'Payment Methods',
            children: [
                {txt:'Top up',href:`${page}help/#p1_23_helpId40`},
                {txt:'Pay by Paypal',href:`${page}help/#p1_23_helpId22`},
                {txt:'Pay by International Credit Card',href:`${page}help/#p1_23_helpId23`},
                {txt:'Pay by Wechat',href:`${page}help/#p1_23_helpId174`}
            ]
        },
        {
            txt: 'Delivery',
            children: [
                {txt:'Charges',href:'http://www.dotdotexpress.com/postage/country'},
                {txt:'Packaging',href:`${page}help/#p2_29_helpId30`},
                {txt:'Customs and Taxation',href:`${page}help/#p2_30_helpId41`},
                {txt:'Receipt Note',href:`${page}help/#p4_53_helpId2`}
            ]
        },
        {
            txt: 'After Sales Service',
            children: [
                {txt:'Storage',href:`${page}help/#p5_41_helpId1`},
                {txt:'Inspection Rules',href:`${page}help/#p4_55_helpId132`},
                {txt:'After Sale Policy',href:`${page}help/#p4_54_helpId31`},
                {txt:'Insurance and Compensation',href:`${page}help/#p4_55_helpId148`}
            ]
        }
    ],
    'serviceTxt': '7x24 Hotline:',
    'emailTxt': 'Mailbox:',
    'about': [
        {txt: 'About Us',href:`${page}about/aboutUs/`},
        {txt: 'Contact Us',href:`${page}about/contactUs/`},
        // {txt: 'Join Us',href:`${page}about/joinUs/`},
        {txt: 'Service Agreement',href:`${page}about/agreement/`},
        {txt: 'Privacy Policy',href:`${page}about/privacy/`},
        {txt: 'Help Center',href:`${page}help/`},
        {txt: 'Merchant registration',href:`${page}about/registration/`},
        {txt: 'Useful links',href:`${page}about/link/`},
        {txt: 'Website Map',href:`${page}about/map/`},
        {txt: 'dotdotexpress',href:'http://www.dotdotexpress.com/'}
    ],
    backToTop : 'back to top'
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
                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;

