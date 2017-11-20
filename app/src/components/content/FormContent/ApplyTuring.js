/**
 * Created by out_xu on 17/5/4.
 */
import { Button, Cascader, Col, Form, Input, message, Radio, Row } from 'antd'
import React from 'react'

import QueueAnim from 'rc-queue-anim'
import { Link } from 'react-router'
import 'whatwg-fetch'
import 'es6-promise'
import verify from '../../../utils/Verify'
import options from '../../../utils/turningOptions'
import goto from '../../../utils/goto'
import '../../../static/css/applyTurning.css'

const FormItem = Form.Item
const RadioGroup = Radio.Group

@Form.create()
class ApplyTuring extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({loading: true})

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {} else {
        message.loading('提交成功，正在验证')
        const {major = [], school_type = "本校"} = values
        const scType = school_type === '外校'
        let body = {}
        if (scType) {
          body = values
        } else {
          body = {
            ...values,
            major: major[1],
            faculty: major[0]
          }
        }
        fetch('http://120.24.58.247/addstudent', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        }).then((res) => {
          return res.json()
        }).then((json) => {
          if (json.code === 0) {
            goto('/success?' + json.data.type)
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

  handleReset (e) {
    e.preventDefault()
    this.props.form.resetFields()
  }

  render () {
    const {getFieldDecorator, getFieldValue} = this.props.form
    const scType = getFieldValue('school_type') === '外校'
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
            第五届图灵杯 NEUQ-ACM 程序设计竞赛（个人赛）
            <br />
            暨 2017 中国大学生程序设计大赛校内选拔赛
          </div>
          <br />
          <div className="form-content-header-extra">
            <Link to="/applyOnline">网络赛报名</Link>
            <Link to="/rule">点此查看比赛规则</Link>
          </div>
        </div>

         <FormItem
           label='学校'
           key="form-content-school_type"
           {...formItemLayout}
         >
          {getFieldDecorator('school_type', {
            initialValue: '本校',
            rules: [{required: true, message: '请选择参赛语言'}],
          })(
            <RadioGroup>
              <Radio value='本校'>本校</Radio>
              <Radio value='外校'>外校</Radio>
            </RadioGroup>
          )}
        </FormItem>
        {
          scType && (
            <FormItem
              label='学校名称'
              key="form-content-school"
              {...formItemLayout}

              hasFeedback
            >
              {getFieldDecorator('school', {
                rules: [{
                  required: true, message: '请输入学校名称'
                }]
              })(
                <Input className='form-content-input' />,
              )}
            </FormItem>
          )
        }

        <FormItem
          label='姓名'
          {...formItemLayout}
          key="form-content-leader-name"
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
           key="form-content-sex"
           {...formItemLayout}
         >
          {getFieldDecorator('sex', {
            rules: [{required: true, message: '请选择性别'}],
          })(
            <RadioGroup>
              <Radio value='男'>男</Radio>
              <Radio value='女'>女</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          label='年级'
          {...formItemLayout}
          key="form-content-grade"
        >
          {getFieldDecorator('grade', {
            rules: [{
              required: true, message: '请输入您的年级'
            }]
          })(
            <RadioGroup>
              <Radio value='大一'>大一</Radio>
              <Radio value='大二'>大二</Radio>
              <Radio value='大三'>大三</Radio>
              <Radio value='大四'>大四</Radio>
              <Radio value='其他'>其他</Radio>
            </RadioGroup>
          )}
        </FormItem>

        {
          !scType && (
            <div key="form-content-leader-major"
            >
               <FormItem
                 label='专业'
                 {...formItemLayout}
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
                label='班级'
                help="如：计算机类1601班 或 21531班"
                key="form-content-class"
                {...formItemLayout}
                hasFeedback
              >
                {getFieldDecorator('class', {
                  rules: [{
                    pattern: verify.number, message: '请勿输入非数字字符！'
                  }, {
                    required: true, message: '请输入班级'
                  }]
                })(
                  <Input className='form-content-input' />,
                )}
              </FormItem>
              <FormItem
                label='学号'
                key="form-content-num"
                {...formItemLayout}
                hasFeedback
              >
                {getFieldDecorator('stunum', {
                  rules: [{
                    pattern: verify.number, message: '请勿输入非数字字符！'
                  }, {
                    required: true, message: '请输入学号'
                  }]
                })(
                  <Input className='form-content-input' />,
                )}
              </FormItem>

            </div>
          )
        }
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
          {getFieldDecorator('email', {
            rules: [{
              pattern: verify.mail, message: '输入的不是有效的邮箱！'
            }, {
              required: false, message: '请输入您的邮箱'
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
          {getFieldDecorator('language', {
            rules: [{required: true, message: '请选择参赛语言'}],
          })(
            <RadioGroup>
              <Radio value='C/C++'>C/C++</Radio>
              <Radio value='Java'>Java</Radio>
            </RadioGroup>
          )}
        </FormItem>
        {
          scType && (
            <FormItem
              label='报名蓝桥杯'
              key="form-content-lanqiao"
              {...formItemLayout}
            >
              {getFieldDecorator('lanqiaobei', {
                rules: [{required: true, message: '请选择是或否'}],
              })(
                <RadioGroup>
                  <Radio value='是'>是</Radio>
                  <Radio value='否'>否</Radio>
                </RadioGroup>
              )}
            </FormItem>
          )
        }
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

export default ApplyTuring
