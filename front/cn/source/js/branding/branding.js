import '../../less/branding/branding.less';

var imgsrc=window.supervar.imgsrc_cn;

/* your logic code */


var information = [
    {
        id:1,
        title:"first",
        bigIntro:{},
        smallIntro:[],
        pic:[
            {
                id:1,
                src:imgsrc+"branding/superbuy_pic.png"
            },
            {
                id:2,
                src:imgsrc+"branding/icon_77.png"
            },
        ]
    },
    {
        id:2,
        title:"second",
        bigIntro: {
            title1:"Superbuy代购",
            title2:"比自己购物更好的结果",
            detail:"完全0服务费\n/\n商品选择无限\n/\n专人严苛验货\n专家寻货采购\n/\n合箱仓储集运\n/\n全程跟踪售后"
        },
        smallIntro:[
            "想买的东西当地买不到？",
            "买到不合适或问题商品？",
            "自己找货下单寄送流程复杂？",
            "单个寄送国际运费很高？",
            "售后麻烦且成本极高？"
        ],
        pic:[
            {
                id:1,
                title:"right",
                src:imgsrc+"branding/s1.png"
            }
        ]

    },
    {
        id:3,
        title:"third",
        bigIntro:{
            title1:"Superbuy代购",
            title2:"首先确保您如意收到商品",
            detail:"专人验货\n/\n合箱集运\n/\n180天科学免费仓储\n仓库无死角电子监控\n/\n全程跟踪售后服务\n支持定制打包\n/\n大宗物流/特殊商品寄送"
        },
        smallIntro:[
            "国际运费高？",
            "各种邮寄限制？",
            "退换货成本极高且耗时？",
            "包裹厌恶丢失破损几率较高？",
            "国际购物遇假货烂货？"
        ],
        pic:[
            {
                id:1,
                title:"left",
                src:imgsrc+"branding/s2.png"
            }
        ]
    },
    {
        id:4,
        title:"fourth",
        bigIntro:{
            title1:"Superbuy代购",
            title2:"是你可依赖的服务者",
            detail:"坚持用户第一/专家寻货采购/24小时双语客服\n专人跟踪订单/CEO直达邮箱"
        },
        smallIntro:[
            "最怕代购商只完成一个购买寄送，其他事项不管不顾或敷衍了事？",
            "代购商把问题责任推给卖家和物流商？",
            "不得不忍受低质客服？"
        ],
        pic:[
            {
                id:1,
                title:"right",
                src:imgsrc+"branding/s3.png"
            }
        ]
    },
    {
        id:5,
        title:"fifth",
        bigIntro:{
            title1:"Superbuy",
            title2:"努力支持您的所有跨国需求",
            detail:"自营商城/自助转运/旅游/B2B业务/香港分部"
        },
        smallIntro:[
            "信任了一个代购平台，但单一代购服务解决不了全面的需求？"
        ],
        pic:[
            {
                id:1,
                title:"left",
                src:imgsrc+"branding/s4.png"
            }
        ]
    },
    {
        id:6,
        title:"sixth",
        bigIntro:{
            title1:"Superbuy云商",
            title2:"支持您的全球事业",
            detail1:"系统自动无缝对接",
            detail2:"定制采购价/专享物流运费",
            detail3:"定制包装及更多服务/代发货/报表输出"
        },
        smallIntro:[
            "从代购模式看到了国际商机，想开展自己的事业，却找不到质价皆优货源？",
            "不能给用户提供定制化服务？",
            "疲于奔命订单管理和包裹寄送？"
        ],
        pic:[
            {
                id:1,
                title:"right",
                src:imgsrc+"branding/s5.png"
            }
        ]
    },
    {},
];



var containmentPropType = React.PropTypes.any;

if (typeof window !== 'undefined') {
    containmentPropType = React.PropTypes.instanceOf(Element);
}
var FirstPing = React.createClass({
    render:function () {
        return(

                    <div className="firstPing" id="index_0">
                        <img src={imgsrc+"branding/firstPingBG_01.png"} alt=""/>
                    </div>

        )
    }
});

var SecPing = React.createClass({
    render:function () {
        return(
            <div className="SecPing" id="index_1">
                <div className="content_box">
                <div className="SecLeft">
                    <div className={this.props.aa=="true"?"smallIntro":"smallIntro_none"}>
                        {
                            information[1].smallIntro.map((a,b)=>{
                                return(
                                    <em className={"item_"+b}>
                                        <img src={imgsrc+"branding/secPing/sec_shape"+b+".png"} alt=""/>
                                        <em className="information">{a}</em>
                                    </em>
                                )
                            })
                        }
                    </div>
                    <div className="bigIntro">
                        <div className="title">{information[1].bigIntro.title1}</div>
                        <div className="title">{information[1].bigIntro.title2}</div>
                        <div className="detail">{information[1].bigIntro.detail}</div>
                    </div>
                </div>
                <div className="SecRight">
                    <img src={imgsrc+"branding/s1.png"} alt=""/>
                </div>
                </div>
            </div>
        )
    }
});

var ThirdPing = React.createClass({
    render:function () {
        return(
            <div className="ThirdPing" id="index_2">
                <div className="content_box">
                <div className="ThirdLeft">
                    <img src={imgsrc+"branding/s2.png"} alt=""/>
                </div>
                <div className="ThirdRight">
                    <div className={this.props.aa=="true"?"smallIntro":"smallIntro_none"}>
                        {
                            information[2].smallIntro.map((a,b)=>{
                                return(
                                    <em className={"item_"+b}>
                                        <img src={imgsrc+"branding/thirdPing/Third_shape"+b+".png"} alt=""/>
                                        <em className="information">{a}</em>
                                    </em>
                                )
                            })
                        }
                    </div>
                    <div className="bigIntro">
                        <div className="title">{information[2].bigIntro.title1}</div>
                        <div className="title">{information[2].bigIntro.title2}</div>
                        <div className="detail">{information[2].bigIntro.detail}</div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
});

var FourthPing = React.createClass({
    render:function () {
        return(
            <div className="FourthPing" id="index_3">
                <div className="content_box">
                <div className="FourthLeft">
                    <div className={this.props.aa=="true"?"smallIntro":"smallIntro_none"}>
                        {
                            information[3].smallIntro.map((a,b)=>{
                                return(
                                    <em className={"item_"+b}>
                                        <img src={imgsrc+"branding/fourthPing/Fourth_shape"+b+".png"} alt=""/>
                                        <em className="information">{a}</em>
                                    </em>
                                )
                            })
                        }
                    </div>
                    <div className="bigIntro">
                        <div className="title">{information[3].bigIntro.title1}</div>
                        <div className="title">{information[3].bigIntro.title2}</div>
                        <div className="detail">{information[3].bigIntro.detail}</div>
                    </div>
                </div>
                <div className="FourthRight">
                    <img src={imgsrc+"branding/fourthS.png"} alt=""/>
                </div>
                </div>

            </div>
        )
    }
});

var FifthPing = React.createClass({
    render:function () {
        return(
            <div className="FifthPing" id="index_4">
                <div className="content_box">
                <div className="FifthLeft">
                    <img src={imgsrc+"branding/HK.png"} alt=""/>
                </div>
                <div className="FifthRight">
                    <div className={this.props.aa=="true"?"smallIntro":"smallIntro_none"}>
                        {
                            information[4].smallIntro.map((a,b)=>{
                                return(
                                    <em className={"item_"+b}>
                                        <img src={imgsrc+"branding/fifthPing/Fifth_shape"+b+".png"} alt=""/>
                                        <em className="information">{a}</em>
                                    </em>
                                )
                            })
                        }
                    </div>
                    <div className="bigIntro">
                        <div className="title">{information[4].bigIntro.title1}</div>
                        <div className="title">{information[4].bigIntro.title2}</div>
                        <div className="detail">{information[4].bigIntro.detail}</div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
});

var SixPing = React.createClass({
    render:function () {
        return(
            <div className="SixPing" id="index_5">
                <div className="content_box">
                <div className="SixLeft">
                    <div className={this.props.aa=="true"?"smallIntro":"smallIntro_none"}>
                        {
                            information[5].smallIntro.map((a,b)=>{
                                return(
                                    <em className={"item_"+b}>
                                        <img src={imgsrc+"branding/sixthPing/Six_shape"+b+".png"} alt=""/>
                                        <em className="information">{a}</em>
                                    </em>
                                )
                            })
                        }
                    </div>
                    <div className="bigIntro">
                        <div className="title title1">{information[5].bigIntro.title1}</div>
                        <div className="title title2">{information[5].bigIntro.title2}</div>
                        <div className="detail">{information[5].bigIntro.detail1}</div>
                        <div className="detail">{information[5].bigIntro.detail2}</div>
                        <div className="detail">{information[5].bigIntro.detail3}</div>
                    </div>
                </div>
                <div className="SixRight">
                    <img src={imgsrc+"branding/s5.png"} alt=""/>
                </div>
                </div>
            </div>
        )
    }
})

var  Branding= React.createClass({
    propTypes: {
        onChange: React.PropTypes.func.isRequired,
        active: React.PropTypes.bool,
        partialVisibility: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        ]),
        delay: React.PropTypes.number,
        delayedCall: React.PropTypes.bool,
        containment: containmentPropType,
        children: React.PropTypes.element,
        minTopValue: React.PropTypes.number
    },

    getDefaultProps: function () {
        return {
            active: true,
            partialVisibility: false,
            minTopValue: 0,
            delay: 1000,
            delayedCall: false,
            containment: null,
            children: React.createElement('span')
        };
    },

    getInitialState: function () {
        return {
            isVisible: null,
            visibilityRect: {}
        };
    },

    componentDidMount: function () {
        if (this.props.active) {
            this.startWatching();
        }
    },

    componentWillUnmount: function () {
        this.stopWatching();
    },

    componentWillReceiveProps: function (nextProps) {
        if (nextProps.active) {
            this.setState(this.getInitialState());
            this.startWatching();
        } else {
            this.stopWatching();
        }
    },

    startWatching: function () {
        if (this.interval) { return; }
        this.interval = setInterval(this.check, this.props.delay);
        // if dont need delayed call, check on load ( before the first interval fires )
        !this.props.delayedCall && this.check();
    },

    stopWatching: function () {
        this.interval = clearInterval(this.interval);
    },

    /**
     * Check if the element is within the visible viewport
     */
    check: function () {
        var el = ReactDOM.findDOMNode(this);
        var rect;
        var containmentRect;

        // if the component has rendered to null, dont update visibility
        if (!el) {
            return this.state;
        }

        rect = el.getBoundingClientRect();

        if (this.props.containment) {
            containmentRect = this.props.containment.getBoundingClientRect();
        } else {
            containmentRect = {
                top: 0,
                left: 0,
                bottom: window.innerHeight || document.documentElement.clientHeight,
                right: window.innerWidth || document.documentElement.clientWidth
            };
        }

        var visibilityRect = {
            top: rect.top >= containmentRect.top,
            left: rect.left >= containmentRect.left,
            bottom: rect.bottom <= containmentRect.bottom,
            right: rect.right <= containmentRect.right
        };

        var fullVisible = (
            visibilityRect.top &&
            visibilityRect.left &&
            visibilityRect.bottom &&
            visibilityRect.right
        );

        var isVisible = fullVisible;

        // check for partial visibility
        if (this.props.partialVisibility) {
            var partialVertical =
                (rect.top >= containmentRect.top && rect.top <= containmentRect.bottom)           // Top is visible
                || (rect.bottom >= containmentRect.top && rect.bottom <= containmentRect.bottom)  // Bottom is visible
                || (rect.top <= containmentRect.top && rect.bottom >= containmentRect.bottom);    // Center is visible


            var partialHorizontal =
                (rect.left >= containmentRect.left && rect.left <= containmentRect.right)         // Left side is visible
                || (rect.right >= containmentRect.left && rect.right <= containmentRect.right)    // Right side is visible
                || (rect.left <= containmentRect.left && rect.right >= containmentRect.right);    // Center is visible

            var partialVisible = partialVertical && partialHorizontal;

            // account for partial visibility on a single edge
            if (typeof this.props.partialVisibility === 'string') {
                partialVisible = visibilityRect[this.props.partialVisibility]
            }

            // if we have minimum top visibility set by props, lets check, if it meets the passed value
            // so if for instance element is at least 200px in viewport, then show it.
            isVisible = this.props.minTopValue
                ? partialVisible && rect.top <= (containmentRect.bottom - this.props.minTopValue)
                : partialVisible
        }

        var state = this.state
        // notify the parent when the value changes
        if (this.state.isVisible !== isVisible) {
            state = {
                isVisible: isVisible,
                visibilityRect: visibilityRect
            };
            this.setState(state);
            this.props.onChange(isVisible, visibilityRect);
        }

        return state;
    },

    render: function () {
        return React.Children.only(this.props.children);
    }
});
var timer;
class Content extends React.Component{
    constructor (props){
        super(props);
        this.state= {
            msg_1: "",
            msg_2: "",
            msg_3: "",
            msg_4: "",
            msg_5: "",
            msg_6: "",
            currImg: 0,
            class:["curr","","","","",""]

        }
    }
    componentDidMount(){
        var that=this;
        function slide_1(e) {
            e.preventDefault();
            var turn = parseInt(e.wheelDelta || e.detail);
            if(turn>0){
                that.setState({currImg:that.state.currImg>0?that.state.currImg-=1:that.state.currImg=6});
            }else if(turn<0){
                that.setState({currImg:that.state.currImg<6?that.state.currImg+=1:that.state.currImg=0});
            }
        }
        if(typeof document.onmousewheel=="object"){document.getElementById("containBox").addEventListener("mousewheel",slide_1,false);}
       if(typeof document.onmousewheel=="undefined"){document.getElementById("containBox").addEventListener("DOMMouseScroll",slide_1,false)}

    }
    slide (e) {
        e.preventDefault();
        var that=this;
        that.setState({currImg:that.state.currImg<6?that.state.currImg+=1:that.state.currImg=0});
    }
    changeIndex (index) {
        this.state.class=[];
        this.state.class[index]="curr";
        this.setState({class:this.state.class});
    }

    index (index){
        this.state.currImg=index;
        this.changeIndex(index);
    }

    onChange_1 (isVisible){
        this.setState({
            msg_1:isVisible?"true":"false",

        });
    }
    onChange_2 (isVisible){
        this.setState({
            msg_2:isVisible?"true":"false",

        });
    }
    onChange_3 (isVisible){
        this.setState({
            msg_3:isVisible?"true":"false",

        });
    }
    onChange_4 (isVisible){
        this.setState({
            msg_4:isVisible?"true":"false",
        });
    }
    onChange_5 (isVisible){
        this.setState({
            msg_5:isVisible?"true":"false",
        });
    }
    onChange_6 (isVisible){
        this.setState({
            msg_6:isVisible?"true":"false",
        });
    }
    render (){
        var self=this;
        return(
            <div className="containBox" id="containBox" style={{bottom:this.state.currImg==6?"5320px":(this.state.currImg)*980+"px"}}>
                <ul className="index">
                    {information.map((a,b)=>{
                        return(
                            <li className={self.state.currImg==b?"curr":""} onClick={self.index.bind(self,b)}></li>
                        )

                    })}
                </ul>

                <a href="" className="toNext" onClick={this.slide.bind(this)} style={{display:this.state.currImg==6?"none":"block"}}>
                    <em className="flashLight"></em>
                    <img src={imgsrc+"branding/toNext.png"} alt=""/>
                </a>

                            <div className="foreground">
                                <Branding
                                    contaninment={this.props.containment}
                                    onChange={this.onChange_1.bind(this)}
                                    minTopValue={this.props.minTopValue}
                                    partialVisibility={this.props.partialVisibility}
                                >
                                    <FirstPing aa={this.state.msg_1} num="0"/>
                                </Branding>
                            </div>
                <div className="foreground">
                    <Branding
                        contaninment={this.props.containment}
                        onChange={this.onChange_2.bind(this)}
                        minTopValue={this.props.minTopValue}
                        partialVisibility={this.props.partialVisibility}
                    >
                        <SecPing aa={this.state.msg_2} num="1"/>
                    </Branding>
                </div>
                <div className="foreground">
                    <Branding
                        contaninment={this.props.containment}
                        onChange={this.onChange_3.bind(this)}
                        minTopValue={this.props.minTopValue}
                        partialVisibility={this.props.partialVisibility}
                    >
                        <ThirdPing aa={this.state.msg_3} num="2"/>
                    </Branding>
                </div>
                <div className="foreground">
                    <Branding
                        contaninment={this.props.containment}
                        onChange={this.onChange_4.bind(this)}
                        minTopValue={this.props.minTopValue}
                        partialVisibility={this.props.partialVisibility}
                    >
                        <FourthPing aa={this.state.msg_4} num="3"/>
                    </Branding>
                </div>
                <div className="foreground">
                    <Branding
                        contaninment={this.props.containment}
                        onChange={this.onChange_5.bind(this)}
                        minTopValue={this.props.minTopValue}
                        partialVisibility={this.props.partialVisibility}
                    >
                        <FifthPing aa={this.state.msg_5} num="4"/>
                    </Branding>
                </div>
                <div className="foreground">
                    <Branding
                        contaninment={this.props.containment}
                        onChange={this.onChange_6.bind(this)}
                        minTopValue={this.props.minTopValue}
                        partialVisibility={this.props.partialVisibility}
                    >
                        <SixPing aa={this.state.msg_6} num="5"/>
                    </Branding>
                </div>
                <div className="foot" id="foot">
                    <div className="footer">
                        <img src={imgsrc+"branding/footer_1.png"} alt=""/>
                    </div>
                    <div className="exp">
                        <a href="">
                            立即体验Superbuy
                        </a>
                    </div>
                    <div className="vit">
                        <a href="">
                            去逛逛大促活动
                        </a>
                    </div>
                </div>

            </div>


        )
    }
}
Content.defaultProps={
    minTopValue:10,
    partialVisibility:true
}

var Wrap = window.supervar.Wrap;
var content=ReactDOM.render(
    <Wrap content={Content} />,
    document.getElementById("container")
);