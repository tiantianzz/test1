/**
 * author: MG
 * 页面头部
 * */

import './src/Header.less';
// import './src/Header.en.less';
import SearchHistory from './src/SearchHistory.js';
import SearchInput from './src/SearchInput.js';
import SubNav from './src/SubNav.js';
import LocalDb from './src/localDb.js';

const {apiURL_login,util,domain} = window.supervar;
const page = `//www.${domain}/en/page/`;
const lang = 'en';

let model = {
    indexHref : page,
    nav: {
        server: {txt: 'Shopping Agent', href: `//buy.${domain}/${lang}/page/shopping/shopping.html`},
        app: {txt: 'APP', href: `${page}appdownload/appDownload.html`},
        tool: {txt: 'Tool', href: 'javascript:;'},
        bbs: {txt: 'BBS', href: `//bbs.${domain}/`},
        help: {txt: 'Help Center', href: `${page}help/`}
    },
    subNav: {
        server: [
            // {txt: 'Shopping Agent', icon: 'header-icon-dg', href: `${page}shopping/shopping.html`},
            // {txt: 'Parcel Forward', icon: 'header-icon-ep', href: `http://ex.${domain}/`},
            // {txt: 'Mall', icon: 'header-icon-mall', href: `http://mall.${domain}/`},
            // {txt: 'Travel', icon: 'header-icon-tour', href: `http://tour.${domain}/`}
        ],
        tool: [
            {txt: 'Shopping<br/>Assistant', icon: 'header-icon-h-dg', href: `//buy.${domain}/views/single/install.html`},
            {txt: 'Delivery Fee<br/>Estimating', icon: 'header-icon-cp', href: 'http://www.dotdotexpress.com/postage/country'},
            {txt: 'Forbidden/Controlled<br/>Items', icon: 'header-icon-limit', href: 'http://www.dotdotexpress.com/tools/post/limit'},
            {txt: 'Package<br/>Tracking', icon: 'header-icon-search', href: 'http://www.dotdotexpress.com/'}
        ]
    },
    userBox: {
        login : {
            txt : 'Log in',
            url : `//login.${domain}/${lang}/page/login/`,
        },
        register : {
            txt : 'Sign up',
            url : `//login.${domain}/${lang}/page/login/?type=register`,
        },
        logout : {
            txt : '[Log out]'
        },
        message : {
            txt : 'message',
            url : `//www.${domain}/account/message/`,
        },
        account : {
            txt : 'Account settings',
            url : `//www.${domain}/account/`,
        },
        shoppingOrder : {
            txt : 'Shopping Agent Order',
            url : `//www.${domain}/order/`,
        },
        // mallOrder : {
        //     txt : '商城订单',
        //     url : `//mall.${domain}/account/goods/`,
        // },
        // tourOrder : {
        //     txt : '旅游订单',
        //     url : `http://tour.dotdotbuy.com/member/?dopost=orderlist&typeid=1`,
        // },
        transshipmentOrder : {
            txt : 'Transshipment Order',
            url : `//www.${domain}/order/diybuy/`,
        },
        parcels : {
            txt : 'My Parcels',
            url : `//www.${domain}/account/package/`,
        },
        cart : {
            txt : 'Shopping Cart',
            url : `//www.${domain}/cart/`,
        },
        warehouse : {
            txt : 'My Warehouse',
            url : `//www.${domain}/account/parcel/`,
        }
    },
    searchTxt: 'Search',
    historyTxt: 'Search history',
    searchBar : {
        placeHolder: 'Search items or paste items URL here',
        txt : 'Shopping Agent'
    }
};

let subNavTimer = null; //防止导航tab bug的timer

function handleNoScroll(event) {
    event.preventDefault();
    return false;
}

function unique(arr) {
    let res = [];
    let json = {};
    arr.forEach(item => {
        if (!json[item]) {
            res.push(item);
            json[item] = 1;
        }
    });
    return res;
}

let historyDb = new LocalDb('searchHistory');
function getHistory() {
    historyData = historyDb.get('searchData') || [];
    return historyData;
}
function setHistory(value) {
    if (typeof value === 'string') {
        historyData.unshift(value);
        historyData = unique(historyData);
        if (historyData.length > 5) {
            historyData = historyData.slice(0, 5)
        }
        historyDb.set('searchData', historyData);
    }

}
let historyData = getHistory();

let scrollEventName = window.navigator.userAgent.indexOf('Firefox') != -1 ? 'DOMMouseScroll' : 'mousewheel';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            showSearch: false, //搜索框显示状态
            showSubNav: false, //下拉导航显示状态
            subNavType: '', //下拉菜单显示类型(server:服务,tool:工具)
            searchBarWidth : 660
            // langActive: false  //是否激活选择语言菜单
        }
    }

    handleToggleSearch() {

        this.setState(function (state) {
            let searchBarWidth = this.refs.searchInput.handleGetSeachBarWidth() || state.searchBarWidth;
            if(!state.showSearch){

            }

            return {showSearch: !state.showSearch,searchBarWidth};
        });
    }

    handleHideSearch() {
        this.setState(function () {
            return {showSearch: false};
        });
    }

    handleSearch(txt) {
        txt = txt.trim();
        if(txt === '') return;

        setHistory(txt);
        if(/^https?:\/\//.test(txt)){
            window.location.href = `${page}buy/?url=${encodeURIComponent(txt)}`;
        }else{
            window.location.href = `${page}search/?keyword=${encodeURIComponent(txt)}`;
        }
    }

    handleShowSubNav(type) {
        clearTimeout(subNavTimer);

        this.setState(function () {
            return {
                showSubNav: true,
                subNavType: type === 'inherit' ? this.state.subNavType : type
            };
        });

    }

    handleHideSubNav() {

        clearTimeout(subNavTimer);

        subNavTimer = setTimeout(() => {
            this.setState(() => {
                return {
                    showSubNav: false
                };
            });
        }, 180);
    }

    handleChangeLang(type){
        if(type === 'cn' || type === 'en'){
            util.setCookie('googtrans',`/zh-CN/${type === 'cn' ? 'zh-CN' : 'en'}`,30,`.${domain}`);
            util.setCookie('googtrans',`/zh-CN/${type === 'cn' ? 'zh-CN' : 'en'}`,30);
            util.setCookie('lang',type === 'cn' ? 'zh-cn' : 'en-us',365,`.${domain}`);
            window.location.href = this.props[type] ? this.props[type] : window.location.href.replace(type === 'cn' ? /\/en\// : /\/cn\//,`/${type}/`);
        }
    }

    handleHideAvatar(){
        this.refs.avatar.style.display = 'none';
    }

    handleLogout(){
        fLogout().then(response => response.json()).then(data => {

            if(data.state === 0){
                // console.log('已登出');
                // window.location.href = lang === 'cn' ? `//www.${domain}` : page;
                window.location.reload();
            }
        }).catch(err => {
            console.log(err)
        });

    }

    componentDidUpdate() {
        const body = document.body;
        this.state.showSearch ? body.addEventListener(scrollEventName, handleNoScroll, false) : body.removeEventListener(scrollEventName, handleNoScroll);
    }

    componentWillMount(){

        let language = util.getCookie('lang') || (navigator.language || navigator.browserLanguage).toLowerCase();

        if(language === 'en-us' && lang === 'cn'){
            this.handleChangeLang('en');
        }else if((language === 'zh-cn' || !language) && lang === 'en'){
            this.handleChangeLang('cn');
        }
    }

    render() {
        let userInfo = this.props.userInfo;

        return (
            <header className={(this.state.showSearch && historyData.length > 0 ? 'active-history' : '') + ' m-header'}>
                <div className='header-wrap'>
                    <div className={(this.state.showSearch ? 'active-search' : '') + ' header-main'}>
                        <h1 className="header-logo"><a href={model.indexHref}>superbuy</a></h1>
                        <div className="header-infoBar clearfix">
                            <div style={{display: this.state.showSearch ? 'block' : 'none'}} className="header-infoBar-mask"></div>
                            {(() => {
                                if(userInfo.user_id){
                                    return (
                                        <div className="header-userInfo">
                                            <div className="header-user">
                                                <div className="header-user-top">
                                                    <a className="header-avatar" href={model.userBox.account.url} target="_blank">{userInfo.avatar ? <img src={userInfo.avatar} onError={this.handleHideAvatar.bind(this)} /> : ''}</a>
                                                    <a className="header-username" href={model.userBox.account.url} target="_blank">{this.props.userInfo.user_name}</a>
                                                    <a className="header-logout" href="javascript:;" onClick={this.handleLogout.bind(this)}>{model.userBox.logout.txt}</a>
                                                </div>
                                                <ul>
                                                    <li><a href={model.userBox.shoppingOrder.url} target="_blank">{model.userBox.shoppingOrder.txt}<i></i></a></li>
                                                    {/*<li><a href={model.userBox.transshipmentOrder.url} target="_blank">{model.userBox.transshipmentOrder.txt}<i></i></a></li>*/}
                                                    {/*<li><a href={model.userBox.mallOrder.url} target="_blank">{model.userBox.mallOrder.txt}<i></i></a></li>*/}
                                                    <li><a href={model.userBox.warehouse.url} target="_blank">{model.userBox.warehouse.txt}<i></i></a></li>
                                                    <li><a href={model.userBox.parcels.url} target="_blank">{model.userBox.parcels.txt}<i></i></a></li>
                                                </ul>
                                            </div>
                                            <a href={model.userBox.message.url} className={(userInfo.message_num ? 'active' : '') + ' header-message'} target="_blank">
                                                <span>{model.userBox.message.txt}</span>
                                                <i></i>
                                                <em>(<strong>{userInfo.message_num > 99 ? "99+" : userInfo.message_num}</strong>)</em>
                                            </a>
                                        </div>
                                    );

                                }else{
                                    return (
                                        <div className="header-user">
                                            <div className="header-user-top" href={model.userBox.login.url}>
                                                <a className="header-avatar" style={{cursor:"default"}}></a>
                                                <a href={model.userBox.login.url}>{model.userBox.login.txt}</a>
                                                <span style={{width:"3px",color:"#999"}}>|</span>
                                                <a href={model.userBox.register.url}>{model.userBox.register.txt}</a>
                                            </div>
                                            <ul>
                                                <li><a href={model.userBox.shoppingOrder.url} target="_blank">{model.userBox.shoppingOrder.txt}<i></i></a></li>
                                                {/*<li><a href={model.userBox.transshipmentOrder.url} target="_blank">{model.userBox.transshipmentOrder.txt}<i></i></a></li>*/}
                                                {/*<li><a href={model.userBox.mallOrder.url} target="_blank">{model.userBox.mallOrder.txt}<i></i></a></li>*/}
                                                <li><a href={model.userBox.warehouse.url} target="_blank">{model.userBox.warehouse.txt}<i></i></a></li>
                                                <li><a href={model.userBox.parcels.url} target="_blank">{model.userBox.parcels.txt}<i></i></a></li>
                                            </ul>
                                        </div>
                                    )
                                }
                            })()}

                            <ul className="header-lang">
                                <li className="active">{lang === 'en' ? 'English（EN）' : '中文（ZH）'}<i className="header-lang-ico"></i><i className="header-down"></i></li>
                                {this.props[lang === 'en' ? 'cn' : 'en'] !== false && <li onClick={this.handleChangeLang.bind(this,lang === 'en' ? 'cn' : 'en')}>{lang === 'en' ? '中文（ZH）' : 'English（EN）'}<i className="header-lang-ico"></i><i className="header-down"></i></li>}
                            </ul>
                        </div>

                        <div className="header-navBar clearfix">
                            <ul className="header-nav">
                                <li>
                                    <a href={model.nav.server.href} target="_blank">{model.nav.server.txt}</a>
                                </li>
                                <li>
                                    <a href={model.nav.app.href} target="_blank">{model.nav.app.txt}</a>
                                </li>
                                <li>
                                    <a href={model.nav.bbs.href} target="_blank">{model.nav.bbs.txt}</a>
                                </li>
                                <li>
                                    <a href={model.nav.help.href} target="_blank">{model.nav.help.txt}</a>
                                </li>
                            </ul>
                            <i className="header-search-btn" title={model.searchTxt} onClick={this.handleToggleSearch.bind(this)}></i>

                            <SearchInput
                                ref="searchInput"
                                model={model.searchBar}
                                handleSearch={this.handleSearch.bind(this)}
                                handleHideSearch={this.handleHideSearch.bind(this)}
                                showSearch={this.state.showSearch}
                            />
                        </div>


                    </div>

                    <SubNav
                        list={model.subNav}
                        handleShowSubNav={this.handleShowSubNav.bind(this)}
                        handleHideSubNav={this.handleHideSubNav.bind(this)}
                        showSubNav={this.state.showSubNav}
                        subNavType={this.state.subNavType}
                    />

                    <SearchHistory
                        searchBarWidth={this.state.searchBarWidth}
                        txt={model.historyTxt}
                        history={historyData}
                        handleSearch={this.handleSearch.bind(this)}
                        showSearch={this.state.showSearch}
                    />

                </div>
            </header>

        );
    }
}

/**
 * 登出
 * **/
function fLogout(){
    return fetch(`${apiURL_login}/api/site/logout`,{
        method: 'GET',
        credentials: 'include'
    })
}

export default Header;