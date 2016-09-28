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
                    <p style={{marginTop:'50px'}}><i className="aboutUs-logo" title="superbuy">superbuy</i>于2012年由腾讯控股（0700.HK）创始成员之一的<em>贡海星</em>先生发起成立，是海外用户网购中国的领先品牌，成立3年来已经为全球100多个国家的用户提供极具美誉的中国电商购物服务，在全球用户群中有极高的美誉度，深受全球用户的喜爱，并成为诸多同业的模仿对象。</p>
                    <Slide items={slideModel}/>
                    <p>公司核心成员来自中国互联网及传统行业的重量级企业。通过互联网思维与传统服务意识的结合，为全球用户提供优质的购买中国商品服务，覆盖代购、检验、仓储、寄送、售后等所有环节。以一站式服务让消费者彻底告别信息不对称、运费昂贵、售后困难等问题，便利且安心的满足自己的跨境购物需求。<i className="aboutUs-logo" title="superbuy">Superbuy</i>同时也向世界各地企业商家提供批量商业服务，让更多的商家能分享世界大市场的价值。</p>
                    <br/>
                    <p>2016年业务开始全面扩展提速，货源地将扩展到香港、台湾等大中华地区，用户范围将扩展到全球多语种用户。“打造极致产品+极致服务， 做最好的跨境购物神器”，<i className="aboutUs-logo" title="superbuy">superbuy</i>将通过自己的努力改变跨境电商行业，为世界消费者的购物体验带来革命性的提升，期待能为每一位消费者带来快乐。</p>
                    <br/>
                    <p>如对<i className="aboutUs-logo" title="superbuy">superbuy</i>有任何意见与期待，欢迎随时联系我们的CEO<a href="mailto:CEO@superbuy.com">（CEO@superbuy.com）</a>。</p>
                    <p className="aboutUs-number"><strong>70</strong>个国家/地区,<strong>1,000,000</strong>用户</p>
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


