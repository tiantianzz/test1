import '../../../../less/sthgood/videoList/src/searchNav.less';

var imgsrc=window.supervar.imgsrc_cn;

/**
 * ===数据
 */
var secnavTitle=[
    {"title":"Recommended"},
    {"title":"Clothing"},
    {"title":"Digital"},
    {"title":"Home"},
    {"title":"Shoes & Bags"}
];

export default class SecNavBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // searchShow:false
        }
    }

    render(){
        return(
            <div className="brand" id="brand">
                <div className="secnavbox" >
                    <div className="secnav">
                        <div className="secnav-left" >
                            <span className="daigou">{this.props.daigou}</span>
                            <span>{this.props.sthGood}</span>
                            {
                                this.props.subTit.map( v=> {
                                        return (
                                            <span>
                                                <i>&gt;</i>{v.txt}
                                            </span>
                                        )
                                    }
                                )
                            }
                        </div>

                        <ul className="secnav-right secnav-right-show">
                            {
                                secnavTitle.map((a)=>{
                                    return(<li><a href="#">{a.title}</a></li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

SecNavBox.defaultProps={
    daigou:"Shopping Agent",
    sthGood:"Editor's Pick",
    subTit:[]
}