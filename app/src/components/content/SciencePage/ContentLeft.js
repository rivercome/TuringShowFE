import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class ContentLeft extends React.Component {

  static defaultProps = {
    className: 'content-left',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'left',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '+=30', opacity: 0, type: 'from' },
    };
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            type={animType.queue}
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >

            <h1 key="h1" id={`${props.id}-title`}>
              专业黑客的网络技术干货！
            </h1>
            <p key="p" id={`${props.id}-content`}>
              还在为“永恒之蓝”的入侵而忧心忡忡吗？遇到网络安全问题时还是一筹莫展吗？莫慌张！大讲堂第一期有请到我校优秀毕业生杨芸菲，解答你心中的网络安全困惑！带你走进网络安全的世界！
            </p>
          </QueueAnim>
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src="https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png" />
            </span>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default ContentLeft;
