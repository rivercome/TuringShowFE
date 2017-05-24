import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import yyf from '../../../static/images/yyf.png'
class PersonAbout extends React.Component {

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
      {title: '个人简介', content: '东北大学秦皇岛分校2012级优秀毕业生，负责360企业内部无线安全建设及天巡无线入侵防御系统攻防产品优化。主要从事WLAN安全研究、无线渗透测试及无线安全相关产品开发。其参与研发的“绵羊墙”钓鱼Wi-Fi风险演示系统在ISC互联网安全大会、首都网络安全日等众多大型展会上获得展出。' },
      {title: '团队介绍', content: '360独角兽安全团队（UnicornTeam），是360公司旗下一支专注于无线电技术领域信息安全研究的攻防团队，隶属于360无线电安全研究部。团队聚焦于无线电技术全领域及相关硬件的信息安全相关研究，小到射频卡、无线钥匙，大到智能汽车、卫星通信、GPS导航系统等。团队研制了360卡防、天巡等一系列软硬件安全产品。团队成员曾多次在BlackHat USA&EUROPE、DEFCON、CanSecWest、HITB、Ruxcon、POC、SyScan国际安全会议及XReward、 KCon、HackPWN等国内安全会议发表研究成果，并共同撰写国内首本无线通信安全书籍《无线电安全攻防大揭密》，国内首本汽车安全书籍《智能汽车攻防大揭秘》，以及《硬件安全攻防大揭秘》。此外他们负责的DC010是在北京唯一官方承认的DEFCON Group。' },
      // {title: '往期风采', content: 'NEUQ-ACM "图灵杯" 程序设计大赛始于2012年，在每个学年第一学期举办个人赛，第二学期举办团队赛。自NEUQ-ACM第一届“图灵杯”程序设计大赛以来，累计约有136所高校参赛，在去年11月举办的第四届个人赛中，共有来自清华大学、北京大学、电子科技大学等67所高校的497名选手参赛，覆盖全国各地知名高校。' },
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
              杨芸菲
            </h1>
            <p
              key="p"
              id={`${props.id}-content`}
            >
              UnicornTeam 无线安全研究员
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
            <img width="100%" src={yyf} />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default PersonAbout;
