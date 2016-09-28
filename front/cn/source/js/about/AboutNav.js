/**
 * author: MG
 * 关于页面的导航条
 *
 * 需要的props:
 * current <string> 匹配到listData中id的那一项为当前页面
 * */

import '../../less/about/AboutNav.less';

const listData = [
    {href:'../aboutUs/',txt:'关于SuperBuy',id:'aboutUs'},
    {href:'../contactUs/',txt:'联系我们',id:'contactUs'},
    {href:'../joinUs/',txt:'加入我们',id:'joinUs'},
    {href:'../agreement/',txt:'服务协议',id:'agreement'},
    {href:'../privacy/',txt:'隐私声明',id:'privacy'},
    {href:'../registration/',txt:'商家注册',id:'registration'},
    {href:'../link/',txt:'友情链接',id:'link'},
    {href:'../map/',txt:'网站地图',id:'map'}
];

class AboutNav extends React.Component{
     render(){
        var current = this.props.current,
            li = [],
            h2 = null;

        listData.forEach(function(item){
            if(item.id === current){
                h2 = <h2>{item.txt}</h2>
            }else{
                li.push(<li><a href={item.href}>{item.txt}</a></li>)
            }
        });

        return (
            <div className="aboutNav">
                {h2}
                <ul>
                    {li}
                </ul>
            </div>
        );
    }
}

export default AboutNav;


