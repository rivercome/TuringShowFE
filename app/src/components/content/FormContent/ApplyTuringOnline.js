/**
 * Created by out_xu on 17/5/4.
 */
import { Button, Cascader, Col, Form, Input, message, Radio, Row } from 'antd'
import React from 'react'

import QueueAnim from 'rc-queue-anim'
import {Link } from 'react-router'
import 'whatwg-fetch'
import 'es6-promise'
import verify from '../../../utils/Verify'
import goto from '../../../utils/goto'

import '../../../static/css/applyTurning.css'
const FormItem = Form.Item
const RadioGroup = Radio.Group

@Form.create()
class ApplyTuringOnline extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkTeamName = this.checkTeamName.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.isNeccessary=this.isNeccessary.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({loading: true})

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {} else {
        message.loading('提交成功，正在验证')

        fetch('/api/apply/submitTurningOnline', {
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
            goto('/success/turing')
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

  isNeccessary () {
    const form = this.props.form
    return form.getFieldValue('memberName2')
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
            第四届图灵杯 NEUQ-ACM 程序设计竞赛（团队赛）
            <br />
            网络赛报名
          </div>
          <br />
          <div className="form-content-header-extra">
            <Link to="/applyTuring">现场赛报名</Link>
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
          label='队长学校'
          {...formItemLayout}
          key="form-content-leader-school"
        >
          {getFieldDecorator('leaderSchool', {
            rules: [{
              required: true, message: '输入队长学校'
            }]
          })(
            <Input className='form-content-input' />
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
          label='队员1姓名'
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
          label='队员1学校'
          {...formItemLayout}
          key="form-content-member-school-1"
        >
          {getFieldDecorator('memberSchool1', {
            rules: [{
              required: true, message: '请输入队员1学校'
            }]
          })(
            <Input className='form-content-input' />
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
            }]
          })(
            <Input className='form-content-input' placeholder="二人队伍请直接提交"/>,
          )}
        </FormItem>
        <FormItem
          label='队员2学校'
          {...formItemLayout}
          key="form-content-member-school-2"
        >
          {getFieldDecorator('memberSchool2', {
            rules: [{
              required: this.isNeccessary(), message: '请输入队员2学校'
            }]
          })(
            <Input className='form-content-input' />
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
                disabled
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

export default ApplyTuringOnline