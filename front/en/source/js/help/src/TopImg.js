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
					<h1><a href="/cn/page/help/">Help Center</a></h1>
					<h2>Customer First, Extreme Service</h2>
					<h2>7X24Non-Stop Online Service, Exclusive CEO Email</h2>
					<div className="searchbox">
						<input placeholder="Enter keywords to search"  ref="input" type="text"   onKeyDown={this.keyDownHandle.bind(this)}  />
						<a onClick={this.Search.bind(this)} ref="search">Search</a>
					</div>
				</div>
			</div>
		);
	}
}

export default TopImg;


