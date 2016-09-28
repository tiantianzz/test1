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
    constructor(){
        super();

        this.state = {
            hasValue : ''
        };
    }

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
    handleSearch (event){
        let value = this.refs.input.value.trim();
        let currKey = event.keyCode||event.which||event.charCode;
        if(currKey === 13 && value !== ''){
            this.props.handleSearch(value);
            event.preventDefault();
        }
    }
    handleChangeValue(event){
        let hasValue = !!event.target.value.trim();
        this.setState(()=>({hasValue}));
    }
    shouldComponentUpdate(){
        setTimeout(() =>{
            this.props.showSearch && this.refs.input.focus();
        },800);
        return true;
    }
    handleGetSeachBarWidth(){
        // console.log(this.refs.container.offsetWidth)
        return this.refs.container.offsetWidth
    }
    render(){
        let model = this.props.model;

        return (
            <div className="header-searchBar" ref="container">
                <div className="header-searchBar-left">
                    <span>{model.txt}</span>
                    <i className="header-search-btn2"></i>
                </div>
                <div className="header-searchBar-right">
                    <button onClick={this.handleHideSearch.bind(this)}>×</button>
                </div>
                <div className="header-searchBar-center">
                    <span style={{display:this.state.hasValue ? 'none' : 'block'}}>{model.placeHolder}</span>
                    {/*<input value={this.state.inputValue} onChange={this.handleChangeValue.bind(this)} onKeyPress={this.handleSearch.bind(this)} ref='input' type="text"/>*/}
                    <input onKeyPress={this.handleSearch.bind(this)} onChange={this.handleChangeValue.bind(this)} ref='input' type="text"/>
                </div>
            </div>
        );
    }
}

export default SearchInput;
