/**
 * Created by out_xu on 17/5/4.
 */
import { Button, Cascader, Col, Form, Input, message, Radio, Row } from 'antd'
import React from 'react'
import verify from '../utils/Verify'
import options from '../utils/CityOption'
import API from '../api/index'
import Router from 'next/router'

const FormItem = Form.Item
const RadioGroup = Radio.Group
@Form.create()
class FormContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      more: false,
      id: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
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
          if (this.state.more) {
            let body = {
              id: this.state.id,
              stuId: values.stuId,
              name: values.name,
              cid: values.cid,
              reason: values.reason,
              migrateAddress: values.address[0] + values.address[1] + values.addressDetail,
              height: +values.height,
              bloodType: values.bloodType,
              mobile: values.mobile
            }
            const json = await this.fetchData(API.submit, body)
            if (json.success) {
              message.success('提交成功')
              Router.push('/succ')
            } else {
              throw new Error(json.message)
            }
          } else {
            let body = {
              stuId: values.stuId,
              name: values.name,
              cid: values.cid
            }
            const json = await this.fetchData(API.verify, body)
            if (json.success) {
              message.success('校验成功')
            } else {
              throw new Error(json.message)
            }
            this.setState({
              id: json.data.id,
              more: true
            })
          }
        } catch (e) {
          message.error(e.message)
        }
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
    const moreContent =() =>(
      <div>
        <FormItem
          label='联系电话'
          {...formItemLayout}
          hasFeedback
        >
          {getFieldDecorator('mobile', {
            rules: [{
              pattern: verify.mobile, message: '输入的不是有效的手机号码！'
            }, {
              required: true, message: '请输入您的手机号码'
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        <FormItem
          label='血型'
          {...formItemLayout}
        >
          {getFieldDecorator('bloodType', {
            rules: [{required: true, message: '请选择您的血型'}],
          })(
            <RadioGroup>
              <Radio value='A型'>A型</Radio>
              <Radio value='B型'>B型</Radio>
              <Radio value='O型'>O型</Radio>
              <Radio value='AB型'>AB型</Radio>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem
          label='身高'
          {...formItemLayout}
        >
          {getFieldDecorator('height', {
            rules: [{
              pattern: verify.height, message: '请输入合理的身高！'
            }, {
              required: true, message: '请输入您的身高'
            }]
          })(
            <Input className='form-content-input' addonAfter="CM" />,
          )}
        </FormItem>
        <FormItem
          label='迁出原因'
          {...formItemLayout}
        >
          {getFieldDecorator('reason', {
            rules: [{required: true, message: '请选择您的迁出原因'}],
          })(
            <RadioGroup>
              <Radio value='升学'>升学</Radio>
              <Radio value='大中专毕业'>大中专毕业</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          label='迁出省市'
          {...formItemLayout}
        >
          {getFieldDecorator('address', {
            rules: [{
              required: true, message: '请选择省市'
            }]
          })(
            <Cascader options={options} placeholder="请选择省市" className='form-content-input' />
          )}
        </FormItem>
        <FormItem
          label='迁出具体地址，详细到门牌号'
          {...formItemLayout}
        >
          {getFieldDecorator('addressDetail', {
            rules: [{
              required: true, message: '请填写具体地址'
            }]
          })(
            <Input className='form-content-input' placeholder="例如：经济开发区泰山路143号东北大学秦皇岛分校鹏远3号楼XXXX室" />
          )}
        </FormItem>
      </div>
    )
    return (
      <Form onSubmit={this.handleSubmit} className="form-content">

        <FormItem
          label='姓名'
          {...formItemLayout}
          hasFeedback
        >
          {getFieldDecorator('name', {
            rules: [{
              pattern: verify.chinese, message: '输入包含非中文字符！'
            }, {
              required: true, message: '请输入您的姓名'
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        <FormItem
          label='学号'
          {...formItemLayout}
          hasFeedback
        >
          {getFieldDecorator('stuId', {
            rules: [{
              pattern: verify.stuId, message: '请输入正确的学号！'
            }, {
              required: true, message: '请输入您的学号'
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>

        <FormItem
          label='身份证号'
          {...formItemLayout}
          hasFeedback
        >
          {getFieldDecorator('cid', {
            rules: [{
              pattern: verify.ID, message: '输入的不是有效的身份证号码！备注：X 大写'
            }, {
              required: true, message: '请输入您的身份证号码'
            }]
          })(
            <Input className='form-content-input' />,
          )}
        </FormItem>
        {this.state.more && moreContent()}
        <FormItem>
          <Row gutter={12} type='flex'>
            <Col className='left-content' xs={{span: 24}} sm={{span: 12, offset: 6}}>
              <Button
                type={this.state.more ? 'primary' : 'primary'} htmlType='submit' size='large'
                className='form-button-1'
                loading={this.state.loading}
              >
                {this.state.more ? '点击提交，请认真审核' : '点击校验，校验成功进入下一步'}
              </Button>
            </Col>
          </Row>
        </FormItem>
        <style jsx>{`
          .form-content {
            margin-bottom: 50px;
          }
          .form-content-left {
            margin: 10px;
            flex-grow: 1;
          }
          .form-content-right {
            margin: 10px;
            flex-grow: 1;
          }
          .form-content .span-label {
            margin-right: 20px;
          }

        `}
        </style>
      </Form>
    )
  }
}

export default FormContent
