/**
 * author: MG
 * 头部-搜索框
 * */

function isParent(obj,parent){
    let {parentNode} = obj;
    if(!parentNode) return false;
    if(obj === parent) return true;
    return isParent(parentNode,parent);
}

class SearchInput extends React.Component{
    componentDidMount(){
        const body = document.documentElement || document.body;

        body.addEventListener('click',e => {
            if(!this.props.showSearch) return;

            const oEvent = e || event;
            const target = oEvent.srcElement || oEvent.target;

            //点击元素不是历史记录框,也不是搜索输入框本身时,隐藏搜索框
            if (!isParent(target, document.getElementById('header-historyList')) && !isParent(target, this.refs.container)) {
                this.handleHideSearch();
            }

        },false)

    }
    handleHideSearch(){
        this.refs.input.value = '';
        this.props.handleHideSearch();
    }
    handleSearch (e){
        let value = this.refs.input.value.trim();
        const oEvent = e || event;

        if(oEvent.keyCode === 13 && value !== ''){
            this.props.handleSearch(value);
        }

    }
    shouldComponentUpdate(){
        setTimeout(() =>{
            this.props.showSearch && this.refs.input.focus();
        },800);
        return true;
    }
    render(){

        return (
            <div className="fl header-searchBar" ref="container">
                <i className="header-search-btn2"></i>
                <input onKeyUp={this.handleSearch.bind(this)} ref='input' type="text" placeholder={this.props.holder}/>
            </div>
        );
    }
}

export default SearchInput;
