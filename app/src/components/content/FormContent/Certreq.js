/**
 * Created by out_xu on 17/5/4.
 */
import { Button, Cascader, Col, Form, Input, message, Radio, Row } from 'antd'
import React from 'react'

import QueueAnim from 'rc-queue-anim'
import 'whatwg-fetch'
import 'es6-promise'
import verify from '../../../utils/Verify'
import options from '../../../utils/CityOption'
import goto from '../../../utils/goto'

import '../../../static/css/certreq.css'
const FormItem = Form.Item
const RadioGroup = Radio.Group

@Form.create()
class Certreq extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      more: false,
      preData: {},
      type: '',
      disabled: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.certreqTypeChange = this.certreqTypeChange.bind(this)
  }

  componentDidMount () {
    const now = Date.now()
    const target = new Date(1497362400000)
    if (now > target) {
      this.setState({
        disabled: true
      })
    }
  }

  fetchData = async (url, body) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })
      return await res.json()
    } catch (e) {
      throw new Error('网络请求错误')
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({loading: true})
    message.warn('提交成功，正在验证...')

    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (err) {
      } else {
        try {
          let {type, more} = this.state
          if (!more) {
            const json = await this.fetchData('/api/apply/verifyTeam', values)
            if (json.success) {
              message.success('校验成功')
            } else {
              throw new Error(json.message)
            }
            let preData = json.data
            if (preData.address) {
              preData.address = preData.address.split(' ')
            }
            this.setState({
              preData: preData,
              more: true,
              type: preData.certreq
            })
          } else {
            if (type === '邮寄证书' || type === '电子 + 邮寄') {
              values.address = values.address[0] + ' ' + values.address[1]
            } else {
              values.address = ''
              values.addressDetail = ''
              values.postCode = ''
            }
            const json = await this.fetchData('/api/apply/applyCertrep', values)
            if (json.success) {
              message.success('提交成功')
              goto('/success/certreq?true')
            } else {
              throw new Error(json.message)
            }
          }
        }
        catch
          (e) {
          message.error(e.message)
        }
      }

    })
    setTimeout(() => {
      this.setState({loading: false})
    }, 1000)
  }

  handleReset (e) {
    e.preventDefault()
    this.props.form.resetFields()
  }

  certreqTypeChange (value) {
    this.setState({
      type: value.target.value
    })
  }

  handleSelectChange (value) {
    const address = value
    this.props.form.setFieldsValue({
      addressDetail: address[0] + ' ' + address[1] + ' '
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
      },
    }
    const addressContent = () => (
      <div key='form-content-adress-content'>
        <FormItem
          label='邮寄地址省市'
          {...formItemLayout}
          key="form-content-address"
        >
          {getFieldDecorator('address', {
            rules: [{
              required: true, message: '请选择省市'
            }],
            onChange: this.handleSelectChange,
            initialValue: this.state.preData.address || []
          })(
            <Cascader options={options} placeholder="请选择省市" className='form-content-input' />
          )}
        </FormItem>
        <FormItem
          label='邮编'
          {...formItemLayout}
          key="form-content-postCode"
        >
          {getFieldDecorator('postCode', {
            rules: [{
              pattern: verify.postCode, message: '请输入合理邮编！'
            }, {
              required: true, message: '请输入邮编'
            }],
            initialValue: this.state.preData.postCode || ''
          })(
            <Input className='form-content-input' />
          )}
        </FormItem>
        <FormItem
          label='具体地址，尽量详细'
          key="form-content-address-detail"
          {...formItemLayout}
        >
          {getFieldDecorator('addressDetail', {
            rules: [{
              required: true, message: '请填写具体地址'
            }], initialValue: this.state.preData.addressDetail || ''
          })(
            <Input className='form-content-input' placeholder="例如：河北省 秦皇岛市 经济开发区泰山路143号东北大学秦皇岛分校" />
          )}
        </FormItem>
      </div>
    )

    const buttonString = () => {
      let {type, more} = this.state
      if (this.state.disabled) {
        return '登记已结束'
      }
      if (!more) {
        return '点击校验，校验成功进入下一步'
      } else {
        return '点击提交，请认真审核后提交'
      }
    }
    const moreContent = () => (
      <div key="form-content-more">
        <FormItem
          label='是否需要证书'
          {...formItemLayout}
          key="form-content-certreq"
        >
          {getFieldDecorator('certreq', {
            rules: [{required: true, message: '请选择'}],
            onChange: this.certreqTypeChange,
            initialValue: this.state.preData.certreq || ''
          })(
            <RadioGroup>
              <Radio value='电子证书'>电子证书</Radio>
              <Radio value='邮寄证书'>邮寄证书</Radio>
              <Radio value='电子 + 邮寄'>电子 + 邮寄</Radio>
              <Radio value='不需要证书'>不需要证书</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          label='队长邮箱'
          {...formItemLayout}
          key="form-content-email"
          hasFeedback
        >
          {getFieldDecorator('leaderMail', {
            rules: [{
              pattern: verify.mail, message: '输入的不是有效的邮箱！'
            }, {
              required: true, message: '请输入您的邮箱'
            }], initialValue: this.state.preData.leaderMail || ''
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        <FormItem
          label='队员1姓名'
          {...formItemLayout}
          key="form-content-member-name-1"
          hasFeedback
        >
          {getFieldDecorator('memberName1', {
            rules: [{
              pattern: verify.chinese, message: '输入包含非中文字符！'
            }, {
              required: false, message: '请输入队员姓名'
            }],
            initialValue: this.state.preData.memberName1 || ''
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        <FormItem
          label='队员2姓名'
          {...formItemLayout}
          key="form-content-member-name-2"
          hasFeedback
        >
          {getFieldDecorator('memberName2', {
            rules: [{
              pattern: verify.chinese, message: '输入包含非中文字符！'
            }, {
              required: false, message: '请输入队员姓名'
            }], initialValue: this.state.preData.memberName2 || ''
          })(
            <Input className='form-content-input' placeholder="二人队伍跳过此项" />
          )}
        </FormItem>
        <FormItem
          label='备注'
          key="form-content-note"
          {...formItemLayout}
        >
          {getFieldDecorator('note', {
            rules: [{required: false}],
            initialValue: this.state.preData.note || ''
          })(
            <Input type='textarea' className='form-content-input' placeholder="选填，如有任何其他需求，请在此填写" />
          )}
        </FormItem>
      </div>
    )

    return (
      <QueueAnim
        component='Form'
        type='top'
        onSubmit={this.handleSubmit}
        className="main-content certreq-wrap"
        delay={300}
        duration={600}
      >
        <div className="form-content-header certreq-header" key="form-content-header">
          <div className="form-content-header-title">
            第四届图灵杯 NEUQ-ACM 程序设计竞赛（团队赛）
            <br />
            证书邮寄登记
          </div>
          <br />
          <div className="certreq-intro" key="certreq-intro">
            说明：感谢您填写此次表单，本表单用于对获奖队伍进行信息统计，您的输入将影响后续的证书邮寄等问题，以前填写的信息可以重新修改，邮箱地址用于接受电子版证书。如需邮寄证书，填写地址后，证书将邮寄给队长，收件人为队长姓名及手机号。请认真填写，大约需花费 1 分钟。如果您未在本系统上登记过队伍信息，请联系管理员：QQ 97999713。
          </div>
        </div>
        <FormItem
          label='队长姓名'
          {...formItemLayout}
          key="form-content-leader-name"
          hasFeedback
        >
          {getFieldDecorator('leaderName', {
            rules: [{
              pattern: verify.chinese, message: '输入包含非中文字符！'
            }, {
              required: true, message: '请输入队长姓名'
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        <FormItem
          label='队长手机号'
          {...formItemLayout}
          key="form-content-mobile"
          hasFeedback
        >
          {getFieldDecorator('leaderMobile', {
            rules: [{
              pattern: verify.mobile, message: '输入的不是有效的手机号码！'
            }, {
              required: true, message: '请输入队长的手机号码'
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        {this.state.more && moreContent()}
        {this.state.more && (this.state.type === '邮寄证书' || this.state.type === '电子 + 邮寄') && addressContent()}
        <FormItem
          key="form-content-footer"
        >
          <Row gutter={12} type='flex'>
            <Col className='left-content' xs={{span: 24}} sm={{span: 12, offset: 6}}>
              <Button
                type='primary' htmlType='submit' size='large'
                className='form-button-certreq'
                loading={this.state.loading}
                disabled = {this.state.disabled}
              >
                {buttonString()}
              </Button>
            </Col>
          </Row>
        </FormItem>
      </QueueAnim>
    )
  }
}

export default Certreq
