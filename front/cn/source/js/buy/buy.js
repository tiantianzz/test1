/**
 * author: MG
 * 代购抓取页面
 * */

/**
 * IE9下Array的indexOf方法的polyfill
 * **/
if (typeof Array.prototype.indexOf != "function") {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        var index = -1;
        fromIndex = fromIndex * 1 || 0;

        for (var k = 0, length = this.length; k < length; k++) {
            if (k >= fromIndex && this[k] === searchElement) {
                index = k;
                break;
            }
        }
        return index;
    };
}

import '../../less/buy/buy.less';
import GoodsPreview from './src/GoodsPreview';
import GoodsInfo from './src/GoodsInfo';
import ShopBox from './src/ShopBox';
import Cart from './src/Cart';
import GoodsDetail from './src/GoodsDetail';

const {Wrap,util,apiURL,domain,imgsrc_cn} = window.supervar;
const page = `//www.${domain}/cn/page/`;
const lang = 'cn';
let SIZES,SKU; //格式化的尺码和sku信息
let isInitCart = false; //是否已经加载过购物车信息

let model = {
    loading : '正快马加鞭地为您打开页面...',
    googleTip : 'Notice : The translation of this page is from Google Translate.',
    subNav : {
        title : '代购',
        titleHref : `//buy.${domain}/`,
        list : [
            {txt : '购物助手', href: `http://buy.${domain}/views/single/install.html`},
            {txt : '有好货', href: `${page}sthgood/goodIndex/`},
            // {txt : '大客户服务', href: '#'}
        ]
    },
    goodsPreview : {
        tips : ['Sorry,商品信息','无法获取','请自主填写商品信息后提交结算'],
        placeholder : '请复制商品图片网址',
        commit : '提交'
    },
    goodsInfo :{
        priceEdit : {
            title : '请选择修改价格的原因（单选）',
            tip: ['价格修改原因：','未选择'],
            // reasons : ['商品满减优惠','与商家协商后的价格','运费优惠','手机端优惠价','页面价格显示有误','其他原因'],
            reasons : [
                {txt : '商品满减优惠', placeholder : '请填写具体满减优惠额度，以便采购时和卖家确认。'},
                {txt : '与商家协商后的价格'},
                {txt : '运费优惠'},
                {txt : '手机端优惠价'},
                {txt : '页面价格显示有误'},
                {txt : '其他原因', placeholder : '请备注具体原因，以便采购时和卖家确认。'}
            ],
            buttons : ['取消','确定'],
            edit : '修改',
            tipsGood : '您可以修改价格，商品购买后，由于实际支付费用不同，可能需要您补款。',
            tipsBroken : '请填写商品单价。'
        },
        options : {
            freight : {
                label : '国内运费',
                free : '免运费'
            },
            desc : {
                label : '商品描述',
                placeholder : '如您购买的商品含有多种款式、尺寸、颜色等，请您根据商品页面的分类描述，在此备注相关属性。',
                tips : '商品的颜色、尺寸等要求，请在备注栏填写',
                learnMore : '了解更多',
                learnMoreHref : '#'
            },
            count : {
                label : '数量',
                tip : '请填写正确的宝贝数量！'
            },
            cat : {
                label : '提醒'
            },
            promise : {
                label : '承诺',
                tags : [
                    {
                        icon : 'icon_yan.png',
                        txt : '严格验货'
                    },{
                        icon : 'icon_jing.png',
                        txt : '精细包装'
                    },{
                        icon : 'icon_di.png',
                        txt : '汇兑损失最低'
                    }
                ]
            }
        },
        buyNow : '立即购买',
        add2Cart : '加入购物车',
        service : '联系客服',
        serviceHref : 'http://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&configID=126398&jid=3783013802&skillId=6966&pagetitle=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2&enterurl=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2'
    },
    shopBox : {
        content : ['综合指标','描述','服务','物流'],
        button : '查看原链接',
        tipHeader : '*高风险提示，请谨慎购买',
        tipViewCredit : '查看店铺信誉 ＞',
        tipCredit : ['店铺信誉：','低于一个钻石'],
        tipMargin : ['保证金：','低于1000元']
    },
    cart : {
        title : '代购购物车',
        notLogin : ['你还没有','登录','！登录后购物车的商品将保存到您的账户。'],
        loginHref : `${page}login/`,
        choose : ['已选','件'],
        button : '去购物车结算',
        userGoodsTitle : '自主提交的商品',
        emptyTip : '喜欢这件商品，就加进来吧~'
    },
    reasons : {
        title : '为什么选择',
        content : ['大客户服务','0元服务费','个性化服务','无忧赔付','品牌价值'],
        learnMore : {
            txt : '了解更多',
            href : `//www.${domain}/`
        }
    },
    recommend : {
        title : '相关商品推荐'
    },
    hot : {
        title : '精彩主题'
    },
    main : {
        ceo : {
            title : 'CEO温馨提示',
            content: [
                ['1.【关于海关物流】由于各国依据各国海关政策差异，部分国家或地区对特殊商品较为敏感，所以会出现禁运、限购物品、物流线路限制及体积重量限制的情况，具体请点击','版块查看。'],
                ['2.【关于售后问题】如您对商品、包裹、物流有任何疑问，可随时联系我们的在线客服或电话客服 0086-755-33085566，我们会在第一时间为您处理，您也可以点击','版块自助查询了解。']
            ],
            title2 : '提醒',
            content2 : [
                '【店铺优惠】Superbuy独家',
                '·2套减5元 大厂制作，做工精细，品质保证',
                '·3套减10元 舒适透气，不透肉，不起球，不掉色',
                '·4套减15元 时尚气质，不挑年龄，棉质舒适'
            ],
            noTip : '暂无'
        },
        details: {
            title : '商品详情',
            failed : '商品详情抓取失败，暂时无法显示，可在原商品地址查看。'
        },
        notes : {
            title : '代购须知',
            goods : {
                title : '【禁运和限购物品】',
                href : '#',
                content : [
                    ['·烟、酒、药、违禁品','不承运'],
                    ['·液体和膏状货物化妆品','限量代购，指甲油、香水、精油、摩丝、喷雾违禁品不可寄送。'],
                    ['·中药属于中国海关限制出口货物'],
                    ['·暂不支持虚拟产品']
                ],
                tips : ['违禁品包括：','瑞士军刀，全套厨房刀具，菜刀，裁纸/切纸/拆信刀，园艺/刀/剪/锯，拆线器/拆线刀，纯果蔬汁，充气打火机，葡萄酒，油灰刀，芝士/西式奶酪，大闸蟹，竹剑/木刀，军刀卡/万能刀卡，冰刀鞋，其他户外刀具，磁性元器件，瑞士军刀，立铣刀，雕刻刀，烟标/烟卡，金刚铃/金刚杵/钺刀，种子。']
            },
            route : {
                title : '【各线路邮寄限制】',
                href : '#',
                rowHeaders : ['EMS','DHL','专线','特惠线'],
                columnHeaders : ['液体','香水','气体','光盘','仿牌','药品','保健品','电池','电子数码'],
                ok:[
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [1,0,0,0],
                    [1,0,0,0],
                    [1,0,0,0],
                    [1,0,0,0],
                    [0,0,0,0],
                    [1,0,0,0]
                ]
            },
            volume : {
                title : '【体积重量限制】',
                href : '#',
                content : [
                    ['单边长＞100cm，无法寄送','体积重量(kg)=长cm×宽cm×高cm/5000'],
                    ['单边长＞100cm，无法寄送','按实际重量(kg)收费'],
                    ['单边长＞100cm，无法寄送','体积重量(kg)=长cm×宽cm×高cm/5000'],
                    ['单边长＞100cm，无法寄送','体积重量(kg)=长cm×宽cm×高cm/6000'],
                    ['长宽高合计＞90cm / 单边长＞60cm，无法寄送']
                ]
            }
        },
        after : {
            title : '售后服务',
            content : [
                {
                    title : '【查询物流】',
                    content : [
                        {txt : '包裹收货注意事项',href:`${page}help/#p4_53_helpId2`},
                        {txt : '“未妥投”代表什么意思？',href:`${page}help/#p4_53_helpId49`},
                        {txt : '包裹发出后，如何查询物流信息？',href:`${page}help/#p4_53_helpId90`},
                        {txt : '包裹发出后，如何跟踪物流信息？',href:`${page}help/#p4_53_helpId8`}
                    ]
                },
                {
                    title : '【商品异常】',
                    content : [
                        {txt : '关于包装细节',href:`${page}help/#p4_54_helpId79`},
                        {txt : '收到货后发现商品问题怎么办？',href:`${page}help/#p4_54_helpId31`},
                        {txt : '我代购的易碎品如果损坏怎么办？',href:`${page}help/#p4_54_helpId16`}
                    ]
                },
                {
                    title : '【包裹丢失】',
                    content : [
                        {txt : '包裹保险及赔偿',href:`${page}help/#p4_55_helpId148`},
                        {txt : '包裹转运验货规则',href:`${page}help/#p4_55_helpId132`},
                        {txt : '购物网上有货，但为什么superbuy说无货呢？',href:`${page}help/#p4_55_helpId14`}
                    ]
                }
            ]
        }
    },
    cartUrl : `//www.${domain}/cart/`,
    alert : {
        noPrice : '请填写物品价格',
        noSizes : '请选择物品规格',
        userEdit : '请自主填写商品信息',
        brokenPlatform: '不支持该平台',
        noLink : '没有商品链接',
        brokenImg : '请输入正确的图片地址',
        addGoodsSuccess : '添加商品成功',
        addGoodsFail : '添加商品失败'
    }
};

class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            /**
             * 原始抓取数据
             * */
            goodsInfo : {},
            /**
             * 尺码状态矩阵
             *
             * skuMatrix : {
             *   <propId> : [<已选择:1,未选择:0>,<缺货:-1,未选中:0,选中:1>,...], //第一位表示此属性是否已选择,之后每位表示对应规格按钮的选择状态
             *   ...
             * }
             *
             * eg:
             * skuMatrix : {
             *   20549 : [1,1,0,0,0,0],
             *   1627207 : [0,0,0,0,0]
             * }
             * */
            skuMatrix : {},
            /**
             * 用户选择商品的属性集合
             * */
            selectedProps : {
                sku : null,
                quantity : 999, //库存
                count : 1, //用户选择数量
                price : null,
                desc : '',
                freight : '0',
                priceNote : '',
                userPrice : false,
                userPriceAtSku : {},
                // userPriceAtSku : {
                //     "123123" : {
                //         price : '', //价格
                //         priceNote : '', //修改原因文字
                //         index : 0, //修改原因索引
                //         noteUserEdit : null //修改原因用户备注
                //     }
                // },
                userImage : '',
                userGoodsName : ''
            },
            /**
             * 购物车数据
             * */
            cartInfo : [],
            /**
             * 工具栏的fixed状态
             * */
            toolbarFixed : false,
            /**
             * 工具栏按钮状态
             * */
            toolbarButtons : [0,0,0],
            /**
             * 是否显示提示用户选择尺码的红框
             * */
            showSizesBorder : false,
            /**
             * 价格框是否是在编辑状态
             * */
            editPrice : false,
            /**
            * 添加到购物车动画是否完成
            * */
            isGoodsAnimationDown : true,
            /**
             * 是否抓取失败
             * */
            isBrokenGoods : false,
            /**
            * 商品URL
            * */
            goodsUrl : '',
            /**
             * 有好货专题
             * */
            topHot : {
                title : '',
                desc : '',
                image : null,
                id : null
            },
            /**
             * 是否抓取完成
             * */
            isCrawlComplete: false,
            /**
             * 谷歌翻译提醒
             * */
            googleTip : lang !== 'cn',
            /**
             * 是否加载了推荐商品
             * **/
            isLoadedRecommend: false,
            /**
             * 推荐商品列表
             * **/
            recommendList : null
        };
    }
    /**
     * 返回顶部按钮点击后,Wrap会调用此方法
     * */
    handleBackToTop(){
        this.setState(()=>({
            toolbarFixed : false
        }));
    }

    handleCloseGoogleTip(){
        this.setState(()=>({googleTip:false}))
    }

    handleChangeSizes(propId,index){

        this.setState((state) =>{
            let M = state.skuMatrix;
            M[propId] = M[propId].map((s,i) => {
                if(i === 0){
                    return 1
                }else if(i === index + 1){
                    return 1
                }else{
                    return s === -1 ? s : 0;
                }
            })
        });

        this.updateSkuMatrix(propId,index);

        this.setState(()=>({
            showSizesBorder : false
        }));

    }
    alertSelectSku(){
        this.setState(()=>({
            showSizesBorder : true
        }));
        this.refs.goodsInfo.setSizesBorder();
        alert(model.alert.noSizes);
    }
    handleAdd2Cart(isGotoCart,isAlert){
        /** isGotoCart:加入购物车成功后,是否跳转到购物车页面;  isAlert:是否提示加入购物车成功/失败**/
        let count = this.state.selectedProps.count;
        if(!count || count === "0"){
            return
        }

        let goToTop = ()=>{

            this.setState(()=>({
                toolbarFixed : false
            }));
            util.setScrollTop(0);

        };

        if(!this.state.selectedProps.price && !isNaN(this.state.selectedProps.price - 0)){
            // this.handleEditPrice(true);
            goToTop();
            alert(model.alert.noPrice);
            return;
        }

        // console.log(SKU,this.state.selectedProps.sku)

        if(SKU && !this.state.selectedProps.sku){
            this.alertSelectSku();
            goToTop();
            return;
        }

        /**
         * 商品描述暂时不是必传
         * **/
        // if(this.state.goodsInfo.skuList){
        //     if(this.state.goodsInfo.skuList.length && !this.state.selectedProps.desc){
        //         alert('请填填写商品描述!');
        //         return;
        //     }
        //
        // }else{
        //     if(!this.state.selectedProps.desc){
        //         alert('请填填写商品描述!');
        //         return;
        //     }
        // }

        /** 添加到购物车 **/
        let goodsParams = this.makeGoodsParams();

        /** 价格有区间的情况,再次检查价格。 **/
        if(!goodsParams){
            // this.handleEditPrice(true);
            goToTop();
            return;
        }
        // console.log(isAlert);

        this.state.isGoodsAnimationDown && request.add2Cart(goodsParams).then(data => {

            if(data.state === 0){
                if(isGotoCart){
                    window.location.href = model.cartUrl;
                }else{
                    this.goodsAnimation();
                    this.props.handleCartAddOne();
                }
            }

            if(isAlert){
                alert(model.alert[data.state === 0 ? 'addGoodsSuccess' : 'addGoodsFail'])
            }
        }).catch(err => {
            if(isAlert){
                alert(model.alert['addGoodsFail'])
            }
        });
    }
    handleChangeDesc(event){
        let text = event.target.value;

        this.setState((state)=>{
            let selectedProps = state.selectedProps;
            selectedProps.desc = text.length > 200 ? text.substring(0,200) : text;

            return {
                selectedProps : selectedProps
            }
        })

    }
    handleChangePriceNote(priceNote,index,noteUserEdit){

        this.setState((state)=>{
            let sku = this.state.selectedProps.sku;
            let selectedProps = state.selectedProps;
            let userPriceAtSku = selectedProps.userPriceAtSku[sku];
            selectedProps.priceNote = priceNote + (noteUserEdit ? ";" + noteUserEdit : '');

            if(sku){
                if(!userPriceAtSku) selectedProps.userPriceAtSku[sku] = {index : 0, noteUserEdit : null};
                userPriceAtSku.priceNote = priceNote;
                userPriceAtSku.index = index;
                userPriceAtSku.noteUserEdit = noteUserEdit;
            }

            return {selectedProps}
        });

    }
    handleDeleteCart(goodsCode){

        request.deleteGoods(goodsCode,this.props.userInfo.user_id).then(data => {
            if(data.state === 0){
                this.updateCart();
                // this.updateCart('delete',goodsCode);

            }else{
                // console.error('删除商品失败 -> ',data);
            }

        }).catch(err => {
            // console.error('网络错误 -> ',err);
        })
    }
    handleChangeCartCount(goodsCode,count){

        request.changeCartCount(count,goodsCode,this.props.userInfo.user_id).then(data => {
            if(data.state === 0){
                this.updateCart();
                // this.updateCart('changeCount',goodsCode,count);

            }else{
                // console.error('修改商品数量失败 -> ',data);
            }

        }).catch(err => {
            // console.error('网络错误 -> ',err);
        })

    }
    handleChangeCartCountWidthNoFetch(goodsCode,count){
        let cart = this.state.cartInfo;
        let index = null;

        cart.forEach((item,i)=>{
            if(item.goodsCode === goodsCode){
                index = i;
            }
        });

        if(index !== null){
            this.setState((state)=>{
                let cartInfo = state.cartInfo;
                cartInfo[index].count = count;

                return {cartInfo}
            })
        }
    }
    handleChangePrice(price){

        this.setState(state => {
            let sku = this.state.selectedProps.sku;
            let selectedProps = state.selectedProps;
            selectedProps.price = price;
            selectedProps.userPrice = true;

            if(sku){
                if(!selectedProps.userPriceAtSku[sku]) selectedProps.userPriceAtSku[sku] = {};
                selectedProps.userPriceAtSku[sku].price = price;
            }

            return {selectedProps}
        });

    }
    handleChangeFreight(event){
        let value = event.target.value.replace(/[^\d\.]/g,'').match(/\d*\.?\d*/)[0]; //value是只包含数字和一个小数点的字符串 如: 0123 0123. 0123.0123 .

        this.setState(state => {
            let selectedProps = state.selectedProps;
            if(value === '.' || !value || value > 100000000){
                value = ''
            }else{

                //去掉开头的0, 保留小数点和小数点后两位
                let arr = value.split('.');
                arr[0] = arr[0] - 0;
                if(arr[1] !== undefined){
                    arr[1] = arr[1].substring(0,2);
                    value = arr.join('.');
                }else{
                    value = arr[0];
                }

            }
            selectedProps.freight = value;
            return {selectedProps}

        })
    }
    handleChangeUserImg(src){
        this.setState((state)=>{
            let selectedProps = state.selectedProps;
            selectedProps.userImage = src;
            return ({selectedProps})
        })
    }
    handleLinkToolbar(index){
        let block = [this.refs.aSpxq,this.refs.aDgxz,this.refs.aShfw];

        util.setScrollTop(util.getDomPosition(block[index]).top - 54);

        this.updateToolbarButtons(index);

        this.setState(()=>({
            toolbarFixed:true
        }))
    }
    updateToolbarButtons(index){
        let arr = [0,0,0];
        if(index !== -1) arr[index] = 1;
        this.setState(()=>{
            return {
                toolbarButtons : arr
            }
        });
    }
    updateCart(){
        /**
         * 更新本地的购物车数据
         * @params type <string> delete|changeCount|add
         * @params goods <sting|object> delete|changeCount时传入goodsCode,add时传入goods对象
         * @params count <number> changeCount时传入更改的数量
         * **/
        let userInfo = this.props.userInfo;

        request.getCartInfo({userId:userInfo.user_id ? userInfo.user_id : ''}).then(data => {

            if(data.state === 0 && data.data){
                let cartInfo = formatCart(data.data.shopItems);
                this.props.handleChangeCartNum(cartInfo.length);

                this.setState(()=>{
                    return {cartInfo}
                });
            }
        });
    }
    makeGoodsParams(){
        let props = this.state.selectedProps,
            goodsInfo = this.state.goodsInfo;
        let price =  Number(props.price);
        let goodGoods = !this.state.isBrokenGoods; //抓取正常|抓取失败

        if(!price){
            return false;
        }

        return {
            userId : this.props.userInfo.user_id,
            shopItems : [{
                shopLink: goodGoods ? goodsInfo.shop.shopUrl : '',
                shopSource: goodGoods ? goodsInfo.goodsPrefix : 'NOCRAWLER', // ?
                shopNick : goodGoods ? goodsInfo.shop.shopName : '',
                shopId : goodGoods ? goodsInfo.shop.shopId : '',
                goodsItems : [{
                    goodsId : goodGoods ? goodsInfo.goodsId : this.state.goodsUrl,
                    goodsPrifex : goodGoods ? goodsInfo.goodsPrefix : 'NOCRAWLER',
                    sku : goodGoods ? (props.sku ? props.sku : '') : props.userImage,
                    goodsCode : goodGoods ? `${goodsInfo.goodsPrefix}--${goodsInfo.goodsId}_${props.sku ? props.sku : ''}` : '',
                    price : price,
                    priceNote : props.priceNote,
                    freight : props.freight - 0,
                    count : props.count,
                    picture : goodGoods ? goodsInfo.sourcePicUrl : props.userImage,
                    desc : props.desc,
                    spm : '',
                    platForm : 'pc',
                    guideGoodsId : '',
                    is1111Yushou : 'no',
                    goodsName : goodGoods ? goodsInfo.goodsName : props.userGoodsName,
                    goodsLink : goodGoods ? goodsInfo.goodsLink : this.state.goodsUrl,
                    goodsRemark : (()=>{
                        let str = '';

                        if(SKU && props.sku){
                            let skuProps = SKU[props.sku].props;
                            let prop = skuProps.propName,
                                value = skuProps.valueName;

                            prop.forEach((item,i)=>{
                                str +=`${item}:${value[i]};`;
                            });
                        }

                        return str;

                    })(),
                    goodsAddTime : parseInt(Date.now()/1000)
                }]
            }]
        };

    }

    updateCount(number){

        this.setState((state) =>{
            let selectedProps = state.selectedProps;
            selectedProps.count = number;

            return {
                selectedProps : selectedProps
            }
        })
    }
    updateSkuMatrix(activeId,activeIndex){
        /**
         * 1.从SKU中过滤出包含[含有当前点击尺码的SKU]
         *   ⬇
         * 2.所有[不在当前点击尺码组的尺码]在[含有当前点击尺码的SKU]查找是否存在,不存在代表没库存
         *   ⬇
         * 3.把结果应用到skuMatrix
         *   ⬇
         * 4.更新价格
         * */

        /** 1 **/

        let down = SIZES[activeId][activeIndex]; //当前点击的尺码

        //console.log(down.valueId)
        let downSku = {}; //所有包含[当前点击的尺码]的SKU

        for(let name in SKU){
            let props = SKU[name].props;

            let i = props.propId.indexOf(down.propId);

            if(i !== -1 && props.valueId[i] === down.valueId){
                downSku[name] = SKU[name];
            }
        }

        /** 2 **/
        let M = this.state.skuMatrix;
        for(let name in M){
            if(name == activeId){
                continue;
            }

            M[name] = M[name].map((flag,i) => {
                if(i === 0) return flag;

                if(!isIncludeSize(SIZES[name][i - 1])){
                    flag = -1;
                }else{
                    flag = flag === 1 ? 1 : 0;
                }

                return flag;

            })
        }

        function isIncludeSize(size){

            let flag = false;

            for(let name in downSku){
                let props = downSku[name].props;

                let i = props.propId.indexOf(size.propId);

                if(i !== -1 && props.valueId[i] === size.valueId){
                    flag = true;
                    break;
                }
            }

            return flag;
        }

        /** 3 **/
        this.setState(() => {
            return {
                skuMatrix : M
            }
        });

        /** 4 **/
        this.updatePrice(activeId,activeIndex);

    }
    updatePrice(activeId,activeIndex){

        let M = this.state.skuMatrix,
            down = [], //已选择尺码
            unDownPropId = []; //还未选择尺码的propId

        for(let name in M){

            if(activeId && name == activeId){
                down.push(SIZES[name][activeIndex]);
                continue
            }

            let selected = SIZES[name][M[name].slice(1).indexOf(1)]; //当尺码种类有三个及三个以上,并且有缺货组合的话,可能为undefined

            if(M[name][0] === 1 && selected){
                down.push(selected);
                continue
            }
            unDownPropId.push(name);
        }

        /** 所有属性都选择了 **/
        if(unDownPropId.length === 0){
            let mId = this.makeMId(down);
            for(let name in SKU){
                if(SKU[name].mId === mId){
                    this.updateSelectedSku(name);
                    break;
                }
            }
        }
    }
    updateSelectedSku(skuId){
        let userPriceAtSku = this.state.selectedProps.userPriceAtSku[skuId];

        this.setState((state) => {
            let selectedProps = state.selectedProps;

            selectedProps.sku = skuId;
            selectedProps.quantity = SKU[skuId].quantity || 999;

            selectedProps.price = (()=>{
                /**
                 * 价格取值顺序:
                 * 有sku⬇
                 * 用户编辑的特定sku的价格 > sku自带价格
                 * 无sku⬇
                 * 用户编辑价格 > sku自带价格
                 * */
                if(this.state.skuMatrix){
                    if(userPriceAtSku && userPriceAtSku.price !== undefined){
                        selectedProps.userPrice = true;
                        return userPriceAtSku.price;
                    }else{
                        selectedProps.userPrice = false;
                        return util.cents2Bucks(SKU[skuId].price)
                    }
                }else{
                    return selectedProps.userPrice ? selectedProps.price : util.cents2Bucks(SKU[skuId].price);
                }

            })();

            selectedProps.priceNote = (()=>{
                /**
                 * priceNote取值顺序:
                 * 有sku⬇
                 * 用户选择的特定sku的priceNote || ''
                 * 无sku⬇
                 * 用户选择的priceNote
                 * */
                if(this.state.skuMatrix){
                    return userPriceAtSku && userPriceAtSku.priceNote !== undefined ? userPriceAtSku.priceNote + (userPriceAtSku.noteUserEdit ? ';' + userPriceAtSku.noteUserEdit : '') : '';
                }else{
                    return selectedProps.priceNote;
                }

            })();

            if(selectedProps.count > selectedProps.quantity){
                selectedProps.count = selectedProps.quantity
            }

            return {
                selectedProps : selectedProps
            }
        })


    }
    goodsAnimation(){

        this.myParabola.init();

        this.setState(()=>({
            isGoodsAnimationDown : false
        }))
    }
    initGoods(data){

        /**
         * init SIZES & SKU & this.state.skuMatrix & this.state.goodsInfo
         * **/
        let that = this;
        let price = initPrice();
        SIZES = formatSizes(data,'object');
        SKU = initSku();
        this.setState(function(state){

            let selectedProps = state.selectedProps;
            selectedProps.price = price;
            selectedProps.freight = initFreight();

            return {
                goodsInfo : data,
                skuMatrix : initSkuMatrix(),
                selectedProps : selectedProps
            };
        });

        let quantity = data.repositoryInfo;
        if(quantity && quantity.quantity){
            this.setState((state)=>{
                let selectedProps = state.selectedProps;
                selectedProps.quantity = quantity.quantity;

                return {selectedProps}
            })
        }

        function initSku(){
            /**
             * {
             *  skuId : {
             *   price : '',
             *   props : [
             *    {
             *      propId
             *      propName
             *      valueId
             *      valueName
             *    }
             *    ...
             *   ]
             *   quantity : 1
             *  }
             *  ...
             * }
             *
             * */

            let sku = data.skuList;
            let obj = sku && sku.length ? {} : null;

            sku && sku.forEach(item => {
                obj[item.skuId] = {};
                obj[item.skuId].price = item.price ? item.price.priceCent : price * 100;
                obj[item.skuId].quantity = item.quantity;

                let props = {
                    propId : [],
                    propName : [],
                    valueId : [],
                    valueName : []
                };
                // let mId = '';
                item.props.forEach(p => {
                    props.propId.push(p.propId);
                    props.propName.push(p.propName);
                    props.valueId.push(p.valueId);
                    props.valueName.push(p.valueName);
                    // mId += `${mId ? '&' : ''}${p.propId}=${p.valueId}`
                });

                obj[item.skuId].props = props;
                obj[item.skuId].mId = that.makeMId(item.props);

            });

            return obj;
        }
        function initSkuMatrix(){
            let obj = {};
            let hasSKU = false;

            for(let n in SIZES){
                hasSKU = true;
                obj[n] = SIZES[n].map(()=>0);
                obj[n].push(0);
            }

            return hasSKU ? obj : null;
        }
        function initPrice(){
            return  data.secKillPrice ? data.secKillPrice.price :
                data.proPrice ? data.proPrice.price :
                    data.proRangePrice ? data.proRangePrice :
                        data.rangePrice ? data.rangePrice :
                            data.unitPrice ? data.unitPrice.price : '';
        }
        function initFreight(){
            if(typeof data.freight === 'object'){
                return data.freight ? data.freight.price : '0'
            }else{
                return data.freight
            }
        }

    }
    makeMId(props){
        props.sort(function(m,n){
            return m.propId - n.propId;
        });

        let mId = '';
        props.forEach(p => {
            mId += `${mId ? '&' : ''}${p.propId}=${p.valueId}`
        });

        return mId;
    }
    initToolbar(){
        let toolbar = this.refs.toolbar, //工具栏
            aSpxq = this.refs.aSpxq, //商品详情
            aDgxz = this.refs.aDgxz, //代购须知
            aShfw = this.refs.aShfw; //售后服务

        let timer = null;
        let toolbarTop = util.getDomPosition(toolbar).top;
        let scrollTop = util.getScrollTop();
        // console.log(toolbarTop)

        let onScroll = () => {
            scrollTop = util.getScrollTop();
            let flag = toolbarTop - scrollTop < 0;

            if(this.state.toolbarFixed !== flag){
                this.setState(function() {
                    return {toolbarFixed: flag};
                });
            }

            clearTimeout(timer);
            timer = setTimeout(resetTop,40)
        };

        let resetTop = () => {
            let spxqTop = util.getDomPosition(aSpxq).top,
                dgxzTop = util.getDomPosition(aDgxz).top,
                shfwTop = util.getDomPosition(aShfw).top;

            toolbarTop = util.getDomPosition(toolbar).top;

            let t = 55 + 50; //55: toolbar的高度; 50: 向上估算的距离

            if(shfwTop - scrollTop < t){
                // console.log('售后服务');
                this.updateToolbarButtons(2);
                return
            }

            if(dgxzTop - scrollTop < t){
                // console.log('代购须知');
                this.updateToolbarButtons(1);
                return
            }

            if(spxqTop - scrollTop < t){
                // console.log('商品详情');
                this.updateToolbarButtons(0);
                return
            }

            this.updateToolbarButtons(-1);

        };

        setTimeout(onScroll,100);
        window.addEventListener('scroll',onScroll,false);
    }

    componentWillMount(){
        let goodsURL = util.search2Obj().url;
        let brokenGoods = (tips) =>{
            this.setState(()=>({
                isBrokenGoods: true
            }));

            tips && alert(`${tips}，${model.alert.userEdit}`)
        };

        let crawlComplete = ()=>{
            this.setState(()=>({isCrawlComplete: true}));
            this.initToolbar();
        };

        let deCodeUrl = decodeURIComponent(goodsURL);

        if(/^\/\//.test(deCodeUrl)){
            deCodeUrl = 'http:' + deCodeUrl;
        }else if(!/^https?:\/\//.test(deCodeUrl)){
            deCodeUrl = 'http://' + deCodeUrl;
        }

        if(goodsURL){

            this.setState(()=>({
                goodsUrl : deCodeUrl
            }));

            request.getGoodsInfo(goodsURL).then(data => {
                if(data.state === 0){
                    this.initGoods(data.data);

                }else if(data.state === 70001){
                    // console.error('不支持该平台 -> ',data);
                    brokenGoods(model.alert.brokenPlatform);
                }else{
                    // console.error('获取商品失败 -> ',data);
                    // brokenGoods('不支持该平台')
                    brokenGoods();
                }
                crawlComplete();

            }).catch(err => {
                crawlComplete();
                // console.error('网络错误 -> ',err);
            })
        }else{
            // console.error('没有商品链接.');
            brokenGoods(model.alert.noLink);
            crawlComplete();
        }

    }
    componentDidUpdate(){
        let userInfo = this.props.userInfo;

        /** 加载购物车 **/
        if((userInfo.user_id !== undefined || userInfo.notLogin) && isInitCart === false){
            isInitCart = true;

            request.getCartInfo({userId:userInfo.user_id ? userInfo.user_id : ''}).then(data => {

                if(data.state === 0 && data.data){
                    let cartInfo = formatCart(data.data.shopItems);
                    this.props.handleChangeCartNum(cartInfo.length);

                    this.setState(()=>{
                        return {cartInfo}
                    });
                }
            })
        }

        /** 加载推荐商品 **/
        if(!this.state.isBrokenGoods && this.state.goodsInfo.goodsId && !this.state.isLoadedRecommend){
            this.setState(()=>({isLoadedRecommend:true}));

            request.getRecommend(this.state.goodsInfo.goodsId,this.state.goodsInfo.goodsPrefix)
                .then(data=>{
                    if(data.state === 0){
                        this.setState(()=>({
                            recommendList : data.data
                        }))
                    }
                })
                .catch(err=>{
                    // console.log(err)
                });

            // console.log(this.state.goodsInfo)
        }
    }
    componentDidMount(){

        setTimeout(()=>{
            let goodsShadow = document.getElementById('goodsShadow');
            let cartContent = document.getElementById('cartTarget');

            this.myParabola = funParabola(goodsShadow, cartContent,{
                speed : 500,
                complete : ()=>{
                    this.setState(()=>({
                        isGoodsAnimationDown : true
                    }));
                    this.updateCart();
                }
            });
        },1000);

        request.getTopHot().then(data => {
            if(data.state === 0 && util.getConstructorName(data.data.listResult) === 'Array'){
                let res = data.data.listResult[0];

                this.setState(() => ({
                    topHot : {
                        id : res.id,
                        title : res.categoryName,
                        desc : res.desc,
                        image : res.headImgHref
                    }
                }))
            }
        })

    }
    render(){

        let template = null;

        if(this.state.isCrawlComplete){
            template = <div className="buy-wrap clearfix">
                {this.state.googleTip &&
                <div className="buy-googleTip">
                    <span>{model.googleTip}</span>
                    <button onClick={this.handleCloseGoogleTip.bind(this)}>×</button>
                </div>}


                <div className="buy-main">

                    {/** 商品预览图 **/}
                    <GoodsPreview
                        model={model}
                        goodsInfo={this.state.goodsInfo}
                        isGoodsAnimationDown={this.state.isGoodsAnimationDown}
                        isBrokenGoods={this.state.isBrokenGoods}
                        handleChangeUserImg={this.handleChangeUserImg.bind(this)}
                    />

                    {/** 抓取详情 **/}
                    <GoodsInfo
                        ref="goodsInfo"
                        model={model}
                        goodsInfo={this.state.goodsInfo}
                        skuMatrix={this.state.skuMatrix}
                        selectedProps={this.state.selectedProps}
                        editPrice={this.state.editPrice}
                        showSizesBorder={this.state.showSizesBorder}
                        isBrokenGoods={this.state.isBrokenGoods}
                        goodsUrl={this.state.goodsUrl}
                        updateCount={this.updateCount.bind(this)}
                        handleChangeSizes={this.handleChangeSizes.bind(this)}
                        handleAdd2Cart={this.handleAdd2Cart.bind(this)}
                        handleChangeDesc={this.handleChangeDesc.bind(this)}
                        handleChangePrice={this.handleChangePrice.bind(this)}
                        handleChangeFreight={this.handleChangeFreight.bind(this)}
                        handleChangePriceNote={this.handleChangePriceNote.bind(this)}
                        alertSelectSku={this.alertSelectSku.bind(this)}

                    />

                    <div className="cb"></div>

                    {/** 为什么选择superbuy **/}
                    <div className="buy-reasons">
                        <dl className="clearfix">
                            <dt><span>{model.reasons.title}</span><br/><em>Superbuy</em></dt>
                            {model.reasons.content.map(item=><dd><i></i><span>{item}</span></dd>)}
                        </dl>
                        {/*<a href={model.reasons.learnMore.href} target="_blank">{model.reasons.learnMore.txt}</a>*/}
                    </div>

                    {/** 相关商品推荐 **/}
                    {this.state.recommendList && this.state.recommendList.length > 0 &&
                    <div className="buy-relevant">
                        <h3>{model.recommend.title}</h3>
                        <ul>
                            {this.state.recommendList.map((item,i)=>{
                                if(i>4) return;
                                return (<li>
                                    <a href={`${page}buy/?url=${encodeURIComponent(/^\/\//.test(item.url) ? 'http:' + item.url : item.url)}`} target="_blank"><img src={item.pic}/></a>
                                    <em>{item.itemName}</em>
                                    <p>
                                        <span>￥ {item.promotionPrice}</span>
                                        <del>￥ {item.price}</del>
                                    </p>
                                </li>)
                            })}

                        </ul>
                    </div>
                    }

                    {/** 吸顶工具条 **/}
                    <div className={'buy-toolbar clearfix'} ref="toolbar">
                        <div className={(this.state.toolbarFixed ? 'fixed' : '')}>
                            <ShopBox style={1}
                                     goodsInfo={this.state.goodsInfo}
                                     goodsUrl={this.state.goodsUrl}
                                     isBrokenGoods={this.state.isBrokenGoods}
                                     model={model.shopBox}
                            />

                            <nav className="toolbar-btns">
                                <a className={this.state.toolbarButtons[0] === 1 ? 'active' : ''} onClick={this.handleLinkToolbar.bind(this,0)}>{model.main.details.title}<i></i></a>
                                <a className={this.state.toolbarButtons[1] === 1 ? 'active' : ''} onClick={this.handleLinkToolbar.bind(this,1)}>{model.main.notes.title}<i></i></a>
                                <a className={this.state.toolbarButtons[2] === 1 ? 'active' : ''} onClick={this.handleLinkToolbar.bind(this,2)}>{model.main.after.title}<i></i></a>
                            </nav>

                            <button className="toolbar-addGoods" onClick={this.handleAdd2Cart.bind(this,false,true)}>{model.goodsInfo.add2Cart}</button>
                        </div>
                    </div>
                    <div className="cb"></div>

                    {/** 有好货专题 **/}
                    <div className="buy-activities">
                        <h2>{model.hot.title}</h2>
                        <a className="buy-activities-img" href={`${page}subject/subject.html?id=${this.state.topHot.id}`} target="_blank">
                            {/*<img src={this.state.topHot.image || "https://placeholdit.imgix.net/~text?txtsize=14&txt=163×240&w=163&h=240"}/>*/}
                            <img src={this.state.topHot.image}/>
                            <p className="buy-activities-title">{this.state.topHot.title}</p>
                            <p className="buy-activities-desc">{this.state.topHot.desc}</p>
                        </a>
                    </div>

                    {/** 商品详情,代购须知,售后服务 **/}
                    <div className="buy-detailContent">
                        <div className="detail-header">
                            <div className="detail-title"><h3>{model.main.ceo.title}</h3><i></i></div>
                            <p>{model.main.ceo.content[0][0]}<a href="javascript:;" onClick={this.handleLinkToolbar.bind(this,1)}>【{model.main.notes.title}】</a>{model.main.ceo.content[0][1]}</p>
                            <p style={{marginTop:"12px"}}>{model.main.ceo.content[1][0]}<a href="javascript:;" onClick={this.handleLinkToolbar.bind(this,2)}>【{model.main.after.title}】</a>{model.main.ceo.content[1][1]}</p>

                            {/*<div className="detail-title"><h3>{model.main.ceo.title2}</h3><i></i></div>*/}
                            {/*{model.main.ceo.noTip}*/}
                            {/*<p>{model.main.ceo.content2[0]}</p>*/}
                            {/*<p style={{marginTop:"12px"}}>{model.main.ceo.content2[1]}<br/>{model.main.ceo.content2[2]}<br/>{model.main.ceo.content2[3]}</p>*/}

                        </div>

                        <div className="detail-box" style={{marginTop:'20px'}}>
                            <div className="detail-title" ref="aSpxq"><h3>{model.main.details.title}</h3><i></i></div>
                            <GoodsDetail model={model} descUrl={this.state.goodsInfo.descUrl} />
                        </div>

                        <div className="detail-box" style={{marginTop:'20px'}}>
                            <div className="detail-title" ref="aDgxz"><h3>{model.main.notes.title}</h3><i></i></div>
                            <p><a className="detail-subTitle">{model.main.notes.goods.title}</a></p>
                            <ul className="detail-forbidden clearfix">
                                <li>
                                    <div>
                                        {model.main.notes.goods.content[0][0]}
                                        <div className="popBox-help">
                                            <div className="popBox" style={{width:'630px'}}>
                                                <i className="arrow-top"></i>
                                                <p><em>{model.main.notes.goods.tips[0]}</em>{model.main.notes.goods.tips[1]}</p>
                                            </div>
                                        </div>
                                        <em>{model.main.notes.goods.content[0][1]}</em>
                                    </div>
                                    <i className="detail-forbidden-icon"></i>
                                </li>
                                <li>
                                    <p>{model.main.notes.goods.content[1][0]}<em>{model.main.notes.goods.content[0][1]}</em></p>
                                    <i className="detail-forbidden-icon"></i>
                                </li>
                                <li>
                                    <p>{model.main.notes.goods.content[2][0]}</p>
                                    <i className="detail-forbidden-icon"></i>
                                </li>
                                <li>
                                    <p>{model.main.notes.goods.content[3][0]}</p>
                                    <i className="detail-forbidden-icon"></i>
                                </li>
                            </ul>

                            <div className="hr"></div>

                            <a  className="detail-subTitle">{model.main.notes.route.title}</a>
                            <table className="detail-expressTable">
                                <tbody>
                                <tr>
                                    <th> </th>
                                    {model.main.notes.route.rowHeaders.map(item => <th>{item}</th>)}
                                </tr>
                                {model.main.notes.route.columnHeaders.map((c,i) => {
                                    return (
                                        <tr>
                                            <td>{c}</td>
                                            {model.main.notes.route.ok[i].map(v =>
                                                <td dangerouslySetInnerHTML={{__html :  v === 1 ? '<i>ok</i>':'/'}}></td>
                                            )}
                                        </tr>
                                    )
                                })}
                                </tbody>

                            </table>

                            <div className="hr"></div>
                            <a  className="detail-subTitle">{model.main.notes.volume.title}</a>
                            <div className="detail-expressVolume clearfix">
                                {model.main.notes.volume.content.map(item =>
                                    <dl>
                                        <dt>{item[0]}</dt>
                                        <dd>{item[1]}</dd>
                                    </dl>
                                )}
                            </div>
                        </div>

                        <div className="detail-box detail-afterSales">
                            <div className="detail-title" ref="aShfw"><h3>{model.main.after.title}</h3><i></i></div>
                            {model.main.after.content.map(item => {
                                return (
                                    <div>
                                        <p>{item.title}</p>
                                        <nav>
                                            {item.content.map(t => <p><a href={t.href} target="_blank">{t.txt}</a></p>)}
                                        </nav>
                                        <div className="hr"></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="buy-aside">

                    {/** 右边栏:店铺信息 ***/}
                    <ShopBox style={0}
                             goodsInfo={this.state.goodsInfo}
                             goodsUrl={this.state.goodsUrl}
                             isBrokenGoods={this.state.isBrokenGoods}
                             model={model.shopBox}
                    />

                    {/** 右边栏:购物车 **/}
                    <Cart userInfo={this.props.userInfo}
                          cartInfo={this.state.cartInfo}
                          handleDeleteCart={this.handleDeleteCart.bind(this)}
                          handleChangeCartCount={this.handleChangeCartCount.bind(this)}
                          handleChangeCartCountWidthNoFetch={this.handleChangeCartCountWidthNoFetch.bind(this)}
                          model={model}
                    />

                </div>
            </div>
        }else{
            template = <div className="buy-wrap clearfix">
                <div className="buy-loading">
                    <img src={`${imgsrc_cn}buy/loading_32_32.gif`}/>
                    <p>{model.loading}</p>
                 </div>
            </div>
        }

        return (
            <div className={(this.state.isBrokenGoods ? 'brokenGoods' : '') + ' m-buy'}>

                {/** 二级导航 **/}
                <div className="buy-header">
                    <div className="header-main clearfix">
                        <h2><a href={model.subNav.titleHref}>{model.subNav.title}</a></h2>
                        <nav>
                            {model.subNav.list.map(item => <a href={item.href}>{item.txt}</a>)}
                        </nav>
                    </div>
                </div>

                {/** 内容 **/}
                {template}
            </div>
        );
    }
}

/** 异步请求集合 **/
var request = {
    /**
     * 抓取商品信息
     * **/
    getGoodsInfo : goodUrl => {
        return util.fetch(`${apiURL}crawler/`,{
            method: 'POST',
            headers: {"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},
            // body: `goodUrl=${goodUrl}`
            body: util.serialize({goodUrl})
        });
    },

    /**
     * 添加到购物车
     * **/
    add2Cart : params => {
        return util.fetch(`${apiURL}cart/add-cart`,{
            method: 'POST',
            body: params
        })
    },

    /**
     * 获取购物车信息
     * **/
    getCartInfo : params => {
        return util.fetch(`${apiURL}cart/list-cart`,{
            method: 'POST',
            body: params
        })
    },

    /**
     * 删除商品
     * **/
    deleteGoods : (goodsCode,userId) => {
        return util.fetch(`${apiURL}cart/cart-del`,{
            method: 'POST',
            body: {goodsCodes:goodsCode,userId}
        })
    },

    /**
     * 修改购物车商品数量
     * **/
    changeCartCount : (count,goodsCode,userId) => {
        return util.fetch(`${apiURL}cart/change-cart-num`,{
            method: 'POST',
            body: {count,goodsCode,userId}
        })
    },

    /**
     * 获取有好货专题列表
     * **/
    getTopHot : () => {
        return util.fetch(`${apiURL}shoppingguide/all-cat-list`,{
            method: 'GET',
            body: {
                currPage : 1,
                pageSize : 1
            }
        })
    },

    /**
     * 获取有好货专题列表
     * **/
    getRecommend : (goodsId,thirdPlatform) => {
        return util.fetch(`${apiURL}crawler/recommend`,{
            method: 'POST',
            headers: {"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},
            body: util.serialize({goodsId,thirdPlatform})
        })
    }
};


/**
 * 格式化商品规格信息
 * **/
function formatSizes(goodsInfo,type){
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
        //_sizes = [];
        //sizes = {}
    }

    if(type === 'object'){
        return sizes;
    }else{
        return _sizes;
    }
}

/**
 * 格式化购物车信息
 * **/
function formatCart(shopItems){
    let arr = [];

    shopItems.forEach(shop =>{
        shop.goodsItems.forEach(item => {
            arr.push(item)
        })
    });

    return arr;
}

/**
 * 抛物线方法
 * @params d <DOMelement> 要移动的元素
 * @params t <DOMelement> 移动目标地元素
 * @params options <object> 配置项
 *     {
 *          speed : <number>166.67,
 *          curvature : <number> 0.001,
 *          progress : <function>
 *          complete : <function>
 *     }
 *
 * @return object
 *
 * */
function funParabola(d,t,g){var i={speed:166.67,curvature:0.001,progress:function(){},complete:function(){}};var p={};g=g||{};for(var v in i){p[v]=g[v]||i[v]}var u={markfunction(){return this},position:function(){return this},move:function(){return this},init:function(){return this}};var e="margin",r=document.createElement("div");if("oninput" in r){["","ms","webkit"].forEach(function(b){var a=b+(b?"T":"t")+"ransform";if(a in r.style){e=a}})}var s=p.curvature,q=0,o=0;var k=true;if(d&&t&&d.nodeType==1&&t.nodeType==1){var n={},j={};var h={},m={};var f={},l={};u.mark=function(){if(k==false){return this}if(typeof f.x=="undefined"){this.position()}d.setAttribute("data-center",[f.x,f.y].join());t.setAttribute("data-center",[l.x,l.y].join());return this};u.position=function(){if(k==false){return this}var b=document.documentElement.scrollLeft||document.body.scrollLeft,a=document.documentElement.scrollTop||document.body.scrollTop;if(e=="margin"){d.style.marginLeft=d.style.marginTop="0px"}else{d.style[e]="translate(0, 0)"}n=d.getBoundingClientRect();j=t.getBoundingClientRect();h={x:n.left+(n.right-n.left)/2+b,y:n.top+(n.bottom-n.top)/2+a};m={x:j.left+(j.right-j.left)/2+b,y:j.top+(j.bottom-j.top)/2+a};f={x:0,y:0};l={x:-1*(h.x-m.x),y:-1*(h.y-m.y)};q=(l.y-s*l.x*l.x)/l.x;return this};u.move=function(){if(k==false){return this}var a=0,b=l.x>0?1:-1;var c=function(){var z=2*s*a+q;a=a+b*Math.sqrt(p.speed/(z*z+1));if((b==1&&a>l.x)||(b==-1&&a<l.x)){a=l.x}var w=a,A=s*w*w+q*w;d.setAttribute("data-center",[Math.round(w),Math.round(A)].join());if(e=="margin"){d.style.marginLeft=w+"px";d.style.marginTop=A+"px"}else{d.style[e]="translate("+[w+"px",A+"px"].join()+")"}if(a!==l.x){p.progress(w,A);window.requestAnimationFrame(c)}else{p.complete();k=true}};window.requestAnimationFrame(c);k=false;return this};u.init=function(){this.position().mark().move()}}return u};(function(){var b=0;var c=["webkit","moz"];for(var a=0;a<c.length&&!window.requestAnimationFrame;++a){window.requestAnimationFrame=window[c[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[c[a]+"CancelAnimationFrame"]||window[c[a]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(h,e){var d=new Date().getTime();var f=Math.max(0,16.7-(d-b));var g=window.setTimeout(function(){h(d+f)},f);b=d+f;return g}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(d){clearTimeout(d)}}}());

ReactDOM.render(<Wrap content={Content}/>,document.getElementById("wrap"));


