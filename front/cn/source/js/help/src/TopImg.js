import '../../../less/help/src/topImg.less';
import SearchHelps from './SearchHelps';
import LeftNav from  './LeftNav';
class TopImg extends React.Component{
	Search(){
		if(this.refs.input.value.length>0){
			window.location.hash="search";
			ReactDOM.unmountComponentAtNode(document.getElementById('leftNav'));
			ReactDOM.render(<LeftNav />,
				document.getElementById('leftNav'));
			ReactDOM.unmountComponentAtNode(document.getElementById('helpMain'));
			ReactDOM.render(<SearchHelps keywords={this.refs.input.value} />,
				document.getElementById('helpMain'));
		}
		else {
			alert("Please enter keywords to search");
		}
	}

	keyDownHandle(e) {
		if ((e.keyCode).toString() == '13') {
			this.Search();
		}
	}

	render(){
		return (
			<div className="top-part">
				<div className="container">
					<h1><a href="/cn/page/help/">帮助中心</a></h1>
					<h2>用户至上　极致服务</h2>
					<h2>7X24小时全天候在线服务　独家开通CEO邮箱</h2>
					<div className="searchbox">
						<input placeholder="输入问题的关键字进行搜索"  ref="input" type="text"  onKeyDown={this.keyDownHandle.bind(this)} />
						<a onClick={this.Search.bind(this)} ref="search">搜索</a>
					</div>
				</div>
			</div>
		);
	}
}

export default TopImg;


