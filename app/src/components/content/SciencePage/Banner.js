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
            <span className="title-number">科技 · 新知</span>

            <br />
            <span className="title-number">大讲堂</span>
          </span>
          <p
            key="content"
            id={`${props.id}-content`}
          >
            以新知之手，绘科技未来
          </p>
          <Button ghost key="button" size='large' id={`${props.id}-button`} onClick={()=>goto('/applyInnovation')} style={{marginRight: 5}}>
            报名大讲堂
          </Button>
          <Button type="danger" ghost size='large' key="button-friend" id={`${props.id}-button-friend`} onClick={()=>goto('/applySpecial')}>
            校友报名通道
          </Button>

        </QueueAnim>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          key="icon"
        >
          <span style={{fontSize: 10}}>了解本期大讲堂</span>
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
