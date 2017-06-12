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
      if (path === 'applyTuring'||path === 'rule'||path === 'applyTuringOnline'||path === 'turingFeedback') {
        return <Footer id="footer" key="footer" isMode={this.state.isMode} />
      }
    }
    const hostPath = window.location.host.substr(0, 4)
    const meta = {
      title: hostPath==='turi'?'图灵杯程序设计大赛':'科技 · 新知',
      description: hostPath==='turi'?'第四届 ACM 图灵杯团队赛':'以新知之手，绘科技未来',
      canonical: hostPath==='turi'?'http://turing.acmclub.cn':'http://newtech.acmclub.cn',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'turing,newtech'
        }
      }
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
