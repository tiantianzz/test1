require("../../../front/plugin/less/init.less");
require('../less/introduce.less');
//var Button=require('../../../../plugin/reactcommon/Button.js');
var Content;

//sidenav
class Sidenav extends React.Component{
	scrolltop(e){
		var scrolltop=document.getElementById("content").childNodes[e.target.getAttribute("data-index")].offsetTop;
		document.body.scrollTop=scrolltop;
	}

	render(){
		var that=this;
		return(
			<div className="sidenav">
				<ul className="test">
					{
						this.props.datali.map(function(data,index){
							return <li data-index={index} onClick={that.scrolltop}>{data.value}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

//introduce
class Introduce extends React.Component{
	componentWillMount(){
		Content=this.props.content;
	}

	componentDidMount(){
		SyntaxHighlighter.highlight();
	}

	render(){
		return (
			<div className="introduce">
				<Content datacont={this.props.data.content} />
				<Sidenav datali={this.props.data.sidenav} />
			</div>
		)
	}
}

window.Introduce=Introduce;
module.export=Introduce;