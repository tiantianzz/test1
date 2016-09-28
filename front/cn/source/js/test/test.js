import '../../less/test/test.less';

var imgsrc=window.supervar.imgsrc_cn;

/* your logic code */
class Content extends React.Component{
    componentWillMount(){
        document.getElementById("container").style.opacity=1;
    }
    render(){
        return(
            <div>this is your page content</div>
        )
    }
}

var Wrap = window.supervar.Wrap;
var content=ReactDOM.render(
    <Wrap content={Content} />,
    document.getElementById("container")
);