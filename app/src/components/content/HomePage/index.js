/**
 * Created by out_xu on 17/5/22.
 */
import React, { Component } from 'react'
import enquire from 'enquire.js'

import Banner from './Banner'
import ContentRight from './ContentRight'
import ContentLeft from './ContentLeft'
import SixPart from './SixPart'
import ContentTable from './ContentTable'
import LogoCulture from './LogoCulture'
import ThemSay from './ThemSay'
import RuleAbout from './RuleAbout'
class HomePage extends Component {
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
        <LogoCulture id="logo-culture" key="logo-culture" isMode={this.state.isMode}/>
        <ThemSay id="them-say" key="them-say" isMode={this.state.isMode}/>
        <RuleAbout id="rule-about" key="rule-about" isMode={this.state.isMode}/>
        <SixPart id="sex-part" key="sex-part" isMode={this.state.isMode}/>
        <ContentTable id="content-table" key="content-table" isMode={this.state.isMode}/>
      </div>
    )
  }
}

HomePage.propTypes = {}
HomePage.defaultProps = {}

export default HomePage
