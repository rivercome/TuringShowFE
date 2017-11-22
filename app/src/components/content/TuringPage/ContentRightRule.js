import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import keyboard from '../../../static/images/keyboard.png'

class ContentRightRule extends React.Component {
  static defaultProps = {
    className: 'content-right',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src={keyboard} />
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              比赛规则
            </h1>
            <div key="p" id={`${props.id}-content`} style={{textAlign: 'left',whiteSpace : "normal",wordBreak:"break-all",wordWrap:"break-word"}}>
              1、个人比赛，禁止讨论
              <br/>
              2、比赛时长4个小时、共12道题
              <br/>
              3、预先报名、使用比赛账号参赛
              <br/>
              4、支持C/C++/Java三种语言
              <br/>
              5、不允许使用u盘手机等电子设备,但可携带最多两本纸质书籍。

            </div>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default ContentRightRule;
