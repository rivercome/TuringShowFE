/**
 * Created by out_xu on 17/5/4.
 */
import { Button, Cascader, Col, Form, Input, message, Radio, Row } from 'antd'
import React from 'react'

import QueueAnim from 'rc-queue-anim'
import {Link } from 'react-router'
import 'whatwg-fetch'
import 'es6-promise'
import verify from '../../utils/Verify'
import options from '../../utils/options'
import goto from '../../utils/goto'

import '../../static/css/applyTurning.css'
const FormItem = Form.Item
const RadioGroup = Radio.Group

@Form.create()
class ApplyTuring extends React.Component {
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
  }1234


  handleSubmit (e) {
    e.preventDefault()
    this.setState({loading: true})

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {} else {
        message.loading('提交成功，正在验证')
        values.leaderClass = values.leaderClass.toString()
        values.memberClass1 = values.memberClass1.toString()
        values.memberClass2 = values.memberClass2.toString()
        // let body = ParseValue(values)
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
            goto('/succ')
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
            第四届 NEUQ-ACM 图灵杯程序设计大赛（团队赛）
            <br />
            暨 2017 中国大学生程序设计大赛校内选拔赛
          </div>
          <br />
          <div className="form-content-header-extra">
            <span>外校队伍无需登记信息</span>
            <Link to="/rule">点此查看比赛规则</Link>
          </div>
        </div>
        <FormItem
          label='队伍名称'
          {...formItemLayout}
          key="form-content-team-name"
          hasFeedback
        >
          {getFieldDecorator('teamName', {
            rules: [{
              required: true, message: '请输入队伍名称！'
            }, {
              validator: this.checkTeamName
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
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
          label='队长专业'
          {...formItemLayout}
          key="form-content-leader-class"
        >
          {getFieldDecorator('leaderClass', {
            rules: [{
              required: true, message: '请选择队长专业'
            }]
          })(
            <Cascader options={options} placeholder="请选择队长专业" className='form-content-input' />
          )}
        </FormItem>
        <FormItem
          label='队长学号'
          {...formItemLayout}
          key="form-content-leader-class-id"
          hasFeedback
        >
          {getFieldDecorator('leaderStuId', {
            rules: [{
              pattern: verify.number, message: '请勿输入非数字字符！'
            }, {
              required: true, message: '请输入队长学号'
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
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        <FormItem
          label='参赛语言'
          {...formItemLayout}
          key="form-content-team-language"
        >
          {getFieldDecorator('teamLanguage', {
            rules: [{required: true, message: '请选择参赛语言'}],
          })(
            <RadioGroup>
              <Radio value='C/C++'>C/C++</Radio>
              <Radio value='Java'>Java</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          label='队员姓名'
          {...formItemLayout}
          key="form-content-member-name-1"
          hasFeedback
        >
          {getFieldDecorator('memberName1', {
            rules: [{
              pattern: verify.chinese, message: '输入包含非中文字符！'
            }, {
              required: true, message: '请输入队员姓名'
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        <FormItem
          label='队员专业'
          {...formItemLayout}
          key="form-content-member-class-1"
        >
          {getFieldDecorator('memberClass1', {
            rules: [{
              required: true, message: '请选择队员专业'
            }]
          })(
            <Cascader options={options} placeholder="请选择队员专业" className='form-content-input' />
          )}
        </FormItem>
        <FormItem
          label='队员学号'
          {...formItemLayout}
          key="form-content-member-class-id-1"
          hasFeedback
        >
          {getFieldDecorator('memberStuId1', {
            rules: [{
              pattern: verify.number, message: '请勿输入非数字字符！'
            }, {
              required: true, message: '请输入队员学号'
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        <FormItem
          label='队员姓名'
          {...formItemLayout}
          key="form-content-member-name-2"
          hasFeedback
        >
          {getFieldDecorator('memberName2', {
            rules: [{
              pattern: verify.chinese, message: '输入包含非中文字符！'
            }, {
              required: true, message: '请输入队员姓名'
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        <FormItem
          label='队员专业'
          {...formItemLayout}
          key="form-content-member-class-2"
        >
          {getFieldDecorator('memberClass2', {
            rules: [{
              required: true, message: '请选择队员专业'
            }]
          })(
            <Cascader options={options} placeholder="请选择队员专业" className='form-content-input' />
          )}
        </FormItem>
        <FormItem
          label='队员学号'
          {...formItemLayout}
          key="form-content-member-class-id-2"
          hasFeedback
        >
          {getFieldDecorator('memberStuId2', {
            rules: [{
              pattern: verify.number, message: '请勿输入非数字字符！'
            }, {
              required: true, message: '请输入队员学号'
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
              >重置
              </Button>

            </Col>
          </Row>
        </FormItem>
      </QueueAnim>
    )
  }
}

export default ApplyTuring
