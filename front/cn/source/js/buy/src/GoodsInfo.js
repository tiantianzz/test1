/**
 * Created by MG on 16/8/10.
 */
const {imgsrc_cn,util,apiURL} = window.supervar;
let loadedGoodsCat = false;

class GoodsInfo extends React.Component{
    constructor(){
        super();

        this.state = {
            goodsCat : [],
            sizesOptionsBorderStyle : {},
            noteActive : 0,
            noteUserEdit : {},
            isEditPrice : false,
            cachePrice : '',

        }
    }

    handleActiveSize(item,index){
        if(this.state.isEditPrice) return;

        if(this.props.skuMatrix[item.propId][index + 1] === 0){
            this.props.handleChangeSizes(item.propId,index);
        }

    }

    handleChangeCount(event){
        let value = event.target.value;
        let _value = parseInt(event.target.value);
        if(value === "" || value === "0"){
            _value = value
        }

        if(!isNaN(_value)){
            this.props.updateCount(_value > this.props.selectedProps.quantity ? this.props.selectedProps.quantity : _value);
        }
    }

    handleAddCount(){
        let count = this.props.selectedProps.count || 1;
        count ++;

        this.props.updateCount(count);
    }

    handleReduceCount(){
        let count = this.props.selectedProps.count || 1;
        count --;

        this.props.updateCount(count);
    }

    handleChangeCachePrice(event){

        let value = event.target.value;

        this.setState(()=>({
            cachePrice : value
        }));
    }
    /**
    * 抓取失败或者没抓取到价格时,用户编辑完价格,输入框失去焦点时,提交价格到selectedProps
    * */
    handleChangeCachePriceEnd(){
        let value = this.state.cachePrice;
        let float = parseFloat(value);
        let res = Number((float > 99999999 ? 0 : float).toFixed(2));

        if(res){
            this.props.handleChangePrice(res);
        }

        this.setState(()=>({
            cachePrice : this.props.selectedProps.price || ''
        }));

    }

    /**
     * 点击修改价格时,没有尺寸可以直接修改,有尺寸时需要先选择尺寸
     * */
    handleEditPrice(){
        let sku = this.props.selectedProps.sku;
        let userPriceAtSku = this.props.selectedProps.userPriceAtSku[sku];
        let doEdit = ()=>{
            this.setState(()=>({
                isEditPrice : true,
                cachePrice : this.props.selectedProps.price || '',
                noteActive : userPriceAtSku ? userPriceAtSku.index : 0,
                noteUserEdit : userPriceAtSku ? {[userPriceAtSku.index] : userPriceAtSku.noteUserEdit} : {}
            }));
        };

        if(this.props.skuMatrix === null){
            doEdit();
        }else{
            if(sku){
                doEdit();
            }else{
                this.props.alertSelectSku();
            }
        }

        // setTimeout(()=>{
        //     console.log(this.state)
        // },1000)
    }

    closeEditPrice(){
        this.setState(()=>({
            isEditPrice : false,
            noteActive : 0,
            noteUserEdit : {}
        }));
    }

    handleCancelNote(){
        // this.setState(()=>({
        //     isEditPrice : false,
        //     // noteActive : -1,
        //     noteActive : 0,
        // }));
        if(this.props.selectedProps.userPrice){
            this.props.handleChangePriceNote('',0,null);
        }
        this.closeEditPrice();
    }
    handleConfirmNote(){
        this.handleChangeCachePriceEnd();
        let noteUserEdit = this.state.noteUserEdit[this.state.noteActive];
        // this.props.handleChangePriceNote(this.model.priceEdit.reasons[this.state.noteActive].txt + (noteUserEdit ? ';' + noteUserEdit : ''));
        /** 参数:priceNote,index,noteUserEdit **/
        this.props.handleChangePriceNote(this.model.priceEdit.reasons[this.state.noteActive].txt,this.state.noteActive,noteUserEdit ? noteUserEdit : null);
        // this.setState(()=>({
        //     isEditPrice : false,
        // }));
        this.closeEditPrice();

    }
    handleChangeNoteUserEdit(event){
        let value = event.target.value;
        this.setState((state)=>{
            let noteUserEdit = state.noteUserEdit;
            noteUserEdit[this.state.noteActive] = value.substr(0,180);
            return {noteUserEdit}
        })
    }
    componentWillMount(){
        this.model = this.props.model.goodsInfo

    }
    componentDidUpdate(){

        let goodsCatId = this.props.goodsInfo.goodsCat;
        if(goodsCatId && !loadedGoodsCat){
            loadedGoodsCat = true;
            fGetGoodsCat(goodsCatId).then(data => {
                // console.log(data);

                if(data.state === 0){
                    this.setState(()=>{
                        return {
                            goodsCat : data.data
                        }
                    })
                }else{
                    // this.setState(()=>{
                    //     return {
                    //         goodsCat : [
                    //             {
                    //                 "znName": "无法验货",
                    //                 "enName": "dzak",
                    //                 "platform": "TB",
                    //                 "lastUpdateTimestamp": 1470044693317,
                    //                 "content": "商品较专业（如电器、专业用具等）无法准确判别质量、真伪、零件齐全等。无法了解商品用途、可能有不可预见的折损风险。",
                    //                 "parent": true
                    //             },
                    //             {
                    //                 "znName": "无法验货2",
                    //                 "enName": "dzak",
                    //                 "platform": "TB",
                    //                 "lastUpdateTimestamp": 1470044693317,
                    //                 "content": "商品较专业（如电器、专业用具等）无法准确判别质量、真伪、零件齐全等。无法了解商品用途、可能有不可预见的折损风险。",
                    //                 "parent": true
                    //             }
                    //         ]
                    //     }
                    // })
                }
            }).catch(err => {
                // console.log(err);
            })
        }

    }

    handleChangeNote (i){
        this.setState(()=>({
            noteActive : i
        }))
    }

    setSizesBorder(){
        this.setState(()=>({
            sizesOptionsBorderStyle : {
                width : `${this.refs.sizesOptions.offsetWidth}px`,
                height : `${this.refs.sizesOptions.offsetHeight}px`,
            }
        }));
    }

    render(){

        this.title = formatTitle(this.props.goodsInfo); //商品标题
        this.price = formatPrice(this.props.goodsInfo,this.props.selectedProps); //商品价格
        this.sizes = formatSizes(this.props.goodsInfo); //商品规格
        this.count = formatCount(this.props.selectedProps); //商品数量
        // this.freight = formatFreight(this.props.goodsInfo) === 'free' ? this.model.options.freight.free : formatFreight(this.props.goodsInfo); //商品运费
        this.quantity = this.props.selectedProps.quantity;
        this.reasons = this.model.priceEdit.reasons;

        // let priceNote = this.props.selectedProps.priceNote;
        // let priceNoteDivIndex = priceNote.indexOf(';');
        // let noteUserEdit = priceNote;
        // console.log(this.state.noteUserEdit[this.state.noteActive])
        // let activeReason = this.model.priceEdit.reasons[this.state.noteActive];
        // let activeReason2 = this.state.noteUserEdit[this.state.noteActive];
        return (

            <div className="buy-info">
                <h3 className="goods-title">{this.title || this.props.goodsUrl}</h3>
                <div className={(this.state.isEditPrice ? 'active' : !this.props.selectedProps.price || this.props.isBrokenGoods ? 'brokenPrice' : '') + ' goods-price'}>
                    <div className="goods-price-tool clearfix">
                        <i className="goods-require">*</i>
                        <i className="goods-rmb">￥</i>
                        <strong className="goods-txt">{typeof this.price === 'number' ? util.cents2Bucks(this.price*100) : this.price}</strong>
                        <input ref="priceInput" onChange={this.handleChangeCachePrice.bind(this)} onBlur={this.handleChangeCachePriceEnd.bind(this)} value={this.state.cachePrice} />
                        <span className="goods-edit" onClick={this.handleEditPrice.bind(this)}>{this.model.priceEdit.edit}</span>
                        <div className="popBox-help">
                            <div className="popBox">
                                <i className="arrow-left"></i>
                                <p>{this.props.isBrokenGoods ? this.model.priceEdit.tipsBroken : this.model.priceEdit.tipsGood}</p>
                            </div>
                        </div>
                    </div>
                    <div className="goods-reasons">
                        <i className="goods-reasons-arrowUp"></i>
                        <div className="goods-reasons-main">
                            <p>{this.model.priceEdit.title}</p>
                            <ul className="clearfix">
                                {this.reasons.map((item,i) =>
                                    <li className={this.state.noteActive === i ? 'active' : ''} onClick={this.handleChangeNote.bind(this,i)}>{item.txt}</li>
                                )}
                            </ul>
                        </div>
                        <div className="goods-reasons-bottom clearfix">
                            {this.reasons[this.state.noteActive].placeholder &&
                            <textarea onChange={this.handleChangeNoteUserEdit.bind(this)} value={this.state.noteUserEdit[this.state.noteActive] || ''} placeholder={this.reasons[this.state.noteActive].placeholder}></textarea>}
                            <button onClick={this.handleCancelNote.bind(this)}>{this.model.priceEdit.buttons[0]}</button>
                            {/**
                             * 确定按钮禁用逻辑:
                             *   价格框(input)的值为空或者不是数字 或者⬇️
                             *   当前选择的价格修改原因需要填写说明(noteUserEdit),但是说明为空时
                             *   禁用按钮
                             **/}
                            <button
                                onClick={this.handleConfirmNote.bind(this)}
                                disabled={!(this.state.cachePrice-0) || isNaN(this.state.cachePrice - 0) || (this.model.priceEdit.reasons[this.state.noteActive].placeholder && !this.state.noteUserEdit[this.state.noteActive])} className="confirm-button">{this.model.priceEdit.buttons[1]}</button>
                        </div>
                    </div>
                    <p style={{display:this.props.selectedProps.userPrice && !this.props.isBrokenGoods ? 'block' : 'none'}} className="goods-reasons-tip">
                        {this.model.priceEdit.tip[0]}{(()=>{

                            {/**
                             * 价格修改原因提示文字:
                             *   有priceNote时,把priceNote用";"分成两部分,显示第一部分,第二部分放在感叹号icon内显示
                             *   无priceNote时,显示"未选择"
                             **/}
                            let priceNote = this.props.selectedProps.priceNote;
                            if(priceNote){
                                let index = priceNote.indexOf(';');
                                if(index === -1){
                                    return priceNote
                                }else{
                                    return (<span>
                                        {priceNote.substr(0,index)}
                                        <div className="popBox-priceTip">
                                            <div className="popBox">
                                                <i className="arrow-left"></i>
                                                <p>{priceNote.substr(index+1)}</p>
                                            </div>
                                        </div>
                                    </span>);
                                    {/*<i title={priceNote.substr(index+1)}>!</i>*/}
                                }

                            }else{
                                return this.model.priceEdit.tip[1];
                            }
                    })()}
                    </p>
                </div>
                <div className="goods-options">
                    <dl className="goods-options-row goods-options-freight">
                        <dt className="goods-options-label goods-mark">{this.model.options.freight.label}</dt>
                        <dd className="goods-options-content">{(()=>{
                            let freight = this.props.selectedProps.freight;
                            let f = formatFreight(this.props.goodsInfo);

                            if(this.props.isBrokenGoods || f === null){
                                return (
                                    <div>
                                        <em className="goods-freight-rmb">￥</em>
                                        <input className="goods-freight" value={freight} onChange={this.props.handleChangeFreight.bind(this)} type="text"/>
                                    </div>
                                )
                            }else{
                                return f === 'free' ? this.model.options.freight.free : f;
                            }
                        })()}</dd>
                    </dl>
                    <dl className="goods-options-row" style={{"display" : this.props.goodsInfo.skuList ? 'none' : 'block'}}>
                        <dt className="goods-options-label">{this.model.options.desc.label}</dt>
                        <dd className="goods-options-content">
                            <textarea id="desc" className="goods-options-text" placeholder={this.model.options.desc.placeholder} onChange={this.props.handleChangeDesc.bind(this)} value={this.props.selectedProps.desc}></textarea>
                            <p className="mb15">
                                {/*<span className="goods-option-desc">{this.model.options.desc.tips} <a href={this.model.options.desc.learnMoreHref}>{this.model.options.desc.learnMore}</a></span>*/}
                                <span className="goods-options-charLimit fr">{this.props.selectedProps.desc.length}/200</span>
                            </p>
                        </dd>
                    </dl>
                    <div className={(this.props.showSizesBorder ? 'show' : '') + ' goods-sizes-border'} ref="sizesBorder" style={this.state.sizesOptionsBorderStyle}></div>
                    <div className="goods-sizes" ref="sizesOptions">

                    {this.sizes.map(size => {

                        return (
                            <dl className="goods-options-row">
                                <dt className="goods-options-label">{size[0].propName}</dt>
                                <dd className="goods-options-content">
                                    <ul className="goods-options-tags">
                                        {size.map((item,i) => {
                                            let tpl = null;
                                            let M = this.props.skuMatrix[item.propId][i+1];

                                            {/*if(item.imgUrl){*/}
                                                {/*tpl = <em><img src={item.imgUrl}/><i>{item.valueName}</i></em>*/}
                                            {/*}else{*/}
                                                tpl = <span title={item.valueName}>{item.valueName}</span>;
                                            {/*}*/}

                                            {/*
                                             return <li className={this.props.sizesSelected[item.propId] == item.valueName ? 'active' : ''} onClick={this.handleActiveSize.bind(this,item)}>{tpl}</li>
                                            */}
                                            return <li className={M == 1 ? 'active' : M == -1 ? 'disabled' : ''} onClick={this.handleActiveSize.bind(this,item,i)}>{tpl}</li>

                                        })}
                                    </ul>
                                </dd>
                            </dl>
                        )
                    })}
                    </div>

                    <li className="goods-options-row">
                        <div className="goods-options-label goods-mark">{this.model.options.count.label}</div>
                        <div className={(!this.count || this.count === "0" ? "error" : "") + " goods-options-content clearfix"}>
                            <input className="goods-count" type="text" value={this.count} onChange={this.handleChangeCount.bind(this)}/>
                            <div className="goods-count-btns">
                                {this.props.selectedProps.count >= this.quantity ?
                                    <i className="disabled goods-count-add">+</i> :
                                    <i className="goods-count-add" onClick={this.handleAddCount.bind(this)}>+</i>
                                }
                                {this.props.selectedProps.count <= 1 ?
                                    <i className="disabled goods-count-reduce">-</i> :
                                    <i className="goods-count-reduce" onClick={this.handleReduceCount.bind(this)}>-</i>
                                }
                            </div>
                            {/*<span>库存:{this.quantity}</span>*/}
                            <br/>
                            <p className="goods-count-error"><img src={`${imgsrc_cn}buy/icon_error.png`} alt=""/>{this.model.options.count.tip}</p>
                        </div>
                    </li>
                </div>

                <div className="goods-commit">
                    <button className="goods-buyNow" disabled={this.props.isBrokenGoods && !this.props.selectedProps.price} onClick={this.props.handleAdd2Cart.bind(this,true,false)}>{this.model.buyNow}</button>
                    <button className="goods-addToCart" disabled={this.props.isBrokenGoods && !this.props.selectedProps.price} onClick={this.props.handleAdd2Cart.bind(this,false,false)}>{this.model.add2Cart}</button>
                    <div className="goods-icon-tag"><i className="shopBox-icon"><img src={`${imgsrc_cn}buy/icon_service.png`} /></i><a href={this.model.serviceHref} target="_blank">{this.model.service}</a></div>
                </div>

                <ul className="goods-options">
                    <li className="goods-options-row" style={{display: this.state.goodsCat.length ? 'block' : 'none'}}>
                        <div className="goods-options-label">{this.model.options.cat.label}</div>
                        <ul className="goods-options-content goods-alert">
                            {this.state.goodsCat.map(cat => {
                                return (
                                    <li className="goods-icon-tag">
                                        <i><img src={`http://static.dotdotbuy.com/images/icon_${cat.enName}.png`} /></i><span>{cat.znName}</span>
                                        {cat.content &&
                                            <div className="popBox">
                                                <div className="arrow-top"></div>
                                                <p dangerouslySetInnerHTML={{ __html : cat.content}}></p>
                                            </div>
                                        }
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                    <li className="goods-options-row">
                        <div className="goods-options-label">{this.model.options.promise.label}</div>
                        <ul className="goods-options-content">
                            {this.model.options.promise.tags.map(item=><li className="goods-icon-tag"><i><img src={`${imgsrc_cn}buy/${item.icon}`} /></i><span>{item.txt}</span></li>)}
                        </ul>
                    </li>
                </ul>
            </div>
        )

    }
}


/**
 * 获取邮限
 * **/
function fGetGoodsCat(goodsCat){
    return util.fetch(`${apiURL}crawler/limit`,{
        method: 'POST',
        headers: {"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},
        body: `goodCat=${goodsCat}`
        // body: `good_cat=${50014015}`
    });
}

/**
 * 格式化商品规格信息
 * **/
function formatSizes(goodsInfo){
    let sizes = {},
        _sizes = [];

    try{
        goodsInfo.productProps.forEach(item => {
            sizes[item.propId] = sizes[item.propId] ? sizes[item.propId] : [];
            sizes[item.propId].push(item);
        });

        for(let name in sizes){
            _sizes.push(sizes[name])
        }
    }catch(e){
        _sizes = [];
    }

    return _sizes;
}

/**
 * 格式化商品价格
 * **/
function formatPrice(goodsInfo,selectedProps){
    try{
        // return selectedProps.price || goodsInfo.proRangePrice || goodsInfo.rangePrice || util.cents2Bucks(goodsInfo.unitPrice.priceCent) || util.cents2Bucks(goodsInfo.proPrice.priceCent);
        return selectedProps.price || '';
    }catch(e){
        return ''
    }
}

/**
 * 格式化商品标题
 * **/
function formatTitle(goodsInfo){
    try{
        return goodsInfo.goodsName;
    }catch(e){
        return ''
    }
}

/**
 * 格式化商品数量
 * **/
function formatCount(selectedProps){
    try{
        return selectedProps.count == null ? 1 : selectedProps.count;
    }catch(e){
        return 1
    }
}

/**
 * 商品运费
 * **/
function formatFreight(goodsInfo){
    try{
        let f = '';

        if(goodsInfo.freight && goodsInfo.freight.price === 0){
            f =  'free'
        }else if(goodsInfo.freight){
            f =  '￥' + util.cents2Bucks(goodsInfo.freight.priceCent)
        }else{
            f = null
        }

        return f;

    }catch(e){
        return ''
    }
}

export default GoodsInfo;