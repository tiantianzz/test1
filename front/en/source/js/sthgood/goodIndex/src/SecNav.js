import '../../../../less/sthgood/goodIndex/src/secNav.less';
const domain = window.supervar.domain;
const hrefUrl ="/en/page/";
const secnavTitle=[
	{"title":"Selection"},
	{"title":"Clothing"},
	{"title":"Digital"},
	{"title":"Home"},
	{"title":"Shoes & Bags"},
];
class SecNavBox extends React.Component{
	constructor(props){
		super(props);
		this.state={
			searchShow:false,
			moreImg:false,
		}
	}
//	search(){
//		let searchValue = this.refs.search.value;
//		if(searchValue==''||searchValue==null){
//			alert(this.props.alertWarn);
//		}else{
//			var patt1=new RegExp("[a-zA-z]+://[^\s]*");
//			if(patt1.test(searchValue)){
//				window.open(`${hrefUrl}buy/?url=${encodeURIComponent(searchValue)}`);
//			}else{
//				alert(this.props.urlWarn);
//			}
//		}
//		this.refs.search.value = '';
//		this.refs.search.focus();
//	}
//	searchHandle(e){
//		if((e.keyCode).toString()=='13') {this.search();};
//	}
//	showSearch(e){
//		if(this.state.searchShow==false){
//			this.refs.search.focus();
//			e.target.getAttribute('name') == "hideSearch" ? this.setState({searchShow:true,moreImg:false}) : '';
//		}else{
//			this.search();
//		}
//		
//	}
//	showList(){
//		this.setState({
//			moreImg:!this.state.moreImg,
//		});
//	}
//	componentDidMount(){
//		let that =this;
//		window.onclick = function(e){
//			if(e.target.getAttribute('name')!='hideSearch' && e.target.getAttribute('name')!='searchInput'){
//				that.setState({searchShow:false});
//				that.refs.search.value='';
//			}
//			if(e.target.getAttribute('name')!='secnavMore') that.setState({moreImg:false});
//		}
//	}
	render(){
		return(
			<div className="secnavbox" >
				<div className="secnav">
					<div className="secnav-left" >
						<a href={`//buy.${domain}/`}><span className="daigou">{this.props.daigou}</span></a>
						<a href={hrefUrl+'sthgood/goodIndex/'}>{this.props.sthGood}</a>
					</div>
					{/**搜索
					<div className="secnav-search">
						<input name="searchInput" ref="search" className={this.state.searchShow==true ? "search-active" : "search"} type="text" placeholder={this.props.search} onKeyDown={this.searchHandle.bind(this)} />
						<img name="hideSearch" src={imgsrc+"secnav_search.png"} onClick={this.showSearch.bind(this)}/>
					</div>
					**/}
					<ul className={this.state.searchShow==true ? "secnav-right secnav-right-hide" : "secnav-right secnav-right-show"}>
						{
							secnavTitle.map((a)=>{
	            				return(<li><a href="#">{a.title}</a></li>)
	            			})
						}
						{/*二级导航更多内容，一期暂时不用，随后会用。
						<li>
							<div name="secnavMore" className={this.state.moreImg==true ? "secnav-more secnav-more-active" : "secnav-more secnav-more-close"} onClick={this.showList.bind(this)}>
								<img name="secnavMore" src={imgsrc+"secnav_more.png"}/>
							</div>
						</li>
						*/}
					</ul>
					{/*二级导航更多内容，一期暂时不用，随后会用。
					<ul className="nav-list">
						{
							listTitle.map((a)=>{
	            				return(<li className={this.state.moreImg==true ? "nav-list-active" : "nav-list-default"}><a href="#">{a.title}</a></li>)
	            			})
						}
					</ul>
					*/}
				</div>
				
			</div>
		)
	}
}
SecNavBox.defaultProps={
	daigou:'Shopping Agent',
	sthGood:'Something Good',
	search:'http://enter or pastes the items URL here',
	alertWarn:'Please enter link address!',
	urlWarn:'Please enter the correct link address!'
}
export default SecNavBox;