/**
 * author: MG
 * 联系我们页面
 * */

import '../../../less/about/about.less';
import '../../../less/about/contactUs/contactUs.less';
import AboutNav from '../AboutNav';

const {Wrap} = window.supervar;

class Content extends React.Component{
     render(){
        return (
            <div>
                <AboutNav current="contactUs" />
                <div className="aboutBanner contactUsBanner">
                    <div className="aboutBanner-inner contactUsBanner-inner">
                        <i className="aboutBanner-icon contactUsBanner-icon"></i>
                        <div className="aboutBanner-txt">
                            <h2>联系我们</h2>
                            <p>商务合作及联系方式</p>
                        </div>
                    </div>
                </div>
                <div className="aboutMain contactUsMain">
                    <h3 className="aboutTitle">业务合作</h3>
                    <p>商务合作请联系邮箱：bd@superbuy.com<br />(此邮箱只接收商务合作邮件，如有其他问题可咨询在线客服或留言)</p>
                    <h3 className="aboutTitle">客服邮箱</h3>
                    <p>service@superbuy.com</p>
                    <h3 className="aboutTitle">客服热线</h3>
                    <p>+86-0755-33085566</p>
                    <h3 className="aboutTitle">公司地址</h3>
                    <p>广东深圳市福田区天安数码城天展大厦AB座5层</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Wrap content={Content} />,document.getElementsByTagName("body")[0]);


