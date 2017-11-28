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
             赛前准备
            </h1>
            <p key="p" id={`${props.id}-content`}>

              <br />

              1. <a href="https://chuanke.baidu.com/1089085-229477.html#cart">
              「NEUQ-ACMClub SummerCamp 2017新生编程训练营」
            </a>
              <br />
              0基础快速入门
              <br />
              2.<a href="http://newoj.acmclub.cn/">newoj平台快速提升自己编程算法的能力</a>
              <br />
              你就是下一个大神
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
              <img width="90%" src="https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png" />
            </span>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default ContentLeft;
