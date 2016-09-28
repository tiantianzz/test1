/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/16 10:58
 */
(function(){
  /** common path **/
  var pluginPATH = "/plugin/dev/";

  /** 域名(如:superbuy.com) **/
  var domain = (function(hostname){
    if(hostname === 'localhost' || /^(\d+\.){3}\d+$/.test(hostname)){
      console.warn('请通过域名访问页面!');
      return 'super.com'
    }else{
      return hostname.match(/^.*\.(\w*\.\w*)$/)[1];
    }
  })(window.location.hostname);

  /** supervar **/
  window.supervar={
    imgsrc_cn: "//www."+ domain +"/cn/source/img/",
    imgsrc_en: "//www."+ domain +"/en/source/img/",
    domain : domain,
    apiURL: "//www."+ domain +"/api/",
    //apiURL: "/api/", //同域接口(或配置了反向代理)
    apiURL_login:"//login." + domain
  };

  /** js **/
  document.write('<script src="' + pluginPATH + 'react-with-addons.js" type="text/javascript"></sc' + 'ript>');
  document.write('<script src="' + pluginPATH + 'react-dom.js" type="text/javascript"></sc' + 'ript>');
  if(typeof Promise !== 'function'){
    document.write('<script src="' + pluginPATH + 'es6-promise.js" type="text/javascript"></sc' + 'ript>');
  }
  if(typeof fetch !== 'function'){
    document.write('<script src="' + pluginPATH + 'fetch.js" type="text/javascript"></sc' + 'ript>');
  }

  /** common plugin **/
  document.write('<script src="' + pluginPATH + 'util.js" type="text/javascript" ></sc' + 'ript>');
})();
