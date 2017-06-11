import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class RuleAbout extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'rule-about',
  };

  getBlockChildren = (item, i) =>
    (<li
      key={i}
      id={`${this.props.id}-block${i}`}
    >
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </li>);


  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    const dataSource = [
      {title: '竞赛简介', content: '“图灵杯” NEUQ-ACM 程序设计大赛是由东北大学秦皇岛分校ACM俱乐部和计算机与通信工程学院联合举办的面向全国大学生的程序设计年度赛事，旨在提升我校程序设计水平，选拔培养程序设计竞赛人才。' },
      {title: '竞赛宗旨', content: '此次竞赛旨在培养我校学生创新能力、团队精神和利用计算机分析问题、解决问题的能力，特别是算法分析与设计能力，发掘培养我校程序设计人才，并为ACM-ICPC/CCPC 等国内外赛事选拔选手和提供演练的机会。' },
      {title: '往期风采', content: '"图灵杯"NEUQ-ACM 程序设计大赛始于2012年，在每个学年第一学期举办个人赛，第二学期举办团队赛。自NEUQ-ACM第一届“图灵杯”程序设计大赛以来，累计约有136所高校参赛，在去年11月举办的第四届个人赛中，共有来自清华大学、北京大学、电子科技大学等67所高校的497名选手参赛，覆盖全国各地知名高校。' },
    ];
    const ulChildren = dataSource.map(this.getBlockChildren);
    delete props.isMode;
    const queue = isMode ? 'bottom' : 'left';
    const imgAnim = isMode ? { y: 30, opacity: 0, delay: 400, type: 'from', ease: 'easeOutQuad' }
      : { x: 30, opacity: 0, type: 'from', ease: 'easeOutQuad' };
    return (
      <div {...props} className="content-template-wrapper rule-about-wrapper">
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            className={`${props.className}-text`}
            key="text"
            type={queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            id={`${props.id}-textWrapper`}
          >
            <h1
              key="h1"
              id={`${props.id}-title`}
            >
              图灵杯NEUQ-ACM程序设计竞赛
            </h1>
            <p
              key="p"
              id={`${props.id}-content`}
            >
              为每一位东秦 ACMer 提供挑战自我的舞台
            </p>
            <QueueAnim
              component="ul"
              key="ul" type={queue}
              id={`${props.id}-ul`}
              ease="easeOutQuad"
            >
              {ulChildren}
            </QueueAnim>
          </QueueAnim>
          <TweenOne
            className={`${props.className}-img`}
            key="img"
            animation={imgAnim}
            id={`${props.id}-img`}
            resetStyleBool
          >
            <img width="100%" src="https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default RuleAbout;
