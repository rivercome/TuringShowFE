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
              1.百度传课搜索【NEUQ-ACMClub SummerCamp 2017新生编程训练营】
              链接：<a >https://chuanke.baidu.com/1089085-229477.html#cart</a>
              <br />
              2.newoj
              链接：<a>http://newoj.acmclub.cn/</a>
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
