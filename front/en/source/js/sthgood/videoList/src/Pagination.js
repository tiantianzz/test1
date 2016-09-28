/**
 * 分页组件 O(∩_∩)O~
 *
 * 使用案例方法
 * getPageConfig() { //初始分页基本数据
        return {
            pageSize: this.state.pageSize,                                              //每页的个数
            currentPage: this.state.currPage,                                           //当前第几页
            totalNum:this.state.videosData.totalRow || 1 ,                                  //总数据数
            totalPage: Math.ceil(this.state.videosData.totalRow / this.state.pageSize) || 1 //总页数
        };
    }
 onPageChange(currentPage) { //点击分页的回调方法
        ..........
    }

 <Pagination {...this.getPageConfig()} onPage={this.onPageChange} />
 */


module.exports = React.createClass({
    getInitialState: function () {
        return {
            currentPage: this.props.currentPage
        };
    },
    getDefaultProps: function () {
        return {
            cname: "pagination",
            lang:  'cn',
            pageSize: 10,
            totalNum: 0,
            currentPage: 1,
            onPage: null
        };
    },
    componentWillReceiveProps: function (props) {
        this.setState({
            currentPage: props.currentPage
        });
    },
    click: function (index) {
        this.setState({
            currentPage: index
        });
        this.props.onPage && this.props.onPage.call(null, index, this);
    },
    goPage:function(){
        let val = this.refs.jumpInput.value*1;
        let offset = 0;
        let totalPage = Math.ceil(this.props.totalNum / this.props.pageSize);
        // this.click(val);
        if(/^[1-9]\d*$/.test(val)){
            if(val > totalPage){
                this.refs.jumpInput.value = totalPage;
                offset = totalPage - this.state.currentPage;
            }else{
                offset = val - this.state.currentPage
            }
        }else{
            this.refs.input.value = this.state.currentPage;
        }
        this.changePage(offset);
    },
    changePage: function (offset) {
        var target = this.getOffsetStatus(offset);
        if (target) {
            this.click(target);
        }
    },
    changePageToFirst: function () {
        this.click(1);
    },
    changePageToLast: function () {
        this.click(Math.ceil(this.props.totalNum / this.props.pageSize));
    },
    getOffsetStatus: function (offset) {
        var pageNumber = Math.ceil(this.props.totalNum / this.props.pageSize);
        var target = this.state.currentPage * 1 + offset;
        // console.log("target:" +target )
        if (target > 0 && target <= pageNumber) {
            return target;
        }
        return false;
    },
    renderItemRange: function (start, end) {
        var list = [];
        var pageNumber = this.props.totalNum < this.props.pageSize ? 1 : Math.ceil(this.props.totalNum / this.props.pageSize);
        for (var i = start; (i > 0) && (i <= pageNumber) && (i <= end); i++) {
            list.push(<a key={start+'-'+end+'-'+i}
                         href="javascript:;"
                         onClick={this.click.bind(this, i)}
                         className={"pagination-num "+(i == this.state.currentPage ? 'select' : '')}>{i}</a>);
        }

        return list;
    },
    renderBreak: function (index) {
        return <span key={index} className="break">...</span>;
    },
    renderPage: function () {
        var preview = 4;
        var pageNumber = this.props.totalNum <= this.props.pageSize ? 1 : Math.ceil(this.props.totalNum / this.props.pageSize);
        var list = [];
        if (this.state.currentPage <= (preview + 1)) {
            list = list.concat(this.renderItemRange(1, this.state.currentPage));
            if (this.state.currentPage > Math.floor(preview / 2)) {
                list = list.concat(this.renderItemRange(this.state.currentPage + 1, this.state.currentPage + 2));
            } else {
                list = list.concat(this.renderItemRange(this.state.currentPage + 1, preview));
            }
            if (pageNumber >= (list.length + Math.floor(preview / 2))) {
                list.push(this.renderBreak(list.length));
            }
            if (pageNumber > list.length) {
                for (var m = pageNumber; m <= pageNumber; m++) {
                    list = list.concat(this.renderItemRange(m, m));
                }
            }
        }
        else if (this.state.currentPage > (pageNumber - preview) && pageNumber > (preview + 1)) {
            list = list.concat(this.renderItemRange(1, 2));
            list.push(this.renderBreak(list.length));
            if (Math.abs(this.state.currentPage - pageNumber) > Math.floor(preview / 2)) {
                list = list.concat(this.renderItemRange(this.state.currentPage - 2, this.state.currentPage));
            } else {
                list = list.concat(this.renderItemRange(pageNumber - preview + 1, this.state.currentPage));
            }
            if (this.state.currentPage != pageNumber) {
                list = list.concat(this.renderItemRange(this.state.currentPage + 1, pageNumber));
            }
        }
        else {
            list = list.concat(this.renderItemRange(1, 2));
            list.push(this.renderBreak(list.length));
            list = list.concat(this.renderItemRange(this.state.currentPage - Math.floor(preview / 2), this.state.currentPage + Math.floor(preview / 2)));
            list.push(this.renderBreak(list.length));
            list = list.concat(this.renderItemRange(pageNumber - 1, pageNumber));
        }

        return list;
    },
    componentWillMount:function(){
        let lang_cn = {
            prev : '上一页',
            next : '下一页',
            page : ['共','页','到第','页'],
            confirm : '确认'
        }

        let lang_en = {
            prev : 'Previous',
            next : 'Next',
            page : ['Total ',' page', 'to page ',''],
            confirm : 'Confirm'
        };
        this.language = this.props.lang === 'en' ? lang_en : lang_cn;
    },
    render: function () {
        // var allname = className(this.props.className, this.getPropClass());
        // var prefix = this.getDefaultClass();
        return  this.props.totalPage >1 &&　<div className="pagination">
                <div className={"pagination-list"}>
                    {/*<a href="javascript:;" className={"pagination-home"} onClick={this.changePageToFirst}>&lt;&lt;</a>*/}
                    <a href="javascript:;" className={"pagination-prev " + (this.getOffsetStatus(-1) ? '' : 'disable')}
                       onClick={this.changePage.bind(this, -1)}> <span className="arrow">&lt;</span>{this.language.prev}</a>
                    {this.renderPage()}
                    <a href="javascript:;" className={"pagination-next " + (this.getOffsetStatus(1) ? '' : 'disable')}
                       onClick={this.changePage.bind(this, 1)}>{this.language.next}<span className="arrow">&gt;</span></a>
                    {/*<a href="javascript:;" className={"pagination-end"} onClick={this.changePageToLast}>&gt;&gt;</a>*/}
                </div>
                <div className="jump-box">
                    <span>{this.language.page[0]} <span>{Math.ceil(this.props.totalNum / this.props.pageSize)}</span> {this.language.page[1]}，</span>
                    <span>
                            {this.language.page[2]}<input ref="jumpInput" className="jump-input" type="number" min="1"/>{this.language.page[3]}
                        <input type="button" ref="jumpBtn" className="jump-btn" onClick={this.goPage.bind(this)} value={this.language.confirm}/>
                        </span>
                </div>
            </div>
    }
});






