/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/22 14:59
 */
const model = {
  payWays: [
    {
      id: 1,
      icon: '/paypal-icon.jpg',
      iconAlt: 'PayPal',
      name: 'PayPal',
      way: 'paypal'
    },
    {
      id: 2,
      icon: '/paypal-icon.jpg',
      iconAlt: 'International Credit Cards',
      name: 'International Credit Cards',
      way: 'nationalpay'
    },
    {
      id: 3,
      icon: '/wx-icon.jpg',
      iconAlt: 'WeChat Pay',
      name: 'WeChat Pay',
      way: 'weixin'
    },
    {
      id: 4,
      icon: '/zfb-icon.jpg',
      iconAlt: 'Alipay',
      name: 'Alipay',
      way: 'alipay'
    },
    {
      id: 5,
      icon: '/card-icon.jpg',
      iconAlt: 'Chinese Credit Card',
      name: 'Chinese Credit Card',
      way: 'card'
    }
  ],
  banks: [
    {id: 1, title: 'China Merchants Bank', value: 'CMB'},
    {id: 2, title: 'China Construction Bank', value: 'CCB'},
    {id: 3, title: 'Industrial and Commercial Bank of China', value: 'ICBCB2C'},
    {id: 4, title: 'Agricultural Bank of China', value: 'ABC'},
    {id: 5, title: 'Bank of China', value: 'BOCB2C'},
    {id: 6, title: 'Industrial Bank', value: 'CIB'},
    {id: 7, title: 'Shanghai Pudong Development Bank', value: 'SPDB'},
    {id: 8, title: 'Bank of Communications', value: 'COMM'},
    {id: 9, title: 'Guangdong Development Bank', value: 'GDB'},
    {id: 10, title: 'China Minsheng Banking', value: 'CMBC'},
    {id: 11, title: 'Ping An Bank', value: 'SPABANK'},
    {id: 12, title: 'China Everbright Bank', value: 'CEBBANK'},
    {id: 13, title: 'CITIC Bank', value: 'CITIC'},
    {id: 14, title: 'Bank of Beijing', value: 'BJBANK'},
    {id: 15, title: 'Shanghai Bank', value: 'SHBANK'},
    {id: 16, title: 'China Postal Savings Bank', value: 'PSBC-DEBIT'},
    {id: 17, title: 'Bank of Ningbo', value: 'NBBANK'},
    {id: 18, title: 'Hangzhou Bank', value: 'HZCBB2C'}
  ]
};
export default model;
