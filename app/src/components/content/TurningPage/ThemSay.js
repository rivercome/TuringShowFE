import React from 'react';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'them-say',
  };

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<li
      key={i}
      id={`${this.props.id}-${id}`}
    >
      <div className="content-wrapper">
        <span>{item.content}</span>
        <p>{item.author}</p>
      </div>
    </li>);
  }

  getEnterAnim = (e, isMode) => {
    const index = e.index;
    const delay = isMode ? index * 50 + 200 : index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const dataArray = [
      { content: 'ACM-ICPC不只一项比赛，还是一个活动。她的意义就想篮球的意义一样，提供一个场景，让喜好的人去发掘自己的潜力。', author: 'AugmentC' },
      { content: 'I have a dream，a AC dream. I have a dream，a AK dream.', author: '匿名者' },
      { content: '个人认为意义在于结识了一堆优秀的本科生，找到了未来的方向，锻炼了代码和思维，这些都是别人得不到的。', author: '匿名者' },
      { content: '因为自己纯粹的喜欢，所以和一帮小伙伴玩咯！打比赛，太视利的话，就不是在打比赛……有句话是这样说的，ACM 不是雪中送炭，也不是救命稻草，只是锦上添花……', author: '王孟豪' },
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    return (
      <div
        {...props}
        className="content-template-wrapper content-half-wrapper them-say-wrapper"
      >
        <OverPack
          className={`content-template ${props.className}`}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            ACM 的意义

          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            component="p"
            key="p"
            reverseDelay={300}
            id={`${props.id}-p`}
          >
            来自知乎用户的回答
            <br />
          </TweenOne>
          <TweenOneGroup
            className={`${props.className}-img-wrapper`}
            component="ul"
            key="ul"
            enter={(e) => {
              return this.getEnterAnim(e, isMode)
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
            id={`${props.id}-ul`}
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}


export default Content;
