import '../../less/appdownload/APPDownLoad.less';

var imgsrc=window.supervar.imgsrc_cn;

/* your logic code */
class Content extends React.Component{
    componentWillMount(){
        document.getElementById("container").style.opacity=1;
    }
    render(){
        return(
            <div className="container">
                <div className="appUpper">
                    <div className="content">
                        <div className="title">
                            <img src={imgsrc+"appdownload/title.png"} alt=""/>
                        </div>
                        <div className="qr">
                            <div className="qrImg">
                                <img src={imgsrc+"appdownload/2v.png"} alt=""/>
                            </div>

                            <em className="scan">扫二维码下载</em>
                        </div>
                        <div className="button">
                            <a href="" >
                                <em className="icon">
                                    <img src={imgsrc+"appdownload/ios_icon.png"} alt=""/>
                                </em>
                                <em className="cat_intro">
                                    <em>IOS版下载</em>
                                    <em>20160828 v5.0.3版</em>
                                </em>
                            </a>
                            <a href="">
                                <em className="icon">
                                    <img src={imgsrc+"appdownload/android_icon.png"} alt=""/>
                                </em>
                                <em className="cat_intro">
                                    <em>Android版下载</em>
                                    <em>20160828 v5.2.2版</em>
                                </em>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="appLower">
                    <div className="sd">
                        <img src={imgsrc+"appdownload/sd.png"} alt=""/>
                    </div>
                    <div className="content">
                        <div className="first">
                            <div className="circle">
                                <img src={imgsrc+"appdownload/commodity.png"} alt=""/>
                            </div>

                            <div className="intro">
                                <em>海量商品</em>
                                <em>聚合淘宝、天猫电商平台<br/>海量热门代购商品</em>
                            </div>
                            <div className="iphone">
                                <img src={imgsrc+"appdownload/a_iphone6.png"} alt=""/>
                            </div>

                        </div>
                        <div className="second">
                            <div className="circle">
                                <img src={imgsrc+"appdownload/pay.png"} alt=""/>
                            </div>
                            <div className="intro">
                                <em>支付便捷</em>
                                <em>多种支付方式<br/>轻松结算、安全便捷</em>
                            </div>
                            <div className="iphone">
                                <img src={imgsrc+"appdownload/b_iphone6.png"} alt=""/>
                            </div>

                        </div>
                        <div className="third">
                            <div className="circle">
                                <img src={imgsrc+"appdownload/delivery_fee.png"} alt=""/>
                            </div>
                            <div className="intro">
                                <em>运费优惠</em>
                                <em>携手国际众多知名物流公司<br/>运费超低折扣</em>
                            </div>
                            <div className="iphone">
                                <img src={imgsrc+"appdownload/c_iphone6.png"} alt=""/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

var Wrap = window.supervar.Wrap;
var content=ReactDOM.render(
    <Wrap content={Content} />,
    document.getElementById("container")
);