import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';

import Content0 from './Content0';
import Content1 from './Content1';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';

import './less/antMotion_style.less';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [
      <Content0 id="content_4_0" key="content_4_0" isMode={this.state.isMode}/>,
      <Content1 id="content_9_0" key="content_9_0" isMode={this.state.isMode}/>,
      <Content3 id="content_6_0" key="content_6_0" isMode={this.state.isMode}/>,
      <Content4 id="content_7_0" key="content_7_0" isMode={this.state.isMode}/>,
      <Content5 id="content_8_0" key="content_8_0" isMode={this.state.isMode}/>,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
