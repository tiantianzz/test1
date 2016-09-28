/**
 * author: MG
 * 关于页面的导航条
 *
 * 需要的props:
 * current <string> 匹配到listData中id的那一项为当前页面
 * */

import '../../less/about/AboutNav.less';

const listData = [
    {href:'../aboutUs/',txt:'About SuperBuy',id:'aboutUs'},
    {href:'../contactUs/',txt:'Contact Us',id:'contactUs'},
    // {href:'../joinUs/',txt:'Join Us',id:'joinUs'},
    {href:'../agreement/',txt:'Service Agreement',id:'agreement'},
    {href:'../privacy/',txt:'Privacy Statement',id:'privacy'},
    {href:'../registration/',txt:'Merchant registration',id:'registration'},
    {href:'../link/',txt:'Useful links',id:'link'},
    {href:'../map/',txt:'Website Map',id:'map'}
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


