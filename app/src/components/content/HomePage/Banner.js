import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import goto from '../../../utils/goto'
// import logoLight from '../../../static/images/acm_logo_light.png'
class Banner extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMode;
    return (
      <OverPack
        replay
        playScale={[0.3, 0.1]}
        {...props}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}
        >
          <span
            className="title"
            key="title"
            id={`${props.id}-title`}
          >
            <br />
            <span className="title-number">1</span>支队
            <span className="title-number">3</span>个人

            <br />
            <span className="title-number">5</span>小时
            <span className="title-number">10</span>道题
          </span>
          <p
            key="content"
            id={`${props.id}-content`}
          >
            一场代码的较量！
          </p>
          <Button type="ghost" key="button" id={`${props.id}-button`} onClick={()=>goto('/applyTurning')}>
            直接报名
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          key="icon"
        >
          <span style={{fontSize: 10}}>ACM 图灵杯团队赛</span>
          <br />
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

Banner.defaultProps = {
  className: 'banner',
};

export default Banner;
