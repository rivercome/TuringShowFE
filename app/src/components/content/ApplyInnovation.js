/**
 * Created by out_xu on 17/5/4.
 */
import { Button, Cascader, Col, Form, Input, message, Radio, Row } from 'antd'
import React from 'react'

import QueueAnim from 'rc-queue-anim'
import 'whatwg-fetch'
import 'es6-promise'
import verify from '../../utils/Verify'
import options from '../../utils/innovationOptions'
import goto from '../../utils/goto'

import '../../static/css/applyTurning.css'
const FormItem = Form.Item
const RadioGroup = Radio.Group

@Form.create()
class ApplyInnovation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      dayMoney: 0,
      lunchMoney: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkTeamName = this.checkTeamName.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  1234

  handleSubmit (e) {
    e.preventDefault()
    this.setState({loading: true})

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {} else {
        message.loading('提交成功，正在验证')
        values.leaderClass = values.leaderClass.toString()
        values.memberClass1 = values.memberClass1.toString()
        values.memberClass2 = values.memberClass2.toString()
        console.log(values)
        fetch('/api/apply/submit', {
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
            goto('/success?innovation')
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

  checkTeamName (rule, value, callback) {
    if (value && value.length > 20) {
      callback('队伍名称过长！')
    } else {
      callback()
    }
  }

  handleReset (e) {
    e.preventDefault()
    this.props.form.resetFields()
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
            以新知之手，绘科技未来——科技新知大讲堂信息登记
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
          key="form-content-team-language"
        >
          {getFieldDecorator('teamLanguage', {
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
          key="form-content-class"
        >
          {getFieldDecorator('class', {
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
          key="form-content-leader-class-id"
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
          label='邮箱'
          {...formItemLayout}
          key="form-content-email"
          hasFeedback
        >
          {getFieldDecorator('leaderMail', {
            rules: [{
              pattern: verify.mail, message: '输入的不是有效的邮箱！'
            }, {
              required: true, message: '请输入您的邮箱'
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
              >
                点击提交
              </Button>
              <Button
                type="ghost"
                onClick={this.handleReset}
                className='form-button-2'
                style={{marginLeft: 20}}
              >
                重置
              </Button>

            </Col>
          </Row>
        </FormItem>
      </QueueAnim>
    )
  }
}

export default ApplyInnovation
