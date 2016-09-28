import '../../less/appdownload/APPDownLoad.less';

var imgsrc=window.supervar.imgsrc_en;

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
                            <em className="scan">Scan QR code to download
                            </em>
                        </div>
                        <div className="button">
                            <a href="" >
                                <em className="icon">
                                    <img src={imgsrc+"appdownload/ios_icon.png"} alt=""/>
                                </em>
                                <em className="cat_intro">
                                    <em>Download on the </em>
                                    <em>App Store</em>
                                </em>
                            </a>
                            <a href="">
                                <em className="icon">
                                    <img src={imgsrc+"appdownload/android_icon.png"} alt=""/>
                                </em>
                                <em className="cat_intro">
                                    <em>Available on the Android </em>
                                    <em>App Store</em>
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
                                <em>Infinite Choice
                                </em>
                                <em>Items from Taobao, Tmall, and other e-commerce platforms are available
                                </em>
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
                                <em>Easy Pay
                                </em>
                                <em>Multiple payment methods are available, safe and convenient.
                                </em>
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
                                <em>Shipping Perks
                                </em>
                                <em>Cooperation with international famous logistics companies
                                </em>
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