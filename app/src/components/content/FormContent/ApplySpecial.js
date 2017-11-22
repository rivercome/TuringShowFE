
/**
 * Created by out_xu on 17/5/4.
 */
import { Button, Cascader, Col, Form, Input, message, Radio, Row } from 'antd'
import React from 'react'

import QueueAnim from 'rc-queue-anim'
import 'whatwg-fetch'
import 'es6-promise'
import verify from '../../../utils/Verify'
import options from '../../../utils/innovationOptions'
import goto from '../../../utils/goto'

import '../../../static/css/applyTurning.css'
const FormItem = Form.Item
const RadioGroup = Radio.Group

@Form.create()
class ApplySpecial extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({loading: true})

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {} else {
        message.loading('提交成功，正在验证')
        fetch('/api/apply/submitSpecial', {
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
            goto('/success/innovation')
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
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
      },
    }
    return (
      <QueueAnim
        component='Form'
        type='top'
        onSubmit={this.handleSubmit}
        className="main-content"
        delay={300}
        duration={600}
      >
        <div className="form-content-header" key="form-content-header">
          <div className="form-content-header-title">
            以新知之手，绘科技未来——【科技新知】大讲堂信息登记
            <br />
            第一期 · 网络安全篇
          </div>
          <br />
        </div>


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
          label='单位'
          {...formItemLayout}
          key="form-content-unit"
          hasFeedback
        >
          {getFieldDecorator('unit', {
            rules: [{
              required: false, message: '请输入单位'
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
          <Row gutter={12} type='flex'>
            <Col className='left-content' xs={{span: 24}} sm={{span: 12, offset: 6}}>
              <Button
                type='primary'
                htmlType='submit'
                className='form-button-1'
                loading={this.state.loading}
                // disabled
              >
                点击提交
              </Button>

            </Col>
          </Row>
        </FormItem>
      </QueueAnim>
    )
  }
}

export default ApplySpecial
