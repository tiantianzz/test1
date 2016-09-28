/**
 * author: MG
 * 联系我们页面
 * */

import '../../../less/about/about.less';
import '../../../less/about/privacy/privacy.less';
import AboutNav from '../AboutNav';

const {Wrap} = window.supervar;

class Content extends React.Component{
     render(){
        return (
            <div>
                <AboutNav current="privacy" />
                <div className="aboutBanner privacyBanner">
                    <div className="aboutBanner-inner privacyBanner-inner">
                        <i className="aboutBanner-icon privacyBanner-icon"></i>
                        <div className="aboutBanner-txt">
                            <h2>Privacy Statement</h2>
                            <p>Privacy Policy and Information Protection</p>
                        </div>
                    </div>
                </div>
                <div className="aboutMain privacyMain">
                    <p>To protect your privacy is very important for us. We will try the best to keep your personal information safe. To ensure you have understand and know &lt;Superbuy Users Privacy Policy&gt; in order for us to provide you the best service, please spend little time and read the following terms to know how we deal with your personal information.</p>
                    <h3 className="aboutTitle">1. Content of the personal information we have collected</h3>
                    <p>In general, you can visit our company online without telling us who you are or provide any of your any personal information. However, we or our partners may need information from you sometimes. You can choose under a variety of situations to provide us your personal information which you can offer. For example, you can choose to provide your name, phone number or e-mail so that we can contact you and provide on-site service, etc.. You also can describe your education level and working experience, so that we can become partners or participate in our projects. Before collecting your personal information, we would like you to know that how we use this information, and get permission from you. If you provide personal information about others (such as spouse or work colleagues) to us, we will assume that you have got their permission.</p>
                    <h3 className="aboutTitle">2. Why do we collect your personal information</h3>
                    <p>The reason why our company collects and uses your personal information is to provide you with the best customer service, so that you can easily enjoy our services and we are very pleased to accept the ideas and feedback from you. It may wider the range of our service for you.</p>
                    <h3 className="aboutTitle">3. How do we collect your personal information</h3>
                    <p>We will only get your personal information from feedback section of our website.<br /><strong>Note:</strong>We will not ask for personal information from children or self-solicit individual without permission of guardian, or in the situation of without knowing this and without the presence.</p>
                    <h3 className="aboutTitle">4. How do we use your personal information</h3>
                    <p>The personal information you provided to us will be used in the following purposes with your permission:</p>
                    <ol>
                        <li>1. To satisfy your request regarding to our service or website</li>
                        <li>2. Keep you in touch with and allow you to participate in surveys and promotions</li>
                        <li>3. For us or selected organizations of marketing purposes</li>
                        <li>4. Data such as the number of customers for statistical analysis as anonymous</li>
                        <li>5. To enhance our business relationship, if you are our cooperation partner or business partner</li>
                    </ol>
                    <h3 className="aboutTitle">5. How do we protect your personal information</h3>
                    <p>
                        When we collect information from you, we will clearly and comprehensively inform you the future of using this information. You can provide all or part of the information to us based on your personal preference. At the same time, you have the right to tell us which part of information can be used in which ways and which information cannot and we will respect your wishes. Our company guarantees you the security and quality of information data you provide to us with physical, electronic and other means.
                        <br/><strong>Note:</strong>
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Some countries, regions or organizations may not publish strict laws and regulations to protect your information. Within these regions or organizations, our company will still deal with your information with the way described in accordance with the terms.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Hope you can understand that in some cases, the law requires disclosure of information. Pursuant to subpoenas of judicial or other governments, warrants, or orders, it may be needed to disclose personal information.
                    </p>
                    <h3 className="aboutTitle">6. How do you monitor the use of personal information</h3>
                    <p>In general, when we collect your personal information, we will ask for permission of using your personal information. If you have requests, we can ask for permission each time before using it. You can know the usage of your information via newspaper, network or other ways by yourself. If you find out that your personal information has been used without your permission, you can contact us by phone or online. We will investigate the origin of the problem and take protective measures to ensure the safety of your personal privacy.</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Wrap content={Content} />,document.getElementsByTagName("body")[0]);


