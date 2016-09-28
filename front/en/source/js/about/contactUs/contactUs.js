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
                            <h2>Contact us</h2>
                            <p>Cooperation and Contact details</p>
                        </div>
                    </div>
                </div>
                <div className="aboutMain contactUsMain">
                    <h3 className="aboutTitle">Business Cooperation</h3>
                    <p>Email: bd@superbuy.com<br />(This email is only for business cooperation, please contact online customer service or leave message for other enquiries.)</p>
                    <h3 className="aboutTitle">Customer Service Email</h3>
                    <p>service@superbuy.com</p>
                    <h3 className="aboutTitle">Customer Service Hotline</h3>
                    <p>+86-0755-33085566</p>
                    <h3 className="aboutTitle">Company Address</h3>
                    <p>5B, Block AB, Tianzhan Mansion, Shenzhen Tianan Cyber Park, Shenzhen, China</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Wrap content={Content} />,document.getElementsByTagName("body")[0]);


