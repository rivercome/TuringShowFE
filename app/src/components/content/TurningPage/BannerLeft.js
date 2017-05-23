import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import goto from '../../../utils/goto'

const BgElement = Element.BgElement;
class BannerLeft extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.object,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'banner-left',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const follow = !isMode ? {
        delay: 1000,
        minMove: 0.1,
        data: [
          { id: 'bg$0', value: 15, bgPosition: '50%', type: ['backgroundPositionX'] },
          { id: `${props.id}-wrapperBlock0`, value: -15, type: 'x' },
        ],
      } : null;
    const childrenToRender = (<Element
      key="0"
      prefixCls="banner-user-elem"
      followParallax={follow}
    >
      <BgElement
        className="bg bg0"
        key="bg"
        id="bg$0"
        scrollParallax={{ y: 300 }}
      />
      <QueueAnim
        type={['bottom', 'top']} delay={200}
        className={`${props.className}-title`}
        key="text"
        id={`${props.id}-wrapperBlock0`}
      >
          <span
            className="logo"
            key="logo"
            id={`${props.id}-titleBlock0`}
          >
            ACM 图灵杯
          </span>
        <p
          key="content"
          id={`${props.id}-contentBlock0`}
        >
          一支队 三个人 五小时 十道题 一场代码的较量!
        </p>
        <Button
          type="ghost"
          key="button"
          onClick={()=>goto('/applyTurning')}
          id={`${props.id}-buttonBlock0`}
        >
          直接报名
        </Button>
      </QueueAnim>
    </Element>);

    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <BannerAnim
            key="banner"
          >
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          style={{ bottom: 40 }}
          key="icon"
        >
          <span style={{fontSize: 10}}>第四届ACM 图灵杯团队赛</span>
          <br />
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

export default BannerLeft;

