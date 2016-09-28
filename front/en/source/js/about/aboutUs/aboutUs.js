/**
 * author: MG
 * 关于我们页面
 * */

import '../../../less/about/about.less';
import '../../../less/about/aboutUs/aboutUs.less';
import AboutNav from '../AboutNav';

const {imgsrc_cn,Wrap} = window.supervar;

const slideModel = [
    {image : `${imgsrc_cn}about/aboutUs/aboutUs_slide04.jpg`},
    {image : `${imgsrc_cn}about/aboutUs/aboutUs_slide05.jpg`},
    {image : `${imgsrc_cn}about/aboutUs/aboutUs_slide06.jpg`},
    {image : `${imgsrc_cn}about/aboutUs/aboutUs_slide01.jpg`},
    {image : `${imgsrc_cn}about/aboutUs/aboutUs_slide02.jpg`},
    {image : `${imgsrc_cn}about/aboutUs/aboutUs_slide03.jpg`}
];

class Slide extends React.Component{

    constructor(){
        super();

        this.state = {
            active : 0 //当前最左边item的索引
        }
    }
    componentWillMount(){
        this.maxActive = this.props.items.length - 3;
    }
    handleSlideAdd(){
        this.setState(state => ({
            active : state.active >= this.maxActive ? 0 : ++state.active
        }))
    }
    handleSlideReduce(){
        this.setState(state => ({
            active : state.active <= 0 ? this.maxActive : --state.active
        }))
    }
    render(){
        return (
            <div className="Slide">
                <ul style={{left:`${- this.state.active * 223}px`}}>
                    {this.props.items.map((item,i) =>
                        <li ref={`item-${i}`}><img src={item.image}/></li>
                    )}
                </ul>
                <i className="Slide-btn" onClick={this.handleSlideReduce.bind(this)}> </i>
                <i className="Slide-btn" onClick={this.handleSlideAdd.bind(this)}> </i>
            </div>
        )
    }
}

class Content extends React.Component{
    render(){
        return (
            <div>
                <AboutNav current="aboutUs" />

                <div className="aboutBanner aboutUsBanner">
                    <h2 className="aboutBanner-inner aboutUsBanner-inner">为全球用户提供购买大中华商品服务</h2>
                </div>

                <div className="aboutMain aboutUsMain">
                    <p style={{marginTop:'50px'}}><i className="aboutUs-logo" title="superbuy">Superbuy</i> is founded by one of the co-founders from Tencent Holding Ltd (0700.HK) in 2012, Mr Haixing Gong, which is a leader of e-commerce platforms for overseas customers to purchase greater China’s products. Since it has established for 3 years, millions of overseas Chinese from hundreds of countries worldwide used its services and love it, which has positive reputation within global users and has become the model in the industry.</p>
                    <Slide items={slideModel}/>
                    <p>Core team members are from leading organizations of Chinese internet industries and traditional industries. Through the combination of internet mindset and traditional service awareness, Superbuy provides the best services they can to its global users in shopping Chinese products. From purchasing, inspection, storage, delivery to after-sales services, <i className="aboutUs-logo" title="superbuy">Superbuy</i> offers one-stop service to its users in order to solve service gaps, such as product information dissymmetry, expensive shipping fee, difficulties to contact after-sales services, etc., and to easily and securely satisfy users cross-boarders shopping needs. Meanwhile, Superbuy offers global organizations batches business services in terms of sharing global market value for them.</p>
                    <p>In 2016, our business has been rapidly developing more suppliers from Hong Kong, Taiwan and other greater China regions, and potential users will be expanded to non-Chinese ones. ‘Create the best product + provide the best service, be the best cross-borders shopping servant’, <i className="aboutUs-logo" title="superbuy">Superbuy</i> will spend all the efforts to change the cross-borders e-commerce industry in order to revolutionary upgrade global users’ shopping experiences. Wishing to satisfy every single user.</p>
                    <br/>
                    <p>If you have any suggestions or expectations to <i className="aboutUs-logo" title="superbuy">superbuy</i>, please do not hesitate to contact our CEO <a href="mailto:CEO@superbuy.com">(CEO@superbuy.com)</a>.</p>
                    <br/>
                    <p className="aboutUs-number"><strong>70</strong>countries/regions,<strong>1,000,000</strong>users</p>
                    <img src={imgsrc_cn + 'about/aboutUs/aboutUs_pic02.jpg'} alt="我们都在用superbuy" width="1200" height="416" />
                </div>

                <div className="aboutUs-bottom">
                    <img src={imgsrc_cn + 'about/aboutUs/aboutUs_pic03.png'} alt="" />
                </div>

            </div>
        );
    }
}

ReactDOM.render(<Wrap content={Content} />,document.getElementsByTagName("body")[0]);


