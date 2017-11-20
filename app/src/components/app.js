/**
 * Created by out_xu on 17/3/16.
 */
import React, { Component } from 'react'
import 'whatwg-fetch'
import 'fetch-ie8'
import 'console-polyfill'
import 'es6-promise'
import enquire from 'enquire.js'
import '../static/less/antMotion_style.less'
import './app.less'
import Nav from './plugins/Nav'
import Footer from './plugins/Footer'
import DocumentMeta from 'react-document-title';
class AppComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isMode: false
    }
  }

  componentDidMount () {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({isMode})
    })
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true)
      },
      unmatch: () => {
        cb && cb()
      },
    })
    /* eslint-enable no-unused-expressions */
  }

  render () {
    const {path = 'turing'} = this.props.routes[1]
    const nav = () => {
      if (path !== '/' && path !== 'turing' && path !== 'innovation') {
        return <Nav id="nav" key="nav" isMode={this.state.isMode} path={[path]} />
      }
    }
    const footer = () =>{
      if (path === 'applyTuring'||path === 'rule'||path === 'applyOnline'||path === 'turingFeedback') {
        return <Footer id="footer" key="footer" isMode={this.state.isMode} />
      }
    }
    const meta = {
      title: '图灵杯程序设计大赛',
      description:'第五届 ACM 图灵杯个人赛',
      canonical: 'http://turing.acmclub.cn'
    };
    return (
      <div className="app">
        <DocumentMeta {...meta} />
        {nav()}
        {this.props.children}
        {footer()}
      </div>
    )
  }
}

export default AppComponent
