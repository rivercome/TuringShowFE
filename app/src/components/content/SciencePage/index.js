/**
 * Created by out_xu on 17/5/22.
 */
import React, { Component } from 'react'
import enquire from 'enquire.js'


import LargeFooter from '../TurningPage/LargeFooter'
import Banner from './Banner'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import PersonAbout from './PersonAbout'
class SciencePage extends Component {
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
    return (
      <div>
        <Banner id="banner" key="banner" isMode={this.state.isMode}/>
        <ContentRight id="content-right" key="content-right" isMode={this.state.isMode}/>
        <ContentLeft id="content-left" key="content-left" isMode={this.state.isMode}/>
        <PersonAbout id="person-about" key="person-about" isMode={this.state.isMode}/>
        <LargeFooter id="footer" key="footer" isMode={this.state.isMode} />
      </div>
    )
  }
}

export default SciencePage
