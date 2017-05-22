import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Footer extends React.Component {

  static defaultProps = {
    className: 'footer',
  };

  render() {
    const props = { ...this.props };
    delete props.isMode;
    return (
      <OverPack
        playScale={0.05}
        className="footer"
      >
        <TweenOne
          animation={{y: '+=30', opacity: 0, type: 'from'}}
          key="footer"
        >
        <span id={`${props.id}-content`}>
          Copyright © 2017 ACMCLUB  Powered By <a href="http://outxu.cn">out_xu</a>.
        </span>
        </TweenOne>
      </OverPack>
    );
  }
}

export default Footer;
