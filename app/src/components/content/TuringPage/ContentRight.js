import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
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
              <img width="100%" src="https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png" />
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
              What is NEUQ-ACM?
            </h1>
            <p key="p" id={`${props.id}-content`}>
              Association for Computing Machinery，计算机协会。
              <br />
              ACM俱乐部成立于2013年12月，是以ACM/ICPC国际大学生程序大赛为依托建立起的社团。俱乐部以提高全校编程水平及代表学校参加各类各项ACM ICPC/CCPC系列赛事为主要任务，以推广ACM竞赛为宗旨，培养学生动手能力，营造创新氛围，促进教学发展。俱乐部为学校取得了多项国家国际级荣誉，为学校科技创新事业做出了突出贡献。指导教师：王和兴。
              主要成就：在2017年10月举办的ACM ICPC／CCPC 大学生程序设计竞赛中，斩获2铜。 2017年10月联合创协、计工学院学生会，成功举办了第一届河北省大学生程序设计竞赛 和 2017 CCPC中国大学生程序设计竞赛（秦皇岛站）。在2016年中国高校计算机大赛中荣获河北省冠军团队。

            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default ContentRight;
