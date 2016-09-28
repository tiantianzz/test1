import Pagination from './Pagination';
import HelpInformation from  './HelpInformation'
class HelpContent extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			category :this.props.category,
			categoryName:this.props.categoryName,
			index : 1,
			size : 15,
			total : 0,
			pages : 8,
			helps : []
		}
	}
	
	componentWillMount(){
    	this.getHelpData(this.state.index);
	}
	
	onChange(current){
	    this.setState({
	      index : current
	    });
	    this.getHelpData(current)
	}
	
	getHelpData(current){
		let helpsUrl = window.supervar.apiURL+'help/list';
	    fetch(helpsUrl,{
	      method: "POST",
				credentials: 'include',
	      headers: {
	        "Content-Type":"application/x-www-form-urlencoded"
	      },
	      body:JSON.stringify({
	        keywords: this.state.keywords,
	        categoryId:this.state.category,
	        currPage: current,
	        pageSize: this.state.size
	      })
	    }).then(response => response.json()).then(data => {
		    if(data.state.toString()=="0"){
		      this.setState({
		        helps:data.data.listResult,
		        total:data.data.totalRow
		      })
		    }
		})
	}

	changeContent(helpId){
		window.location.hash+="_helpId"+helpId;
		ReactDOM.unmountComponentAtNode(document.getElementById('helpMain'));
		ReactDOM.render(<HelpInformation helpId={window.location.hash.substring(window.location.hash.indexOf('_helpId')+7)} />,document.getElementById('helpMain'));
	}

	render(){
	    return (
	      <div className="right-part">
	      	<div className="search-container">
	      		<div className="category">{this.state.categoryName}</div>
		      	{
	          		this.state.total > 0 ?
		      		<div>
		      			<div className="search-result">
			          {
			            this.state.helps.map(helpitem => {
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
			        <div className="pagination">
		                <Pagination
		                    index={this.state.index}
		                    size={this.state.size}
		                    total={this.state.total}
		                    pages={this.state.pages}
		                    callbackParent={this.onChange.bind(this)}
		                />
		            </div>
		      		</div>
		            :
		            <div className="search-result no-result">
                		暂无数据
              		</div>
		       	}
	        </div>
	      </div>
	    );
   	}
	
	
}
export default HelpContent;


