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
      {title: '竞赛简介', content: '“图灵杯”NEUQ-ACM程序设计竞赛是东北大学秦皇岛分校ACM俱乐部在院部门协作下举行的程序设计比赛，以世界计算机软件科学创始人、“人工智能之父”、英国数学家和逻辑学家——Alan Mathison Turing的名字命名，具备浓厚的崇尚科学、热爱专业的学术色彩。\n' },
      {title: '竞赛宗旨', content: '此次竞赛旨在培养我校学生创新能力、团队精神和利用计算机分析问题、解决问题的能力，特别是算法分析与设计能力，发掘培养我校程序设计人才，并为ACM-ICPC/CCPC 等国内外赛事选拔选手和提供演练的机会。' },
      {title: '往期回顾', content: '从2013年举办第一届“图灵杯”程序设计大赛起，迄今已经成功地举办了四届，受到了全校热爱编程同学的欢迎，学生中的影响力越来越大。活动既突出专业特色又寓教于乐，不断提高学生的程序设计水平，在学生中形成了良好的科技创新氛围。比赛平台由ACM俱乐部技术部独立开发完成，组织运作也由ACM俱乐部组织协作开展。\n' +
      '这项赛事的从无到有，从小到大，倾注了王和兴老师和一代代俱乐部成员的心血。经过全体成员的不懈努力，参赛人数逐年递增，图灵杯从第一届举办时只有不到百人参赛，到第四届图灵杯团队赛举办时已有来自全国八十多所高校的401支队伍，共计1203人参与比赛。\n' +
      '这是一项与俱乐部共同发展的赛事，也见证了ACM在东秦这块沃土上的成长。现在的图灵杯已经成为了NEUQ-ACM的一张名片，它见证了我们这些ACMer的成长，也将激励东秦的ACMer不断攀登新的高峰。' },
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
              为每一位 ACMer 提供挑战自我的舞台
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
