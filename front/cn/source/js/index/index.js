//图片路径
/*eslint-disable*/
require("../../less/index/index.less");
import React from 'react';
import ReactDOM from 'react-dom';
var base = window.supervar.imgsrc_cn + "index/";
var Page = React.createClass({
  getInitialState(){
    return {announces: []};
  },
  handleClick(){
    const goodLink = this.refs['goodLink'].value;
    if (!goodLink) return;
    location.href = /[a-zA-z]+:\/\/[^\s]+/.test(goodLink)
      ? `/cn/page/buy/?url=${encodeURIComponent(goodLink)}`
      : `/cn/page/search/?keyword=${encodeURIComponent(goodLink)}`;
  },
  handleKeyDown(e){
    if ((e.which || e.keyCode) === 13) return this.handleClick();
  },
  componentDidMount: function () {
    (function (win, undefined) {
      var $ = function (dom) {
        if (typeof dom == "string") {
          return document.getElementById(dom);
        } else {
          return dom;
        }
      };
      var removeClass = function (obj, cls) {
        if (hasClass(obj, cls)) {
          var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
          obj.className = obj.className.replace(reg, '');
        }
      };
      var hasClass = function (obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
      };

      var addClass = function (obj, cls) {
        if (!hasClass(obj, cls)) obj.className += " " + cls;
      };
      //获取兄弟元素
      var sibling = function (elem) {
        var r = [];
        var n = elem.parentNode.firstChild;
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            r.push(n);
          }
        }
        return r;
      };
      //获取当前多个li元素的下标
      var getIndex = function (all, cur) {
        var index = 0;
        for (var i = 0; i < all.length; i++) {
          if (all[i] === cur) {
            index = i;
          }
        }
        return index;
      };
      //绑定事件
      var addEventHandler = function (oTarget, sEventType, fnHandler) {
        if (oTarget.addEventListener) {
          oTarget.addEventListener(sEventType, fnHandler, true);
        } else if (oTarget.attachEvent) {
          oTarget.attachEvent("on" + sEventType, fnHandler);
        } else {
          oTarget["on" + sEventType] = fnHandler;
        }
      };

      /**
       * [domBanner banner切换]
       * @type {Object}
       */
      var domBanner = {
        box     : $('J_banner'),
        icon    : $('J_banner_icon').getElementsByTagName('li'),
        trans   : -820,
        step    : 0,
        speed   : 5, /*3s*/
        time    : null,
        max     : 4,
        run     : function () {
          var that = this;
          clearTimeout(that.time);
          if (that.step >= 0 && that.step < that.max) {
            that.box.style.marginTop = that.trans * that.step + 'px';
          } else {
            that.step = 0;
            that.box.style.marginTop = '0px';
          }
          addClass(that.icon[that.step], "active");
          //获取兄弟元素
          var sibs = sibling(that.icon[that.step]);
          for (var i = 0; i < sibs.length; i++) {
            removeClass(sibs[i], "active");
          }
          that.time = setTimeout(function () {
            that.step = (that.step + 1) % that.max;
            that.run();
          }, that.speed * 1000);
        },
        addEvent: function () {
          var _this = this;
          var icon = _this.icon;
          var curDiv = "";
          for (var i = 0; i < icon.length; i++) {
            curDiv = icon[i].getElementsByClassName('step')[0];
            (function (curDiv) {
              addEventHandler(curDiv, 'mouseover', function () {
                var idx = getIndex(icon, this.parentNode);
                for (var i = 0; i < icon.length; i++) {
                  removeClass(icon[i], "active");
                }
                if (idx >= 0 && idx < _this.max) {
                  clearTimeout(_this.time);
                  _this.step = idx;
                  _this.box.style.marginTop = _this.trans * _this.step + 'px';
                  _this.run();
                }
              });
            })(curDiv);
          }
        },
        init    : function () {
          this.addEvent();
          this.run();
        }
      };
      domBanner.init();


      /**
       * [公告]
       * @param  {[type]} cd [description]
       * @return {[type]}    [description]
       */
      var domNotice = {
        box     : $('J_notice'),
        list    : $('J_notice').getElementsByTagName("ul"),
        height  : 0,
        top     : 0,
        speed   : 0.2,
        time    : null,
        run     : function () {
          var _this = this;
          _this.time = setInterval(function () {
            if (_this.height + _this.top <= 0) {
              var firstNode = _this.list[0];
              _this.box.appendChild(firstNode);
              _this.top = 0;
            }
            _this.box.style.marginTop = (--_this.top) + 'px';
          }, _this.speed * 1000);
        },
        addEvent: function () {
          var _this = this;
          var bool1 = true;
          var bool2 = false;
          addEventHandler(_this.box, 'mouseenter', function () {
            if (bool1) {
              bool1 = false;
              bool2 = true;
              clearInterval(_this.time);
            }
          });
          addEventHandler(_this.box, 'mouseleave', function () {
            if (bool2) {
              bool2 = false;
              bool1 = true;
              _this.run();
            }
          });
        },
        init    : function () {
          this.height = this.list[0].offsetHeight;
          if (this.list.length < 2) {
            var child = this.list[0].cloneNode(true);
            this.box.appendChild(child);
          }
          this.addEvent();
          !this.time && this.run();
        }
      };
      domNotice.init();
      /***
       **动态控制样式
       */
      var addHoverClass = {
        dom      : $("J_business").getElementsByClassName("business"),
        initEvent: function () {
          var self = this;
          var domList = self.dom;
          for (var i = 0; i < domList.length; i++) {
            var cur = domList[i];
            (function (cur, domList) {
              addEventHandler(cur, 'mouseover', function () {
                for (var i = 0; i < domList.length; i++) {
                  addClass(domList[i], 'small');
                }
                removeClass(cur, 'small');
              });
              addEventHandler(cur, 'mouseout', function () {
                for (var i = 0; i < domList.length; i++) {
                  removeClass(domList[i], 'small');
                }
              });
            }(cur, domList))
          }
        },
        init     : function () {
          this.initEvent();
        }
      };
      addHoverClass.init();
    }(window));

    console.log(this.state);
    fetch(`${window.supervar.apiURL}advert/announce?currPage=1&pageSize=10`)
      .then(res=> {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(json=> {
        if (json.state === 0) {
          this.setState({
            announces: json.data[0].announcements
          });
        }
      })
      .catch(err=> {
        console.error(err);
      });
  },
  render           : function () {
    const domain = 'super.com';
    return (
      <div className="container-fluid body-container">
        <div className="row ddby-container pr">
          <div className="row banner">
            <ul className="banner-list"
                id="J_banner">
              <li className="what">
                <img src={base + "banner/1.jpg"} alt="" />
              </li>
              <li className="service">
                <img src={base + "banner/2.jpg"} alt="" />
              </li>
              <li className="why">
                <img src={base + "banner/3.jpg"} alt="" />
              </li>
              <li className="use">
                <img src={base + "banner/4.jpg"} alt="" />
              </li>
            </ul>
          </div>
          <div className="row icon-menu pa">
            <div className="container">
              <div className="icon-container fl">
                <h2 className="btitle row"> 4步，为您便捷代购</h2>
                <ul className="row steplist" id="J_banner_icon">
                  <li className="step-one">
                    <div className="step">
                      <h3>1. 采购</h3>
                      <p><i>1.</i>采购 : 提供商品信息，我们为您采购</p>
                    </div>
                    <div className="step-flow">
                      <span></span><span></span><span></span>
                    </div>
                  </li>
                  <li className="step-two">
                    <div className="step">
                      <h3>2. 检验及入库</h3>
                      <p><i>2.</i>检验及入库 : 商品经检验后保存在免费仓库</p>
                    </div>
                    <div className="step-flow">
                      <span></span><span></span><span></span>
                    </div>
                  </li>
                  <li className="step-three">
                    <div className="step">
                      <h3>3. 寄送</h3>
                      <p><i>3.</i>寄送 : 您随时指定仓库商品组合寄送</p>
                    </div>
                    <div className="step-flow">
                      <span></span><span></span><span></span>
                    </div>
                  </li>
                  <li className="step-four">
                    <div className="step">
                      <h3>4. 售后服务</h3>
                      <p><i>4.</i>售后服务 : 商品和物流问题我们全程负责</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="menu-container fr">
                <div className="row menu"
                     id="J_business">
                  <div className="row business what">
                    <h3 className="title"><b>Who</b><br />superbuy是谁？</h3>
                    <div className="reasonlist-box whatlist">
                      <h4>Who - superbuy</h4>
                      <ul className="reasonlist">
                        <li>
                          由<a href="https://gupiao.baidu.com/stock/hk00700.html?from=aladingpc" className="sw-txt-und" target="_blank">腾讯控股(0700.HK)</a>
                          <a href="http://baike.baidu.com/item/%E8%B4%A1%E6%B5%B7%E6%98%9F" className="sw-txt-und" target="_blank">创始股东</a>创办
                        </li>
                        <li>为全球用户提供代购中国商品一站式服务</li>
                        <li>采购、检验、保存、寄送、售后</li>
                        <li>所有环节我们解决并负责</li>
                        <li className="sw-txt-hr"><p>坚持为用户解决难题、创造价值之理念</p><p>以最具美誉之产品与服务“重新定义购物”！</p></li>
                        <li>
                          <div className="sw-us-links">
                            <a href="/cn/page/about/aboutUs/" target="_blank">关于我们</a>
                            <a href="/downloads/" target="_blank">手机版</a>
                          </div>
                        </li>
                      </ul>

                    </div>

                  </div>
                  <div className="row business service">
                    <h3 className="title-max"><b>Why</b><br />为什么需要“代购”服务？</h3>
                    <div className="reasonlist-box">
                      <h4>Why - “代购”</h4>
                      <ul className="reasonlist">
                        <li>单平台商品有限<b className="sw-vs-txt">vs</b>支持任何电商</li>
                        <li>跨国障碍易遇假货贵货<b className="sw-vs-txt">vs</b>采购专家保障最优结果</li>
                        <li>退换成本极高<b className="sw-vs-txt">vs</b>精细检验及包装避免退换</li>
                        <li>国际运费昂贵<b className="sw-vs-txt">vs</b>智能集运减少30%以上运费支出</li>
                        <li>卖家平台物流沟通费时劳心<b className="sw-vs-txt">vs</b>一站式全解决全负责</li>
                        <li>superbuy帮您解决以上购物问题</li>
                      </ul>
                      <p className="sw-see-more">
                        <a href={`http://buy.${domain}`}
                           className="sw-txt-und"
                           target="_blank">了解更多</a></p>
                      <div className="sw-service-more">
                        <div className="sw-ddby-buy">
                          <p>superbuy代购 =</p>
                          <p>选择无限+省时省心+比自己购买更好的结果</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row business why">
                    <h3 className="title"><b>Why</b><br />为什么选择superbuy？</h3>
                    <div className="reasonlist-box">
                      <h4>Why - superbuy</h4>
                      <ul className="reasonlist">
                        <li>
                          <span className="sw-ident-spc">首创：</span>
                          <a href="mailto:ceo@superbuy.com" className="sw-txt-und" target="_blank">创始人CEO邮箱</a></li>
                        <li><span className="sw-ident-spc">{}</span>终身免服务费</li>
                        <li>
                          <span className="sw-ident-spc">独家：</span>7x24小时
                          <a href="https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&configID=126398&jid=3783013802&skillId=6966&pagetitle=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2&enterurl=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2&s=1" className="sw-txt-und" target="_blank">在线客服</a>
                        </li>
                        <li>
                          <strong className="sw-ident-spc">{}</strong>
                          公开实时与同业<a href="http://www.dotdotbuy.com/html/about/pages/compare.html?spm=2101.892.N.N.8cc4af6" className="sw-txt-und" target="_blank">对比</a>
                        </li>
                        <li>
                          <strong className="sw-ident-spc">{''}</strong>
                          <span className="why-w">智能运费优化</span>
                        </li>
                        <li>
                          <strong className="sw-ident-spc">{}</strong>
                          <span className="why-w">全流程照片查阅</span>
                        </li>
                        <li>
                          <strong className="sw-ident-spc">{}</strong>
                          <a href="http://bbs.dotdotbuy.com/forum.php?mod=viewthread&tid=90957" className="sw-txt-und" target="_blank">包赔承诺</a>
                        </li>
                      </ul>
                      <div className="sw-service-more">
                        <div>
                          <p>superbuy的目标是成为最具美誉的服务者</p>
                          <p>我们愿与任何人做比较！</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row business use">
                    <h3 className="title"><b>How</b><br />如何使用superbuy？</h3>
                    <div className="reasonlist-box uselist">
                      <h4>How - superbuy</h4>
                      <ul className="reasonlist">
                        <li>1、选择<a href="/downloads/" className="sw-txt-und" target="_blank">手机APP</a>或网站
                        </li>
                        <li>2、挑选想要的商品，指示我们采购</li>
                        <li>3、等待商品送达您的专属仓库</li>
                        <li>4、随时选择商品寄送</li>
                      </ul>
                      <div className="ddt-links-btn">
                        <p>
                          <a href="http://www.dotdotbuy.com/html/about/pages/buy.html?spm=2101.892.N.N.8cc4af6" className="sw-txt-und" target="_blank">代购指引</a>
                          <a href="http://www.dotdotbuy.com/html/about/pages/express.html?spm=2101.892.N.N.8cc4af6" className="sw-txt-und" target="_blank">转运指引</a>
                        </p>
                        <p>
                          <a href="/cn/page/video/index" className="sw-txt-und" target="_blank">入门视频</a>
                          <a href="/cn/page/help/" className="sw-txt-und" target="_blank">帮助中心</a>
                        </p>
                      </div>
                      <div className="well-ddt">
                        <p>欢迎尝试我们的更多服务</p>
                        <a href={`http://ex.${domain}`} className="sw-txt-und sw-more-sce" target="_blank">自助转运</a>
                        <a href={`http://mall.${domain}`} className="sw-txt-und sw-more-sce" target="_blank">自营商城</a>
                        <a href={`http://tour.${domain}`} className="sw-txt-und sw-more-sce" target="_blank">旅游服务</a>
                        <a href="http://bbs.dotdotbuy.com/forum.php" className="sw-txt-und sw-more-sce" target="_blank">交流社区</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row n-t-container">
          <div className="container n-t-content">
            <div className="row notice">
              <div className="notice-container">
                <div className="notice-box-warp">
                  <div className="noticebox"
                       id="J_notice">
                    <ul className="noticelist">
                      {
                        this.state.announces.map(data=>
                          <li><a rel="nofollow"
                                 alt={data.alt}
                                 href={data.href}
                                 title={data.title}
                                 target="_blank"
                                 style={{color: "#f00"}}><span className="type"
                                                               style={{marginRight: 8}}>{data.category}</span>{data.title}
                          </a></li>
                        )
                      }
                      <li style={{height: 1, overflow: 'hidden'}}>
                        <a rel=""
                           title=""
                           href="#"
                           target="_blank"
                           style={{color: "#F00"}}><span className="type"></span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row tools">
              <div className="tools-box">
                <a href="/downloads"
                   target="_blank"><img src={base + "tools-1.png"}
                                        alt="" /></a>
              </div>
              <div className="tools-box">
                <a href="/cn/page/video/index/"><img src={base + "tools-2.png"}
                                                     alt="" /></a>
              </div>
              <div className="tools-box search">
                <div className="row search-box">
                  <input type=""
                         className="search"
                         placeholder="请粘贴商品网址"
                         onKeyDown={this.handleKeyDown}
                         ref="goodLink" />
                  <button className="sub-search"
                          onClick={this.handleClick}>{}</button>
                  <span className="clear-url"
                        id="J_clear_url"><img src={base + "ex-close.png"}
                                              alt="" /></span>
                </div>
                <div className="row use-tools">
                  <p className="use-txt">使用购物助手，淘宝天猫一键代购</p>
                  <a target="_blank"
                     href="http://buy.daigou.com/views/single/install.html"
                     className="use-plugins">立即安装插件</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


var Wrap = window.supervar.Wrap;
var content = ReactDOM.render(
  <Wrap content={Page}
        en="/en/page/" />,
  document.body
);
