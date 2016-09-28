/**
 * Created by zaki on 2016/8/26.
 */
import HelpData from './HelpData';
import Pagination from './Pagination';
class SearchHelps extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentTab:0,
      index : 1,
      size : 15,
      total : 0,
      pages : 8,
      keywords:this.props.keywords,
      helps :[],
      helptabs : []
    }
  }

  onChange(current){
    this.setState({
      index : current
    });
    this.getHelpData(current)
  }

  handleChangeTab(e){
    var key = e.currentTarget.getAttribute('name');
    var cateId =e.currentTarget.getAttribute('accessKey');
    let helpsUrl = window.supervar.apiURL+'help/list';

    if(key == 0){
      this.getHelpData(1)
      this.setState({
        currentTab: key,
        index : 1
      })
    }
    else{
      fetch(helpsUrl,{
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type":"application/x-www-form-urlencoded"
        },
        body:JSON.stringify({
          keywords: this.state.keywords,
          categoryId:cateId,
          currPage: 1,
          pageSize: this.state.size
        })
      }).then(response => response.json()).then(data => {
        if(data.state.toString()=="0"){
          this.setState({
            helps:data.data.listResult==null?[]:data.data.listResult,
            total:data.data.totalRow,
            currentTab: key,
            index : 1
          })
        }
      })
    }
  }

  componentDidMount(){
    this.getHelpData(this.state.index);
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
        currPage: current,
        pageSize: this.state.size
      })
    }).then(response => response.json()).then(data => {
      if(data.state.toString()=="0"){
        this.setState({
          helps:data.data.listResult==null?[]:data.data.listResult,
          total:data.data.totalRow,
          helptabs : data.data.superCate==null?[]:(data.data.superCate.length>3?data.data.superCate.slice(0,3):data.data.superCate),
          currentTab: 0,
        })
      }
    })
  }

  render(){
    return (
      <div className="right-part">
        <div className="search-container">
        {
          this.state.total > 0 ?
            <div>
              <ul className="search-tab clearfix">
                <li ref={'tab_0'} name={0} accessKey={0}
                    onClick={this.handleChangeTab.bind(this)}>
                    <div className={this.state.currentTab == 0 ? 'active' : ''}>全部</div>
                  </li>
                {
                  this.state.helptabs.map((tab,i) => {
                    return (
                    	
                      <li ref={'tab_'+(i+1)} name={(i+1)} accessKey={tab.categoryId}
                    		onClick={this.handleChangeTab.bind(this)}>
                    		<div className={this.state.currentTab == (i+1) ? 'active' : ''}>{tab.categoryName}</div>
                   	  </li>
                    )
                  })
                }
              </ul>
              <div className="search-result">
                <HelpData helpData={this.state.helps} keyWords={this.state.keywords} total={this.state.total}/>
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
            <div>
              <ul className="search-tab clearfix">
      			<li ref={'tab_0'} name={0} accessKey={0}
    				onClick={this.handleChangeTab.bind(this)}>
  					<div className={this.state.currentTab == 0 ? 'active' : ''}>ALL</div>
    			</li>
                {
                    this.state.helptabs.map((tab,i) => {
                      return (
                        <li ref={'tab_'+(i+1)} name={(i+1)} accessKey={tab.categoryId}
                    		onClick={this.handleChangeTab.bind(this)}>
                    		<div className={this.state.currentTab == (i+1) ? 'active' : ''}>{tab.categoryName}</div>
                   	  	</li>
                      )
                    })
                }
              </ul>
              <div className="search-result no-result">
                No data
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}
export default  SearchHelps;