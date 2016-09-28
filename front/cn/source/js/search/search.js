/**
 * Created by mango on 16/9/12.
 */

import '../../less/search/search.less';
import Paging from '../../../../plugin/reactcommon/Paging/Paging';
const {Wrap,util,apiURL,domain,imgsrc_cn} = window.supervar;
const page = `//www.${domain}/cn/page/`;
const lang = 'cn';

let model = {
    loading : '正快马加鞭地为您打开页面...',
    subNav : {
        title : '代购',
        titleHref : `//buy.${domain}/`,
        list : [
            {txt : '购物助手', href: `http://buy.${domain}/views/single/install.html`},
            {txt : '有好货', href: `${page}sthgood/goodIndex/`},
            // {txt : '大客户服务', href: '#'}
        ]
    },
    searchTxt : '搜索',
    toolbar : {
        synthesis : '综合排序',
        sales : '销量',
        price : '价格',
        priceUp : '价格从低至高',
        priceDown : '价格从高至低',
        confirm : '确定',
        result : ['共','个产品']
    },
    prevPageTxt : '上一页',
    nextPageTxt : '下一页',
    noResult : {
        tipTitle : ['很抱歉，没找到与','“ ',' ”','相关的 商品！'],
        tip : '<dt>Superbuy建议您：</dt> <dd>1、您换个关键词我帮您再找找看</dd> <dd>2、看看输入的文字是否有误</dd> <dd>3、调整关键词，如“全铜花洒套件”改成“花洒”或“花洒 套件”</dd><dd>4、告诉我们 <a href="http://bbs.dotdotbuy.com/forum.php?mod=post&action=newthread&fid=42" target="_blank">去反馈></a></dd>',
        hotTitle : 'Superbuy热销产品'
    }
};

let request = {
    search(params){
        return util.fetch(`${apiURL}crawler/productpage`,{
            method: 'POST',
            headers: {"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},
            body: util.serialize(params)
        })
    },
    hot(){
        return util.fetch(`${apiURL}top/hot`,{
            method: 'POST',
            headers: {"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        })
    }
};

let platformMap = {
    "天猫" : "tmall",
    "淘宝" : "tb",
    "京东" : "jd"
};

class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            keyword : '',
            totalPage : 0,
            pageNo : 0,
            direction : 1,
            pageSize : 48,
            totalCount : '--',
            needsort : false,
            sortKey : 0,
            price1 : '',
            price2 : '',
            platformThird : '',
            productList : [],
            isLoading : false,
            initList : false,
            isLoadedHotList : false,
            hotList : null,
            searchBarFixed : false
        }
    }
    makeSearchParams(kw,no){
        let state = this.state;
        let {keyword,pageSize,pageNo,direction,needsort,sortKey,platformThird} = state;
        let price1 = parseFloat(state.price1) ? parseFloat(state.price1) : '';
        let price2 = parseFloat(state.price2) ? parseFloat(state.price2) : '';
        return {
            keyword : kw ? kw : keyword,
            pageNo : no ? no : (pageNo || 1),
            pageSize,
            direction,
            needsort,
            sortKey,
            platformThird,

            /**
             * price1,price2两个值都填了: 最小价格为其中较小值,最大价格为其中较大值
             * price1,price2只填其中了一个值: price1是最小价格,price2是最大价格,另一个未填价格为''
             * price1,price都未填 : 最小值,最大值都为''
             * **/
            priceFrom : price2 === '' ? price1 : price1 === '' ? '' : Math.min(price1,price2),
            priceTo   : price2 === '' ? '' : price1 === '' ? price2 : Math.max(price1,price2)
        }

    }
    setPageState(data){
        let productList = data.datas;
        this.setState(()=>({
            productList : util.getConstructorName(productList) === 'Array' ? productList : [],
            pageNo : data.pageNo || 0,
            totalPage : data.totalPage || 0,
            totalCount : data.totalCount || 0
        }));
    }
    loadHot(){
        if(this.state.initList && !this.state.productList.length && this.state.hotList === null){
            let hotList = [];
            request.hot().then(data=>{
                if(data.state === 0){
                    hotList = data.data
                }
                this.setState(()=>({hotList}));

            }).catch(err=>{
                this.setState(()=>({hotList}));
            })
        }
    }
    search(kw){
        this.setState(()=>({isLoading : true}));
        let params = this.makeSearchParams(kw,null);

        request.search(params).then(data=>{
            data.state === 0 && this.setPageState(data.data);
            this.setState(()=>({initList : true,isLoading : false}));
            this.loadHot();

        }).catch(err=>{
            this.setState(()=>({initList : true,isLoading : false}));
            this.loadHot();
        })

    }
    handleSearch(){
        let value = this.refs.input.value.trim();
        if(value === '') return;
        window.location.search = util.obj2Search({
            keyword : encodeURIComponent(value)
        })
    }
    handleSearchEnter(event){
        let value = this.refs.input.value.trim();
        let currKey = event.keyCode||event.which||event.charCode;

        if(currKey === 13 && value !== ''){
            this.handleSearch();
            event.preventDefault();
        }

    }
    handleProductImgLoad(event){
        event.target.parentNode.previousSibling.style.display = 'none'
    }
    handleProductImgError(){
        let i = event.target.parentNode.previousSibling;
        i.style.backgroundColor = "#f9f9f9";
        i.style.backgroundImage = "none";
    }
    handleChangePage(n){
        this.setState(()=>({isLoading : true}));
        return new Promise((resolve,reject) => {
            request.search(this.makeSearchParams(null,n)).then(data=>{
                this.setState(()=>({isLoading : false}));
                if(data.state === 0){
                    resolve(150);
                    this.setPageState(data.data);
                }else{
                    reject();
                }
            }).catch(err=>{
                reject();
                this.setState(()=>({isLoading : false}));
            });
        });
    }
    handleChangeSort(key,direction){
        let sortKey,needsort;

        if(!key){
            sortKey = 0;
            needsort = false;
        }else{
            sortKey = key;
            needsort = true;
        }

        if(sortKey != this.state.sortKey || (sortKey == this.state.sortKey && direction != this.state.direction)){
            this.setState(()=>({sortKey,needsort,direction}));
            setTimeout(()=>{
                this.search();
            },20);
        }
    }
    handleChangePrice(type,event){
        let value = event.target.value.replace(/[^\d\.]/g,'').match(/\d*\.?\d*/)[0]; //value是只包含数字和一个小数点的字符串 如: 0123 0123. 0123.0123 .

        this.setState(() => {
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
            return {[`price${type}`] : value}

        })
    }
    componentWillMount(){
        let keyword = util.search2Obj().keyword;

        if(keyword !== undefined){
            keyword = decodeURIComponent(keyword);
            this.setState(()=>({keyword}));
        }else{
            keyword = '';
        }

        this.search(keyword);
    }
    componentDidMount(){
        let scrollTop = util.getScrollTop();
        let searchBar = util.getDomPosition(this.refs.searchBar).top;

        let onScroll = () => {
            scrollTop = util.getScrollTop();
            let flag = searchBar - scrollTop < 0;

            if(this.state.searchBarFixed !== flag){
                this.setState(()=>({searchBarFixed: flag}));
            }
        };
        setTimeout(onScroll,100);
        window.addEventListener('scroll',onScroll,false);
    }
    render(){
        return (
            <div className={this.state.isLoading ? 'search-isLoading' : ''}>
                {/** 二级导航 **/}
                <div className="search-header">
                    <div className="header-main clearfix">
                        <h2><a href={model.subNav.titleHref}>{model.subNav.title}</a></h2>
                        <nav>
                            {model.subNav.list.map(item => <a href={item.href}>{item.txt}</a>)}
                        </nav>
                    </div>
                </div>

                {/** 搜索框 **/}
                <div className={(this.state.searchBarFixed ? "fixed" : '') + " search-bar-wrap"} ref="searchBar">
                    <div className="search-bar-inner">
                        <div className="search-bar-main">
                            <p>{model.subNav.title}</p>
                            <div className="search-input">
                                <input type="text" ref="input" onKeyPress={this.handleSearchEnter.bind(this)} defaultValue={this.state.keyword}/>
                                <button onClick={this.handleSearch.bind(this)}>{model.searchTxt}</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/** 搜索列表 **/}
                <div className="search-main">

                    {(()=>{
                        if(this.state.initList){

                            if(this.state.productList && this.state.productList.length){
                                return (
                                    <div>
                                        {/** 工具条 **/}
                                        <div className="search-toolbar">
                                            <div className="search-toolbar-mask"></div>
                                            <button onClick={this.handleChangeSort.bind(this,'',1)} className={(!this.state.sortKey && 'active') + " search-toolbar-sort"}>{model.toolbar.synthesis}</button>
                                            <button onClick={this.handleChangeSort.bind(this,2,1)} className={(this.state.sortKey === 2 ? 'active' : '') + " search-toolbar-sort"}>{model.toolbar.sales}</button>
                                            <div className={(this.state.sortKey === 1 ? 'active' : '') + " search-toolbar-sort"}>
                                                {this.state.sortKey !== 1 ? model.toolbar.price : this.state.direction === 1 ? model.toolbar.priceUp : model.toolbar.priceDown}
                                                <div>
                                                    <a onClick={this.handleChangeSort.bind(this,1,1)} className={this.state.sortKey === 1 && this.state.direction === 1 ? 'active' : ''}>{model.toolbar.priceUp}</a>
                                                    <a onClick={this.handleChangeSort.bind(this,1,-1)} className={this.state.sortKey === 1 && this.state.direction === -1 ? 'active' : ''}>{model.toolbar.priceDown}</a>
                                                </div>
                                            </div>
                                            <div className="search-toolbar-price clearfix">
                                                <i>￥</i>
                                                <input value={this.state.price1} onChange={this.handleChangePrice.bind(this,1)} type="text"/>
                                                <span>-</span>
                                                <i>￥</i>
                                                <input value={this.state.price2} onChange={this.handleChangePrice.bind(this,2)} type="text"/>
                                                <button onClick={this.search.bind(this,null)}>{model.toolbar.confirm}</button>
                                            </div>
                                            <div className="search-toolbar-info">
                                                <p>{model.toolbar.result[0]}<span>{this.state.totalCount}</span>{model.toolbar.result[1]}</p>
                                                <p><strong>{this.state.pageNo}</strong>/{this.state.totalPage}</p>
                                                <button disabled={this.state.pageNo <= 1} onClick={this.handleChangePage.bind(this,this.state.pageNo - 1)} title={model.prevPageTxt}>{model.prevPageTxt}</button>
                                                <button disabled={this.state.pageNo >= this.state.totalPage} onClick={this.handleChangePage.bind(this,this.state.pageNo + 1)} title={model.nextPageTxt}>{model.nextPageTxt}</button>
                                            </div>
                                        </div>
                                        {/** 商品列表 **/}
                                        <div className="search-products clearfix">
                                            {this.state.productList.map(item=>{
                                                let url = item.goodsUrl;
                                                {/*if(/^\/\//.test(url)){
                                                    url = 'http:' + url;
                                                }else if(!/^https?:\/\//.test(url)){
                                                    url = 'http://' + url;
                                                }*/}

                                                return (
                                                    <a index={item.goodsId} href={`${page}buy/?url=${encodeURIComponent(url)}`} target="_blank">
                                                        <div className="search-products-picWrap">
                                                            <i className="search-products-loading"></i>
                                                            <div><img className="search-products-pic" onLoad={this.handleProductImgLoad.bind(this)} onError={this.handleProductImgError.bind(this)} src={item.imgUrl}/></div>
                                                        </div>
                                                        <div className="search-products-Info">
                                                            <p className="search-products-price">
                                                                <em>￥{item.price}</em>
                                                                {/*<del>￥15990</del>*/}
                                                            </p>
                                                            <p className="search-products-name">{item.title}</p>
                                                            <div className="search-products-bottom">
                                                                <span>{item.statusText}</span>
                                                                <i className={`icon-${item.providerType ? item.providerType.toLocaleLowerCase() : ''}`}></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                )
                                            })}
                                            {/*<a href="javascript:;">
                                             <div className="search-products-picWrap">
                                             <div><img className="search-products-pic" src="http://img13.360buyimg.com/n7/g10/M00/12/12/rBEQWFFiTJUIAAAAAAG3hp5WHu0AADoSACOqwMAAbee163.jpg"/></div>
                                             </div>
                                             <div className="search-products-Info">
                                             <p className="search-products-price">
                                             <em>￥10799</em>
                                             <del>￥15990</del>
                                             </p>
                                             <p className="search-products-name">DSC-RX10M3存储卡套装／套装内含单机和SF-64UX2存储卡一张</p>
                                             <div className="search-products-bottom">
                                             <span>5569人已付款</span>
                                             <i className="icon-amazon"></i>
                                             </div>
                                             </div>
                                             </a>*/}
                                        </div>

                                        {/** 分页 **/}
                                        {/*<Paging handleChangePage={this.handleChangePage.bind(this)} totalPage={this.state.totalPage} pageNo={this.state.pageNo} language={lang}/>*/}
                                        <Paging handleChangePage={this.handleChangePage.bind(this)} totalPage={this.state.totalPage} pageNo={this.state.pageNo} language={lang}/>
                                    </div>
                                )
                            }else{
                                return (<div className="search-noResult">
                                    <div className="search-noResult-tips">
                                        <h2>{model.noResult.tipTitle[0]}<em>{model.noResult.tipTitle[1]}{this.state.keyword}{model.noResult.tipTitle[2]}</em>{model.noResult.tipTitle[3]}</h2>
                                        <dl dangerouslySetInnerHTML={{__html : model.noResult.tip}}></dl>
                                    </div>
                                    {(()=>{
                                        if(this.state.hotList && this.state.hotList.length){
                                            return(
                                                <div className="search-noResult-hot">
                                                    <h3>{model.noResult.hotTitle}</h3>
                                                    <div className="search-products clearfix">
                                                        {this.state.hotList.map((item,i)=>{
                                                            if(i > 3) return '';

                                                            let url = item.href;
                                                            {/*if(/^\/\//.test(url)){
                                                                url = 'http:' + url;
                                                            }else if(!/^https?:\/\//.test(url)){
                                                                url = 'http://' + url;
                                                            }*/}

                                                            return (
                                                                <a href={`${page}buy/?url=${encodeURIComponent(url)}`} target="_blank">
                                                                    <div className="search-products-picWrap">
                                                                        <i className="search-products-loading"></i>
                                                                        <div><img className="search-products-pic" onLoad={this.handleProductImgLoad.bind(this)} onError={this.handleProductImgError.bind(this)} src={item.img}/></div>
                                                                    </div>
                                                                    <div className="search-products-Info">
                                                                        <p className="search-products-price">
                                                                            <i className={`icon-${platformMap[item.sellerPlatform]}`}></i>
                                                                            <em>￥{item.price}</em>
                                                                        </p>
                                                                        <p className="search-products-name">{item.title}</p>
                                                                    </div>
                                                                </a>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })()}
                                </div>)
                            }

                        }else{
                            return(
                                <div className="search-loading">
                                    <img src={`${imgsrc_cn}search/loading_32_32.gif`}/>
                                    <p>{model.loading}</p>
                                </div>
                            )
                        }
                    })()}


                </div>
            </div>)
    }
}



ReactDOM.render(<Wrap content={Content}/>,document.getElementById("wrap"));