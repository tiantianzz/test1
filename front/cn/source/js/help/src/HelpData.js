/**
 * Created by zaki on 2016/8/26.
 */
import HelpInformation from  './HelpInformation'
class HelpData extends React.Component{

  constructor(props) {
    super(props);
  }

  changeContent(helpId){
    window.location.hash+="_helpId"+helpId;
    ReactDOM.unmountComponentAtNode(document.getElementById('helpMain'));
    ReactDOM.render(<HelpInformation helpId={window.location.hash.substring(window.location.hash.indexOf('_helpId')+7)} />,document.getElementById('helpMain'));
  }

  render(){
    return(
      <div>
        <div className="query">搜索关键字: <span>{this.props.keyWords}</span>搜索结果：<span>{this.props.total}个</span></div>
        <div className="search-result">
          {
            this.props.helpData.map(helpitem => {
              return (
                <div className="help-item">
                  <div className="help-title" onClick={this.changeContent.bind(this,helpitem.helpId)}>
                    <div dangerouslySetInnerHTML={{__html:helpitem.helpTitle}}></div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
     )
  }
}
export default HelpData;
