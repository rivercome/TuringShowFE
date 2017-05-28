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
              以新知之手，绘科技未来
            </h1>
            <p key="p" id={`${props.id}-content`}>
              东秦有史以来最大规模、最具技术含量的讲座“以新知之手，绘科技未来——科技新知大讲堂”即将拉开帷幕！讲堂第一期面向秦皇岛各高校师生，旨在分享科技行业的新技术和行业发展趋势，促进一线科技公司与高校在知识分享、人才培养和项目对接等领域的合作。
              <br />
              活动时间：2017年6月2日19:00，活动地点：大学会馆三楼学术报告厅。300个席位等你来！
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default ContentRight;
