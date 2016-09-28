/**
 * author: MG
 * 服务协议页面
 * */

import '../../../less/about/about.less';
import '../../../less/about/agreement/agreement.less';
import AboutNav from '../AboutNav';

const {Wrap} = window.supervar;

class Content extends React.Component{
     render(){
        return (
            <div>
                <AboutNav current="agreement" />
                <div className="aboutBanner agreementBanner">
                    <div className="aboutBanner-inner agreementBanner-inner">
                        <i className="aboutBanner-icon agreementBanner-icon"></i>
                        <div className="aboutBanner-txt">
                            <h2>Service Agreement</h2>
                            <p>Service Terms and Users Management</p>
                        </div>
                    </div>
                </div>
                <div className="aboutMain agreementMain">
                    <h3 className="aboutTitle">1. Service Terms Confirmation and Acceptance</h3>
                    <p>Service Terms Confirmation and Acceptance ‘Superbuy’ registered users’ ownership and operation right are owned by ‘Shenzhen dotdotbuy Science and Technology Ltd.’. The services provided must be in accordance with its published service agreement, service terms, operating rules strictly enforced. Also says that users and "Superbuy" have reached an agreement and accepted all of its terms of service.</p>
                    <h3 className="aboutTitle">2. The Provision of Service information</h3>
                    <p>‘Superbuy’ provides global users international shopping agent service via internet by using its own information and service platform. Receivers information provided by users need to be detailed, accurate, truthful, valid, same as the users’ personal email address. Once the information has changed, the updated information need to be submitted to ‘Superbuy’ customer service. If the information provided by the users is inaccurate, untruthful, valid service cannot be provided. In addition, platform has the unilateral right to terminate users’ service right. </p>
                    <h3 className="aboutTitle">3. Users’ information Protection Rules</h3>
                    <p>Respect users privacy is one of the ‘Superbuy’ foundation rules. Therefore, we will not publish, modify or share users’ personal information to the third party and will save in ‘Superbuy’ registered users service files. Unless requested with legal permission or users themselves, then we can share to the third party.</p>
                    <h3 className="aboutTitle">4. Service Terms Rights</h3>
                    <p>‘Superbuy’ reserved the right to modify or discontinue the service without notifying the user, it is not necessary for the rights to the user or any third party.</p>
                    <h3 className="aboutTitle">5. Uses’ Account/ Password Security Maintenance</h3>
                    <p>Once you have registered with the site, you will have a member account where the account number is your username. You are responsible to the liability of all your account or password activities. Therefore, please keep your account username and password safely and do not share to any third party. Otherwise, you are responsible to all the legal consequence caused by that. If you realize your password might be divulged, please modify it as soon as possible. You can feely visit ‘Me’ then click ‘Profile information’ to modify your password or information. Or you could terminate the old account and sign up for a new account. However, please make sure you have notified our customer service so that we can transfer your old account balance to your new account.</p>
                    <h3 className="aboutTitle">6. Users Management</h3>
                    <p>Users will take the responsibility solely in posting information. Users’ service usage is in accordance with all applicable local laws, state laws and international legal standards. Users must follow:</p>
                    <ol>
                        <li>⑴ Published information must be consistent with China's relevant laws and regulations.</li>
                        <li>⑵ Do not use network registered users engaged in illegal activities.</li>
                        <li>⑶ Do not interfere with or confusion network services.</li>
                        <li>⑷ Comply with all using network registered users service network agreement, rules and regulations, and procedures. Users have the responsibilities of register service activities in ‘Superbuy’. If users spread or disseminate reactionary, pornographic or other information in violation of State law in "Superbuy" registered user services, we will mark the system record as evidence in possible violation of the law and submit to relevant departments.  Meanwhile, simultaneously and immediately delete these messages without informing the users.</li>
                    </ol>
                    <h3 className="aboutTitle">7. Limited liability</h3>
                    <p>‘Superbuy’ for any direct, indirect, incidental, special usage of network member services or any illegal usage of network member in terms of harming or causing ‘Superbuy’ image and reputation damaged, ‘Superbuy’ presents here to reserve rights to pursure compensation for the reputational damage.</p>
                    <h3 className="aboutTitle">8. Refused to provide guarantees</h3>
                    <p>Users agree the usage of email services is users’ responsible for any risks. ‘Superbuy’ clearly states that will not provide any kind of guarantees, either explicit or inexplicit. Users understand and accept all kind of information, which depends on their own, and users are responsible for all risks and liabilities of system damage or information lost.</p>
                    <h3 className="aboutTitle">9. ‘Superbuy’ registered users services information storage and restrictions</h3>
                    <p>‘Superbuy’ does not set the maximum limits for uploading, but the site has the right to judge whether users behavior is followed ‘Superbuy’ registered users services terms and spirit. If users violated services terms, termination of account will be acted. ‘Superbuy’ has all copyrights of all content for the site. If anyone wants to reprint website content, it has to be authorized by ‘Superbuy’, otherwise, it is considered copyright infringement.</p>
                    <h3 className="aboutTitle">10. Exclusion Clause</h3>
                    <ol>
                        <li>(1) Items information the site provided, we will try our best to match the items description and patterns between the sales items and the one posted online. However, due to the fact that during photo taking process, lighting, color background, equipment differences, computer color differences, computer image resolution differences, etc. might affect the outcome. We cannot guarantee that items description will exactly match with the real products, especially in color. All items actual status is the presented outcome.</li>
                        <li>(2) This site will base on users instruction to shop specific products from the specific website. Generally speaking, it takes 6 -15 working days to complete the shopping agent services (this is also based on the ‘international shipping methods’ chosen by users), but this is not final commitment. If the website users provided says out-of-stock, price changes, not deliver on time, any other transporting issues or any irresistible factor, and it has affected us to complete the service, we will immediately communicate with users to solve the issues. For any relevant loss caused to the users, ‘Superbuy’ is not responsible for it.</li>
                        <li>(3) If you need after-sales services (such as item missed, damaged, flawed, etc.), please see Help Center ‘Returns/ Refunds Policy and Process’ for more details. Please note, after-sales service is only applied for 72 after items delivered. If you request it after that period of time, your request will be no longer accepted.</li>
                        <li>(4) Due to users personal reasons caused to parcels unsuccessful delivery, this site is not responsible for it.</li>
                        <li>(5) During shopping agent process, in this site will not accept any agreed conditions between users and sellers. Members of the site will only enjoy sales discounts published by ‘Superbuy’ official website, and cannot enjoy any other discounts from other sellers’ websites.</li>
                        <li>(6) This site cannot accept to shop via shopping agent services for the following items: counterfeit products, prescription medicine, tobacco, lottery and adult magazine & DVD.</li>
                    </ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Wrap content={Content} />,document.getElementsByTagName("body")[0]);


