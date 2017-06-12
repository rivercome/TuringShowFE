/**
 * Created by out_xu on 17/5/4.
 */
import { Button, Checkbox, Form, Input, message, Radio } from 'antd'
import React from 'react'

import QueueAnim from 'rc-queue-anim'
import 'whatwg-fetch'
import 'es6-promise'

import '../../../static/css/turing-feedback.css'
const FormItem = Form.Item
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group
import goto from '../../../utils/goto'
@Form.create()
class TuringFeedback extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.certreqTypeChange = this.certreqTypeChange.bind(this)
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
          values.service= values.service.join('、')
          values.why= values.why.join('、')
          const json = await this.fetchData('/api/apply/turingFeedback', values)
          if (json.success) {
            message.success('感谢您的反馈')
          } else {
            throw new Error(json.message)
          }
          goto('/success/certreq')
        }
        catch (e) {
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
        span: 24
      },
      wrapperCol: {
        span: 24
      },
    }
    const optionsWhy = [
      {label: 'For fun', value: 'For fun'},
      {label: '获奖(证书，学分)', value: '获奖(证书，学分)'},
      {label: '加强能力', value: '加强能力'},
      {label: '结交基友', value: '结交基友'},
      {label: '纯粹支持', value: '纯粹支持'},
      {label: '其他', value: '其他'}
    ]
    const optionsService = [
      {label: '报名信息无法查看与修改', value: '报名信息无法查看与修改'},
      {label: '短信通知过晚', value: '短信通知过晚'},
      {label: '报名时间过紧', value: '报名时间过紧'},
      {label: '服务器太卡', value: '服务器太卡'},
      {label: '其他', value: '其他'}
    ]
    return (
      <QueueAnim
        component='Form'
        type='top'
        onSubmit={this.handleSubmit}
        className="main-content turing-feedback-wrap"
        delay={300}
        duration={600}
      >
        <div className="form-content-header certreq-header" key="form-content-header">
          <div className="form-content-header-title">
            第四届图灵杯 NEUQ-ACM 程序设计竞赛（团队赛）
            <br />
            意见收集
          </div>
          <br />
          <div className="certreq-intro" key="turing-feedback-intro">
            说明：感谢您填写此次表单，本表单用于对第四届图灵杯 NEUQ-ACM 程序设计竞赛（团队赛）进行意见收集及信息反馈。请认真填写，大约需花费
            1 分钟，谢谢您的配合。
          </div>
        </div>
        <FormItem
          {...formItemLayout}
          key="form-content-type"
        >
          <p className="ant-form-item-required">1、您参加的是何种类型的比赛？</p>

          {getFieldDecorator('type', {
            rules: [{required: true, message: '请选择'}],
          })(
            <RadioGroup>
              <Radio value='现场赛'>现场赛</Radio>
              <Radio value='网络同步赛'>网络同步赛</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          key="form-content-how-to-know"
        >
          <p className="ant-form-item-required">2、您是通过何种方式了解此次比赛？</p>

          {getFieldDecorator('howToKnow', {
            rules: [{required: true, message: '请选择'}]
          })(
            <RadioGroup>
              <Radio value='现场宣讲'>现场宣讲</Radio>
              <Radio value='同学告知'>同学告知</Radio>
              <Radio value='老师推荐'>老师推荐</Radio>
              <Radio value='群内推广、网络宣传'>群内推广、网络宣传</Radio>
              <Radio value='其他'>其他</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          key="form-content-major"
        >
          <p className="ant-form-item-required">3、您所在的专业？</p>
          {getFieldDecorator('major', {
            rules: [{required: true, message: '请选择'}]
          })(
            <RadioGroup>
              <Radio value='计算机相关专业'>计算机相关专业</Radio>
              <Radio value='数学相关专业'>数学相关专业</Radio>
              <Radio value='其他'>其他</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          key="form-content-grade"
        >
          <p className="ant-form-item-required">4、您所在的年级？</p>

          {getFieldDecorator('grade', {
            rules: [{required: true, message: '请选择'}]
          })(
            <RadioGroup>
              <Radio value='大一'>大一</Radio>
              <Radio value='大二'>大二</Radio>
              <Radio value='大三'>大三</Radio>
              <Radio value='大四'>大四</Radio>
              <Radio value='研究生'>研究生</Radio>
              <Radio value='初、高生'>初、高生</Radio>
              <Radio value='其他'>其他</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          key="form-content-why"
        >
          <p className="ant-form-item-required">5、您为何参加本次比赛？(多选)</p>
          {getFieldDecorator('why', {
            rules: [{required: true, message: '请选择'}]
          })(
            <CheckboxGroup options={optionsWhy} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          key="form-content-difficulty"
        >
          <p className="ant-form-item-required">6、您觉得本次比赛总体难度如何？</p>
          {getFieldDecorator('difficulty', {
            rules: [{required: true, message: '请选择'}]
          })(
            <RadioGroup>
              <Radio value='偏难'>偏难</Radio>
              <Radio value='适中'>适中</Radio>
              <Radio value='偏易'>偏易</Radio>
              <Radio value='水'>水</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          key="form-content-service"
        >
          <p className="ant-form-item-required">7、在服务管理方面，我们是否有做得不到位的地方？(多选)</p>

          {getFieldDecorator('service', {
            rules: [{required: true, message: '请选择'}]
          })(
            <CheckboxGroup options={optionsService} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          key="form-content-service-advice"
        >
          <p>8、对服务管理方面的建议(选填)</p>
          {getFieldDecorator('serviceAdvice', {
            rules: [{required: false}]
          })(
            <Input className='form-content-input' type="textarea" placeholder="感谢您提供宝贵建议" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          key="form-content-oj-advice"
        >
          <p>9、您认为我们的OJ有何亮点，有何需要改进的?(选填)</p>
          {getFieldDecorator('ojAdvice', {
            rules: [{required: false}]
          })(
            <Input className='form-content-input' type="textarea" placeholder="感谢您提供宝贵建议" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          key="form-content-problem-advice"
        >
          <p>10、您觉得该如何提高题目质量，可就本次题目进行吐槽并提供合理建议?(选填)</p>
          {getFieldDecorator('problemAdvice', {
            rules: [{required: false}]
          })(
            <Input className='form-content-input' type="textarea" placeholder="感谢您提供宝贵建议" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          key="form-content-need-certreq"
        >
          <p className="ant-form-item-required">11、您认为网络赛是否有邮寄荣誉证书的必要性？</p>
          {getFieldDecorator('needCertreq', {
            rules: [{required: true, message: '请选择'}]
          })(
            <RadioGroup>
              <Radio value='有必要'>有必要</Radio>
              <Radio value='有需要'>有需要</Radio>
              <Radio value='没必要'>没必要</Radio>
              <Radio value='无所谓'>无所谓</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          key="form-content-satisfy"
        >
          <p className="ant-form-item-required">12、您对本次比赛总体满意吗？</p>
          {getFieldDecorator('satisfy', {
            rules: [{required: true, message: '请选择'}]
          })(
            <RadioGroup>
              <Radio value='非常满意'>非常满意</Radio>
              <Radio value='比较满意'>比较满意</Radio>
              <Radio value='一般'>一般</Radio>
              <Radio value='比较不满意'>比较不满意</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          key="form-content-moreContest"
        >
          <p className="ant-form-item-required">13、我校每年举办一次图灵杯个人赛与一次团队赛，届时我们会进行宣传，您是否乐意继续参加我们的比赛？</p>
          {getFieldDecorator('moreContest', {
            rules: [{required: true, message: '请选择'}]
          })(
            <RadioGroup>
              <Radio value='一定来（求您了）'>一定来（求您了）</Radio>
              <Radio value='有意向，看时间安排'>有意向，看时间安排</Radio>
              <Radio value='不来，滚'>不来，滚</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          key="form-content-footer"
        >
          <Button
            type='primary' htmlType='submit' size='large'
            className='form-button-certreq'
            loading={this.state.loading}
          >
            点击提交
          </Button>
        </FormItem>
      </QueueAnim>
    )
  }
}

export default TuringFeedback
