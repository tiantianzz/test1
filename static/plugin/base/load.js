/**  loadjs loading source of page
**  author nero
*/
(function(){
    /** common path **/
    var pluginPATH = "/plugin/base/";

    /** 域名(如:superbuy.com) **/
    var domain = (function(hostname){
        if(hostname === 'localhost' || /^(\d+\.){3}\d+$/.test(hostname)){
            console.warn('请通过域名访问页面!');
            return 'super.com';
        }else{
            return hostname.match(/^.*\.(\w*\.\w*)$/)[1];
        }
    })(window.location.hostname);

    /** supervar **/
    window.supervar={
        imgsrc_cn: "/cn/source/img/",
        imgsrc_en: "/en/source/img/",
        domain : domain,
        apiURL: "//www."+ domain +"/api/",
        //apiURL: "/api/", //同域接口(或配置了反向代理)
        apiURL_login:"//login." + domain
    };

    /** js **/
    document.write('<script src="' + pluginPATH + 'react-with-addons.min.js" type="text/javascript"></sc' + 'ript>');
    document.write('<script src="' + pluginPATH + 'react-dom.min.js" type="text/javascript"></sc' + 'ript>');
    if(typeof Promise !== 'function'){
        document.write('<script src="' + pluginPATH + 'es6-promise.min.js" type="text/javascript"></sc' + 'ript>');
    }
    if(typeof fetch !== 'function'){
        document.write('<script src="' + pluginPATH + 'fetch.min.js" type="text/javascript"></sc' + 'ript>');
    }

    /** common plugin **/
    document.write('<script src="' + pluginPATH + 'util.min.js" type="text/javascript" ></sc' + 'ript>');
})();
