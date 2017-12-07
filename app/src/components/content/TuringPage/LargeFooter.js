import React from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import acmLongLogo from '../../../static/images/acm_logo_long_small.png'
import scienceLogo from '../../../static/images/science-logo.png'
import coorper0 from '../../../static/images/zanzhu0.png'
// import coorper2 from '../../../static/images/zanzhu2.png'
// import coorper3 from '../../../static/images/zanzhu3.png'
// import coorper4 from '../../../static/images/zanzhu4.png'




class LargeFooter extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
  }

  static defaultProps = {
    className: 'large-footer',
  }

  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item)
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim()
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i)
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          <a href={links[ii]} target="_blank">
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </a>
        </li>)
      })
    return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
      <h2>{data.title}</h2>
      <ul>
        {content}
      </ul>
    </li>)
  }

  render () {
    const props = {...this.props}
    const type = props.type
    const isMode = props.isMode
    delete props.isMode
    const logoContent = {img: acmLongLogo, content: 'ACM 俱乐部\n代码改变世界', contentLink: 'http://www.acmclub.cn\n'}
    const logoContent2 = {img: scienceLogo, content: 'ACM 俱乐部\n代码改变世界', contentLink: 'http://www.acmclub.cn\n'}

    const dataTuring = [
      {
        title: '主办单位',
        content: '计算机与通信工程学院\n大学生创新创业中心',
        contentLink: 'http://jsjytx.neuq.edu.cn\nhttp://cxcyzx.neuq.edu.cn'
      },
      {
        title: '承办单位',
        content: '计算机与通信工程学院团委学生会\n计算机与通信工程学院创新创业协会\n东北大学秦皇岛分校ACM俱乐部',
        contentLink: 'http://jsjytx.neuq.edu.cn\nhttp://jsjytx.neuq.edu.cn\nhttp://www.acmclub.cn'
      }
    ]
    const turingChildrenToRender = dataTuring.map(this.getLiChildren)
    return (<OverPack
      {...props}
      playScale={isMode ? 0.5 : 0.2}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse id={`${props.id}-ul`}>
        <li key="logo" id={`${props.id}-logo`}>
          {type !== 'turing' &&
          <a href="http://www.acmclub.cn/">
            <p className="logo">
              <img src={logoContent2.img} width="100%" />
            </p>
            <br />
          </a>
          }
          <a href="#">
            <p className="logo">
              <img src={logoContent.img} width="100%" />
            </p>
            <p>{logoContent.content}</p>
          </a>
        </li>

        { turingChildrenToRender }
        <li key={`${this.props.id}-block`} id={`${this.props.id}-block`}>
          <h2>赞助单位</h2>
              <img width={220} src={coorper0} />
              <br />
          甲骨文股份有限公司
          <br />
          国投盈信秦皇岛科技有限公司
          <br />
          秦皇岛数据产业研究院有限公司
          <br />
          惠达教育
          <br />
              {/*<img width={60} src={coorper3} />*/}
              {/*<br />*/}

        </li>
        <li key={'cooper'} id={`${this.props.id}-cooper`}>
          {/*<h2> 赞助单位</h2>*/}
          {/*<ul>*/}
            {/*<li>*/}
              {/*<img width={70} src={coorper2} />*/}
              {/*<br />*/}


            {/*</li>*/}
            {/*<li>*/}
              {/*<img width={80} src={coorper4} />*/}
              {/*<br />*/}


            {/*</li>*/}
          {/*</ul>*/}
        </li>

      </QueueAnim>
      <TweenOne
        animation={{y: '+=30', opacity: 0, type: 'from'}}
        key="copyright"
        className="copyright"
        id={`${props.id}-content`}
      >
        <span>
          Copyright © 2017 ACMCLUB & 不洗碗工作室 Power By <a href="https://motion.ant.design/">Ant-Motion</a>.
        </span>
      </TweenOne>
    </OverPack>)
  }
}

export default LargeFooter
