import '../../../less/sthgood/ideas/ideas.less';
import SecNavBox from './../goodIndex/src/SecNav';
var imgsrc=window.supervar.imgsrc_cn+"sthgood/ideas/";
var apiUrl=window.supervar.apiURL;
var hrefUrl ="/cn/page/";
/* your logic code */
var ideasImg=[
	{"img":"#","href":"#"},
	{"img":"#","href":"#"},
	{"img":"#","href":"#"},
	{"img":"#","href":"#"},
	{"img":"#","href":"#"}
];
class IdeasContent extends React.Component{
	constructor(props){
		super(props);
		this.state={ideasRequestData:[]}
	}
	componentDidMount(){
        fetch(`${apiUrl}shoppingguide/all-cat-list?currPage=1&pageSize=10000`,{
			method:"GET",
			credentials:'include',
		}).then(res => res.json())
		.then(data => {
			this.setState({ideasRequestData:data.data.listResult})
		}).catch(ex=> console.log("ideas is loading failed",ex));
    }
	render(){
		return(
			<div className="ideas">
				<div className="ideas-box">
					<p className="path-nav">
						<span><a href={hrefUrl+"sthgood/goodIndex"}>{this.props.sthGood}</a></span>
						<span>{this.props.ideas}</span>
					</p>
					<div className="ideas-content">
						<h1>{this.props.title}</h1>
						{
							this.state.ideasRequestData.map((a,b)=>{
								return(
									<div className="ideas-item">
										<a href={hrefUrl+"subject/subject.html?id="+a.id}><img src={a.listImgHref} /></a>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}
class Content extends React.Component{
    componentWillMount(){
        document.getElementById("container").style.opacity=1;
    }
    render(){
        return(
            <div className="content">
            	<SecNavBox />
            	<IdeasContent />
            </div>
        )
    }
}
IdeasContent.defaultProps={
	sthGood:'有好货',
	ideas:'趣创意',
	title:'趣创意合辑'
}
var Wrap = window.supervar.Wrap;
var content=ReactDOM.render(
    <Wrap content={Content} />,
    document.getElementById("container")
);