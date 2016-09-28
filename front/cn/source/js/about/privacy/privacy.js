/**
 * author: MG
 * 联系我们页面
 * */

import '../../../less/about/about.less';
import '../../../less/about/privacy/privacy.less';
import AboutNav from '../AboutNav';

const {imgsrc_cn : imgsrc,Wrap} = window.supervar;

class Content extends React.Component{
     render(){
        return (
            <div>
                <AboutNav current="privacy" />
                <div className="aboutBanner privacyBanner">
                    <div className="aboutBanner-inner privacyBanner-inner">
                        <i className="aboutBanner-icon privacyBanner-icon"></i>
                        <div className="aboutBanner-txt">
                            <h2>隐私声明</h2>
                            <p>隐私条款和信息保护</p>
                        </div>
                    </div>
                </div>
                <div className="aboutMain privacyMain">
                    <p>保护您的隐私对我们很重要十分重要。我们将尽力为您的个人资料保密。确保您明白和了解《superbuy客户隐私条款》，能使我们为您提供最佳的服务。请费少许时间阅读下列条款，以了解我们是怎样处理您的个人资料。</p>
                    <h3 className="aboutTitle">一、我们收集的个人信息的内容</h3>
                    <p>通常情况下，您可以在因特网上访问我公司而无需告诉我们您是谁，也无需提供有关您的任何个人信息。不过，我们或我们的合作伙伴有时可能需要您提供信息。您可以选择在各种情形下向我们提供可以提供的个人信息。例如：您可以根据您的选择向我们提供姓名、联系电话或电子信箱等可以提供的内容，以便我们与您联系、提供上门服务等内容。您还可以向我们描述您的教育程度和工作经验，以便成为我们的合作者，参与我公司的项目。在向您收集信息之前，我们希望让您了解我们将如何使用这些信息，并就收集与使用这些信息获得您的许可。如果您向我们提供有关他人（如配偶或工作同事）的个人信息，我们将假定您已经得到了他们的许可。</p>
                    <h3 className="aboutTitle">二、我们为何收集您的个人信息</h3>
                    <p>我公司收集和使用您的个人资料以便给您最优的客户服务，让您能最方便地享用我们的服务，并非常乐意接受您给我们提出的宝贵的意见的建议。使我们为您服务的范围更为广泛。</p>
                    <h3 className="aboutTitle">三、我们怎样收集您的个人信息</h3>
                    <p>在网站上我们只会从客户留言上获得您的个人信息。<br /><strong>注意：</strong>我们不会在监护人许可之外、不知情和不在场的情况下，向儿童或其他没有自我行为负责能力的人征求个人信息，也不会向他们发出索取个人信息的请求。</p>
                    <h3 className="aboutTitle">四、我们怎样使用您的个人信息</h3>
                    <p>您为我们提供的个人信息将在您许可的情况下用于以下用途：</p>
                    <ol>
                        <li>1、供我们使用，以满足您的请求。</li>
                        <li>2、与您保持联系，以开展客户满意度调查、市场研究或某些事务的处理。</li>
                        <li>3、供我们或适当机构用于市场营销目的。</li>
                        <li>4、用于客户数量统计等不记名的数据分析。</li>
                        <li>5、帮助发展我们的业务关系，假如您是我们的合作伙伴或业务伙伴</li>
                    </ol>
                    <h3 className="aboutTitle">五、我们怎样保护您的个人信息</h3>
                    <p>
                        当我们向您收集信息时，将明确而全面的向您介绍这些信息今后的使用情况，您可以根据个人的意愿向我们提供全部或部分我们想要收集的信息，同时你也有权告诉我们希望某些信息用于哪些用途或不要将某些信息用于哪些用途，我们会尊重您的意愿。我公司保障您以实物、电子等方式提供给我们的信息数据的安全和质量。
                        <br/><strong>注意：</strong>
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 一些国家、地区或组织可能未颁布严格的法律、规章来保护您的信息。在这些地区或组织内，我公司将仍然按照本条款所描述的方式处理您的信息。
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 希望您能够清楚，在某些情况下，法律规定需要公开的信息，按照司法或其它政府传唤、搜查证或判令，可能需要公开个人信息。
                    </p>
                    <h3 className="aboutTitle">六、您如何监督个人信息的使用</h3>
                    <p>一般情况下，我们在收集您的个人信息时将就使用您的个信息向你征求许可。如果您有要求，我们也可以在每次使用前向您征求许可。您也可以通过报刊、网络等各种途径主动了解您的这些信息的使用情况。如果发现未经您的授权而被使用了您的个人信息，您可以通过电话或网络与我们取得联系，共同就此调查问题的根源，采取保护措施，以便确保您的个人隐私的安全。</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Wrap content={Content} />,document.getElementsByTagName("body")[0]);


