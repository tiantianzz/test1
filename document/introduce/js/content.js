var Introduce=window.Introduce;
require('../less/content.less');

var result = fetch('./json/intro.json');
result.then( res => res.json() ).then( data => {
	var introduce=ReactDOM.render(
	    <Introduce name="name" content={Content} data={data} />,
	    document.body
	);
}).catch( ex => console.log('intro.json is loading failed', ex) )

//content
class Content extends React.Component{
	render(){
		return(
			<div className="content" id="content">
				{
					this.props.datacont.map(function(data){
						return(
							<div className="item">
								<h5>{data.title}</h5>
								<pre className="descript brush: js;">{data.text}</pre>
							</div>
						)
					})
				}
			</div>
		)
	}
}
