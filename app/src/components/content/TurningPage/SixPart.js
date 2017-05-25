import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {Button} from 'antd'
import goto from '../../../utils/goto'

class SixPart extends React.Component {
  static defaultProps = {
    className: 'six-part',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const blockArray = [
      { icon: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png', title: '赛前宣讲', content: '【科技·新知】大讲堂压轴环节，图灵杯简单宣讲，简化枯燥无味的宣讲会，只给你最刺激有用的信息。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png', title: '组队报名', content: '自由组队，3人抱团，结对编程。全新报名系统，流程体验。参赛信息短信通知，避免纸质参赛证，节能减排。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png', title: '赛题准备', content: ' 多年竞赛经验的学长学姐们精心设计的题目，难度梯度分布均匀，总有一题适合你。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png', title: '比赛进行', content: 'ACM 俱乐部协同计算机与通信工程学院为您打造最舒适的服务，我们有专业的监考人员，我们专业的比赛环节。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png', title: '结果通知', content: '每一位参赛者都期待自己的努力成果，我们努力做好通知工作，为每一位参赛者最有用的引导。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png', title: '颁奖典礼', content: '假装有字假装有字假装有字假装有字假装有字假装有字假装有字假装有字。' },

    ];
    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100,};
      return (<TweenOne
        component="li"
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
      >
        <TweenOne
          animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className="img"
          key="img"
        >
          <img src={item.icon} width="100%" />
        </TweenOne>
        <div className="text">
          <TweenOne key="h1" animation={childrenAnim} component="h1">
            {item.title}
          </TweenOne>
          <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
            {item.content}
          </TweenOne>
        </div>
      </TweenOne>);
    });
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="h1"
            animation={oneAnim}
            component="h1"
            id={`${props.id}-title`}
            reverseDelay={100}
          >
            ACMClub 联合 计算机与通信工程学院
          </TweenOne>
          <TweenOne
            key="p"
            animation={{ ...oneAnim, delay: 100 }}
            component="p"
            id={`${props.id}-titleContent`}
          >
            为所有 NEUQ ACMer 提供专业的竞赛服务
          </TweenOne>
          <QueueAnim
            key="ul"
            type="bottom"
            className={`${props.className}-contentWrapper`}
            id={`${props.id}-contentWrapper`}
          >
            <ul key="ul">
              {children}
            </ul>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default SixPart;
