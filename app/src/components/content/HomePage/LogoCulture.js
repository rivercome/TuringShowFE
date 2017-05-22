import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import acmA from '../../../static/images/acm_a.png'
import acmC from '../../../static/images/acm_c.png'
import acmM from '../../../static/images/acm_m.png'
class LogoCulture extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'logo-culture',
  };

  getBlockChildren = (item, i) =>(
    <li key={i} id={`${this.props.id}-block${i}`}>
      <div className="icon">
        <img src={item.icon} width="100%" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>);

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const dataSource = [
      { icon: acmA, title: '思考', content: '遇到问题先想想' },
      { icon: acmC, title: '想通了', content: '灵光一闪思路现' },
      { icon: acmM, title: 'AC', content: '完成代码 AC' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
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
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            ICPC logo 文化
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id={`${props.id}-contentWrapper`}
          >
            {listChildren}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default LogoCulture;
