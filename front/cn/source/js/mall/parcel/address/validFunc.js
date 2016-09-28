/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/4 10:19
 */
if (!String.prototype.trim) {
  String.prototype.trim = ()=> this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
const validFunc = (()=> {
  const _changeStr = str=> {
    const arr = ['，', '。', '！', '￥', '（', '）', '《', '》', '”', '“', '：', '；', '‘', '’'];
    const arr2 = [',', '.', '!', '$', '(', ')', '<', '>', '"', '"', ':', ';', '\'', '\''];
    for (let i = 0, j = arr.length; i < j; i++) {
      switch (i) {
        case 1:
        case 6:
        case 7:
        case 8:
        case 9:
        case 12:
        case 13:
          str = str.replace(eval('/' + arr[i] + '/g'), arr2[i]);
          break;
        default:
          str = str.replace(eval('/' + arr[i] + '/g'), String.fromCharCode(arr[i].charCodeAt(0) - 65248));
      }
    }
    return str;
  };
  const _checkZip = (countryId, zipCode)=> {
    let name = '';
    let flag = true;
    let warnText = '';
    const zip = {
      us : /^((\d{5}[-]\d{4})|(\d{5}))$/,
      ca : /^((([A-Za-z]\d[A-Za-z])\s(\d[A-Za-z]\d))|([A-Za-z]\d[A-Za-z]\d[A-Za-z]\d))$/,
      au : /^\d{4}$/, // ^开头 $结束
      uk : /^([A-Za-z0-9]{2,4})\s([A-Za-z0-9]{3})$/, // 存在或操作符“|”，先将表达式用括号包起来
      fr : /^\d{5}$/, // ^开头 $结束
      rus: /^\d{6}$/ // ^开头 $结束
    };
    const zipError = {
      us : '12345-1234或者12345',
      ca : 'A1B 2C3或者S1V1e9',
      au : '1234', // ^开头 $结束
      uk : 'DN16 9AA或者M2 5BQ', // 存在或操作符“|”，先将表达式用括号包起来
      fr : '12345"', // ^开头 $结束
      rus: '123456' // ^开头 $结束
    };
    switch (Number(countryId)) {
      case 3:
        name = 'us';
        break;
      case 24999:
        name = 'ca';
        break;
      case 9:
        name = 'au';
        break;
      case 21:
        name = 'uk';
        break;
      case 22:
        name = 'fr';
        break;
      case 77:
        name = 'rus';
        break;
    }
    if (name) {
      if (!zip[name].test(zipCode)) {
        warnText = '请按格式填写邮政编码，如：' + zipError[name];
        flag = false;
      }
    }
    return [flag, warnText];
  };
  return {
    changeStr: _changeStr,
    checkZip : _checkZip
  };
})();
export default validFunc;