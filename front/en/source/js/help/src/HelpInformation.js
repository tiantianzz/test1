/**
 * Author: zaki
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/9/7 10:06
 */
class HelpInformation extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      helpId :this.props.helpId,
      questionTitle:'',
      questionInfo:'',
      message:''
    }
  }

  componentWillMount(){
    let helpsUrl = window.supervar.apiURL+'help/info';
    fetch(helpsUrl,{
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body:JSON.stringify({
        helpId: this.props.helpId
      })
    }).then(response => response.json()).then(data => {
      if(data.state.toString()=="0"){
        this.setState({
          questionTitle:data.data.helpTitle,
          questionInfo:data.data.helpContent
        })
      }
      else{
        this.setState({
          message:data.msg
        })
      }
    })
  }

  render(){
    let info = this.state.questionInfo;
    return (
      <div className="right-part">
        <div className="search-container">
          <div className="category" dangerouslySetInnerHTML={{__html:this.state.questionTitle}}></div>
          <div className="search-result">
            <div dangerouslySetInnerHTML={{__html:this.state.questionInfo}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default  HelpInformation;
