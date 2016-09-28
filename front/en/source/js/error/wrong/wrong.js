import '../../../less/error/wrong/wrong.less';

var imgsrc=window.supervar.imgsrc_cn+"error/wrong/";
const hrefUrl ="/cn/page/";
const staticData={
    "title":"Page Error",
    "reason":"Possible reasons",
    "reasonList":{"first":"Network signalissue","second":"page does not exist", "third":"wrong address entered"},
    "return":{"first":"Previous","second":"Homepage"}
}
/* your logic code */
class Content extends React.Component{
    componentWillMount(){
        document.getElementById("container").style.opacity=1;
    }
    render(){
        return(
            <div className="wrong">
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