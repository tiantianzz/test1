/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/1 11:58
 */
import React from 'react';
import { PropTypes, addressFormValue, addressFormValid } from '../shorthandValid';
import validFunc from './validFunc';
const update = React.addons.update;

export default class AddressForm extends React.Component {
  static propTypes = {
    addressFormValue      : PropTypes.shape(addressFormValue.isRequired).isRequired,
    updateAddressFormValue: PropTypes.func.isRequired,
    addressFormValid      : PropTypes.shape(addressFormValid.isRequired).isRequired,
    updateAddressFormValid: PropTypes.func.isRequired,
    country               : PropTypes.arrayOf(PropTypes.shape({
      id  : PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired).isRequired
  };

  constructor(props) {
    super();
    this.state = {
      state           : {
        display: 'none',
        data   : []
      },
      city            : {
        display: 'none'
      },
      valid           : {
        country    : {
          className: '',
          text     : ''
        },
        state      : {
          className: '',
          text     : ''
        },
        city       : {
          className: '',
          text     : ''
        },
        zipCode    : {
          className: '',
          text     : ''
        },
        fullAddress: {
          className: '',
          text     : ''
        },
        consignee  : {
          className: '',
          text     : ''
        },
        contact    : {
          className: '',
          text     : ''
        }
      },
      addressFormValue: props.addressFormValue,
      addressFormValid: props.addressFormValid
    };
    this.getStateElement = this.getStateElement.bind(this);
    this.countryEventHandler = this.countryEventHandler.bind(this);
    this.stateEventHandler = this.stateEventHandler.bind(this);
    this.cityEventHandler = this.cityEventHandler.bind(this);
    this.zipCodeEventHandler = this.zipCodeEventHandler.bind(this);
    this.fullAddressEventHandler = this.fullAddressEventHandler.bind(this);
    this.consigneeEventHandler = this.consigneeEventHandler.bind(this);
    this.contactEventHandler = this.contactEventHandler.bind(this);
    this.isDefaultEventHandler = this.isDefaultEventHandler.bind(this);
  }

  /**
   * 国家事件集
   */
  countryEventHandler(e) {
    const type = e.type;
    if (type === 'change') {
      //TODO: GET /account/address/getregion/?country_id=69833
      //TODO: getArea(countryId)
      const regex = {
        55276: '.',
        9    : '^[a-zA-Z ,.\'-]+$',
        32   : '^[a-zA-Z ,.\'-]+$',
        30556: '.',
        76   : '^[a-zA-Z ,.\'-]+$',
        29   : '^[a-zA-Z ,.\'-]+$',
        26887: '.',
        39964: '.',
        13   : '^[a-zA-Z ,.\'-]+$',
        24999: '.',
        79   : '.',
        45658: '.',
        30467: '.',
        39965: '.',
        55084: '.',
        39961: '.',
        30   : '^[a-zA-Z ,.\'-]+$',
        39967: '.',
        37879: '.',
        35   : '^[a-zA-Z ,.\'-]+$',
        22   : '^[a-zA-Z ,.\'-]+$',
        23   : '^[a-zA-Z ,.\'-]+$',
        40   : '^[a-zA-Z ,.\'-]+$',
        44   : '.',
        39960: '.',
        39963: '.',
        39958: '.',
        31   : '^[a-zA-Z ,.\'-]+$',
        24   : '^[a-zA-Z ,.\'-]+$',
        12   : '.',
        55087: '.',
        55088: '.',
        38   : '^[a-zA-Z ,.\'-]+$',
        39968: '.',
        34   : '^[a-zA-Z ,.\'-]+$',
        43   : '.',
        16   : '^[a-zA-Z ,.\'-]+$',
        39737: '.',
        30652: '.',
        37   : '^[a-zA-Z ,.\'-]+$',
        10   : '^[a-zA-Z ,.\'-]+$',
        41   : '^[a-zA-Z ,.\'-]+$',
        55083: '.',
        34432: '.',
        14   : '^[a-zA-Z ,.\'-]+$',
        39959: '.',
        26   : '^[a-zA-Z ,.\'-]+$',
        38829: '.',
        34655: '.',
        77   : '^[a-zA-Z ,.\'-]+$',
        39970: '.',
        49   : '^[a-zA-Z ,.\'-]+$',
        39966: '.',
        61237: '.',
        15   : '^[a-zA-Z ,.\'-]+$',
        25   : '^[a-zA-Z ,.\'-]+$',
        27   : '^[a-zA-Z ,.\'-]+$',
        28   : '^[a-zA-Z ,.\'-]+$',
        42   : '.',
        18   : '^[a-zA-Z ,.\'-]+$',
        38489: '.',
        39969: '.',
        3    : '^[a-zA-Z ,.\'-]+$',
        55086: '.',
        21   : '^[a-zA-Z ,.\'-]+$',
        55085: '.'
      };
      const oldValid = this.state.valid;
      const consigneeRegex = new RegExp(regex[e.target.value]);
      /**
       * update the inner state and outer state
       */
      const addressFormValue = update(this.state.addressFormValue, {
        countryId: {$set: e.target.value}
      });
      this.setState({addressFormValue});
      this.props.updateAddressFormValue(addressFormValue);

      const consignee = this.refs['consignee'].value.trim();
      if (consigneeRegex && (consignee.length > 6 && consignee.length < 40) && !consigneeRegex.test(consignee)) {
        const valid = update(oldValid, {
          consignee: {
            className: {$set: 'onError'},
            text     : {$set: '您选择的区域必须填写英文的收件人'}
          }
        });
        this.setState({valid});

      } else {
        const valid = update(oldValid, {
          consignee: {
            className: {$set: ''},
            text     : {$set: ''}
          }
        });
        this.setState({valid});
      }
    } else if (type === 'blur') {
      if (e.target.value == -1) {
        const valid = update(this.state.valid, {
          country: {
            className: {$set: 'onError'},
            text     : {$set: '请选择国家名'}
          }
        });
        const addressFormValid = update(this.state, addressFormValid, {
          country: {$set: e.target.value != -1}
        });
        this.setState({addressFormValid, valid});
        this.props.updateAddressFormValid(addressFormValid);
      }
    }
  }

  /**
   * 地区事件集
   */
  stateEventHandler(e) {
    const type = e.type;
    if (type === 'change') {
      //TODO /account/address/getregion/?state_id=
      //判断是否有城市列表数据
      const display = e.target.value !== '-1' ? 'table-row' : 'none';
      this.setState({
        city: {
          display
        }
      });
      const addressFormValue = update(this.state.addressFormValue, {
        stateId: {$set: e.target.value}
      });
      this.setState({addressFormValue});
      this.props.updateAddressFormValue(addressFormValue);
    } else if (type === 'blur') {
      let validArr = ['', ''];
      if (e.target.value == -1) {
        validArr = ['onError', '请选择州/省名'];
      }
      const addressFormValid = update(this.state.addressFormValid, {
        state: {$set: e.target.value != -1}
      });
      const valid = update(this.state.valid, {
        state: {
          className: {$set: validArr[0]},
          text     : {$set: validArr[1]}
        }
      });
      this.setState({addressFormValid, valid});
      this.props.updateAddressFormValid(addressFormValid);
    }
  }

  /**
   * 城市事件集
   * @param e
   * @param tag input||select
   */
  cityEventHandler(e, tag) {
    const type = e.type;
    const city = e.target.value.trim();
    const cityId = e.target.value;
    if (type === 'change') {
      const addressFormValue = update(this.state.addressFormValue, {
        city: {$set: tag === 'input' ? city : cityId}
      });
      this.setState({addressFormValue});
      this.props.updateAddressFormValue(addressFormValue);
    } else if (type === 'blur') {
      let validArr = ['', ''];

      let validBool = true;
      if (tag === 'select') {
        if (cityId == -1) {
          validArr = ['onError', 'onError'];
        }
        validBool = (cityId != -1);
      } else {
        if (!city) {
          validArr = ['onError', '请输入城市名'];
        }
        validBool = !!city;
      }
      const addressFormValid = update(this.state.addressFormValid, {
        city: {$set: validBool}
      });
      const valid = update(this.state.valid, {
        city: {
          className: {$set: validArr[0]},
          text     : {$set: validArr[1]}
        }
      });
      this.setState({addressFormValid, valid});
      this.props.updateAddressFormValid(addressFormValid);
    }
  }

  /**
   * 邮政编码事件集
   */
  zipCodeEventHandler(e) {
    const type = e.type;
    if (type === 'change') {
      const addressFormValue = update(this.state.addressFormValue, {
        zipCode: {$set: e.target.value}
      });
      this.setState({addressFormValue});
      this.props.updateAddressFormValue(addressFormValue);
    } else if (type === 'blur') {

      let validArr = ['', ''];
      let validBool = true;
      const countryId = this.state.addressFormValue.countryId;
      const zipCode = e.target.value.trim();
      if (countryId != '31' && countryId != '38489' && zipCode == '') {
        validArr = ['onError', '请填写邮政编码'];
        validBool = false;
      } else {
        const [flag,warnText]=validFunc.checkZip(countryId, zipCode);
        validBool = flag;
        if (!flag) {
          validArr = ['onError', warnText];
        }
      }
      const addressFormValid = update(this.state.addressFormValid, {
        zipCode: {$set: validBool}
      });
      const valid = update(this.state.valid, {
        zipCode: {
          className: {$set: validArr[0]},
          text     : {$set: validArr[1]}
        }
      });
      this.setState({addressFormValid, valid});
      this.props.updateAddressFormValid(addressFormValid);

    }
  }

  /**
   * 详细地址事件集
   */
  fullAddressEventHandler(e) {
    const type = e.type;
    let validArr = ['', ''];
    if (type === 'focus') {
      validArr = ['onFocus', '请尽量具体到房间号、门牌号等信息，以免无法顺利收到包裹'];
    } else if (type === 'change') {
      const addressFormValue = update(this.state.addressFormValue, {
        fullAddress: {$set: e.target.value.trim()}
      });
      this.setState({addressFormValue});
      this.props.updateAddressFormValue(addressFormValue);
    } else if (type === 'blur') {
      let validBool = true;
      const fullAddress = e.target.value;
      if (fullAddress.trim()) {
        if (this.refs['country_id'].value == 79) {
          const reg = /[^\x00-\x80]/g;
          if (!reg.test(fullAddress)) {
            validArr = ['onError', '请填写中文'];
            validBool = false;
          }
        } else {
          const regAdd = /[\\\/"“”：:；;]/g;
          if (regAdd.test(fullAddress)) {
            validArr = ['onError', '收货地址不能包含特殊符号'];
            validBool = false;
          }
        }
      } else {
        validArr = ['onError', '详细地址不能为空'];
        validBool = false;
      }
      const addressFormValid = update(this.state.addressFormValid, {
        fullAddress: {$set: validBool}
      });
      this.props.updateAddressFormValid(addressFormValid);
      this.setState({addressFormValid});
    }
    const valid = update(this.state.valid, {
      fullAddress: {
        className: {$set: validArr[0]},
        text     : {$set: validArr[1]}
      }
    });
    this.setState({valid});
  }

  /**
   * 收货人姓名事件集
   */
  consigneeEventHandler(e) {
    const type = e.type;
    let validArr = ['', ''];
    if (type === 'focus') {
      validArr = ['onFocus', '请输入收货人姓名'];
    } else if (type === 'change') {
      const addressFormValue = update(this.state.addressFormValue, {
        consignee: {$set: e.target.value.trim()}
      });
      this.setState({addressFormValue});
      this.props.updateAddressFormValue(addressFormValue);
    } else if (type === 'blur') {
      const consignee = e.target.value.trim();
      let validBool = true;
      if (consignee.length < 2 || consignee.length > 40) {
        validArr = ['onError', '姓名长度有误'];
        validBool = false;
      } else {
        const reg = /^[a-zA-Z ,.'-]+$/g;
        if (this.refs['country_id'].value != 79 && !reg.test(consignee)) {
          validArr = ['onError', '您选择的区域必须填写英文的收件人'];
          validBool = false;
        }
      }
      const addressFormValid = update(this.state.addressFormValid, {
        consignee: {$set: validBool}
      });
      this.props.updateAddressFormValid(addressFormValid);
      this.setState({addressFormValid});
    }
    const valid = update(this.state.valid, {
      consignee: {
        className: {$set: validArr[0]},
        text     : {$set: validArr[1]}
      }
    });
    this.setState({valid});

  }

  /**
   * 电话号码事件集
   */
  contactEventHandler(e) {
    const type = e.type;
    const oldValid = this.state.valid;
    let validArr = ['', ''];
    if (type === 'focus') {
      validArr = ['onFocus', '请输入您电话号码'];
    } else if (type === 'change') {
      const addressFormValue = update(this.state.addressFormValue, {
        contact: {$set: e.target.value.trim()}
      });
      this.setState({addressFormValue});
      this.props.updateAddressFormValue(addressFormValue);
    } else if (type === 'blur') {
      const contact = e.target.value.trim();
      let validBool = true;
      if (contact.length < 6 || contact.length > 20) {
        validArr = ['onError', '电话号码长度有误'];
        validBool = false;
      }
      const addressFormValid = update(this.state.addressFormValid, {
        contact: {$set: validBool}
      });
      this.props.updateAddressFormValid(addressFormValid);
      this.setState({addressFormValid});
    }
    const valid = update(this.state.valid, {
      contact: {
        className: {$set: validArr[0]},
        text     : {$set: validArr[1]}
      }
    });
    this.setState({valid});
  }

  isDefaultEventHandler(e) {
    const type = e.type;
    if (type === 'change') {
      const addressFormValue = update(this.state.addressFormValue, {
        isDefaultChecked: {$set: e.target.checked},
        isDefault       : {$set: (e.target.checked ? 1 : 0)}
      });
      this.setState({addressFormValue});
      this.props.updateAddressFormValue(addressFormValue);
    }
  }

  getStateElement(countryId) {
    fetch('./country_69833.json')
        .then(res=> {
          if (res.status === 200) {
            return res.json();
          } else {
            throw Error('Fail get address');
          }
        })
        .then(json=> {
          this.setState({
            state: {
              display: 'table-row',
              data   : json.info
            }
          });
        });
  }

  componentDidMount() {
    const countryId = this.props.addressFormValue.countryId;
    this.getStateElement(countryId);
  }

  render() {
    const {
        countryId,
        city,
        zipCode,
        fullAddress,
        consignee,
        contact,
        isDefaultChecked,
        isDefault
    } = this.state.addressFormValue;
    const {valid}=this.state;
    return (
        <div>
          <form name="form1"
                method="post"
                action="/account/address/editaddress">
            <table className="table-edit">
              <tbody>
              <tr>
                <th>国家/区域：</th>
                <td>
                  <select onChange={this.countryEventHandler}
                          onBlur={this.countryEventHandler}
                          ref="country_id"
                          value={countryId}
                          style={{width: '245px'}}>
                    {this.props.country.map(data=><option key={data.id}
                                                          value={data.id}>{data.name}</option>)}
                  </select>
                </td>
                <td className={valid.country.className}>{valid.country.text}</td>
              </tr>
              <tr id="state_tr"
                  style={{display: this.state.state.display}}>
                <th>州/省/区域：</th>
                <td>
                  <select name="state_id"
                          onChange={this.stateEventHandler}
                          onBlur={this.stateEventHandler}
                          value={this.state.addressFormValue.stateId}
                          style={{width: '245px'}}>
                    <option value="-1">请选择州/省/区域名</option>
                    {this.state.state.data.map(
                        area=><option value={area.area_id}
                                      key={`area_${area.area_id}`}>{area.area_en_name}</option>
                    )}
                  </select>
                </td>
                <td className={valid.state.className}>{valid.state.text}</td>
              </tr>
              <tr id="city_tr"
                  style={{display: this.state.city.display}}>
                <th>城市：</th>
                <td>
                  <input type="text"
                         ref="city"
                         value={city}
                         onChange={e=>this.cityEventHandler(e, 'input')}
                         onBlur={e=>this.cityEventHandler(e, 'input')}
                         className="input-border"
                         size="30" />
                </td>
                <td className={valid.city.className}>{valid.city.text}</td>
              </tr>
              <tr>
                <th>邮政编码：</th>
                <td>
                  <input type="text"
                         ref="zipCode"
                         className="input-border"
                         onChange={this.zipCodeEventHandler}
                         onBlur={this.zipCodeEventHandler}
                         value={zipCode}
                         size="30" />
                </td>
                <td className={valid.zipCode.className}>{valid.zipCode.text}</td>
              </tr>
              <tr>
                <th>详细地址：</th>
                <td><textarea ref="fulladdress"
                              style={{width: '232px', height: '40px'}}
                              onFocus={this.fullAddressEventHandler}
                              onBlur={this.fullAddressEventHandler}
                              onChange={this.fullAddressEventHandler}
                              value={fullAddress}
                              className="textarea">{}</textarea>
                </td>
                <td className={valid.fullAddress.className}>
                  {valid.fullAddress.text}
                </td>
              </tr>
              <tr>
                <th >收货人姓名：</th>
                <td width="225">
                  <input type="text"
                         ref="consignee"
                         className="input-border"
                         onFocus={this.consigneeEventHandler}
                         onBlur={this.consigneeEventHandler}
                         onChange={this.consigneeEventHandler}
                         value={consignee}
                         size="30" />
                </td>
                <td className={valid.consignee.className}>{valid.consignee.text}</td>
              </tr>
              <tr>
                <th>电话号码：</th>
                <td>
                  <input type="text"
                         ref="contact"
                         className="input-border"
                         onFocus={this.contactEventHandler}
                         onBlur={this.contactEventHandler}
                         onChange={this.contactEventHandler}
                         value={contact}
                         size="30" />
                </td>
                <td className={valid.contact.className}>{valid.contact.text}</td>
              </tr>
              <tr>
                <th>设为默认：</th>
                <td className="font_top">
                  <input type="checkbox"
                         onChange={this.isDefaultEventHandler}
                         checked={isDefaultChecked}
                         ref="default"
                         value={isDefault} />
                </td>
                <td id="">{}</td>
              </tr>
              </tbody>
            </table>
          </form>
        </div>
    );
  }
}