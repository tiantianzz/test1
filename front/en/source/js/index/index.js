//图片路径
/*eslint-disable*/
require("../../less/index/index.less");
import React from 'react';
import ReactDOM from 'react-dom';
var base = window.supervar.imgsrc_en + "index/";

var Page = React.createClass({
  getInitialState(){
    return {announces: []};
  },
  handleClick(){
    const goodLink = this.refs['goodLink'].value;
    if (!goodLink) return;
    location.href = /[a-zA-z]+:\/\/[^\s]+/.test(goodLink)
      ? `/en/page/buy/?url=${encodeURIComponent(goodLink)}`
      : `/en/page/search/?keyword=${encodeURIComponent(goodLink)}`;
  },
  handleKeyDown(e){
    if ((e.which || e.keyCode) === 13) return this.handleClick();
  },
  componentDidMount: function () {
    (function (win, undefined) {
      "use strict";
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
      }
      var hasClass = function (obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
      }

      var addClass = function (obj, cls) {
        if (!hasClass(obj, cls)) obj.className += " " + cls;
      }
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
      }
      //获取当前多个li元素的下标
      var getIndex = function (all, cur) {
        var index = 0;
        for (var i = 0; i < all.length; i++) {
          if (all[i] === cur) {
            index = i;
          }
        }
        return index;
      }
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

    fetch(`${window.supervar.apiURL}advert/announce?currPage=1&pageSize=10`,{credentials: "include"})
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
            <ul className="banner-list" id="J_banner">
              <li className="what"><img src={base + "banner/1.jpg"} alt="" /></li>
              <li className="service"><img src={base + "banner/2.jpg"} alt="" /></li>
              <li className="why"><img src={base + "banner/3.jpg"} alt="" /></li>
              <li className="use"><img src={base + "banner/4.jpg"} alt="" /></li>
            </ul>
          </div>
          <div className="row icon-menu pa">
            <div className="container">
              <div className="icon-container fl">
                <h2 className="btitle row">Shopping Agent in 4 steps</h2>
                <ul className="row steplist" id="J_banner_icon">
                  <li className="step-one">
                    <div className="step">
                      <h3>1. Buy for you</h3>
                      <p><i>1.</i>Simply provide us the product info </p>
                    </div>
                    <div className="step-flow">
                      <span></span><span></span><span></span>
                    </div>
                  </li>
                  <li className="step-two">
                    <div className="step">
                      <h3>2. Quality Inspection and Storage</h3>
                      <p><i>2.</i>Items will be stored after inspection</p>
                    </div>
                    <div className="step-flow">
                      <span></span><span></span><span></span>
                    </div>
                  </li>
                  <li className="step-three">
                    <div className="step">
                      <h3>3. Delivery</h3>
                      <p><i>3.</i>Mix & Match items before delivery</p>
                    </div>
                    <div className="step-flow">
                      <span></span><span></span><span></span>
                    </div>
                  </li>
                  <li className="step-four">
                    <div className="step">
                      <h3>4. After-sales Care</h3>
                      <p><i>4.</i>Contact us for any quality and logistic issues</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="menu-container fr">
                <div className="row menu" id="J_business">
                  <div className="row business what">
                    <h3 className="title"><b>Who</b><br />Who is superbuy？</h3>
                    <div className="reasonlist-box whatlist">
                      <h4>Who - superbuy</h4>
                      <ul className="reasonlist">
                        <li>Founded by one of the
                          <a href="http://baike.baidu.com/item/%E8%B4%A1%E6%B5%B7%E6%98%9F" className="sw-txt-und" target="_blank">Co-Founder</a> of
                          <a href="https://gupiao.baidu.com/stock/hk00700.html?from=aladingpc" className="sw-txt-und" target="_blank">Tencent Holdings (0700.HK).</a>
                        </li>
                        <li>We provide one-stop Shopping Agent services for users worldwide.</li>
                        <li>We follow up the whole process closely from buying, quality inspection , storage, delivery and after-sales.</li>
                        <li className="sw-txt-hr">Solving problems for our customers, "Shopping redefined" by providing you the best we can !</li>
                        <li>
                          <div className="sw-us-links">
                            <a href="/en/page/about/aboutUs/" target="_blank">About Us</a><a href="/downloads/" target="_blank">Mobile Version</a>
                          </div>
                        </li>
                      </ul>

                    </div>

                  </div>
                  <div className="row business service">
                    <h3 className="title-max"><b>Why</b><br />Why Shopping Agent?</h3>
                    <div className="reasonlist-box">
                      <h4>Why - "Shopping Agent"</h4>
                      <ul className="reasonlist">
                        <li>
                          <p className="wp">Limited goods on single e-commerce platform<b className="sw-vs-txt">vs</b>Any e-commece platform
                          </p></li>
                        <li>
                          <p className="wp">Easy to get fake goods on cross border online shopping<b className="sw-vs-txt">vs</b>Professional buying to assure the best quality
                          </p></li>
                        <li>
                          <p className="wp">High cost for refunds<b className="sw-vs-txt">vs</b>Quality inspection and professional packing to lower the possibility of refund
                          </p></li>
                        <li>
                          <p className="wp">High cost for international shipping<b className="sw-vs-txt">vs</b>Smart logistics services to reduce shipping cost by 30%
                          </p></li>
                        <li>
                          <p className="wp">Time-consuming to communicate with sellers<b className="sw-vs-txt">vs</b>follow up closely for your items and logistics all the way
                          </p></li>
                      </ul>
                      <p className="sw-see-more">
                        <a href="/en/page/shopping/shopping.html" className="sw-txt-und" target="_blank">Learn more</a>
                      </p>
                      <div className="sw-service-more">
                        <div className="sw-ddby-buy">
                          <p>supperbuyDDBY buying agent =</p>
                          <p>Unlimited choice+ + save time + better than shop yourselves</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row business why">
                    <h3 className="title"><b>Why</b><br />Why choose superbuy？</h3>
                    <div className="reasonlist-box">
                      <h4>Why - superbuy</h4>
                      <ul className="reasonlist">
                        <li>
                          <span className="sw-ident-spc">Pioneer:</span><a href="mailto:ceo@superbuy.com" className="sw-txt-und" target="_blank">CEO mailbox</a>
                        </li>
                        <li className="mb10"><span className="sw-ident-spc">{}</span>Lifelong free service charge</li>
                        <li className="mb5"><span className="sw-ident-spc fl">Exclusive:</span><span className="why-w">7X24-hour <a href="https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=467803&configID=126398&jid=3783013802&skillId=6966&pagetitle=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2&enterurl=%E4%B8%AD%E6%96%87%E7%BD%91%E7%AB%99%E5%92%A8%E8%AF%A2&s=1" className="sw-txt-und" target="_blank">online customer service</a></span>
                        </li>
                        <li className="mb5">
                          <strong className="sw-ident-spc">{}</strong><a href="http://www.dotdotbuy.com/html/about/pages/compare.html?spm=2101.892.N.N.8cc4af6" className="sw-txt-und" target="_blank">Comparison with others</a>
                        </li>
                        <li className="mb5">
                          <strong className="sw-ident-spc">{}</strong><span className="why-w">Smart shipping cost estimation</span>
                        </li>
                        <li className="mb5">
                          <strong className="sw-ident-spc">{}</strong><span className="why-w">Photos available for whole process</span>
                        </li>
                        <li className="mb5">
                          <strong className="sw-ident-spc">{}</strong><a href="http://bbs.dotdotbuy.com/forum.php?mod=viewthread&tid=90957" className="sw-txt-und" target="_blank">Damaged and Refunds Guarantee</a>
                        </li>
                      </ul>
                      <div className="sw-service-more">
                        <div>
                          <p>superbuy aim to become the most reputed service provider</p>
                          <p>Feel Free to compare us with others.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row business use">
                    <h3 className="title"><b>How</b><br />How to use superbuy？</h3>
                    <div className="reasonlist-box uselist">
                      <h4>How - superbuy</h4>
                      <ul className="reasonlist">
                        <li className="cf"><span className="reasonlistItem">1、</span>
                          <div className="reasonCnt">Use
                            <a href="/downloads/" className="sw-txt-und" target="_blank">App </a>or visit Website
                          </div>
                        </li>
                        <li className="cf"><span className="reasonlistItem">2、</span>
                          <div className="reasonCnt">Pick desired items or simply send us the link, then we will buy for you</div>
                        </li>
                        <li className="cf"><span className="reasonlistItem">3、</span>
                          <div className="reasonCnt">Wait for items inspection and it will be delivered to your exclusive warehouse</div>
                        </li>
                        <li className="cf"><span className="reasonlistItem">4、</span>
                          <div className="reasonCnt">Deliver your items whenever you want</div>
                        </li>
                      </ul>
                      <div className="ddt-links-btn">
                        <p>
                          <a href="http://www.dotdotbuy.com/html/about/pages/buy.html?spm=2101.892.N.N.8cc4af6" className="sw-txt-und" target="_blank">Shopping Agent Guidance</a>
                          <a href="http://www.dotdotbuy.com/html/about/pages/express.html?spm=2101.892.N.N.8cc4af6" className="sw-txt-und" target="_blank">Parcel Forward Guidance</a>
                        </p>
                        <p>
                          <a href="/en/page/video/index" className="sw-txt-und" target="_blank">Watch video to get started</a>
                          <a href="/en/page/help/" className="sw-txt-und" target="_blank">Help Center</a>
                        </p>
                      </div>
                      <div className="well-ddt">
                        <p>Why not to try our other services</p>
                        <a href={`http://ex.${domain}`} className="sw-txt-und sw-more-sce" target="_blank">Parcel Forward Service</a>
                        <a href={`http://mall.${domain}`} className="sw-txt-und sw-more-sce" target="_blank">Mall</a>
                        <a href={`http://tour.${domain}`} className="sw-txt-und sw-more-sce" target="_blank">Travel</a>
                        <a href={`http://bbs.dotdotbuy.com/forum.php`} className="sw-txt-und sw-more-sce" target="_blank">Groups</a>
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
                  <div className="noticebox" id="J_notice">
                    <ul className="noticelist">
                      {
                        this.state.announces.map(data=>
                          <li>
                            <a rel="nofollow" alt={data.alt} href={data.href} title={data.title} target="_blank" style={{color: "#f00"}}>{data.title}</a>
                          </li>
                        )
                      }
                      <li style={{height: 1, overflow: 'hidden'}}>
                        <a rel="" title="" href="#" target="_blank" style={{color: "#F00"}}><span className="type"></span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row tools">
              <div className="tools-box">
                <a href="/downloads" target="_blank"><img src={base + "tools-1.png"} alt="" /></a>
              </div>
              <div className="tools-box">
                <a href="/en/page/video/index/"><img src={base + "tools-2.png"} alt="" /></a>
              </div>
              <div className="tools-box search">
                <div className="row search-box">
                  <input type="" className="search" onKeyDown={this.handleKeyDown} placeholder="Please paste products website" ref="goodLink" />
                  <button className="sub-search" onClick={this.handleClick}>{}</button>
                  <span className="clear-url" id="J_clear_url"><img src={base + "ex-close.png"} alt="" /></span>
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
  <Wrap content={Page} cn="/" />,
  document.body
);