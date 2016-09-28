/**
 * Desc: 工具函数库
 * DateTime: 2016/8/10 15:21
 */
(supervar=> {
  supervar.util = (()=>({
    /**
     * 获取 url 中的查询字符串
     * @author CodeLai
     * @param name {string} 查询字符的键名
     * @param url {string|undefined} 需要查询的 url,默认使用当前 url
     * @return {string||null} 查询字符的值
     */
    //TODO:如果不传入 name 参数，则把所有的查询参数提取出来
    getQueryString(name, url){
      url = url || window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
      const results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
    /**
     * 对象序列化函数 {a:b,c:d} => 'a=b&c=d'
     * @author CodeLai
     * @param obj {object} 需要被序列化的对象
     * @param encode {boolean|undefined}
     * @return {string} 序列化结果
     */
    serialize(obj, encode) {
      if (obj.constructor !== Object) {
        console.error('传入的值必须是对象');//eslint-disable-line
        return '';
      }
      const serializeArr = [];
      (function iteration(obj, key) {//eslint-disable-line
        for (let ele in obj) {
          if (!obj.hasOwnProperty(ele)) continue;
          (()=> {
            const itemKey = key ? key + '[' + ele + ']' : ele;
            if (obj[ele].constructor === Object) {
              iteration(obj[ele], key);
            } else if (obj[ele].constructor === Array) {
              for (let value of obj[ele]) {
                serializeArr.push(itemKey + '[]=' + value);
              }
            } else {
              serializeArr.push(itemKey + '=' + obj[ele]);
            }
          })(obj, key);
        }
      })(obj);
      return encode ? encodeURIComponent(serializeArr.join('&')) : serializeArr.join('&');
    },
    /**
     * 获取元素的计算样式
     * @author CodeLai
     * @param dom {Node} DOM节点
     * @param style {string} 样式简写  lineHeight
     * @return {*}
     */
    getComputedStyle(dom, style){
      return dom.currentStyle ? dom.currentStyle[style] : document.defaultView.getComputedStyle(dom, style)[style];
    },
    /**
     * 为整数加上千位分隔符，暂不支持小数  12345 => 12,345
     * @author CodeLai
     * @param param {number}
     * @return {*}
     */
    addThousandsSeparator(param){
      if (isNaN(Number(param))) {
        console.error('传入的值必须是数字或者是可以被转换为数字的字符串');//eslint-disable-line
        return '';
      }
      let digital = String(param);
      const replaceReg = /(\d)(?=(\d{3})+\b)/g;
      const testReg = /(\d),(?=(\d{3})+\b)/g;
      if (testReg.test(digital)) {
        console.error('传入的值不符合规范，千位分隔符不在规定的位置');
        return '';
      }
      return digital.replace(replaceReg, '$1,');

    },
    /*eslint-disable*/
    /**
     * 把search字符串转为对象
     * @author MG
     * @param search <string|undefined> search字符串
     * @return object search字符串转换成的对象,没有传参时返回本页面url的search的对象
     * */
    search2Obj(search){
      search = search || window.location.search;
      if (typeof search !== 'string' || !search) {
        return {};
      }
      var obj = {},
        arr = search.slice(1).split('&');

      arr.forEach(function (item) {
        var a = item.split('=');
        obj[a[0]] = a[1];
      });

      return obj;
    },
    /**
     * 把对象转为search字符串
     * @author MG
     * @param obj <object>
     * @return string
     * */
    obj2Search(obj) {
      return '?' + supervar.util.serialize(obj);
    },
    /**
     * 把分转为带小数点的元
     * @author MG
     * @param cent <string|number> 代表分的字符串或者数字
     * @return string
     * */
    cents2Bucks(cent) {
      if (typeof cent !== 'string' && typeof cent !== 'number') {
        return '';
      }
      return (cent / 100).toFixed(2);
    },
    /**
     * 获取元素相对于页面的位置
     * @author MG
     * @param ele <DOM object>
     * @return object {top:*,left:*}
     * */
    getDomPosition (ele){
      let left = 0,
        top = 0;
      while (ele) {
        left += ele.offsetLeft;
        top += ele.offsetTop;
        ele = ele.offsetParent;
      }
      return {left, top};
    },
    /**
     * 获取任意值的构造函数名
     * @author MG
     * @param obj <任意值>
     * @return string 除[undefined]和[null]返回他本身外,其他值都返回其构造函数名(字符串)
     *
     * @example getConstructorName(null)  >>>  null
     * @example getConstructorName({})  >>>  'Object'
     * @example getConstructorName([])  >>>  'Array'
     * @example getConstructorName(new FormData)  >>>  'FormData'
     * */
    getConstructorName (obj){
      if (obj === 0) return "Number";
      return obj && obj.constructor && obj.constructor.toString().match(/function\s*([^(]*)/)[1];
    },
    /**
     * 包装原生fetch
     * @author MG
     * @param url <string>
     * @param options <object>
     * @return Promise
     *
     * @desc
     *    1.参数和原生fetch一致
     *    2.默认添加credentials = 'include'
     *    3.如果传入的body属性为对象, 将自动使用JSON.stringify转为字符串,并把Content-type赋值为"application/json; charset=UTF-8"
     *    4.返回的是fetch().then(response => response.json()),因此使用时忽略.then(response => response.json())直接得到结果
     *    5.统一post和get请求参数的写法,get可以和post一样,把参数以一个对象写到body属性里
     *
     * @example
     * 原生fetch用法:
     * function getInfo(param){
     *       return fetch('/api/getInfo/',{
     *           method: 'POST',
     *           credentials: 'include',
     *           headers: {"Content-type":"application/json; charset=UTF-8"},
     *           body: JSON.stringify(param)
     *       })
     *  }
     * getInfo({id:1}).then(response => response.json()).then(data => {
     *       //TODO
     *  })
     *
     * 现使用此fetch简化用法如下:
     * function getInfo(param){
     *       return fetch('/api/getInfo/',{
     *           method: 'POST',
     *           body: param
     *       })
     *  }
     * getInfo({id:1}).then(data => {
     *       //TODO
     *  })
     * */
    fetch(url, options){
      if (this.getConstructorName(options) === "Object") {

        options.credentials = options.credentials === undefined ? 'include' : options.credentials;

        if (this.getConstructorName(options.body) === "Object") {

          /** POST请求,把参数转化为JSON字符串,并设置Content-Type **/
          if (options.method === 'POST' || options.method === 'post') {

            options.headers = options.headers || {};
            options.headers["Content-type"] = options.headers["Content-type"] || "application/json; charset=UTF-8";
            options.body = JSON.stringify(options.body)

          } else {

            /** GET请求,把参数转化为查询字符串,并拼接到url后面 **/
            url = url + this.obj2Search(options.body);
            delete options.body;
          }
        }
      } else {
        options = {
          credentials: 'include'
        }
      }

      return fetch(url, options).then(response => response.json());
    },
    /**
     * 获取页面滚动条高度
     * @return number
     * */
    getScrollTop(){
      return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    },
    /**
     * 设置页面滚动条高度
     * @param scrollTop <number>
     * */
    setScrollTop(scrollTop) {
      if (document.body.scrollTop) {
        document.body.scrollTop = scrollTop;
        if (window.navigator.userAgent.toLowerCase().indexOf('chrome') !== -1) return;
      }

      if (window.pageYOffset) {
        window.pageYOffset = scrollTop;
        // return
      }

      if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = scrollTop;
        // return
      }
    },
    /**
     * 设置cookie
     * @author MG
     * @param name <string> 名
     * @param value <string> 值
     * @param iDay <number> 天数
     * @param domain <string> 域名
     * */
    setCookie(name, value, iDay, domain){
      var oDate = new Date();
      oDate.setDate(oDate.getDate() + iDay);
      document.cookie = name + '=' + value + ';path=/;expires=' + oDate + (domain ? ";domain=" + domain : '');
    },
    /**
     * 获取cookie
     * @author MG
     * @param name <string> 名
     * @return string 值
     * */
    getCookie(name){
      var arr = document.cookie.split('; ');
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');
        if (arr2[0] == name) {
          return arr2[1];
        }
      }
      return '';
    },
    /**
     * 删除cookie
     * @author MG
     * @param name <string> 名
     * */
    removeCookie(name, domain){
      this.setCookie(name, '1', -1, domain)
    }
  }))();
})(window.supervar || (window.supervar = {}));