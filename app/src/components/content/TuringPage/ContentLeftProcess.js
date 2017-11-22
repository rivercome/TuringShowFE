import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {Link} from 'react-router'
import rili from '../../../static/images/rili.png'

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
              大赛流程
            </h1>
            <p key="p" id={`${props.id}-content`} style={{lineHeight: 1.8,textAlign: 'left'}}>
              1、 使用浏览器访问 <a href="http://turing.acmclub.cn/">图灵杯官网</a> 进行线上报名
              <br />
              2、 等待短信通知参赛账号、比赛地点及座位
              <br />
              3、 在2017年12月3日12：00之前至比赛地点签到
              <br />
              4、 打开电脑桌面上的“图灵杯”文件夹根据提示操作
              <br />
              5、 比赛时间4个小时，在最后40分钟封榜，不实时更新排名
              <br />
              6、 等待通知并出席颁奖典礼。

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
              <img width="100%" src={rili} />
            </span>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default ContentLeft;
