/**
 * Created by MG on 16/8/10.
 */

const {imgsrc_cn : imgsrc} = window.supervar;

let shareTimer = null; //用于控制分享按钮显隐状态的timer

class GoodsPreview extends React.Component{
    constructor(){
        super();
        this.state = {
            active : 0, //当前显示缩略图的索引
            userImg : '', //用户输入的图片地址
            showShare : false //分享按钮的显示隐藏状态
        };
    }
    handleActiveImg(i){
        this.setState(function () {
            return {
                active : i
            };
        });
    }
    handleCommitImage(){
        let src = this.refs.imageInput.value;
        let img = new Image();
        img.src = src;
        img.onload = () => {
            this.setState(()=>({
                userImg : src
            }));
            this.props.handleChangeUserImg(src);
        };
        img.onerror= () => {
            alert(this.props.model.alert.brokenImg);
        }
    }
    handleShowShare(){
        clearTimeout(shareTimer);
        this.setState(()=>({
            showShare : true
        }))
    }
    handleHideShare(){
        clearTimeout(shareTimer);
        shareTimer = setTimeout(()=>{
            this.setState(()=>({
                showShare : false
            }))
        },260)
    }

    render(){

        let template = null;
        let action = this.props.isGoodsAnimationDown ? '' : 'action';
        let bgStyle = {};
        let model = this.props.model.goodsPreview;
        let toolbar = (()=>{
            return (
                <ul className={(this.props.isBrokenGoods ? 'disabled' : '') + " preview-toolbar"}>
                    <li className={(this.state.showShare ? 'active' : '') + " preview-share"} onMouseEnter={this.handleShowShare.bind(this)} onMouseLeave={this.handleHideShare.bind(this)}>
                        <i></i>
                        <nav className="bdsharebuttonbox">
                            <a href="javascript:;" data-cmd="fbook"></a>
                            <a href="javascript:;" data-cmd="qzone"></a>
                            <a href="javascript:;" data-cmd="weixin"></a>
                            <a href="javascript:;" data-cmd="tsina"></a>
                            <span></span>
                            <span></span>
                            <div className="preview-share-mask"></div>
                        </nav>
                    </li>
                    {/*<li className="preview-like">*/}
                    {/*<i></i>*/}
                    {/*<span>--</span>*/}
                    {/*</li>*/}
                    <li className="preview-pv">
                        <i></i>
                        <span>{this.props.goodsInfo.pv || "--"}</span>
                    </li>
                </ul>
            )
        })();

        if(this.props.isBrokenGoods){
            bgStyle = this.state.userImg ? {backgroundImage:`url(${this.state.userImg})`} : {};
            template = (
                <div className="buy-preview">
                    <div className="preview-window" style={bgStyle}>
                        <div id="goodsShadow" style={bgStyle} className={action}></div>
                        <div className="preview-userEdit">
                            <div className={(this.state.userImg ? 'none' : '') + ' preview-tips-top'}>
                                <img src={`${imgsrc}buy/brokenGoods_default.png`}/>
                                <p>{model.tips[0]}<em>{model.tips[1]}</em></p>
                            </div>
                            <div className="preview-tips-bottom">
                                <span className="preview-tips2">{model.tips[2]}</span>
                                <p><input type="text" ref="imageInput" placeholder={model.placeholder}/><a href="javascript:;" onClick={this.handleCommitImage.bind(this)}>{model.commit}</a></p>
                            </div>
                        </div>
                    </div>
                    {toolbar}
                </div>
            )
        }else{
            let goodsInfo = this.props.goodsInfo;

            let itemImgs = goodsInfo.itemImgs,
                mainItemImgs = goodsInfo.mainItemImgs;

            if(itemImgs === undefined || mainItemImgs === undefined){
                bgStyle = {
                    backgroundImage:`url(${window.supervar.imgsrc_cn}buy/loading_32_32.gif)`,
                    backgroundSize:'auto'
                };

                template = (
                    <div className="buy-preview">
                        <div className="preview-window" style={bgStyle}><div id="goodsShadow" style={bgStyle} className={action}></div></div>
                        {toolbar}
                    </div>
                )
            }else if(itemImgs === null || mainItemImgs === null){
                bgStyle = goodsInfo.picUrl ? {backgroundImage:`url(${goodsInfo.picUrl})`} : {'background-color':'#eee'};
                template = (
                    <div className="buy-preview">
                        <div className="preview-window" style={bgStyle}><div id="goodsShadow" style={bgStyle} className={action}></div></div>
                        {toolbar}
                    </div>
                )
            }else{
                bgStyle = {backgroundImage:`url(${mainItemImgs[this.state.active]})`};

                template = (
                    <div className="buy-preview">
                        <div className="preview-window" style={bgStyle}><div id="goodsShadow" style={bgStyle} className={action}></div></div>
                        <div className="preview-list">
                            <ul className="clearfix">
                                {itemImgs.map((img,i) =>
                                    <li key={i} onMouseEnter={this.handleActiveImg.bind(this,i)} className={this.state.active === i ? 'active' : ''} style={{backgroundImage:`url(${img})`}}><i></i></li>
                                )}
                            </ul>
                        </div>
                        {toolbar}
                    </div>
                )
            }
        }
        return template;
    }
}

export default GoodsPreview;