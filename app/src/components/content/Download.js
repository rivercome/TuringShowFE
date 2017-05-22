/**
 * Created by out_xu on 17/5/4.
 */
import React, { Component } from 'react'
import { Button, Icon, Input } from 'antd'
import '../../static/css/download.css'
class Download extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: ''
    }
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onChange (e) {
    this.setState({
      password: e.target.value
    })
  }

  onClick () {
    let url = '/api/apply/download?' + this.state.password
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
        <Button
          type='primary'
          size='large'
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
