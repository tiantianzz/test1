import Slide from '../../../../../plugin/reactcommon/Slide/Slide';

var apiurl=window.supervar.apiURL;
var domain="//www."+window.supervar.domain;
var hrefUrl=domain+"/cn/page/";

class Secnav extends React.Component{
    render(){
        return(
            <div className="secnavbox">
                <div className="secnav">
                    <div className="daigou"><a href="#">{this.props.static.title}</a></div>
                    <ul>
                        {this.props.static.list.map(function (data) {
                            return <li><a href={data.href} target="_blank">{data.text}</a></li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

class SthGood extends React.Component{
    render(){
        return(
            <div className="sthgood">
                <div className="sthtitle">
                    <h3>{this.props.static.h3}</h3>
                    <h4><a href={hrefUrl+"sthgood/goodIndex/"} target="_blank">{this.props.static.h4}</a></h4>
                </div>
                <div className="sthgoodbox">
                    <Top static={this.props.static.top} data={this.props.data.top}></Top>
                    <Vedio static={this.props.static.vedio} data={this.props.data.vedio}></Vedio>
                    <GoodShop static={this.props.static.goodshop} data={this.props.data.goodshop}></GoodShop>
                </div>
            </div>
        )
    }
}

/* your logic code */
class Top extends React.Component{
    componentWillMount(){
        fetch(`${apiurl}top/news?pagesize=3`,{credentials: "include"}).then(res=>res.json()).then(data=>{
            this.state.data[0]=data.data;
            this.setState({data:this.state.data});
        }).catch(ex=>console.log("top/news is loading failed",ex));
        fetch(`${apiurl}top/hot?pagesize=3`,{credentials: "include"}).then(res=>res.json()).then(data=>{
            this.state.data[1]=data.data;
            this.setState({data:this.state.data});
        }).catch(ex=>console.log("top/hot is loading failed",ex));
        fetch(`${apiurl}top/area?area=1&pagesize=3`,{credentials: "include"}).then(res=>res.json()).then(data=>{
            this.state.data[2]=data.data;
            this.setState({data:this.state.data});
        }).catch(ex=>console.log("top/area is loading failed",ex));
    }
    constructor(props){
        super();
        this.state={type:["active","",""],index:0,data:props.data};
    }
    changeimg(index){
        this.state.type=["","",""];
        this.state.type[index]="active";
        this.setState({type:this.state.type,index:this.state.index=[index]});
    }
    render(){
        var that=this;
        return(
            <div className="top" id="top">
                <div className="title">
                    <ul>
                        {this.props.static.title.map(function (data) {
                            return <li>{data.txt}</li>
                        })}
                    </ul>
                </div>
                <div className="tabbox">
                    <ul>
                        {this.props.static.tab.map(function (data,index) {
                            return <li className={that.state.type[index]} onClick={that.changeimg.bind(that,index)}>{data.txt}</li>
                        })}
                    </ul>
                </div>
                {this.state.data.map(function (mydata) {
                    return (
                        <div className="imgbox">
                            <Slide className="prolist" scrollwidth="450">
                                {!mydata || mydata.map(function (data) {
                                    return (
                                        <div className="pro">
                                            <a href={hrefUrl+"buy/?url="+encodeURIComponent(data.href)} target="blank"><img src={data.img} alt={data.alt} /></a>
                                            <p><a href={hrefUrl+"buy/?url="+encodeURIComponent(data.href)} target="blank">{data.title}</a></p>
                                            <p>￥{data.price}</p>
                                        </div>
                                    )
                                })}
                            </Slide>
                        </div>
                    )
                })[this.state.index]}
            </div>
        )
    }
}

class Vedio extends React.Component{
    componentWillMount(){
        fetch(`${apiurl}shoppingguide/look-buy?currPage=1&pageSize=5`,{credentials: "include"}).then(res=>res.json()).then(data=>{
            this.state.data=data.data.listResult;
            this.setState({data:this.state.data});
        }).catch(ex=>console.log("look-buy is loading failed",ex));
    }
    constructor(props){
        super();
        this.state={data:props.data};
    }
    render(){
        var that=this;
        return(
            <div className="vedio">
                <div className="title">
                    <ul>
                        {this.props.static.title.map(function (data) {
                            return <li>{data.txt}</li>
                        })}
                    </ul>
                </div>
                <div className="vediolist">
                    {this.state.data.map(function (data) {
                        return (
                            <div className="vedioitem">
                                <div className="img"><a href={hrefUrl+"sthgood/video/index.html?id="+data.id} target="blank"><img src={data.img} alt={data.alt} /></a></div>
                                <div className="infor">
                                    <ul>
                                        <li> {data.title} </li>
                                        {//<li>{that.props.static.star} <span className="star"><em style={{width:data.scorde+"%"}}></em></span></li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

class GoodShop extends React.Component{
    componentWillMount(){
        fetch(`${apiurl}shoppingguide/category-group?pageSize=3`,{credentials: "include"}).then(res=>res.json()).then(data=>{
            this.state.data=data.data;
            this.setState({data:this.state.data});
        }).catch(ex=>console.log("shoppingguide/category-group is loading failed",ex));
    }
    constructor(props){
        super();
        this.state={data:props.data};
    }
    render(){
        return(
            <div className="goodshop">
                <div className="title">
                    <ul>
                        {this.props.static.title.map(function (data) {
                            return <li>{data.txt}</li>
                        })}
                    </ul>
                </div>
                <div className="imgbox">
                    <ul>
                        {this.state.data.map(function (data) {
                            return <li><a href={hrefUrl+"subject/subject.html?id="+data.id} target="blank"><img src={data.listImgHref} alt=""/></a></li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

class Reviews extends React.Component{
    componentWillMount(){
        fetch(`${apiurl}bbs/getusershow?pagesize=5&currentPage=1`,{credentials: "include"}).then(res=>res.json()).then(data=>{
            this.state.data=data.data;
            this.setState({data:this.state.data});
        }).catch(ex=>console.log("bbs/getusershow is loading failed",ex));
    }
    constructor(props){
        super();
        this.state={data:props.data};
    }
    render(){
        return(
            <div className="reviews">
                <div className="title">
                    <h3>{this.props.static.h3}</h3>
                    <h4>{this.props.static.h4}</h4>
                    <h5><a href={this.props.static.h5.href} target="blank">{this.props.static.h5.txt}</a></h5>
                </div>
                <div className="probox">
                    {this.state.data.map(function (data) {
                        return (
                            <div className="proitem">
                                <a href={data.url}><img src={data.pictureUrl} alt=""/></a>
                                <div className="proinfor">
                                    <ul>
                                        <li><img src={data.avatar} alt=""/><span>{data.authorLocation} </span><span> {data.authorName}</span></li>
                                        <li className="li-el">{data.threadTitle}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export {Secnav,SthGood,Reviews};