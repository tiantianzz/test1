/**
 * author: MG
 * 头部-搜索记录
 * */

class SearchHistory extends React.Component{

    render(){

        return (
            <div className="header-history">
                <div className="header-history-center">
                    <dl className="header-historyList" id="header-historyList" style={{width:this.props.searchBarWidth + 'px'}}>
                        <dt>{this.props.txt}</dt>
                        {this.props.history.map(txt =><dd onClick={this.props.handleSearch.bind(this,txt)}>{txt}</dd>)}
                    </dl>
                </div>

            </div>
        );
    }
}

export default SearchHistory;