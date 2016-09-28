/**
 * Created by zaki on 2016/8/26.
 */

class Pagination extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      index: props.index
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.index !== this.props.index) {
      this.setState({ index: nextProps.index });
    }
  }

  handleChange(index){
    this.setState({
      index : parseInt(index)
    });
    if(this.props.onChange){
      this.props.onChange(index);
    }
    this.props.callbackParent(index);
  }

  getPages(){
    let { total, size, pages } = this.props;
    let index = this.state.index;
    let max = Math.ceil(total / size),
      left,
      right,
      span = pages;
    pages = [];

    if (max < span) {
      right = max;
      left = 1;
    }
    else{
      let center = Math.floor(span / 2) + 1;
      if(index > max){
        index = max;
      }

      if(index < center){
        left = 1;
        right = span;
      }
      else{
        left = index -center + 1;
        right = index + center -2;
        if(right > max){
          right = max;
          left = right -center - 2;
        }
      }
    }


    for (let i = left; i <right + 1; i++) {
      pages.push(i);
    }

    return {pages, max};
  }

  render(){
    let items = [],
      index = this.state.index ,
      {pages, max} = this.getPages();

    items.push(
    <li className="pagination-first" key="first" onClick={this.handleChange.bind(this,1)}><a>Home</a></li>
  );
    items.push(
    <li className={index <= 1 ? "disabled" : ""} key="prev" onClick={index <=1 ? null : this.handleChange.bind(this, index -1)} ><a>Previous Page</a></li>
  );

    for(let i = 0; i < pages.length; i++){
      items.push(
      <li className={pages[i] == index ?"active" : ""} onClick={this.handleChange.bind(this, pages[i])} key={pages[i]}><a className=""> {pages[i]}</a></li>
    );
    }

    items.push(
    <li className={index >= max ? "disabled" : ""} key="next" onClick={index >= max ? null : this.handleChange.bind(this,index+1)}><a>Next Page</a></li>
  );

    items.push(
    <li className="pagination-last" key="last" onClick={this.handleChange.bind(this, max)}><a>Last Page</a></li>
  );

    return (
      <ul className="clearfix">
      {items}
      </ul>
  );
  }
}

export default Pagination;
