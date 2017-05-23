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
      {title: '技术', content: '丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。' },
      {title: '融合', content: '解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。\n解放业务及技术生产力，推动金融服务底层创新。' },
      {title: '开发', content: '符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。' },
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
              NEUQ ACM "图灵杯" 程序设计大赛
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
