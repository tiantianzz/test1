/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/22 14:59
 */
const model = {
  payWays: [
    {
      id     : 1,
      icon   : '/paypal-icon.jpg',
      iconAlt: 'PayPal',
      name   : 'PayPal',
      way    : 'paypal'
    },
    {
      id     : 2,
      icon   : '/paypal-icon.jpg',
      iconAlt: 'nationalpay',
      name   : '国际信用卡支付',
      way    : 'nationalpay'
    },
    {
      id     : 3,
      icon   : '/wx-icon.jpg',
      iconAlt: '微信支付',
      name   : '微信支付',
      way    : 'weixin'
    },
    {
      id     : 4,
      icon   : '/zfb-icon.jpg',
      iconAlt: '支付宝',
      name   : '支付宝',
      way    : 'alipay'
    },
    {
      id     : 5,
      icon   : '/card-icon.jpg',
      iconAlt: '国内信用卡',
      name   : '国内信用卡',
      way    : 'card'
    }
  ],
  banks  : [
    {id: 1, title: '招商银行', value: 'CMB'},
    {id: 2, title: '中国建设银行', value: 'CCB'},
    {id: 3, title: '中国工商银行', value: 'ICBCB2C'},
    {id: 4, title: '中国农业银行', value: 'ABC'},
    {id: 5, title: '中国银行', value: 'BOCB2C'},
    {id: 6, title: '兴业银行', value: 'CIB'},
    {id: 7, title: '上海浦东发展银行', value: 'SPDB'},
    {id: 8, title: '交通银行', value: 'COMM'},
    {id: 9, title: '广东发展银行', value: 'GDB'},
    {id: 10, title: '中国民生银行', value: 'CMBC'},
    {id: 11, title: '平安银行', value: 'SPABANK'},
    {id: 12, title: '光大银行', value: 'CEBBANK'},
    {id: 13, title: '中信银行', value: 'CITIC'},
    {id: 14, title: '北京银行', value: 'BJBANK'},
    {id: 15, title: '上海银行', value: 'SHBANK'},
    {id: 16, title: '中国邮政储蓄银行', value: 'PSBC-DEBIT'},
    {id: 17, title: '宁波银行', value: 'NBBANK'},
    {id: 18, title: '杭州银行', value: 'HZCBB2C'}
  ]
};
export default model;
