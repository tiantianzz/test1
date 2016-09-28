import '../../../less/error/notFound/notFound.less';

const imgsrc=window.supervar.imgsrc_cn+"error/notFind/";
const hrefUrl ="/cn/page/";
const staticData={
    "title":"该网页打不开",
    "reason":"可能原因：",
    "reasonList":{"first":"网络信号问题","second":"找不到请求页面", "third":"输入的网址错误"},
    "return":{"first":"返回上一页","second":"返回首页"}
}
/* your logic code */
class Content extends React.Component{
    componentWillMount(){
        document.getElementById("container").style.opacity=1;
    }
    render(){
        return(
            <div className="notFind">
                <div className="content">
                    <h2>{staticData.title}</h2>
                    <p className="reason">{staticData.reason}</p>
                    <p className="reasonList">{staticData.reasonList.first+"/"+staticData.reasonList.second+"/"+staticData.reasonList.third}</p>
                    <div>
                        <a className="left">{staticData.return.first}</a>
                        <a className="right">{staticData.return.second}</a>
                    </div>
                </div>
            </div>
        )
    }
}

var Wrap = window.supervar.Wrap;
var content=ReactDOM.render(
    <Wrap content={Content} />,
    document.getElementById("container")
);