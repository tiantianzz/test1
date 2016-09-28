/**
 * author: MG
 * 头部-子导航
 * */

class SubNav extends React.Component{

    handleShowSubNav(){
        this.props.handleShowSubNav('inherit')
    }

    handleHideSubNav(){
        this.props.handleHideSubNav()
    }

    createLi(list){
        return list.map(li => <li><a href={li.href} target="_blank"><i className={li.icon}></i><h3 dangerouslySetInnerHTML={{__html:li.txt}}></h3></a></li>)
    }

    render(){
        let list = this.props.list;

        return (
            <div className={(this.props.showSubNav ? 'showSubNav' : '') + ' header-subNav'} onMouseEnter={this.handleShowSubNav.bind(this)} onMouseLeave={this.handleHideSubNav.bind(this)}>
                <ul className={(this.props.subNavType === 'server' ? 'showSubMenu' : '') + ' header-subNav-server header-subNav-menu'}>
                    {this.createLi(list.server)}
                </ul>
                <ul className={(this.props.subNavType === 'tool' ? 'showSubMenu' : '') + ' header-subNav-tool header-subNav-menu'}>
                    {this.createLi(list.tool)}
                </ul>
            </div>
        );
    }
}

export default SubNav;
