/**
 * Created by out_xu on 17/5/4.
 */
import React, { Component } from 'react'
import { Button, Icon, Input, Select } from 'antd'
import '../../static/css/download.css'
const Option = Select.Option;

class Download extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: '',
      type: ''
    }
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.setState({
      password: e.target.value
    })
  }

  onSelectChange = (e) => {
    this.setState({
      type: e.target.value,
    })
  }

  onClick () {
    const {password, type} = this.state
    let url = '/api/apply/download?' + 'password=' + this.state.password + '&type=' + this.state.password
    let a = document.createElement('a')
    a.href = url
    a.target = '_blank'
    a.click()
  }

  render () {
    return (
      <div className='main-content'>
        <div className='download-input'>
          <Input
            size='large'
            prefix={<Icon type='lock' style={{fontSize: 13}} />}
            type='password'
            onChange={this.onChange}
            placeholder='Password'
          />
        </div>
        <Select defaultValue="turning" style={{ width: 120 }} onChange={this.onSelectChange}>
          <Option value={'turning'}>图灵杯</Option>
          <Option value={'innovation'}>科技新知</Option>
          <Option value={'special'}>科技新知校友</Option>
        </Select>

        <Button
          type='primary'
          className='download-button'
          onClick={this.onClick}
          loading={this.state.loading}
          disabled={this.state.password.length <= 0}
        >
          导出 Excel
        </Button>

      </div>
    )
  }
}

export default Download
