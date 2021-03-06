/**
 * Created by out_xu on 17/5/22.
 */
import React, { Component } from 'react'
import enquire from 'enquire.js'

// import Banner from './Banner'
import ContentRight from './ContentRight'
import ContentLeft from './ContentLeft'
import ContentRight2 from './ContentRight-2'
import ContentLeft2 from './ContentLeft-2'
import SixPart from './SixPart'
import ContentTable from '../SciencePage/ContentTable'
import LogoCulture from './LogoCulture'
import ThemSay from './ThemSay'
import RuleAbout from './RuleAbout'
import LargeFooter from './LargeFooter'
import BannerLeft from './BannerLeft'
import ContentLeftProcess from './ContentLeftProcess'
import ContentRightRule from './ContentRightRule'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isMode: false,
      isTuring: false
    }
  }


  componentDidMount () {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({isMode})
    })
    const hostPath = window.location.host.substr(0, 4)
    if (hostPath==='turi') {

    }
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
        <BannerLeft id="banner" key="banner" isMode={this.state.isMode}/>

        <RuleAbout id="rule-about" key="rule-about" isMode={this.state.isMode}/>
        <ContentRight2 id="content-right-2" key="content-right-2" isMode={this.state.isMode}/>
        <ContentLeftProcess id="content-left-process" key="content-left-process" isMode={this.state.isMode}/>
        <ContentRightRule id="content-right-rule" key="content-right-rule" isMode={this.state.isMode}/>
        <ContentLeft2 id="content-left-2" key="content-left-2" isMode={this.state.isMode}/>

        <ContentRight id="content-right" key="content-right" isMode={this.state.isMode}/>
        <ContentLeft id="content-left" key="content-left" isMode={this.state.isMode}/>
        <LogoCulture id="logo-culture" key="logo-culture" isMode={this.state.isMode}/>
        <ThemSay id="them-say" key="them-say" isMode={this.state.isMode}/>
        <SixPart id="sex-part" key="sex-part" isMode={this.state.isMode}/>
        {/*<ContentTable id="content-table" key="content-table" isMode={this.state.isMode}/>*/}


        <LargeFooter id="footer" key="footer" type="turing" isMode={this.state.isMode} />
      </div>
    )
  }
}

HomePage.propTypes = {}
HomePage.defaultProps = {}

export default HomePage

