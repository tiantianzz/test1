/* react common plugin
*  author : nero 
*/

import './Slide.less';

var timer;
//Slide
class Slide extends React.Component{
    componentDidMount(){
        var that=this;
        timer=setInterval(function () {
            that.setState({currimg:that.state.currimg<that.props.children.length?that.state.currimg+=1:that.state.currimg=1});
            that.changeindex(that.state.currimg-1);
        },2000);
    }
    constructor(props) {
        super(props);
        this.state = {type:["curr","",""],currimg:1};
    }
    slide(turn,e){
        e.preventDefault();
        if(turn=="right"){
            this.setState({currimg:this.state.currimg<this.props.children.length?this.state.currimg+=1:this.state.currimg=1});
        }else if(turn=="left"){
            this.setState({currimg:this.state.currimg>1?this.state.currimg-=1:this.state.currimg=this.props.children.length});
        }
        this.changeindex(this.state.currimg-1);
    }
    changeindex(index){
        this.state.type=[];
        this.state.type[index]="curr";
        this.setState({type:this.state.type});
    }
    index(index){
        if(this.state.currimg>index){
            this.setState({currimg:this.state.currimg=index+1});
        }else{
            this.setState({currimg:this.state.currimg=index+1});
        }
        this.changeindex(index);
    }
    render(){
        var that=this;
        if(this.props.full){
            return(
                <div className={this.props.className || Slide.init.className}>
                    <div className="slidebox">
                        <div className="slideitem" id="slideitem" style={{left:-(this.state.currimg-1)*this.props.scrollwidth,width:(this.props.screenwidth || this.props.scrollwidth)*this.props.children.length}}>
                            {this.props.children}
                        </div>
                        <div className="buttbox">
                            <div className="turn">
                                <a href="#" className="left" onClick={this.slide.bind(this,'left')}></a>
                                <a href="#" className="right" onClick={this.slide.bind(this,'right')}></a>
                            </div>
                            <div className="index">
                                {this.props.children.map(function (value,key) {
                                    return <span className={that.state.type[key]} onClick={that.index.bind(that,key)}>{key+1}</span>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div className={this.props.className || Slide.init.className}>
                    <div className="slideitem" style={{left:-(this.state.currimg-1)*this.props.scrollwidth,width:(this.props.screenwidth || this.props.scrollwidth)*this.props.children.length}}>
                        {this.props.children}
                    </div>
                    <div className="buttbox">
                        <div className="turn">
                            <a href="#" className="left" onClick={this.slide.bind(this,'left')}></a>
                            <a href="#" className="right" onClick={this.slide.bind(this,'right')}></a>
                        </div>
                        <div className="index">
                            {this.props.children.map(function (value,key) {
                                return <span className={that.state.type[key]} onClick={that.index.bind(that,key)}>{key+1}</span>
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

// init
Slide.init = {
    className:"slide",//class
    start:"left"//default direction
};

// check
Slide.propTypes={
    className:React.PropTypes.string
};

module.exports=Slide;

//<Slide className="slide" />