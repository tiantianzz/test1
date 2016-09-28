/**
 * author: MG
 * 头部-搜索记录
 * */

class SearchHistory extends React.Component{
    handleSearch(txt){
        this.props.search(txt);
    }
    render(){

        return (
            <div className="header-history">
                <dl className="header-historyList" id="header-historyList">
                    <dt>{this.props.txt}</dt>
                    {this.props.history.map(txt =><dd onClick={this.handleSearch.bind(this,txt)}>{txt}</dd>)}
                </dl>
            </div>
        );
    }
}

export default SearchHistory;