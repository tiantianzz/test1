import '../../less/help/help.less';
import TopImg from './src/TopImg';
import LeftNav from './src/LeftNav';
import HelpMain from './src/HelpMain';
let apiUrl = window.supervar.apiURL;
class ComponentHelp extends React.Component {
	render(){
		return(
			<div>
				<TopImg/>
				<div className="content">
					<div id="leftNav">

					</div>
					<div id="helpMain">

					</div>
				</div>
			</div>
		)
	}
}

var Wrap = window.supervar.Wrap;

var content=ReactDOM.render(
	<Wrap content={ComponentHelp} />,
	document.body
);

ReactDOM.render(
	<HelpMain/>,
	document.getElementById('helpMain')
);
ReactDOM.render(
	<LeftNav/>,
	document.getElementById('leftNav')
);