/**
 * author: MG
 * 页面右侧边栏
 * */

import './src/Toolbar.less';
import './src/Toolbar.en.less';

const {domain,imgsrc_cn} = window.supervar;
const page = `//www.${domain}/en/page/`;

let model = {
    buttons: [
        // {txt: 'Shopping Cart', icon: 'toolBar-icon-cart', href: `//www.${domain}/cart/`},
        // {txt: 'My Warehouse', icon: 'toolBar-icon-pkg', href: `//www.${domain}/account/parcel/`},
        // {txt: 'QQ Group', icon: 'toolBar-icon-qq', href: `${page}help/#qq`},
        {txt: 'Customer Service', icon: 'toolBar-icon-online', href: 'http://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&configID=126398&jid=3783013802&skillId=6967&lan=en&pagetitle=%E8%8B%B1%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2&enterurl=%E8%8B%B1%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2'},
        {txt: 'Feedback', icon: 'toolBar-icon-advice', href: `http://bbs.${domain}/forum.php?mod=post&action=newthread`},
        {txt: 'Our Team', icon: 'toolBar-icon-group', href: `${page}about/aboutUs/`}
    ],
    menuTxt: '',
    hideTxt: 'Off',
    showTxt: 'On',
    QRCodeTxt: 'Download APP',
    CartTxt: 'Shopping Cart',
    PkgTxt: 'My Warehouse'
};

class Toolbar extends React.Component {
    constructor() {
        super();
        this.state = {
            showToolBar: true,
            addOneActive: false
        }
    }

    handleToggleToolBar() {
        this.setState(state => {
            return {showToolBar: !state.showToolBar};
        })
    }

    handleAddOne(){
        this.setState((state)=>({
            addOneActive : true
        }));
        this.removeAddOne();
    }

    removeAddOne(){
        setTimeout(()=>{
            this.setState((state)=>({
                addOneActive : false
            }))
        },1800)
    }

    render() {
        return (
            <aside className={(this.state.showToolBar ? 'toolBar-show' : '') + ' m-toolBar'}>
                <ul>
                    <li id="toolbar-QRCode">
                        <a href={`//www.${domain}/downloads/`} target="_blank">
                            <i className="toolBar-icon toolBar-icon-app"></i>
                            <div>
                                <img src={`${imgsrc_cn}Toolbar/QRCode.png`} alt="QRCode"/>
                                <p>{model.QRCodeTxt}</p>
                            </div>
                        </a>
                    </li>
                    <li id="toolbar-Cart" className={this.state.addOneActive ? "active" : ''}>
                        <a href={`//www.${domain}/cart/`} target="_blank">
                            <i className="toolBar-icon toolBar-icon-cart"></i>
                            <span className="toolBar-text">{model.CartTxt}</span>
                            <strong style={{display:this.props.userInfo.cart_num - 0 ? 'block' : 'none'}} className="toolBar-number">{this.props.userInfo.cart_num}</strong>
                            <em>+1</em>
                        </a>
                    </li>
                    <li>
                        <a href={`//www.${domain}/account/parcel/`} target="_blank">
                            <i className="toolBar-icon toolBar-icon-pkg"></i>
                            <span className="toolBar-text">{model.PkgTxt}</span>
                            <strong style={{display:this.props.userInfo.storage_num - 0 ? 'block' : 'none'}} className="toolBar-number">{this.props.userInfo.storage_num}</strong>
                        </a>
                    </li>
                    {model.buttons.map(item => {
                        return (
                            <li id={item.id}>
                                <a href={item.href} target="_blank">
                                    <i className={item.icon + ' toolBar-icon'}></i>
                                    <span className="toolBar-text">{item.txt}</span>
                                </a>
                            </li>
                        );
                    })
                    }
                    <li className="toolBar-menu">
                        <a href="javascript:;" onClick={this.handleToggleToolBar.bind(this)}>
                            <i className="toolBar-icon toolBar-icon-menu"></i>
                            <span className="toolBar-text">{this.state.showToolBar ? model.hideTxt : model.showTxt}{model.menuTxt}</span>
                        </a>
                    </li>
                </ul>
            </aside>
        );
    }
}

export default Toolbar;
