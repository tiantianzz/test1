/**
 * author: MG
 * 商家注册页面
 * */

import '../../../less/about/about.less';
import '../../../less/about/joinUs/joinUs.less';
import AboutNav from '../AboutNav';

const {Wrap} = window.supervar;

class Content extends React.Component{
    render(){
        return (
            <div>
                <AboutNav current="joinUs" />

                <div className="aboutBanner joinUsBanner">
                    <h2 className="aboutBanner-inner joinUsBanner-inner">人才召集令-你想要的一个都不能少</h2>
                </div>

                <div className="aboutMain joinUsMain">
                    <h3 className="aboutTitle">
                        <p>跨海侠视员工为企业的第一财富，我们海纳各行各业高精尖人才，真诚开放，唯才是举！欢迎加入我们！</p>
                        <p>简历投递方式：简历邮件发送至jobs@superbuy.com，</p>
                        <p>简历命名方式：姓名-应聘区域-应聘职位</p>
                    </h3>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Wrap content={Content} />,document.getElementsByTagName("body")[0]);


