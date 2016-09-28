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
                    <h2 className="aboutBanner-inner registrationBanner-inner">Superbuy cordially invite merchants to cooperatively exploit overseas market,Missed e-business,do not miss the developing global market</h2>
                </div>

                <div className="aboutMain registrationMain">
                    <h3 className="aboutTitle">Benefits of cooperating with us</h3>
                    <ul className="registrationBenefit clearfix">
                        <li>
                            <img src={imgsrc_cn + 'about/registration/registration_icon01.png'} width="100" height="100"/>
                            <p>Global customers with high consumption power</p>
                            <span>We have users from North America, Asia-Pacific, Europe and other regions, trade demand are high and wide rage, consumption power is high.</span>
                        </li>
                        <li>
                            <img src={imgsrc_cn + 'about/registration/registration_icon02.png'} width="100" height="100"/>
                            <p>More successful overseas purchase orders</p>
                            <span>Help you develop your business to overseas, develop your worldwide markets to increase the total order amount.</span>
                        </li>
                        <li>
                            <img src={imgsrc_cn + 'about/registration/registration_icon03.png'} width="100" height="100"/>
                            <p>Rapid developed foreign trade e-commerce</p>
                            <span>During rapid developing international trade period, our users have been fast increasing, which might be the milestone of your global trade.</span>
                        </li>
                    </ul>
                    <a href="http://bbs.dotdotbuy.com/forum.php?mod=viewthread&tid=55184" target="_blank" className="registration-joinButton">Application to join</a>

                    <h3 className="aboutTitle">Application Guidance</h3>
                    <i className="registrationGuide-line"> </i>
                    <dl className="registrationGuide">
                        <dt>1</dt>
                        <dd>
                            <p>Verification of Cooperation Guidance</p>
                            <span>Merchants read the application guidance, confirm cooperation conditions</span>
                        </dd>
                    </dl>
                    <dl className="registrationGuide">
                        <dt>2</dt>
                        <dd>
                            <p>Application Documents Submission</p>
                            <span>Eligible merchants could sign up an account and complete relevant information, submit application.</span>
                        </dd>
                    </dl>
                    <dl className="registrationGuide">
                        <dt>3</dt>
                        <dd>
                            <p>Cooperation Confirmation</p>
                            <span>Application verified, both parties confirm cooperation intention.</span>
                        </dd>
                    </dl>
                    <div className="cb"></div>

                    <table className="registrationTable">
                        <tr>
                            <th colSpan="2">Merchant stores should meet all the following conditions (or similar standards):</th>
                        </tr>
                        <tr>
                            <td>Monthly Sales Volume</td>
                            <td>More than 5000</td>
                        </tr>
                        <tr>
                            <td>Positive Feedback Rate</td>
                            <td>&gt;=95%</td>
                        </tr>
                        <tr>
                            <td>Complaint Rate</td>
                            <td>&lt;=1%</td>
                        </tr>
                        <tr>
                            <td>Returns/ Refunds Rate</td>
                            <td>&lt;=20%</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Wrap content={Content} />,document.getElementsByTagName("body")[0]);


