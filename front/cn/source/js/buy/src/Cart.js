/**
 * Created by MG on 16/8/10.
 */

const {util} = window.supervar;

let cacheCount = null;

class Cart extends React.Component{

    handleAdd(goodsCode,count){
        if(count < 999){
            this.props.handleChangeCartCount(goodsCode, ++count)
        }
    }

    handleReduce(goodsCode,count){
        if(count > 1){
            this.props.handleChangeCartCount(goodsCode, --count)
        }
    }

    handleCacheCount(event){
        cacheCount = event.target.value;
    }

    handleChangeCount(goodsCode,event){
        let value = event.target.value;
        if(value === "0" || value === ""){
            this.props.handleChangeCartCountWidthNoFetch(goodsCode,"1");
            return;
        }

        value = parseInt(value);

        if(!isNaN(value)){
            this.props.handleChangeCartCountWidthNoFetch(goodsCode,value);
        }



    }

    handleChangeCountEnd(goodsCode,event){
        let count = parseInt(event.target.value);
        if(!isNaN(count)){
            let _count = 0;

            if(count > cacheCount && count > 999 && cacheCount > 999){
                _count = cacheCount;
            }else if(count > 999){
                _count = 999;
            }else if(count < 1){
                _count = 1;
            }else{
                _count = count;
            }

            this.props.handleChangeCartCount(goodsCode, _count)
        }else{
            this.props.handleChangeCartCount(goodsCode, cacheCount)
        }
    }

    render(){
        this.totalCount = 0;
        this.totalPrice = 0;
        this.goods = [];
        let model = this.props.model.cart;
        let cartUrl = this.props.model.cartUrl;
        let cart = this.props.cartInfo;

        if(util.getConstructorName(cart) === "Array" && cart.length > 0){
            cart.sort((m,n)=> n.goodsAddTime - m.goodsAddTime);
            cart.forEach(item =>{
                this.totalCount += item.count - 0;
                this.totalPrice += item.price*item.count;
                let bg = item.picture ? {'background-image':`url(${item.picture})`} : {};
                this.goods.push(
                    <li>
                        <div className="goods-pic" style={bg}></div>
                        <div className="goods-info">
                            <p title={item.goodsName}>{item.goodsPrifex === 'NOCRAWLER' ? model.userGoodsTitle : item.goodsName}</p>
                            <p title={item.userSkus || item.goodsRemark}>{item.userSkus || item.goodsRemark}&nbsp;</p>
                            <div className="goods-price clearfix">
                                <div className="goods-count">
                                    <button disabled={item.count <= 1} onClick={this.handleReduce.bind(this,item.goodsCode,item.count)}>-</button>
                                    <input
                                        value={item.count}
                                        onFocus={this.handleCacheCount.bind(this)}
                                        onBlur={this.handleChangeCountEnd.bind(this,item.goodsCode)}
                                        onChange={this.handleChangeCount.bind(this,item.goodsCode)}
                                    />
                                    <button disabled={item.count >= 999} style={{marginLeft:'-1px'}} onClick={this.handleAdd.bind(this,item.goodsCode,item.count)}>+</button>
                                </div>
                                <strong>￥<span>{item.price}</span></strong>
                            </div>
                        </div>
                        <i className="goods-delete" onClick={this.props.handleDeleteCart.bind(this,item.goodsCode)}>✕</i>
                    </li>
                )
            });
        }else{
            this.goods = null;
        }

        return (
            <div className="buy-cartBox">
                <div className="cartBox-header">
                    {model.title}(<span>{this.props.cartInfo.length ? this.props.cartInfo.length : 0}</span>)
                </div>
                <div id="cartTarget"></div>
                <ul className="cartBox-body">
                    {/*<li style={{display: this.props.userInfo.user_id ? 'none' : 'block'}}><p>{model.notLogin[0]}<a href={model.loginHref}>{model.notLogin[1]}</a>{model.notLogin[2]}</p></li>*/}
                    {this.goods ? this.goods : <p className="cartBox-box">{model.emptyTip}</p>}
                </ul>
                <div className="cartBox-footer">
                    <p className="clearfix"><span className="fl">{model.choose[0]} {this.totalCount} {model.choose[1]}</span><span className="goods-total">￥{parseFloat(this.totalPrice).toFixed(2)}</span></p>
                    <a className={this.goods ? '' : 'disabled'} href={this.goods ? cartUrl : 'javascript:;'}>{model.button}<i></i></a>
                </div>
            </div>

        )

    }
}

export default Cart;