/**
 * author: MG
 * 页面头部
 * */

import './src/Header.less';

import SearchHistory from './src/SearchHistory.js';
import SearchInput from './src/SearchInput.js';
import SubNav from './src/SubNav.js';
import LocalDb from './src/localDb.js';

const page = '/cn/page/';

let model = {
    indexHref : page,
    nav: {
        server: {txt: '服务', href: 'javascript:;'},
        app: {txt: 'APP', href: '/downloads/'},
        tool: {txt: '工具', href: 'javascript:;'},
        help: {txt: '帮助中心', href: `${page}help/`}
    },
    subNav: {
        server: [
            {txt: '代购', icon: 'header-icon-dg', href: `${page}shopping/shopping.html`},
            {txt: '转运', icon: 'header-icon-ep', href: 'http://ex.dotdotbuy.com/'},
            {txt: '商城', icon: 'header-icon-mall', href: 'http://mall.dotdotbuy.com/'},
            {txt: '旅游', icon: 'header-icon-tour', href: 'http://tour.dotdotbuy.com/'}
        ],
        tool: [
            {txt: '购物助手', icon: 'header-icon-h-dg', href: 'http://buy.dotdotbuy.com/views/single/install.html'},
            {txt: '运费估算', icon: 'header-icon-cp', href: 'http://www.dotdotexpress.com/postage/country'},
            {txt: '邮寄限制', icon: 'header-icon-limit', href: 'http://www.dotdotexpress.com/tools/post/limit'},
            {txt: '物流查询', icon: 'header-icon-search', href: 'http://www.dotdotexpress.com/'}
        ]
    },
    userBox: {
        loginTxt: '登录',
        loginHref : `${page}login/`,
        registerTxt: '注册',
        registerHref: `${page}login/?type=register`,
        message : '消息',
        messageHref : '/account/message/',
        userHref : '/account/'
    },
    historyTxt: '搜索历史',
    searchHolder: '输入商品名称，或直接黏贴商品链接'
};

let subNavTimer = null, //防止导航tab bug的timer
    scrollTag = 0, //计算滚轮方向的中间值
    scrollTimer = null; //计算滚轮方向的timer

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
            fixed: false  //头部是否固定
        }
    }

    // componentDidMount() {
    //     const body = document.documentElement || document.body;
    //
    //     resetHeaderFixed.bind(this)();
    //
    //     body.addEventListener(scrollEventName, resetHeaderFixed.bind(this), false);
    //
    //     function resetHeaderFixed() {
    //
    //         if (scrollTimer) return;
    //         let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    //
    //         let isUp = scrollTop - scrollTag < -6;
    //         scrollTag = scrollTop;
    //
    //         this.setState(function () {
    //             return {fixed: isUp};
    //         });
    //
    //         scrollTimer = setTimeout(() => {
    //             scrollTimer = null;
    //         }, 100);
    //
    //     }
    //
    // }

    componentDidUpdate() {
        const body = document.documentElement || document.body;

        this.state.showSearch ? body.addEventListener(scrollEventName, handleNoScroll, false) : body.removeEventListener(scrollEventName, handleNoScroll);

        // return true;
    }

    handleToggleSearch() {
        this.setState(function (state) {
            return {showSearch: !state.showSearch};
        });
    }

    handleHideSearch() {
        this.setState(function () {
            return {showSearch: false};
        });
    }

    handleSearch(txt) {
        setHistory(txt);
        window.location.replace(`${page}buy/?url=${encodeURIComponent(txt)}`);
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
        }, 80);
    }

    handleHideAvatar(){
        this.refs.avatar.style.display = 'none';
    }

    render() {
        let userInfo = this.props.userInfo;

        let userInfoTpl = (() => {
            let tpl = null;

            if(userInfo.user_id){
                tpl = (
                    <div className="header-userInfo">
                        <a href={model.userBox.userHref}>
                            <i className="header-avatar">{userInfo.avatar ? <img src={userInfo.avatar} onError={this.handleHideAvatar.bind(this)} /> : ''}</i>
                            <span>{this.props.userInfo.user_name}</span>
                        </a>
                        <a href={model.userBox.messageHref}>
                            <i className="header-icon-message"></i>
                            <span>{model.userBox.message}</span>
                        </a>
                    </div>
                );

            }else{
                tpl = (
                    <div className="header-login" style={{display: this.props.userInfo.user_id ? 'none' : 'display'}}>
                        <a href={model.userBox.registerHref}>{model.userBox.registerTxt}</a> <span>/</span> <a href={model.userBox.loginHref}>{model.userBox.loginTxt}</a>
                    </div>
                )
            }

            return tpl;


        })();

        return (
            <header className={(this.state.showSearch && historyData.length > 0 ? 'active-history' : '') + ' m-header'}>
                <div className={(this.state.fixed ? 'header-fixed' : '' ) + ' header-wrap'}>

                    <div className={(this.state.showSearch ? 'active-search' : '') + ' header-main'}>

                        <h1 className="header-logo"><a href={model.indexHref} target="_blank">superbuy</a></h1>

                        <div className="header-navBar">
                            <ul className="header-nav">
                                <li>
                                    <a href="javascript:;"
                                       onMouseEnter={this.handleShowSubNav.bind(this,'server')}
                                       onMouseLeave={this.handleHideSubNav.bind(this)}
                                    >{model.nav.server.txt}<i className="header-down"></i></a>
                                </li>
                                <li>
                                    <a href={model.nav.app.href} target="_blank">{model.nav.app.txt}</a>
                                </li>
                                <li>
                                    <a href="javascript:;"
                                       onMouseEnter={this.handleShowSubNav.bind(this,'tool')}
                                       onMouseLeave={this.handleHideSubNav.bind(this)}
                                    >{model.nav.tool.txt}<i className="header-down"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={model.nav.help.href} target="_blank">{model.nav.help.txt}</a>
                                </li>
                            </ul>

                            <i className="header-search-btn" onClick={this.handleToggleSearch.bind(this)}></i>

                            {userInfoTpl}

                        </div>

                        <SearchInput
                            holder={model.searchHolder}
                            handleSearch={this.handleSearch.bind(this)}
                            handleHideSearch={this.handleHideSearch.bind(this)}
                            showSearch={this.state.showSearch}
                        />

                    </div>

                    <SubNav
                        list={model.subNav}
                        handleShowSubNav={this.handleShowSubNav.bind(this)}
                        handleHideSubNav={this.handleHideSubNav.bind(this)}
                        showSubNav={this.state.showSubNav}
                        subNavType={this.state.subNavType}
                    />

                    <SearchHistory
                        txt={model.historyTxt}
                        history={historyData}
                        search={this.handleSearch.bind(this)}
                        showSearch={this.state.showSearch}
                    />

                </div>
            </header>

        );
    }
}

export default Header;
