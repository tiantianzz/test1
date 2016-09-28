import '../../less/faq/faq.less';

/* your logic code */
class Content extends React.Component{
    render(){
        return(
            <div className="container" id="top">
                <div className="banner">
                    <img src="../faq/img/images/banner_02.jpg" alt="Know SuperBuy in 15 Questions"/>
                </div>
                <div className="return_icon">
                    <a href="#top">
                        <img src="../faq/img/images/icon.jpg" alt=""/>
                    </a>
                </div>
                <div className="content">
                    <div className="questions">
                        <div>
                            <a href="#ans_01">
                                <em><i>01</i></em>
                                <i className="clear"></i>
                                <i>什么是代购服务？流程是怎样的？如何收费呢？</i>
                            </a>
                        </div>
                        <div>
                            <a href="#ans_02">
                                <em><i>02</i></em>
                                <i className="clear"></i>
                                <i>为什么要买中国的东西？感觉有很多假冒伪劣啊!</i>
                            </a>
                        </div>
                        <div>
                            <a href="#ans_03">
                                <em><i>03</i></em>
                                <i className="clear"></i>
                                <i>市场上有很多代购网站，为什么我要选择你们？</i>
                            </a>
                        </div>
                        <div>
                            <a href="#ans_04">
                                <em><i>04</i></em>
                                <i className="clear"></i>
                                <i>淘宝现在也有海外版，可以直接寄送到海外了，我在淘宝买就可以了？</i>
                            </a>
                        </div>
                        <div>
                            <a href="#ans_05">
                                <em><i>05</i></em>
                                <i className="clear"></i>
                                <i>在网上跨境买东西我总是担心买回来的商品有问题，或者快递服务出问题，你们只是一个代购商，会对这些情况负责吗？ </i>
                            </a>
                        </div>
                        <div>
                            <a href="#ans_06">
                                <em><i>06</i></em>
                                <i className="clear"></i>
                                <i>我想买很大型的东西，但通过普通快递费用很高，你们能给出更便宜的价格吗？</i>
                            </a>
                        </div>
                        <div>
                            <a href="#ans_07">
                                <em><i>07</i></em>
                                <i className="clear"></i>
                                <i>我想买食品、液体、电器等等，都能寄吗？</i>
                            </a>
                        </div>
                        <div>
                            <a href="#ans_08">
                                <em><i>08</i></em>
                                <i className="clear"></i>
                                <i>我对中国的商品不太了解，怕买贵了或买的不合适，你们会帮忙吗？</i>
                            </a>
                        </div>
                        <div>
                            <a href="#ans_09">
                                <em><i>09</i></em>
                                <i className="clear"></i>
                                <i>我有自己的生意，可以跟你们合作吗？</i>
                            </a>
                        </div>
                        <div>
                            <a href="#ans_10">
                                <em><i>10</i></em>
                                <i className="clear"></i>
                                <i>你们除了代购以外还能提供其他涉及跨境的服务吗？我什么事都能找你们吗？</i>
                            </a>
                        </div>
                        <div>
                            <a href="#ans_11">
                                <em><i>11</i></em>
                                <i className="clear"></i>
                                <i>我对你们的某次服务非常生气，怎样才能让我平静下来？</i>
                            </a>
                        </div>
                        <div>
                            <a href="#ans_12">
                                <em><i>12</i></em>
                                <i className="clear"></i>
                                <i>你们什么服务费用都不收怎么维持啊？我可以捐钱给你们吗？</i>
                            </a>
                        </div>
                    </div>
                    <div className="answers">
                        <div id="ans_01">
                            <div className="title">
                                <em>01</em>
                                <i>什么是代购服务？流程是怎样的？如何收费呢？</i>
                            </div>
                            <div className="detail">
                                <p>
                                    代购服务是我们的核心服务，由我们按照用户指示为其在中国购买商品，并提供购买建议、质量检验、存储、寄送、售后服务等一条龙服务，确保用户收到满意的商品，使用我们的代购服务会比自己购买更简单轻松，且有更好的结果。
                                </p>
                                <em>用户只需要下载我们的App或者登陆我们的网页，就可以购买自己想要的商品，还可以以当地货币支付。代购流程如下：</em>
                                <table cellPadding="0" cellSpacing="0">

                                    <tr>
                                        <td>01</td>
                                        <td>使用我们的app或登录我们的网站挑选需要我们代购的商品，或提供商品具体信息，我们将为您采购。-- 在这一步我们会根据商品给出有关邮寄和购买的提示与建议，甚至协助您寻找更理想的商品 </td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td>商品到达我们的仓库，我们将为您检验并入库。-- 您可以使用我们的仓库免费保存6个月</td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td>您在自己觉得合适的时间指示我们将商品寄送给您。-- 如果您不赶时间可以多集齐一些商品寄送，比较节省运费。</td>
                                    </tr>
                                    <tr>
                                        <td>04</td>
                                        <td>无论商品是在途还是已经送到您的手上，我们的客户服务都会对您负责，协助您解决任何售后问题 <br/>
                                            0服务费是我们的服务理念，客户只需要支付商品费与运费即可，无需支付额外的服务费。但这不代表我们会在服务质量上有所妥协，恰恰相反我们的目标是提供业内最优质的服务，我们欢迎用户随时将我们与其他同业的收费以及服务质量进行比较  (<a href="http://www.dotdotbuy.com/html/about/pages/compare.html" target="_blank">点击查看对比</a>).
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div id="ans_02">
                            <div className="title">
                                <em>02</em>
                                <i>为什么要买中国的东西？感觉有很多假冒伪劣啊!</i>
                            </div>
                            <div className="detail">
                                <p>
                                    我们的专家服务队会给我们的客户提供更加专业的建议和推荐，而且我们也会检测商品质量，对有疑问的商品会在寄送前及时与用户沟通确认并协助用户直接进行退还，尽可能的避免用户收到预期之外的商品而浪费时间与金钱。另外也因为随着中国经济发展，生活中越来越多有趣、有特色、有质量的商品都是来自中国。
                                </p>
                            </div>
                        </div>
                        <div id="ans_03">
                            <div className="title">
                                <em>03</em>
                                <i>市场上有很多代购网站，为什么我要选择你们？</i>
                            </div>
                            <div className="detail">
                                <p>SuperBuy的创始人其实也是市值超过2000亿美金的腾讯控股创办人之一，SuperBuy团队的理想是打造最好的购物服务，所以首先能够有强大的研发实力推出非常好用的产品，并且有很多首创的用户受惠措施，比如完全免服务费、7x24小时客户服务、最优汇率承诺、意外赔付承诺等，我们坚持将自己与同行的对比在网站公开，并直接显示同行的名称方便用户核实，非常透明。<br/>
                                    由此就可以看出我们对自己的产品和服务多么有自信。 费用低又服务好，你可能不会相信，但这就是一个有理想的团队所打造的真实结果，因此SuperBuy在网络上的用户口碑也非常好，非常值得尝试。
                                </p>
                            </div>
                        </div>
                        <div id="ans_04">
                            <div className="title">
                                <em>04</em>
                                <i>淘宝现在也有海外版，可以直接寄送到海外了，我在淘宝买就可以了？</i>
                            </div>
                            <div className="detail">
                                <p>
                                    淘宝只是一个平台，是单个卖家的商品直发海外，而我们是一个服务者。淘宝跟我们最大的差异是以下三点： 验货服务，合并运送，与售后的保障。
                                    <br/>
                                    我们为客户提供验货服务从而减低客户退货或不满意的问题。也可以将多个商家的不同商品拆除外包装入库，并一起打包寄往海外，节省大笔包裹运费。最后我们对用户遇到的商品和物流问题都会负责，提供细致的售后客户服务，这也是淘宝无法提供的。总之我们不像淘宝只是一个提供买卖双方交易的平台，而是对买方进行服务和负责，是用户可以依赖的朋友。
                                </p>
                            </div>
                        </div>
                        <div id="ans_05">
                            <div className="title">
                                <em>05</em>
                                <i>在网上跨境买东西我总是担心买回来的商品有问题，或者快递服务出问题，你们只是一个代购商，会对这些情况负责吗？</i>
                            </div>
                            <div className="detail">
                                <p>
                                    正如前面所说，SuperBuy不只是完成代购这个行为，还会提供强有力的售后保障服务，包括商品质量问题和物流问题。我们不会像一般平台那样把责任推给卖家和物流公司，我们是客户可以依赖的朋友，我们独家提供7x24小时客户服务，专业的中英文客服团队会为你认真跟进任何问题，直到您的问题解决为止，用户至上是我们的宗旨。
                                </p>
                            </div>
                        </div>
                        <div id="ans_06">
                            <div className="title">
                                <em>06</em>
                                <i>我想买很大型的东西，但通过普通快递费用很高，你们能给出更便宜的价格吗？</i>
                            </div>
                            <div className="detail">
                                <p>
                                    当然可以，我们有合作的物流商，比如说我们已经和DHL签订了大件服务，并可提供海运服务，我们对任何大件寄送都会给出特别方案，详情请看 <a href="" target="_blank">大件寄送</a>通过我们邮寄，可以为您推荐最合适物流方式，以更便宜的价格寄出。
                                </p>
                            </div>
                        </div>
                        <div id="ans_07">
                            <div className="title">
                                <em>07</em>
                                <i>我想买食品、液体、电器等等，都能寄吗？</i>
                            </div>
                            <div className="detail">
                                <p>
                                    不用担心，只要是合法的商品我们会尽可能的给您提供寄送帮助。一些特殊商品会因为国家不同而有不同限制，详情您可以咨询客服。
                                </p>
                            </div>
                        </div>
                        <div id="ans_08">
                            <div className="title">
                                <em>08</em>
                                <i>我对中国的商品不太了解，怕买贵了或买的不合适，你们会帮忙吗？</i>
                            </div>
                            <div className="detail">
                                <p>
                                    当然可以，您可以将您购买需求告知我们，我们 <a href="http://www.dotdotbuy.com/account/expertservice/expert-question
" target="_blank">专家服务</a>会为您选购国内网站信誉好、价格实惠的同类商品。
                                </p>
                            </div>
                        </div>
                        <div id="ans_09">
                            <div className="title">
                                <em>09</em>
                                <i>我有自己的生意，可以跟你们合作吗？</i>
                            </div>
                            <div className="detail">
                                <p>
                                    当然可以，如果您有合作意向，可以访问我们的 <a href="" target="_blank">大客户专页</a>，我们市场部的同事将与您沟通，希望合作愉快！
                                </p>
                            </div>
                        </div>
                        <div id="ans_10">
                            <div className="title">
                                <em>10</em>
                                <i>你们除了代购以外还能提供其他涉及跨境的服务吗？我什么事都能找你们吗？</i>
                            </div>
                            <div className="detail">
                                是的，我们现在还提供全球旅游门票订购和个性化旅游服务。而且不仅于此，我们的跨国团队中有各行各业的资深人士，并且拥有多个国家的合作者，如果您有其他跨境的需求或想法，如果在中国寻找一个商业机会、在马来西亚为自己建造一座专业天文台、或者不知道某个商品能在哪个国家买到，都可以跟我们联系，也许我们能提供协助，我们的目标是成为用户在遇到跨国需求时可依赖的朋友。
                            </div>
                        </div>
                        <div id="ans_11">
                            <div className="title">
                                <em>11</em>
                                <i>我对你们的某次服务非常生气，怎样才能让我平静下来？</i>
                            </div>
                            <div className="detail">
                                <p>
                                    如果您对我们的服务有不满意的地方，可以随时联系我们的24小时在线客服，将您的问题反馈给我们。 当然，您也可以直接联系我们的CEO（ceo@superbuy.com），直接表达您的用户体验，因为我们的理念是用户至上，所以我们绝对不会接受自己的服务让用户感觉不快，一定会坚持聆听和彻底解决用户遇到的问题。
                                </p>
                            </div>
                        </div>
                        <div id="ans_12">
                            <div className="title">
                                <em>12</em>
                                <i>你们什么服务费用都不收怎么维持啊？我可以捐钱给你们吗？</i>
                            </div>
                            <div className="detail">
                                <p>目前我们的想法就是为用户提供最优质的服务，我们坚信当越来越多的用户认同我们的时候，我们一定会获得回报。您能留下来并向我们给出意见和建议，以及把我们介绍给您的亲朋好友就是对我们最大的回报与感谢。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


var Wrap = window.supervar.Wrap;
var content=ReactDOM.render(
    <Wrap content={Content} />,
    document.body
);