/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/28 15:59
 */
import React from 'react';
import './src/box.less';
const PropTypes = React.PropTypes;
const BoxMask = props=> {
  const {width, height}=props;
  const style = {width, height, display: props.display};
  return (<div className="box-mask"
               style={style}></div>);
};
BoxMask.propTypes = {
  width  : PropTypes.number.isRequired,
  height : PropTypes.number.isRequired,
  display: PropTypes.string.isRequired
};
const TextWrap = props=>(
  <table width="100%"
         cellSpacing="0"
         cellPadding="0"
         style={{verticalAlign: 'middle'}}>
    <tbody>
    <tr>
      <td>
        <table width="100%"
               cellSpacing="0"
               cellPadding="0"
               style={{verticalAlign: 'middle'}}
               className="content-title">
          <tbody>
          <tr>
            <td>{props.text}</td>
          </tr>
          </tbody>
        </table>
        <div className="content-text"></div>
      </td>
    </tr>
    </tbody>
  </table>
);
TextWrap.propTypes = {
  text: PropTypes.string.isRequired
};
export default class Box extends React.Component {
  static defaultProps = {
    display      : false,
    title        : '弹出窗',
    okButton     : true,
    okText       : '确定',
    okHandler    : ()=>undefined,
    cancelButton : true,
    cancelHandler: ()=>undefined,
    cancelText   : '取消',
    closeButton  : true,
    closeHandler : ()=>undefined,
    width        : 550,
    content      : '',
    messageType  : 'warn',
    type         : 'dialog'
  };
  static propTypes = {
    title        : PropTypes.string,
    content      : PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
    messageType  : PropTypes.oneOf(['ok', 'err', 'warn', 'notice', 'qna']),
    okButton     : PropTypes.bool,
    okText       : PropTypes.string,
    okHandler    : PropTypes.func,
    cancelButton : PropTypes.bool,
    cancelText   : PropTypes.string,
    cancelHandler: PropTypes.func,
    closeButton  : PropTypes.bool,
    closeHandler : PropTypes.func,
    width        : PropTypes.number,
    display      : PropTypes.bool,
    type         : PropTypes.oneOf(['dialog', 'form'])
  };

  constructor() {
    super();
    this.state = {
      width : window.innerWidth,
      height: window.innerHeight
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      width : window.innerWidth,
      height: window.innerHeight
    });
  }

  componentDidUpdate() {
    //生成弹窗之后，垂直方向居中
    const height = this.refs['boxTips'].offsetHeight;
    const width = this.refs['boxTips'].offsetWidth;
    if (this.refs['boxTips'].style.marginTop != '-' + (height / 2) + 'px')
      this.refs['boxTips'].style.marginTop = '-' + (height / 2) + 'px';
    if (this.refs['boxTips'].style.marginLeft != '-' + (width / 2) + 'px')
      this.refs['boxTips'].style.marginLeft = '-' + (width / 2) + 'px';
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const props = this.props;
    const display = props.display ? 'block' : 'none';
    const style = {display, width: props.width};
    const {title, okText, cancelText, cancelHandler, okHandler, type, content, messageType, closeHandler}=props;
    const contentWrap = type === 'dialog' ? (<TextWrap text={content} />) : (content);
    const okButton = props.okButton
      ? (<span className="box-btn-bt"
               style={{display: 'inline-block'}}>
            <a href="javascript:void(0)"
               className="btn-box-ok"
               onClick={okHandler}>
              <span>{okText}</span>
            </a>
          </span>)
      : '';
    const cancelButton = props.cancelButton
      ? (<span className="box-btn-bt"
               style={{display: 'inline-block'}}>
            <a href="javascript:void(0)"
               onClick={cancelHandler}
               className="btn-box-cancel">
              <span>{cancelText}</span>
            </a>
        </span>)
      : '';
    const closeButton = props.closeButton
      ? (<a onClick={closeHandler}
            className="box-closer"
            href="javascript:void(0)"
            title="关闭">×</a>)
      : '';
    return (
      <div>
        <div className="box-outer box-std box-tips"
             ref="boxTips"
             style={style}>
          <div className="box">
            {closeButton}
            <div className="box-title"
                 style={{display}}>
              <span id="box_title_main"
                    className="box-title-main">{title}</span>
            </div>
            <div className={type === 'dialog'
              ? 'box-content box-content-forms box-content-forms-small'
              : 'box-content box-content-forms'}>
              <table width="100%"
                     cellSpacing="0"
                     cellPadding="0">
                <tbody>
                <tr>
                  <td style={{verticalAlign: 'top'}}
                      width="0">
                    <span id="box_icon"
                          className={type === 'dialog' ? `box-ico box-ico-${messageType}1` : 'hide'}
                          style={{display: 'inline'}}>{''}</span>
                  </td>
                  <td width="100%">
                    <div style={{width: '100%'}}
                         className="box-content-main">
                      <div className="box-content-info">
                        {contentWrap}
                      </div>
                      <div className="box-ft">
                        {okButton}
                        {cancelButton}
                      </div>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            {/*<span className="box-tl">{''}</span>*/}
            {/*<span className="box-tr">{''}</span>*/}
            {/*<span id="box_bl"*/}
            {/*className="box-bl">{''}</span>*/}
            {/*<span id="box_br"*/}
            {/*className="box-br">{''}</span>*/}
          </div>
          <div className="box-shadow"></div>
        </div>
        <BoxMask width={this.state.width}
                 height={this.state.height}
                 display={display} />
      </div>
    );
  }
}