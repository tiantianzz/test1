/**
 * author: MG
 * 关于页面内的有红色icon的链接列表
 *
 * 使用页面:
 *  友情链接
 *  网站地图
 *
 * 需要的props:
 *  icon : 'aboutIcon-partner', // icon   <string> 图标的class
 *  title : '合作伙伴',          // title  <string> 名称
 *  column : false,             // column <false|number> false: 链接成一行排列, number: 链接分n列排列
 *  links : [                   // links  <array> 链接数组
 *      {href:'#',txt:'淘宝网'}, //    href  <string> 链接地址
 *      {href:'#',txt:'当当网'}, //    txt   <string> 链接文字
 *      {href:'#',txt:'亚马逊'},
 *      {href:'#',txt:'拍拍网'}
 *  ]
 */

import '../../less/about/IconBox.less';

/** 链接被排成一行(p标签包裹) */
class PLinks extends React.Component{
    render(){
        return (
            <p>
                {this.props.links.map(link => <a href={link.href} target="_blank">{link.txt}</a>)}
            </p>
        )
    }
}

/** 链接被排成n列(table布局) */
class TableLinks extends React.Component{
    render(){

        var column = this.props.column,
            links = this.props.links.map(a=>a),
            arr = [];
        /**
         * 把一维数组分割成二维数组:第一层是tr,第二层是td
         * */
        while(links.length){
            arr.push(links.splice(0,column));
        }

        return (
            <table>
                {arr.map(tr => {
                    return (
                        <tr>
                            {tr.map(td => <td><a href={td.href} target="_blank">{td.txt}</a></td>)}
                        </tr>
                    )
                })}
            </table>
        )
    }
}

class IconBox extends React.Component{
    render(){

        return (
            <div className="aboutIconBox" style={this.props.style}>
                <i className={this.props.icon}></i>
                <div>
                    <h3>{this.props.title}</h3>
                    {this.props.column ? <TableLinks links={this.props.links} column={this.props.column} /> : <PLinks links={this.props.links} />}
                </div>
            </div>
        );
    }
}

export default IconBox;