import React, { PropTypes } from 'react'
import { Button, Icon } from 'antd'
import {Link} from 'react-router'
import QueueAnim from 'rc-queue-anim'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import 'rc-banner-anim/assets/index.css'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import goto from '../../../utils/goto'
import logoOracle from '../../../static/images/acm_logo_long_small.png'
import coorper1 from '../../../static/images/logo-2-small.png'
import coorper2 from '../../../static/images/zanzhu1.png'
import coorper3 from '../../../static/images/zanzhu2.png'
import coorper4 from '../../../static/images/zanzhu4.png'




const BgElement = Element.BgElement
class BannerLeft extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.object,
    id: PropTypes.string,
  }

  static defaultProps = {
    className: 'banner-left',
  }

  render () {
    const props = {...this.props}
    const isMode = props.isMode
    delete props.isMode
    const follow = !isMode ? {
      delay: 1000,
      minMove: 0.1,
      data: [
        {id: 'bg$0', value: 15, bgPosition: '50%', type: ['backgroundPositionX']},
        {id: `${props.id}-wrapperBlock0`, value: -15, type: 'x'},
      ],
    } : null
    const childrenToRender = (<Element
      key="0"
      prefixCls="banner-user-elem"
      followParallax={follow}
    >
      <BgElement
        className="bg bg0"
        key="bg"
        id="bg$0"
        scrollParallax={{y: 300}}
      />

      <QueueAnim
        type={['bottom', 'top']} delay={200}
        className={`${props.className}-title`}
        key="text"
        id={`${props.id}-wrapperBlock0`}
      >
        <img src={logoOracle} style={{maxWidth: 200}}/>



        <br />
          <span
            className="logo"
            key="logo"
            id={`${props.id}-titleBlock0`}
            style={{fontSize: 20}}
          >
          第五届『图灵杯』
          <br />
          NEUQ-ACM程序设计竞赛(个人赛)暨
          <br />
          第九届“蓝桥杯”（软件组）校内选拔赛
          <br />
        </span>
        <p
          key="content"
          id={`${props.id}-contentBlock0`}
        >
          {/*<Link to="/rule">更有创新赛制</Link>*/}
          <br />
          <span style={{fontSize: 20}}>12月3日12：00等你来战！</span>
          <br />

          本次比赛福利多多
         <ul>
          <li>
          <br />
          冠，亚，季军机械键盘
          <br />
          校级奖项学分奖励
          <br />
          最强班级超巨型零食大礼包
          </li>
         </ul>
        </p>
        <Button
          type="ghost"
          key="button"
          size="large"
          style={{marginRight: 20}}
          onClick={() => goto('/rule')}
          id={`${props.id}-buttonBlock0`}
        >
          报名现场赛
        </Button>
        <Button
          type="danger"
          ghost size='large'
          key="button-online"
          id={`${props.id}-button-online`}
          onClick={() => goto('/rule')}>
          报名网络赛
        </Button>
        <br />
        <br />
        <Button
          type="danger"
          key="button-newrule"
          size="large"
          style={{marginRight: 20}}
          onClick={() => goto('/rule')}
        >
          了解新赛制
        </Button>

        <Button
          type="danger"
          key="button-intonewoj"
          size="large"

          // onClick={() => goto('/TuringFeedback')}
          id={`${props.id}-buttonBlock0`}
        >
          <a href="http://newoj.acmclub.cn">新 OJ 入口</a>
        </Button>
        <br />
        <span
          className="logo"
          key="logo_picture"
          id={`${props.id}-titleBlock0`}
          style={{fontSize: 20}}
        >
          <br />
          赞助单位
        </span>
        <img src={coorper1} style={{maxWidth: 70}}/>&nbsp;
        <img src={coorper2} style={{maxWidth: 30}}/>&nbsp;
        <img src={coorper3} style={{maxWidth: 30}}/>&nbsp;
        <img src={coorper4} style={{maxWidth: 30}}/>

      </QueueAnim>
    </Element>)

    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{opacity: 0, type: 'from'}}
          leave={{opacity: 0}}
          component=""
        >

          <BannerAnim
            key="banner"
          >
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
        {/*<TweenOne*/}
          {/*animation={{y: '-=20', yoyo: true, repeat: -1, duration: 1000}}*/}
          {/*className={`${props.className}-icon`}*/}
          {/*style={{bottom: 10}}*/}
          {/*key="icon"*/}
        {/*>*/}
          {/*<br />*/}
          {/*<Icon type="down" />*/}
        {/*</TweenOne>*/}
      </OverPack>
    )
  }
}

export default BannerLeft

