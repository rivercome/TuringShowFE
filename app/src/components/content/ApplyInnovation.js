/**
 * Created by out_xu on 17/5/4.
 */
import { Button, Cascader, Form, Input, message, Radio } from 'antd'
import React from 'react'

import QueueAnim from 'rc-queue-anim'
import 'whatwg-fetch'
import 'es6-promise'
import verify from '../../utils/Verify'
import options from '../../utils/innovationOptions'
import goto from '../../utils/goto'

import '../../static/css/applyTurning.css'
import '../../static/css/applyInnovation.css'
const FormItem = Form.Item
const RadioGroup = Radio.Group

@Form.create()
class ApplyInnovation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      value: 1,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({loading: true})

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {} else {
        message.loading('提交成功，正在验证')
        values.major = values.major.toString()
        fetch('/api/apply/submitInnovation', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        }).then((res) => {
          return res.json()
        }).then((json) => {
          if (json.success) {
            let {applyId} = json.data
            applyId = applyId + 52
            goto('/success?innovation='+ applyId)
            message.success('提交成功!')
          } else {
            message.error(json.message)
          }
        }).catch((e) => {
          console.log(e.message)
        })
      }
    })
    setTimeout(() => {
      this.setState({loading: false})
    }, 1000)
  }



  render () {
    const {getFieldDecorator} = this.props.form
    const formItemLayout = {
      // labelCol: {
      //   xs: {span: 24},
      //   sm: {span: 6},
      // },
      // wrapperCol: {
      //   xs: {span: 24},
      //   sm: {span: 12},
      // },
    }
    return (
      <QueueAnim
        component='Form'
        type='top'
        onSubmit={this.handleSubmit}
        className="main-content apply-innovation"
        delay={300}
        duration={600}
      >
        <div className="form-content-header" key="form-content-header">
          <div className="form-content-header-title">
            【科技新知】大讲堂信息登记
            <br />
            第一期 · 网络安全篇
          </div>
          <br />
        </div>
        <div className="apply-innovation-intro"  key="form-content-intro">
          感谢您填写次表单，本表单用于对报名人员进行信息统计，您的输入将影响后续的抢票、抽奖、内推等活动，请认真填写，大约需花费 1 分钟。
        </div>
        <FormItem
          label='您是否听说过，连接陌生 WIFI，可能会造成财产损失？'
          {...formItemLayout}
          key="apply-innovation-know-loss"
          colon={false}
        >
          {getFieldDecorator('knowLoss', {
            rules: [{required: true, message: '请选择'}],
          })(
            <RadioGroup>
              <Radio value='知道'>知道</Radio>
              <Radio value='不知道'>不知道</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          label='您是否相信，黑客能够莫名其妙的连接你的手机、电脑？'
          {...formItemLayout}
          key="apply-innovation-know-connect"
          colon={false}
        >
          {getFieldDecorator('knowConnect', {
            rules: [{required: true, message: '请选择'}],
          })(
            <RadioGroup>
              <Radio value='相信'>相信</Radio>
              <Radio value='不相信'>不相信</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          label='您是否知道上述问题的实现原理？'
          {...formItemLayout}
          key="apply-innovation-know-theory"
          colon={false}
        >
          {getFieldDecorator('knowTheory', {
            rules: [{required: true, message: '请选择'}],
          })(
            <RadioGroup>
              <Radio value='知道'>知道</Radio>
              <Radio value='不知道'>不知道</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          label='您是否听说过比特币勒索病毒？'
          {...formItemLayout}
          key="apply-innovation-know-bit-coin"
          colon={false}
        >
          {getFieldDecorator('knowBitCoin', {
            rules: [{required: true, message: '请选择'}],
          })(
            <RadioGroup>
              <Radio value='知道'>知道</Radio>
              <Radio value='不知道'>不知道</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          label='姓名'
          {...formItemLayout}
          key="form-content-name"
          hasFeedback
        >
          {getFieldDecorator('name', {
            rules: [{
              pattern: verify.chinese, message: '输入包含非中文字符！'
            }, {
              required: true, message: '请输入姓名'
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        <FormItem
          label='性别'
          {...formItemLayout}
          key="form-content-sex"
        >
          {getFieldDecorator('sex', {
            rules: [{required: true, message: '请选择您的性别'}],
          })(
            <RadioGroup>
              <Radio value='男'>男</Radio>
              <Radio value='女'>女</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          label='专业'
          {...formItemLayout}
          key="form-content-major"
        >
          {getFieldDecorator('major', {
            rules: [{
              required: true, message: '请选择专业'
            }]
          })(
            <Cascader options={options} placeholder="请选择专业" className='form-content-input' />
          )}
        </FormItem>
        <FormItem
          label='学号'
          {...formItemLayout}
          key="form-content-class-id"
          hasFeedback
        >
          {getFieldDecorator('stuId', {
            rules: [{
              pattern: verify.number, message: '请勿输入非数字字符！'
            }, {
              required: true, message: '请输入学号'
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        <FormItem
          label='手机号'
          {...formItemLayout}
          key="form-content-mobile"
          hasFeedback
        >
          {getFieldDecorator('mobile', {
            rules: [{
              pattern: verify.mobile, message: '输入的不是有效的手机号码！'
            }, {
              required: true, message: '请输入手机号码'
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>

        <FormItem
          key="form-content-footer"
        >
          <Button
            type='primary'
            htmlType='submit'
            className='form-button-1'
            loading={this.state.loading}
            // disabled
          >
            点击报名
          </Button>

        </FormItem>

        <div className="apply-innovation-footer-title" key="apply-innovation-footer">
          <div className="apply-innovation-footer-line"/>
          <div className="apply-innovation-footer-text">以科技之手 绘科技未来</div>
          <div className="apply-innovation-footer-line"/>
        </div>
      </QueueAnim>
    )
  }
}

export default ApplyInnovation
