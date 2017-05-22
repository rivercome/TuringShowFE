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
    const {path = 'home'} = this.props.routes[1]
    const footer = () => {
      if (path === '/' || path === 'applyTurning' || path === 'home')
        return <Footer id="footer" key="footer" isMode={this.state.isMode} />
    }
    const nav= ()=> {
      if (path !== '/' && path !== 'home') {
        return <Nav id="nav" key="nav" isMode={this.state.isMode} path={[path]} />
      }
    }
    return (
      <div className="app">
        {nav()}
        {this.props.children}
        {footer()}
      </div>
    )
  }
}

export default AppComponent
