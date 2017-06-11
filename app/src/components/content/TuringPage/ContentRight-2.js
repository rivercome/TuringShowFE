import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import contentRight2 from '../../../static/images/content-right-2.png'

class ContentRight extends React.Component {
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
              <img width="100%" src={contentRight2} />
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
              参赛须知
            </h1>
            <p key="p" id={`${props.id}-content`} style={{textAlign: 'left'}}>

              1、东北大学秦皇岛分校、燕山大学在校生可参加现场赛
              <br/>
              2、其余高校及社会人士可参加线上邀请赛，报名网络赛后周六统一短信发送比赛账号及密码
              <br/>
              3、入场验证：要求现场赛参赛选手携带学生证在赛前20分钟入场签到核验。网络赛10点准时开赛。
              <br/>
              4、赛事工作人员将全程跟踪，如遇比赛系统崩溃，请保持秩序，工作人员将及时处理。
              <br/>
              5、参赛人数较多，乘坐电梯及上下楼梯时请注意安全。
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default ContentRight;
