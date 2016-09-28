import '../../../plugin/less/init.less';
import './src/Wrap.less';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Toolbar from '../Toolbar/Toolbar';
const {apiURL} = window.supervar;

let Content = null;

class Wrap extends React.Component{
    constructor(){
        super();

        this.state = {
            userInfo : {}
        }
    }

    componentWillMount(){
        getUserInfo().then(response => response.json()).then(data => {
            let userInfo = data.state === 0 ? data.data : {notLogin:1};
            this.setState(()=>{
                return {userInfo}
            });
        }).catch(err => {
            this.setState(()=>{
                return {notLogin:1}
            });
        });

        Content = this.props.content;
    }

    /**
     * 通过此方法返回顶部按钮的点击操作会从Footer -> Wrap -> Content
     * **/
    handleBackToTop(){
        try{
            this.refs.content.handleBackToTop();
        }catch(e){}
    }

    /**
     * 通过此方法侧边栏加入购物车+1动画操作会从Content -> Wrap -> Toolbar
     * **/
    handleCartAddOne(){
        this.refs.toolbar.handleAddOne();
    }

    /**
     * 通过此方法侧边栏更新购物车数量操作会从Content -> Wrap -> Toolbar
     * **/
    handleChangeCartNum(n){
        this.setState((state)=>{
            let userInfo = state.userInfo;
            userInfo.cart_num = n;
            return {userInfo}
        })
    }

    render(){
        return(
            <div className="m-wrap">
                <div className="m-main">
                    <Header userInfo={this.state.userInfo} en={this.props.en} cn={this.props.cn} />
                    {/**
                     * 如果Content是函数(一定要传入react class),赋值为他的支持实例.
                     * */}
                     <div className="m-content">
                         {Content.constructor === Function ?
                             <Content
                                 ref="content"
                                 userInfo={this.state.userInfo}
                                 handleCartAddOne={this.handleCartAddOne.bind(this)}
                                 handleChangeCartNum={this.handleChangeCartNum.bind(this)}
                             /> : Content}
                     </div>

                </div>
                <Toolbar userInfo={this.state.userInfo} ref="toolbar" />
                <Footer backToTop={this.props.backToTop} handleBackToTop={this.handleBackToTop.bind(this)} />
            </div>
        )
    }
}

/**
 * 获取用户信息
 * **/
function getUserInfo(){
    return fetch(`${apiURL}user/ajax/userinfo`,{
        method: 'GET',
        credentials: 'include'
    })
}

if(typeof window.supervar !== 'object' || window.supervar === null){
    window.supervar = {};
}

window.supervar.Wrap = Wrap;

export default Wrap;
